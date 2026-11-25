import React from 'react';
import { Link } from 'react-router-dom';
import { IoHelpCircleOutline, IoShieldCheckmarkOutline } from 'react-icons/io5';

const Footer = ({ name = 'Watch AD', link = '/help-center/earning/watch-ads', mt = 40, mb = 30 }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        marginTop: `${mt}px`,
        marginBottom: `${mb}px`,
        padding: '32px 20px 24px',
        borderTop: '1px solid #273449',
        color: '#98A5B8',
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
                padding: '8px 20px',
                borderRadius: '20px',
                background: 'rgba(139, 92, 246, 0.12)',
                border: '1px solid rgba(139, 92, 246, 0.3)',
                color: '#8B5CF6',
                fontWeight: 700,
                fontSize: '13px',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(139, 92, 246, 0.22)';
                e.currentTarget.style.borderColor = '#8B5CF6';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(139, 92, 246, 0.12)';
                e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.3)';
              }}
            >
              <IoHelpCircleOutline size={16} />
              <span>Need help with {name}? View Guide & Policy</span>
            </Link>
          </div>
        )}

        {/* Global Policy Links */}
        <div className="d-flex justify-content-center flex-wrap gap-4 mb-3">
          <Link to="/terms-and-conditions" style={{ color: '#98A5B8', transition: 'color 0.2s' }}>Terms of Service</Link>
          <Link to="/privacy-policy" style={{ color: '#98A5B8', transition: 'color 0.2s' }}>Privacy Policy</Link>
          <Link to="/customer-service" style={{ color: '#98A5B8', transition: 'color 0.2s' }}>Compliance & Support</Link>
          <Link to="/anti-fraud-policy" style={{ color: '#98A5B8', transition: 'color 0.2s' }}>Anti-Fraud Rules</Link>
        </div>

        <div className="d-flex align-items-center justify-content-center gap-2 mb-2">
          <IoShieldCheckmarkOutline size={15} color="#42D6A4" />
          <span style={{ fontSize: '12px', color: '#64748B' }}>
            Verified Server-Authoritative Rewards Engine
          </span>
        </div>

        <p className="m-0" style={{ fontSize: '12px', color: '#64748B' }}>
          &copy; {currentYear} VELOOP Rewards. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
