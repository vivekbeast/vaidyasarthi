import React, { useEffect, useState } from 'react';
import { ArrowRight, Menu, QrCode, X } from 'lucide-react';
import { BrandLockup, CONTACT_EMAIL, INSTAGRAM_HANDLE, INSTAGRAM_URL, InstagramIcon, PLAY_STORE_URL, PlayButton } from './brand';

const NAV_LINKS = [
  { label: 'Inside the app', href: '#showcase' },
  { label: 'Pro', href: '#pro' },
  { label: 'Privacy', href: '#privacy' },
  { label: 'FAQ', href: '#faq' },
];

/* ═══════════════════ HEADER ═══════════════════ */
export const Header: React.FC<{ onGetApp: () => void }> = ({ onGetApp }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled || menuOpen ? 'scrolled' : ''}`}>
      <div className="wrap nav-inner">
        <a href="#top" aria-label="Postings: Doctors Network home">
          <BrandLockup />
        </a>

        <nav className="nav-links" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button onClick={onGetApp} className="btn btn-ghost btn-sm hide-mobile">
            <QrCode size={15} />
            Scan QR
          </button>
          <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm hide-mobile">
            Download app
            <ArrowRight size={14} />
          </a>
          <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm show-mobile">
            Get app
          </a>
          <button
            className="nav-toggle"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <>
          <div className="nav-backdrop" onClick={() => setMenuOpen(false)} />
          <nav className="nav-drawer" aria-label="Mobile">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Download on Google Play <ArrowRight size={15} />
            </a>
          </nav>
        </>
      )}
    </header>
  );
};

/* ═══════════════════ FOOTER ═══════════════════ */
export const Footer: React.FC<{ onLegal: (type: string) => void }> = ({ onLegal }) => (
  <footer className="footer">
    <div className="wrap">
      <div className="footer-grid">
        <div>
          <BrandLockup />
          <p className="footer-about">The verified network for Indian doctors and medical students.</p>
          <p className="footer-motto">Better Doctors. Brighter Tomorrows.</p>
        </div>

        <div className="footer-col">
          <h4>Product</h4>
          <a href="#showcase">Inside the app</a>
          <a href="#pro">Postings Pro</a>
          <a href="#privacy">Privacy</a>
          <a href="#verification">Verification</a>
        </div>

        <div className="footer-col">
          <h4>Legal</h4>
          <button onClick={() => onLegal('privacy')}>Privacy Policy</button>
          <button onClick={() => onLegal('terms')}>Terms of Service</button>
          <button onClick={() => onLegal('deletion')}>Account Deletion</button>
        </div>

        <div className="footer-col">
          <h4>Get in touch</h4>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
            <InstagramIcon /> @{INSTAGRAM_HANDLE}
          </a>
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Postings: Doctors Network. All rights reserved.</span>
        <span>For peer education. Not a substitute for clinical judgment.</span>
      </div>
    </div>
  </footer>
);

/* ═══════════════════ MOBILE STICKY INSTALL BAR ═══════════════════ */
export const MobileSticky: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`sticky-bar ${visible ? 'visible' : ''}`} aria-hidden={!visible}>
      <div className="sticky-inner">
        <div className="sticky-brand">
          <img src="/assets/icon-192.png" alt="" />
          <div>
            <strong>Postings</strong>
            <span>30 days of Pro on us</span>
          </div>
        </div>
        <a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-sm"
          tabIndex={visible ? 0 : -1}
        >
          Install
          <ArrowRight size={14} />
        </a>
      </div>
    </div>
  );
};

/* Shared modal shell: closes on backdrop click and Escape */
const Modal: React.FC<{ onClose: () => void; wide?: boolean; label: string; children: React.ReactNode }> = ({
  onClose,
  wide,
  label,
  children,
}) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className={`modal ${wide ? 'wide' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label={label}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <X size={20} />
        </button>
        {children}
      </div>
    </div>
  );
};

/* ═══════════════════ GET APP MODAL ═══════════════════ */
export const GetAppModal: React.FC<{ open: boolean; onClose: () => void }> = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <Modal onClose={onClose} label="Download Postings">
      <img src="/assets/icon-192.png" alt="" className="modal-icon" />
      <p className="modal-title">Get Postings on your phone</p>
      <p className="modal-sub">Scan with your phone camera</p>
      <div className="qr-frame">
        <img src="/assets/playstore-qr.png" alt="QR code linking to Postings on Google Play" />
      </div>
      <p className="modal-sub" style={{ marginBottom: 14 }}>
        or open the store directly
      </p>
      <PlayButton />
    </Modal>
  );
};

/* ═══════════════════ LEGAL MODAL ═══════════════════ */
const LEGAL: Record<string, { title: string; body: React.ReactNode }> = {
  privacy: {
    title: 'Privacy Policy',
    body: (
      <>
        <p>
          <strong>Effective:</strong> January 2026
        </p>
        <p>We collect registration details only to verify members.</p>
        <p>We never sell doctor or patient data.</p>
        <p>Patient information must be de-identified before sharing. Messages and scans shared in them are deleted after 24 hours.</p>
        <p>
          Contact: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </p>
      </>
    ),
  },
  terms: {
    title: 'Terms of Service',
    body: (
      <>
        <p>
          <strong>Last updated:</strong> January 2026
        </p>
        <p>Postings is for doctors registered with the NMC or a State Medical Council, and students at recognised medical colleges.</p>
        <p>Never post identifiable patient information, and get consent before sharing clinical material.</p>
        <p>Tools and discussions are for peer education and do not replace clinical judgment.</p>
      </>
    ),
  },
  deletion: {
    title: 'Account & Data Deletion',
    body: (
      <>
        <p>Delete your account and data any time from the app:</p>
        <p className="path">Profile → Settings → Delete Account</p>
        <p>
          Or email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> from your registered email.
        </p>
      </>
    ),
  },
};

export const LegalModal: React.FC<{ type: string | null; onClose: () => void }> = ({ type, onClose }) => {
  const c = type ? LEGAL[type] : null;
  if (!c) return null;
  return (
    <Modal onClose={onClose} wide label={c.title}>
      <h3 className="legal-title">{c.title}</h3>
      <div className="legal-body">{c.body}</div>
    </Modal>
  );
};
