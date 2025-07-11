import { Article } from './types';

/**
 * Génère les données structurées JSON-LD pour un article de blog
 * Format BlogPosting selon Schema.org
 */
export function generateArticleSchema(article: Article) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'headline': article.title,
    'description': article.excerpt,
    'image': article.image,
    'author': {
      '@type': 'Person',
      'name': article.author
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Qventis',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://qventis.com/logo.png'
      }
    },
    'datePublished': article.date,
    'dateModified': article.date, // Idéalement, utilisez une date de modification si disponible
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': `https://qventis.com/blog/${article.slug}`
    },
    'keywords': article.tags.join(', '),
    'articleSection': article.category,
    'wordCount': article.content.split(' ').length,
    'timeRequired': article.readTime
  };
}

/**
 * Génère les données structurées JSON-LD pour la page principale du blog
 * Format Blog selon Schema.org
 */
export function generateBlogSchema(articlesCount: number) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    'name': 'Blog Qventis - Actualités sur l\'IA, la Data et le Web',
    'description': 'Découvrez nos articles et analyses sur les dernières tendances en intelligence artificielle, data analytics et développement web.',
    'publisher': {
      '@type': 'Organization',
      'name': 'Qventis',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://qventis.com/logo.png'
      }
    },
    'url': 'https://qventis.com/blog',
    'inLanguage': 'fr-FR',
    'numberOfItems': articlesCount,
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://qventis.com/blog'
    }
  };
}

/**
 * Génère les données structurées JSON-LD pour la liste d'articles liés
 * Format ItemList selon Schema.org
 */
export function generateRelatedArticlesSchema(articles: Article[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'itemListElement': articles.map((article, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'item': {
        '@type': 'BlogPosting',
        'headline': article.title,
        'url': `https://qventis.com/blog/${article.slug}`,
        'author': {
          '@type': 'Person',
          'name': article.author
        },
        'datePublished': article.date,
        'image': article.image
      }
    }))
  };
}

/**
 * Génère les données structurées Breadcrumb pour un article de blog
 * Format BreadcrumbList selon Schema.org
 */
export function generateBreadcrumbSchema(article: Article) {
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
        'name': 'Blog',
        'item': 'https://qventis.com/blog'
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': article.title,
        'item': `https://qventis.com/blog/${article.slug}`
      }
    ]
  };
}
