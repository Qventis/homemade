'use client';

import { motion } from 'framer-motion';
import { 
  ArrowRightIcon,
  PhoneIcon,
  SparklesIcon,
  RocketLaunchIcon,
  ClockIcon,
  CheckCircleIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export function CTA() {
  const urgencySignals = [
    {
      icon: ClockIcon,
      text: 'Réponse sous 24h',
      subtext: 'Garantie'
    },
    {
      icon: CheckCircleIcon,
      text: 'Devis gratuit',
      subtext: 'Sans engagement'
    },
    {
      icon: RocketLaunchIcon,
      text: 'Démarrage rapide',
      subtext: 'Dès la semaine prochaine'
    }
  ];

  const testimonial = {
    quote: "Qventis a transformé notre présence digitale. Leur expertise en IA nous a fait gagner un temps précieux.",
    author: "Marie Dupont",
    role: "CEO, TechStart",
    rating: 5
  };

  return (
    <section className="py-20 bg-gradient-to-b from-qventis-gray-50 to-qventis-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            x: [-100, 50, -100],
            y: [-50, 100, -50],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-10 left-10 w-32 h-32 bg-qventis-coral/5 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            x: [100, -50, 100],
            y: [50, -100, 50],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-10 right-10 w-40 h-40 bg-qventis-coral/3 rounded-full blur-xl"
        />
      </div>

      <Container className="relative z-10">
        {/* Main CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-qventis-coral/10 rounded-full mb-6">
            <SparklesIcon className="w-4 h-4 text-qventis-coral" />
            <span className="text-sm font-semibold text-qventis-coral">Prêt à commencer ?</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-display font-bold text-qventis-gray-900 mb-6 leading-tight">
            Transformons votre
            <br />
            <span className="text-qventis-coral relative">
              vision en réalité
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute -bottom-2 left-0 h-1 bg-qventis-coral/30"
              />
            </span>
          </h2>
          
          <p className="text-xl text-qventis-gray-600 leading-relaxed mb-12">
            Rejoignez plus de <strong>250 entreprises</strong> qui nous font confiance 
            pour leurs projets digitaux. Votre succès commence aujourd'hui.
          </p>

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="coral"
                size="lg"
                className="px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Démarrer mon projet
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="ghost"
                size="lg"
                className="px-8 py-4 text-lg font-semibold text-qventis-coral hover:bg-qventis-coral/10 border border-qventis-coral/20 hover:border-qventis-coral/40 transition-all duration-300"
              >
                <PhoneIcon className="w-5 h-5 mr-2" />
                Planifier un appel
              </Button>
            </motion.div>
          </div>

          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid md:grid-cols-3 gap-6 mb-16"
          >
            {urgencySignals.map((signal, index) => {
              const IconComponent = signal.icon;
              return (
                <div key={index} className="flex items-center justify-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-qventis-gray-100">
                  <IconComponent className="w-6 h-6 text-qventis-coral flex-shrink-0" />
                  <div className="text-center">
                    <div className="font-semibold text-qventis-gray-900 text-sm">
                      {signal.text}
                    </div>
                    <div className="text-xs text-qventis-gray-500">
                      {signal.subtext}
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </motion.div>

      </Container>
    </section>
  );
}

export default CTA;
