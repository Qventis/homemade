'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CalendarDaysIcon,
  PhoneIcon,
  VideoCameraIcon,
  UserIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  XCircleIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  EyeIcon,
  PencilIcon,
  ChatBubbleLeftIcon
} from '@heroicons/react/24/outline';
import { Button } from '@/components/ui/Button';

const appointments = [
  {
    id: 1,
    client: {
      name: 'Thomas Leclerc',
      email: 'thomas.leclerc@email.com',
      phone: '+33 6 12 34 56 78',
      company: 'TechCorp'
    },
    service: 'Consultation Data Analytics',
    type: 'visio',
    date: '2024-01-16',
    time: '14:00',
    duration: 60,
    status: 'confirmed',
    notes: 'Besoin d\'aide pour analyser les données de vente et créer des tableaux de bord',
    createdAt: '2024-01-10T10:30:00',
    budget: '2000-5000€'
  },
  {
    id: 2,
    client: {
      name: 'Sophie Bernard',
      email: 'sophie.bernard@startup.com',
      phone: '+33 6 98 76 54 32',
      company: 'StartupInnovante'
    },
    service: 'Audit SEO complet',
    type: 'telephone',
    date: '2024-01-16',
    time: '16:30',
    duration: 45,
    status: 'pending',
    notes: 'Site e-commerce lancé récemment, besoin d\'optimisation SEO',
    createdAt: '2024-01-12T14:20:00',
    budget: '1000-3000€'
  },
  {
    id: 3,
    client: {
      name: 'Marc Dubois',
      email: 'marc.dubois@entreprise.fr',
      phone: '+33 6 45 67 89 01',
      company: 'Entreprise Solutions'
    },
    service: 'Développement site web avec IA',
    type: 'visio',
    date: '2024-01-17',
    time: '10:00',
    duration: 90,
    status: 'confirmed',
    notes: 'Projet de refonte complète avec intégration d\'outils IA pour l\'automatisation',
    createdAt: '2024-01-08T16:45:00',
    budget: '10000-20000€'
  },
  {
    id: 4,
    client: {
      name: 'Julie Martin',
      email: 'julie.martin@agency.com',
      phone: '+33 6 23 45 67 89',
      company: 'Creative Agency'
    },
    service: 'Formation équipe développement',
    type: 'telephone',
    date: '2024-01-18',
    time: '11:00',
    duration: 30,
    status: 'cancelled',
    notes: 'Formation sur les bonnes pratiques Next.js pour une équipe de 5 développeurs',
    createdAt: '2024-01-11T09:15:00',
    budget: '3000-8000€'
  },
  {
    id: 5,
    client: {
      name: 'Pierre Durand',
      email: 'pierre.durand@retail.fr',
      phone: '+33 6 78 90 12 34',
      company: 'Retail Pro'
    },
    service: 'Consultation stratégie digitale',
    type: 'visio',
    date: '2024-01-19',
    time: '15:30',
    duration: 60,
    status: 'pending',
    notes: 'Besoin de conseils pour la transformation digitale d\'une chaîne de magasins',
    createdAt: '2024-01-13T11:30:00',
    budget: '5000-15000€'
  }
];

const stats = [
  {
    name: 'Total RDV',
    value: '34',
    change: '+8 ce mois',
    changeType: 'positive',
    icon: CalendarDaysIcon,
    color: 'coral'
  },
  {
    name: 'Confirmés',
    value: '18',
    change: '53% du total',
    changeType: 'neutral',
    icon: CheckCircleIcon,
    color: 'green'
  },
  {
    name: 'En attente',
    value: '12',
    change: '35% du total',
    changeType: 'neutral',
    icon: ClockIcon,
    color: 'yellow'
  },
  {
    name: 'Taux conversion',
    value: '76%',
    change: '+12% vs mois précédent',
    changeType: 'positive',
    icon: CheckCircleIcon,
    color: 'blue'
  }
];

export default function AdminAppointmentsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const [selectedAppointment, setSelectedAppointment] = useState<any>(null);

  const filteredAppointments = appointments.filter(appointment => {
    const matchesSearch = appointment.client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         appointment.client.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         appointment.service.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || appointment.status === statusFilter;
    const matchesType = typeFilter === 'all' || appointment.type === typeFilter;
    
    return matchesSearch && matchesStatus && matchesType;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-600';
      case 'pending': return 'bg-yellow-100 text-yellow-600';
      case 'cancelled': return 'bg-red-100 text-red-600';
      case 'completed': return 'bg-blue-100 text-blue-600';
      default: return 'bg-qventis-gray-100 text-qventis-gray-600';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'confirmed': return 'Confirmé';
      case 'pending': return 'En attente';
      case 'cancelled': return 'Annulé';
      case 'completed': return 'Terminé';
      default: return status;
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-display font-bold text-qventis-gray-900 mb-2">
            Gestion des Rendez-vous
          </h1>
          <p className="text-qventis-gray-600">
            Consultez et gérez tous vos rendez-vous clients
          </p>
        </div>
        <Button variant="coral" className="flex items-center gap-2">
          <CalendarDaysIcon className="w-4 h-4" />
          Planifier un RDV
        </Button>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {stats.map((stat, index) => (
          <div key={stat.name} className="bg-white rounded-2xl p-6 shadow-sm border border-qventis-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                stat.color === 'coral' ? 'bg-qventis-coral/20 text-qventis-coral' :
                stat.color === 'green' ? 'bg-green-100 text-green-600' :
                stat.color === 'yellow' ? 'bg-yellow-100 text-yellow-600' :
                'bg-blue-100 text-blue-600'
              }`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div className={`text-sm font-medium px-2 py-1 rounded-full ${
                stat.changeType === 'positive' ? 'bg-green-100 text-green-600' :
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
          </div>
        ))}
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white rounded-xl p-6 shadow-sm border border-qventis-gray-200"
      >
        <div className="flex flex-col md:flex-row gap-4">
          
          {/* Search */}
          <div className="flex-1 relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-qventis-gray-400" />
            <input
              type="text"
              placeholder="Rechercher un client, entreprise ou service..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-qventis-gray-200 rounded-lg focus:ring-2 focus:ring-qventis-coral focus:border-transparent"
            />
          </div>

          {/* Status Filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 border border-qventis-gray-200 rounded-lg focus:ring-2 focus:ring-qventis-coral focus:border-transparent"
          >
            <option value="all">Tous les statuts</option>
            <option value="confirmed">Confirmés</option>
            <option value="pending">En attente</option>
            <option value="cancelled">Annulés</option>
            <option value="completed">Terminés</option>
          </select>

          {/* Type Filter */}
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="px-4 py-2 border border-qventis-gray-200 rounded-lg focus:ring-2 focus:ring-qventis-coral focus:border-transparent"
          >
            <option value="all">Tous les types</option>
            <option value="visio">Visioconférence</option>
            <option value="telephone">Téléphone</option>
          </select>

        </div>
      </motion.div>

      {/* Appointments List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="bg-white rounded-xl shadow-sm border border-qventis-gray-200 overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-qventis-gray-50 border-b border-qventis-gray-200">
              <tr>
                <th className="text-left py-4 px-6 font-medium text-qventis-gray-900">Client</th>
                <th className="text-left py-4 px-6 font-medium text-qventis-gray-900">Service</th>
                <th className="text-left py-4 px-6 font-medium text-qventis-gray-900">Date & Heure</th>
                <th className="text-left py-4 px-6 font-medium text-qventis-gray-900">Type</th>
                <th className="text-left py-4 px-6 font-medium text-qventis-gray-900">Statut</th>
                <th className="text-left py-4 px-6 font-medium text-qventis-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredAppointments.map((appointment, index) => (
                <tr key={appointment.id} className="border-b border-qventis-gray-100 hover:bg-qventis-gray-50">
                  <td className="py-4 px-6">
                    <div>
                      <div className="font-medium text-qventis-gray-900">{appointment.client.name}</div>
                      <div className="text-sm text-qventis-gray-600">{appointment.client.company}</div>
                      <div className="text-xs text-qventis-gray-500">{appointment.client.email}</div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="font-medium text-qventis-gray-900">{appointment.service}</div>
                    <div className="text-sm text-qventis-gray-600">{appointment.duration} min</div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="font-medium text-qventis-gray-900">
                      {new Date(appointment.date).toLocaleDateString('fr-FR')}
                    </div>
                    <div className="text-sm text-qventis-gray-600">{appointment.time}</div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      {appointment.type === 'visio' ? (
                        <VideoCameraIcon className="w-4 h-4 text-qventis-coral" />
                      ) : (
                        <PhoneIcon className="w-4 h-4 text-qventis-coral" />
                      )}
                      <span className="text-sm font-medium capitalize">{appointment.type}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`px-3 py-1 text-sm font-medium rounded-full ${getStatusColor(appointment.status)}`}>
                      {getStatusText(appointment.status)}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setSelectedAppointment(appointment)}
                        className="p-2 text-qventis-gray-400 hover:text-qventis-coral hover:bg-qventis-coral/10 rounded-lg transition-colors"
                      >
                        <EyeIcon className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-qventis-gray-400 hover:text-qventis-coral hover:bg-qventis-coral/10 rounded-lg transition-colors">
                        <PencilIcon className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-qventis-gray-400 hover:text-qventis-coral hover:bg-qventis-coral/10 rounded-lg transition-colors">
                        <ChatBubbleLeftIcon className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Appointment Detail Modal */}
      {selectedAppointment && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedAppointment(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-display font-bold text-qventis-gray-900">
                Détails du Rendez-vous
              </h2>
              <button
                onClick={() => setSelectedAppointment(null)}
                className="p-2 text-qventis-gray-400 hover:text-qventis-gray-600 rounded-lg"
              >
                <XCircleIcon className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-6">
              
              {/* Client Info */}
              <div className="bg-qventis-gray-50 rounded-xl p-4">
                <h3 className="font-medium text-qventis-gray-900 mb-3">Informations Client</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <span className="text-sm text-qventis-gray-600">Nom:</span>
                    <p className="font-medium text-qventis-gray-900">{selectedAppointment.client.name}</p>
                  </div>
                  <div>
                    <span className="text-sm text-qventis-gray-600">Entreprise:</span>
                    <p className="font-medium text-qventis-gray-900">{selectedAppointment.client.company}</p>
                  </div>
                  <div>
                    <span className="text-sm text-qventis-gray-600">Email:</span>
                    <p className="font-medium text-qventis-gray-900">{selectedAppointment.client.email}</p>
                  </div>
                  <div>
                    <span className="text-sm text-qventis-gray-600">Téléphone:</span>
                    <p className="font-medium text-qventis-gray-900">{selectedAppointment.client.phone}</p>
                  </div>
                </div>
              </div>

              {/* Appointment Info */}
              <div className="bg-qventis-gray-50 rounded-xl p-4">
                <h3 className="font-medium text-qventis-gray-900 mb-3">Détails du RDV</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <span className="text-sm text-qventis-gray-600">Service:</span>
                    <p className="font-medium text-qventis-gray-900">{selectedAppointment.service}</p>
                  </div>
                  <div>
                    <span className="text-sm text-qventis-gray-600">Budget:</span>
                    <p className="font-medium text-qventis-gray-900">{selectedAppointment.budget}</p>
                  </div>
                  <div>
                    <span className="text-sm text-qventis-gray-600">Date:</span>
                    <p className="font-medium text-qventis-gray-900">
                      {new Date(selectedAppointment.date).toLocaleDateString('fr-FR')}
                    </p>
                  </div>
                  <div>
                    <span className="text-sm text-qventis-gray-600">Heure:</span>
                    <p className="font-medium text-qventis-gray-900">{selectedAppointment.time}</p>
                  </div>
                  <div>
                    <span className="text-sm text-qventis-gray-600">Durée:</span>
                    <p className="font-medium text-qventis-gray-900">{selectedAppointment.duration} minutes</p>
                  </div>
                  <div>
                    <span className="text-sm text-qventis-gray-600">Type:</span>
                    <p className="font-medium text-qventis-gray-900 capitalize">{selectedAppointment.type}</p>
                  </div>
                </div>
              </div>

              {/* Notes */}
              <div className="bg-qventis-gray-50 rounded-xl p-4">
                <h3 className="font-medium text-qventis-gray-900 mb-3">Notes</h3>
                <p className="text-qventis-gray-700">{selectedAppointment.notes}</p>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-3">
                <Button variant="coral">
                  Confirmer le RDV
                </Button>
                <Button variant="outline">
                  Modifier
                </Button>
                <Button variant="outline" className="text-red-600 border-red-200 hover:bg-red-50">
                  Annuler
                </Button>
                <Button variant="outline">
                  Envoyer un message
                </Button>
              </div>

            </div>
          </motion.div>
        </motion.div>
      )}

    </div>
  );
}
