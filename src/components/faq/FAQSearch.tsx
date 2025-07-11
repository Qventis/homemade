'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { 
  MagnifyingGlassIcon,
  CommandLineIcon,
  TagIcon
} from '@heroicons/react/24/outline';

export function FAQSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const popularSearches = [
    'Délais de réalisation',
    'Tarifs et devis',
    'Support technique',
    'Intelligence artificielle',
    'E-commerce',
    'Maintenance'
  ];

  return (
    <section className="py-16 bg-qventis-white relative">
      <Container>
        <div className="max-w-4xl mx-auto">
          
          {/* Search bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative mb-8"
          >
            <div className={`relative transition-all duration-300 ${
              isFocused ? 'transform scale-105' : ''
            }`}>
              <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                <MagnifyingGlassIcon className={`w-6 h-6 transition-colors duration-300 ${
                  isFocused ? 'text-qventis-coral' : 'text-qventis-gray-400'
                }`} />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder="Rechercher dans la documentation..."
                className={`w-full pl-16 pr-6 py-5 text-lg bg-white border-2 rounded-2xl transition-all duration-300 ${
                  isFocused 
                    ? 'border-qventis-coral shadow-lg shadow-qventis-coral/20' 
                    : 'border-qventis-gray-200 shadow-sm hover:border-qventis-coral/50'
                } focus:outline-none focus:border-qventis-coral`}
              />
              <div className="absolute inset-y-0 right-0 pr-6 flex items-center pointer-events-none">
                <div className="flex items-center gap-2 text-qventis-gray-400 text-sm">
                  <CommandLineIcon className="w-4 h-4" />
                  <span>Ctrl K</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Popular searches */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-2 text-qventis-gray-600 mb-4">
              <TagIcon className="w-4 h-4" />
              <span className="text-sm font-medium">Recherches populaires :</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3">
              {popularSearches.map((search, index) => (
                <motion.button
                  key={search}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSearchQuery(search)}
                  className="px-4 py-2 bg-qventis-gray-100 hover:bg-qventis-coral/10 hover:text-qventis-coral text-qventis-gray-700 rounded-full text-sm font-medium transition-all duration-300 border border-transparent hover:border-qventis-coral/20"
                >
                  {search}
                </motion.button>
              ))}
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
