'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { 
  ChatBubbleLeftRightIcon,
  EnvelopeIcon,
  PhoneIcon,
  ClockIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

export function FAQContact() {
  return (
    <section className="py-20 bg-gradient-to-br from-qventis-gray-50 to-qventis-coral/5 relative overflow-hidden">
      {/* Background animations */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 10, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 -left-10 w-60 h-60 bg-qventis-coral/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, -15, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 -right-10 w-80 h-80 bg-qventis-coral/5 rounded-full blur-3xl"
        />
      </div>

      <Container>
        <div className="max-w-4xl mx-auto relative">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-qventis-coral/10 backdrop-blur-sm px-4 py-2 rounded-full text-qventis-coral font-medium text-sm mb-6 border border-qventis-coral/20">
              <ChatBubbleLeftRightIcon className="w-4 h-4" />
              Besoin d'aide supplémentaire ?
            </div>
            
            <h2 className="text-3xl md:text-4xl font-display font-bold text-qventis-gray-900 mb-4">
              Vous ne trouvez pas votre réponse ?
            </h2>
            <p className="text-lg text-qventis-gray-600 max-w-2xl mx-auto">
              Notre équipe d'experts est là pour vous accompagner. Contactez-nous pour obtenir une aide personnalisée.
            </p>
          </motion.div>

          {/* Contact options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: ChatBubbleLeftRightIcon,
                title: 'Chat en direct',
                description: 'Réponse immédiate pendant les heures ouvrées',
                action: 'Démarrer une conversation',
                highlight: true
              },
              {
                icon: EnvelopeIcon,
                title: 'Email Support',
                description: 'Réponse sous 24h garantie',
                action: 'contact@qventis.com'
              },
              {
                icon: PhoneIcon,
                title: 'Consultation téléphonique',
                description: 'Échange personnalisé avec un expert',
                action: 'Programmer un appel'
              }
            ].map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
                  option.highlight
                    ? 'border-qventis-coral bg-gradient-to-br from-qventis-coral/10 to-qventis-coral/5 shadow-lg shadow-qventis-coral/20'
                    : 'border-qventis-gray-200 bg-white hover:border-qventis-coral/30 hover:shadow-lg'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  option.highlight
                    ? 'bg-qventis-coral text-white shadow-lg'
                    : 'bg-qventis-coral/10 text-qventis-coral'
                }`}>
                  <option.icon className="w-6 h-6" />
                </div>
                
                <h3 className="text-lg font-semibold text-qventis-gray-900 mb-2">
                  {option.title}
                </h3>
                
                <p className="text-qventis-gray-600 text-sm mb-4 leading-relaxed">
                  {option.description}
                </p>
                
                <Button
                  variant={option.highlight ? 'coral' : 'ghost'}
                  size="sm"
                  className="w-full justify-center text-sm"
                >
                  {option.action}
                </Button>
              </motion.div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}
