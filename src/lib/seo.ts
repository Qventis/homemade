// Configuration SEO pour Qventis
export const seoConfig = {
  // Meta tags principaux
  title: "Qventis - Experts IA, Data Analytics & Développement Web | Agence Digitale",
  description: "Qventis transforme votre entreprise avec l'IA, la data analytics et des sites web performants. 250+ projets réussis, 4.9/5 étoiles. Devis gratuit sous 24h.",
  keywords: [
    "intelligence artificielle",
    "IA sur-mesure",
    "data analytics",
    "développement web",
    "agents IA",
    "solutions digitales",
    "transformation numérique",
    "développement logiciel",
    "analyse de données",
    "sites web professionnels"
  ],
  
  // Open Graph / Social Media
  openGraph: {
    type: "website",
    siteName: "Qventis - Agence Digitale IA & Data",
    title: "Qventis - Experts IA, Data Analytics & Développement Web",
    description: "Transformez votre entreprise avec nos solutions IA, data analytics et développement web. 250+ projets réussis, expertise reconnue.",
    url: "https://qventis.com",
    images: [
      {
        url: "https://qventis.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Qventis - Solutions IA et Data Analytics"
      }
    ]
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@qventis",
    creator: "@qventis",
    title: "Qventis - Experts IA & Data Analytics",
    description: "Solutions IA sur-mesure, data analytics et développement web. 250+ projets réussis.",
    image: "https://qventis.com/twitter-card.jpg"
  },
  
  // Données structurées (JSON-LD)
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Qventis",
    "description": "Agence digitale spécialisée en intelligence artificielle, data analytics et développement web",
    "url": "https://qventis.com",
    "logo": "https://qventis.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+33-1-23-45-67-89",
      "contactType": "customer service",
      "email": "contact@qventis.com",
      "availableLanguage": ["French", "English"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Avenue des Champs-Élysées",
      "addressLocality": "Paris",
      "postalCode": "75008",
      "addressCountry": "FR"
    },
    "sameAs": [
      "https://www.linkedin.com/company/qventis",
      "https://twitter.com/qventis",
      "https://github.com/qventis"
    ],
    "founder": {
      "@type": "Person",
      "name": "Équipe Qventis"
    },
    "foundingDate": "2019",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "offers": [
      {
        "@type": "Service",
        "serviceType": "Intelligence Artificielle",
        "description": "Développement d'agents IA sur-mesure"
      },
      {
        "@type": "Service", 
        "serviceType": "Data Analytics",
        "description": "Analyse de données et business intelligence"
      },
      {
        "@type": "Service",
        "serviceType": "Développement Web",
        "description": "Sites web professionnels et applications"
      }
    ]
  },

  // Local SEO
  localBusiness: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Qventis",
    "image": "https://qventis.com/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "89 rue berbisey",
      "addressLocality": "Dijon",
      "postalCode": "21000",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "48.8736",
      "longitude": "2.2950"
    },
    "telephone": "+33-1-23-45-67-89",
    "openingHours": "Mo-Fr 09:00-18:00",
    "priceRange": "€€€"
  }
};

// Fonction pour générer les meta tags
export function generateMetaTags(pageTitle?: string, pageDescription?: string) {
  return {
    title: pageTitle || seoConfig.title,
    description: pageDescription || seoConfig.description,
    keywords: seoConfig.keywords.join(", "),
    robots: "index, follow",
    viewport: "width=device-width, initial-scale=1",
    charset: "utf-8",
    language: "fr-FR",
    author: "Qventis",
    canonical: seoConfig.openGraph.url,
    
    // Open Graph
    "og:type": seoConfig.openGraph.type,
    "og:site_name": seoConfig.openGraph.siteName,
    "og:title": pageTitle || seoConfig.openGraph.title,
    "og:description": pageDescription || seoConfig.openGraph.description,
    "og:url": seoConfig.openGraph.url,
    "og:image": seoConfig.openGraph.images[0].url,
    "og:image:width": seoConfig.openGraph.images[0].width,
    "og:image:height": seoConfig.openGraph.images[0].height,
    "og:locale": "fr_FR",
    
    // Twitter
    "twitter:card": seoConfig.twitter.card,
    "twitter:site": seoConfig.twitter.site,
    "twitter:creator": seoConfig.twitter.creator,
    "twitter:title": pageTitle || seoConfig.twitter.title,
    "twitter:description": pageDescription || seoConfig.twitter.description,
    "twitter:image": seoConfig.twitter.image,
  };
}
