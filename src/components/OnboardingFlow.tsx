import React, { useState } from 'react';
import { UserPlus, ShieldCheck, UserCheck, MessageSquareShare, ArrowRight } from 'lucide-react';
import { PlayStoreBadge } from './PlayStoreBadge';

export const OnboardingFlow: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: '01',
      badge: 'Join',
      title: 'Create Your Account',
      description:
        'Download the app from Google Play and set up your verified profile in under 2 minutes.',
      icon: <UserPlus size={26} color="#00c978" />,
      detail: 'Quick signup with name, medical specialization, and current institution.',
    },
    {
      id: '02',
      badge: 'Verify',
      title: 'Complete Verification',
      description:
        'Verify your professional credentials as a practicing doctor or your student ID as a medical student.',
      icon: <ShieldCheck size={26} color="#38bdf8" />,
      detail: 'Ensures the network remains 100% authentic with zero fake profiles or spam.',
    },
    {
      id: '03',
      badge: 'Connect',
      title: 'Build Your Network',
      description:
        'Follow colleagues, senior consultants, batchmates, and verified specialists across departments.',
      icon: <UserCheck size={26} color="#f59e0b" />,
      detail: 'Discover medical professionals by specialty, city, or medical college.',
    },
    {
      id: '04',
      badge: 'Engage',
      title: 'Discuss & Practice',
      description:
        'Share case observations, comment on clinical updates, and use practice calculators instantly.',
      icon: <MessageSquareShare size={26} color="#a78bfa" />,
      detail: 'Participate in professional discussion threads and access clinical calculators daily.',
    },
  ];

  return (
    <section className="section" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span>Seamless Onboarding</span>
          </div>
          <h2 className="section-title">
            Simple 4-Step <span className="text-gradient">Onboarding Flow</span>
          </h2>
          <p className="section-subtitle">
            Your journey from download to active medical networking takes less than 3 minutes.
          </p>
        </div>

        {/* 4 Interactive Step Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px',
            marginBottom: '40px',
          }}
        >
          {steps.map((step, idx) => {
            const isSelected = activeStep === idx;
            return (
              <div
                key={step.id}
                onClick={() => setActiveStep(idx)}
                className="card"
                style={{
                  cursor: 'pointer',
                  borderColor: isSelected ? 'var(--accent-emerald)' : 'var(--border-subtle)',
                  background: isSelected ? 'rgba(16, 27, 44, 0.9)' : 'var(--bg-card)',
                  transform: isSelected ? 'translateY(-4px)' : 'none',
                  transition: 'all 0.25s ease',
                }}
              >
                {/* Step Top */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '18px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 800,
                      fontSize: '1.25rem',
                      color: isSelected ? 'var(--accent-emerald)' : '#64748b',
                    }}
                  >
                    {step.id}
                  </span>

                  <span
                    style={{
                      padding: '4px 12px',
                      borderRadius: 'var(--radius-full)',
                      background: isSelected
                        ? 'rgba(0, 201, 120, 0.15)'
                        : 'rgba(255, 255, 255, 0.05)',
                      color: isSelected ? '#00c978' : '#94a3b8',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                    }}
                  >
                    {step.badge}
                  </span>
                </div>

                {/* Step Icon */}
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px',
                  }}
                >
                  {step.icon}
                </div>

                <h3
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    marginBottom: '8px',
                    color: '#ffffff',
                  }}
                >
                  {step.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.88rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.5,
                  }}
                >
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Visual Progression Pill Bar (inspired by Slide 2) */}
        <div
          style={{
            background: 'linear-gradient(90deg, #0d9488 0%, #10b981 100%)',
            borderRadius: 'var(--radius-lg)',
            padding: '16px 28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            boxShadow: '0 10px 30px rgba(16, 185, 129, 0.25)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              fontWeight: 700,
              fontSize: '1rem',
              color: '#ffffff',
            }}
          >
            <span>Join</span>
            <ArrowRight size={18} opacity={0.8} />
            <span>Verify</span>
            <ArrowRight size={18} opacity={0.8} />
            <span>Connect</span>
            <ArrowRight size={18} opacity={0.8} />
            <span>Engage</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '0.88rem', color: '#e6fffa', fontWeight: 600 }}>
              Ready to start?
            </span>
            <PlayStoreBadge size="sm" variant="dark" />
          </div>
        </div>
      </div>
    </section>
  );
};
