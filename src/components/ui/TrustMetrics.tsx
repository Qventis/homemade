'use client';

import { motion } from "framer-motion";
import { 
  BoltIcon,
  StarIcon,
  ShieldCheckIcon,
  ClockIcon,
  ChartBarIcon,
  UserGroupIcon,
  TrophyIcon,
  HeartIcon
} from "@heroicons/react/24/outline";

interface TrustMetric {
  icon: any;
  value: string;
  label: string;
  description?: string;
  trend?: string;
}

interface TrustMetricsProps {
  variant?: 'grid' | 'bento' | 'timeline' | 'floating';
  metrics?: TrustMetric[];
}

export function TrustMetrics({ 
  variant = 'grid',
  metrics = [
    { icon: BoltIcon, value: '250+', label: 'Projets livrés', description: 'Sites web et applications', trend: '+25 ce mois' },
    { icon: StarIcon, value: '4.9/5', label: 'Satisfaction client', description: 'Basé sur 127 avis', trend: '↗ +0.2 pts' },
    { icon: ShieldCheckIcon, value: '99%', label: 'Taux de réussite', description: 'Projets livrés à temps', trend: 'Constant' },
    { icon: ClockIcon, value: '24h', label: 'Temps de réponse', description: 'Support client rapide', trend: 'Garanti' }
  ]
}: TrustMetricsProps) {

  if (variant === 'bento') {
    return (
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => {
          const IconComponent = metric.icon;
          const isLarge = index === 0 || index === 1;
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`
                group relative bg-gradient-to-br from-white to-qventis-gray-50 
                rounded-3xl p-6 border border-qventis-gray-100 shadow-lg
                hover:shadow-2xl hover:border-qventis-coral/30 
                transition-all duration-500 overflow-hidden
                ${isLarge ? 'lg:col-span-1 lg:row-span-1' : ''}
              `}
            >
              {/* Gradient animé au hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-qventis-coral/5 via-transparent to-qventis-coral/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                {/* Icône avec effet de flottement */}
                <motion.div 
                  whileHover={{ y: -4, rotate: 5 }}
                  className="inline-flex items-center justify-center w-12 h-12 bg-qventis-coral/10 rounded-2xl mb-4 group-hover:bg-qventis-coral group-hover:text-white transition-all duration-300"
                >
                  <IconComponent className="w-6 h-6 text-qventis-coral group-hover:text-white transition-colors" />
                </motion.div>

                {/* Valeur principale avec animation counter */}
                <motion.div 
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                  className="text-3xl font-bold text-qventis-gray-900 mb-2 group-hover:text-qventis-coral transition-colors"
                >
                  {metric.value}
                </motion.div>

                {/* Label */}
                <div className="text-sm font-semibold text-qventis-gray-700 mb-1">
                  {metric.label}
                </div>

                {/* Description subtile */}
                {metric.description && (
                  <div className="text-xs text-qventis-gray-500 mb-2">
                    {metric.description}
                  </div>
                )}

                {/* Trend indicator */}
                {metric.trend && (
                  <div className="inline-flex items-center gap-1 px-2 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    {metric.trend}
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    );
  }

  if (variant === 'timeline') {
    return (
      <div className="space-y-6">
        {metrics.map((metric, index) => {
          const IconComponent = metric.icon;
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="flex items-start gap-6 group"
            >
              {/* Timeline dot avec icône */}
              <div className="flex-shrink-0 relative">
                <div className="w-16 h-16 bg-gradient-to-br from-qventis-coral to-qventis-coral-dark rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                {/* Ligne de connexion */}
                {index < metrics.length - 1 && (
                  <div className="absolute top-16 left-1/2 transform -translate-x-0.5 w-0.5 h-8 bg-gradient-to-b from-qventis-coral/30 to-transparent" />
                )}
              </div>

              {/* Contenu */}
              <div className="flex-1 bg-white rounded-2xl p-6 shadow-md border border-qventis-gray-100 group-hover:shadow-xl group-hover:border-qventis-coral/20 transition-all duration-300">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-4xl font-bold text-qventis-gray-900">
                    {metric.value}
                  </div>
                  {metric.trend && (
                    <div className="px-3 py-1 bg-qventis-coral/10 text-qventis-coral text-sm font-semibold rounded-full">
                      {metric.trend}
                    </div>
                  )}
                </div>
                
                <div className="text-lg font-semibold text-qventis-coral mb-1">
                  {metric.label}
                </div>
                
                {metric.description && (
                  <div className="text-qventis-gray-600">
                    {metric.description}
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    );
  }

  if (variant === 'floating') {
    return (
      <div className="relative">
        {/* Fond avec pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-qventis-coral/5 to-qventis-gray-50 rounded-3xl" />
        
        <div className="relative p-8 grid grid-cols-2 gap-6">
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon;
            const positions = [
              { top: '10%', left: '15%' },
              { top: '20%', right: '10%' },
              { bottom: '25%', left: '20%' },
              { bottom: '15%', right: '15%' }
            ];
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 200
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 5,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                {/* Card flottante */}
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500">
                  
                  {/* Halo lumineux au hover */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-qventis-coral/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                  
                  <div className="relative z-10 text-center">
                    {/* Icône */}
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-qventis-coral/10 rounded-full mb-4 group-hover:bg-qventis-coral transition-all duration-300">
                      <IconComponent className="w-7 h-7 text-qventis-coral group-hover:text-white transition-colors" />
                    </div>

                    {/* Valeur avec effet de compteur */}
                    <div className="text-3xl font-bold text-qventis-gray-900 mb-2 group-hover:text-qventis-coral transition-colors">
                      {metric.value}
                    </div>

                    {/* Label */}
                    <div className="text-sm font-semibold text-qventis-gray-700 leading-tight">
                      {metric.label}
                    </div>

                    {/* Micro-interaction: pulse sur la valeur */}
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                      className="absolute top-12 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-qventis-coral rounded-full opacity-60"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    );
  }

  // Variant par défaut : grid
  return (
    <div className="grid grid-cols-2 gap-4">
      {metrics.map((metric, index) => {
        const IconComponent = metric.icon;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-qventis-gray-100 hover:shadow-xl transition-all duration-300"
          >
            <IconComponent className="w-8 h-8 text-qventis-coral mb-3" />
            <div className="text-2xl font-bold text-qventis-gray-900 mb-1">{metric.value}</div>
            <div className="text-sm text-qventis-gray-600 font-medium">{metric.label}</div>
          </motion.div>
        );
      })}
    </div>
  );
}
