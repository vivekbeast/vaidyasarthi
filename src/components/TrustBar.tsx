import React from 'react';
import { ShieldCheck, Stethoscope, Award, Users } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const metrics = [
    {
      icon: <ShieldCheck size={22} color="#00c978" />,
      title: '100% Verified Pros',
      desc: 'Credential & student verification before joining',
    },
    {
      icon: <Stethoscope size={22} color="#38bdf8" />,
      title: 'Practice & Clinical Tools',
      desc: 'Calculators, records & clinical reference inside',
    },
    {
      icon: <Award size={22} color="#f59e0b" />,
      title: 'Dedicated Environment',
      desc: 'No memes, no non-medical noise, strictly medicine',
    },
    {
      icon: <Users size={22} color="#a78bfa" />,
      title: 'Peer-to-Peer Network',
      desc: 'Follow doctors, consult specialists & collaborate',
    },
  ];

  return (
    <div
      style={{
        position: 'relative',
        zIndex: 5,
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
        background: 'rgba(12, 18, 29, 0.65)',
        backdropFilter: 'blur(12px)',
        padding: '32px 0',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
            gap: '24px',
          }}
        >
          {metrics.map((item, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '14px',
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                {item.icon}
              </div>
              <div>
                <h4
                  style={{
                    fontSize: '0.98rem',
                    fontWeight: 700,
                    marginBottom: '4px',
                    color: '#ffffff',
                  }}
                >
                  {item.title}
                </h4>
                <p
                  style={{
                    fontSize: '0.82rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.4,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
