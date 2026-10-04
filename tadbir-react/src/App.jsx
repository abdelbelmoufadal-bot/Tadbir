import React from 'react';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import { useAppContext } from './context/AppContext';
import './App.css';

function App() {
  const { user, login, language } = useAppContext();

  // Le sens du texte change automatiquement selon la langue
  const textDirection = language === 'ar' ? 'rtl' : 'ltr';

  return (
    <div className="app-container" dir={textDirection}>
      {/* Si l'utilisateur n'est pas connecté */}
      {!user ? (
        <LandingPage onLogin={login} />
      ) : (
        /* Si l'utilisateur est connecté */
        <Dashboard />
      )}
    </div>
  );
}

export default App;
