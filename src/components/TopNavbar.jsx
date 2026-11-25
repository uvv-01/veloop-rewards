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
        background: 'rgba(8, 11, 20, 0.88)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid #273449',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        padding: '12px 16px',
      }}
    >
      <div className="container px-0 d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-2 gap-sm-3">
          <button
            onClick={() => navigate(navigation)}
            aria-label="Go back to dashboard"
            style={{
              background: 'rgba(22, 31, 48, 0.85)',
              border: '1px solid #273449',
              borderRadius: '10px',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#F4F6FC',
              transition: 'all 0.2s ease',
              cursor: 'pointer',
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#161F30';
              e.currentTarget.style.borderColor = '#8B5CF6';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(22, 31, 48, 0.85)';
              e.currentTarget.style.borderColor = '#273449';
            }}
          >
            <IoArrowBack size={16} />
          </button>
          <div>
            <h1
              style={{
                fontSize: '16px',
                fontWeight: 800,
                color: '#F4F6FC',
                margin: 0,
                fontFamily: "'Outfit', sans-serif",
                letterSpacing: '-0.3px',
                lineHeight: 1.2,
              }}
            >
              {title}
            </h1>
            <span style={{ fontSize: '11px', color: '#98A5B8', fontWeight: 600 }}>
              VELoop Rewards Network
            </span>
          </div>
        </div>

        {/* Live Balance Badge */}
        <div
          style={{
            background: 'rgba(245, 196, 81, 0.12)',
            border: '1px solid rgba(245, 196, 81, 0.35)',
            borderRadius: '20px',
            padding: '5px 12px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            boxShadow: '0 4px 12px rgba(245, 196, 81, 0.1)',
            flexShrink: 0,
          }}
        >
          <IoSparkles size={14} color="#F5C451" />
          <span style={{ fontSize: '12px', fontWeight: 800, color: '#F5C451', fontFamily: "'Outfit', sans-serif" }}>
            {user?.coins ?? 480} VEs
          </span>
        </div>
      </div>
    </header>
  );
};

export default TopNavbar;
