'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ChevronRightIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

interface DataAnalyticsQuestionsProps {
  nextStep: () => void;
  prevStep: () => void;
  updateFormData: (data: object) => void;
}

export default function DataAnalyticsQuestions({ nextStep, prevStep, updateFormData }: DataAnalyticsQuestionsProps) {
  const [formState, setFormState] = useState({
    dataType: [],
    dataSources: [],
    dataVolume: '',
    visualizationType: [],
    userCount: '',
    integrations: [],
    mainObjectives: [],
    existingTools: '',
    updateFrequency: '',
    budget: '',
    timeline: '',
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
      dataAnalyticsDetails: formState
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
        Détails de votre projet d'analyse de données
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Type de données */}
        <div className="space-y-2">
          <label className="block font-medium text-qventis-gray-900 mb-2">
            Quels types de données souhaitez-vous analyser ?
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { id: 'sales', label: 'Données de ventes' },
              { id: 'marketing', label: 'Données marketing' },
              { id: 'financial', label: 'Données financières' },
              { id: 'operational', label: 'Données opérationnelles' },
              { id: 'customer', label: 'Données clients' },
              { id: 'web', label: 'Données web/analytics' },
              { id: 'social', label: 'Médias sociaux' },
              { id: 'iot', label: 'IoT/Capteurs' },
              { id: 'product', label: 'Données produits' },
              { id: 'other', label: 'Autre' },
            ].map((dataType) => (
              <div key={dataType.id} className="flex items-center">
                <input
                  id={`data-${dataType.id}`}
                  type="checkbox"
                  className="w-5 h-5 text-qventis-coral rounded border-qventis-gray-300 focus:ring-qventis-coral/30"
                  checked={(formState.dataType as string[]).includes(dataType.id)}
                  onChange={() => handleCheckboxChange('dataType', dataType.id)}
                />
                <label htmlFor={`data-${dataType.id}`} className="ml-2 text-qventis-gray-700">
                  {dataType.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Sources de données */}
        <div className="space-y-2">
          <label className="block font-medium text-qventis-gray-900 mb-2">
            Quelles sont vos sources de données ?
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { id: 'crm', label: 'CRM (Salesforce, HubSpot...)' },
              { id: 'erp', label: 'ERP (SAP, Oracle...)' },
              { id: 'ecommerce', label: 'E-commerce (Shopify, WooCommerce...)' },
              { id: 'ga', label: 'Google Analytics' },
              { id: 'social', label: 'Réseaux sociaux' },
              { id: 'excel', label: 'Fichiers Excel/CSV' },
              { id: 'api', label: 'API externes' },
              { id: 'database', label: 'Base de données interne' },
            ].map((source) => (
              <div key={source.id} className="flex items-center">
                <input
                  id={`source-${source.id}`}
                  type="checkbox"
                  className="w-5 h-5 text-qventis-coral rounded border-qventis-gray-300 focus:ring-qventis-coral/30"
                  checked={(formState.dataSources as string[]).includes(source.id)}
                  onChange={() => handleCheckboxChange('dataSources', source.id)}
                />
                <label htmlFor={`source-${source.id}`} className="ml-2 text-qventis-gray-700">
                  {source.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Volume de données */}
        <div className="space-y-2">
          <label className="block font-medium text-qventis-gray-900">
            Volume approximatif de données à traiter
          </label>
          <select
            name="dataVolume"
            value={formState.dataVolume}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-qventis-gray-200 focus:ring-2 focus:ring-qventis-coral/50 focus:border-qventis-coral outline-none transition-all"
          >
            <option value="">Sélectionnez une option</option>
            <option value="small">Petit (&lt; 10 Go)</option>
            <option value="medium">Moyen (10 - 100 Go)</option>
            <option value="large">Grand (100 Go - 1 TB)</option>
            <option value="very-large">Très grand (&gt; 1 TB)</option>
            <option value="unknown">Je ne sais pas</option>
          </select>
        </div>

        {/* Type de visualisation */}
        <div className="space-y-2">
          <label className="block font-medium text-qventis-gray-900 mb-2">
            Quels types de visualisation souhaitez-vous ?
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { id: 'dashboards', label: 'Dashboards interactifs' },
              { id: 'reports', label: 'Rapports automatisés' },
              { id: 'charts', label: 'Graphiques et diagrammes' },
              { id: 'maps', label: 'Cartes géographiques' },
              { id: 'tables', label: 'Tableaux de données' },
              { id: 'kpis', label: 'KPIs et indicateurs' },
              { id: 'realtime', label: 'Visualisation temps réel' },
              { id: 'predictive', label: 'Analyses prédictives' },
            ].map((vizType) => (
              <div key={vizType.id} className="flex items-center">
                <input
                  id={`viz-${vizType.id}`}
                  type="checkbox"
                  className="w-5 h-5 text-qventis-coral rounded border-qventis-gray-300 focus:ring-qventis-coral/30"
                  checked={(formState.visualizationType as string[]).includes(vizType.id)}
                  onChange={() => handleCheckboxChange('visualizationType', vizType.id)}
                />
                <label htmlFor={`viz-${vizType.id}`} className="ml-2 text-qventis-gray-700">
                  {vizType.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Nombre d'utilisateurs */}
        <div className="space-y-2">
          <label className="block font-medium text-qventis-gray-900">
            Nombre d'utilisateurs prévus
          </label>
          <select
            name="userCount"
            value={formState.userCount}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-qventis-gray-200 focus:ring-2 focus:ring-qventis-coral/50 focus:border-qventis-coral outline-none transition-all"
          >
            <option value="">Sélectionnez une option</option>
            <option value="1-5">1 à 5 utilisateurs</option>
            <option value="6-20">6 à 20 utilisateurs</option>
            <option value="21-50">21 à 50 utilisateurs</option>
            <option value="51-200">51 à 200 utilisateurs</option>
            <option value="200+">Plus de 200 utilisateurs</option>
          </select>
        </div>

        {/* Intégrations */}
        <div className="space-y-2">
          <label className="block font-medium text-qventis-gray-900 mb-2">
            Intégrations souhaitées avec d'autres systèmes
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { id: 'crm', label: 'CRM' },
              { id: 'erp', label: 'ERP' },
              { id: 'marketing', label: 'Outils marketing' },
              { id: 'ecommerce', label: 'Plateforme e-commerce' },
              { id: 'api', label: 'APIs tierces' },
              { id: 'website', label: 'Site web' },
              { id: 'cloud', label: 'Services cloud (AWS, GCP, Azure)' },
              { id: 'none', label: 'Aucune intégration nécessaire' },
            ].map((integration) => (
              <div key={integration.id} className="flex items-center">
                <input
                  id={`integration-${integration.id}`}
                  type="checkbox"
                  className="w-5 h-5 text-qventis-coral rounded border-qventis-gray-300 focus:ring-qventis-coral/30"
                  checked={(formState.integrations as string[]).includes(integration.id)}
                  onChange={() => handleCheckboxChange('integrations', integration.id)}
                />
                <label htmlFor={`integration-${integration.id}`} className="ml-2 text-qventis-gray-700">
                  {integration.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Objectifs principaux */}
        <div className="space-y-2">
          <label className="block font-medium text-qventis-gray-900 mb-2">
            Objectifs principaux du projet
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { id: 'decision', label: 'Aide à la décision' },
              { id: 'performance', label: 'Suivi de performance' },
              { id: 'insight', label: 'Insights clients' },
              { id: 'forecast', label: 'Prévisions' },
              { id: 'optimization', label: 'Optimisation des processus' },
              { id: 'reporting', label: 'Reporting automatisé' },
              { id: 'anomaly', label: "Détection d'anomalies" },
              { id: 'segment', label: 'Segmentation client' },
            ].map((objective) => (
              <div key={objective.id} className="flex items-center">
                <input
                  id={`obj-${objective.id}`}
                  type="checkbox"
                  className="w-5 h-5 text-qventis-coral rounded border-qventis-gray-300 focus:ring-qventis-coral/30"
                  checked={(formState.mainObjectives as string[]).includes(objective.id)}
                  onChange={() => handleCheckboxChange('mainObjectives', objective.id)}
                />
                <label htmlFor={`obj-${objective.id}`} className="ml-2 text-qventis-gray-700">
                  {objective.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Outils existants */}
        <div className="space-y-2">
          <label className="block font-medium text-qventis-gray-900">
            Utilisez-vous déjà des outils d'analyse ?
          </label>
          <textarea
            name="existingTools"
            placeholder="Ex: PowerBI, Tableau, Google Data Studio, Excel, solutions custom..."
            value={formState.existingTools}
            onChange={handleChange}
            rows={2}
            className="w-full px-4 py-3 rounded-xl border border-qventis-gray-200 focus:ring-2 focus:ring-qventis-coral/50 focus:border-qventis-coral outline-none transition-all"
          />
        </div>

        {/* Fréquence de mise à jour */}
        <div className="space-y-2">
          <label className="block font-medium text-qventis-gray-900">
            Fréquence souhaitée de mise à jour des données
          </label>
          <select
            name="updateFrequency"
            value={formState.updateFrequency}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-qventis-gray-200 focus:ring-2 focus:ring-qventis-coral/50 focus:border-qventis-coral outline-none transition-all"
          >
            <option value="">Sélectionnez une option</option>
            <option value="realtime">Temps réel</option>
            <option value="hourly">Toutes les heures</option>
            <option value="daily">Quotidienne</option>
            <option value="weekly">Hebdomadaire</option>
            <option value="monthly">Mensuelle</option>
            <option value="custom">Fréquence personnalisée</option>
          </select>
        </div>

        {/* Timeline */}
        <div className="space-y-2">
          <label className="block font-medium text-qventis-gray-900">
            Délai souhaité pour la mise en place
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
            <option value="normal">Standard (1-2 mois)</option>
            <option value="relaxed">Flexible (2-3 mois)</option>
            <option value="planned">Planifié (3+ mois)</option>
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
            <option value="less-2000">Moins de 2 000€</option>
            <option value="2000-5000">2 000€ - 5 000€</option>
            <option value="5000-10000">5 000€ - 10 000€</option>
            <option value="10000-20000">10 000€ - 20 000€</option>
            <option value="20000+">Plus de 20 000€</option>
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
