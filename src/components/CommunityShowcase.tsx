import React from 'react';
import {
  Share2,
  MessageSquare,
  UserPlus,
  Compass,
  Heart,
  Bell,
  CheckCircle,
} from 'lucide-react';
import { PlayStoreBadge } from './PlayStoreBadge';

export const CommunityShowcase: React.FC = () => {
  const features = [
    {
      icon: <Share2 size={20} color="#00c978" />,
      title: 'Share',
      desc: 'Publish clinical cases, medical queries, and practice experiences to peers.',
    },
    {
      icon: <MessageSquare size={20} color="#38bdf8" />,
      title: 'Discuss',
      desc: 'Engage in thoughtful, doctor-moderated discussion threads.',
    },
    {
      icon: <UserPlus size={20} color="#fbbf24" />,
      title: 'Follow',
      desc: 'Follow specialists, mentors, and fellow medical students.',
    },
    {
      icon: <Compass size={20} color="#a78bfa" />,
      title: 'Discover',
      desc: 'Browse topics by specialty: Cardiology, Pediatrics, Surgery, and more.',
    },
    {
      icon: <Heart size={20} color="#f43f5e" />,
      title: 'React',
      desc: 'Support peer insights with professional reactions and saved archives.',
    },
    {
      icon: <Bell size={20} color="#10b981" />,
      title: 'Stay Connected',
      desc: 'Real-time notifications for replies, mentions, and verified updates.',
    },
  ];

  return (
    <section id="community" className="section" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span>The Heart of the Platform</span>
          </div>
          <h2 className="section-title">
            Your medical community, <span className="text-gradient">in one place.</span>
          </h2>
          <p className="section-subtitle">
            A verified ecosystem where doctors and medical students interact, exchange clinical
            insights, and build lifelong professional relationships.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '48px',
            alignItems: 'center',
            marginBottom: '48px',
          }}
          className="community-grid"
        >
          {/* Left: Interactive Mockup Feed Preview */}
          <div
            className="card"
            style={{
              padding: '0',
              overflow: 'hidden',
              background: 'linear-gradient(180deg, rgba(17, 24, 39, 0.8) 0%, rgba(10, 15, 26, 0.95) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.6)',
            }}
          >
            {/* Feed Header */}
            <div
              style={{
                padding: '16px 24px',
                background: 'rgba(255, 255, 255, 0.03)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    background: '#00c978',
                    boxShadow: '0 0 8px #00c978',
                  }}
                />
                <span style={{ fontWeight: 700, fontSize: '0.95rem', color: '#ffffff' }}>
                  Live Medical Feed
                </span>
              </div>
              <span
                style={{
                  fontSize: '0.75rem',
                  color: 'var(--accent-emerald)',
                  background: 'rgba(0, 201, 120, 0.1)',
                  padding: '4px 10px',
                  borderRadius: 'var(--radius-full)',
                  fontWeight: 600,
                }}
              >
                Verified Only
              </span>
            </div>

            {/* Post Card Preview (Actual VaidyaSarthi Feed UI representation) */}
            <div style={{ padding: '24px' }}>
              <div
                style={{
                  background: 'rgba(15, 23, 42, 0.6)',
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  padding: '20px',
                  marginBottom: '16px',
                }}
              >
                {/* Author Info */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '14px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #0d9488 0%, #10b981 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 700,
                        color: '#ffffff',
                        fontSize: '1rem',
                      }}
                    >
                      VS
                    </div>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span style={{ fontWeight: 700, color: '#ffffff', fontSize: '0.95rem' }}>
                          VaidyaSarthi Team
                        </span>
                        <CheckCircle size={15} color="#00c978" />
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                        Official Medical Community • Just now
                      </div>
                    </div>
                  </div>
                  <button
                    style={{
                      background: 'rgba(0, 201, 120, 0.15)',
                      color: '#00c978',
                      border: '1px solid rgba(0, 201, 120, 0.3)',
                      padding: '5px 14px',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                    }}
                  >
                    + Follow
                  </button>
                </div>

                {/* Post Content */}
                <p style={{ fontSize: '0.92rem', color: '#e2e8f0', lineHeight: 1.5, marginBottom: '14px' }}>
                  Welcome home to every doctor, resident, and medical student. Share clinical cases,
                  access validated calculators, and discuss advances in medicine in a focused workspace.
                </p>

                {/* Attached Graphic Preview */}
                <div
                  style={{
                    borderRadius: '12px',
                    overflow: 'hidden',
                    marginBottom: '14px',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                  }}
                >
                  <img
                    src="/assets/slide5-solution.png"
                    alt="VaidyaSarthi Community"
                    style={{ width: '100%', maxHeight: '200px', objectFit: 'cover' }}
                  />
                </div>

                {/* Post Reactions */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px',
                    paddingTop: '12px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                    fontSize: '0.82rem',
                    color: '#94a3b8',
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#00c978' }}>
                    <Heart size={16} fill="#00c978" /> 148 Likes
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <MessageSquare size={16} /> 32 Discussions
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Share2 size={16} /> Share
                  </span>
                </div>
              </div>

              {/* Quick Prompt */}
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px dashed rgba(255, 255, 255, 0.12)',
                  borderRadius: '12px',
                  padding: '12px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
                  Want to join this clinical discussion?
                </span>
                <a
                  href="#cta-download"
                  style={{
                    fontSize: '0.82rem',
                    color: '#00c978',
                    fontWeight: 700,
                    textDecoration: 'underline',
                  }}
                >
                  Install App →
                </a>
              </div>
            </div>
          </div>

          {/* Right: 6 Feature Highlights */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '16px',
            }}
            className="feature-cards-grid"
          >
            {features.map((f, i) => (
              <div
                key={i}
                className="card"
                style={{
                  padding: '20px',
                  background: 'rgba(15, 23, 42, 0.5)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}
              >
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {f.icon}
                </div>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff' }}>
                  {f.title}
                </h4>
                <p
                  style={{
                    fontSize: '0.82rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.45,
                  }}
                >
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Direct Action */}
        <div style={{ textAlign: 'center' }}>
          <PlayStoreBadge size="md" variant="emerald" />
        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .community-grid {
            grid-template-columns: 1.05fr 0.95fr !important;
          }
        }
        @media (max-width: 580px) {
          .feature-cards-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
