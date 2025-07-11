'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { 
  QuestionMarkCircleIcon,
  BookOpenIcon,
  DocumentTextIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

export function FAQHero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-qventis-white via-qventis-coral/5 to-qventis-white relative overflow-hidden">
      {/* Background animations */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 10, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 -left-20 w-80 h-80 bg-qventis-coral/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, -15, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 -right-20 w-96 h-96 bg-qventis-coral/5 rounded-full blur-3xl"
        />
      </div>

      <Container>
        <div className="max-w-4xl mx-auto text-center relative">

          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-qventis-gray-900 mb-6 leading-tight"
          >
            Questions
            <span className="block text-qventis-coral">
              & Réponses
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-qventis-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto"
          >
            Trouvez rapidement les réponses à toutes vos questions sur nos services d'IA, 
            développement web et analyse de données. Documentation complète et support expert.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            {[
              { icon: QuestionMarkCircleIcon, number: '50+', label: 'Questions répondues' },
              { icon: DocumentTextIcon, number: '15', label: 'Guides détaillés' },
              { icon: SparklesIcon, number: '24h', label: 'Support réactif' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="flex flex-col items-center p-6 bg-white/50 backdrop-blur-sm rounded-xl border border-qventis-coral/10 hover:border-qventis-coral/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-qventis-coral/10 rounded-xl flex items-center justify-center mb-4">
                  <stat.icon className="w-6 h-6 text-qventis-coral" />
                </div>
                <div className="text-2xl font-bold text-qventis-gray-900 mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-qventis-gray-600 text-center">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
