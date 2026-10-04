import React, { createContext, useContext, useState, useEffect } from 'react';
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import { doc, onSnapshot, setDoc } from 'firebase/firestore';
import { auth, googleProvider, db } from '../config/firebase';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(true);
  const [language, setLanguage] = useState('ar');
  
  // Données du mois courant
  const [monthData, setMonthData] = useState({
    income: [], bills: [], expenses: [], savings: [], debts: [], notes: []
  });
  // Toutes les données (pour les statistiques globales et filtres)
  const [allData, setAllData] = useState({});

  // Écoute de l'utilisateur
  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoadingAuth(false);
    });
    return () => unsubscribeAuth();
  }, []);

  // Écoute des données Firestore quand l'utilisateur est connecté
  useEffect(() => {
    let unsubscribeData;
    
    if (user) {
      // On écoute le document de cet utilisateur spécifique en temps réel
      const userRef = doc(db, 'users', user.uid);
      
      unsubscribeData = onSnapshot(userRef, (docSnap) => {
        if (docSnap.exists()) {
          const data = docSnap.data();
          // On suppose que l'architecture Firestore stockera le mois courant dans allData['2026-10']
          // Pour l'instant, on prend la structure de base.
          const currentMonthKey = new Date().toISOString().substring(0, 7); // ex: "2026-10"
          
          if (data.allData) {
            setAllData(data.allData);
            if (data.allData[currentMonthKey]) {
              setMonthData(data.allData[currentMonthKey]);
            }
          }
        } else {
          // Si c'est un nouvel utilisateur, on lui crée un profil vide dans Firestore
          setDoc(userRef, {
            allData: {
              [new Date().toISOString().substring(0, 7)]: {
                income: [], bills: [], expenses: [], savings: [], debts: [], notes: []
              }
            }
          });
        }
      });
    } else {
      setMonthData({ income: [], bills: [], expenses: [], savings: [], debts: [], notes: [] });
    }

    return () => {
      if (unsubscribeData) unsubscribeData();
    };
  }, [user]);

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

  const value = {
    user,
    language,
    monthData,
    allData,
    login,
    logout
  };

  return (
    <AppContext.Provider value={value}>
      {!loadingAuth && children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
