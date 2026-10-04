import React from 'react';
import { useAppContext } from '../context/AppContext';
import KpiCard from './KpiCard';
import { calculateBudget } from '../utils/logic';

export default function Dashboard() {
  const { user, logout, monthData } = useAppContext();

  // On utilise désormais les VRAIES données venues de Firestore !
  const budget = calculateBudget(monthData, monthData.notes || []);
  const totalInc = budget.inc.act > 0 ? budget.inc.act : 1;

  return (
    <div style={{ padding: '20px', maxWidth: '900px', margin: '0 auto' }}>
      
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
          title="Tofir" icon="💰" amount={budget.sav.act} 
          color="var(--gold)" percentage={(budget.sav.act / totalInc) * 100} 
        />
        <KpiCard 
          title="Le Reste" icon="✅" amount={budget.rem} 
          color="var(--mint)" percentage={(budget.rem / totalInc) * 100} 
        />
      </div>
      
      {/* Petit message pour indiquer que l'on écoute Firestore */}
      <div style={{ marginTop: '30px', textAlign: 'center', color: 'var(--light)', fontSize: '12px' }}>
        🟢 Synchronisé avec le Cloud Firestore (Temps réel)
      </div>

    </div>
  );
}
