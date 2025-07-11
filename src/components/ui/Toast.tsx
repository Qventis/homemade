'use client';

import { motion, AnimatePresence } from "framer-motion";
import { 
  CheckCircleIcon, 
  XCircleIcon, 
  XMarkIcon,
  InformationCircleIcon 
} from "@heroicons/react/24/outline";
import { useEffect } from "react";

export interface ToastProps {
  isVisible: boolean;
  type: 'success' | 'error' | 'info';
  title: string;
  message?: string;
  duration?: number;
  onClose: () => void;
}

export function Toast({ 
  isVisible, 
  type, 
  title, 
  message, 
  duration = 5000, 
  onClose 
}: ToastProps) {
  
  useEffect(() => {
    if (isVisible && duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  const icons = {
    success: CheckCircleIcon,
    error: XCircleIcon,
    info: InformationCircleIcon
  };

  // Couleurs adaptées au design Qventis
  const colors = {
    success: {
      bg: 'bg-qventis-white-warm',
      border: 'border-qventis-coral/20',
      icon: 'text-qventis-coral',
      title: 'text-qventis-gray-900',
      message: 'text-qventis-gray-700',
      accent: 'bg-qventis-coral/10'
    },
    error: {
      bg: 'bg-qventis-white-warm',
      border: 'border-red-200', 
      icon: 'text-red-500',
      title: 'text-qventis-gray-900',
      message: 'text-qventis-gray-700',
      accent: 'bg-red-50'
    },
    info: {
      bg: 'bg-qventis-white-warm',
      border: 'border-qventis-gray-200',
      icon: 'text-qventis-gray-600', 
      title: 'text-qventis-gray-900',
      message: 'text-qventis-gray-700',
      accent: 'bg-qventis-gray-50'
    }
  };

  const IconComponent = icons[type];
  const colorScheme = colors[type];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -100, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -100, scale: 0.95 }}
          transition={{ 
            type: "spring", 
            stiffness: 500, 
            damping: 30,
            duration: 0.3
          }}
          className="fixed top-4 right-4 z-50 max-w-md w-full"
        >
          <div className={`${colorScheme.bg} ${colorScheme.border} border rounded-2xl shadow-2xl p-5 backdrop-blur-sm`}>
            <div className="flex items-start gap-4">
              
              <div className={`w-10 h-10 ${colorScheme.accent} rounded-xl flex items-center justify-center flex-shrink-0`}>
                <IconComponent className={`w-6 h-6 ${colorScheme.icon}`} />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className={`font-semibold ${colorScheme.title} text-sm mb-1`}>
                  {title}
                </div>
                {message && (
                  <div className={`${colorScheme.message} text-sm leading-relaxed`}>
                    {message}
                  </div>
                )}
              </div>
              
              <button
                onClick={onClose}
                className="flex-shrink-0 p-1.5 hover:bg-qventis-gray-100 rounded-lg transition-colors duration-200"
              >
                <XMarkIcon className="w-4 h-4 text-qventis-gray-500 hover:text-qventis-gray-700" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
