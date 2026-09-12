import React from 'react';
import { PLAY_STORE_URL } from './PlayStoreBadge';

export const MobileStickyCTA: React.FC = () => {
  return (
    <aside
      aria-label="Mobile Download Bar"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 90,
        padding: '12px 16px',
        background: 'rgba(7, 11, 18, 0.94)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderTop: '1px solid rgba(0, 201, 120, 0.25)',
        boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.5)',
        display: 'none',
      }}
      className="mobile-sticky-bar"
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px',
          maxWidth: '480px',
          margin: '0 auto',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <img
            src="/assets/logo.png"
            alt="VaidyaSarthi"
            style={{ width: '28px', height: '28px', objectFit: 'contain' }}
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
          <div>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#ffffff', lineHeight: 1.1 }}>
              VaidyaSarthi
            </div>
            <div style={{ fontSize: '0.7rem', color: 'var(--accent-emerald)', fontWeight: 600 }}>
              Medical Community
            </div>
          </div>
        </div>

        <a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'linear-gradient(135deg, #00d284 0%, #00a866 100%)',
            color: '#04140b',
            padding: '10px 18px',
            borderRadius: 'var(--radius-full)',
            fontWeight: 700,
            fontSize: '0.88rem',
            boxShadow: '0 4px 14px rgba(0, 201, 120, 0.4)',
            whiteSpace: 'nowrap',
          }}
          id="mobile-sticky-download"
        >
          <span>📱 Download App</span>
        </a>
      </div>

      <style>{`
        @media (max-width: 820px) {
          .mobile-sticky-bar {
            display: block !important;
          }
          /* Add bottom padding to body so sticky bar does not cover footer */
          body {
            padding-bottom: 74px !important;
          }
        }
      `}</style>
    </aside>
  );
};
