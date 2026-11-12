import React from 'react';
import { Link } from 'react-router-dom';
import { IoHelpCircleOutline, IoShieldCheckmarkOutline } from 'react-icons/io5';

const Footer = ({ name = 'Watch AD', link = '/help-center/earning/watch-ads', mt = 50, mb = 37 }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        marginTop: `${mt}px`,
        marginBottom: `${mb}px`,
        padding: '30px 20px 20px',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
        color: '#64748b',
        fontSize: '13px',
      }}
    >
      <div className="container text-center">
        {/* Help Center CTA */}
        {link && (
          <div className="mb-4">
            <Link
              to={link}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 18px',
                borderRadius: '20px',
                background: 'rgba(59, 130, 246, 0.1)',
                border: '1px solid rgba(59, 130, 246, 0.25)',
                color: '#60a5fa',
                fontWeight: 600,
                fontSize: '13px',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(59, 130, 246, 0.2)';
                e.currentTarget.style.borderColor = '#3b82f6';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(59, 130, 246, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.25)';
              }}
            >
              <IoHelpCircleOutline size={16} />
              <span>Need help with {name}? View Guide & Policy</span>
            </Link>
          </div>
        )}

        {/* Global Policy Links */}
        <div className="d-flex justify-content-center flex-wrap gap-4 mb-3">
          <Link to="/terms-and-conditions" className="text-secondary hover-white">Terms of Service</Link>
          <Link to="/privacy-policy" className="text-secondary hover-white">Privacy Policy</Link>
          <Link to="/customer-service" className="text-secondary hover-white">Compliance & Support</Link>
          <Link to="/anti-fraud-policy" className="text-secondary hover-white">Anti-Fraud Rules</Link>
        </div>

        <div className="d-flex align-items-center justify-content-center gap-2 mb-2">
          <IoShieldCheckmarkOutline size={14} color="#10b981" />
          <span style={{ fontSize: '12px', color: '#475569' }}>
            Verified Server-Authoritative Rewards Engine
          </span>
        </div>

        <p className="m-0" style={{ fontSize: '12px', color: '#475569' }}>
          &copy; {currentYear} VELOOP Rewards. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
