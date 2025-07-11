'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  EyeIcon,
  ArrowTopRightOnSquareIcon,
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  ShoppingBagIcon,
  CpuChipIcon,
  ChartBarIcon,
  FunnelIcon
} from '@heroicons/react/24/outline';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'Tous les projets', icon: FunnelIcon },
    { id: 'websites', label: 'Sites Web', icon: ComputerDesktopIcon },
    { id: 'ecommerce', label: 'E-commerce', icon: ShoppingBagIcon },
    { id: 'ai', label: 'Intelligence IA', icon: CpuChipIcon },
    { id: 'data', label: 'Data Analytics', icon: ChartBarIcon }
  ];

  const projects = [
    {
      id: 1,
      title: 'TechCorp Solutions',
      category: 'websites',
      description: 'Site vitrine moderne pour une entreprise de conseil en technologie',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      url: 'https://techcorp-demo.com',
      timeline: '3 semaines',
      results: '+150% de leads générés'
    },
    {
      id: 2,
      title: 'BeautyShop Online',
      category: 'ecommerce',
      description: 'Boutique e-commerce complète avec système de paiement intégré',
      image: '/api/placeholder/600/400',
      technologies: ['Shopify', 'React', 'Stripe'],
      url: 'https://beautyshop-demo.com',
      timeline: '8 semaines',
      results: '+240% de ventes en ligne'
    },
    {
      id: 3,
      title: 'SmartBot Assistant',
      category: 'ai',
      description: 'Agent IA conversationnel pour service client automatisé',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'OpenAI API', 'React'],
      url: 'https://smartbot-demo.com',
      timeline: '6 semaines',
      results: '-60% de temps de réponse'
    },
    {
      id: 4,
      title: 'DataViz Dashboard',
      category: 'data',
      description: 'Tableau de bord analytique pour suivi des performances',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'D3.js', 'Python'],
      url: 'https://dataviz-demo.com',
      timeline: '5 semaines',
      results: '+95% de visibilité métier'
    },
    {
      id: 5,
      title: 'RestaurantPlus',
      category: 'websites',
      description: 'Site web responsive avec système de réservation en ligne',
      image: '/api/placeholder/600/400',
      technologies: ['WordPress', 'PHP', 'JavaScript'],
      url: 'https://restaurant-demo.com',
      timeline: '4 semaines',
      results: '+200% de réservations'
    },
    {
      id: 6,
      title: 'FashionHub Store',
      category: 'ecommerce',
      description: 'Marketplace multi-vendeurs avec interface moderne',
      image: '/api/placeholder/600/400',
      technologies: ['Vue.js', 'Laravel', 'PayPal'],
      url: 'https://fashionhub-demo.com',
      timeline: '12 semaines',
      results: '+180% de revenus'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-qventis-gray-50 to-qventis-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 -left-20 w-60 h-60 bg-qventis-coral/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 10, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-40 -right-20 w-80 h-80 bg-qventis-coral/10 rounded-full blur-3xl"
        />
      </div>

      <Container>
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16 relative z-10"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-qventis-coral/10 to-qventis-coral/5 rounded-full mb-8 border border-qventis-coral/20"
          >
            <EyeIcon className="w-5 h-5 text-qventis-coral" />
            <span className="text-sm font-semibold text-qventis-coral">Portfolio</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl lg:text-5xl font-display font-bold text-qventis-gray-900 mb-6"
          >
            Nos réalisations qui
            <motion.span 
              className="text-qventis-coral"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {' '}parlent d'elles-mêmes
            </motion.span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-qventis-gray-600 leading-relaxed"
          >
            Découvrez quelques projets que nous avons eu le plaisir de réaliser pour nos clients.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border border-qventis-gray-100 hover:border-qventis-coral/30"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <div className="aspect-[4/3] bg-gradient-to-br from-qventis-coral/20 to-qventis-coral/10 flex items-center justify-center">
                  <div className="text-qventis-coral/60 text-sm font-medium">
                    Image du projet {project.title}
                  </div>
                </div>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-qventis-coral/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-qventis-coral shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <EyeIcon className="w-6 h-6" />
                    </motion.button>
                    <motion.a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-qventis-coral shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <ArrowTopRightOnSquareIcon className="w-6 h-6" />
                    </motion.a>
                  </div>
                </div>

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-qventis-coral border border-qventis-coral/20">
                    {categories.find(cat => cat.id === project.category)?.label}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-qventis-gray-900 mb-2 group-hover:text-qventis-coral transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-qventis-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-qventis-gray-100 text-qventis-gray-600 text-xs rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center relative z-10"
        >
          <div className="bg-gradient-to-r from-qventis-coral/10 via-qventis-coral/5 to-qventis-coral/10 rounded-3xl p-8 lg:p-12 border border-qventis-coral/20">
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex items-center justify-center w-16 h-16 bg-qventis-coral/20 rounded-2xl mb-6"
            >
              <ComputerDesktopIcon className="w-8 h-8 text-qventis-coral" />
            </motion.div>
            
            <h3 className="text-2xl lg:text-3xl font-display font-bold text-qventis-gray-900 mb-4">
              Votre projet mérite le même succès
            </h3>
            <p className="text-qventis-gray-600 mb-8 max-w-2xl mx-auto text-lg">
              Discutons ensemble de votre vision et créons une solution digitale qui dépasse vos attentes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="coral"
                size="lg"
                className="shadow-xl"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Démarrer mon projet
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="border-2 border-qventis-coral text-qventis-coral hover:bg-qventis-coral hover:text-white"
              >
                Voir plus de projets
              </Button>
            </div>
          </div>
        </motion.div>

      </Container>
    </section>
  );
}
