// Types pour le système de blog basé sur MDX
export interface Article {
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
}
