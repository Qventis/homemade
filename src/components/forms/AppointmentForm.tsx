import { useState } from 'react';
import { Modal } from '@/components/ui/Modal';
import { PhoneIcon, CalendarDaysIcon, CheckIcon } from '@heroicons/react/24/outline';

interface AppointmentFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AppointmentForm({ isOpen, onClose }: AppointmentFormProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    hasWebsite: false,
    websiteUrl: '',
    businessType: '',
    preferredDate: '',
    message: ''
  });
  
  // Gestion des étapes du formulaire
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
  
  // Mise à jour des données du formulaire
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  // Gestion du choix oui/non pour le site web existant
  const handleWebsiteChange = (hasWebsite: boolean) => {
    setFormData({
      ...formData,
      hasWebsite,
      websiteUrl: !hasWebsite ? '' : formData.websiteUrl
    });
  };
  
  // Réinitialiser le formulaire à la fermeture
  const handleClose = () => {
    setStep(1);
    onClose();
  };
  
  // Soumettre le formulaire
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici vous pourriez implémenter l'envoi des données à une API
    console.log('Form submitted:', formData);
    // Passer à l'étape de confirmation
    nextStep();
  };
  
  // Indicateur de progression des étapes
  const ProgressIndicator = () => (
    <div className="mb-8">
      <div className="flex items-center justify-center">
        <div className="flex items-center w-full max-w-xs">
          {/* Étape 1 */}
          <div className="relative flex flex-col items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-qventis-coral text-white' : 'bg-qventis-gray-200 text-qventis-gray-500'}`}>
              1
            </div>
            <div className="text-xs mt-1 text-qventis-gray-500">Identité</div>
          </div>
          
          {/* Ligne de connexion */}
          <div className={`flex-1 h-1 mx-2 ${step >= 2 ? 'bg-qventis-coral' : 'bg-qventis-gray-200'}`}></div>
          
          {/* Étape 2 */}
          <div className="relative flex flex-col items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-qventis-coral text-white' : 'bg-qventis-gray-200 text-qventis-gray-500'}`}>
              2
            </div>
            <div className="text-xs mt-1 text-qventis-gray-500">Entreprise</div>
          </div>
          
          {/* Ligne de connexion */}
          <div className={`flex-1 h-1 mx-2 ${step >= 3 ? 'bg-qventis-coral' : 'bg-qventis-gray-200'}`}></div>
          
          {/* Étape 3 */}
          <div className="relative flex flex-col items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-qventis-coral text-white' : 'bg-qventis-gray-200 text-qventis-gray-500'}`}>
              3
            </div>
            <div className="text-xs mt-1 text-qventis-gray-500">Validation</div>
          </div>
        </div>
      </div>
    </div>
  );
  
  return (
    <Modal isOpen={isOpen} onClose={handleClose} maxWidth="lg">
      <div className="py-2">
        {/* Indicateur de progression */}
        <ProgressIndicator />
        
        {/* Titre principal */}
        <h2 className="text-2xl font-bold text-center text-qventis-gray-900 mb-6">
          {step === 1 && 'Planifiez votre rendez-vous'}
          {step === 2 && 'Informations sur votre entreprise'}
          {step === 3 && 'Confirmez votre demande'}
          {step === 4 && 'Rendez-vous planifié !'}
        </h2>
        
        {/* Étape 1: Informations personnelles */}
        {step === 1 && (
          <div className="space-y-6">
            <p className="text-center text-qventis-gray-600 mb-6">
              Laissez-nous quelques informations pour vous recontacter
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-qventis-gray-700 mb-1">
                  Prénom *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-qventis-gray-300 rounded-lg focus:ring-qventis-coral focus:border-qventis-coral"
                  placeholder="Jean"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-qventis-gray-700 mb-1">
                  Nom *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-qventis-gray-300 rounded-lg focus:ring-qventis-coral focus:border-qventis-coral"
                  placeholder="Dupont"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-qventis-gray-700 mb-1">
                  Adresse e-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-qventis-gray-300 rounded-lg focus:ring-qventis-coral focus:border-qventis-coral"
                  placeholder="jean.dupont@exemple.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-qventis-gray-700 mb-1">
                  Téléphone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-qventis-gray-300 rounded-lg focus:ring-qventis-coral focus:border-qventis-coral"
                  placeholder="06 12 34 56 78"
                  required
                />
              </div>
            </div>
            
            <div className="flex justify-end mt-8">
              <button
                type="button"
                onClick={nextStep}
                className="bg-qventis-coral hover:bg-qventis-coral-dark text-white px-6 py-3 rounded-lg transition-colors duration-200 flex items-center"
              >
                Continuer
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
        )}
        
        {/* Étape 2: Informations professionnelles */}
        {step === 2 && (
          <div className="space-y-6">
            <p className="text-center text-qventis-gray-600 mb-6">
              Parlez-nous de votre entreprise et de votre projet
            </p>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-qventis-gray-700 mb-1">
                  Nom de votre entreprise *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-qventis-gray-300 rounded-lg focus:ring-qventis-coral focus:border-qventis-coral"
                  placeholder="Entreprise ABC"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="businessType" className="block text-sm font-medium text-qventis-gray-700 mb-1">
                  Type d'entreprise *
                </label>
                <select
                  id="businessType"
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-qventis-gray-300 rounded-lg focus:ring-qventis-coral focus:border-qventis-coral"
                  required
                >
                  <option value="" disabled>Sélectionnez un type</option>
                  <option value="commerce">Commerce / Distribution</option>
                  <option value="service">Service aux entreprises</option>
                  <option value="tech">Tech / IT</option>
                  <option value="sante">Santé / Bien-être</option>
                  <option value="industrie">Industrie / Production</option>
                  <option value="education">Éducation / Formation</option>
                  <option value="immobilier">Immobilier</option>
                  <option value="finance">Finance / Assurance</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
              
              <div className="mt-4">
                <p className="block text-sm font-medium text-qventis-gray-700 mb-2">
                  Avez-vous déjà un site internet ? *
                </p>
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => handleWebsiteChange(true)}
                    className={`flex-1 px-4 py-3 rounded-lg border ${
                      formData.hasWebsite 
                        ? 'border-qventis-coral bg-qventis-coral bg-opacity-10 text-qventis-coral' 
                        : 'border-qventis-gray-300 bg-white text-qventis-gray-700'
                    } hover:bg-qventis-gray-50 transition-colors`}
                  >
                    Oui
                  </button>
                  <button
                    type="button"
                    onClick={() => handleWebsiteChange(false)}
                    className={`flex-1 px-4 py-3 rounded-lg border ${
                      formData.hasWebsite === false 
                        ? 'border-qventis-coral bg-qventis-coral bg-opacity-10 text-qventis-coral' 
                        : 'border-qventis-gray-300 bg-white text-qventis-gray-700'
                    } hover:bg-qventis-gray-50 transition-colors`}
                  >
                    Non
                  </button>
                </div>
              </div>
              
              {formData.hasWebsite && (
                <div className="mt-4">
                  <label htmlFor="websiteUrl" className="block text-sm font-medium text-qventis-gray-700 mb-1">
                    URL de votre site actuel
                  </label>
                  <input
                    type="url"
                    id="websiteUrl"
                    name="websiteUrl"
                    value={formData.websiteUrl}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-qventis-gray-300 rounded-lg focus:ring-qventis-coral focus:border-qventis-coral"
                    placeholder="https://www.votresite.com"
                  />
                </div>
              )}
              
              <div className="mt-4">
                <label htmlFor="message" className="block text-sm font-medium text-qventis-gray-700 mb-1">
                  Message (facultatif)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-qventis-gray-300 rounded-lg focus:ring-qventis-coral focus:border-qventis-coral"
                  placeholder="Décrivez brièvement votre projet ou vos besoins..."
                />
              </div>
            </div>
            
            <div className="flex justify-between mt-8">
              <button
                type="button"
                onClick={prevStep}
                className="border border-qventis-gray-300 hover:bg-qventis-gray-50 text-qventis-gray-700 px-6 py-3 rounded-lg transition-colors duration-200 flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                </svg>
                Retour
              </button>
              <button
                type="button"
                onClick={nextStep}
                className="bg-qventis-coral hover:bg-qventis-coral-dark text-white px-6 py-3 rounded-lg transition-colors duration-200 flex items-center"
              >
                Continuer
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
        )}
        
        {/* Étape 3: Confirmation du rendez-vous */}
        {step === 3 && (
          <div className="space-y-6">
            <div className="bg-qventis-gray-50 p-6 rounded-xl">
              <p className="text-center text-qventis-gray-600 mb-6">
                Sélectionnez une date et heure qui vous conviennent pour l'entretien téléphonique
              </p>
              
              <div>
                <label htmlFor="preferredDate" className="block text-sm font-medium text-qventis-gray-700 mb-1">
                  Date et heure souhaitées *
                </label>
                <input
                  type="datetime-local"
                  id="preferredDate"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-qventis-gray-300 rounded-lg focus:ring-qventis-coral focus:border-qventis-coral"
                  required
                />
              </div>
              
              <div className="flex items-center mt-6 text-qventis-gray-700">
                <CalendarDaysIcon className="h-5 w-5 text-qventis-coral mr-2" />
                <span>Nos horaires : du lundi au vendredi, 9h-18h</span>
              </div>
              
              <div className="flex items-center mt-3 text-qventis-gray-700">
                <PhoneIcon className="h-5 w-5 text-qventis-coral mr-2" />
                <span>Nous vous contacterons au {formData.phone}</span>
              </div>
            </div>
            
            <div className="mt-6 bg-qventis-gray-50 p-6 rounded-xl">
              <h3 className="font-medium text-qventis-gray-900 mb-3">Récapitulatif</h3>
              <ul className="space-y-2 text-sm text-qventis-gray-700">
                <li><span className="font-medium">Nom :</span> {formData.firstName} {formData.lastName}</li>
                <li><span className="font-medium">Email :</span> {formData.email}</li>
                <li><span className="font-medium">Entreprise :</span> {formData.company}</li>
                <li><span className="font-medium">Type d'activité :</span> {formData.businessType}</li>
                <li>
                  <span className="font-medium">Site web existant :</span>
                  {formData.hasWebsite ? ` Oui (${formData.websiteUrl})` : ' Non'}
                </li>
                {formData.message && (
                  <li><span className="font-medium">Message :</span> {formData.message}</li>
                )}
              </ul>
            </div>
            
            <div className="flex justify-between mt-8">
              <button
                type="button"
                onClick={prevStep}
                className="border border-qventis-gray-300 hover:bg-qventis-gray-50 text-qventis-gray-700 px-6 py-3 rounded-lg transition-colors duration-200 flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                </svg>
                Retour
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                className="bg-qventis-coral hover:bg-qventis-coral-dark text-white px-6 py-3 rounded-lg transition-colors duration-200 flex items-center"
              >
                Confirmer le rendez-vous
                <CheckIcon className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        )}
        
        {/* Étape 4: Confirmation */}
        {step === 4 && (
          <div className="text-center py-10">
            <div className="inline-flex items-center justify-center rounded-full bg-green-100 p-6 mb-6">
              <CheckIcon className="h-10 w-10 text-green-600" />
            </div>
            
            <h3 className="text-2xl font-bold text-qventis-gray-900 mb-2">Rendez-vous planifié !</h3>
            
            <p className="text-qventis-gray-600 max-w-md mx-auto">
              Merci pour votre demande. Un membre de notre équipe vous contactera le {new Date(formData.preferredDate).toLocaleDateString('fr-FR')} à {new Date(formData.preferredDate).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}.
            </p>
            
            <div className="mt-10">
              <button
                type="button"
                onClick={handleClose}
                className="bg-qventis-coral hover:bg-qventis-coral-dark text-white px-6 py-3 rounded-lg transition-colors duration-200"
              >
                Fermer
              </button>
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
}
