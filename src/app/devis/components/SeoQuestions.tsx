'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ChevronRightIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

interface SeoQuestionsProps {
  nextStep: () => void;
  prevStep: () => void;
  updateFormData: (data: object) => void;
}

export default function SeoQuestions({ nextStep, prevStep, updateFormData }: SeoQuestionsProps) {
  const [formState, setFormState] = useState({
    websiteUrl: '',
    businessType: '',
    targetAudience: '',
    objectives: [] as string[],
    competitors: '',
    currentSEO: '',
    keywordResearch: '',
    contentCreation: '',
    reportingFrequency: '',
    budget: '',
    timeline: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (objective: string) => {
    setFormState((prev) => {
      if (prev.objectives.includes(objective)) {
        return { ...prev, objectives: prev.objectives.filter(obj => obj !== objective) };
      } else {
        return { ...prev, objectives: [...prev.objectives, objective] };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateFormData({
      seoDetails: formState
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
        Détails de votre projet SEO
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* URL du site web */}
        <div className="space-y-2">
          <label className="block font-medium text-qventis-gray-900">
            URL de votre site web actuel
          </label>
          <input
            type="url"
            name="websiteUrl"
            placeholder="https://www.votresite.com"
            value={formState.websiteUrl}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-qventis-gray-200 focus:ring-2 focus:ring-qventis-coral/50 focus:border-qventis-coral outline-none transition-all"
          />
          <p className="text-xs text-qventis-gray-500">Laissez vide si vous n'avez pas encore de site web</p>
        </div>

        {/* Type d'entreprise */}
        <div className="space-y-2">
          <label className="block font-medium text-qventis-gray-900">
            Type d'entreprise ou secteur d'activité
          </label>
          <input
            type="text"
            name="businessType"
            placeholder="Ex: Commerce de détail, Service B2B, Restauration..."
            value={formState.businessType}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-qventis-gray-200 focus:ring-2 focus:ring-qventis-coral/50 focus:border-qventis-coral outline-none transition-all"
          />
        </div>

        {/* Public cible */}
        <div className="space-y-2">
          <label className="block font-medium text-qventis-gray-900">
            Public cible principal
          </label>
          <input
            type="text"
            name="targetAudience"
            placeholder="Ex: Professionnels, Particuliers, Tranche d'âge..."
            value={formState.targetAudience}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-qventis-gray-200 focus:ring-2 focus:ring-qventis-coral/50 focus:border-qventis-coral outline-none transition-all"
          />
        </div>

        {/* Objectifs SEO */}
        <div className="space-y-2">
          <label className="block font-medium text-qventis-gray-900 mb-2">
            Quels sont vos objectifs principaux ?
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { id: 'traffic', label: 'Augmenter le trafic' },
              { id: 'leads', label: 'Générer des leads' },
              { id: 'sales', label: 'Augmenter les ventes en ligne' },
              { id: 'brand', label: 'Renforcer la notoriété' },
              { id: 'local', label: 'Améliorer la visibilité locale' },
              { id: 'authority', label: "Développer l'autorité du site" },
              { id: 'ranking', label: 'Améliorer le classement pour des mots-clés spécifiques' },
              { id: 'international', label: 'Développer la présence internationale' },
            ].map((objective) => (
              <div key={objective.id} className="flex items-center">
                <input
                  id={objective.id}
                  type="checkbox"
                  className="w-5 h-5 text-qventis-coral rounded border-qventis-gray-300 focus:ring-qventis-coral/30"
                  checked={formState.objectives.includes(objective.id)}
                  onChange={() => handleCheckboxChange(objective.id)}
                />
                <label htmlFor={objective.id} className="ml-2 text-qventis-gray-700">
                  {objective.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Concurrents */}
        <div className="space-y-2">
          <label className="block font-medium text-qventis-gray-900">
            Principaux concurrents en ligne (si connus)
          </label>
          <textarea
            name="competitors"
            placeholder="Listez vos principaux concurrents (un par ligne)"
            value={formState.competitors}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-3 rounded-xl border border-qventis-gray-200 focus:ring-2 focus:ring-qventis-coral/50 focus:border-qventis-coral outline-none transition-all"
          />
        </div>

        {/* État actuel du SEO */}
        <div className="space-y-2">
          <label className="block font-medium text-qventis-gray-900">
            État actuel de votre SEO
          </label>
          <select
            name="currentSEO"
            value={formState.currentSEO}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-qventis-gray-200 focus:ring-2 focus:ring-qventis-coral/50 focus:border-qventis-coral outline-none transition-all"
          >
            <option value="">Sélectionnez une option</option>
            <option value="inexistant">Inexistant / Je débute</option>
            <option value="basique">Basique / Quelques optimisations</option>
            <option value="intermediate">Intermédiaire / Stratégie en place mais à améliorer</option>
            <option value="advanced">Avancé / Besoin d'expertise spécifique</option>
          </select>
        </div>

        {/* Recherche de mots-clés */}
        <div className="space-y-2">
          <label className="block font-medium text-qventis-gray-900">
            Besoin en recherche de mots-clés
          </label>
          <select
            name="keywordResearch"
            value={formState.keywordResearch}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-qventis-gray-200 focus:ring-2 focus:ring-qventis-coral/50 focus:border-qventis-coral outline-none transition-all"
          >
            <option value="">Sélectionnez une option</option>
            <option value="complete">Recherche complète (je n'ai pas de mots-clés)</option>
            <option value="improvement">Amélioration (j'ai déjà des mots-clés mais besoin d'optimisation)</option>
            <option value="specific">Recherche spécifique (pour une nouvelle page/section)</option>
          </select>
        </div>

        {/* Création de contenu */}
        <div className="space-y-2">
          <label className="block font-medium text-qventis-gray-900">
            Besoin en création de contenu
          </label>
          <select
            name="contentCreation"
            value={formState.contentCreation}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-qventis-gray-200 focus:ring-2 focus:ring-qventis-coral/50 focus:border-qventis-coral outline-none transition-all"
          >
            <option value="">Sélectionnez une option</option>
            <option value="complete">Création complète (articles, pages, descriptions)</option>
            <option value="partial">Création partielle (quelques articles/pages)</option>
            <option value="optimization">Optimisation du contenu existant</option>
            <option value="none">Pas besoin (nous créons notre contenu en interne)</option>
          </select>
        </div>

        {/* Fréquence de reporting */}
        <div className="space-y-2">
          <label className="block font-medium text-qventis-gray-900">
            Fréquence souhaitée pour les rapports
          </label>
          <select
            name="reportingFrequency"
            value={formState.reportingFrequency}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-qventis-gray-200 focus:ring-2 focus:ring-qventis-coral/50 focus:border-qventis-coral outline-none transition-all"
          >
            <option value="">Sélectionnez une option</option>
            <option value="weekly">Hebdomadaire</option>
            <option value="biweekly">Bimensuelle</option>
            <option value="monthly">Mensuelle</option>
            <option value="quarterly">Trimestrielle</option>
          </select>
        </div>

        {/* Timeline */}
        <div className="space-y-2">
          <label className="block font-medium text-qventis-gray-900">
            Durée d'engagement souhaitée
          </label>
          <select
            name="timeline"
            value={formState.timeline}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-qventis-gray-200 focus:ring-2 focus:ring-qventis-coral/50 focus:border-qventis-coral outline-none transition-all"
          >
            <option value="">Sélectionnez une option</option>
            <option value="3month">3 mois</option>
            <option value="6month">6 mois</option>
            <option value="12month">12 mois</option>
            <option value="ongoing">Contrat à durée indéterminée</option>
          </select>
        </div>

        {/* Budget */}
        <div className="space-y-2">
          <label className="block font-medium text-qventis-gray-900">
            Budget mensuel envisagé
          </label>
          <select
            name="budget"
            value={formState.budget}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-qventis-gray-200 focus:ring-2 focus:ring-qventis-coral/50 focus:border-qventis-coral outline-none transition-all"
          >
            <option value="">Sélectionnez une option</option>
            <option value="moins-500">Moins de 500€/mois</option>
            <option value="500-1000">500€ - 1 000€/mois</option>
            <option value="1000-2000">1 000€ - 2 000€/mois</option>
            <option value="2000-5000">2 000€ - 5 000€/mois</option>
            <option value="plus-5000">Plus de 5 000€/mois</option>
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
