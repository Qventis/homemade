'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  HomeIcon,
  DocumentTextIcon,
  MagnifyingGlassIcon,
  CalendarDaysIcon,
  FolderOpenIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
  BellIcon,
  UserCircleIcon
} from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Dashboard', href: '/admin/dashboard', icon: HomeIcon },
  { name: 'Gestion Blog', href: '/admin/blog', icon: DocumentTextIcon },
  { name: 'SEO Manager', href: '/admin/seo', icon: MagnifyingGlassIcon },
  { name: 'Rendez-vous', href: '/admin/appointments', icon: CalendarDaysIcon },
  { name: 'Projets', href: '/admin/projects', icon: FolderOpenIcon },
  { name: 'Analytics', href: '/admin/analytics', icon: ChartBarIcon },
  { name: 'Paramètres', href: '/admin/settings', icon: Cog6ToothIcon },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Skip auth check for login page
    if (pathname === '/admin/login') {
      setIsLoading(false);
      return;
    }

    // Check authentication
    const token = localStorage.getItem('qventis_admin_token');
    if (token) {
      setIsAuthenticated(true);
    } else {
      router.push('/admin/login');
    }
    setIsLoading(false);
  }, [pathname, router]);

  const handleLogout = () => {
    localStorage.removeItem('qventis_admin_token');
    router.push('/admin/login');
  };

  // Show login page without layout
  if (pathname === '/admin/login') {
    return children;
  }

  // Show loading
  if (isLoading) {
    return (
      <div className="min-h-screen bg-qventis-gray-50 flex items-center justify-center">
        <div className="flex items-center gap-3 text-qventis-coral">
          <div className="w-6 h-6 border-2 border-qventis-coral/30 border-t-qventis-coral rounded-full animate-spin" />
          <span className="text-lg font-medium">Chargement...</span>
        </div>
      </div>
    );
  }

  // Redirect if not authenticated
  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-qventis-gray-50 flex">
      
      {/* Sidebar */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        className={`${
          isSidebarOpen ? 'w-64' : 'w-16'
        } bg-white shadow-lg border-r border-qventis-gray-200 transition-all duration-300 flex flex-col`}
      >
        
        {/* Logo */}
        <div className="p-6 border-b border-qventis-gray-200">
          <Link href="/admin/dashboard" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-qventis-coral rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">Q</span>
            </div>
            {isSidebarOpen && (
              <div>
                <h1 className="text-xl font-display font-bold text-qventis-gray-900">
                  Qventis
                </h1>
                <p className="text-xs text-qventis-gray-500">Administration</p>
              </div>
            )}
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-xl transition-all duration-300 ${
                  isActive
                    ? 'bg-qventis-coral text-white shadow-lg'
                    : 'text-qventis-gray-700 hover:bg-qventis-coral/10 hover:text-qventis-coral'
                }`}
              >
                <item.icon className="w-5 h-5 flex-shrink-0" />
                {isSidebarOpen && (
                  <span className="font-medium">{item.name}</span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* User Menu */}
        <div className="p-4 border-t border-qventis-gray-200">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-3 py-2 text-qventis-gray-700 hover:bg-red-50 hover:text-red-600 rounded-xl transition-all duration-300"
          >
            <ArrowRightOnRectangleIcon className="w-5 h-5 flex-shrink-0" />
            {isSidebarOpen && <span className="font-medium">Déconnexion</span>}
          </button>
        </div>

      </motion.aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        
        {/* Top Bar */}
        <header className="bg-white shadow-sm border-b border-qventis-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            
            {/* Sidebar Toggle */}
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 text-qventis-gray-500 hover:text-qventis-coral hover:bg-qventis-coral/10 rounded-lg transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              
              {/* Notifications */}
              <button className="relative p-2 text-qventis-gray-500 hover:text-qventis-coral hover:bg-qventis-coral/10 rounded-lg transition-all duration-300">
                <BellIcon className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-qventis-coral rounded-full"></span>
              </button>

              {/* User Profile */}
              <div className="flex items-center gap-3 px-3 py-2 bg-qventis-gray-50 rounded-xl">
                <div className="w-8 h-8 bg-qventis-coral/20 rounded-full flex items-center justify-center">
                  <UserCircleIcon className="w-5 h-5 text-qventis-coral" />
                </div>
                <div className="text-sm">
                  <div className="font-medium text-qventis-gray-900">Admin</div>
                  <div className="text-qventis-gray-500">Administrateur</div>
                </div>
              </div>

            </div>

          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6">
          {children}
        </main>

      </div>

    </div>
  );
}
