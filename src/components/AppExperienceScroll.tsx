import React, { useState } from 'react';
import { Users, FileText, Stethoscope, Sparkles } from 'lucide-react';
import { PlayStoreBadge } from './PlayStoreBadge';

export const AppExperienceScroll: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const screens = [
    {
      id: 'community',
      title: 'Community Feed',
      icon: <Users size={18} />,
      badge: 'Peer Discussions',
      headline: 'Authentic peer-to-peer medical conversations',
      desc: 'Follow specialists, comment on clinical updates, and share observations in a moderated, safe environment.',
      image: '/assets/slide4-network.png',
    },
    {
      id: 'onboarding',
      title: 'Verified Onboarding',
      icon: <Sparkles size={18} />,
      badge: 'Identity Flow',
      headline: '4-step friction-free verification',
      desc: 'Join with simple steps and verify your credential or student ID to protect community integrity.',
      image: '/assets/slide2-onboarding.png',
    },
    {
      id: 'tools',
      title: 'Practice & Tools',
      icon: <Stethoscope size={18} />,
      badge: 'Clinical Utilities',
      headline: 'Rapid bedside calculations and tracking',
      desc: 'Instantly access GFR, Gestational Age, Pediatric Dosage, and patient logs whenever you need them.',
      image: '/assets/slide3-features.png',
    },
    {
      id: 'network',
      title: 'Medical Network',
      icon: <FileText size={18} />,
      badge: 'Professional Presence',
      headline: 'More than a username — your clinical credential',
      desc: 'Showcase your medical experience, qualifications, and specialties with a trusted verified profile.',
      image: '/assets/slide1-hero.png',
    },
  ];

  const current = screens[activeTab];

  return (
    <section className="section" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span>Inside VaidyaSarthi</span>
          </div>
          <h2 className="section-title">
            The app experience, <span className="text-gradient">before you download.</span>
          </h2>
          <p className="section-subtitle">
            Take a quick look at the interface designed from the ground up for healthcare professionals.
          </p>
        </div>

        {/* Tab Switcher */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '10px',
            marginBottom: '40px',
          }}
        >
          {screens.map((s, idx) => {
            const isSelected = activeTab === idx;
            return (
              <button
                key={s.id}
                onClick={() => setActiveTab(idx)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 20px',
                  borderRadius: 'var(--radius-full)',
                  background: isSelected ? 'var(--accent-emerald)' : 'rgba(255, 255, 255, 0.05)',
                  color: isSelected ? '#04140b' : 'var(--text-secondary)',
                  fontWeight: 600,
                  fontSize: '0.88rem',
                  border: isSelected
                    ? '1px solid #00c978'
                    : '1px solid rgba(255, 255, 255, 0.08)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {s.icon}
                <span>{s.title}</span>
              </button>
            );
          })}
        </div>

        {/* Display Showcase Box */}
        <div
          className="card"
          style={{
            padding: '36px',
            background: 'linear-gradient(180deg, rgba(16, 26, 42, 0.9) 0%, rgba(9, 14, 23, 0.95) 100%)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '36px',
              alignItems: 'center',
            }}
            className="showcase-grid"
          >
            {/* Info Side */}
            <div>
              <div
                style={{
                  display: 'inline-block',
                  padding: '4px 12px',
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(0, 201, 120, 0.12)',
                  color: '#00c978',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  marginBottom: '16px',
                }}
              >
                {current.badge}
              </div>

              <h3
                style={{
                  fontSize: 'clamp(1.5rem, 2.5vw, 2.1rem)',
                  fontWeight: 700,
                  marginBottom: '16px',
                  color: '#ffffff',
                }}
              >
                {current.headline}
              </h3>

              <p
                style={{
                  fontSize: '1rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                  marginBottom: '28px',
                }}
              >
                {current.desc}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <PlayStoreBadge size="md" variant="emerald" />
              </div>
            </div>

            {/* Screen Image Preview with Sleek Frame */}
            <div
              style={{
                position: 'relative',
                borderRadius: '18px',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                boxShadow: '0 16px 36px rgba(0,0,0,0.5)',
                background: '#070b12',
              }}
            >
              <img
                src={current.image}
                alt={current.title}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  objectFit: 'cover',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .showcase-grid {
            grid-template-columns: 0.9fr 1.1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
