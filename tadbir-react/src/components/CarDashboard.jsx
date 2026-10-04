import React, { useState, useMemo } from 'react';
import { useAppContext } from '../context/AppContext';
import KpiCard from './KpiCard';

export default function CarDashboard() {
  const { allData } = useAppContext();
  
  // Le filtre (par défaut 'all' = tous les mois)
  const [filterMonth, setFilterMonth] = useState('all');

  // Récupérer toutes les clés de mois disponibles (ex: ['2026-10', '2026-09'])
  const availableMonths = Object.keys(allData).sort().reverse();

  // useMemo permet de ne recalculer les totaux que si allData ou le filtre change
  const { totalRevenue, totalTrips } = useMemo(() => {
    let revenue = 0;
    let trips = 0;

    // Si le filtre est 'all', on boucle sur tous les mois, sinon juste sur le mois choisi
    const monthsToProcess = filterMonth === 'all' ? availableMonths : [filterMonth];

    monthsToProcess.forEach(mk => {
      const driveEntries = allData[mk]?.driveEntries || [];
      driveEntries.forEach(entry => {
        revenue += Number(entry.total || 0);
        trips += Number(entry.trips || 0);
      });
    });

    return { totalRevenue: revenue, totalTrips: trips };
  }, [allData, filterMonth, availableMonths]);

  return (
    <div style={{ 
      marginTop: '40px', 
      padding: '25px', 
      backgroundColor: 'var(--card)', 
      borderRadius: '16px',
      border: '1px solid var(--border)',
      boxShadow: 'var(--shadow)'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '10px' }}>
        <div>
          <h3 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--dark)' }}>
            🚗 Gestion Voiture & InDrive
          </h3>
          <p style={{ margin: '5px 0 0 0', fontSize: '12px', color: 'var(--light)' }}>
            Filtrez pour voir vos gains totaux ou mensuels
          </p>
        </div>
        
        {/* LE FILTRE */}
        <select 
          value={filterMonth} 
          onChange={(e) => setFilterMonth(e.target.value)}
          style={{ 
            padding: '8px 12px', 
            borderRadius: '8px', 
            border: '2px solid var(--border)',
            fontFamily: "'Tajawal', sans-serif",
            fontWeight: '600',
            cursor: 'pointer',
            backgroundColor: 'var(--bg)'
          }}
        >
          <option value="all">🌍 Tous les mois (Global)</option>
          {availableMonths.map(mk => (
            <option key={mk} value={mk}>📅 Mois : {mk}</option>
          ))}
        </select>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '15px' }}>
        <KpiCard title="Revenus InDrive" icon="🚕" amount={totalRevenue} color="var(--mint)" percentage={100} />
        <KpiCard title="Total Trajets" icon="🛣️" amount={totalTrips} color="var(--blue)" percentage={100} />
      </div>
    </div>
  );
}
