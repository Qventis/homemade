'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  EyeIcon, 
  EyeSlashIcon,
  ShieldCheckIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import { Button } from '@/components/ui/Button';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulation d'authentification - À remplacer par une vraie API
    setTimeout(() => {
      if (email === 'admin@qventis.com' && password === 'admin123') {
        localStorage.setItem('qventis_admin_token', 'mock-token-12345');
        router.push('/admin/dashboard');
      } else {
        setError('Identifiants invalides. Veuillez réessayer.');
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-qventis-gray-50 to-qventis-coral/5 flex items-center justify-center p-4 relative overflow-hidden">
      
      {/* Background animations */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 10, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 -left-20 w-80 h-80 bg-qventis-coral/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, -15, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 -right-20 w-96 h-96 bg-qventis-coral/5 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md relative z-10"
      >
        
        {/* Login Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-qventis-gray-200 p-8">
          
          {/* Header */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-16 h-16 bg-qventis-coral/20 rounded-2xl flex items-center justify-center mx-auto mb-4"
            >
              <ShieldCheckIcon className="w-8 h-8 text-qventis-coral" />
            </motion.div>
            
            <h1 className="text-2xl font-display font-bold text-qventis-gray-900 mb-2">
              Administration Qventis
            </h1>
            <p className="text-qventis-gray-600">
              Connectez-vous pour accéder au back office
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-qventis-gray-700 mb-2">
                Adresse email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 bg-qventis-gray-50 border border-qventis-gray-200 rounded-xl focus:ring-2 focus:ring-qventis-coral focus:border-transparent transition-all duration-300 text-qventis-gray-900"
                placeholder="admin@qventis.com"
              />
            </div>

            {/* Password Field */}
            <div className="relative">
              <label htmlFor="password" className="block text-sm font-medium text-qventis-gray-700 mb-2">
                Mot de passe
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 pr-12 bg-qventis-gray-50 border border-qventis-gray-200 rounded-xl focus:ring-2 focus:ring-qventis-coral focus:border-transparent transition-all duration-300 text-qventis-gray-900"
                  placeholder="Votre mot de passe"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-qventis-gray-500 hover:text-qventis-coral transition-colors"
                >
                  {showPassword ? (
                    <EyeSlashIcon className="w-5 h-5" />
                  ) : (
                    <EyeIcon className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm"
              >
                {error}
              </motion.div>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              variant="coral"
              size="lg"
              disabled={isLoading}
              className="w-full justify-center"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Connexion en cours...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  Se connecter
                  <ArrowRightIcon className="w-4 h-4" />
                </div>
              )}
            </Button>

          </form>

          {/* Demo Credentials */}
          <div className="mt-6 p-4 bg-qventis-coral/5 rounded-xl border border-qventis-coral/20">
            <h3 className="text-sm font-medium text-qventis-coral mb-2">
              Identifiants de démonstration
            </h3>
            <div className="text-xs text-qventis-gray-600 space-y-1">
              <div>Email: <code className="bg-qventis-gray-100 px-1 rounded">admin@qventis.com</code></div>
              <div>Mot de passe: <code className="bg-qventis-gray-100 px-1 rounded">admin123</code></div>
            </div>
          </div>

        </div>

        {/* Back to site */}
        <div className="text-center mt-6">
          <Link 
            href="/"
            className="text-qventis-gray-600 hover:text-qventis-coral transition-colors text-sm"
          >
            ← Retour au site
          </Link>
        </div>

      </motion.div>

    </div>
  );
}
