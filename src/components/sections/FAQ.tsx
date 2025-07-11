'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { 
  ChevronDownIcon,
  QuestionMarkCircleIcon,
  PlusIcon,
  MinusIcon
} from '@heroicons/react/24/outline';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'Quels types de projets réalisez-vous ?',
      answer: 'Nous créons des sites web vitrine et e-commerce, développons des agents IA personnalisés, mettons en place des solutions d\'analyse de données, et proposons des développements sur-mesure. Chaque projet est adapté aux besoins spécifiques de votre entreprise.'
    },
    {
      question: 'Quels sont vos délais de réalisation ?',
      answer: 'Les délais varient selon le projet : 2-4 semaines pour un site vitrine, 6-12 semaines pour un e-commerce, 4-8 semaines pour un agent IA. Nous définissons ensemble un planning précis dès le début du projet.'
    },
    {
      question: 'Comment calculez-vous vos tarifs ?',
      answer: 'Nos tarifs sont basés sur la complexité, les fonctionnalités et le temps de développement. Nous proposons des devis gratuits détaillés avec un prix fixe pour éviter les mauvaises surprises. Transparence totale garantie.'
    },
    {
      question: 'Proposez-vous un support après livraison ?',
      answer: 'Oui ! Nous offrons 3 mois de support gratuit après livraison, puis des contrats de maintenance adaptés. Support technique 24/7, mises à jour sécurité, sauvegardes automatiques et assistance utilisateur.'
    },
    {
      question: 'Travaillez-vous avec toutes les tailles d\'entreprise ?',
      answer: 'Oui ! Nous accompagnons aussi bien les startups que les PME et grandes entreprises. Nos solutions s\'adaptent à votre budget et évoluent avec votre croissance. Nous avons des offres pour tous les besoins.'
    },
    {
      question: 'Dans quelles régions intervenez-vous ?',
      answer: 'Basés à Paris, nous intervenons dans toute la France. Nos méthodes de travail collaborative nous permettent de gérer efficacement des projets partout en Europe, avec un suivi personnalisé à distance.'
    },
    {
      question: 'Comment se déroule un projet type ?',
      answer: 'Notre processus en 4 étapes : 1) Analyse de vos besoins, 2) Conception et maquettes, 3) Développement avec validation, 4) Mise en ligne et formation. Vous êtes impliqué à chaque étape avec des points réguliers.'
    },
    {
      question: 'Puis-je modifier le projet en cours de route ?',
      answer: 'Absolument ! Nous prévoyons des points de validation et restons flexibles. Des ajustements mineurs sont inclus, et nous évaluons ensemble l\'impact des modifications importantes sur le planning et le budget.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-qventis-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 -left-10 w-40 h-40 bg-qventis-coral/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 -right-10 w-60 h-60 bg-qventis-coral/10 rounded-full blur-3xl"
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
            <QuestionMarkCircleIcon className="w-5 h-5 text-qventis-coral" />
            <span className="text-sm font-semibold text-qventis-coral">Questions Fréquentes</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl lg:text-5xl font-display font-bold text-qventis-gray-900 mb-6"
          >
            Toutes vos questions ont
            <motion.span 
              className="text-qventis-coral"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {' '}une réponse
            </motion.span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-qventis-gray-600 leading-relaxed"
          >
            Découvrez tout ce que vous devez savoir sur nos services et notre approche.
          </motion.p>
        </motion.div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isActive = activeIndex === index;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`group rounded-2xl border-2 transition-all duration-500 ${
                    isActive 
                      ? 'border-qventis-coral bg-gradient-to-r from-qventis-coral/5 to-qventis-coral/10 shadow-lg shadow-qventis-coral/10' 
                      : 'border-qventis-gray-100 bg-white hover:border-qventis-coral/30 hover:shadow-lg'
                  }`}
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between group-hover:px-10 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
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
                        <span className="font-bold text-sm">{String(index + 1).padStart(2, '0')}</span>
                      </motion.div>
                      <span className={`font-semibold text-lg transition-colors duration-300 ${
                        isActive ? 'text-qventis-coral' : 'text-qventis-gray-900 group-hover:text-qventis-coral'
                      }`}>
                        {faq.question}
                      </span>
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
                          <div className="ml-14 text-qventis-gray-600 leading-relaxed text-lg">
                            {faq.answer}
                          </div>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
