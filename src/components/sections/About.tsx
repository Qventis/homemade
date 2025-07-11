'use client';

import { motion } from 'framer-motion';
import { 
  StarIcon,
  BoltIcon,
  ShieldCheckIcon,
  ClockIcon,
  ArrowTrendingUpIcon,
  LightBulbIcon,
  HeartIcon,
  CheckIcon,
  PlayIcon
} from '@heroicons/react/24/solid';
import { 
  UserGroupIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export function About() {
  const achievements = [
    {
      icon: StarIcon,
      metric: '4.9/5',
      label: 'Satisfaction client',
      description: 'Note moyenne basée sur +150 avis'
    },
    {
      icon: BoltIcon,
      metric: '48h',
      label: 'Délai de réponse',
      description: 'Premier contact sous 2 jours ouvrés'
    },
    {
      icon: ShieldCheckIcon,
      metric: '99.8%',
      label: 'Disponibilité',
      description: 'Uptime garanti sur nos solutions'
    },
    {
      icon: ArrowTrendingUpIcon,
      metric: '+180%',
      label: 'ROI moyen',
      description: 'Amélioration des performances'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Écoute & Analyse',
      description: 'Nous analysons vos besoins et définissons ensemble la stratégie optimale.',
      icon: LightBulbIcon
    },
    {
      step: '02', 
      title: 'Conception & Design',
      description: 'Notre équipe conçoit une solution sur-mesure adaptée à vos objectifs.',
      icon: HeartIcon
    },
    {
      step: '03',
      title: 'Développement & Tests',
      description: 'Développement avec les meilleures pratiques et tests rigoureux.',
      icon: RocketLaunchIcon
    },
    {
      step: '04',
      title: 'Lancement & Suivi',
      description: 'Mise en ligne et accompagnement continu pour optimiser les résultats.',
      icon: CheckIcon
    }
  ];

  const stats = [
    {
      number: '250+',
      label: 'Projets réalisés'
    },
    {
      number: '5 ans',
      label: 'D\'expérience'
    },
    {
      number: '24/7',
      label: 'Support disponible'
    }
  ];

  const team = [
    {
      name: 'Quentin Vidal',
      role: 'Fondateur & CTO',
      description: 'Expert en développement web et intelligence artificielle',
      image: '/api/placeholder/150/150'
    },
    {
      name: 'Équipe Qventis',
      role: 'Développeurs & Designers',
      description: 'Une équipe passionnée de spécialistes techniques',
      image: '/api/placeholder/150/150'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-qventis-white to-qventis-gray-50">
      <Container>
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-qventis-coral/10 rounded-full mb-6">
            <UserGroupIcon className="w-4 h-4 text-qventis-coral" />
            <span className="text-sm font-semibold text-qventis-coral">À propos</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-qventis-gray-900 mb-6">
            L'expertise au service de
            <span className="text-qventis-coral"> votre succès</span>
          </h2>
          
          <p className="text-xl text-qventis-gray-600 leading-relaxed">
            Créer des solutions digitales qui transforment votre business et dépassent vos attentes.
          </p>
        </motion.div>

        {/* Process Section */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Connection line */}
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-16 left-full w-8 h-0.5 bg-gradient-to-r from-qventis-coral to-qventis-coral transform translate-x-0" />
                  )}
                  
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-qventis-gray-100 hover:shadow-xl transition-all duration-300 group h-full">
                    <div className="text-center">
                      <div className="relative mb-4">
                        <div className="w-16 h-16 mx-auto bg-gradient-to-br from-qventis-coral to-qventis-coral/80 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-qventis-coral/10 rounded-full flex items-center justify-center border-2 border-white">
                          <span className="text-xs font-bold text-qventis-coral">{step.step}</span>
                        </div>
                      </div>
                      
                      <h4 className="text-lg font-semibold text-qventis-gray-900 mb-3">
                        {step.title}
                      </h4>
                      <p className="text-sm text-qventis-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Story + Video */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-display font-bold text-qventis-gray-900">
              Pourquoi <span className="text-qventis-coral">Qventis</span> ?
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckIcon className="w-5 h-5 text-qventis-coral mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-qventis-gray-900">Expertise reconnue</strong>
                  <p className="text-qventis-gray-600">5 ans d'expérience et +250 projets réussis</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckIcon className="w-5 h-5 text-qventis-coral mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-qventis-gray-900">Solutions sur-mesure</strong>
                  <p className="text-qventis-gray-600">Chaque projet est unique, nos solutions aussi</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckIcon className="w-5 h-5 text-qventis-coral mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-qventis-gray-900">Support réactif</strong>
                  <p className="text-qventis-gray-600">Accompagnement continu et support 24/7</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckIcon className="w-5 h-5 text-qventis-coral mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-qventis-gray-900">ROI garanti</strong>
                  <p className="text-qventis-gray-600">+180% d'amélioration moyenne des performances</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                variant="coral"
                size="lg"
                className="shadow-lg"
              >
                Voir nos réalisations
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="border border-qventis-gray-200 hover:border-qventis-coral"
              >
                <PlayIcon className="w-5 h-5 mr-2" />
                Regarder la vidéo
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-qventis-coral/10 to-qventis-coral/5 rounded-2xl p-8 overflow-hidden">
              {/* Video placeholder */}
              <div className="aspect-video bg-gradient-to-br from-qventis-coral/20 to-qventis-coral/10 rounded-xl flex items-center justify-center cursor-pointer group hover:from-qventis-coral/30 hover:to-qventis-coral/20 transition-all duration-300">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <PlayIcon className="w-8 h-8 text-qventis-coral ml-1" />
                </div>
              </div>
              
              {/* Stats floating */}
              <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-3">
                <div className="text-sm font-semibold text-qventis-gray-900">+250</div>
                <div className="text-xs text-qventis-gray-600">Projets</div>
              </div>
              
              <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-3">
                <div className="text-sm font-semibold text-qventis-gray-900">4.9★</div>
                <div className="text-xs text-qventis-gray-600">Satisfaction</div>
              </div>
              
              {/* Decorative blobs */}
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-qventis-coral/20 rounded-full blur-xl" />
              <div className="absolute -bottom-10 -right-10 w-16 h-16 bg-qventis-coral/30 rounded-full blur-xl" />
            </div>
          </motion.div>
        </div>


      </Container>
    </section>
  );
}
