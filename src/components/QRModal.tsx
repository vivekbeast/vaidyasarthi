import React from 'react';
import { X, Smartphone, CheckCircle } from 'lucide-react';
import { PLAY_STORE_URL } from './PlayStoreBadge';

interface QRModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QRModal: React.FC<QRModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

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
          maxWidth: '420px',
          background: '#0d1522',
          border: '1px solid rgba(0, 201, 120, 0.3)',
          borderRadius: 'var(--radius-xl)',
          padding: '36px',
          textAlign: 'center',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 201, 120, 0.2)',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '18px',
            right: '18px',
            color: '#94a3b8',
            padding: '8px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.05)',
          }}
          aria-label="Close Modal"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '4px 12px',
            borderRadius: 'var(--radius-full)',
            background: 'rgba(0, 201, 120, 0.1)',
            color: '#00c978',
            fontSize: '0.78rem',
            fontWeight: 700,
            marginBottom: '16px',
          }}
        >
          <Smartphone size={15} />
          <span>Scan to Download</span>
        </div>

        <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff', marginBottom: '8px' }}>
          Get VaidyaSarthi on Android
        </h3>

        <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '24px' }}>
          Point your phone camera at the QR code to open the Google Play Store directly.
        </p>

        {/* QR Code Container with Google Play Logo in center (as in Slide 1) */}
        <div
          style={{
            background: '#ffffff',
            padding: '16px',
            borderRadius: '20px',
            display: 'inline-block',
            boxShadow: '0 12px 30px rgba(0,0,0,0.5)',
            marginBottom: '20px',
          }}
        >
          <img
            src="/assets/playstore-qr.png"
            alt="Google Play QR Code"
            style={{
              width: '190px',
              height: '190px',
              objectFit: 'contain',
              display: 'block',
            }}
            onError={(e) => {
              // fallback to slide 1
              (e.target as HTMLImageElement).src = '/assets/slide1-hero.png';
            }}
          />
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            fontSize: '0.84rem',
            color: '#cbd5e1',
            marginBottom: '20px',
          }}
        >
          <CheckCircle size={16} color="#00c978" />
          <span>Official Google Play Verified Release</span>
        </div>

        <a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'block',
            padding: '12px',
            borderRadius: 'var(--radius-md)',
            background: 'rgba(255, 255, 255, 0.06)',
            color: '#00c978',
            fontWeight: 600,
            fontSize: '0.9rem',
            border: '1px solid rgba(0, 201, 120, 0.2)',
          }}
        >
          Or click here to open Play Store link →
        </a>
      </div>
    </div>
  );
};
