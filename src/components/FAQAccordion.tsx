import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Who can join VaidyaSarthi?',
      a: 'VaidyaSarthi is exclusively built for certified doctors (consultants, specialists, general practitioners) and actively enrolled medical students (MBBS, MD/MS, DNB, residents). Access is restricted to verified healthcare professionals.',
    },
    {
      q: 'Is VaidyaSarthi a generic social media platform?',
      a: 'No. VaidyaSarthi is a dedicated professional medical community and workspace. Unlike consumer social networks, there are no entertainment algorithms, clickbait, or unrelated public posts—every discussion is centered around clinical cases, medical learning, and professional networking.',
    },
    {
      q: 'Is VaidyaSarthi available on Android?',
      a: 'Yes. The application is officially available for download directly on the Google Play Store for Android smartphones and tablets.',
    },
    {
      q: 'How does verification work?',
      a: 'During onboarding, practicing doctors provide their Medical Council registration details for credential check. Medical students verify their active student status with valid medical college identification.',
    },
    {
      q: 'Can I follow and message other medical professionals?',
      a: 'Yes. VaidyaSarthi supports professional following, department and specialty filtering, case discussions, and secure direct peer messaging for clinical collaborations.',
    },
    {
      q: 'Is VaidyaSarthi a telemedicine or patient consultation service?',
      a: 'No. VaidyaSarthi is strictly a professional peer community and clinical productivity workspace for doctors and students. It does not provide telemedicine consultations or patient diagnostic services.',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="section" style={{ position: 'relative' }}>
      <div className="container" style={{ maxWidth: '840px' }}>
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <HelpCircle size={14} />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="section-title">
            Answers to <span className="text-gradient">common questions.</span>
          </h2>
          <p className="section-subtitle">
            Everything you need to know about joining and using VaidyaSarthi.
          </p>
        </div>

        {/* Accordion List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="card"
                style={{
                  padding: '22px 28px',
                  cursor: 'pointer',
                  borderColor: isOpen ? 'rgba(0, 201, 120, 0.3)' : 'var(--border-subtle)',
                  background: isOpen ? 'rgba(16, 26, 42, 0.85)' : 'var(--bg-card)',
                  transition: 'all 0.2s ease',
                }}
                onClick={() => toggle(idx)}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                  }}
                >
                  <h3
                    style={{
                      fontSize: '1.08rem',
                      fontWeight: 600,
                      color: isOpen ? '#ffffff' : '#e2e8f0',
                    }}
                  >
                    {faq.q}
                  </h3>
                  <div
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s ease',
                      color: isOpen ? 'var(--accent-emerald)' : '#94a3b8',
                      flexShrink: 0,
                    }}
                  >
                    <ChevronDown size={20} />
                  </div>
                </div>

                {isOpen && (
                  <p
                    style={{
                      marginTop: '16px',
                      paddingTop: '14px',
                      borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                      fontSize: '0.92rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                    }}
                  >
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
