'use client';

import { motion } from 'framer-motion';
import { 
  ChartBarIcon,
  EyeIcon,
  UserGroupIcon,
  GlobeAltIcon,
  ArrowUpIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

export default function AdminAnalyticsPage() {
  return (
    <div className="space-y-6">
      
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-display font-bold text-qventis-gray-900 mb-2">
          Analytics
        </h1>
        <p className="text-qventis-gray-600">
          Analysez les performances de votre site web
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
          <ChartBarIcon className="w-8 h-8 text-qventis-coral" />
        </div>
        
        <h2 className="text-2xl font-display font-bold text-qventis-gray-900 mb-4">
          Analytics & Rapports
        </h2>
        
        <p className="text-qventis-gray-600 mb-8 max-w-md mx-auto">
          Cette section fournira des analyses détaillées sur le trafic, les conversions, et les performances de votre site web.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="p-4 bg-qventis-gray-50 rounded-xl">
            <EyeIcon className="w-8 h-8 text-qventis-coral mx-auto mb-3" />
            <h3 className="font-medium text-qventis-gray-900 mb-2">Trafic</h3>
            <p className="text-sm text-qventis-gray-600">Visiteurs et pages vues</p>
          </div>
          
          <div className="p-4 bg-qventis-gray-50 rounded-xl">
            <UserGroupIcon className="w-8 h-8 text-qventis-coral mx-auto mb-3" />
            <h3 className="font-medium text-qventis-gray-900 mb-2">Audience</h3>
            <p className="text-sm text-qventis-gray-600">Démographie et comportement</p>
          </div>
          
          <div className="p-4 bg-qventis-gray-50 rounded-xl">
            <ArrowUpIcon className="w-8 h-8 text-qventis-coral mx-auto mb-3" />
            <h3 className="font-medium text-qventis-gray-900 mb-2">Conversions</h3>
            <p className="text-sm text-qventis-gray-600">Objectifs et ROI</p>
          </div>
          
          <div className="p-4 bg-qventis-gray-50 rounded-xl">
            <GlobeAltIcon className="w-8 h-8 text-qventis-coral mx-auto mb-3" />
            <h3 className="font-medium text-qventis-gray-900 mb-2">Sources</h3>
            <p className="text-sm text-qventis-gray-600">Canaux d'acquisition</p>
          </div>
        </div>

      </motion.div>

    </div>
  );
}
