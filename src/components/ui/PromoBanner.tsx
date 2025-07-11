'use client';

import { Container } from './Container';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

interface PromoBannerProps {
  message: string;
  ctaText: string;
  ctaAction: () => void;
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
}

export function PromoBanner({ 
  message = "Offre spéciale : -20% sur tous nos services jusqu'au 31 juillet", 
  ctaText = "En savoir plus", 
  ctaAction = () => {},
  isVisible = true,
  setIsVisible = () => {}
}: Partial<PromoBannerProps>) {
  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-qventis-coral text-white py-1"
        >
          <Container>
            <div className="flex items-center justify-between">
              <div className="flex-1 text-center text-sm sm:text-base">
                {message}
                <button 
                  onClick={ctaAction}
                  className="ml-2 underline font-medium hover:no-underline focus:outline-none"
                >
                  {ctaText}
                </button>
              </div>
              <button 
                onClick={() => setIsVisible(false)} 
                className="flex-shrink-0 ml-4 p-1 rounded-full hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 transition-colors"
                aria-label="Fermer"
              >
                <XMarkIcon className="h-4 w-4" />
              </button>
            </div>
          </Container>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
