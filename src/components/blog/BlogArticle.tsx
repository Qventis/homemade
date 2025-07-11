'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  CalendarDaysIcon,
  ClockIcon,
  EyeIcon,
  HeartIcon,
  ShareIcon,
  ArrowLeftIcon,
  BookmarkIcon,
  UserIcon
} from '@heroicons/react/24/outline';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { useState } from 'react';

interface Article {
  id: number;
  title: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  views: number;
  likes: number;
  tags: string[];
  tableOfContents?: { id: string; title: string; level: number }[];
}

interface BlogArticleProps {
  article: Article;
}

export function BlogArticle({ article }: BlogArticleProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [likes, setLikes] = useState(article.likes);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(prev => isLiked ? prev - 1 : prev + 1);
  };

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: article.title,
        text: article.title,
        url: window.location.href,
      });
    } else {
      // Fallback: copy to clipboard
      await navigator.clipboard.writeText(window.location.href);
      // You could show a toast notification here
    }
  };

  return (
    <article className="pt-24 pb-20">
      <Container>
        <div className="max-w-4xl mx-auto">
          
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 text-qventis-coral hover:text-qventis-coral/80 transition-colors"
            >
              <ArrowLeftIcon className="w-4 h-4" />
              <span className="font-medium">Retour au blog</span>
            </Link>
          </motion.div>

          {/* Article Header */}
          <motion.header
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            
            {/* Category */}
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-qventis-coral text-white text-sm font-semibold rounded-full">
                {article.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl lg:text-5xl font-display font-bold text-qventis-gray-900 mb-6 leading-tight">
              {article.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-qventis-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-qventis-coral/20 rounded-full flex items-center justify-center">
                  <UserIcon className="w-5 h-5 text-qventis-coral" />
                </div>
                <div>
                  <div className="font-semibold text-qventis-gray-900">{article.author}</div>
                  <div className="text-sm">Expert Tech</div>
                </div>
              </div>
              
              <div className="hidden sm:block w-px h-8 bg-qventis-gray-300" />
              
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <CalendarDaysIcon className="w-4 h-4" />
                  {formatDate(article.date)}
                </div>
                <div className="flex items-center gap-1">
                  <ClockIcon className="w-4 h-4" />
                  {article.readTime}
                </div>
                <div className="flex items-center gap-1">
                  <EyeIcon className="w-4 h-4" />
                  {article.views.toLocaleString()} vues
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-qventis-gray-100 text-qventis-gray-600 text-sm rounded-lg hover:bg-qventis-coral/10 hover:text-qventis-coral transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4">
              <Button
                variant={isLiked ? "coral" : "ghost"}
                size="sm"
                onClick={handleLike}
                className="flex items-center gap-2"
              >
                <HeartIcon className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                {likes}
              </Button>
              
              <Button
                variant={isBookmarked ? "coral" : "ghost"}
                size="sm"
                onClick={() => setIsBookmarked(!isBookmarked)}
                className="flex items-center gap-2"
              >
                <BookmarkIcon className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
                Sauvegarder
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={handleShare}
                className="flex items-center gap-2"
              >
                <ShareIcon className="w-4 h-4" />
                Partager
              </Button>
            </div>
          </motion.header>

          <div className="lg:grid lg:grid-cols-4 lg:gap-12">
            
            {/* Table of Contents - Sidebar */}
            {article.tableOfContents && (
              <motion.aside
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-1 mb-8 lg:mb-0"
              >
                <div className="sticky top-24">
                  <div className="bg-qventis-gray-50 rounded-2xl p-6 border border-qventis-gray-200">
                    <h3 className="font-display font-bold text-qventis-gray-900 mb-4">
                      Table des matières
                    </h3>
                    <nav className="space-y-2">
                      {article.tableOfContents.map((item) => (
                        <a
                          key={item.id}
                          href={`#${item.id}`}
                          className={`block text-sm hover:text-qventis-coral transition-colors ${
                            item.level === 2 ? 'font-medium' : 'text-qventis-gray-600 ml-4'
                          }`}
                        >
                          {item.title}
                        </a>
                      ))}
                    </nav>
                  </div>
                </div>
              </motion.aside>
            )}

            {/* Article Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className={`${article.tableOfContents ? 'lg:col-span-3' : 'lg:col-span-4'}`}
            >
              <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-qventis-gray-900 prose-p:text-qventis-gray-700 prose-p:leading-relaxed prose-a:text-qventis-coral prose-a:no-underline hover:prose-a:underline prose-code:bg-qventis-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-qventis-coral prose-pre:bg-qventis-gray-900 prose-pre:border prose-pre:border-qventis-gray-200">
                
                {/* Featured Image Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-qventis-coral/20 to-qventis-coral/10 rounded-2xl flex items-center justify-center mb-8 border border-qventis-coral/20">
                  <div className="text-6xl">📝</div>
                </div>

                {/* Content */}
                <div 
                  dangerouslySetInnerHTML={{ 
                    __html: article.content.replace(/\n/g, '<br>') 
                  }} 
                />
              </div>

              {/* Article Footer */}
              <div className="mt-12 pt-8 border-t border-qventis-gray-200">
                
                {/* Author Info */}
                <div className="bg-qventis-gray-50 rounded-2xl p-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-qventis-coral/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <UserIcon className="w-8 h-8 text-qventis-coral" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-display font-bold text-qventis-gray-900 mb-2">
                        À propos de {article.author}
                      </h4>
                      <p className="text-qventis-gray-600 mb-3">
                        Expert en développement web et nouvelles technologies. Passionné par l'innovation et le partage de connaissances techniques.
                      </p>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">
                          Voir le profil
                        </Button>
                        <Button variant="ghost" size="sm">
                          Suivre
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span className="text-qventis-gray-600">Cet article vous a plu ?</span>
                    <div className="flex items-center gap-2">
                      <Button
                        variant={isLiked ? "coral" : "ghost"}
                        size="sm"
                        onClick={handleLike}
                        className="flex items-center gap-2"
                      >
                        <HeartIcon className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                        {likes}
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleShare}
                        className="flex items-center gap-2"
                      >
                        <ShareIcon className="w-4 h-4" />
                        Partager
                      </Button>
                    </div>
                  </div>
                  
                  <div className="text-sm text-qventis-gray-500">
                    Dernière mise à jour : {formatDate(article.date)}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </article>
  );
}
