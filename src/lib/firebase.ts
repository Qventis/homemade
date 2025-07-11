// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAj_W2D2mox6jWbgPtRraZHBDD83gngiHI",
  authDomain: "qventis-3fa52.firebaseapp.com",
  projectId: "qventis-3fa52",
  storageBucket: "qventis-3fa52.firebasestorage.app",
  messagingSenderId: "658586374809",
  appId: "1:658586374809:web:e41b6343e217088f8a9e08",
  measurementId: "G-MZ4HJFERGN"
};

// Initialize Firebase
let firebaseApp;
let analytics;

// Vérifie si nous sommes côté client et si Firebase n'est pas déjà initialisé
if (typeof window !== "undefined" && !getApps().length) {
  firebaseApp = initializeApp(firebaseConfig);
  // Analytics fonctionne uniquement côté client
  analytics = getAnalytics(firebaseApp);
}

export { firebaseApp, analytics };
