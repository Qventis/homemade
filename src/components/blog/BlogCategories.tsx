'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  CodeBracketIcon,
  CpuChipIcon,
  ChartBarIcon,
  GlobeAltIcon,
  SparklesIcon,
  RocketLaunchIcon,
  SwatchIcon,
  PresentationChartLineIcon,
  UserGroupIcon,
  DevicePhoneMobileIcon
 } from '@heroicons/react/24/outline';
import { Container } from '../ui/Container';

// Type pour les catégories reçues du serveur
type Category = {
  name: string;
  count: number;
  slug: string;
};

type BlogCategoriesProps = {
  categories: Category[];
};

export function BlogCategories({ categories: dbCategories }: BlogCategoriesProps) {
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Mapping des icônes en fonction des catégories
  const categoryIcons: Record<string, any> = {
    'Développement Web': CodeBracketIcon,
    'Intelligence Artificielle': CpuChipIcon,
    'Data & Analytics': ChartBarIcon,
    'SEO & Marketing': GlobeAltIcon,
    'UX/UI Design': SwatchIcon,
    'Backend': PresentationChartLineIcon,
    'Sécurité': UserGroupIcon,
    'Mobile': DevicePhoneMobileIcon,
    // Icône par défaut pour les autres catégories
    'default': RocketLaunchIcon
  };
  
  // Construction du tableau de catégories avec comptage total
  const totalArticlesCount = dbCategories.reduce((total, cat) => total + cat.count, 0);
  
  const categories = [
    { id: 'all', name: 'Tous les articles', icon: SparklesIcon, count: totalArticlesCount },
    ...dbCategories.map(cat => ({
      id: cat.slug,
      name: cat.name,
      icon: categoryIcons[cat.name] || categoryIcons.default,
      count: cat.count
    }))
  ];

  return (
    <section className="py-16 bg-qventis-white relative">
      <Container>
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl lg:text-3xl font-display font-bold text-qventis-gray-900 mb-4">
            Explorez par catégorie
          </h2>
          <p className="text-qventis-gray-600 max-w-2xl mx-auto">
            Trouvez rapidement les articles qui correspondent à vos centres d'intérêt
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            const isActive = activeCategory === category.id;
            
            return (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group relative p-6 rounded-2xl transition-all duration-300 ${
                  isActive
                    ? 'bg-qventis-coral text-white shadow-xl shadow-qventis-coral/25'
                    : 'bg-white text-qventis-gray-700 hover:text-qventis-coral hover:bg-qventis-coral/5 border border-qventis-gray-200 hover:border-qventis-coral/30 shadow-lg hover:shadow-xl'
                }`}
              >
                {/* Background Pattern */}
                <div className={`absolute inset-0 rounded-2xl opacity-5 ${
                  isActive ? 'bg-white/10' : 'bg-qventis-coral/5 group-hover:bg-qventis-coral/10'
                }`} />

                <div className="relative z-10 text-center">
                  {/* Icon */}
                  <div className={`w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    isActive 
                      ? 'bg-white/20' 
                      : 'bg-qventis-coral/10 group-hover:bg-qventis-coral/20'
                  }`}>
                    <IconComponent className={`w-6 h-6 transition-colors ${
                      isActive ? 'text-white' : 'text-qventis-coral'
                    }`} />
                  </div>
                  
                  {/* Name */}
                  <h3 className={`font-semibold text-sm mb-2 transition-colors ${
                    isActive ? 'text-white' : 'text-qventis-gray-900 group-hover:text-qventis-coral'
                  }`}>
                    {category.name}
                  </h3>
                  
                  {/* Count */}
                  <div className={`inline-flex items-center justify-center px-2 py-1 rounded-full text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-white/20 text-white'
                      : 'bg-qventis-gray-100 text-qventis-gray-600 group-hover:bg-qventis-coral/10 group-hover:text-qventis-coral'
                  }`}>
                    {category.count} articles
                  </div>
                </div>

                {/* Active Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-white/30 rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Active Category Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-qventis-coral/10 rounded-full border border-qventis-coral/20">
            <span className="text-sm text-qventis-coral font-medium">
              {categories.find(cat => cat.id === activeCategory)?.count} articles dans "{categories.find(cat => cat.id === activeCategory)?.name}"
            </span>
          </div>
        </motion.div>

      </Container>
    </section>
  );
}
