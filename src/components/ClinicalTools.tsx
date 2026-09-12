import React, { useState } from 'react';
import {
  Calculator,
  Baby,
  Activity,
  Heart,
  Scale,
  Calendar,
  ClipboardList,
  AlertCircle,
} from 'lucide-react';
import { PlayStoreBadge } from './PlayStoreBadge';

export const ClinicalTools: React.FC = () => {
  const [activeTool, setActiveTool] = useState(0);

  const tools = [
    {
      id: 'gfr',
      name: 'GFR Calculator',
      category: 'Nephrology',
      icon: <Activity size={22} color="#00c978" />,
      desc: 'Glomerular Filtration Rate estimation using CKD-EPI & MDRD formulas.',
      badge: 'Validated Formula',
    },
    {
      id: 'gestational',
      name: 'Gestational Age',
      category: 'Obstetrics',
      icon: <Baby size={22} color="#38bdf8" />,
      desc: 'Accurate LMP and ultrasound gestational age calculation with EDD timeline.',
      badge: 'OB/GYN',
    },
    {
      id: 'heart',
      name: 'Heart Risk (ASCVD)',
      category: 'Cardiology',
      icon: <Heart size={22} color="#f43f5e" />,
      desc: '10-year atherosclerotic cardiovascular disease risk estimation score.',
      badge: 'Clinical Score',
    },
    {
      id: 'dosage',
      name: 'Pediatric Dosage',
      category: 'Pharmacology',
      icon: <Calculator size={22} color="#f59e0b" />,
      desc: 'Weight-based drug dosage calculator with maximum limits warning.',
      badge: 'Safety Checks',
    },
    {
      id: 'bmi',
      name: 'BMI & BSA',
      category: 'General',
      icon: <Scale size={22} color="#a78bfa" />,
      desc: 'Body Mass Index and Mosteller Body Surface Area calculations in seconds.',
      badge: 'Quick Metric',
    },
    {
      id: 'apgar',
      name: 'APGAR Score',
      category: 'Pediatrics',
      icon: <Calendar size={22} color="#10b981" />,
      desc: '1-minute and 5-minute newborn health assessment index.',
      badge: 'Neonatal',
    },
    {
      id: 'patients',
      name: 'Daily Patient Records',
      category: 'Practice Management',
      icon: <ClipboardList size={22} color="#38bdf8" />,
      desc: 'Quick daily tracking, bed management, and reference notes for ward rounds.',
      badge: 'Productivity',
    },
  ];

  return (
    <section id="tools" className="section" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Calculator size={14} />
            <span>Practice Workspace</span>
          </div>
          <h2 className="section-title">
            Useful tools. <span className="text-gradient">One medical workspace.</span>
          </h2>
          <p className="section-subtitle">
            Instantly access validated clinical calculators and patient reference logs without
            switching between fragmented apps.
          </p>
        </div>

        {/* Tools Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px',
            marginBottom: '36px',
          }}
        >
          {tools.map((t, idx) => {
            const isSelected = activeTool === idx;
            return (
              <div
                key={t.id}
                onClick={() => setActiveTool(idx)}
                className="card"
                style={{
                  cursor: 'pointer',
                  padding: '24px',
                  borderColor: isSelected ? 'var(--accent-emerald)' : 'var(--border-subtle)',
                  background: isSelected ? 'rgba(16, 27, 44, 0.95)' : 'var(--bg-card)',
                  transform: isSelected ? 'translateY(-3px)' : 'none',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '14px',
                  }}
                >
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '12px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {t.icon}
                  </div>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      color: isSelected ? 'var(--accent-emerald)' : '#94a3b8',
                      background: 'rgba(255, 255, 255, 0.04)',
                      padding: '3px 8px',
                      borderRadius: 'var(--radius-full)',
                    }}
                  >
                    {t.badge}
                  </span>
                </div>

                <div
                  style={{
                    fontSize: '0.72rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: 'var(--accent-emerald)',
                    marginBottom: '4px',
                    fontWeight: 600,
                  }}
                >
                  {t.category}
                </div>

                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '8px', color: '#ffffff' }}>
                  {t.name}
                </h3>

                <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
                  {t.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Disclaimer Note */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            fontSize: '0.82rem',
            color: '#94a3b8',
            textAlign: 'center',
            marginBottom: '32px',
          }}
        >
          <AlertCircle size={16} color="#f59e0b" />
          <span>
            Clinical reference calculators built for certified medical professionals. Does not replace professional diagnostic judgment.
          </span>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center' }}>
          <PlayStoreBadge size="md" variant="emerald" />
        </div>
      </div>
    </section>
  );
};
