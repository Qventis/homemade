'use client';

import { useEffect, useState } from 'react';
import { firebaseApp, analytics } from '@/lib/firebase';
import { getAuth, onAuthStateChanged, type User } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Hook personnalisé pour utiliser Firebase dans les composants
export function useFirebase() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  
  // Services Firebase
  const auth = typeof window !== 'undefined' ? getAuth(firebaseApp) : null;
  const db = typeof window !== 'undefined' ? getFirestore(firebaseApp) : null;

  useEffect(() => {
    if (!auth) return;
    
    // Observer pour les changements d'état d'authentification
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      setUser(authUser);
      setLoading(false);
    });

    // Cleanup
    return () => unsubscribe();
  }, [auth]);

  // Expose les services Firebase et l'état d'authentification
  return {
    app: firebaseApp,
    auth,
    db,
    analytics,
    user,
    loading
  };
}

export default useFirebase;
