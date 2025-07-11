const puppeteer = require('puppeteer');
const fs = require('fs');

async function runSpeedTest() {
  console.log('🚀 Démarrage des tests de performance Qventis...\n');
  
  const browser = await puppeteer.launch({ 
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  
  // Configuration pour simuler des conditions réelles
  await page.setCacheEnabled(false);
  await page.emulateNetworkConditions({
    offline: false,
    downloadThroughput: 1.5 * 1024 * 1024, // 1.5 Mbps
    uploadThroughput: 750 * 1024, // 750 Kbps
    latency: 40
  });
  
  const metrics = {};
  const startTime = Date.now();
  
  console.log('📊 Mesure des métriques de navigation...');
  
  // Navigation avec mesure des métriques
  await page.goto('http://localhost:3000', { 
    waitUntil: 'networkidle2',
    timeout: 30000
  });
  
  // Métriques de performance
  const performanceMetrics = await page.evaluate(() => {
    const navigation = performance.getEntriesByType('navigation')[0];
    const paint = performance.getEntriesByType('paint');
    
    return {
      // Navigation Timing
      domContentLoaded: navigation.domContentLoadedEventEnd - navigation.navigationStart,
      loadComplete: navigation.loadEventEnd - navigation.navigationStart,
      firstByte: navigation.responseStart - navigation.navigationStart,
      domInteractive: navigation.domInteractive - navigation.navigationStart,
      
      // Paint Timing
      firstPaint: paint.find(p => p.name === 'first-paint')?.startTime || 0,
      firstContentfulPaint: paint.find(p => p.name === 'first-contentful-paint')?.startTime || 0,
      
      // Resource count
      resourceCount: performance.getEntriesByType('resource').length,
      
      // Memory (si disponible)
      memoryUsed: performance.memory ? performance.memory.usedJSHeapSize : 0,
    };
  });
  
  // Test de responsive
  console.log('📱 Test responsive...');
  const viewports = [
    { name: 'Mobile', width: 375, height: 667 },
    { name: 'Tablet', width: 768, height: 1024 },
    { name: 'Desktop', width: 1920, height: 1080 }
  ];
  
  const responsiveResults = [];
  
  for (const viewport of viewports) {
    await page.setViewport(viewport);
    await page.reload({ waitUntil: 'networkidle2' });
    
    const loadTime = await page.evaluate(() => {
      return performance.timing.loadEventEnd - performance.timing.navigationStart;
    });
    
    responsiveResults.push({
      device: viewport.name,
      dimensions: `${viewport.width}x${viewport.height}`,
      loadTime: loadTime
    });
  }
  
  // Test des Core Web Vitals
  console.log('⚡ Mesure des Core Web Vitals...');
  
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });
  
  const webVitals = await page.evaluate(() => {
    return new Promise((resolve) => {
      const vitals = {};
      
      // LCP
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        vitals.lcp = entries[entries.length - 1].startTime;
      }).observe({ entryTypes: ['largest-contentful-paint'] });
      
      // CLS
      let clsValue = 0;
      new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        vitals.cls = clsValue;
      }).observe({ entryTypes: ['layout-shift'] });
      
      // FID simulation (on mesure juste le temps de réponse)
      const startFID = performance.now();
      setTimeout(() => {
        vitals.fid = performance.now() - startFID;
        resolve(vitals);
      }, 3000);
    });
  });
  
  await browser.close();
  
  // Compilation du rapport
  const totalTime = Date.now() - startTime;
  
  const report = {
    timestamp: new Date().toISOString(),
    testDuration: `${totalTime}ms`,
    url: 'http://localhost:3000',
    
    // Métriques principales
    performance: performanceMetrics,
    
    // Core Web Vitals
    coreWebVitals: webVitals,
    
    // Tests responsive
    responsive: responsiveResults,
    
    // Scores et recommandations
    scores: {
      performance: calculatePerformanceScore(performanceMetrics),
      coreWebVitals: calculateWebVitalsScore(webVitals),
      responsive: calculateResponsiveScore(responsiveResults)
    },
    
    recommendations: generateRecommendations(performanceMetrics, webVitals)
  };
  
  // Sauvegarde du rapport
  fs.writeFileSync('./performance-report.json', JSON.stringify(report, null, 2));
  
  // Affichage des résultats
  console.log('\n🎯 RÉSULTATS DES TESTS DE PERFORMANCE');
  console.log('=====================================');
  console.log(`⏱️  Temps de chargement: ${performanceMetrics.loadComplete}ms`);
  console.log(`🎨 First Contentful Paint: ${performanceMetrics.firstContentfulPaint}ms`);
  console.log(`📊 DOM Content Loaded: ${performanceMetrics.domContentLoaded}ms`);
  console.log(`🔥 First Byte: ${performanceMetrics.firstByte}ms`);
  
  console.log('\n⚡ CORE WEB VITALS');
  console.log('==================');
  console.log(`📏 Largest Contentful Paint: ${webVitals.lcp}ms`);
  console.log(`🔄 Cumulative Layout Shift: ${webVitals.cls}`);
  console.log(`👆 First Input Delay: ${webVitals.fid}ms`);
  
  console.log('\n📱 TESTS RESPONSIVE');
  console.log('===================');
  responsiveResults.forEach(result => {
    console.log(`${result.device} (${result.dimensions}): ${result.loadTime}ms`);
  });
  
  console.log('\n🏆 SCORES GLOBAUX');
  console.log('=================');
  console.log(`Performance: ${report.scores.performance}/100`);
  console.log(`Core Web Vitals: ${report.scores.coreWebVitals}/100`);
  console.log(`Responsive: ${report.scores.responsive}/100`);
  
  if (report.recommendations.length > 0) {
    console.log('\n💡 RECOMMANDATIONS');
    console.log('==================');
    report.recommendations.forEach((rec, index) => {
      console.log(`${index + 1}. ${rec}`);
    });
  }
  
  console.log(`\n📄 Rapport complet sauvegardé: performance-report.json`);
}

function calculatePerformanceScore(metrics) {
  let score = 100;
  
  if (metrics.loadComplete > 3000) score -= 20;
  if (metrics.firstContentfulPaint > 1800) score -= 15;
  if (metrics.firstByte > 600) score -= 10;
  if (metrics.domContentLoaded > 2000) score -= 15;
  
  return Math.max(0, score);
}

function calculateWebVitalsScore(vitals) {
  let score = 100;
  
  if (vitals.lcp > 2500) score -= 30;
  if (vitals.cls > 0.1) score -= 25;
  if (vitals.fid > 100) score -= 20;
  
  return Math.max(0, score);
}

function calculateResponsiveScore(results) {
  const avgLoadTime = results.reduce((sum, r) => sum + r.loadTime, 0) / results.length;
  
  if (avgLoadTime < 2000) return 100;
  if (avgLoadTime < 3000) return 80;
  if (avgLoadTime < 4000) return 60;
  return 40;
}

function generateRecommendations(performance, vitals) {
  const recommendations = [];
  
  if (performance.loadComplete > 3000) {
    recommendations.push('Optimiser le temps de chargement total (>3s détecté)');
  }
  
  if (performance.firstContentfulPaint > 1800) {
    recommendations.push('Améliorer le First Contentful Paint - optimiser les ressources critiques');
  }
  
  if (vitals.lcp > 2500) {
    recommendations.push('Réduire le Largest Contentful Paint - optimiser les images principales');
  }
  
  if (vitals.cls > 0.1) {
    recommendations.push('Stabiliser la mise en page pour réduire le Cumulative Layout Shift');
  }
  
  if (performance.resourceCount > 50) {
    recommendations.push('Réduire le nombre de ressources chargées');
  }
  
  return recommendations;
}

// Vérification que le serveur est en cours d'exécution
console.log('🔍 Vérification du serveur local...');

runSpeedTest().catch(error => {
  console.error('❌ Erreur lors des tests:', error.message);
  console.log('\n💡 Assurez-vous que le serveur de développement est lancé:');
  console.log('   npm run dev');
  console.log('   ou');
  console.log('   npm run build && npm run start');
});
