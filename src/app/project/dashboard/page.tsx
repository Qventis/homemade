import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/sections/Footer';

export const metadata: Metadata = {
  title: 'Tableau de Bord Projet | Qventis',
  description: 'Suivez l\'avancement de votre projet et accédez à tous vos documents dans votre espace client Qventis.',
};

// Projets factices pour la démo
const demoProjects = [
  {
    id: 'QVT-23478',
    name: 'Site E-commerce Premium',
    status: 'En cours',
    progress: 65,
    lastUpdate: '06/07/2025',
    nextDelivery: '18/07/2025',
  },
  {
    id: 'QVT-23684',
    name: 'Intégration IA Chatbot',
    status: 'Validation',
    progress: 90,
    lastUpdate: '07/07/2025',
    nextDelivery: '10/07/2025',
  }
];

export default function ProjectDashboardPage() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-br from-qventis-white to-qventis-gray-100">
      
      <section className="flex-grow px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          {/* Header */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 border border-qventis-gray-200">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl font-bold text-qventis-gray-900">Tableau de bord</h1>
                <p className="mt-1 text-qventis-gray-600">
                  Bienvenue dans votre espace projet
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-qventis-gray-100 text-qventis-gray-900 py-1 px-3 rounded-full text-sm font-medium">
                  client@exemple.com
                </div>
                <Link href="/project" className="text-sm text-qventis-gray-600 hover:text-qventis-coral">
                  Déconnexion
                </Link>
              </div>
            </div>
            
            {/* Stats Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-qventis-gray-50 rounded-xl p-4">
                <div className="text-sm text-qventis-gray-600">Projets actifs</div>
                <div className="text-2xl font-bold text-qventis-gray-900 mt-1">2</div>
              </div>
              <div className="bg-qventis-gray-50 rounded-xl p-4">
                <div className="text-sm text-qventis-gray-600">Livrables à valider</div>
                <div className="text-2xl font-bold text-qventis-gray-900 mt-1">1</div>
              </div>
              <div className="bg-qventis-gray-50 rounded-xl p-4">
                <div className="text-sm text-qventis-gray-600">Progression globale</div>
                <div className="text-2xl font-bold text-qventis-gray-900 mt-1">78%</div>
              </div>
            </div>
          </div>
          
          {/* Projects List */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 border border-qventis-gray-200">
            <h2 className="text-xl font-bold text-qventis-gray-900 mb-6">Vos projets</h2>
            
            <div className="space-y-6">
              {demoProjects.map((project) => (
                <div key={project.id} className="border border-qventis-gray-200 rounded-xl overflow-hidden">
                  <div className="bg-qventis-gray-50 px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="bg-qventis-coral rounded-full w-10 h-10 flex items-center justify-center text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium text-qventis-gray-900">{project.name}</h3>
                        <div className="text-sm text-qventis-gray-600">Réf: {project.id}</div>
                      </div>
                    </div>
                    <div className="bg-qventis-coral bg-opacity-10 text-qventis-coral py-1 px-3 rounded-full text-sm font-medium">
                      {project.status}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-qventis-gray-600">Progression</span>
                        <span className="font-medium text-qventis-gray-900">{project.progress}%</span>
                      </div>
                      <div className="w-full bg-qventis-gray-200 rounded-full h-2">
                        <div 
                          className="bg-qventis-coral h-2 rounded-full" 
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-qventis-gray-600">Dernière mise à jour</span>
                        <div className="font-medium text-qventis-gray-900 mt-1">{project.lastUpdate}</div>
                      </div>
                      <div>
                        <span className="text-qventis-gray-600">Prochaine livraison</span>
                        <div className="font-medium text-qventis-gray-900 mt-1">{project.nextDelivery}</div>
                      </div>
                    </div>
                    
                    <div className="mt-6 flex justify-end">
                      <button className="bg-qventis-gray-100 hover:bg-qventis-gray-200 text-qventis-gray-800 py-2 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center">
                        <span>Accéder au détail</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Quick Actions */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-qventis-gray-200">
            <h2 className="text-xl font-bold text-qventis-gray-900 mb-6">Actions rapides</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-qventis-gray-50 hover:bg-qventis-gray-100 rounded-xl p-6 flex flex-col items-center justify-center text-center transition-colors duration-200 cursor-pointer">
                <div className="bg-qventis-coral bg-opacity-10 p-3 rounded-full mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-qventis-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-medium text-qventis-gray-900">Planifier un appel</h3>
                <p className="text-sm text-qventis-gray-600 mt-1">Réserver un créneau avec votre chef de projet</p>
              </div>
              
              <div className="bg-qventis-gray-50 hover:bg-qventis-gray-100 rounded-xl p-6 flex flex-col items-center justify-center text-center transition-colors duration-200 cursor-pointer">
                <div className="bg-qventis-coral bg-opacity-10 p-3 rounded-full mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-qventis-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="font-medium text-qventis-gray-900">Documents</h3>
                <p className="text-sm text-qventis-gray-600 mt-1">Accéder à vos factures et livrables</p>
              </div>
              
              <div className="bg-qventis-gray-50 hover:bg-qventis-gray-100 rounded-xl p-6 flex flex-col items-center justify-center text-center transition-colors duration-200 cursor-pointer">
                <div className="bg-qventis-coral bg-opacity-10 p-3 rounded-full mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-qventis-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-medium text-qventis-gray-900">Support</h3>
                <p className="text-sm text-qventis-gray-600 mt-1">Contactez notre équipe technique</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
