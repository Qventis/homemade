'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  LightBulbIcon,
  PencilSquareIcon,
  CodeBracketIcon,
  RocketLaunchIcon,
  HandRaisedIcon,
  PlayIcon,
  PauseIcon,
  CheckIcon,
  ClockIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export function WorkProcessV4() {
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const processSteps = [
    {
      id: '01',
      title: 'Découverte & Analyse',
      subtitle: 'Comprendre vos besoins',
      description: 'Nous analysons en profondeur vos objectifs, votre marché et vos besoins pour définir la stratégie optimale de votre projet digital.',
      icon: LightBulbIcon,
      duration: '1-2 semaines',
      features: [
        'Entretien approfondi avec votre équipe',
        'Audit complet de l\'existant',
        'Analyse concurrentielle détaillée',
        'Définition des personas cibles',
        'Cahier des charges fonctionnel'
      ]
    },
    {
      id: '02',
      title: 'Conception & Prototypage',
      subtitle: 'Visualiser la solution',
      description: 'Transformation de vos idées en concepts visuels interactifs pour valider l\'expérience utilisateur avant le développement.',
      icon: PencilSquareIcon,
      duration: '2-3 semaines',
      features: [
        'Architecture de l\'information',
        'Wireframes et maquettes',
        'Prototypes interactifs',
        'Guide de style et charte graphique',
        'Tests utilisateur et validation'
      ]
    },
    {
      id: '03',
      title: 'Développement & Tests',
      subtitle: 'Construire la solution',
      description: 'Développement avec les meilleures pratiques, tests rigoureux et optimisations pour une performance maximale.',
      icon: CodeBracketIcon,
      duration: '4-8 semaines',
      features: [
        'Développement modulaire et scalable',
        'Tests unitaires et d\'intégration',
        'Optimisation des performances',
        'Sécurisation et protection des données',
        'Tests multi-navigateurs et responsivité'
      ]
    },
    {
      id: '04',
      title: 'Mise en ligne & Formation',
      subtitle: 'Lancer votre projet',
      description: 'Déploiement professionnel et accompagnement complet pour une prise en main optimale de votre nouvelle solution.',
      icon: RocketLaunchIcon,
      duration: '1 semaine',
      features: [
        'Configuration serveur sécurisée',
        'Migration et transfert des données',
        'Formation complète de votre équipe',
        'Documentation utilisateur détaillée',
        'Tests de charge et monitoring'
      ]
    },
    {
      id: '05',
      title: 'Suivi & Évolution',
      subtitle: 'Accompagner la croissance',
      description: 'Support continu et évolutions pour assurer le succès durable et la croissance de votre solution digitale.',
      icon: HandRaisedIcon,
      duration: 'En continu',
      features: [
        'Maintenance préventive et corrective',
        'Analyses de performance régulières',
        'Évolutions et nouvelles fonctionnalités',
        'Support technique prioritaire',
        'Optimisations continues et améliorations'
      ]
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;
    
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % processSteps.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isAutoPlay, processSteps.length]);

  return (
    <section id="work-process" className="py-20 bg-gradient-to-br from-qventis-white via-qventis-gray-50 to-qventis-white relative overflow-hidden">
      
      {/* Background Coral Blobs */}
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
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-qventis-coral/10 rounded-full mb-8 border border-qventis-coral/20"
          >
            <LightBulbIcon className="w-5 h-5 text-qventis-coral" />
            <span className="text-sm font-semibold text-qventis-coral">Notre Processus</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl lg:text-5xl font-display font-bold text-qventis-gray-900 mb-6"
          >
            Une méthode éprouvée pour
            <motion.span 
              className="text-qventis-coral"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {' '}votre succès
            </motion.span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-qventis-gray-600 leading-relaxed"
          >
            Découvrez notre approche structurée en 5 étapes pour transformer vos idées en succès digital.
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-12 gap-8 max-w-7xl mx-auto relative z-10">
          
          {/* Vertical Tabs */}
          <div className="lg:col-span-4">
            <div className="sticky top-8">
              
              {/* Auto-play Control */}
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-lg font-display font-bold text-qventis-gray-900">
                  Étapes du processus
                </h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsAutoPlay(!isAutoPlay)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${
                    isAutoPlay 
                      ? 'bg-qventis-coral/10 text-qventis-coral border border-qventis-coral/20' 
                      : 'text-qventis-gray-600 hover:bg-qventis-coral/5'
                  }`}
                >
                  {isAutoPlay ? <PauseIcon className="w-4 h-4" /> : <PlayIcon className="w-4 h-4" />}
                  <span className="text-sm font-medium">
                    {isAutoPlay ? 'Pause' : 'Lecture'}
                  </span>
                </Button>
              </div>

              {/* Tabs */}
              <div className="space-y-4">
                {processSteps.map((step, index) => {
                  const IconComponent = step.icon;
                  const isActive = activeStep === index;
                  
                  return (
                    <motion.button
                      key={index}
                      onClick={() => setActiveStep(index)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full text-left p-6 rounded-2xl transition-all duration-500 relative overflow-hidden group ${
                        isActive
                          ? 'bg-qventis-coral text-white shadow-xl shadow-qventis-coral/20'
                          : 'bg-white text-qventis-gray-700 hover:bg-qventis-coral/5 border border-qventis-gray-200 hover:border-qventis-coral/30 shadow-lg hover:shadow-xl'
                      }`}
                    >
                      {/* Progress Bar */}
                      {isActive && (
                        <motion.div
                          initial={{ width: '0%' }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 4, ease: "linear" }}
                          className="absolute top-0 left-0 h-1 bg-white/30 rounded-full"
                        />
                      )}

                      {/* Background Pattern */}
                      <div className={`absolute inset-0 opacity-10 ${
                        isActive ? 'bg-white/10' : 'bg-qventis-coral/5 group-hover:bg-qventis-coral/10'
                      }`} />

                      <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-3">
                          <div className={`flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 ${
                            isActive 
                              ? 'bg-white/20 text-white' 
                              : 'bg-qventis-coral/10 text-qventis-coral group-hover:bg-qventis-coral/20'
                          }`}>
                            <IconComponent className="w-6 h-6" />
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className={`text-sm font-bold ${
                                isActive ? 'text-white/90' : 'text-qventis-coral'
                              }`}>
                                Étape {step.id}
                              </span>
                              <div className={`h-4 w-px ${
                                isActive ? 'bg-white/30' : 'bg-qventis-gray-300'
                              }`}></div>
                              <span className={`text-xs font-medium ${
                                isActive ? 'text-white/80' : 'text-qventis-gray-500'
                              }`}>
                                {step.duration}
                              </span>
                            </div>
                            <h4 className={`font-display font-bold text-lg mb-1 ${
                              isActive ? 'text-white' : 'text-qventis-gray-900'
                            }`}>
                              {step.title}
                            </h4>
                            <p className={`text-sm ${
                              isActive ? 'text-white/90' : 'text-qventis-gray-600'
                            }`}>
                              {step.subtitle}
                            </p>
                          </div>

                          <ArrowRightIcon className={`w-5 h-5 transition-all duration-300 ${
                            isActive 
                              ? 'text-white translate-x-1' 
                              : 'text-qventis-gray-400 group-hover:text-qventis-coral group-hover:translate-x-1'
                          }`} />
                        </div>
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              {/* Progress Indicator */}
              <div className="mt-8 flex gap-2">
                {processSteps.map((_, index) => (
                  <motion.div
                    key={index}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      index === activeStep 
                        ? 'w-8 bg-qventis-coral' 
                        : index < activeStep
                        ? 'w-4 bg-qventis-coral/60'
                        : 'w-2 bg-qventis-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-qventis-coral/5 to-qventis-coral/10 rounded-3xl p-8 lg:p-10 border border-qventis-coral/20 backdrop-blur-sm relative overflow-hidden"
              >
                
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-gradient-to-br from-qventis-coral/20 to-qventis-coral/10" />
                </div>

                <div className="relative z-10">
                  
                  {/* Header */}
                  <div className="flex items-start gap-6 mb-8">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="flex items-center justify-center w-20 h-20 bg-qventis-coral rounded-3xl shadow-xl"
                    >
                      {React.createElement(processSteps[activeStep].icon, { className: "w-10 h-10 text-white" })}
                    </motion.div>
                    
                    <div className="flex-1">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex items-center gap-3 mb-2"
                      >
                        <span className="text-2xl font-display font-bold text-qventis-coral">
                          {processSteps[activeStep].id}
                        </span>
                        <div className="h-6 w-px bg-qventis-gray-300"></div>
                        <div className="flex items-center gap-2 text-qventis-gray-600">
                          <ClockIcon className="w-4 h-4" />
                          <span className="font-medium text-sm">
                            {processSteps[activeStep].duration}
                          </span>
                        </div>
                      </motion.div>
                      
                      <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-3xl lg:text-4xl font-display font-bold text-qventis-gray-900 mb-2"
                      >
                        {processSteps[activeStep].title}
                      </motion.h3>
                      
                      <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="text-lg text-qventis-coral font-medium"
                      >
                        {processSteps[activeStep].subtitle}
                      </motion.p>
                    </div>
                  </div>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="text-lg text-qventis-gray-700 leading-relaxed mb-8"
                  >
                    {processSteps[activeStep].description}
                  </motion.p>

                  {/* Features */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50"
                  >
                    <h4 className="font-display font-bold text-qventis-gray-900 mb-4 flex items-center gap-2">
                      <CheckIcon className="w-5 h-5 text-qventis-coral" />
                      Ce que nous livrons
                    </h4>
                    
                    <div className="grid gap-3">
                      {processSteps[activeStep].features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.8 + (index * 0.1) }}
                          className="flex items-start gap-3 p-3 rounded-xl bg-white/50 border border-white/40 hover:bg-white/70 transition-all duration-300"
                        >
                          <div className="flex items-center justify-center w-6 h-6 bg-qventis-coral/20 rounded-lg flex-shrink-0 mt-0.5">
                            <CheckIcon className="w-3 h-3 text-qventis-coral" />
                          </div>
                          <span className="text-qventis-gray-700 leading-relaxed">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </Container>
    </section>
  );
}
