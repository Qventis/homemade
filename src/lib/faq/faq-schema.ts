/**
 * Génération des données structurées pour la FAQ
 * Format FAQ selon Schema.org
 */

// Type pour les questions-réponses
interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

/**
 * Génère les données structurées JSON-LD pour une FAQ
 * Format FAQPage selon Schema.org
 */
export function generateFAQSchema(faqItems: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqItems.map(item => ({
      '@type': 'Question',
      'name': item.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': item.answer
      }
    }))
  };
}

/**
 * Génère les données structurées JSON-LD pour les catégories de FAQ
 * Format ItemList selon Schema.org
 */
export function generateFAQCategoriesSchema(categories: string[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'itemListElement': categories.map((category, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': category,
      'item': {
        '@type': 'FAQSection',
        'name': category,
        'url': `https://qventis.com/faq#${category.toLowerCase().replace(/\s+/g, '-')}`
      }
    }))
  };
}

/**
 * Génère les données structurées Breadcrumb pour la page FAQ
 * Format BreadcrumbList selon Schema.org
 */
export function generateFAQBreadcrumbSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Accueil',
        'item': 'https://qventis.com'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'FAQ',
        'item': 'https://qventis.com/faq'
      }
    ]
  };
}

// FAQ données d'exemple pour référence
export const exampleFAQItems: FAQItem[] = [
  {
    question: "Comment Qventis peut aider mon entreprise avec l'IA ?",
    answer: "Qventis propose des solutions d'IA sur-mesure adaptées aux besoins spécifiques de votre entreprise, de l'automatisation de processus à l'analyse prédictive et aux agents conversationnels avancés.",
    category: "Intelligence Artificielle"
  },
  {
    question: "Quel est le délai de réalisation d'un site web professionnel ?",
    answer: "Le délai moyen pour un site web professionnel est de 4 à 8 semaines, selon la complexité du projet, les fonctionnalités requises et la réactivité du client dans la fourniture des contenus et validations.",
    category: "Développement Web"
  },
  {
    question: "Comment protégez-vous les données dans vos projets d'analyse ?",
    answer: "Nous appliquons les standards les plus stricts en matière de sécurité des données : chiffrement de bout en bout, anonymisation des données sensibles, accès limité, et respect complet du RGPD dans tous nos projets d'analyse.",
    category: "Data Analytics"
  }
];
