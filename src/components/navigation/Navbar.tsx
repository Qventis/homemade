'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PromoBanner } from "@/components/ui/PromoBanner";
import { motion, AnimatePresence } from "framer-motion";
import { 
  SparklesIcon,
  Bars3Icon,
  XMarkIcon,
  ChevronRightIcon
} from "@heroicons/react/24/outline";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPromoBannerVisible, setIsPromoBannerVisible] = useState(true);

  // Gérer le scroll pour l'effet UX
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Accueil", href: "/", section: "hero" },
    { name: "Blog", href: "/blog", section: "blog" },
    { name: "FAQ", href: "/faq", section: "faq" },
    { name: "Devis", href: "/devis", section: "" },
  ];

  const handleNavigation = (item: { name: string; href: string; section: string }) => {
    // Si c'est un lien externe (commence par /), utiliser la navigation Next.js
    if (item.href.startsWith('/')) {
      window.location.href = item.href;
    } else {
      // Sinon, faire du scroll vers la section
      const element = document.getElementById(item.section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else if (item.section === 'hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Bandeau promotionnel */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <PromoBanner 
          message="Offre spéciale : -20% sur tous nos services jusqu'au 31 juillet" 
          ctaText="En savoir plus" 
          ctaAction={() => scrollToSection('contact')}
          isVisible={isPromoBannerVisible}
          setIsVisible={setIsPromoBannerVisible}
        />
      </div>

      {/* Navbar fixe */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 bg-white backdrop-blur-sm border ${isPromoBannerVisible ? 'mt-8' : 'mt-0'} ${
          // OPTION 1: Minimaliste avec bordure coral subtile (RECOMMANDÉE)
          isScrolled 
            ? 'bg-white/95 backdrop-blur-sm' 
            : 'bg-transparent'
          
          // OPTION 2: Fond sombre élégant (décommentez pour tester)
          // isScrolled 
          //   ? 'bg-qventis-gray-900/90 backdrop-blur-xl shadow-2xl' 
          //   : 'bg-transparent'
          
          // OPTION 3: Gradient coral subtil (décommentez pour tester)
          // isScrolled 
          //   ? 'bg-gradient-to-r from-white/95 to-qventis-coral/5 backdrop-blur-md shadow-xl border-b border-qventis-coral/10' 
          //   : 'bg-transparent'
          
          // OPTION 4: Très minimal, juste une ombre (décommentez pour tester)
          // isScrolled 
          //   ? 'bg-white/70 shadow-md' 
          //   : 'bg-transparent'
          
          // OPTION 5: Fond cream chaud (décommentez pour tester)
          // isScrolled 
          //   ? 'bg-qventis-cream/90 backdrop-blur-sm shadow-lg border-b border-qventis-coral/15' 
          //   : 'bg-transparent'
        }`}
      >
        <Container>
          <div className="flex items-center justify-between h-14">
            
            {/* Logo Qventis */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => scrollToSection('hero')}
            >
              <div className="w-10 h-10 bg-qventis-coral rounded-xl flex items-center justify-center shadow-lg">
                <SparklesIcon className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-display font-bold text-qventis-gray-900">
                Qventis
              </span>
            </motion.div>

            {/* Menu desktop */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  onClick={() => handleNavigation(item)}
                  className="text-qventis-gray-700 hover:text-qventis-coral font-medium transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-qventis-coral transition-all duration-300 group-hover:w-full" />
                </motion.button>
              ))}
            </div>

            {/* CTA + Menu mobile */}
            <div className="flex items-center gap-4">
              
              {/* CTA Desktop */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="hidden md:block"
              >
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => scrollToSection('contact')}
                  className="hover:shadow-lg"
                >
                  Suivre un projet
                  <ChevronRightIcon className="w-4 h-4 ml-1" />
                </Button>
              </motion.div>

              {/* Bouton menu mobile */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden w-10 h-10 bg-qventis-gray-100 hover:bg-qventis-coral/10 rounded-xl flex items-center justify-center transition-colors"
              >
                {isOpen ? (
                  <XMarkIcon className="w-5 h-5 text-qventis-gray-700" />
                ) : (
                  <Bars3Icon className="w-5 h-5 text-qventis-gray-700" />
                )}
              </motion.button>
            </div>

          </div>
        </Container>
      </motion.nav>

      {/* Menu mobile overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu mobile */}
            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-full w-80 bg-white/95 backdrop-blur-xl shadow-2xl border-l border-qventis-gray-100 z-50 lg:hidden"
            >
              <div className="p-6 space-y-6">
                
                {/* Header mobile */}
                <div className="flex items-center justify-between pb-6 border-b border-qventis-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-qventis-coral rounded-lg flex items-center justify-center">
                      <SparklesIcon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xl font-display font-bold text-qventis-gray-900">
                      Qventis
                    </span>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-8 h-8 bg-qventis-gray-100 rounded-lg flex items-center justify-center"
                  >
                    <XMarkIcon className="w-4 h-4 text-qventis-gray-700" />
                  </button>
                </div>

                {/* Navigation mobile */}
                <div className="space-y-2">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      onClick={() => handleNavigation(item)}
                      className="w-full flex items-center justify-between p-4 text-left text-qventis-gray-700 hover:text-qventis-coral hover:bg-qventis-coral/5 rounded-xl transition-all group"
                    >
                      <span className="font-medium">{item.name}</span>
                      <ChevronRightIcon className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.button>
                  ))}
                </div>

                {/* CTA mobile */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  className="pt-6 border-t border-qventis-gray-100"
                >
                  <Button
                    variant="coral"
                    size="lg"
                    onClick={() => scrollToSection('contact')}
                    className="w-full justify-center shadow-lg"
                  >
                    Démarrer un projet
                    <ChevronRightIcon className="w-4 h-4 ml-2" />
                  </Button>
                </motion.div>

                {/* Contact info mobile */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  className="bg-qventis-gray-50 rounded-2xl p-4 space-y-2"
                >
                  <p className="text-sm font-semibold text-qventis-gray-900">
                    Besoin d'aide ?
                  </p>
                  <p className="text-sm text-qventis-gray-600">
                    contact@qventis.com
                  </p>
                  <p className="text-sm text-qventis-coral">
                    Réponse sous 24h garantie
                  </p>
                </motion.div>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </>
  );
}
