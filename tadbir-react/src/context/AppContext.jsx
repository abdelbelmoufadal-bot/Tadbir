import React, { createContext, useContext, useState, useEffect } from 'react';
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth, googleProvider } from '../config/firebase';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(true); // Permet d'attendre la vérification Firebase
  const [language, setLanguage] = useState('ar');
  const [budgetData, setBudgetData] = useState([]);

  // Écouteur d'état Firebase (se lance au démarrage de l'app)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Sera null si non connecté, ou contiendra les infos Google si connecté
      setLoadingAuth(false);
    });
    
    // Nettoyage de l'écouteur
    return () => unsubscribe();
  }, []);

  const login = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Erreur de connexion Google:", error);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Erreur de déconnexion:", error);
    }
  };

  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'ar' ? 'fr' : 'ar');
  };

  const value = {
    user,
    language,
    budgetData,
    login,
    logout,
    toggleLanguage
  };

  // On n'affiche pas l'application tant que Firebase n'a pas fini de vérifier l'état de connexion
  return (
    <AppContext.Provider value={value}>
      {!loadingAuth && children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
