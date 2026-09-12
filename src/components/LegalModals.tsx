import React from 'react';
import { X, Shield, FileText, Trash2 } from 'lucide-react';

interface LegalModalsProps {
  type: 'privacy' | 'terms' | 'deletion' | null;
  onClose: () => void;
}

export const LegalModals: React.FC<LegalModalsProps> = ({ type, onClose }) => {
  if (!type) return null;

  const getContent = () => {
    switch (type) {
      case 'privacy':
        return {
          title: 'Privacy Policy',
          icon: <Shield size={24} color="#00c978" />,
          body: (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '0.9rem', color: '#cbd5e1', lineHeight: 1.6 }}>
              <p>
                <strong>Effective Date:</strong> January 2026
              </p>
              <p>
                At <strong>VaidyaSarthi</strong>, we prioritize the privacy and security of healthcare professionals and medical students who use our platform. This policy describes how we collect, handle, and protect your information.
              </p>
              <h4 style={{ color: '#ffffff', fontSize: '1.05rem', marginTop: '10px' }}>1. Information We Collect</h4>
              <p>
                We collect your basic registration information (name, email, specialty, medical college/council registration) strictly for the purpose of identity verification and maintaining community safety.
              </p>
              <h4 style={{ color: '#ffffff', fontSize: '1.05rem', marginTop: '10px' }}>2. Data Protection & Confidentiality</h4>
              <p>
                All verification documents submitted are processed via secure encrypted protocols and stored in compliant cloud storage. We do not sell or monetize personal medical practitioner data to third parties or advertising networks.
              </p>
              <h4 style={{ color: '#ffffff', fontSize: '1.05rem', marginTop: '10px' }}>3. Clinical Tools & Patient Records</h4>
              <p>
                Data entered into clinical calculators and local patient logs remains user-managed. Users must adhere to national patient confidentiality laws (e.g., DISHA / HIPAA principles) and refrain from posting identifiable patient data in public discussions.
              </p>
              <h4 style={{ color: '#ffffff', fontSize: '1.05rem', marginTop: '10px' }}>4. Contact</h4>
              <p>
                For privacy inquiries or data requests, contact us at: <a href="mailto:officialskillsociety@gmail.com" style={{ color: '#38bdf8' }}>officialskillsociety@gmail.com</a>.
              </p>
            </div>
          ),
        };
      case 'terms':
        return {
          title: 'Terms of Service',
          icon: <FileText size={24} color="#38bdf8" />,
          body: (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '0.9rem', color: '#cbd5e1', lineHeight: 1.6 }}>
              <p>
                <strong>Last Updated:</strong> January 2026
              </p>
              <h4 style={{ color: '#ffffff', fontSize: '1.05rem' }}>1. Acceptance of Terms</h4>
              <p>
                By downloading, accessing, or using VaidyaSarthi, you agree to comply with these terms. The platform is restricted to verified healthcare professionals, residents, and medical students.
              </p>
              <h4 style={{ color: '#ffffff', fontSize: '1.05rem' }}>2. Professional Conduct & Responsibility</h4>
              <p>
                Users must interact ethically and courteously. Defamatory comments, harassment, fraudulent identity claims, or posting unverified medical falsehoods will lead to immediate account suspension.
              </p>
              <h4 style={{ color: '#ffffff', fontSize: '1.05rem' }}>3. Medical Disclaimer</h4>
              <p>
                Information, discussions, calculators, and tools available on VaidyaSarthi are for educational and peer reference only. They do not constitute formal medical diagnosis, definitive clinical directives, or replacement for certified professional medical expertise.
              </p>
            </div>
          ),
        };
      case 'deletion':
        return {
          title: 'Account Deletion Request',
          icon: <Trash2 size={24} color="#f87171" />,
          body: (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '0.9rem', color: '#cbd5e1', lineHeight: 1.6 }}>
              <p>
                Users may request permanent deletion of their account and associated profile data at any time in compliance with Google Play Store data safety policies.
              </p>
              <h4 style={{ color: '#ffffff', fontSize: '1.05rem' }}>How to delete your account:</h4>
              <ol style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>Open the VaidyaSarthi app on your Android device.</li>
                <li>Navigate to <strong>Profile → Settings → Privacy & Security</strong>.</li>
                <li>Tap <strong>Delete Account</strong> and confirm your request.</li>
                <li>
                  Alternatively, send an email from your registered address to{' '}
                  <a href="mailto:officialskillsociety@gmail.com" style={{ color: '#38bdf8' }}>
                    officialskillsociety@gmail.com
                  </a>{' '}
                  with the subject "Account Deletion Request".
                </li>
              </ol>
              <p style={{ marginTop: '8px', color: '#94a3b8' }}>
                Upon processing, your profile, posts, comments, and uploaded documents will be permanently purged from our servers within 30 days.
              </p>
            </div>
          ),
        };
    }
  };

  const content = getContent();

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        background: 'rgba(3, 6, 12, 0.85)',
        backdropFilter: 'blur(12px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
      onClick={onClose}
    >
      <div
        className="card"
        style={{
          width: '100%',
          maxWidth: '620px',
          maxHeight: '85vh',
          overflowY: 'auto',
          background: '#0d1522',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          borderRadius: 'var(--radius-lg)',
          padding: '36px',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8)',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            color: '#94a3b8',
            padding: '8px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.05)',
          }}
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
          {content.icon}
          <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff' }}>{content.title}</h3>
        </div>

        {content.body}

        <div style={{ marginTop: '28px', textAlign: 'right' }}>
          <button
            onClick={onClose}
            className="btn btn-secondary"
            style={{ padding: '8px 20px', fontSize: '0.88rem' }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
