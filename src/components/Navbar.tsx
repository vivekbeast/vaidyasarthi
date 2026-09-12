import React, { useState, useEffect } from 'react';
import { Menu, X, QrCode, ArrowRight } from 'lucide-react';
import { PlayStoreBadge } from './PlayStoreBadge';

interface NavbarProps {
  onOpenQR: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQR }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#hero' },
    { label: 'Problem & Solution', href: '#problem' },
    { label: 'Community', href: '#community' },
    { label: 'Verification', href: '#verification' },
    { label: 'Clinical Tools', href: '#tools' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: 'var(--nav-height)',
        display: 'flex',
        alignItems: 'center',
        background: scrolled
          ? 'rgba(7, 11, 18, 0.85)'
          : 'rgba(7, 11, 18, 0.4)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: scrolled
          ? '1px solid rgba(255, 255, 255, 0.08)'
          : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        {/* Brand Logo */}
        <a
          href="#hero"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            textDecoration: 'none',
          }}
          id="nav-brand"
        >
          <img
            src="/assets/logo.png"
            alt="VaidyaSarthi Logo"
            style={{ height: '36px', width: 'auto', objectFit: 'contain' }}
            onError={(e) => {
              // fallback if logo is not loaded
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: '1.25rem',
                letterSpacing: '-0.02em',
                color: '#ffffff',
                lineHeight: 1.1,
              }}
            >
              VaidyaSarthi
            </span>
            <span
              style={{
                fontSize: '0.68rem',
                color: 'var(--accent-emerald)',
                fontWeight: 600,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}
            >
              Medical Community
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '28px',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontSize: '0.9rem',
                fontWeight: 500,
                color: 'var(--text-secondary)',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#ffffff')}
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = 'var(--text-secondary)')
              }
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action CTAs */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          {/* QR Code trigger (Desktop) */}
          <button
            onClick={onOpenQR}
            className="qr-trigger-btn"
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 14px',
              borderRadius: 'var(--radius-sm)',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: 'var(--text-secondary)',
              fontSize: '0.82rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            title="Scan QR Code to Download"
          >
            <QrCode size={16} />
            <span>Scan QR</span>
          </button>

          {/* Primary Download CTA */}
          <div className="desktop-cta">
            <PlayStoreBadge size="sm" />
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle-btn"
            style={{
              padding: '8px',
              borderRadius: 'var(--radius-sm)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: 'var(--nav-height)',
            left: 0,
            right: 0,
            background: 'rgba(7, 11, 18, 0.98)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: '1.05rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                padding: '8px 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.04)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <span>{link.label}</span>
              <ArrowRight size={16} color="var(--accent-emerald)" />
            </a>
          ))}
          <div style={{ marginTop: '12px' }}>
            <PlayStoreBadge size="lg" variant="emerald" />
          </div>
        </div>
      )}

      {/* Media Queries inline styling helper */}
      <style>{`
        @media (min-width: 900px) {
          .desktop-nav { display: flex !important; }
          .qr-trigger-btn { display: inline-flex !important; }
          .mobile-toggle-btn { display: none !important; }
        }
        @media (max-width: 899px) {
          .desktop-cta { display: none !important; }
        }
      `}</style>
    </header>
  );
};
