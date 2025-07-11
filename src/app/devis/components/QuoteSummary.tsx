'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowLeftIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { XMarkIcon } from '@heroicons/react/24/solid';

interface QuoteSummaryProps {
  prevStep: () => void;
  formData: any;
  serviceType: string;
}

export default function QuoteSummary({ prevStep, formData, serviceType }: QuoteSummaryProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getServiceLabel = (type: string) => {
    const serviceLabels: Record<string, string> = {
      website: 'Site Web',
      seo: 'SEO',
      aiAgent: 'Agent IA',
      dataAnalytics: 'Analyse de Données',
      customDev: 'Développement Sur-mesure'
    };
    return serviceLabels[type] || type;
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setError(null);
    
    try {
      // Ici, vous implémenteriez l'envoi des données à votre API
      // Par exemple:
      // await fetch('/api/devis', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });
      
      // Simulons une attente pour l'exemple
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSubmitted(true);
    } catch (err) {
      setError("Une erreur est survenue lors de l'envoi du formulaire. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Fonction pour rendre les informations spécifiques selon le type de service
  const renderServiceSpecificDetails = () => {
    switch (serviceType) {
      case 'website':
        return formData.websiteDetails ? (
          <div className="space-y-4">
            <p><span className="font-semibold">Type de site :</span> {formData.websiteDetails.websiteType}</p>
            <p><span className="font-semibold">Nombre de pages :</span> {formData.websiteDetails.pageCount}</p>
            <p><span className="font-semibold">Fonctionnalités :</span> {formData.websiteDetails.features.join(', ')}</p>
            <p><span className="font-semibold">Design :</span> {formData.websiteDetails.design}</p>
            <p><span className="font-semibold">Budget :</span> {formData.websiteDetails.budget}</p>
            <p><span className="font-semibold">Délai :</span> {formData.websiteDetails.timeline}</p>
          </div>
        ) : <p>Détails non disponibles</p>;

      case 'seo':
        return formData.seoDetails ? (
          <div className="space-y-4">
            <p><span className="font-semibold">Site web actuel :</span> {formData.seoDetails.websiteUrl || 'Non fourni'}</p>
            <p><span className="font-semibold">Secteur d'activité :</span> {formData.seoDetails.businessType}</p>
            <p><span className="font-semibold">Public cible :</span> {formData.seoDetails.targetAudience}</p>
            <p><span className="font-semibold">Objectifs :</span> {formData.seoDetails.objectives.join(', ')}</p>
            <p><span className="font-semibold">État actuel SEO :</span> {formData.seoDetails.currentSEO}</p>
            <p><span className="font-semibold">Budget :</span> {formData.seoDetails.budget}</p>
            <p><span className="font-semibold">Durée d'engagement :</span> {formData.seoDetails.timeline}</p>
          </div>
        ) : <p>Détails non disponibles</p>;

      case 'aiAgent':
        return formData.aiAgentDetails ? (
          <div className="space-y-4">
            <p><span className="font-semibold">Type d'agent :</span> {formData.aiAgentDetails.agentType}</p>
            <p><span className="font-semibold">Cas d'usage :</span> {formData.aiAgentDetails.useCase}</p>
            <p><span className="font-semibold">Sources de données :</span> {formData.aiAgentDetails.dataSources.join(', ')}</p>
            <p><span className="font-semibold">Intégrations :</span> {formData.aiAgentDetails.integrations.join(', ')}</p>
            <p><span className="font-semibold">Budget :</span> {formData.aiAgentDetails.budget}</p>
            <p><span className="font-semibold">Délai :</span> {formData.aiAgentDetails.timeline}</p>
          </div>
        ) : <p>Détails non disponibles</p>;

      case 'dataAnalytics':
        return formData.dataAnalyticsDetails ? (
          <div className="space-y-4">
            <p><span className="font-semibold">Types de données :</span> {formData.dataAnalyticsDetails.dataType.join(', ')}</p>
            <p><span className="font-semibold">Sources de données :</span> {formData.dataAnalyticsDetails.dataSources.join(', ')}</p>
            <p><span className="font-semibold">Volume de données :</span> {formData.dataAnalyticsDetails.dataVolume}</p>
            <p><span className="font-semibold">Visualisations :</span> {formData.dataAnalyticsDetails.visualizationType.join(', ')}</p>
            <p><span className="font-semibold">Objectifs :</span> {formData.dataAnalyticsDetails.mainObjectives.join(', ')}</p>
            <p><span className="font-semibold">Budget :</span> {formData.dataAnalyticsDetails.budget}</p>
          </div>
        ) : <p>Détails non disponibles</p>;

      case 'customDev':
        return formData.customDevDetails ? (
          <div className="space-y-4">
            <p><span className="font-semibold">Type de solution :</span> {formData.customDevDetails.projectType}</p>
            <p><span className="font-semibold">Description :</span> {formData.customDevDetails.projectDescription}</p>
            <p><span className="font-semibold">Fonctionnalités :</span> {formData.customDevDetails.features.join(', ')}</p>
            <p><span className="font-semibold">Plateformes :</span> {formData.customDevDetails.platform.join(', ')}</p>
            <p><span className="font-semibold">Échelle :</span> {formData.customDevDetails.scalabilityNeeds}</p>
            <p><span className="font-semibold">Budget :</span> {formData.customDevDetails.budget}</p>
          </div>
        ) : <p>Détails non disponibles</p>;

      default:
        return <p>Type de service non reconnu</p>;
    }
  };

  // Si la soumission est réussie, afficher un message de confirmation
  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-white rounded-2xl shadow-xl p-8 max-w-3xl mx-auto border border-qventis-gray-100 text-center"
      >
        <div className="flex flex-col items-center justify-center py-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <CheckCircleIcon className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-display font-bold text-qventis-gray-900 mb-3">
            Demande de devis envoyée !
          </h2>
          <p className="text-qventis-gray-600 max-w-md mx-auto mb-6">
            Merci pour votre demande. Un membre de notre équipe vous contactera très rapidement pour discuter de votre projet.
          </p>
          <Button
            variant="coral"
            onClick={() => window.location.href = '/'}
            className="shadow-lg"
          >
            Retour à l'accueil
          </Button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-2xl shadow-xl p-8 max-w-3xl mx-auto border border-qventis-gray-100"
    >
      <h2 className="text-2xl font-display font-bold text-qventis-gray-900 mb-2">
        Récapitulatif de votre demande
      </h2>
      <p className="text-qventis-gray-600 mb-6">
        Veuillez vérifier les informations ci-dessous avant de soumettre votre demande.
      </p>

      {/* Afficher une erreur si elle existe */}
      {error && (
        <div className="mb-6 bg-red-50 p-4 rounded-xl border border-red-200 text-red-700 relative">
          <button 
            className="absolute top-3 right-3"
            onClick={() => setError(null)}
          >
            <XMarkIcon className="w-5 h-5 text-red-700" />
          </button>
          <p>{error}</p>
        </div>
      )}

      <div className="space-y-6">
        {/* Service demandé */}
        <div className="border border-qventis-gray-200 rounded-xl p-6 space-y-4">
          <h3 className="font-display font-bold text-lg text-qventis-gray-900">
            Service demandé
          </h3>
          <p className="text-qventis-coral font-medium text-xl">
            {getServiceLabel(serviceType)}
          </p>
        </div>

        {/* Détails spécifiques au service */}
        <div className="border border-qventis-gray-200 rounded-xl p-6 space-y-4">
          <h3 className="font-display font-bold text-lg text-qventis-gray-900 mb-4">
            Détails du projet
          </h3>
          {renderServiceSpecificDetails()}
        </div>

        {/* Informations de contact */}
        {formData.contactDetails && (
          <div className="border border-qventis-gray-200 rounded-xl p-6 space-y-4">
            <h3 className="font-display font-bold text-lg text-qventis-gray-900 mb-4">
              Vos coordonnées
            </h3>
            <div className="space-y-2">
              <p>
                <span className="font-semibold">Nom :</span>{' '}
                {formData.contactDetails.firstName} {formData.contactDetails.lastName}
              </p>
              <p>
                <span className="font-semibold">Email :</span> {formData.contactDetails.email}
              </p>
              <p>
                <span className="font-semibold">Téléphone :</span>{' '}
                {formData.contactDetails.phone || 'Non fourni'}
              </p>
              <p>
                <span className="font-semibold">Entreprise :</span>{' '}
                {formData.contactDetails.company || 'Non fournie'}
              </p>
              <p>
                <span className="font-semibold">Fonction :</span>{' '}
                {formData.contactDetails.position || 'Non fournie'}
              </p>
              <p>
                <span className="font-semibold">Méthode de contact préférée :</span>{' '}
                {formData.contactDetails.contactMethod}
              </p>
              {formData.contactDetails.additionalInfo && (
                <div>
                  <p className="font-semibold">Informations complémentaires :</p>
                  <p className="text-qventis-gray-700 mt-1">
                    {formData.contactDetails.additionalInfo}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="pt-4 flex justify-between">
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
            type="button"
            variant="coral"
            className="shadow-lg px-6"
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Envoi en cours...' : 'Envoyer la demande'}
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
