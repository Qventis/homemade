'use client';

import { motion } from 'framer-motion';
import { 
  PencilSquareIcon,
  SparklesIcon,
  RocketLaunchIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export function BlogHero() {
  return (
    <section className="pt-24 pb-20 bg-gradient-to-br from-qventis-white via-qventis-gray-50 to-qventis-white relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-32 -right-32 w-64 h-64 bg-qventis-coral/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-32 -left-32 w-80 h-80 bg-qventis-coral/8 rounded-full blur-3xl"
        />
      </div>

      <Container>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl lg:text-6xl font-display font-bold text-qventis-gray-900 mb-6"
          >
            Actualités & Conseils
            <motion.span 
              className="text-qventis-coral block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Tech & Digital
            </motion.span>
          </motion.h1>
          
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-qventis-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto"
          >
            Découvrez nos articles d'expertise sur le développement web, l'intelligence artificielle, 
            l'analyse de données et les dernières tendances technologiques. 
            Restez à la pointe de l'innovation avec nos conseils d'experts.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              variant="coral"
              size="lg"
              className="shadow-xl"
              onClick={() => {
                const blogGrid = document.getElementById('blog-articles');
                blogGrid?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Explorer les articles
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="border border-qventis-gray-300 hover:border-qventis-coral"
              onClick={() => {
                const newsletter = document.getElementById('newsletter');
                newsletter?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              S'abonner à la newsletter
            </Button>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
