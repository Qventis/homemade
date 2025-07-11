'use client';

import { useEffect } from 'react';

// Déclaration des types pour gtag
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js',
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
    dataLayer: any[];
  }
}

// ID Google Analytics
export const GA_TRACKING_ID = 'G-HTG5CBVHTD';

// Fonction pour envoyer des événements à Google Analytics
export const gtag = (
  command: 'config' | 'event' | 'js',
  targetId: string | Date,
  config?: Record<string, any>
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag(command, targetId, config);
  }
};

// Fonction pour tracker une page vue
export const trackPageView = (url: string) => {
  gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

// Fonction pour tracker un événement personnalisé
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Fonction pour tracker les conversions (formulaires, téléchargements, etc.)
export const trackConversion = (eventName: string, parameters?: Record<string, any>) => {
  gtag('event', eventName, {
    ...parameters,
  });
};

// Hook pour tracker automatiquement les changements de page
export const usePageTracking = () => {
  useEffect(() => {
    const handleRouteChange = () => {
      trackPageView(window.location.pathname + window.location.search);
    };

    // Track initial page load
    trackPageView(window.location.pathname + window.location.search);

    // Track subsequent page changes (pour SPA)
    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);
};

// Composant Analytics (optionnel, si vous voulez l'utiliser dans les pages)
export function Analytics() {
  usePageTracking();
  return null;
}

// Fonctions utilitaires pour tracker des actions spécifiques à Qventis
export const trackQventisEvents = {
  // Tracker les clics sur les CTA
  trackCTAClick: (ctaName: string, location: string) => {
    trackEvent('cta_click', 'engagement', `${ctaName}_${location}`);
  },

  // Tracker les demandes de devis
  trackQuoteRequest: (serviceType: string) => {
    trackConversion('quote_request', {
      service_type: serviceType,
      event_category: 'conversion',
    });
  },

  // Tracker les téléchargements
  trackDownload: (fileName: string) => {
    trackEvent('download', 'engagement', fileName);
  },

  // Tracker les visites de sections
  trackSectionView: (sectionName: string) => {
    trackEvent('section_view', 'engagement', sectionName);
  },

  // Tracker les soumissions de formulaire
  trackFormSubmission: (formName: string) => {
    trackConversion('form_submission', {
      form_name: formName,
      event_category: 'conversion',
    });
  },
};
