import React from 'react';
import { Stethoscope, GraduationCap, ArrowRight, Check } from 'lucide-react';
import { PLAY_STORE_URL } from './PlayStoreBadge';

export const AudienceCards: React.FC = () => {
  return (
    <section className="section" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span>Tailored Experience</span>
          </div>
          <h2 className="section-title">
            Built for the <span className="text-gradient">medical community.</span>
          </h2>
          <p className="section-subtitle">
            Whether you are an experienced consultant or in your first year of clinical training,
            VaidyaSarthi adapts to your stage.
          </p>
        </div>

        {/* 2 Audience Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
          }}
        >
          {/* Doctor Card */}
          <div
            className="card"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '40px',
              border: '1px solid rgba(0, 201, 120, 0.3)',
              background: 'linear-gradient(180deg, rgba(14, 25, 41, 0.9) 0%, rgba(8, 14, 24, 0.95) 100%)',
            }}
          >
            <div>
              <div
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '16px',
                  background: 'rgba(0, 201, 120, 0.12)',
                  border: '1px solid rgba(0, 201, 120, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px',
                }}
              >
                <Stethoscope size={28} color="#00c978" />
              </div>

              <span
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  color: 'var(--accent-emerald)',
                }}
              >
                For Practitioners
              </span>

              <h3 style={{ fontSize: '1.75rem', fontWeight: 800, margin: '8px 0 16px 0', color: '#ffffff' }}>
                Doctors & Specialists
              </h3>

              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>
                Connect with peers across hospitals, discuss challenging differential diagnoses,
                refer cases, and build your professional footprint in a dignified medical environment.
              </p>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                {[
                  'Verified doctor badge on all discussions',
                  'Peer-to-peer referral and specialist directory',
                  'High-yield clinical tools for bedside rounds',
                  'Private, direct encrypted messaging',
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#cbd5e1' }}>
                    <Check size={18} color="#00c978" style={{ flexShrink: 0 }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ width: '100%' }}
            >
              <span>Join as a Doctor</span>
              <ArrowRight size={18} />
            </a>
          </div>

          {/* Medical Student Card */}
          <div
            className="card"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '40px',
              border: '1px solid rgba(56, 189, 248, 0.3)',
              background: 'linear-gradient(180deg, rgba(14, 25, 41, 0.9) 0%, rgba(8, 14, 24, 0.95) 100%)',
            }}
          >
            <div>
              <div
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '16px',
                  background: 'rgba(56, 189, 248, 0.12)',
                  border: '1px solid rgba(56, 189, 248, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px',
                }}
              >
                <GraduationCap size={28} color="#38bdf8" />
              </div>

              <span
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  color: 'var(--accent-cyan)',
                }}
              >
                For Future Clinicians
              </span>

              <h3 style={{ fontSize: '1.75rem', fontWeight: 800, margin: '8px 0 16px 0', color: '#ffffff' }}>
                Medical Students & Residents
              </h3>

              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>
                Connect with fellow students, learn directly from experienced attending physicians,
                prepare for residency/boards, and jumpstart your career network.
              </p>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                {[
                  'Access real clinical case writeups & breakdowns',
                  'Connect with alumni across major medical colleges',
                  'Clinical calculator training for ward postings',
                  'Mentorship opportunities with verified consultants',
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#cbd5e1' }}>
                    <Check size={18} color="#38bdf8" style={{ flexShrink: 0 }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ width: '100%', borderColor: 'rgba(56, 189, 248, 0.4)', color: '#ffffff' }}
            >
              <span>Join as a Medical Student</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
