'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRightIcon, 
  PhoneIcon, 
  CheckIcon, 
  PlayCircleIcon,
  ClockIcon,
  ShieldCheckIcon,
  CursorArrowRaysIcon
} from '@heroicons/react/24/outline';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import AppointmentForm from '../forms/AppointmentForm';

const HeroSection = () => {
  // État pour contrôler l'ouverture/fermeture du modal de rendez-vous
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);

  // Architecture de l'information : ordre logique des éléments
  const trustSignals = [
    { icon: ShieldCheckIcon, text: "Solutions IA sur-mesure" },
    { icon: ClockIcon, text: "Développement rapide" },
    { icon: CursorArrowRaysIcon, text: "Expertise data & web" }
  ];

  const socialProof = [
    "★★★★★ 4.9/5 (127 avis)",
    "250+ projets digitaux",
    "Agents IA déployés"
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-qventis-white via-qventis-gray-50 to-qventis-white overflow-hidden">
         
        {/* Dégradé de masquage pour fondu */}
        <div className="absolute inset-0 bg-gradient-to-r from-qventis-white/20 via-transparent to-qventis-white/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-qventis-white/30 via-transparent to-qventis-white/30" />
      
      {/* Layout en Z-pattern pour guider le regard */}
      <Container className="relative z-10 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
          
          {/* Zone 1 du Z-pattern : Message principal (gauche) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* 2. Value Proposition claire et immédiate */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-display font-bold text-qventis-gray-900 leading-tight">
                Solutions digitales
                <br />
                <span className="text-qventis-coral relative">
                  intelligentes
                  {/* Soulignement visuel pour attirer l'attention */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: 1 }}
                    className="absolute -bottom-2 left-0 h-1 bg-qventis-coral/30"
                  />
                </span>
                <br />
                & sur-mesure
              </h1>
              
              {/* Bénéfice clairement énoncé */}
              <p className="text-xl lg:text-2xl text-qventis-gray-600 max-w-2xl leading-relaxed">
                <strong className="text-qventis-gray-900">Sites web, agents IA, analyse de données</strong> et solutions informatiques 
                adaptées à vos besoins spécifiques.
              </p>
            </motion.div>

            {/* 3. Points de réassurance - Réduction des objections */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid md:grid-cols-3 gap-4"
            >
              {trustSignals.map((signal, index) => {
                const IconComponent = signal.icon;
                return (
                  <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-qventis-gray-100 shadow-sm">
                    <IconComponent className="w-5 h-5 text-qventis-coral flex-shrink-0" />
                    <span className="text-sm font-medium text-qventis-gray-700">{signal.text}</span>
                  </div>
                );
              })}
            </motion.div>

            {/* 4. Call-to-Actions hiérarchisés */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              {/* CTA Principal - Action désirée */}
              <Button
                size="lg"
                className="px-8 py-4 text-lg font-semibold bg-qventis-coral hover:bg-qventis-coral-dark text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group min-w-[200px]"
              >
                Plus d'informations
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              {/* CTA Contact direct - Urgence */}
              <Button
                variant="ghost"
                size="lg"
                className="px-6 py-4 text-lg font-semibold text-qventis-coral hover:bg-qventis-coral/10 rounded-xl group min-w-[160px]"
                onClick={() => setIsAppointmentModalOpen(true)}
              >
                <PhoneIcon className="w-5 h-5 mr-2" />
                Planifier un rendez-vous téléphonique
              </Button>
            </motion.div>

          </div>

          {/* Zone 2 du Z-pattern : Élément visuel (droite) */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative"
            >
              {/* Mockup de site web - Preuve visuelle */}
              <div className="bg-white rounded-2xl shadow-2xl border border-qventis-gray-100 overflow-hidden">
                {/* Browser bar */}
                <div className="bg-qventis-gray-100 px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                    <div className="w-3 h-3 bg-green-400 rounded-full" />
                  </div>
                  <div className="flex-1 bg-white rounded px-3 py-1 text-xs text-qventis-gray-500 ml-4">
                    qventis.io
                  </div>
                </div>
                
                {/* Site content preview */}
                <div className="p-6 space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-2">
                      <div className="w-32 h-4 bg-qventis-coral/20 rounded" />
                      <div className="w-24 h-3 bg-qventis-gray-200 rounded" />
                    </div>
                    <div className="w-20 h-8 bg-qventis-coral/30 rounded" />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="w-full h-4 bg-qventis-gray-200 rounded" />
                    <div className="w-3/4 h-4 bg-qventis-gray-200 rounded" />
                    <div className="w-5/6 h-4 bg-qventis-gray-200 rounded" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="w-full h-20 bg-qventis-gray-100 rounded" />
                      <div className="w-3/4 h-3 bg-qventis-gray-200 rounded" />
                    </div>
                    <div className="space-y-2">
                      <div className="w-full h-20 bg-qventis-gray-100 rounded" />
                      <div className="w-2/3 h-3 bg-qventis-gray-200 rounded" />
                    </div>
                  </div>
                  
                  <div className="w-full h-12 bg-qventis-coral/20 rounded" />
                </div>
              </div>

              {/* Floating metrics - Preuve sociale */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 bg-white rounded-xl shadow-lg border border-qventis-gray-100 p-4 z-10"
              >
                <div className="text-2xl font-bold text-qventis-coral">24/7</div>
                <div className="text-xs text-qventis-gray-600">Support</div>
              </motion.div>

            </motion.div>
          </div>
        </div>
      </Container>

      {/* Modal de planification de rendez-vous */}
      <AppointmentForm 
        isOpen={isAppointmentModalOpen} 
        onClose={() => setIsAppointmentModalOpen(false)} 
      />
    </section>
  );
};

export default HeroSection;
