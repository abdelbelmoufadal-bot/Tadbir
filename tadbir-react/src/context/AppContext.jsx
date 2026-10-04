import React, { createContext, useContext, useState } from 'react';

// 1. Création du contexte
const AppContext = createContext();

// 2. Le "Provider" est un composant qui englobe l'application
// et fournit les données à tous ses enfants.
export const AppProvider = ({ children }) => {
  // L'état global de notre application
  const [user, setUser] = useState(null); // null = non connecté
  const [language, setLanguage] = useState('ar'); // 'ar' par défaut
  const [budgetData, setBudgetData] = useState([]); // pour les futures dépenses

  // Fonctions pour modifier l'état
  const login = () => {
    // Plus tard, nous mettrons le code Firebase Auth ici
    setUser({ name: "Utilisateur Démo", email: "demo@example.com" });
  };

  const logout = () => {
    setUser(null);
  };

  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'ar' ? 'fr' : 'ar');
  };

  // Les données et fonctions qu'on rend disponibles partout
  const value = {
    user,
    language,
    budgetData,
    login,
    logout,
    toggleLanguage
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

// 3. Un "Hook" personnalisé pour utiliser facilement notre contexte
export const useAppContext = () => {
  return useContext(AppContext);
};
