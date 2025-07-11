'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { Navbar } from '@/components/navigation/Navbar';
import WebsiteQuestions from './components/WebsiteQuestions';
import SeoQuestions from './components/SeoQuestions';
import AIAgentQuestions from './components/AIAgentQuestions';
import DataAnalyticsQuestions from './components/DataAnalyticsQuestions';
import CustomDevQuestions from './components/CustomDevQuestions';
import ContactForm from './components/ContactForm';
import QuoteSummary from './components/QuoteSummary';
import JsonLdSchema from './components/JsonLdSchema';

export default function DevisPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [serviceType, setServiceType] = useState<string>('');
  const [formData, setFormData] = useState<Record<string, any>>({});

  // Progresser vers l'étape suivante
  const nextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  // Revenir à l'étape précédente
  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  // Mettre à jour les données du formulaire
  const updateFormData = (data: object) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  // Choisir un service et passer à l'étape suivante
  const selectService = (type: string) => {
    setServiceType(type);
    updateFormData({ serviceType: type });
    nextStep();
  };

  // Calculer le pourcentage de progression
  const calculateProgress = () => {
    // Définir le nombre total d'étapes (sélection service + questions spécifiques + contact + résumé)
    const totalSteps = 4;
    return ((currentStep) / (totalSteps - 1)) * 100;
  };

  // Rendre l'étape actuelle
  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-2xl shadow-xl p-8 max-w-3xl mx-auto border border-qventis-gray-100"
          >
            <h2 className="text-2xl font-display font-bold text-qventis-gray-900 mb-6">
              Quel type de service vous intéresse ?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Option Site Web */}
              <button
                onClick={() => selectService('website')}
                className="flex flex-col items-center p-6 border border-qventis-gray-200 rounded-xl hover:border-qventis-coral hover:bg-qventis-coral/5 transition-all group"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-qventis-coral to-qventis-coral/80 flex items-center justify-center mb-4 group-hover:scale-110 transition-all shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-xl font-display font-bold text-qventis-gray-900 mb-2">Sites Web</h3>
                <p className="text-qventis-gray-600 text-center text-sm">Sites vitrines, e-commerce, applications web</p>
              </button>

              {/* Option SEO */}
              <button
                onClick={() => selectService('seo')}
                className="flex flex-col items-center p-6 border border-qventis-gray-200 rounded-xl hover:border-qventis-coral hover:bg-qventis-coral/5 transition-all group"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-qventis-coral to-qventis-coral/70 flex items-center justify-center mb-4 group-hover:scale-110 transition-all shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                  </svg>
                </div>
                <h3 className="text-xl font-display font-bold text-qventis-gray-900 mb-2">SEO</h3>
                <p className="text-qventis-gray-600 text-center text-sm">Référencement, optimisation, visibilité</p>
              </button>

              {/* Option Agents IA */}
              <button
                onClick={() => selectService('aiAgent')}
                className="flex flex-col items-center p-6 border border-qventis-gray-200 rounded-xl hover:border-qventis-coral hover:bg-qventis-coral/5 transition-all group"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-qventis-coral to-qventis-coral/60 flex items-center justify-center mb-4 group-hover:scale-110 transition-all shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-display font-bold text-qventis-gray-900 mb-2">Agents IA</h3>
                <p className="text-qventis-gray-600 text-center text-sm">Chatbots, assistants virtuels, IA conversationnelle</p>
              </button>

              {/* Option Data Analytics */}
              <button
                onClick={() => selectService('dataAnalytics')}
                className="flex flex-col items-center p-6 border border-qventis-gray-200 rounded-xl hover:border-qventis-coral hover:bg-qventis-coral/5 transition-all group"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-qventis-coral to-qventis-coral/75 flex items-center justify-center mb-4 group-hover:scale-110 transition-all shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-display font-bold text-qventis-gray-900 mb-2">Data Analytics</h3>
                <p className="text-qventis-gray-600 text-center text-sm">Dashboards, analyses de données, visualisations</p>
              </button>

              {/* Option Développement sur-mesure */}
              <button
                onClick={() => selectService('customDev')}
                className="flex flex-col items-center p-6 border border-qventis-gray-200 rounded-xl hover:border-qventis-coral hover:bg-qventis-coral/5 transition-all group md:col-span-2 max-w-md mx-auto w-full"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-qventis-coral to-qventis-coral/90 flex items-center justify-center mb-4 group-hover:scale-110 transition-all shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-display font-bold text-qventis-gray-900 mb-2">Développement Sur-mesure</h3>
                <p className="text-qventis-gray-600 text-center text-sm">Solutions personnalisées, API, intégrations</p>
              </button>
            </div>
          </motion.div>
        );
      case 1:
        // Afficher les questions spécifiques au service sélectionné
        switch (serviceType) {
          case 'website':
            return <WebsiteQuestions nextStep={nextStep} prevStep={prevStep} updateFormData={updateFormData} />;
          case 'seo':
            return <SeoQuestions nextStep={nextStep} prevStep={prevStep} updateFormData={updateFormData} />;
          case 'aiAgent':
            return <AIAgentQuestions nextStep={nextStep} prevStep={prevStep} updateFormData={updateFormData} />;
          case 'dataAnalytics':
            return <DataAnalyticsQuestions nextStep={nextStep} prevStep={prevStep} updateFormData={updateFormData} />;
          case 'customDev':
            return <CustomDevQuestions nextStep={nextStep} prevStep={prevStep} updateFormData={updateFormData} />;
          default:
            return null;
        }
      case 2:
        // Formulaire de contact
        return <ContactForm nextStep={nextStep} prevStep={prevStep} updateFormData={updateFormData} />;
      case 3:
        // Résumé et confirmation
        return <QuoteSummary prevStep={prevStep} formData={formData} serviceType={serviceType} />;
      default:
        return null;
    }
  };

  return (
    <>
      <JsonLdSchema />
      <Navbar />
      <Container className="py-24 pt-36">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-qventis-gray-900 text-center mb-2">
          Obtenir un devis personnalisé
        </h1>
        <p className="text-qventis-gray-600 text-center mb-10 max-w-2xl mx-auto">
          Remplissez ce formulaire pour recevoir un devis adapté à vos besoins. 
          Notre équipe étudiera votre demande et vous contactera dans les 24 heures.
        </p>

        {/* Barre de progression */}
        <div className="mb-10 max-w-md mx-auto">
          <div className="h-2 bg-qventis-gray-100 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-qventis-coral" 
              initial={{ width: '0%' }}
              animate={{ width: `${calculateProgress()}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Rendu de l'étape actuelle */}
        {renderStep()}
      </div>
    </Container>
    </>
  );
}
