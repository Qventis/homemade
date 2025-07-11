'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { 
  CalendarDaysIcon,
  ClockIcon,
  ArrowRightIcon,
  EyeIcon,
  HeartIcon
} from '@heroicons/react/24/outline';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

// Définition de l'interface Article ici en cas de problème d'importation
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

// Props pour passer les articles en tant que props
type BlogGridProps = {
  featuredArticles: Article[];
  articles: Article[];
};

export function BlogGrid({ featuredArticles, articles }: BlogGridProps) {

  const truncate = (str: string, n: number): string => {
    return str.length > n ? str.slice(0, n) + "..." : str;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="blog-articles" className="py-20 bg-gradient-to-b from-qventis-gray-50 to-qventis-white">
      <Container>

        {/* All Articles Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl font-display font-bold text-qventis-gray-900 mb-8">
            Tous nos articles
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link href={`/blog/${article.slug}`}>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-qventis-gray-100 hover:border-qventis-coral/30 h-full">
                    
                    {/* Image */}
                    <div className="relative">
                      <div className="aspect-video bg-gradient-to-br from-qventis-coral/10 to-qventis-coral/5 flex items-center justify-center">
                        <div className="text-4xl">📄</div>
                      </div>
                      
                      {/* Category */}
                      <div className="absolute top-3 left-3">
                        <span className="px-2 py-1 bg-white/90 backdrop-blur-sm text-qventis-coral text-xs font-semibold rounded-lg">
                          {article.category}
                        </span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      
                      {/* Meta */}
                      <div className="flex items-center gap-3 text-xs text-qventis-gray-500 mb-3">
                        <span>{formatDate(article.date)}</span>
                        <span>•</span>
                        <span>{article.readTime}</span>
                        <span>•</span>
                        <span>{article.views} vues</span>
                      </div>
                      
                      {/* Title */}
                      <h4 className="font-display font-bold text-qventis-gray-900 mb-3 group-hover:text-qventis-coral transition-colors line-clamp-2">
                        {article.title}
                      </h4>
                      
                      {/* Excerpt */}
                      <p className="text-sm text-qventis-gray-600 leading-relaxed mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                      
                      {/* Author */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-qventis-coral/20 rounded-full flex items-center justify-center">
                            <span className="text-xs font-semibold text-qventis-coral">
                              {article.author.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <span className="text-xs text-qventis-gray-600">
                            {article.author}
                          </span>
                        </div>
                        
                        <ArrowRightIcon className="w-4 h-4 text-qventis-coral group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            variant="ghost"
            size="lg"
            className="border border-qventis-gray-300 hover:border-qventis-coral"
          >
            Charger plus d'articles
          </Button>
        </motion.div>

      </Container>
    </section>
  );
}
