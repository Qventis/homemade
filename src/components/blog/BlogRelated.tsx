'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { 
  ClockIcon,
  EyeIcon,
  HeartIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  slug: string;
  author: string;
  date: string;
  readTime: string;
  views: number;
  likes: number;
  tags: string[];
  category: string;
}

interface BlogRelatedProps {
  currentArticleId: number;
  articles: Article[];
}

export function BlogRelated({ currentArticleId, articles }: BlogRelatedProps) {
  // Filtrer les articles similaires (exclure l'article actuel)
  const relatedArticles = articles
    .filter(article => article.id !== currentArticleId)
    .slice(0, 3);

  return (
    <section className="py-16 bg-qventis-gray-50/50">
      <Container>
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-qventis-gray-900 mb-4">
            Articles similaires
          </h2>
          <p className="text-lg text-qventis-gray-600 max-w-2xl mx-auto">
            Continuez votre lecture avec ces articles qui pourraient vous intéresser
          </p>
        </motion.div>

        {/* Related articles grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedArticles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-qventis-gray-100"
            >
              <Link href={`/blog/${article.slug}`} className="block">
                
                {/* Article content */}
                <div className="p-6">
                  
                  {/* Category badge */}
                  <div className="inline-flex items-center px-3 py-1 bg-qventis-coral/10 text-qventis-coral text-sm font-medium rounded-full mb-4">
                    {article.category}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-display font-bold text-qventis-gray-900 mb-3 group-hover:text-qventis-coral transition-colors duration-300 line-clamp-2">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-qventis-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>

                  {/* Meta information */}
                  <div className="flex items-center justify-between text-sm text-qventis-gray-500 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <ClockIcon className="w-4 h-4" />
                        <span>{article.readTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <EyeIcon className="w-4 h-4" />
                        <span>{article.views}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <HeartIcon className="w-4 h-4" />
                        <span>{article.likes}</span>
                      </div>
                    </div>
                    <span>{new Date(article.date).toLocaleDateString('fr-FR')}</span>
                  </div>

                  {/* Author */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-qventis-coral/20 rounded-full flex items-center justify-center">
                        <span className="text-xs font-medium text-qventis-coral">
                          {article.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <span className="text-sm font-medium text-qventis-gray-700">
                        {article.author}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-1 text-qventis-coral group-hover:gap-2 transition-all duration-300">
                      <span className="text-sm font-medium">Lire</span>
                      <ArrowRightIcon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {article.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-qventis-gray-100 text-qventis-gray-600 text-xs rounded-md"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* View all articles CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-qventis-coral text-white font-medium rounded-xl hover:bg-qventis-coral/90 transition-all duration-300 hover:gap-3"
          >
            Voir tous les articles
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </motion.div>

      </Container>
    </section>
  );
}
