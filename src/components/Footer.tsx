import React from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';
import { PLAY_STORE_URL } from './PlayStoreBadge';

interface FooterProps {
  onOpenLegal: (type: 'privacy' | 'terms' | 'deletion') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  return (
    <footer
      style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        background: '#05080e',
        padding: '64px 0 40px 0',
        color: 'var(--text-secondary)',
        fontSize: '0.88rem',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '40px',
            marginBottom: '48px',
          }}
        >
          {/* Brand Col */}
          <div style={{ maxWidth: '320px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '14px',
              }}
            >
              <img
                src="/assets/logo.png"
                alt="VaidyaSarthi"
                style={{ height: '32px', width: 'auto' }}
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: '1.25rem',
                  color: '#ffffff',
                }}
              >
                VaidyaSarthi
              </span>
            </div>
            <p style={{ lineHeight: 1.6, marginBottom: '20px', color: '#94a3b8' }}>
              The dedicated professional community and workspace for verified doctors & medical students.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <a
                href="https://instagram.com/vaidyasarthi.app"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#cbd5e1',
                  transition: 'background 0.2s',
                }}
                title="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="mailto:officialskillsociety@gmail.com"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#cbd5e1',
                }}
                title="Email Support"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4
              style={{
                fontSize: '0.85rem',
                fontWeight: 700,
                color: '#ffffff',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: '16px',
              }}
            >
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>
                <a href="#hero" style={{ color: '#94a3b8' }}>Home</a>
              </li>
              <li>
                <a href="#problem" style={{ color: '#94a3b8' }}>Problem & Solution</a>
              </li>
              <li>
                <a href="#community" style={{ color: '#94a3b8' }}>Medical Community</a>
              </li>
              <li>
                <a href="#verification" style={{ color: '#94a3b8' }}>Professional Identity</a>
              </li>
              <li>
                <a href="#tools" style={{ color: '#94a3b8' }}>Clinical Workspace</a>
              </li>
              <li>
                <a href="#faq" style={{ color: '#94a3b8' }}>FAQ</a>
              </li>
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div>
            <h4
              style={{
                fontSize: '0.85rem',
                fontWeight: 700,
                color: '#ffffff',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: '16px',
              }}
            >
              Legal & Trust
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>
                <button
                  onClick={() => onOpenLegal('privacy')}
                  style={{ color: '#94a3b8', textAlign: 'left', cursor: 'pointer' }}
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('terms')}
                  style={{ color: '#94a3b8', textAlign: 'left', cursor: 'pointer' }}
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('deletion')}
                  style={{ color: '#94a3b8', textAlign: 'left', cursor: 'pointer' }}
                >
                  Account Deletion
                </button>
              </li>
              <li>
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--accent-emerald)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                >
                  <span>Google Play Listing</span>
                  <ArrowUpRight size={14} />
                </a>
              </li>
            </ul>
          </div>

          {/* Developer & Contact */}
          <div>
            <h4
              style={{
                fontSize: '0.85rem',
                fontWeight: 700,
                color: '#ffffff',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: '16px',
              }}
            >
              Contact & Support
            </h4>
            <p style={{ color: '#94a3b8', lineHeight: 1.6, marginBottom: '6px', fontSize: '0.85rem' }}>
              Instagram:{' '}
              <a
                href="https://instagram.com/vaidyasarthi.app"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#38bdf8', fontWeight: 600 }}
              >
                vaidyasarthi.app
              </a>
            </p>
            <a
              href="mailto:officialskillsociety@gmail.com"
              style={{
                color: '#38bdf8',
                fontWeight: 600,
                display: 'inline-block',
                wordBreak: 'break-all',
              }}
            >
              officialskillsociety@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            paddingTop: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            fontSize: '0.8rem',
            color: '#64748b',
          }}
        >
          <div>
            © {new Date().getFullYear()} VaidyaSarthi. All rights reserved. Exclusively for medical professionals.
          </div>
          <div style={{ maxWidth: '520px', lineHeight: 1.4 }}>
            Disclaimer: VaidyaSarthi is a professional networking and reference platform. It does not provide medical diagnoses or replace independent clinical judgment.
          </div>
        </div>
      </div>
    </footer>
  );
};
