// Monitoring des performances côté client - Version simplifiée
export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: Record<string, any> = {};

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  // Core Web Vitals
  measureCoreWebVitals() {
    if (typeof window === 'undefined') return;

    try {
      // Largest Contentful Paint (LCP)
      if ('PerformanceObserver' in window) {
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          if (entries.length > 0) {
            const lastEntry = entries[entries.length - 1];
            this.metrics.lcp = lastEntry.startTime;
            console.log('LCP:', lastEntry.startTime);
          }
        }).observe({ entryTypes: ['largest-contentful-paint'] });

        // Cumulative Layout Shift (CLS)
        let clsValue = 0;
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
              this.metrics.cls = clsValue;
              console.log('CLS:', clsValue);
            }
          });
        }).observe({ entryTypes: ['layout-shift'] });
      }
    } catch (error) {
      console.warn('Core Web Vitals monitoring failed:', error);
    }
  }

  // Navigation Timing simplifié
  measureNavigationTiming() {
    if (typeof window === 'undefined') return;

    try {
      window.addEventListener('load', () => {
        const perfData = performance.timing;
        const timings = {
          domContentLoaded: perfData.domContentLoadedEventEnd - perfData.navigationStart,
          windowLoad: perfData.loadEventEnd - perfData.navigationStart,
          firstByte: perfData.responseStart - perfData.navigationStart
        };

        console.log('Navigation Timings:', timings);
        this.metrics = { ...this.metrics, ...timings };
      });
    } catch (error) {
      console.warn('Navigation timing failed:', error);
    }
  }

  // Envoi des métriques
  sendMetrics() {
    if (Object.keys(this.metrics).length === 0) return;

    try {
      // Exemple avec Google Analytics
      if (typeof (window as any).gtag !== 'undefined') {
        (window as any).gtag('event', 'performance_metrics', {
          custom_parameter: this.metrics
        });
      }

      console.log('Performance Metrics:', this.metrics);
    } catch (error) {
      console.warn('Failed to send metrics:', error);
    }
  }

  // Rapport simplifié
  getPerformanceReport() {
    return {
      metrics: this.metrics,
      timestamp: new Date().toISOString()
    };
  }
}

// Hook React pour utiliser le monitoring
export function usePerformanceMonitor() {
  const monitor = PerformanceMonitor.getInstance();

  const startMonitoring = () => {
    monitor.measureCoreWebVitals();
    monitor.measureNavigationTiming();
  };

  const getReport = () => monitor.getPerformanceReport();
  const sendMetrics = () => monitor.sendMetrics();

  return { startMonitoring, getReport, sendMetrics };
}

// Initialisation automatique simplifiée
export function initPerformanceMonitoring() {
  if (typeof window === 'undefined') return;

  try {
    const monitor = PerformanceMonitor.getInstance();
    
    // Démarrage automatique
    monitor.measureCoreWebVitals();
    monitor.measureNavigationTiming();

    // Envoi des métriques après 10 secondes
    setTimeout(() => {
      monitor.sendMetrics();
    }, 10000);
  } catch (error) {
    console.warn('Performance monitoring initialization failed:', error);
  }
}
