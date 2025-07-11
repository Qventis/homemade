'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ChevronRightIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

interface ContactFormProps {
  nextStep: () => void;
  prevStep: () => void;
  updateFormData: (data: object) => void;
}

export default function ContactForm({ nextStep, prevStep, updateFormData }: ContactFormProps) {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    contactMethod: '',
    hearAboutUs: '',
    projectTimeline: '',
    additionalInfo: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when field is modified
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    // Required fields validation
    if (!formState.firstName.trim()) {
      newErrors.firstName = 'Le prénom est requis';
    }
    
    if (!formState.lastName.trim()) {
      newErrors.lastName = 'Le nom est requis';
    }
    
    if (!formState.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = 'Format d\'email invalide';
    }
    
    if (!formState.contactMethod) {
      newErrors.contactMethod = 'Veuillez sélectionner une méthode de contact';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      updateFormData({
        contactDetails: formState
      });
      nextStep();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-2xl shadow-xl p-8 max-w-3xl mx-auto border border-qventis-gray-100"
    >
      <h2 className="text-2xl font-display font-bold text-qventis-gray-900 mb-2">
        Vos coordonnées
      </h2>
      <p className="text-qventis-gray-600 mb-6">
        Nous avons besoin de quelques informations pour vous contacter au sujet de votre projet.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Nom et prénom */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="firstName" className="block font-medium text-qventis-gray-900">
              Prénom <span className="text-qventis-coral">*</span>
            </label>
            <input
              id="firstName"
              type="text"
              name="firstName"
              value={formState.firstName}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl border ${errors.firstName ? 'border-red-500 bg-red-50' : 'border-qventis-gray-200'} focus:ring-2 focus:ring-qventis-coral/50 focus:border-qventis-coral outline-none transition-all`}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
            )}
          </div>
          <div className="space-y-2">
            <label htmlFor="lastName" className="block font-medium text-qventis-gray-900">
              Nom <span className="text-qventis-coral">*</span>
            </label>
            <input
              id="lastName"
              type="text"
              name="lastName"
              value={formState.lastName}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl border ${errors.lastName ? 'border-red-500 bg-red-50' : 'border-qventis-gray-200'} focus:ring-2 focus:ring-qventis-coral/50 focus:border-qventis-coral outline-none transition-all`}
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
            )}
          </div>
        </div>

        {/* Email et téléphone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="email" className="block font-medium text-qventis-gray-900">
              Email <span className="text-qventis-coral">*</span>
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-500 bg-red-50' : 'border-qventis-gray-200'} focus:ring-2 focus:ring-qventis-coral/50 focus:border-qventis-coral outline-none transition-all`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div className="space-y-2">
            <label htmlFor="phone" className="block font-medium text-qventis-gray-900">
              Téléphone
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              value={formState.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-qventis-gray-200 focus:ring-2 focus:ring-qventis-coral/50 focus:border-qventis-coral outline-none transition-all"
            />
          </div>
        </div>

        {/* Entreprise et poste */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="company" className="block font-medium text-qventis-gray-900">
              Entreprise
            </label>
            <input
              id="company"
              type="text"
              name="company"
              value={formState.company}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-qventis-gray-200 focus:ring-2 focus:ring-qventis-coral/50 focus:border-qventis-coral outline-none transition-all"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="position" className="block font-medium text-qventis-gray-900">
              Fonction
            </label>
            <input
              id="position"
              type="text"
              name="position"
              value={formState.position}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-qventis-gray-200 focus:ring-2 focus:ring-qventis-coral/50 focus:border-qventis-coral outline-none transition-all"
            />
          </div>
        </div>

        {/* Méthode de contact préférée */}
        <div className="space-y-2">
          <label className="block font-medium text-qventis-gray-900">
            Méthode de contact préférée <span className="text-qventis-coral">*</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { id: 'email', label: 'Email' },
              { id: 'phone', label: 'Téléphone' },
              { id: 'both', label: 'Les deux' },
            ].map((method) => (
              <button
                key={method.id}
                type="button"
                onClick={() => setFormState(prev => ({ ...prev, contactMethod: method.id }))}
                className={`p-3 rounded-xl border transition-all ${
                  formState.contactMethod === method.id
                    ? 'bg-qventis-coral/10 border-qventis-coral text-qventis-coral'
                    : 'bg-qventis-gray-50 border-qventis-gray-200 hover:bg-qventis-coral/5'
                }`}
              >
                {method.label}
              </button>
            ))}
          </div>
          {errors.contactMethod && (
            <p className="text-red-500 text-sm mt-1">{errors.contactMethod}</p>
          )}
        </div>

        {/* Comment avez-vous entendu parler de nous */}
        <div className="space-y-2">
          <label htmlFor="hearAboutUs" className="block font-medium text-qventis-gray-900">
            Comment avez-vous entendu parler de Qventis ?
          </label>
          <select
            id="hearAboutUs"
            name="hearAboutUs"
            value={formState.hearAboutUs}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-qventis-gray-200 focus:ring-2 focus:ring-qventis-coral/50 focus:border-qventis-coral outline-none transition-all"
          >
            <option value="">Sélectionnez une option</option>
            <option value="search">Moteur de recherche</option>
            <option value="social">Réseaux sociaux</option>
            <option value="recommendation">Recommandation</option>
            <option value="press">Presse / Media</option>
            <option value="event">Événement</option>
            <option value="other">Autre</option>
          </select>
        </div>

        {/* Quand souhaitez-vous démarrer votre projet */}
        <div className="space-y-2">
          <label htmlFor="projectTimeline" className="block font-medium text-qventis-gray-900">
            Quand souhaitez-vous démarrer votre projet ?
          </label>
          <select
            id="projectTimeline"
            name="projectTimeline"
            value={formState.projectTimeline}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-qventis-gray-200 focus:ring-2 focus:ring-qventis-coral/50 focus:border-qventis-coral outline-none transition-all"
          >
            <option value="">Sélectionnez une option</option>
            <option value="immediately">Immédiatement</option>
            <option value="1month">Dans le mois</option>
            <option value="3month">Dans les 3 mois</option>
            <option value="6month">Dans les 6 mois</option>
            <option value="planning">Je suis en phase de planification</option>
          </select>
        </div>

        {/* Informations supplémentaires */}
        <div className="space-y-2">
          <label htmlFor="additionalInfo" className="block font-medium text-qventis-gray-900">
            Informations complémentaires
          </label>
          <textarea
            id="additionalInfo"
            name="additionalInfo"
            value={formState.additionalInfo}
            onChange={handleChange}
            rows={3}
            placeholder="Toute précision utile pour votre projet..."
            className="w-full px-4 py-3 rounded-xl border border-qventis-gray-200 focus:ring-2 focus:ring-qventis-coral/50 focus:border-qventis-coral outline-none transition-all"
          />
        </div>

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
