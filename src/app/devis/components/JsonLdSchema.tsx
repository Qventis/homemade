'use client';

import { useEffect } from 'react';

export default function JsonLdSchema() {
  useEffect(() => {
    // Insertion du script JSON-LD dans le head du document
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Services digitaux Qventis',
      description: 'Devis personnalisés pour sites web, IA, data analytics et développement sur-mesure',
      provider: {
        '@type': 'Organization',
        name: 'Qventis',
        url: 'https://qventis.com'
      },
      serviceType: ['Création de sites web', 'Développement d\'agents IA', 'Data Analytics', 'Développement sur-mesure', 'SEO'],
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        url: 'https://qventis.com/devis'
      },
      areaServed: 'FR',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Services Qventis',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Création de sites web professionnels'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Développement d\'agents IA sur-mesure'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Data Analytics et analyse de données'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Solutions informatiques adaptées'
            }
          }
        ]
      }
    });
    document.head.appendChild(script);

    // Nettoyage du script lors du démontage du composant
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null; // Ce composant ne rend rien visuellement
}
