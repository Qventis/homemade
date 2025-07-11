'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ChevronRightIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

interface AIAgentQuestionsProps {
  nextStep: () => void;
  prevStep: () => void;
  updateFormData: (data: object) => void;
}

export default function AIAgentQuestions({ nextStep, prevStep, updateFormData }: AIAgentQuestionsProps) {
  const [formState, setFormState] = useState({
    agentType: '',
    useCases: [] as string[],
    dataSource: '',
    integrations: [] as string[],
    complexity: '',
    customization: '',
    timeline: '',
    budget: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (field: string, value: string) => {
    setFormState((prev) => {
      const currentValues = prev[field as keyof typeof prev] as string[];
      if (currentValues.includes(value)) {
        return { 
          ...prev, 
          [field]: currentValues.filter(v => v !== value) 
        };
      } else {
        return { 
          ...prev, 
          [field]: [...currentValues, value] 
        };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateFormData({
      aiAgentDetails: formState
    });
    nextStep();
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-2xl shadow-xl p-8 max-w-3xl mx-auto border border-qventis-gray-100"
    >
      <h2 className="text-2xl font-display font-bold text-qventis-gray-900 mb-6">
        Détails de votre agent IA
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Type d'agent IA */}
        <div className="space-y-2">
          <label className="block font-medium text-qventis-gray-900">
            Quel type d'agent IA souhaitez-vous ?
          </label>
          <select
            name="agentType"
            value={formState.agentType}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-qventis-gray-200 focus:ring-2 focus:ring-qventis-coral/50 focus:border-qventis-coral outline-none transition-all"
          >
            <option value="">Sélectionnez une option</option>
            <option value="chatbot">Chatbot d'assistance client</option>
            <option value="sales">Agent commercial</option>
            <option value="internal">Assistant interne pour employés</option>
            <option value="recommendation">Système de recommandations</option>
            <option value="multiagent">Système multi-agents</option>
            <option value="autre">Autre</option>
          </select>
        </div>

        {/* Cas d'usage */}
        <div className="space-y-2">
          <label className="block font-medium text-qventis-gray-900 mb-2">
            Quels sont vos principaux cas d'usage ?
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { id: 'faq', label: 'Réponses aux questions fréquentes' },
              { id: 'support', label: 'Support technique' },
              { id: 'sales', label: 'Vente et conversion' },
              { id: 'engagement', label: 'Engagement utilisateur' },
              { id: 'booking', label: 'Réservations et RDV' },
              { id: 'feedback', label: 'Collecte de feedback' },
              { id: 'onboarding', label: "Onboarding d'utilisateurs" },
              { id: 'internal', label: 'Aide à la décision interne' },
            ].map((useCase) => (
              <div key={useCase.id} className="flex items-center">
                <input
                  id={useCase.id}
                  type="checkbox"
                  className="w-5 h-5 text-qventis-coral rounded border-qventis-gray-300 focus:ring-qventis-coral/30"
                  checked={formState.useCases.includes(useCase.id)}
                  onChange={() => handleCheckboxChange('useCases', useCase.id)}
                />
                <label htmlFor={useCase.id} className="ml-2 text-qventis-gray-700">
                  {useCase.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Source de données */}
        <div className="space-y-2">
          <label className="block font-medium text-qventis-gray-900">
            Sur quelles sources de données l'agent doit-il être entraîné ?
          </label>
          <select
            name="dataSource"
            value={formState.dataSource}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-qventis-gray-200 focus:ring-2 focus:ring-qventis-coral/50 focus:border-qventis-coral outline-none transition-all"
          >
            <option value="">Sélectionnez une option</option>
            <option value="site">Site web existant</option>
            <option value="documents">Documentation interne</option>
            <option value="api">API et données structurées</option>
            <option value="mixte">Sources mixtes</option>
            <option value="aucune">Aucune source spécifique</option>
          </select>
        </div>

        {/* Intégrations */}
        <div className="space-y-2">
          <label className="block font-medium text-qventis-gray-900 mb-2">
            Quelles intégrations souhaitez-vous ?
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { id: 'website', label: 'Site web' },
              { id: 'whatsapp', label: 'WhatsApp' },
              { id: 'slack', label: 'Slack' },
              { id: 'teams', label: 'Microsoft Teams' },
              { id: 'email', label: 'Email' },
              { id: 'crm', label: 'CRM (Salesforce, HubSpot...)' },
              { id: 'api', label: 'API personnalisée' },
              { id: 'analytics', label: 'Analytics' },
            ].map((integration) => (
              <div key={integration.id} className="flex items-center">
                <input
                  id={`integration-${integration.id}`}
                  type="checkbox"
                  className="w-5 h-5 text-qventis-coral rounded border-qventis-gray-300 focus:ring-qventis-coral/30"
                  checked={formState.integrations.includes(integration.id)}
                  onChange={() => handleCheckboxChange('integrations', integration.id)}
                />
                <label htmlFor={`integration-${integration.id}`} className="ml-2 text-qventis-gray-700">
                  {integration.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Complexité */}
        <div className="space-y-2">
          <label className="block font-medium text-qventis-gray-900">
            Niveau de complexité attendu
          </label>
          <select
            name="complexity"
            value={formState.complexity}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-qventis-gray-200 focus:ring-2 focus:ring-qventis-coral/50 focus:border-qventis-coral outline-none transition-all"
          >
            <option value="">Sélectionnez une option</option>
            <option value="simple">Simple (réponses prédéfinies et FAQ)</option>
            <option value="medium">Moyen (compréhension contextuelle)</option>
            <option value="advanced">Avancé (raisonnement complexe)</option>
            <option value="expert">Expert (IA génératives avancées, multi-modales)</option>
          </select>
        </div>

        {/* Personnalisation */}
        <div className="space-y-2">
          <label className="block font-medium text-qventis-gray-900">
            Niveau de personnalisation requis
          </label>
          <select
            name="customization"
            value={formState.customization}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-qventis-gray-200 focus:ring-2 focus:ring-qventis-coral/50 focus:border-qventis-coral outline-none transition-all"
          >
            <option value="">Sélectionnez une option</option>
            <option value="low">Faible (solution standard)</option>
            <option value="medium">Moyen (personnalisation visuelle et ton)</option>
            <option value="high">Élevé (workflow et intégrations sur-mesure)</option>
          </select>
        </div>

        {/* Timeline */}
        <div className="space-y-2">
          <label className="block font-medium text-qventis-gray-900">
            Quel est votre délai souhaité ?
          </label>
          <select
            name="timeline"
            value={formState.timeline}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-qventis-gray-200 focus:ring-2 focus:ring-qventis-coral/50 focus:border-qventis-coral outline-none transition-all"
          >
            <option value="">Sélectionnez une option</option>
            <option value="urgent">Urgent (moins de 3 semaines)</option>
            <option value="standard">Standard (1-2 mois)</option>
            <option value="flexible">Flexible (2-3 mois)</option>
            <option value="long">Long terme (3+ mois)</option>
          </select>
        </div>

        {/* Budget */}
        <div className="space-y-2">
          <label className="block font-medium text-qventis-gray-900">
            Quel est votre budget approximatif ?
          </label>
          <select
            name="budget"
            value={formState.budget}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-qventis-gray-200 focus:ring-2 focus:ring-qventis-coral/50 focus:border-qventis-coral outline-none transition-all"
          >
            <option value="">Sélectionnez une option</option>
            <option value="moins-2500">Moins de 2 500€</option>
            <option value="2500-5000">2 500€ - 5 000€</option>
            <option value="5000-10000">5 000€ - 10 000€</option>
            <option value="10000-25000">10 000€ - 25 000€</option>
            <option value="plus-25000">Plus de 25 000€</option>
          </select>
        </div>

        <div className="flex justify-between pt-4">
          <Button
            type="button"
            variant="ghost"
            onClick={prevStep}
            className="text-qventis-gray-700"
          >
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            Retour
          </Button>
          <Button
            type="submit"
            variant="coral"
            className="shadow-lg px-6"
          >
            Continuer
            <ChevronRightIcon className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </form>
    </motion.div>
  );
}
