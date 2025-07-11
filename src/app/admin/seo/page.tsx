'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MagnifyingGlassIcon,
  ChartBarIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  ClockIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  DocumentTextIcon,
  LinkIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

export default function AdminSEOPage() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="space-y-6">
      
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-display font-bold text-qventis-gray-900 mb-2">
          SEO Manager
        </h1>
        <p className="text-qventis-gray-600">
          Optimisez le référencement naturel de votre site
        </p>
      </motion.div>

      {/* Coming Soon */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="bg-white rounded-2xl p-12 shadow-sm border border-qventis-gray-200 text-center"
      >
        <div className="w-16 h-16 bg-qventis-coral/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <MagnifyingGlassIcon className="w-8 h-8 text-qventis-coral" />
        </div>
        
        <h2 className="text-2xl font-display font-bold text-qventis-gray-900 mb-4">
          SEO Manager
        </h2>
        
        <p className="text-qventis-gray-600 mb-8 max-w-md mx-auto">
          Cette section permettra de gérer et optimiser le référencement naturel de votre site avec des analyses détaillées, suivi des mots-clés et recommandations d'amélioration.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
          <div className="p-4 bg-qventis-gray-50 rounded-xl">
            <ChartBarIcon className="w-8 h-8 text-qventis-coral mx-auto mb-3" />
            <h3 className="font-medium text-qventis-gray-900 mb-2">Analytics SEO</h3>
            <p className="text-sm text-qventis-gray-600">Suivi des performances et métriques SEO</p>
          </div>
          
          <div className="p-4 bg-qventis-gray-50 rounded-xl">
            <MagnifyingGlassIcon className="w-8 h-8 text-qventis-coral mx-auto mb-3" />
            <h3 className="font-medium text-qventis-gray-900 mb-2">Mots-clés</h3>
            <p className="text-sm text-qventis-gray-600">Gestion et suivi des positions</p>
          </div>
          
          <div className="p-4 bg-qventis-gray-50 rounded-xl">
            <ExclamationTriangleIcon className="w-8 h-8 text-qventis-coral mx-auto mb-3" />
            <h3 className="font-medium text-qventis-gray-900 mb-2">Audits</h3>
            <p className="text-sm text-qventis-gray-600">Détection et correction des problèmes</p>
          </div>
        </div>

      </motion.div>

    </div>
  );
}
