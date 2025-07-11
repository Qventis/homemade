'use client';

import { motion } from 'framer-motion';
import { 
  DocumentTextIcon,
  EyeIcon,
  HeartIcon,
  CalendarDaysIcon,
  ChartBarIcon,
  UserGroupIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';

const stats = [
  {
    name: 'Articles de blog',
    value: '12',
    change: '+2 ce mois',
    changeType: 'positive',
    icon: DocumentTextIcon,
    color: 'coral'
  },
  {
    name: 'Vues mensuelles',
    value: '8,547',
    change: '+23% vs mois précédent',
    changeType: 'positive',
    icon: EyeIcon,
    color: 'blue'
  },
  {
    name: 'Rendez-vous',
    value: '34',
    change: '8 en attente',
    changeType: 'neutral',
    icon: CalendarDaysIcon,
    color: 'green'
  },
  {
    name: 'Conversions',
    value: '12.4%',
    change: '+1.2% cette semaine',
    changeType: 'positive',
    icon: ChartBarIcon,
    color: 'purple'
  }
];

const recentActivity = [
  {
    id: 1,
    type: 'appointment',
    title: 'Nouveau rendez-vous planifié',
    description: 'Jean Dupont - Consultation IA',
    time: 'Il y a 10 minutes',
    status: 'new'
  },
  {
    id: 2,
    type: 'blog',
    title: 'Article publié',
    description: 'Next.js 14 et App Router : Le Guide Complet',
    time: 'Il y a 2 heures',
    status: 'success'
  },
  {
    id: 3,
    type: 'seo',
    title: 'Amélioration SEO détectée',
    description: 'Score Core Web Vitals amélioré',
    time: 'Il y a 4 heures',
    status: 'success'
  },
  {
    id: 4,
    type: 'appointment',
    title: 'Rendez-vous confirmé',
    description: 'Marie Martin - Audit technique',
    time: 'Il y a 6 heures',
    status: 'confirmed'
  }
];

const upcomingAppointments = [
  {
    id: 1,
    client: 'Thomas Leclerc',
    service: 'Consultation Data Analytics',
    date: '2024-01-16',
    time: '14:00',
    type: 'visio',
    status: 'confirmed'
  },
  {
    id: 2,
    client: 'Sophie Bernard',
    service: 'Audit SEO complet',
    date: '2024-01-16',
    time: '16:30',
    type: 'telephone',
    status: 'pending'
  },
  {
    id: 3,
    client: 'Marc Dubois',
    service: 'Développement site web',
    date: '2024-01-17',
    time: '10:00',
    type: 'visio',
    status: 'confirmed'
  }
];

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-display font-bold text-qventis-gray-900 mb-2">
          Dashboard
        </h1>
        <p className="text-qventis-gray-600">
          Vue d'ensemble de votre activité Qventis
        </p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-qventis-gray-200 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                stat.color === 'coral' ? 'bg-qventis-coral/20 text-qventis-coral' :
                stat.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                stat.color === 'green' ? 'bg-green-100 text-green-600' :
                'bg-purple-100 text-purple-600'
              }`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div className={`text-sm font-medium px-2 py-1 rounded-full ${
                stat.changeType === 'positive' ? 'bg-green-100 text-green-600' :
                stat.changeType === 'negative' ? 'bg-red-100 text-red-600' :
                'bg-qventis-gray-100 text-qventis-gray-600'
              }`}>
                {stat.change}
              </div>
            </div>
            <div className="text-2xl font-bold text-qventis-gray-900 mb-1">
              {stat.value}
            </div>
            <div className="text-sm text-qventis-gray-600">
              {stat.name}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl p-6 shadow-sm border border-qventis-gray-200"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-display font-bold text-qventis-gray-900">
              Activité récente
            </h2>
            <button className="text-qventis-coral hover:text-qventis-coral/80 text-sm font-medium">
              Voir tout
            </button>
          </div>

          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-start gap-3 p-3 hover:bg-qventis-gray-50 rounded-xl transition-colors">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  activity.status === 'new' ? 'bg-qventis-coral/20 text-qventis-coral' :
                  activity.status === 'success' ? 'bg-green-100 text-green-600' :
                  'bg-blue-100 text-blue-600'
                }`}>
                  {activity.status === 'new' ? <ExclamationTriangleIcon className="w-4 h-4" /> :
                   activity.status === 'success' ? <CheckCircleIcon className="w-4 h-4" /> :
                   <ClockIcon className="w-4 h-4" />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-qventis-gray-900 text-sm">
                    {activity.title}
                  </p>
                  <p className="text-qventis-gray-600 text-sm">
                    {activity.description}
                  </p>
                  <p className="text-qventis-gray-500 text-xs mt-1">
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Upcoming Appointments */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white rounded-2xl p-6 shadow-sm border border-qventis-gray-200"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-display font-bold text-qventis-gray-900">
              Prochains rendez-vous
            </h2>
            <button className="text-qventis-coral hover:text-qventis-coral/80 text-sm font-medium">
              Voir tous
            </button>
          </div>

          <div className="space-y-4">
            {upcomingAppointments.map((appointment) => (
              <div key={appointment.id} className="flex items-center gap-4 p-3 hover:bg-qventis-gray-50 rounded-xl transition-colors">
                <div className="w-10 h-10 bg-qventis-coral/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CalendarDaysIcon className="w-5 h-5 text-qventis-coral" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-medium text-qventis-gray-900 text-sm">
                      {appointment.client}
                    </p>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      appointment.status === 'confirmed' ? 'bg-green-100 text-green-600' :
                      'bg-yellow-100 text-yellow-600'
                    }`}>
                      {appointment.status === 'confirmed' ? 'Confirmé' : 'En attente'}
                    </span>
                  </div>
                  <p className="text-qventis-gray-600 text-sm mb-1">
                    {appointment.service}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-qventis-gray-500">
                    <span>{new Date(appointment.date).toLocaleDateString('fr-FR')}</span>
                    <span>•</span>
                    <span>{appointment.time}</span>
                    <span>•</span>
                    <span className="capitalize">{appointment.type}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>

    </div>
  );
}
