import React from 'react';
import LandingPage from './components/LandingPage';
import { useAppContext } from './context/AppContext';
import './App.css';

function App() {
  // On récupère les données globales depuis notre contexte !
  const { user, login, logout, language } = useAppContext();

  // Le sens du texte change automatiquement selon la langue
  const textDirection = language === 'ar' ? 'rtl' : 'ltr';

  return (
    <div className="app-container" dir={textDirection}>
      {/* Si l'utilisateur n'est pas connecté */}
      {!user ? (
        <LandingPage onLogin={login} />
      ) : (
        /* Si l'utilisateur est connecté */
        <div style={{ padding: '50px', textAlign: 'center' }}>
          <h1>Bienvenue sur le Dashboard !</h1>
          <p>Utilisateur : {user.name}</p>
          <p>Langue active : {language}</p>
          <br />
          <button onClick={logout} style={{ padding: '10px 20px', cursor: 'pointer' }}>
            Se déconnecter
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
