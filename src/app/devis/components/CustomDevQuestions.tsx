'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ChevronRightIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

interface CustomDevQuestionsProps {
  nextStep: () => void;
  prevStep: () => void;
  updateFormData: (data: object) => void;
}

export default function CustomDevQuestions({ nextStep, prevStep, updateFormData }: CustomDevQuestionsProps) {
  const [formState, setFormState] = useState({
    projectType: '',
    projectDescription: '',
    features: [] as string[],
    platform: [] as string[],
    existingSolution: '',
    techPreferences: '',
    integrations: [] as string[],
    scalabilityNeeds: '',
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
      customDevDetails: formState
    });
    nextStep();
  };

  return (
    <div
      className="bg-white rounded-2xl shadow-xl p-8 max-w-3xl mx-auto border border-qventis-gray-100"
    >
      <h2 className="text-2xl font-display font-bold text-qventis-gray-900 mb-6">
        Détails de votre projet de développement sur-mesure
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Type de projet */}
        <div className="space-y-2">
          <label className="block font-medium text-qventis-gray-900">
            Type de solution souhaitée
          </label>
          <select
            name="projectType"
            value={formState.projectType}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-qventis-gray-200 focus:ring-2 focus:ring-qventis-coral/50 focus:border-qventis-coral outline-none transition-all"
          >
            <option value="">Sélectionnez une option</option>
            <option value="webApp">Application web</option>
            <option value="mobileApp">Application mobile</option>
            <option value="desktop">Application desktop</option>
            <option value="api">API / Backend</option>
            <option value="integration">Solution d'intégration</option>
            <option value="automation">Automatisation de processus</option>
            <option value="other">Autre</option>
          </select>
        </div>

        {/* Description du projet */}
        <div className="space-y-2">
          <label className="block font-medium text-qventis-gray-900">
            Description du projet et objectifs principaux
          </label>
          <textarea
            name="projectDescription"
            placeholder="Décrivez votre projet, ses objectifs et les problématiques qu'il doit résoudre..."
            value={formState.projectDescription}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-3 rounded-xl border border-qventis-gray-200 focus:ring-2 focus:ring-qventis-coral/50 focus:border-qventis-coral outline-none transition-all"
          />
        </div>

        {/* Fonctionnalités clés */}
        <div className="space-y-2">
          <label className="block font-medium text-qventis-gray-900 mb-2">
            Fonctionnalités principales souhaitées
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { id: 'auth', label: 'Authentification utilisateurs' },
              { id: 'payment', label: 'Paiement en ligne' },
              { id: 'notification', label: 'Système de notifications' },
              { id: 'search', label: 'Recherche avancée' },
              { id: 'reporting', label: 'Génération de rapports' },
              { id: 'fileUpload', label: 'Upload de fichiers' },
              { id: 'realtime', label: 'Données temps réel' },
              { id: 'map', label: 'Cartographie/Géolocalisation' },
              { id: 'chat', label: 'Messagerie/Chat' },
              { id: 'multilingual', label: 'Support multilingue' },
              { id: 'admin', label: 'Interface admin' },
              { id: 'api', label: 'API pour tiers' },
            ].map((feature) => (
              <div key={feature.id} className="flex items-center">
                <input
                  id={`feature-${feature.id}`}
                  type="checkbox"
                  className="w-5 h-5 text-qventis-coral rounded border-qventis-gray-300 focus:ring-qventis-coral/30"
                  checked={formState.features.includes(feature.id)}
                  onChange={() => handleCheckboxChange('features', feature.id)}
                />
                <label htmlFor={`feature-${feature.id}`} className="ml-2 text-qventis-gray-700">
                  {feature.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Plateformes cibles */}
        <div className="space-y-2">
          <label className="block font-medium text-qventis-gray-900 mb-2">
            Plateformes cibles
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { id: 'web', label: 'Web (navigateurs)' },
              { id: 'ios', label: 'iOS' },
              { id: 'android', label: 'Android' },
              { id: 'windows', label: 'Windows' },
              { id: 'mac', label: 'macOS' },
              { id: 'linux', label: 'Linux' },
              { id: 'pwa', label: 'Progressive Web App' },
              { id: 'cloud', label: 'Cloud (SaaS)' },
            ].map((platform) => (
              <div key={platform.id} className="flex items-center">
                <input
                  id={`platform-${platform.id}`}
                  type="checkbox"
                  className="w-5 h-5 text-qventis-coral rounded border-qventis-gray-300 focus:ring-qventis-coral/30"
                  checked={formState.platform.includes(platform.id)}
                  onChange={() => handleCheckboxChange('platform', platform.id)}
                />
                <label htmlFor={`platform-${platform.id}`} className="ml-2 text-qventis-gray-700">
                  {platform.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Solution existante */}
        <div className="space-y-2">
          <label className="block font-medium text-qventis-gray-900">
            Avez-vous déjà une solution existante à améliorer ?
          </label>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              className={`p-3 rounded-xl border transition-all ${
                formState.existingSolution === 'oui'
                  ? 'bg-qventis-coral/10 border-qventis-coral text-qventis-coral'
                  : 'bg-qventis-gray-50 border-qventis-gray-200 hover:bg-qventis-coral/5'
              }`}
              onClick={() => setFormState((prev) => ({ ...prev, existingSolution: 'oui' }))}
            >
              Oui
            </button>
            <button
              type="button"
              className={`p-3 rounded-xl border transition-all ${
                formState.existingSolution === 'non'
                  ? 'bg-qventis-coral/10 border-qventis-coral text-qventis-coral'
                  : 'bg-qventis-gray-50 border-qventis-gray-200 hover:bg-qventis-coral/5'
              }`}
              onClick={() => setFormState((prev) => ({ ...prev, existingSolution: 'non' }))}
            >
              Non
            </button>
          </div>
        </div>

        {/* Préférences technologiques */}
        <div className="space-y-2">
          <label className="block font-medium text-qventis-gray-900">
            Préférences technologiques (si vous en avez)
          </label>
          <textarea
            name="techPreferences"
            placeholder="Ex: React, Node.js, PostgreSQL, AWS, etc."
            value={formState.techPreferences}
            onChange={handleChange}
            rows={2}
            className="w-full px-4 py-3 rounded-xl border border-qventis-gray-200 focus:ring-2 focus:ring-qventis-coral/50 focus:border-qventis-coral outline-none transition-all"
          />
        </div>

        {/* Intégrations */}
        <div className="space-y-2">
          <label className="block font-medium text-qventis-gray-900 mb-2">
            Intégrations nécessaires avec d'autres systèmes
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { id: 'crm', label: 'CRM (Salesforce, HubSpot...)' },
              { id: 'erp', label: 'ERP (SAP, Oracle...)' },
              { id: 'payment', label: 'Passerelles de paiement' },
              { id: 'accounting', label: 'Logiciels comptables' },
              { id: 'ecommerce', label: 'Plateformes e-commerce' },
              { id: 'marketing', label: 'Outils marketing' },
              { id: 'social', label: 'Réseaux sociaux' },
              { id: 'external', label: 'APIs tierces' },
            ].map((integration) => (
              <div key={integration.id} className="flex items-center">
                <input
                  id={`int-${integration.id}`}
                  type="checkbox"
                  className="w-5 h-5 text-qventis-coral rounded border-qventis-gray-300 focus:ring-qventis-coral/30"
                  checked={formState.integrations.includes(integration.id)}
                  onChange={() => handleCheckboxChange('integrations', integration.id)}
                />
                <label htmlFor={`int-${integration.id}`} className="ml-2 text-qventis-gray-700">
                  {integration.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Besoins de scalabilité */}
        <div className="space-y-2">
          <label className="block font-medium text-qventis-gray-900">
            Besoins de scalabilité
          </label>
          <select
            name="scalabilityNeeds"
            value={formState.scalabilityNeeds}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-qventis-gray-200 focus:ring-2 focus:ring-qventis-coral/50 focus:border-qventis-coral outline-none transition-all"
          >
            <option value="">Sélectionnez une option</option>
            <option value="small">Petite échelle (&lt; 100 utilisateurs)</option>
            <option value="medium">Échelle moyenne (100 - 1 000 utilisateurs)</option>
            <option value="large">Grande échelle (1 000 - 10 000 utilisateurs)</option>
            <option value="enterprise">Échelle entreprise (&gt; 10 000 utilisateurs)</option>
          </select>
        </div>

        {/* Timeline */}
        <div className="space-y-2">
          <label className="block font-medium text-qventis-gray-900">
            Délai souhaité pour le développement
          </label>
          <select
            name="timeline"
            value={formState.timeline}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-qventis-gray-200 focus:ring-2 focus:ring-qventis-coral/50 focus:border-qventis-coral outline-none transition-all"
          >
            <option value="">Sélectionnez une option</option>
            <option value="urgent">Urgent (1-2 mois)</option>
            <option value="normal">Standard (3-4 mois)</option>
            <option value="relaxed">Flexible (4-6 mois)</option>
            <option value="long">Long terme (6+ mois)</option>
          </select>
        </div>

        {/* Budget */}
        <div className="space-y-2">
          <label className="block font-medium text-qventis-gray-900">
            Budget approximatif
          </label>
          <select
            name="budget"
            value={formState.budget}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-qventis-gray-200 focus:ring-2 focus:ring-qventis-coral/50 focus:border-qventis-coral outline-none transition-all"
          >
            <option value="">Sélectionnez une option</option>
            <option value="less-5000">Moins de 5 000€</option>
            <option value="5000-10000">5 000€ - 10 000€</option>
            <option value="10000-25000">10 000€ - 25 000€</option>
            <option value="25000-50000">25 000€ - 50 000€</option>
            <option value="50000+">Plus de 50 000€</option>
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
    </div>
  );
}
