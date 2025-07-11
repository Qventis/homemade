'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  PlusIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  EyeIcon,
  PencilIcon,
  TrashIcon,
  DocumentDuplicateIcon,
  CalendarIcon,
  ClockIcon,
  HeartIcon,
  TagIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';
import { Button } from '@/components/ui/Button';

const blogPosts = [
  {
    id: 1,
    title: "Next.js 14 et App Router : Le Guide Complet pour 2024",
    excerpt: "Découvrez toutes les nouveautés de Next.js 14, du nouvel App Router aux Server Components...",
    status: "published",
    author: "Thomas Qventis",
    publishedAt: "2024-01-15",
    category: "Développement Web",
    tags: ["Next.js", "React", "App Router", "SSR"],
    views: 2847,
    likes: 142,
    readTime: "8 min",
    featured: true
  },
  {
    id: 2,
    title: "Intelligence Artificielle : Comment l'IA Transforme le Développement Web",
    excerpt: "Explorez comment l'IA révolutionne le développement web, de la génération de code à l'optimisation UX...",
    status: "published",
    author: "Sarah Martinez",
    publishedAt: "2024-01-12",
    category: "Intelligence Artificielle",
    tags: ["IA", "Intelligence Artificielle", "Développement Web", "UX"],
    views: 1893,
    likes: 89,
    readTime: "12 min",
    featured: false
  },
  {
    id: 3,
    title: "Data Analytics : Transformer vos Données en Insights Actionnables",
    excerpt: "Découvrez comment exploiter vos données pour prendre des décisions éclairées...",
    status: "published",
    author: "Marc Dubois",
    publishedAt: "2024-01-10",
    category: "Data Science",
    tags: ["Data Analytics", "Business Intelligence", "KPI", "Dashboard"],
    views: 1654,
    likes: 76,
    readTime: "15 min",
    featured: false
  },
  {
    id: 4,
    title: "SEO Moderne : Les Stratégies qui Fonctionnent en 2024",
    excerpt: "Découvrez les dernières techniques SEO pour améliorer votre visibilité...",
    status: "draft",
    author: "Thomas Qventis",
    publishedAt: null,
    category: "SEO",
    tags: ["SEO", "Référencement", "Core Web Vitals", "E-A-T"],
    views: 0,
    likes: 0,
    readTime: "10 min",
    featured: false
  }
];

const categories = ["Tous", "Développement Web", "Intelligence Artificielle", "Data Science", "SEO"];
const statuses = ["Tous", "Publié", "Brouillon", "Programmé"];

export default function AdminBlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [selectedStatus, setSelectedStatus] = useState('Tous');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Tous' || post.category === selectedCategory;
    const matchesStatus = selectedStatus === 'Tous' || 
                         (selectedStatus === 'Publié' && post.status === 'published') ||
                         (selectedStatus === 'Brouillon' && post.status === 'draft');
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  return (
    <div className="space-y-6">
      
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-display font-bold text-qventis-gray-900 mb-2">
            Gestion du Blog
          </h1>
          <p className="text-qventis-gray-600">
            Créez, modifiez et gérez vos articles de blog
          </p>
        </div>
        <Button variant="coral" className="flex items-center gap-2">
          <PlusIcon className="w-4 h-4" />
          Nouvel article
        </Button>
      </motion.div>

      {/* Stats Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-4"
      >
        {[
          { label: 'Total articles', value: '12', icon: DocumentDuplicateIcon, color: 'coral' },
          { label: 'Articles publiés', value: '9', icon: EyeIcon, color: 'green' },
          { label: 'Brouillons', value: '3', icon: PencilIcon, color: 'yellow' },
          { label: 'Vues ce mois', value: '8.5K', icon: ChartBarIcon, color: 'blue' }
        ].map((stat, index) => (
          <div key={stat.label} className="bg-white rounded-xl p-4 shadow-sm border border-qventis-gray-200">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                stat.color === 'coral' ? 'bg-qventis-coral/20 text-qventis-coral' :
                stat.color === 'green' ? 'bg-green-100 text-green-600' :
                stat.color === 'yellow' ? 'bg-yellow-100 text-yellow-600' :
                'bg-blue-100 text-blue-600'
              }`}>
                <stat.icon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-2xl font-bold text-qventis-gray-900">{stat.value}</div>
                <div className="text-sm text-qventis-gray-600">{stat.label}</div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Filters and Search */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white rounded-xl p-6 shadow-sm border border-qventis-gray-200"
      >
        <div className="flex flex-col md:flex-row gap-4">
          
          {/* Search */}
          <div className="flex-1 relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-qventis-gray-400" />
            <input
              type="text"
              placeholder="Rechercher un article..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-qventis-gray-200 rounded-lg focus:ring-2 focus:ring-qventis-coral focus:border-transparent"
            />
          </div>

          {/* Category Filter */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border border-qventis-gray-200 rounded-lg focus:ring-2 focus:ring-qventis-coral focus:border-transparent"
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>

          {/* Status Filter */}
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-4 py-2 border border-qventis-gray-200 rounded-lg focus:ring-2 focus:ring-qventis-coral focus:border-transparent"
          >
            {statuses.map(status => (
              <option key={status} value={status}>{status}</option>
            ))}
          </select>

          {/* View Toggle */}
          <div className="flex items-center gap-2 bg-qventis-gray-100 rounded-lg p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                viewMode === 'grid' ? 'bg-white text-qventis-coral shadow-sm' : 'text-qventis-gray-600'
              }`}
            >
              Grille
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                viewMode === 'list' ? 'bg-white text-qventis-coral shadow-sm' : 'text-qventis-gray-600'
              }`}
            >
              Liste
            </button>
          </div>

        </div>
      </motion.div>

      {/* Blog Posts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}
      >
        {filteredPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`bg-white rounded-xl shadow-sm border border-qventis-gray-200 hover:shadow-lg transition-all duration-300 ${
              viewMode === 'list' ? 'p-6' : 'overflow-hidden'
            }`}
          >
            
            {viewMode === 'grid' ? (
              <>
                {/* Card View */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      post.status === 'published' ? 'bg-green-100 text-green-600' :
                      post.status === 'draft' ? 'bg-yellow-100 text-yellow-600' :
                      'bg-blue-100 text-blue-600'
                    }`}>
                      {post.status === 'published' ? 'Publié' :
                       post.status === 'draft' ? 'Brouillon' : 'Programmé'}
                    </span>
                    {post.featured && (
                      <span className="px-2 py-1 text-xs font-medium bg-qventis-coral/20 text-qventis-coral rounded-full">
                        À la une
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-display font-bold text-qventis-gray-900 mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-qventis-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-qventis-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <CalendarIcon className="w-3 h-3" />
                      {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('fr-FR') : 'Non publié'}
                    </div>
                    <div className="flex items-center gap-1">
                      <ClockIcon className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>

                  {post.status === 'published' && (
                    <div className="flex items-center gap-4 text-xs text-qventis-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <EyeIcon className="w-3 h-3" />
                        {post.views}
                      </div>
                      <div className="flex items-center gap-1">
                        <HeartIcon className="w-3 h-3" />
                        {post.likes}
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="px-2 py-1 bg-qventis-gray-100 text-qventis-gray-600 text-xs rounded-md">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-qventis-gray-100">
                    <span className="text-sm text-qventis-gray-600">{post.author}</span>
                    <div className="flex items-center gap-2">
                      <button className="p-2 text-qventis-gray-400 hover:text-qventis-coral hover:bg-qventis-coral/10 rounded-lg transition-colors">
                        <EyeIcon className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-qventis-gray-400 hover:text-qventis-coral hover:bg-qventis-coral/10 rounded-lg transition-colors">
                        <PencilIcon className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-qventis-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                        <TrashIcon className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* List View */}
                <div className="flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-display font-bold text-qventis-gray-900">
                        {post.title}
                      </h3>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        post.status === 'published' ? 'bg-green-100 text-green-600' :
                        post.status === 'draft' ? 'bg-yellow-100 text-yellow-600' :
                        'bg-blue-100 text-blue-600'
                      }`}>
                        {post.status === 'published' ? 'Publié' :
                         post.status === 'draft' ? 'Brouillon' : 'Programmé'}
                      </span>
                      {post.featured && (
                        <span className="px-2 py-1 text-xs font-medium bg-qventis-coral/20 text-qventis-coral rounded-full">
                          À la une
                        </span>
                      )}
                    </div>
                    
                    <p className="text-qventis-gray-600 text-sm mb-2">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-6 text-xs text-qventis-gray-500">
                      <span>{post.author}</span>
                      <span>{post.category}</span>
                      <span>{post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('fr-FR') : 'Non publié'}</span>
                      {post.status === 'published' && (
                        <>
                          <span>{post.views} vues</span>
                          <span>{post.likes} likes</span>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 ml-4">
                    <button className="p-2 text-qventis-gray-400 hover:text-qventis-coral hover:bg-qventis-coral/10 rounded-lg transition-colors">
                      <EyeIcon className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-qventis-gray-400 hover:text-qventis-coral hover:bg-qventis-coral/10 rounded-lg transition-colors">
                      <PencilIcon className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-qventis-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                      <TrashIcon className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </>
            )}

          </motion.div>
        ))}
      </motion.div>

      {filteredPosts.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <DocumentDuplicateIcon className="w-12 h-12 text-qventis-gray-400 mx-auto mb-4" />
          <p className="text-qventis-gray-600">Aucun article trouvé</p>
        </motion.div>
      )}

    </div>
  );
}
