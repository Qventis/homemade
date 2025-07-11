'use client';

import { createContext, useContext, ReactNode } from 'react';
import { useFirebase } from '@/hooks/useFirebase';

// Création du contexte Firebase
const FirebaseContext = createContext<ReturnType<typeof useFirebase> | undefined>(undefined);

// Props pour le FirebaseProvider
interface FirebaseProviderProps {
  children: ReactNode;
}

// Provider qui rend les services Firebase disponibles dans l'application
export function FirebaseProvider({ children }: FirebaseProviderProps) {
  const firebase = useFirebase();

  return (
    <FirebaseContext.Provider value={firebase}>
      {children}
    </FirebaseContext.Provider>
  );
}

// Hook pour utiliser Firebase dans les composants
export function useFirebaseContext() {
  const context = useContext(FirebaseContext);
  if (context === undefined) {
    throw new Error('useFirebaseContext doit être utilisé à l\'intérieur d\'un FirebaseProvider');
  }
  return context;
}
