'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { 
  ChevronDownIcon,
  PlusIcon,
  MinusIcon,
  ClockIcon,
  CheckCircleIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';

export function FAQContent() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqSections = [
    {
      category: 'Général',
      icon: LightBulbIcon,
      faqs: [
        {
          question: 'Quels types de projets réalisez-vous ?',
          answer: 'Nous créons des sites web vitrine et e-commerce, développons des agents IA personnalisés, mettons en place des solutions d\'analyse de données, et proposons des développements sur-mesure. Chaque projet est adapté aux besoins spécifiques de votre entreprise.',
          helpful: true,
          lastUpdated: '2024-01-15'
        },
        {
          question: 'Dans quelles régions intervenez-vous ?',
          answer: 'Basés à Paris, nous intervenons dans toute la France. Nos méthodes de travail collaborative nous permettent de gérer efficacement des projets partout en Europe, avec un suivi personnalisé à distance.',
          helpful: true,
          lastUpdated: '2024-01-10'
        }
      ]
    },
    {
      category: 'Délais & Process',
      icon: ClockIcon,
      faqs: [
        {
          question: 'Quels sont vos délais de réalisation ?',
          answer: 'Les délais varient selon le projet : 2-4 semaines pour un site vitrine, 6-12 semaines pour un e-commerce, 4-8 semaines pour un agent IA. Nous définissons ensemble un planning précis dès le début du projet.',
          helpful: true,
          lastUpdated: '2024-01-12'
        },
        {
          question: 'Comment se déroule un projet type ?',
          answer: 'Notre processus en 5 étapes : 1) Découverte & Analyse (1-2 semaines), 2) Conception & Prototypage (2-3 semaines), 3) Développement & Tests (4-8 semaines), 4) Mise en ligne & Formation (1 semaine), 5) Suivi & Évolution (continu). Vous êtes impliqué à chaque étape avec des points réguliers.',
          helpful: true,
          lastUpdated: '2024-01-08'
        },
        {
          question: 'Puis-je modifier le projet en cours de route ?',
          answer: 'Absolument ! Nous prévoyons des points de validation et restons flexibles. Des ajustements mineurs sont inclus, et nous évaluons ensemble l\'impact des modifications importantes sur le planning et le budget.',
          helpful: true,
          lastUpdated: '2024-01-05'
        }
      ]
    },
    {
      category: 'Tarifs & Support',
      icon: CheckCircleIcon,
      faqs: [
        {
          question: 'Comment calculez-vous vos tarifs ?',
          answer: 'Nos tarifs sont basés sur la complexité, les fonctionnalités et le temps de développement. Nous proposons des devis gratuits détaillés avec un prix fixe pour éviter les mauvaises surprises. Transparence totale garantie.',
          helpful: true,
          lastUpdated: '2024-01-14'
        },
        {
          question: 'Proposez-vous un support après livraison ?',
          answer: 'Oui ! Nous offrons 3 mois de support gratuit après livraison, puis des contrats de maintenance adaptés. Support technique 24/7, mises à jour sécurité, sauvegardes automatiques et assistance utilisateur.',
          helpful: true,
          lastUpdated: '2024-01-11'
        },
        {
          question: 'Travaillez-vous avec toutes les tailles d\'entreprise ?',
          answer: 'Oui ! Nous accompagnons aussi bien les startups que les PME et grandes entreprises. Nos solutions s\'adaptent à votre budget et évoluent avec votre croissance. Nous avons des offres pour tous les besoins.',
          helpful: true,
          lastUpdated: '2024-01-09'
        }
      ]
    }
  ];

  let globalIndex = 0;

  return (
    <section className="py-20 bg-qventis-white relative">
      <Container>
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-qventis-gray-900 mb-4">
            Questions fréquentes
          </h2>
          <p className="text-lg text-qventis-gray-600 max-w-2xl mx-auto">
            Retrouvez toutes les réponses à vos questions organisées par thématique
          </p>
        </motion.div>

        {/* FAQ Sections */}
        <div className="space-y-12">
          {faqSections.map((section, sectionIndex) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              
              {/* Section header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-qventis-coral/10 rounded-xl flex items-center justify-center">
                  <section.icon className="w-5 h-5 text-qventis-coral" />
                </div>
                <h3 className="text-2xl font-display font-bold text-qventis-gray-900">
                  {section.category}
                </h3>
                <div className="h-px bg-qventis-gray-200 flex-1" />
              </div>

              {/* FAQs */}
              <div className="space-y-4">
                {section.faqs.map((faq, faqIndex) => {
                  const currentIndex = globalIndex++;
                  const isActive = activeIndex === currentIndex;
                  
                  return (
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: faqIndex * 0.1 }}
                      viewport={{ once: true }}
                      className={`group rounded-2xl border-2 transition-all duration-500 ${
                        isActive 
                          ? 'border-qventis-coral bg-gradient-to-r from-qventis-coral/5 to-qventis-coral/10 shadow-lg shadow-qventis-coral/10' 
                          : 'border-qventis-gray-100 bg-white hover:border-qventis-coral/30 hover:shadow-lg'
                      }`}
                    >
                      <button
                        onClick={() => toggleItem(currentIndex)}
                        className="w-full px-8 py-6 text-left flex items-center justify-between group-hover:px-10 transition-all duration-300"
                      >
                        <div className="flex items-center gap-4 flex-1">
                          <motion.div
                            animate={{ 
                              scale: isActive ? 1.1 : 1,
                              rotate: isActive ? 5 : 0
                            }}
                            transition={{ duration: 0.3 }}
                            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                              isActive 
                                ? 'bg-qventis-coral text-white shadow-lg' 
                                : 'bg-qventis-coral/10 text-qventis-coral group-hover:bg-qventis-coral/20'
                            }`}
                          >
                            <span className="font-bold text-sm">
                              {String(currentIndex + 1).padStart(2, '0')}
                            </span>
                          </motion.div>
                          <div className="flex-1">
                            <span className={`font-semibold text-lg transition-colors duration-300 ${
                              isActive ? 'text-qventis-coral' : 'text-qventis-gray-900 group-hover:text-qventis-coral'
                            }`}>
                              {faq.question}
                            </span>
                          </div>
                        </div>
                        
                        <motion.div
                          animate={{ 
                            rotate: isActive ? 45 : 0,
                            scale: isActive ? 1.1 : 1
                          }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                            isActive 
                              ? 'bg-qventis-coral text-white' 
                              : 'bg-qventis-gray-100 text-qventis-gray-400 group-hover:bg-qventis-coral/10 group-hover:text-qventis-coral'
                          }`}
                        >
                          {isActive ? (
                            <MinusIcon className="w-4 h-4" />
                          ) : (
                            <PlusIcon className="w-4 h-4" />
                          )}
                        </motion.div>
                      </button>
                      
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: 'easeInOut' }}
                            className="overflow-hidden"
                          >
                            <motion.div
                              initial={{ y: -10, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              exit={{ y: -10, opacity: 0 }}
                              transition={{ duration: 0.3, delay: 0.1 }}
                              className="px-8 pb-8 pt-2"
                            >
                              <div className="ml-14">
                                <div className="text-qventis-gray-600 leading-relaxed text-lg mb-4">
                                  {faq.answer}
                                </div>
                          
                              </div>
                            </motion.div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

      </Container>
    </section>
  );
}
