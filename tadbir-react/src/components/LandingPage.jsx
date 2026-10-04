import React from 'react';
import './LandingPage.css'; // We'll assume the CSS is imported here

const LandingPage = ({ onLogin }) => {
  return (
    <div id="landing-page" className="lnd">
      {/* NAV */}
      <nav className="lnd-nav">
        <div className="lnd-logo">
          <div className="lnd-logo-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3z" fill="url(#shield_grad_lnd)"/>
              <circle cx="12" cy="11" r="3.5" fill="#F59E0B"/>
              <path d="M12 9.2v3.6M10.2 11h3.6" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round"/>
              <path d="M7 16l3-3 2 2 5-5" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <defs>
                <linearGradient id="shield_grad_lnd" x1="4" y1="2" x2="20" y2="22" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#10B981"/>
                  <stop offset="1" stopColor="#047857"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div>
            <div className="lnd-logo-name">تدبير</div>
            <div className="lnd-logo-sub">دبّر ميزانيتك بذكاء</div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div className="lnd-lang-switch">
            <button className="lnd-lang-btn">🇲🇦 عربي</button>
            <button className="lnd-lang-btn">🇫🇷 FR</button>
          </div>
          <button className="lnd-cta-nav" onClick={onLogin}>🔑 تسجيل الدخول بـ Google</button>
        </div>
      </nav>

      {/* HERO */}
      <div className="lnd-hero">
        <div className="lnd-badge">✦ مجاني 100% • مزامنة سحابية</div>
        <h1 className="lnd-h1">دبّر فلوسك بذكاء<br/>وفبلاصة وحدة</h1>
        <p className="lnd-sub">تطبيق ذكي لتتبع ميزانيتك الشهرية — سجّل مصاريفك، تابع توفيرك، وخلّص من ديونك بشكل منظم</p>
        <button className="lnd-cta-hero" onClick={onLogin}>🚀 ابدأ مجاناً مع Google</button>
        <p className="lnd-cta-note">لا حاجة لبطاقة بنكية • مجاني للأبد</p>
      </div>

    </div>
  );
};

export default LandingPage;
