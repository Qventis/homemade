'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FolderOpenIcon,
  PlusIcon,
  EyeIcon,
  PencilIcon,
  TrashIcon,
  LinkIcon,
  CalendarIcon,
  UserIcon,
  GlobeAltIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';
import { Button } from '@/components/ui/Button';

interface Project {
  id: string;
  name: string;
  client: string;
  url: string;
  notes: string;
  status: 'En cours' | 'Terminé' | 'En attente' | 'Annulé';
  createdAt: string;
  updatedAt: string;
}

export default function AdminProjectsPage() {
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  
  // Mock data pour les projets
  const [projects, setProjects] = useState<Project[]>([
    {
      id: '1',
      name: 'Site vitrine Luxury Cars',
      client: 'Garage Premium',
      url: 'https://luxury-cars.com',
      notes: 'Site vitrine avec catalogue de voitures de luxe. Design haut de gamme requis.',
      status: 'En cours',
      createdAt: '2024-01-15',
      updatedAt: '2024-01-20'
    },
    {
      id: '2',
      name: 'E-commerce Mode Femme',
      client: 'Boutique Élégance',
      url: 'https://elegance-mode.fr',
      notes: 'Boutique en ligne avec système de paiement et gestion des stocks.',
      status: 'Terminé',
      createdAt: '2023-12-01',
      updatedAt: '2024-01-10'
    },
    {
      id: '3',
      name: 'App Mobile Fitness',
      client: 'FitLife Studio',
      url: 'https://fitlife-app.com',
      notes: 'Application mobile pour suivi d\'entraînements et nutrition.',
      status: 'En attente',
      createdAt: '2024-01-05',
      updatedAt: '2024-01-05'
    },
    {
      id: '4',
      name: 'Dashboard Analytics',
      client: 'DataCorp Solutions',
      url: 'https://datacorp-dashboard.com',
      notes: 'Interface d\'administration pour visualisation de données complexes.',
      status: 'En cours',
      createdAt: '2024-01-12',
      updatedAt: '2024-01-18'
    }
  ]);

  const [formData, setFormData] = useState({
    name: '',
    client: '',
    url: '',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newProject: Project = {
      id: Date.now().toString(),
      ...formData,
      status: 'En cours',
      createdAt: new Date().toISOString().split('T')[0],
      updatedAt: new Date().toISOString().split('T')[0]
    };
    
    setProjects([newProject, ...projects]);
    setFormData({ name: '', client: '', url: '', notes: '' });
    setShowForm(false);
  };

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.client.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === '' || project.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'En cours': return 'bg-blue-100 text-blue-800';
      case 'Terminé': return 'bg-green-100 text-green-800';
      case 'En attente': return 'bg-yellow-100 text-yellow-800';
      case 'Annulé': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
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
            Gestion de Projets
          </h1>
          <p className="text-qventis-gray-600">
            Créez et gérez tous vos projets clients
          </p>
        </div>
        
        <Button
          variant="coral"
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2"
        >
          <PlusIcon className="w-4 h-4" />
          Nouveau Projet
        </Button>
      </motion.div>

      {/* Stats Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-6"
      >
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-qventis-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-qventis-gray-600 text-sm">Total Projets</p>
              <p className="text-2xl font-bold text-qventis-gray-900">{projects.length}</p>
            </div>
            <FolderOpenIcon className="w-8 h-8 text-qventis-coral" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-qventis-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-qventis-gray-600 text-sm">En Cours</p>
              <p className="text-2xl font-bold text-blue-600">
                {projects.filter(p => p.status === 'En cours').length}
              </p>
            </div>
            <CalendarIcon className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-qventis-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-qventis-gray-600 text-sm">Terminés</p>
              <p className="text-2xl font-bold text-green-600">
                {projects.filter(p => p.status === 'Terminé').length}
              </p>
            </div>
            <FolderOpenIcon className="w-8 h-8 text-green-500" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-qventis-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-qventis-gray-600 text-sm">En Attente</p>
              <p className="text-2xl font-bold text-yellow-600">
                {projects.filter(p => p.status === 'En attente').length}
              </p>
            </div>
            <CalendarIcon className="w-8 h-8 text-yellow-500" />
          </div>
        </div>
      </motion.div>

      {/* Form Creation */}
      {showForm && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="bg-white rounded-2xl p-6 shadow-sm border border-qventis-gray-200"
        >
          <h2 className="text-xl font-display font-bold text-qventis-gray-900 mb-6">
            Créer un nouveau projet
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-qventis-gray-700 mb-2">
                  Nom du projet *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 bg-qventis-gray-50 border border-qventis-gray-200 rounded-xl focus:ring-2 focus:ring-qventis-coral focus:border-transparent"
                  placeholder="Ex: Site vitrine Restaurant"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-qventis-gray-700 mb-2">
                  Client *
                </label>
                <input
                  type="text"
                  required
                  value={formData.client}
                  onChange={(e) => setFormData({...formData, client: e.target.value})}
                  className="w-full px-4 py-3 bg-qventis-gray-50 border border-qventis-gray-200 rounded-xl focus:ring-2 focus:ring-qventis-coral focus:border-transparent"
                  placeholder="Ex: Bistrot Parisien"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-qventis-gray-700 mb-2">
                URL du projet
              </label>
              <input
                type="url"
                value={formData.url}
                onChange={(e) => setFormData({...formData, url: e.target.value})}
                className="w-full px-4 py-3 bg-qventis-gray-50 border border-qventis-gray-200 rounded-xl focus:ring-2 focus:ring-qventis-coral focus:border-transparent"
                placeholder="https://example.com"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-qventis-gray-700 mb-2">
                Notes
              </label>
              <textarea
                rows={3}
                value={formData.notes}
                onChange={(e) => setFormData({...formData, notes: e.target.value})}
                className="w-full px-4 py-3 bg-qventis-gray-50 border border-qventis-gray-200 rounded-xl focus:ring-2 focus:ring-qventis-coral focus:border-transparent"
                placeholder="Description du projet, besoins spécifiques..."
              />
            </div>
            
            <div className="flex items-center gap-3">
              <Button type="submit" variant="coral">
                Créer le projet
              </Button>
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setShowForm(false)}
              >
                Annuler
              </Button>
            </div>
          </form>
        </motion.div>
      )}

      {/* Filters and Search */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white rounded-2xl p-6 shadow-sm border border-qventis-gray-200"
      >
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Rechercher par nom ou client..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 bg-qventis-gray-50 border border-qventis-gray-200 rounded-xl focus:ring-2 focus:ring-qventis-coral focus:border-transparent"
            />
          </div>
          
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-3 bg-qventis-gray-50 border border-qventis-gray-200 rounded-xl focus:ring-2 focus:ring-qventis-coral focus:border-transparent"
          >
            <option value="">Tous les statuts</option>
            <option value="En cours">En cours</option>
            <option value="Terminé">Terminé</option>
            <option value="En attente">En attente</option>
            <option value="Annulé">Annulé</option>
          </select>
        </div>
      </motion.div>

      {/* Projects Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="bg-white rounded-2xl shadow-sm border border-qventis-gray-200 overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-qventis-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium text-qventis-gray-700">
                  Projet
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-qventis-gray-700">
                  Client
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-qventis-gray-700">
                  URL
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-qventis-gray-700">
                  Statut
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-qventis-gray-700">
                  Créé le
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-qventis-gray-700">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-qventis-gray-200">
              {filteredProjects.map((project) => (
                <tr key={project.id} className="hover:bg-qventis-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium text-qventis-gray-900">{project.name}</p>
                      {project.notes && (
                        <p className="text-sm text-qventis-gray-600 mt-1 truncate max-w-xs">
                          {project.notes}
                        </p>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <UserIcon className="w-4 h-4 text-qventis-gray-400" />
                      <span className="text-qventis-gray-900">{project.client}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-qventis-coral hover:text-qventis-coral/80 transition-colors"
                      >
                        <GlobeAltIcon className="w-4 h-4" />
                        <span className="truncate max-w-xs">{project.url}</span>
                        <LinkIcon className="w-3 h-3" />
                      </a>
                    ) : (
                      <span className="text-qventis-gray-400">—</span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-qventis-gray-600">
                      {new Date(project.createdAt).toLocaleDateString('fr-FR')}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 text-qventis-gray-400 hover:text-qventis-coral hover:bg-qventis-coral/10 rounded-lg transition-colors">
                        <EyeIcon className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-qventis-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                        <PencilIcon className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-qventis-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                        <TrashIcon className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <FolderOpenIcon className="w-12 h-12 text-qventis-gray-300 mx-auto mb-4" />
            <p className="text-qventis-gray-600">
              {searchTerm || statusFilter ? 'Aucun projet trouvé avec ces critères' : 'Aucun projet créé pour le moment'}
            </p>
            {!searchTerm && !statusFilter && (
              <Button
                variant="coral"
                onClick={() => setShowForm(true)}
                className="mt-4"
              >
                Créer votre premier projet
              </Button>
            )}
          </div>
        )}
      </motion.div>

    </div>
  );
}
