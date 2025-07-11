// Configuration des métadonnées SEO globales
export const defaultMetadata = {
  title: 'Qventis | Agence digitale spécialisée en sites web, IA, data et solutions informatiques',
  description: 'Qventis est une agence digitale premium spécialisée dans la création de sites internet professionnels, le développement d\'agents IA sur-mesure, la data analytics et les solutions informatiques adaptées.',
  authors: [{ name: 'Qventis', url: 'https://qventis.com' }],
  creator: 'Qventis',
  publisher: 'Qventis',
  metadataBase: new URL('https://qventis.com'),
  alternates: {
    canonical: '/',
    languages: {
      'fr-FR': '/',
      'en-US': '/en'
    },
  },
  keywords: [
    'agence digitale', 'création site internet', 'développement web', 
    'agent IA', 'intelligence artificielle', 'data analytics', 
    'analyse de données', 'solutions informatiques', 'développement sur-mesure'
  ],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://qventis.com',
    title: 'Qventis | Agence digitale spécialisée en sites web, IA, data et solutions informatiques',
    description: 'Qventis est une agence digitale premium spécialisée dans la création de sites internet professionnels, le développement d\'agents IA sur-mesure, la data analytics et les solutions informatiques adaptées.',
    siteName: 'Qventis',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Qventis - Agence digitale premium'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Qventis | Agence digitale spécialisée en sites web, IA, data et solutions informatiques',
    description: 'Sites web professionnels, agents IA sur-mesure, data analytics et solutions informatiques adaptées.',
    creator: '@qventis',
    images: ['/images/twitter-image.jpg']
  },
  verification: {
    google: 'verification-code',
    yandex: 'verification-code'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1
    }
  }
};

// Métadonnées pour la section blog
export const blogMetadata = {
  ...defaultMetadata,
  title: 'Blog Qventis | Actualités sur le web, l\'IA, la data et les solutions IT',
  description: 'Découvrez nos articles sur les dernières tendances et innovations en développement web, intelligence artificielle, data analytics et solutions informatiques.',
  alternates: {
    canonical: '/blog',
    languages: {
      'fr-FR': '/blog',
      'en-US': '/en/blog'
    },
  },
  openGraph: {
    ...defaultMetadata.openGraph,
    title: 'Blog Qventis | Actualités sur le web, l\'IA, la data et les solutions IT',
    description: 'Découvrez nos articles sur les dernières tendances et innovations en développement web, intelligence artificielle, data analytics et solutions informatiques.',
    url: 'https://qventis.com/blog',
  },
  twitter: {
    ...defaultMetadata.twitter,
    title: 'Blog Qventis | Actualités web, IA, data et IT',
    description: 'Découvrez nos articles sur les dernières tendances en développement web, IA, data analytics et IT.',
  },
};

// Métadonnées pour la FAQ
export const faqMetadata = {
  ...defaultMetadata,
  title: 'FAQ Qventis | Réponses à vos questions sur nos services digitaux',
  description: 'Consultez notre FAQ pour obtenir des réponses à vos questions sur nos services de création de sites web, développement d\'IA, data analytics et solutions IT.',
  alternates: {
    canonical: '/faq',
    languages: {
      'fr-FR': '/faq',
      'en-US': '/en/faq'
    },
  },
  openGraph: {
    ...defaultMetadata.openGraph,
    title: 'FAQ Qventis | Réponses à vos questions sur nos services digitaux',
    description: 'Consultez notre FAQ pour obtenir des réponses à vos questions sur nos services de création de sites web, développement d\'IA, data analytics et solutions IT.',
    url: 'https://qventis.com/faq',
  },
  twitter: {
    ...defaultMetadata.twitter,
    title: 'FAQ Qventis | Questions fréquentes',
    description: 'Réponses à vos questions sur nos services de création de sites web, développement d\'IA, data analytics et solutions IT.',
  },
};

// Métadonnées pour la page de devis
export const devisMetadata = {
  ...defaultMetadata,
  title: 'Devis Qventis | Demandez un devis personnalisé pour votre projet digital',
  description: 'Obtenez rapidement un devis personnalisé pour votre site web, projet IA, data analytics ou développement sur-mesure. Réponse garantie sous 24h.',
  alternates: {
    canonical: '/devis',
    languages: {
      'fr-FR': '/devis',
      'en-US': '/en/quote'
    },
  },
  keywords: [
    'devis site web', 'tarif site internet', 'prix développement IA', 
    'coût data analytics', 'devis développement sur-mesure', 'tarification SEO',
    'estimation projet digital', 'devis agence digitale', 'tarif agent IA'
  ],
  openGraph: {
    ...defaultMetadata.openGraph,
    title: 'Devis Qventis | Demandez un devis personnalisé pour votre projet digital',
    description: 'Obtenez rapidement un devis personnalisé pour votre site web, projet IA, data analytics ou développement sur-mesure. Réponse garantie sous 24h.',
    url: 'https://qventis.com/devis',
    images: [
      {
        url: '/images/devis-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Qventis - Demandez votre devis personnalisé'
      }
    ]
  },
  twitter: {
    ...defaultMetadata.twitter,
    title: 'Devis Qventis | Demande de devis personnalisé',
    description: 'Demandez rapidement un devis pour votre site web, projet IA, data analytics ou développement sur-mesure.',
    images: ['/images/devis-twitter-image.jpg']
  },
};
