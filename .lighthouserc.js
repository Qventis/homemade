module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:3000'],
      startServerCommand: 'npm run start',
      numberOfRuns: 3,
    },
    assert: {
      preset: 'lighthouse:recommended',
      assertions: {
        // Core Web Vitals - Seuils stricts
        'largest-contentful-paint': ['error', { maxNumericValue: 2500 }],
        'first-contentful-paint': ['error', { maxNumericValue: 1800 }],
        'cumulative-layout-shift': ['error', { maxNumericValue: 0.1 }],
        'total-blocking-time': ['error', { maxNumericValue: 300 }],
        
        // Performance générale
        'speed-index': ['error', { maxNumericValue: 3400 }],
        'interactive': ['error', { maxNumericValue: 3800 }],
        
        // SEO - Score minimum requis
        'seo-score': ['error', { minScore: 0.9 }],
        'meta-description': 'error',
        'document-title': 'error',
        
        // Accessibilité
        'accessibility-score': ['error', { minScore: 0.9 }],
        'color-contrast': 'error',
        'image-alt': 'error',
        
        // Bonnes pratiques
        'best-practices-score': ['error', { minScore: 0.85 }],
        'uses-https': 'error',
        'is-on-https': 'error',
        
        // PWA (optionnel)
        'pwa-score': ['warn', { minScore: 0.7 }],
        
        // Ressources
        'unused-css-rules': ['warn', { maxLength: 10 }],
        'unused-javascript': ['warn', { maxLength: 10 }],
        'modern-image-formats': 'warn',
        'efficient-animated-content': 'warn',
        
        // Performance réseau
        'uses-text-compression': 'error',
        'uses-responsive-images': 'warn',
        'offscreen-images': 'warn',
      }
    },
    upload: {
      target: 'temporary-public-storage',
    },
    server: {
      port: 9001,
      storage: './lighthouse-results',
    },
  },
};
