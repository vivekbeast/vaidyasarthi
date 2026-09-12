import React from 'react';
import { ShieldCheck, GraduationCap, Stethoscope, FileCheck, Check } from 'lucide-react';

export const VerificationSection: React.FC = () => {
  return (
    <section id="verification" className="section" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <ShieldCheck size={14} />
            <span>Trust & Verification</span>
          </div>
          <h2 className="section-title">
            A community designed around{' '}
            <span className="text-gradient">professional identity.</span>
          </h2>
          <p className="section-subtitle">
            To preserve clinical integrity, every member undergoes a structured verification process
            tailored to their career stage.
          </p>
        </div>

        {/* Verification Pathway Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
            marginBottom: '40px',
          }}
        >
          {/* Doctor Verification Card */}
          <div
            className="card"
            style={{
              border: '1px solid rgba(0, 201, 120, 0.25)',
              background: 'linear-gradient(180deg, rgba(16, 27, 44, 0.8) 0%, rgba(10, 15, 26, 0.9) 100%)',
            }}
          >
            <div
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '14px',
                background: 'rgba(0, 201, 120, 0.1)',
                border: '1px solid rgba(0, 201, 120, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
              }}
            >
              <Stethoscope size={26} color="#00c978" />
            </div>

            <div
              style={{
                display: 'inline-block',
                padding: '4px 12px',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(0, 201, 120, 0.15)',
                color: '#00c978',
                fontSize: '0.75rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                marginBottom: '12px',
              }}
            >
              Practicing Doctors
            </div>

            <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '12px', color: '#ffffff' }}>
              Doctor Credential Verification
            </h3>

            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: 1.5 }}>
              Practicing clinicians verify their professional credentials to unlock peer messaging,
              specialty badges, and clinical case participation.
            </p>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                'State / National Medical Council Registration',
                'Verified Doctor badge on profile and posts',
                'Direct peer consultations with other specialists',
                'Access to full clinical tool suite and patient logs',
              ].map((text, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.86rem', color: '#cbd5e1' }}>
                  <Check size={16} color="#00c978" style={{ flexShrink: 0 }} />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Medical Student Verification Card */}
          <div
            className="card"
            style={{
              border: '1px solid rgba(56, 189, 248, 0.25)',
              background: 'linear-gradient(180deg, rgba(16, 27, 44, 0.8) 0%, rgba(10, 15, 26, 0.9) 100%)',
            }}
          >
            <div
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '14px',
                background: 'rgba(56, 189, 248, 0.1)',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
              }}
            >
              <GraduationCap size={26} color="#38bdf8" />
            </div>

            <div
              style={{
                display: 'inline-block',
                padding: '4px 12px',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(56, 189, 248, 0.15)',
                color: '#38bdf8',
                fontSize: '0.75rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                marginBottom: '12px',
              }}
            >
              Medical Students
            </div>

            <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '12px', color: '#ffffff' }}>
              Student Identity Verification
            </h3>

            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: 1.5 }}>
              Undergraduate MBBS and postgraduate medical residents verify student status to learn
              from senior consultants and build an early network.
            </p>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                'Recognized Medical College ID verification',
                'Verified Student badge with expected graduation',
                'Observe clinical case studies and discussions',
                'Connect with alumni and prospective mentors',
              ].map((text, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.86rem', color: '#cbd5e1' }}>
                  <Check size={16} color="#38bdf8" style={{ flexShrink: 0 }} />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 3-Step Verification Process Bar */}
        <div
          className="card"
          style={{
            padding: '28px 36px',
            background: 'rgba(10, 15, 24, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                background: 'rgba(0, 201, 120, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <FileCheck size={22} color="#00c978" />
            </div>
            <div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff' }}>
                Simple Verification Protocol
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                Register → Submit Details → Join the Community
              </p>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              fontSize: '0.88rem',
              color: '#94a3b8',
            }}
          >
            <span style={{ color: '#00c978', fontWeight: 600 }}>Zero spam</span>
            <span>•</span>
            <span style={{ color: '#38bdf8', fontWeight: 600 }}>Authentic identities</span>
            <span>•</span>
            <span style={{ color: '#f59e0b', fontWeight: 600 }}>Encrypted reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};
