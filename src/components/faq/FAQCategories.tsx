'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { 
  SparklesIcon,
  GlobeAltIcon,
  ChartBarIcon,
  CogIcon,
  CreditCardIcon,
  QuestionMarkCircleIcon
} from '@heroicons/react/24/outline';

export function FAQCategories() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    {
      id: 'all',
      name: 'Toutes les questions',
      icon: QuestionMarkCircleIcon,
      count: 42,
      description: 'Toutes nos FAQ'
    },
    {
      id: 'ai',
      name: 'Intelligence Artificielle',
      icon: SparklesIcon,
      count: 12,
      description: 'Agents IA et automatisation'
    },
    {
      id: 'web',
      name: 'Développement Web',
      icon: GlobeAltIcon,
      count: 15,
      description: 'Sites web et applications'
    },
    {
      id: 'data',
      name: 'Analyse de Données',
      icon: ChartBarIcon,
      count: 8,
      description: 'Dashboards et analytics'
    },
    {
      id: 'technical',
      name: 'Support Technique',
      icon: CogIcon,
      count: 10,
      description: 'Maintenance et assistance'
    },
    {
      id: 'billing',
      name: 'Facturation',
      icon: CreditCardIcon,
      count: 7,
      description: 'Tarifs et paiements'
    }
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
          <h2 className="text-3xl md:text-4xl font-display font-bold text-qventis-gray-900 mb-4">
            Parcourir par catégorie
          </h2>
          <p className="text-lg text-qventis-gray-600 max-w-2xl mx-auto">
            Trouvez rapidement les réponses selon votre domaine d'intérêt
          </p>
        </motion.div>

        {/* Categories grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const isActive = activeCategory === category.id;
            
            return (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  y: -5
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveCategory(category.id)}
                className={`p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
                  isActive
                    ? 'border-qventis-coral bg-gradient-to-br from-qventis-coral/10 to-qventis-coral/5 shadow-lg shadow-qventis-coral/20'
                    : 'border-qventis-gray-200 bg-white hover:border-qventis-coral/30 hover:shadow-lg'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <motion.div
                    animate={{ 
                      scale: isActive ? 1.1 : 1,
                      rotate: isActive ? 5 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      isActive
                        ? 'bg-qventis-coral text-white shadow-lg'
                        : 'bg-qventis-coral/10 text-qventis-coral'
                    }`}
                  >
                    <category.icon className="w-6 h-6" />
                  </motion.div>
                  
                  <motion.div
                    animate={{ 
                      scale: isActive ? 1.1 : 1
                    }}
                    transition={{ duration: 0.3 }}
                    className={`px-3 py-1 rounded-full text-sm font-semibold transition-all duration-300 ${
                      isActive
                        ? 'bg-qventis-coral text-white'
                        : 'bg-qventis-gray-100 text-qventis-gray-600'
                    }`}
                  >
                    {category.count}
                  </motion.div>
                </div>
                
                <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
                  isActive ? 'text-qventis-coral' : 'text-qventis-gray-900'
                }`}>
                  {category.name}
                </h3>
                
                <p className="text-qventis-gray-600 text-sm leading-relaxed">
                  {category.description}
                </p>
              </motion.button>
            );
          })}
        </div>

      </Container>
    </section>
  );
}
