import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoArrowBack, IoSparkles } from 'react-icons/io5';
import { useAuth } from '../context/AuthContext';

const TopNavbar = ({ id = 13, navigation = '/Home', title = 'Watch Ads & Earn' }) => {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <header
      style={{
        background: 'rgba(11, 14, 30, 0.85)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        padding: '14px 20px',
      }}
    >
      <div className="container d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-3">
          <button
            onClick={() => navigate(navigation)}
            aria-label="Go back to dashboard"
            style={{
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '10px',
              width: '38px',
              height: '38px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)')}
          >
            <IoArrowBack size={18} />
          </button>
          <div>
            <h1
              style={{
                fontSize: '18px',
                fontWeight: 700,
                color: '#ffffff',
                margin: 0,
                fontFamily: "'Outfit', sans-serif",
                letterSpacing: '0.3px',
              }}
            >
              {title}
            </h1>
            <span style={{ fontSize: '12px', color: '#64748b' }}>VELoop Rewards Network</span>
          </div>
        </div>

        {/* Live Balance Badge */}
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.15), rgba(217, 119, 6, 0.08))',
            border: '1px solid rgba(245, 158, 11, 0.3)',
            borderRadius: '20px',
            padding: '6px 14px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <IoSparkles size={14} color="#f59e0b" />
          <span style={{ fontSize: '13px', fontWeight: 700, color: '#f59e0b', fontFamily: "'Outfit', sans-serif" }}>
            {user?.coins ?? 0} VEs
          </span>
        </div>
      </div>
    </header>
  );
};

export default TopNavbar;
