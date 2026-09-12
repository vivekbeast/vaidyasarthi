import React from 'react';
import { ShieldCheck, Users, Sparkles, QrCode, ArrowDown } from 'lucide-react';
import { PlayStoreBadge } from './PlayStoreBadge';
import { LottieAnimation } from './LottieAnimation';

interface HeroProps {
  onOpenQR: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQR }) => {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        paddingTop: 'calc(var(--nav-height) + 50px)',
        paddingBottom: '80px',
        overflow: 'hidden',
      }}
    >
      {/* Background ambient lighting */}
      <div
        className="ambient-glow"
        style={{ top: '10%', left: '50%', transform: 'translateX(-50%)', opacity: 0.8 }}
      />
      <div
        className="ambient-glow"
        style={{ top: '30%', right: '5%', background: 'radial-gradient(circle, rgba(6, 182, 212, 0.12) 0%, transparent 70%)' }}
      />

      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '48px',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left Column: Conversion Copy */}
          <div style={{ maxWidth: '620px', zIndex: 2 }}>
            {/* Pill Tag */}
            <div className="section-tag" style={{ marginBottom: '20px' }}>
              <span className="pulse-indicator" />
              <span>Dedicated Medical Network</span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.4rem, 4.8vw, 3.8rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                marginBottom: '20px',
              }}
            >
              The professional community for{' '}
              <span className="text-gradient">doctors & medical students.</span>
            </h1>

            {/* Subheadline */}
            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                marginBottom: '32px',
              }}
            >
              Connect with peers, share clinical insights, engage in peer-reviewed
              discussions, and access verified clinical tools — all in one focused,
              ad-free space.
            </p>

            {/* CTA Group */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '28px',
              }}
            >
              <PlayStoreBadge size="lg" variant="emerald" />

              <a
                href="#community"
                className="btn btn-secondary"
                style={{ height: '56px' }}
              >
                <span>Explore the Community</span>
                <ArrowDown size={16} />
              </a>

              <button
                onClick={onOpenQR}
                className="btn btn-secondary hero-qr-btn"
                style={{ height: '56px', display: 'none' }}
                title="Scan QR on your phone"
              >
                <QrCode size={18} />
                <span>Scan QR</span>
              </button>
            </div>

            {/* Value / Trust Statement */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '18px',
                paddingTop: '16px',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: 'var(--text-secondary)',
                  fontSize: '0.88rem',
                }}
              >
                <ShieldCheck size={18} color="var(--accent-emerald)" />
                <span>Exclusively for verified medical professionals</span>
              </div>
              <span style={{ color: 'rgba(255,255,255,0.2)' }}>•</span>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: 'var(--text-secondary)',
                  fontSize: '0.88rem',
                }}
              >
                <Sparkles size={16} color="var(--accent-cyan)" />
                <span>No distractions</span>
              </div>
            </div>
          </div>

          {/* Right Column: Device Mockup Showcase */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 2,
            }}
          >
            {/* Ambient Background Behind Phone */}
            <div
              style={{
                position: 'absolute',
                width: '320px',
                height: '480px',
                background:
                  'radial-gradient(ellipse at center, rgba(0, 201, 120, 0.25) 0%, rgba(6, 182, 212, 0.1) 50%, transparent 70%)',
                filter: 'blur(50px)',
                borderRadius: '50%',
                zIndex: 0,
              }}
            />

            {/* Smartphone Container */}
            <div
              className="phone-mockup-wrapper"
              style={{
                position: 'relative',
                width: '310px',
                borderRadius: '44px',
                padding: '10px',
                background: 'linear-gradient(145deg, #2a384e 0%, #0d1522 100%)',
                boxShadow:
                  '0 30px 70px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.15), 0 0 40px rgba(0, 201, 120, 0.2)',
                zIndex: 1,
                transition: 'transform 0.4s ease',
              }}
            >
              {/* Phone Speaker & Camera Notch */}
              <div
                style={{
                  width: '90px',
                  height: '18px',
                  background: '#070b12',
                  borderRadius: '0 0 12px 12px',
                  position: 'absolute',
                  top: '10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  zIndex: 10,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '4px',
                    background: '#1f2937',
                    borderRadius: '2px',
                  }}
                />
              </div>

              {/* Screen Inner */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  borderRadius: '36px',
                  overflow: 'hidden',
                  background: '#0a0f17',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                <img
                  src="/assets/app-feed-mockup.png"
                  alt="VaidyaSarthi App Interface"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    borderRadius: '34px',
                  }}
                  onError={(e) => {
                    // Fallback to slide screenshot if cutout has any issue
                    (e.target as HTMLImageElement).src = '/assets/slide4-network.png';
                  }}
                />
              </div>

              {/* Floating Floating Pulse Badge */}
              <div
                style={{
                  position: 'absolute',
                  top: '-16px',
                  right: '-16px',
                  background: 'rgba(11, 18, 30, 0.92)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(0, 201, 120, 0.35)',
                  borderRadius: 'var(--radius-md)',
                  padding: '10px 14px',
                  boxShadow: '0 12px 28px rgba(0,0,0,0.5)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  zIndex: 20,
                }}
              >
                <div style={{ width: '28px', height: '28px' }}>
                  <LottieAnimation
                    animationPath="/assets/medical-pulse.json"
                    style={{ width: '28px', height: '28px' }}
                  />
                </div>
                <div>
                  <div style={{ fontSize: '0.72rem', color: '#94a3b8', textTransform: 'uppercase' }}>
                    Live Network
                  </div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#00c978' }}>
                    Verified Doctors
                  </div>
                </div>
              </div>

              {/* Floating Floating Onboarding Chip */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '24px',
                  left: '-24px',
                  background: 'rgba(11, 18, 30, 0.94)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: 'var(--radius-md)',
                  padding: '10px 16px',
                  boxShadow: '0 12px 28px rgba(0,0,0,0.6)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  zIndex: 20,
                }}
              >
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: 'rgba(0, 201, 120, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Users size={18} color="var(--accent-emerald)" />
                </div>
                <div>
                  <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>Built For</div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#ffffff' }}>
                    Doctors & Students
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
          .hero-qr-btn {
            display: inline-flex !important;
          }
        }
        .phone-mockup-wrapper:hover {
          transform: translateY(-6px) rotate(-0.5deg);
        }
      `}</style>
    </section>
  );
};
