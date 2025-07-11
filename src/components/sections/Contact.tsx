'use client';

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Toast } from "@/components/ui/Toast";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { 
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  PaperAirplaneIcon,
  ChatBubbleLeftRightIcon,
  UserIcon,
  AtSymbolIcon
} from "@heroicons/react/24/outline";

// Schéma de validation Zod ultra-simplifié
const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Nom requis (min. 2 caractères)"),
  email: z
    .string()
    .email("Email invalide"),
  service: z
    .string()
    .min(1, "Service requis"),
  message: z
    .string()
    .min(10, "Message trop court (min. 10 caractères)")
    .max(500, "Message trop long (max. 500 caractères)")
});

type ContactFormData = z.infer<typeof contactSchema>;

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastType, setToastType] = useState<'success' | 'error'>('success');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      service: '',
      message: ''
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulation d'envoi (à remplacer par votre API)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Données du formulaire:', data);
      
      // Succès : toast + reset
      setToastType('success');
      setShowToast(true);
      reset();
      
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setToastType('error');
      setShowToast(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    { value: 'websites', label: 'Sites Web Pro' },
    { value: 'ai-agents', label: 'Agents IA' },
    { value: 'data-analytics', label: 'Data Analytics' },
    { value: 'it-solutions', label: 'Solutions IT' },
    { value: 'other', label: 'Autre' }
  ];

  return (
    <>
      {/* Toast */}
      <Toast
        isVisible={showToast}
        type={toastType}
        title={toastType === 'success' ? 'Message envoyé !' : 'Erreur d\'envoi'}
        message={toastType === 'success' 
          ? 'Nous vous recontacterons dans les 24h.' 
          : 'Veuillez réessayer ou nous appeler.'
        }
        onClose={() => setShowToast(false)}
      />

      <section id="contact" className="py-20 bg-gradient-to-b from-qventis-gray-50 to-qventis-white">
        <Container>
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-qventis-coral/10 rounded-full mb-6">
              <ChatBubbleLeftRightIcon className="w-4 h-4 text-qventis-coral" />
              <span className="text-sm font-semibold text-qventis-coral">Contact</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-qventis-gray-900 mb-6">
              Parlons de votre
              <span className="text-qventis-coral"> projet</span>
            </h2>
            
            <p className="text-xl text-qventis-gray-600 leading-relaxed">
              Transformons vos idées en solutions digitales concrètes. 
              Contactez-nous pour un devis gratuit et sans engagement.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-display font-bold text-qventis-gray-900 mb-6">
                  Contactez-nous directement
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-qventis-gray-100">
                    <div className="w-12 h-12 bg-qventis-coral/10 rounded-xl flex items-center justify-center">
                      <PhoneIcon className="w-6 h-6 text-qventis-coral" />
                    </div>
                    <div>
                      <div className="font-semibold text-qventis-gray-900">Téléphone</div>
                      <div className="text-qventis-gray-600">+33 1 23 45 67 89</div>
                      <div className="text-sm text-qventis-coral">Lun-Ven 9h-18h</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-qventis-gray-100">
                    <div className="w-12 h-12 bg-qventis-coral/10 rounded-xl flex items-center justify-center">
                      <EnvelopeIcon className="w-6 h-6 text-qventis-coral" />
                    </div>
                    <div>
                      <div className="font-semibold text-qventis-gray-900">Email</div>
                      <div className="text-qventis-gray-600">contact@qventis.fr</div>
                      <div className="text-sm text-qventis-coral">Réponse sous 24h</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-qventis-gray-100">
                    <div className="w-12 h-12 bg-qventis-coral/10 rounded-xl flex items-center justify-center">
                      <MapPinIcon className="w-6 h-6 text-qventis-coral" />
                    </div>
                    <div>
                      <div className="font-semibold text-qventis-gray-900">Localisation</div>
                      <div className="text-qventis-gray-600">Paris, France</div>
                      <div className="text-sm text-qventis-coral">Interventions nationales</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Formulaire */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white rounded-2xl shadow-xl border border-qventis-gray-100 p-8">
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  
                  {/* Ligne 1: Nom + Email */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-qventis-gray-700 mb-2">
                        Nom complet *
                      </label>
                      <div className="relative">
                        <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-qventis-gray-400" />
                        <input
                          {...register('name')}
                          type="text"
                          className={`w-full pl-10 pr-4 py-3 rounded-lg border transition-colors ${
                            errors.name 
                              ? 'border-red-300 focus:border-red-500' 
                              : 'border-qventis-gray-200 focus:border-qventis-coral'
                          } focus:outline-none focus:ring-2 focus:ring-qventis-coral/20`}
                          placeholder="Jean Dupont"
                          disabled={isSubmitting}
                        />
                      </div>
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-qventis-gray-700 mb-2">
                        Email *
                      </label>
                      <div className="relative">
                        <AtSymbolIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-qventis-gray-400" />
                        <input
                          {...register('email')}
                          type="email"
                          className={`w-full pl-10 pr-4 py-3 rounded-lg border transition-colors ${
                            errors.email 
                              ? 'border-red-300 focus:border-red-500' 
                              : 'border-qventis-gray-200 focus:border-qventis-coral'
                          } focus:outline-none focus:ring-2 focus:ring-qventis-coral/20`}
                          placeholder="jean@entreprise.fr"
                          disabled={isSubmitting}
                        />
                      </div>
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block text-sm font-medium text-qventis-gray-700 mb-2">
                      Service souhaité *
                    </label>
                    <select
                      {...register('service')}
                      className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                        errors.service 
                          ? 'border-red-300 focus:border-red-500' 
                          : 'border-qventis-gray-200 focus:border-qventis-coral'
                      } focus:outline-none focus:ring-2 focus:ring-qventis-coral/20`}
                      disabled={isSubmitting}
                    >
                      <option value="">Sélectionnez un service</option>
                      {services.map(service => (
                        <option key={service.value} value={service.value}>
                          {service.label}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="mt-1 text-sm text-red-600">{errors.service.message}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-qventis-gray-700 mb-2">
                      Décrivez votre projet *
                    </label>
                    <textarea
                      {...register('message')}
                      rows={4}
                      className={`w-full px-4 py-3 rounded-lg border transition-colors resize-none ${
                        errors.message 
                          ? 'border-red-300 focus:border-red-500' 
                          : 'border-qventis-gray-200 focus:border-qventis-coral'
                      } focus:outline-none focus:ring-2 focus:ring-qventis-coral/20`}
                      placeholder="Décrivez brièvement votre projet, vos objectifs et vos besoins..."
                      disabled={isSubmitting}
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <Button
                      type="submit"
                      variant="coral"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full shadow-lg"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Envoi en cours...</span>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center gap-2">
                          <PaperAirplaneIcon className="w-5 h-5" />
                          <span>Envoyer ma demande</span>
                        </div>
                      )}
                    </Button>
                    
                    <p className="text-xs text-qventis-gray-500 text-center mt-3">
                      Vos données sont protégées et ne seront jamais partagées
                    </p>
                  </div>
                </form>
              </div>
            </motion.div>

          </div>

        </Container>
      </section>
    </>
  );
}
