'use server';

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

// Chemin vers les fichiers d'articles
const ARTICLES_PATH = path.join(process.cwd(), 'src/content/blog');

// Type pour les articles
export type ArticleType = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  views?: number;
  likes?: number;
  tags: string[];
  image: string;
  content: string;
  featured?: boolean;
};

/**
 * Récupère tous les fichiers MDX du dossier d'articles
 */
export async function getArticleFilePaths(): Promise<string[]> {
  return fs
    .readdirSync(ARTICLES_PATH)
    .filter(path => /\.mdx?$/.test(path));
}

/**
 * Récupère les métadonnées d'un article à partir de son slug
 */
export async function getArticleBySlug(slug: string): Promise<ArticleType | null> {
  try {
    const filePath = path.join(ARTICLES_PATH, `${slug}.mdx`);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    
    // Extraction des métadonnées et du contenu avec gray-matter
    const { data, content } = matter(fileContent);
    
    // Calcul du temps de lecture
    const readingStats = readingTime(content);
    
    return {
      id: data.id || slug,
      slug,
      title: data.title,
      excerpt: data.excerpt,
      category: data.category,
      author: data.author,
      date: data.date,
      readTime: data.readTime || `${Math.ceil(readingStats.minutes)} min`,
      views: data.views || 0,
      likes: data.likes || 0,
      tags: data.tags || [],
      image: data.image || '/api/placeholder/600/400',
      content: content,
      featured: data.featured || false,
    };
    
  } catch (error) {
    console.error(`Error loading article ${slug}:`, error);
    return null;
  }
}



/**
 * Récupère tous les articles avec leurs métadonnées
 */
export async function getAllArticles(): Promise<ArticleType[]> {
  const filePaths = await getArticleFilePaths();
  
  const articles = await Promise.all(filePaths.map(async (filePath) => {
    const slug = filePath.replace(/\.mdx?$/, '');
    return await getArticleBySlug(slug);
  }));
  
  return articles
    .filter((article): article is ArticleType => article !== null)
    .sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));
}

/**
 * Récupère les articles similaires (même catégorie, tags similaires)
 */
export async function getRelatedArticles(currentArticle: ArticleType, count: number = 3): Promise<ArticleType[]> {
  const allArticles = await getAllArticles();
  
  return allArticles
    .filter((article: ArticleType) => article.slug !== currentArticle.slug)
    .sort((a: ArticleType, b: ArticleType) => {
      // Prioriser les articles de la même catégorie
      if (a.category === currentArticle.category && b.category !== currentArticle.category) {
        return -1;
      }
      if (b.category === currentArticle.category && a.category !== currentArticle.category) {
        return 1;
      }
      
      // Ensuite, prioriser par nombre de tags en commun
      const aCommonTags = a.tags.filter((tag: string) => currentArticle.tags.includes(tag)).length;
      const bCommonTags = b.tags.filter((tag: string) => currentArticle.tags.includes(tag)).length;
      
      if (aCommonTags > bCommonTags) return -1;
      if (aCommonTags < bCommonTags) return 1;
      
      // Enfin, prioriser par date
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    })
    .slice(0, count);
}

/**
 * Récupère les articles par catégorie
 */
export async function getArticlesByCategory(category: string): Promise<ArticleType[]> {
  const allArticles = await getAllArticles();
  return allArticles.filter((article: ArticleType) => article.category === category);
}

/**
 * Récupère toutes les catégories avec le nombre d'articles
 */
export async function getAllCategories(): Promise<{ name: string; count: number; slug: string }[]> {
  const allArticles = await getAllArticles();
  const categories = allArticles.reduce<Record<string, number>>((acc: Record<string, number>, article: ArticleType) => {
    const category = article.category;
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});
  
  return Object.entries(categories).map(([name, count]: [string, number]) => ({
    name,
    count,
    slug: name.toLowerCase().replace(/\s+/g, '-'),
  }));
}
