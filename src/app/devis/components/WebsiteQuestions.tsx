'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ChevronRightIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

interface WebsiteQuestionsProps {
  nextStep: () => void;
  prevStep: () => void;
  updateFormData: (data: object) => void;
}

export default function WebsiteQuestions({ nextStep, prevStep, updateFormData }: WebsiteQuestionsProps) {
  const [formState, setFormState] = useState({
    websiteType: '',
    pagesCount: '',
    features: [] as string[],
    designPreference: '',
    existingWebsite: '',
    timeline: '',
    budget: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (feature: string) => {
    setFormState((prev) => {
      if (prev.features.includes(feature)) {
        return { ...prev, features: prev.features.filter(f => f !== feature) };
      } else {
        return { ...prev, features: [...prev.features, feature] };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateFormData({ 
      websiteDetails: formState 
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
        Détails de votre projet web
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Type de site web */}
        <div className="space-y-2">
          <label className="block font-medium text-qventis-gray-900">
            Quel type de site souhaitez-vous ?
          </label>
          <select
            name="websiteType"
            value={formState.websiteType}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-qventis-gray-200 focus:ring-2 focus:ring-qventis-coral/50 focus:border-qventis-coral outline-none transition-all"
          >
            <option value="">Sélectionnez une option</option>
            <option value="vitrine">Site vitrine</option>
            <option value="ecommerce">Site e-commerce</option>
            <option value="blog">Blog</option>
            <option value="application">Application web</option>
            <option value="portfolio">Portfolio</option>
            <option value="autre">Autre</option>
          </select>
        </div>

        {/* Nombre de pages */}
        <div className="space-y-2">
          <label className="block font-medium text-qventis-gray-900">
            Combien de pages estimez-vous avoir besoin ?
          </label>
          <select
            name="pagesCount"
            value={formState.pagesCount}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-qventis-gray-200 focus:ring-2 focus:ring-qventis-coral/50 focus:border-qventis-coral outline-none transition-all"
          >
            <option value="">Sélectionnez une option</option>
            <option value="1-5">1 à 5 pages</option>
            <option value="6-10">6 à 10 pages</option>
            <option value="11-20">11 à 20 pages</option>
            <option value="20+">Plus de 20 pages</option>
          </select>
        </div>

        {/* Fonctionnalités */}
        <div className="space-y-2">
          <label className="block font-medium text-qventis-gray-900 mb-2">
            Quelles fonctionnalités souhaitez-vous inclure ?
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { id: 'responsive', label: 'Design responsive' },
              { id: 'seo', label: 'Optimisation SEO' },
              { id: 'blog', label: 'Section blog' },
              { id: 'contact', label: 'Formulaire de contact' },
              { id: 'newsletter', label: 'Newsletter' },
              { id: 'social', label: 'Intégration réseaux sociaux' },
              { id: 'analytics', label: 'Google Analytics' },
              { id: 'multilingual', label: 'Site multilingue' },
              { id: 'reservation', label: 'Système de réservation' },
              { id: 'payment', label: 'Paiement en ligne' },
            ].map((feature) => (
              <div key={feature.id} className="flex items-center">
                <input
                  id={feature.id}
                  type="checkbox"
                  className="w-5 h-5 text-qventis-coral rounded border-qventis-gray-300 focus:ring-qventis-coral/30"
                  checked={formState.features.includes(feature.id)}
                  onChange={() => handleCheckboxChange(feature.id)}
                />
                <label htmlFor={feature.id} className="ml-2 text-qventis-gray-700">
                  {feature.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Préférence de design */}
        <div className="space-y-2">
          <label className="block font-medium text-qventis-gray-900">
            Avez-vous une préférence de design ?
          </label>
          <select
            name="designPreference"
            value={formState.designPreference}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-qventis-gray-200 focus:ring-2 focus:ring-qventis-coral/50 focus:border-qventis-coral outline-none transition-all"
          >
            <option value="">Sélectionnez une option</option>
            <option value="modern">Moderne & Minimaliste</option>
            <option value="corporate">Corporate & Professionnel</option>
            <option value="creative">Créatif & Audacieux</option>
            <option value="luxe">Élégant & Luxueux</option>
            <option value="ecommerce">E-commerce optimisé</option>
            <option value="pas-de-preference">Pas de préférence</option>
          </select>
        </div>

        {/* Site existant */}
        <div className="space-y-2">
          <label className="block font-medium text-qventis-gray-900">
            Avez-vous déjà un site web ?
          </label>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              className={`p-3 rounded-xl border transition-all ${
                formState.existingWebsite === 'oui'
                  ? 'bg-qventis-coral/10 border-qventis-coral text-qventis-coral'
                  : 'bg-qventis-gray-50 border-qventis-gray-200 hover:bg-qventis-coral/5'
              }`}
              onClick={() => setFormState((prev) => ({ ...prev, existingWebsite: 'oui' }))}
            >
              Oui
            </button>
            <button
              type="button"
              className={`p-3 rounded-xl border transition-all ${
                formState.existingWebsite === 'non'
                  ? 'bg-qventis-coral/10 border-qventis-coral text-qventis-coral'
                  : 'bg-qventis-gray-50 border-qventis-gray-200 hover:bg-qventis-coral/5'
              }`}
              onClick={() => setFormState((prev) => ({ ...prev, existingWebsite: 'non' }))}
            >
              Non
            </button>
          </div>
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
            <option value="urgent">Urgent (moins de 2 semaines)</option>
            <option value="standard">Standard (3-4 semaines)</option>
            <option value="flexible">Flexible (1-2 mois)</option>
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
            <option value="moins-1000">Moins de 1 000€</option>
            <option value="1000-3000">1 000€ - 3 000€</option>
            <option value="3000-5000">3 000€ - 5 000€</option>
            <option value="5000-10000">5 000€ - 10 000€</option>
            <option value="plus-10000">Plus de 10 000€</option>
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
