import React from 'react';

interface PlayStoreBadgeProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  variant?: 'dark' | 'emerald' | 'glass';
  onClick?: () => void;
}

export const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.vaidyasarthi.app';

export const PlayStoreBadge: React.FC<PlayStoreBadgeProps> = ({
  size = 'md',
  className = '',
  variant = 'dark',
  onClick,
}) => {
  const getStyle = () => {
    if (variant === 'emerald') {
      return {
        background: 'linear-gradient(135deg, #00d284 0%, #00995c 100%)',
        color: '#04140b',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        boxShadow: '0 8px 24px rgba(0, 201, 120, 0.4)',
      };
    }
    if (variant === 'glass') {
      return {
        background: 'rgba(255, 255, 255, 0.08)',
        backdropFilter: 'blur(12px)',
        color: '#ffffff',
        border: '1px solid rgba(255, 255, 255, 0.15)',
      };
    }
    return {
      background: '#070d14',
      color: '#ffffff',
      border: '1px solid rgba(255, 255, 255, 0.16)',
    };
  };

  const pad = size === 'sm' ? '8px 14px' : size === 'lg' ? '14px 28px' : '10px 20px';
  const iconSize = size === 'sm' ? 20 : size === 'lg' ? 28 : 24;

  return (
    <a
      href={PLAY_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-playstore ${className}`}
      style={{ ...getStyle(), padding: pad }}
      onClick={onClick}
      id="cta-google-play"
      title="Download VaidyaSarthi on Google Play"
    >
      {/* Google Play Tri-color Vector Icon */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0 }}
      >
        <path
          d="M3.609 1.814C3.414 2.023 3.3 2.348 3.3 2.766v18.468c0 .418.114.743.31.952l.053.049L14.02 11.878v-.256L3.662 1.265l-.053.049z"
          fill="#00E676"
        />
        <path
          d="M17.478 15.337l-3.458-3.459v-.256l3.458-3.459.08.046 4.103 2.331c1.171.665 1.171 1.751 0 2.416l-4.103 2.331-.08.047z"
          fill="#FFD600"
        />
        <path
          d="M17.558 15.29l-3.538-3.538L3.3 22.186c.386.41.102.464 1.733-.463l12.525-7.113.001.68z"
          fill="#FF3D00"
        />
        <path
          d="M17.558 8.71L5.033 1.597C3.402.67 3.686.724 3.3 1.134l10.72 10.43 3.538-3.538v.684z"
          fill="#00B0FF"
        />
      </svg>
      <div className="playstore-text">
        <span
          className="small"
          style={{ color: variant === 'emerald' ? '#09361c' : '#94a3b8' }}
        >
          GET IT ON
        </span>
        <span
          className="big"
          style={{ color: variant === 'emerald' ? '#04140b' : '#ffffff' }}
        >
          Google Play
        </span>
      </div>
    </a>
  );
};
