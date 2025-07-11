'use client';

import { useState, Fragment } from 'react';
import { motion } from 'framer-motion';
import { Dialog, Transition } from '@headlessui/react';
import { 
  GlobeAltIcon,
  CpuChipIcon,
  ChartBarIcon,
  CodeBracketIcon,
  ArrowRightIcon,
  CheckIcon,
  ClockIcon,
  StarIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export function Services() {
  // État pour suivre quelle carte a son modal ouvert
  const [openModal, setOpenModal] = useState<string | null>(null);
  
  // Fonctions pour ouvrir et fermer le modal
  const openServiceModal = (serviceId: string) => {
    setOpenModal(serviceId);
  };
  
  const closeServiceModal = () => {
    setOpenModal(null);
  };
  const services = [
    {
      id: 'websites',
      title: 'Sites Web & E-commerce',
      subtitle: 'Présence digitale moderne',
      icon: GlobeAltIcon,
      description: 'Sites vitrines, boutiques en ligne et applications web responsives avec un design moderne et des performances optimisées.',
      features: [
        'Design responsive',
        'SEO optimisé',
        'Hébergement inclus',
        'Maintenance garantie'
      ],
      pricing: 'À partir de 1 200€',
      timeline: '2-4 semaines',
      color: 'from-qventis-coral to-qventis-coral',
      backDetails: {
        tagline: 'Votre site internet, votre vitrine digitale',
        detailedFeatures: [
          { name: 'Technologies Modernes', description: 'Next.js, React, WordPress et solutions e-commerce (WooCommerce, Shopify)' },
          { name: 'Design Premium', description: 'Interface utilisateur intuitive et responsive, adaptée à votre identité visuelle' },
          { name: 'SEO Avancé', description: 'Optimisation pour Google, métadonnées enrichies, données structurées, sitemap' },
          { name: 'Performance', description: 'Temps de chargement optimisé, Core Web Vitals conformes, score PageSpeed élevé' }
        ],
        caseStudy: 'Une boutique locale a vu ses ventes en ligne augmenter de 230% après notre refonte de leur site e-commerce',
        clientTypes: 'TPE/PME, Boutiques, Artisans, Professions libérales'
      }
    },
    {
      id: 'ai-agents',
      title: 'Agents IA Conversationnels',
      subtitle: 'Intelligence artificielle',
      icon: CpuChipIcon,
      description: 'Chatbots intelligents, assistants virtuels et agents IA personnalisés pour automatiser vos interactions clients.',
      features: [
        'IA conversationnelle',
        'Intégration multicanal',
        'Apprentissage continu',
        'Support 24/7'
      ],
      pricing: 'À partir de 2 500€',
      timeline: '3-5 semaines',
      color: 'from-qventis-coral to-qventis-coral',
      backDetails: {
        tagline: 'Automatisez vos interactions avec l\'intelligence artificielle',
        detailedFeatures: [
          { name: 'IA Avancée', description: 'Modèles GPT-4, Claude, Gemini intégrés avec entraînement sur vos données' },
          { name: 'Intégration Complète', description: 'Site web, WhatsApp, Slack, Teams, email, SMS et systèmes CRM' },
          { name: 'Personnalisation', description: 'Ton de voix, workflow et réponses adaptés à votre marque' },
          { name: 'Analytics Détaillés', description: 'Suivi des performances, rapports d\'utilisation, identification des tendances' }
        ],
        caseStudy: 'Un service client a réduit de 70% son temps de réponse grâce à notre agent IA, avec 94% de satisfaction client',
        clientTypes: 'Service client, Marketing, Commerce en ligne, Services SaaS'
      }
    },
    {
      id: 'data-analytics',
      title: 'Analyse & Visualisation',
      subtitle: 'Business Intelligence',
      icon: ChartBarIcon,
      description: 'Dashboards interactifs, analyse de données avancée et rapports automatisés pour optimiser vos décisions.',
      features: [
        'Tableaux de bord temps réel',
        'Analyses prédictives',
        'Rapports automatisés',
        'API intégration'
      ],
      pricing: 'À partir de 1 800€',
      timeline: '2-3 semaines',
      color: 'from-qventis-coral to-qventis-coral',
      backDetails: {
        tagline: 'Transformez vos données en décisions stratégiques',
        detailedFeatures: [
          { name: 'Visualisation Interactive', description: 'Dashboards personnalisés avec filtres dynamiques et exploration des données' },
          { name: 'Intelligence Prédictive', description: 'Modèles ML pour prévisions des ventes, segmentation client et détection d\'anomalies' },
          { name: 'Automatisation', description: 'Rapports programmés, alertes conditionnelles et refresh automatique des données' },
          { name: 'Sources Multiples', description: 'Connexion à vos CRM, ERP, Google Analytics, réseaux sociaux et bases de données' }
        ],
        caseStudy: 'Une entreprise a augmenté ses revenus de 25% en identifiant de nouvelles opportunités grâce à notre dashboard analytique',
        clientTypes: 'Direction, Marketing, Ventes, Finance, RH'
      }
    },
    {
      id: 'custom-dev',
      title: 'Développement Sur-mesure',
      subtitle: 'Solutions personnalisées',
      icon: CodeBracketIcon,
      description: 'Applications métier, algorithmes spécialisés et intégrations API pour répondre à vos besoins spécifiques.',
      features: [
        'Code sur-mesure',
        'Architecture scalable',
        'Tests & documentation',
        'Formation incluse'
      ],
      pricing: 'Devis personnalisé',
      timeline: '4-8 semaines',
      color: 'from-qventis-coral to-qventis-coral',
      backDetails: {
        tagline: 'Des solutions logicielles parfaitement adaptées à vos besoins',
        detailedFeatures: [
          { name: 'Stack Technologique', description: 'React, Node.js, Python, TypeScript, AWS/Azure/GCP, Postgres, MongoDB' },
          { name: 'Méthodologie Agile', description: 'Sprints, revues régulières, feedback continu, adaptabilité aux changements' },
          { name: 'Sécurité & Conformité', description: 'RGPD, authentification avancée, chiffrement, tests de pénétration' },
          { name: 'Support Post-Livraison', description: 'Maintenance évolutive, assistance technique, monitoring de performance' }
        ],
        caseStudy: 'Nous avons développé un outil interne qui a optimisé de 60% le processus opérationnel d\'une entreprise logistique',
        clientTypes: 'Startups, ETI, Grands groupes, Secteur public'
      }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-qventis-white to-qventis-gray-50">
      <Container>
        {/* Header section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-qventis-coral/10 rounded-full mb-6">
            <StarIcon className="w-4 h-4 text-qventis-coral" />
            <span className="text-sm font-semibold text-qventis-coral">Nos Services</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-qventis-gray-900 mb-6">
            Solutions digitales
            <span className="text-qventis-coral"> complètes</span>
          </h2>
          
          <p className="text-xl text-qventis-gray-600 leading-relaxed">
            De la création de sites web aux agents IA, nous développons des solutions 
            sur-mesure pour digitaliser et optimiser votre activité.
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8 mb-16"
        >
          {services.map((service) => {
            const IconComponent = service.icon;
            
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-qventis-gray-100 hover:border-qventis-coral/20"
              >
                {/* Service header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-display font-bold text-qventis-gray-900 mb-1">
                      {service.title}
                    </h3>
                    <p className="text-sm font-medium text-qventis-coral">
                      {service.subtitle}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-qventis-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckIcon className="w-4 h-4 text-qventis-coral flex-shrink-0" />
                      <span className="text-sm text-qventis-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Pricing & Timeline */}
                <div className="flex items-center justify-between pt-6 border-t border-qventis-gray-100">
                  <div>
                    <div className="flex items-center gap-1 text-sm text-qventis-gray-500">
                      <ClockIcon className="w-4 h-4" />
                      {service.timeline}
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    className="text-qventis-coral hover:bg-qventis-coral/10 group/btn"
                    onClick={() => openServiceModal(service.id)}
                  >
                    En savoir plus
                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            );
          })}
          
          {/* Service Detail Modals */}
          {services.map((service) => {
            const IconComponent = service.icon;
            
            return (
              <Transition.Root key={`modal-${service.id}`} show={openModal === service.id} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={closeServiceModal}>
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity" />
                  </Transition.Child>

                  <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                      <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                      >
                        <Dialog.Panel className="relative transform overflow-hidden rounded-2xl bg-white p-6 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl">
                          <div className="absolute right-0 top-0 pr-4 pt-4">
                            <button
                              type="button"
                              className="rounded-md bg-white text-gray-400 hover:text-gray-500"
                              onClick={closeServiceModal}
                            >
                              <span className="sr-only">Fermer</span>
                              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                          </div>
                          
                          {/* Modal header with service info */}
                          <div className="flex items-center gap-4 mb-6 border-b border-qventis-gray-100 pb-6">
                            <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center shadow-lg`}>
                              <IconComponent className="w-8 h-8 text-white" />
                            </div>
                            <div>
                              <Dialog.Title as="h3" className="text-2xl font-display font-bold text-qventis-gray-900">
                                {service.title}
                              </Dialog.Title>
                              <p className="text-qventis-coral font-medium mt-1">
                                {service.backDetails.tagline}
                              </p>
                            </div>
                          </div>

                          <div className="mt-4 space-y-6">
                            {/* Service Description */}
                            <div>
                              <h4 className="text-lg font-display font-semibold text-qventis-gray-900 mb-3">Description</h4>
                              <p className="text-qventis-gray-600">
                                {service.description}
                              </p>
                            </div>

                            {/* Detailed Features */}
                            <div>
                              <h4 className="text-lg font-display font-semibold text-qventis-gray-900 mb-3">Caractéristiques détaillées</h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {service.backDetails.detailedFeatures.map((feature, idx) => (
                                  <div key={idx} className="bg-qventis-gray-50 p-4 rounded-lg">
                                    <div className="flex items-center gap-2 mb-2 text-qventis-gray-900 font-medium">
                                      <CheckIcon className="w-5 h-5 text-qventis-coral flex-shrink-0" />
                                      {feature.name}
                                    </div>
                                    <p className="text-sm text-qventis-gray-600">
                                      {feature.description}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Case Study */}
                            <div className="bg-gradient-to-r from-qventis-coral/5 to-qventis-coral/10 p-4 rounded-lg">
                              <h4 className="flex items-center gap-2 text-lg font-display font-semibold text-qventis-gray-900 mb-3">
                                <StarIcon className="w-5 h-5 text-qventis-coral" />
                                Étude de cas
                              </h4>
                              <p className="text-qventis-gray-700">
                                {service.backDetails.caseStudy}
                              </p>
                            </div>

                            {/* Additional Information */}
                            <div className="grid grid-cols-2 gap-4">
                              <div className="bg-qventis-gray-50 p-4 rounded-lg">
                                <h5 className="flex items-center gap-2 font-medium text-qventis-gray-900 mb-2">
                                  <UserGroupIcon className="w-4 h-4 text-qventis-coral" />
                                  Clients types
                                </h5>
                                <p className="text-sm text-qventis-gray-600">
                                  {service.backDetails.clientTypes}
                                </p>
                              </div>
                              <div className="bg-qventis-gray-50 p-4 rounded-lg">
                                <h5 className="flex items-center gap-2 font-medium text-qventis-gray-900 mb-2">
                                  <CurrencyDollarIcon className="w-4 h-4 text-qventis-coral" />
                                  Tarification
                                </h5>
                                <p className="text-sm text-qventis-gray-600">
                                  {service.pricing}
                                </p>
                                <p className="text-sm text-qventis-gray-500 mt-1">
                                  Durée : {service.timeline}
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="mt-8">
                            <Button
                              variant="coral"
                              className="w-full py-2.5"
                              onClick={closeServiceModal}
                            >
                              Demander un devis
                            </Button>
                          </div>
                        </Dialog.Panel>
                      </Transition.Child>
                    </div>
                  </div>
                </Dialog>
              </Transition.Root>
            );
          })}
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center bg-gradient-to-r from-qventis-coral/5 to-qventis-coral/10 rounded-2xl p-8 lg:p-12"
        >
          <h3 className="text-2xl lg:text-3xl font-display font-bold text-qventis-gray-900 mb-4">
            Besoin d'une solution personnalisée ?
          </h3>
          <p className="text-lg text-qventis-gray-600 mb-8 max-w-2xl mx-auto">
            Chaque projet est unique. Parlons de vos besoins spécifiques 
            et créons ensemble la solution parfaite pour votre entreprise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="coral"
              size="lg"
              className="px-8 py-4 text-lg font-semibold shadow-lg"
            >
              Demander un devis
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="px-8 py-4 text-lg font-semibold text-qventis-coral hover:bg-qventis-coral/10"
            >
              Planifier un appel
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default Services;
