import React from 'react';
import { useAppContext } from '../context/AppContext';
import KpiCard from './KpiCard';
import { calculateBudget } from '../utils/logic';

export default function Dashboard() {
  const { user, logout } = useAppContext();

  // Pour l'instant, on simule les données du mois (on ira les chercher sur Firestore plus tard)
  const mockMonthData = {
    income: [{ act: 10000 }],
    bills: [{ act: 2000 }],
    savings: [{ act: 1500 }],
    debts: [{ act: 0 }]
  };
  const mockMonthNotes = [
    { amount: 3500 } // Somme des dépenses quotidiennes
  ];

  // MAGIE : On utilise la fonction pure de votre ancien logic.js !
  const budget = calculateBudget(mockMonthData, mockMonthNotes);
  const totalInc = budget.inc.act > 0 ? budget.inc.act : 1; // Éviter la division par zéro

  return (
    <div style={{ padding: '20px', maxWidth: '900px', margin: '0 auto' }}>
      
      {/* HEADER DU DASHBOARD */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <div>
          <h2 style={{ margin: 0, fontWeight: '800', color: 'var(--dark)' }}>Tableau de bord</h2>
          <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: 'var(--light)' }}>
            Bienvenue, <strong>{user?.displayName || "Utilisateur"}</strong>
          </p>
        </div>
        <button 
          onClick={logout} 
          style={{ padding: '8px 16px', background: 'var(--mint-ll)', color: 'var(--mint)', border: '1px solid var(--mint)', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}
        >
          Déconnexion
        </button>
      </header>

      {/* GRILLE DES KPIS */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '15px' }}>
        <KpiCard 
          title="Revenus" icon="💵" amount={budget.inc.act} 
          color="var(--sage)" percentage={100} 
        />
        <KpiCard 
          title="Frais Fixes" icon="📄" amount={budget.bill.act} 
          color="var(--blue)" percentage={(budget.bill.act / totalInc) * 100} 
        />
        <KpiCard 
          title="Dépenses" icon="🛒" amount={budget.exp.act} 
          color="var(--peach)" percentage={(budget.exp.act / totalInc) * 100} 
        />
        <KpiCard 
          title="Tofir (Épargne)" icon="💰" amount={budget.sav.act} 
          color="var(--gold)" percentage={(budget.sav.act / totalInc) * 100} 
        />
        <KpiCard 
          title="Le Reste" icon="✅" amount={budget.rem} 
          color="var(--mint)" percentage={(budget.rem / totalInc) * 100} 
        />
      </div>

    </div>
  );
}
