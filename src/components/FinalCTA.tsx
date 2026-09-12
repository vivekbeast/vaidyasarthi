import React from 'react';
import { PlayStoreBadge } from './PlayStoreBadge';
import { QrCode } from 'lucide-react';
import { LottieAnimation } from './LottieAnimation';

interface FinalCTAProps {
  onOpenQR: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenQR }) => {
  return (
    <section id="cta-download" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background glow */}
      <div
        className="ambient-glow"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          opacity: 0.7,
        }}
      />

      <div className="container">
        <div
          className="card"
          style={{
            position: 'relative',
            zIndex: 2,
            padding: 'clamp(40px, 6vw, 72px)',
            borderRadius: 'var(--radius-xl)',
            background: 'linear-gradient(145deg, rgba(16, 28, 48, 0.95) 0%, rgba(7, 12, 20, 0.98) 100%)',
            border: '1px solid rgba(0, 201, 120, 0.3)',
            boxShadow: '0 30px 80px rgba(0, 0, 0, 0.7), 0 0 50px rgba(0, 201, 120, 0.15)',
            textAlign: 'center',
          }}
        >
          {/* Subtle heartbeat badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '6px 16px',
              borderRadius: 'var(--radius-full)',
              background: 'rgba(0, 201, 120, 0.1)',
              border: '1px solid rgba(0, 201, 120, 0.25)',
              marginBottom: '24px',
            }}
          >
            <div style={{ width: '22px', height: '22px' }}>
              <LottieAnimation
                animationPath="/assets/medical-pulse.json"
                style={{ width: '22px', height: '22px' }}
              />
            </div>
            <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#00c978', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Available Now on Android
            </span>
          </div>

          {/* Main Title */}
          <h2
            style={{
              fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: '16px',
              letterSpacing: '-0.03em',
            }}
          >
            A professional community <br className="hidden-mobile" />
            <span className="text-gradient">built for medicine.</span>
          </h2>

          <p
            style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
              fontWeight: 500,
              color: '#e2e8f0',
              marginBottom: '10px',
              letterSpacing: '-0.01em',
            }}
          >
            Connect. Discuss. Learn. Grow.
          </p>

          <p
            style={{
              fontSize: '0.95rem',
              color: 'var(--text-secondary)',
              maxWidth: '560px',
              margin: '0 auto 36px auto',
              lineHeight: 1.6,
            }}
          >
            Download VaidyaSarthi today and join hundreds of verified doctors and medical students
            elevating their professional medical journey.
          </p>

          {/* Action Buttons */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              marginBottom: '28px',
            }}
          >
            <PlayStoreBadge size="lg" variant="emerald" />

            <button
              onClick={onOpenQR}
              className="btn btn-secondary"
              style={{ height: '56px' }}
            >
              <QrCode size={18} />
              <span>Scan QR Code</span>
            </button>

            <a
              href="https://instagram.com/vaidyasarthi.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ height: '56px' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e1306c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <span>Follow on Instagram</span>
            </a>
          </div>

          <div style={{ fontSize: '0.82rem', color: '#64748b' }}>
            Free to join for verified healthcare professionals and students • Requires Android 7.0+
          </div>
        </div>
      </div>
    </section>
  );
};
