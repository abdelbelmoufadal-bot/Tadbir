import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Plus tard, nous brancherons Firebase Auth ici
    console.log("Tentative de connexion...");
    setIsLoggedIn(true);
  };

  return (
    <div className="app-container" dir="rtl">
      {/* Si l'utilisateur n'est pas connecté, on affiche la Landing Page */}
      {!isLoggedIn ? (
        <LandingPage onLogin={handleLogin} />
      ) : (
        /* S'il est connecté, on affichera le Dashboard (à créer plus tard) */
        <div style={{ padding: '50px', textAlign: 'center' }}>
          <h1>Bienvenue sur le Dashboard !</h1>
          <p>Le contenu du tableau de bord sera ici.</p>
          <button onClick={() => setIsLoggedIn(false)}>Se déconnecter</button>
        </div>
      )}
    </div>
  );
}

export default App;
