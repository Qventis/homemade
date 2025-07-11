import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/sections/Footer';

export const metadata: Metadata = {
  title: 'Accès Dossier Project | Qventis',
  description: 'Accédez à votre espace client pour suivre l\'avancement de votre projet Qventis.',
};

export default function ProjectLoginPage() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-br from-qventis-white to-qventis-gray-100">
      
      <section className="flex-grow flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-qventis-gray-200">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="flex justify-center mb-6">
                <div className="relative w-20 h-20">
                  <Image
                    src="/logo.svg"
                    alt="Qventis Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
              <h1 className="text-2xl font-bold text-qventis-gray-900">Accès à votre projet</h1>
              <p className="mt-2 text-qventis-gray-600">
                Entrez vos identifiants pour accéder à votre dossier
              </p>
            </div>
            
            {/* Form */}
            <form className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-qventis-gray-700 mb-1">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-qventis-gray-300 rounded-lg focus:ring-qventis-coral focus:border-qventis-coral transition duration-200"
                  placeholder="votre@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="projectNumber" className="block text-sm font-medium text-qventis-gray-700 mb-1">
                  Numéro de dossier
                </label>
                <input
                  id="projectNumber"
                  name="projectNumber"
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-qventis-gray-300 rounded-lg focus:ring-qventis-coral focus:border-qventis-coral transition duration-200"
                  placeholder="QVT-00000"
                />
              </div>
              
              <div>
                <Link href="/project/dashboard" className="block w-full">
                  <button
                    type="button"
                    className="w-full bg-qventis-coral hover:bg-qventis-coral-dark text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center"
                  >
                    <span>Accéder à mon projet</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </Link>
              </div>
            </form>
            
            {/* Help section */}
            <div className="mt-8 pt-6 border-t border-qventis-gray-200 text-center">
              <p className="text-sm text-qventis-gray-600">
                Vous n'avez pas votre numéro de dossier ?{' '}
                <Link href="/contact" className="text-qventis-coral hover:underline font-medium">
                  Contactez-nous
                </Link>
              </p>
            </div>
          </div>
          
          {/* Security badge */}
          <div className="mt-6 flex items-center justify-center text-sm text-qventis-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Connexion sécurisée</span>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
