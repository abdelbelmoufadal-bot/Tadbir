import React from 'react';

export default function KpiCard({ title, icon, amount, color, percentage = 100 }) {
  // Limiter le pourcentage entre 0 et 100 pour la barre de progression
  const safePercentage = Math.min(Math.max(percentage, 0), 100);

  return (
    <div className="kpi-card" style={{ 
      padding: '15px', 
      backgroundColor: 'var(--card)', 
      borderRadius: '12px', 
      border: '1px solid var(--border)',
      boxShadow: 'var(--shadow)'
    }}>
      <div className="kpi-label" style={{ fontSize: '13px', color: 'var(--light)', fontWeight: '600' }}>
        {icon} {title}
      </div>
      <div className="kpi-val" style={{ color: color, fontSize: '22px', fontWeight: '800', margin: '10px 0', fontFamily: "'DM Mono', monospace" }}>
        {amount.toLocaleString('fr-MA')}
      </div>
      <div style={{ width: '100%', height: '5px', backgroundColor: 'var(--bg)', borderRadius: '3px', overflow: 'hidden' }}>
        <div style={{ backgroundColor: color, width: `${safePercentage}%`, height: '100%', transition: 'width 0.5s ease-in-out' }}></div>
      </div>
    </div>
  );
}
