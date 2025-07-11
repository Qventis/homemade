'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  EnvelopeIcon,
  SparklesIcon,
  CheckIcon,
  BellIcon
} from '@heroicons/react/24/outline';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export function BlogNewsletter() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setIsSubscribed(true);
    setEmail('');
  };

  return (
    <section id="newsletter" className="py-20 bg-gradient-to-br from-qventis-coral/5 via-qventis-white to-qventis-coral/10 relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-1/4 w-32 h-32 bg-qventis-coral/5 rounded-full blur-2xl"
        />
        <motion.div
          animate={{ 
            scale: [1.3, 1, 1.3],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 right-1/4 w-48 h-48 bg-qventis-coral/8 rounded-full blur-3xl"
        />
      </div>

      <Container>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          
          {/* Success State */}
          {isSubscribed ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-12 shadow-2xl border border-qventis-coral/20"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
                className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <CheckIcon className="w-10 h-10 text-green-600" />
              </motion.div>
              
              <h3 className="text-2xl lg:text-3xl font-display font-bold text-qventis-gray-900 mb-4">
                🎉 Merci pour votre inscription !
              </h3>
              
              <p className="text-lg text-qventis-gray-600 mb-6">
                Vous allez recevoir notre prochaine newsletter avec tous nos derniers articles et conseils tech.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="coral"
                  onClick={() => {
                    const blogGrid = document.getElementById('blog-articles');
                    blogGrid?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Découvrir nos articles
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => setIsSubscribed(false)}
                  className="border border-qventis-gray-300"
                >
                  S'inscrire avec un autre email
                </Button>
              </div>
            </motion.div>
          ) : (
            /* Newsletter Form */
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border border-qventis-coral/10"
            >
              
              {/* Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="w-20 h-20 bg-qventis-coral/10 rounded-2xl flex items-center justify-center mx-auto mb-8"
              >
                <EnvelopeIcon className="w-10 h-10 text-qventis-coral" />
              </motion.div>
              
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl lg:text-4xl font-display font-bold text-qventis-gray-900 mb-4">
                  Restez à la pointe de la tech
                </h3>
                
                <p className="text-lg text-qventis-gray-600 mb-8 max-w-2xl mx-auto">
                  Recevez chaque semaine nos meilleurs articles, tutorials et conseils d'experts directement dans votre boîte mail.
                </p>
              </motion.div>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="grid sm:grid-cols-3 gap-6 mb-8"
              >
                {[
                  { icon: SparklesIcon, title: 'Contenu exclusif', desc: 'Articles en avant-première' },
                  { icon: BellIcon, title: 'Alertes tendances', desc: 'Les dernières nouveautés tech' },
                  { icon: CheckIcon, title: '100% gratuit', desc: 'Aucun spam, désabonnement facile' }
                ].map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-qventis-coral/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <IconComponent className="w-6 h-6 text-qventis-coral" />
                      </div>
                      <h4 className="font-semibold text-qventis-gray-900 mb-1">{benefit.title}</h4>
                      <p className="text-sm text-qventis-gray-600">{benefit.desc}</p>
                    </div>
                  );
                })}
              </motion.div>

              {/* Form */}
              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="max-w-md mx-auto"
              >
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="votre@email.com"
                      required
                      className="w-full px-4 py-4 bg-qventis-gray-50 border border-qventis-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-qventis-coral focus:border-transparent transition-all"
                    />
                    <EnvelopeIcon className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-qventis-gray-400" />
                  </div>
                  
                  <Button
                    type="submit"
                    variant="coral"
                    size="lg"
                    disabled={isLoading || !email}
                    className="px-8 whitespace-nowrap shadow-lg"
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Inscription...
                      </div>
                    ) : (
                      "S'abonner"
                    )}
                  </Button>
                </div>
                
                <p className="text-xs text-qventis-gray-500 mt-4">
                  En vous inscrivant, vous acceptez de recevoir nos emails et vous pouvez vous désabonner à tout moment.
                </p>
              </motion.form>

            </motion.div>
          )}
        </div>
      </Container>
    </section>
  );
}
