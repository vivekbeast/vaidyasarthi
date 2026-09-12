import React from 'react';
import { XCircle, CheckCircle2, VolumeX, UserCheck, MessageSquare } from 'lucide-react';

export const ProblemSolution: React.FC = () => {
  const problems = [
    {
      icon: <VolumeX size={24} color="#f87171" />,
      title: 'Too much noise',
      desc: 'General social platforms drown medical insights in entertainment, viral distractions, and non-verified opinions.',
    },
    {
      icon: <UserCheck size={24} color="#fbbf24" />,
      title: 'Hard to find verified peers',
      desc: 'No credential verification means you never know whether advice or comments come from licensed doctors or anonymous users.',
    },
    {
      icon: <MessageSquare size={24} color="#60a5fa" />,
      title: 'No clinical context',
      desc: 'Case discussions, clinical questions, and medical education require a professional environment tailored to healthcare.',
    },
  ];

  return (
    <section id="problem" className="section" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span>The Challenge</span>
          </div>
          <h2 className="section-title">
            Medical professionals deserve a{' '}
            <span className="text-gradient">space built for them.</span>
          </h2>
          <p className="section-subtitle">
            Mainstream networks are built for everyone. VaidyaSarthi is engineered
            purely for the medical discipline.
          </p>
        </div>

        {/* 3 Concise Problem Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
            marginBottom: '48px',
          }}
        >
          {problems.map((p, idx) => (
            <div
              key={idx}
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                background: 'rgba(15, 23, 42, 0.55)',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '14px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {p.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff' }}>
                {p.title}
              </h3>
              <p
                style={{
                  fontSize: '0.92rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                }}
              >
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Comparison Showcase (Linear / Stripe style table) */}
        <div
          className="card"
          style={{
            padding: '0',
            overflow: 'hidden',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <div
            style={{
              padding: '24px 32px',
              background: 'rgba(255, 255, 255, 0.02)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px',
            }}
          >
            <div>
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  color: 'var(--accent-emerald)',
                }}
              >
                Architecture Comparison
              </span>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#ffffff' }}>
                Built differently from general social platforms
              </h3>
            </div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(0, 201, 120, 0.1)',
                border: '1px solid rgba(0, 201, 120, 0.25)',
                color: '#00c978',
                fontSize: '0.85rem',
                fontWeight: 600,
              }}
            >
              Zero Algorithmic Clickbait
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
            }}
            className="comparison-grid"
          >
            {/* General Social */}
            <div
              style={{
                padding: '32px',
                background: 'rgba(10, 15, 24, 0.6)',
                borderRight: '1px solid rgba(255, 255, 255, 0.06)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '20px',
                  color: '#94a3b8',
                }}
              >
                <XCircle size={18} color="#ef4444" />
                <strong style={{ fontSize: '1rem', color: '#cbd5e1' }}>
                  General Social Platforms
                </strong>
              </div>
              <ul
                style={{
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                  fontSize: '0.9rem',
                  color: '#94a3b8',
                }}
              >
                <li style={{ display: 'flex', gap: '10px' }}>
                  <span style={{ color: '#ef4444' }}>✕</span> Built for the general public & influencers
                </li>
                <li style={{ display: 'flex', gap: '10px' }}>
                  <span style={{ color: '#ef4444' }}>✕</span> High entertainment noise & clickbait
                </li>
                <li style={{ display: 'flex', gap: '10px' }}>
                  <span style={{ color: '#ef4444' }}>✕</span> Unverified medical claims and pseudo-science
                </li>
                <li style={{ display: 'flex', gap: '10px' }}>
                  <span style={{ color: '#ef4444' }}>✕</span> Zero clinical calculators or medical workspace tools
                </li>
              </ul>
            </div>

            {/* VaidyaSarthi */}
            <div
              style={{
                padding: '32px',
                background: 'rgba(0, 201, 120, 0.03)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '20px',
                  color: '#00c978',
                }}
              >
                <CheckCircle2 size={18} color="#00c978" />
                <strong style={{ fontSize: '1rem', color: '#ffffff' }}>
                  VaidyaSarthi
                </strong>
              </div>
              <ul
                style={{
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                  fontSize: '0.9rem',
                  color: '#f1f5f9',
                }}
              >
                <li style={{ display: 'flex', gap: '10px' }}>
                  <span style={{ color: '#00c978' }}>✓</span> Exclusively for doctors & medical students
                </li>
                <li style={{ display: 'flex', gap: '10px' }}>
                  <span style={{ color: '#00c978' }}>✓</span> Credential & student verification required
                </li>
                <li style={{ display: 'flex', gap: '10px' }}>
                  <span style={{ color: '#00c978' }}>✓</span> High-signal medical cases and peer discussions
                </li>
                <li style={{ display: 'flex', gap: '10px' }}>
                  <span style={{ color: '#00c978' }}>✓</span> Built-in clinical calculators & patient notes
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .comparison-grid {
            grid-template-columns: 1fr !important;
          }
          .comparison-grid > div:first-child {
            border-right: none !important;
            border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          }
        }
      `}</style>
    </section>
  );
};
