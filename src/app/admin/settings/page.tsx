'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Cog6ToothIcon,
  UserCircleIcon,
  BellIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  EnvelopeIcon,
  KeyIcon,
  DevicePhoneMobileIcon
} from '@heroicons/react/24/outline';
import { Button } from '@/components/ui/Button';

export default function AdminSettingsPage() {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', name: 'Profil', icon: UserCircleIcon },
    { id: 'notifications', name: 'Notifications', icon: BellIcon },
    { id: 'security', name: 'Sécurité', icon: ShieldCheckIcon },
    { id: 'site', name: 'Site', icon: GlobeAltIcon }
  ];

  return (
    <div className="space-y-6">
      
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-display font-bold text-qventis-gray-900 mb-2">
          Paramètres
        </h1>
        <p className="text-qventis-gray-600">
          Configurez votre compte et les paramètres du site
        </p>
      </motion.div>

      {/* Settings Layout */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="bg-white rounded-2xl shadow-sm border border-qventis-gray-200 overflow-hidden"
      >
        
        {/* Tab Navigation */}
        <div className="border-b border-qventis-gray-200">
          <nav className="flex">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-4 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'text-qventis-coral border-b-2 border-qventis-coral bg-qventis-coral/5'
                    : 'text-qventis-gray-600 hover:text-qventis-coral'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          
          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <div className="space-y-6">
              <h2 className="text-xl font-display font-bold text-qventis-gray-900">
                Informations du profil
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-qventis-gray-700 mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    defaultValue="Thomas Qventis"
                    className="w-full px-4 py-3 bg-qventis-gray-50 border border-qventis-gray-200 rounded-xl focus:ring-2 focus:ring-qventis-coral focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-qventis-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    defaultValue="admin@qventis.com"
                    className="w-full px-4 py-3 bg-qventis-gray-50 border border-qventis-gray-200 rounded-xl focus:ring-2 focus:ring-qventis-coral focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-qventis-gray-700 mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    defaultValue="+33 6 12 34 56 78"
                    className="w-full px-4 py-3 bg-qventis-gray-50 border border-qventis-gray-200 rounded-xl focus:ring-2 focus:ring-qventis-coral focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-qventis-gray-700 mb-2">
                    Poste
                  </label>
                  <input
                    type="text"
                    defaultValue="Administrateur"
                    className="w-full px-4 py-3 bg-qventis-gray-50 border border-qventis-gray-200 rounded-xl focus:ring-2 focus:ring-qventis-coral focus:border-transparent"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-qventis-gray-700 mb-2">
                  Bio
                </label>
                <textarea
                  rows={4}
                  defaultValue="Expert en développement web et solutions IA, passionné par l'innovation digitale."
                  className="w-full px-4 py-3 bg-qventis-gray-50 border border-qventis-gray-200 rounded-xl focus:ring-2 focus:ring-qventis-coral focus:border-transparent"
                />
              </div>

              <Button variant="coral">
                Sauvegarder les modifications
              </Button>
            </div>
          )}

          {/* Notifications Tab */}
          {activeTab === 'notifications' && (
            <div className="space-y-6">
              <h2 className="text-xl font-display font-bold text-qventis-gray-900">
                Préférences de notification
              </h2>
              
              <div className="space-y-4">
                {[
                  { name: 'Nouveaux rendez-vous', description: 'Recevoir une alerte pour chaque nouveau RDV' },
                  { name: 'Commentaires blog', description: 'Notification des nouveaux commentaires' },
                  { name: 'Problèmes SEO', description: 'Alertes pour les problèmes SEO détectés' },
                  { name: 'Rapport hebdomadaire', description: 'Résumé des performances chaque semaine' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-qventis-gray-50 rounded-xl">
                    <div>
                      <h4 className="font-medium text-qventis-gray-900">{item.name}</h4>
                      <p className="text-sm text-qventis-gray-600">{item.description}</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-qventis-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-qventis-coral/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-qventis-coral"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Security Tab */}
          {activeTab === 'security' && (
            <div className="space-y-6">
              <h2 className="text-xl font-display font-bold text-qventis-gray-900">
                Sécurité et confidentialité
              </h2>
              
              <div className="space-y-4">
                <div className="p-4 bg-qventis-gray-50 rounded-xl">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <KeyIcon className="w-5 h-5 text-qventis-coral" />
                      <h4 className="font-medium text-qventis-gray-900">Changer le mot de passe</h4>
                    </div>
                    <Button variant="outline" size="sm">
                      Modifier
                    </Button>
                  </div>
                  <p className="text-sm text-qventis-gray-600">
                    Dernière modification il y a 3 mois
                  </p>
                </div>
                
                <div className="p-4 bg-qventis-gray-50 rounded-xl">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <DevicePhoneMobileIcon className="w-5 h-5 text-qventis-coral" />
                      <h4 className="font-medium text-qventis-gray-900">Authentification à deux facteurs</h4>
                    </div>
                    <Button variant="outline" size="sm">
                      Activer
                    </Button>
                  </div>
                  <p className="text-sm text-qventis-gray-600">
                    Renforcez la sécurité de votre compte
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Site Tab */}
          {activeTab === 'site' && (
            <div className="space-y-6">
              <h2 className="text-xl font-display font-bold text-qventis-gray-900">
                Paramètres du site
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-qventis-gray-700 mb-2">
                    Nom du site
                  </label>
                  <input
                    type="text"
                    defaultValue="Qventis - Solutions Digitales Innovantes"
                    className="w-full px-4 py-3 bg-qventis-gray-50 border border-qventis-gray-200 rounded-xl focus:ring-2 focus:ring-qventis-coral focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-qventis-gray-700 mb-2">
                    Email de contact
                  </label>
                  <input
                    type="email"
                    defaultValue="contact@qventis.com"
                    className="w-full px-4 py-3 bg-qventis-gray-50 border border-qventis-gray-200 rounded-xl focus:ring-2 focus:ring-qventis-coral focus:border-transparent"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-qventis-gray-700 mb-2">
                  Description du site
                </label>
                <textarea
                  rows={3}
                  defaultValue="Qventis vous accompagne dans votre transformation digitale avec des solutions sur-mesure en IA, développement web et data analytics."
                  className="w-full px-4 py-3 bg-qventis-gray-50 border border-qventis-gray-200 rounded-xl focus:ring-2 focus:ring-qventis-coral focus:border-transparent"
                />
              </div>

              <div className="p-4 bg-qventis-coral/5 border border-qventis-coral/20 rounded-xl">
                <h4 className="font-medium text-qventis-coral mb-2">
                  Mode maintenance
                </h4>
                <p className="text-sm text-qventis-gray-600 mb-3">
                  Activez le mode maintenance pour effectuer des mises à jour
                </p>
                <Button variant="outline" size="sm" className="text-qventis-coral border-qventis-coral/30">
                  Activer la maintenance
                </Button>
              </div>

              <Button variant="coral">
                Sauvegarder les paramètres
              </Button>
            </div>
          )}

        </div>

      </motion.div>

    </div>
  );
}
