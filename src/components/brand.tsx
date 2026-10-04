import React from 'react';

// Package id stays com.vaidyasarthi.app; only the user-facing brand is "Postings".
export const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.vaidyasarthi.app';
export const CONTACT_EMAIL = 'officialskillsociety@gmail.com';
export const INSTAGRAM_HANDLE = 'postings.app';
export const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_HANDLE}/`;

export const InstagramIcon: React.FC<{ size?: number }> = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
  </svg>
);

export const PlayStoreIcon: React.FC<{ size?: number }> = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M3.6 1.8C3.4 2 3.3 2.35 3.3 2.77v18.46c0 .42.11.74.31.95l.05.05L14 11.88v-.26L3.66 1.27 3.6 1.8z" fill="#00E676" />
    <path d="M17.5 15.3l-3.5-3.46v-.26l3.5-3.46.08.05 4.1 2.33c1.17.66 1.17 1.75 0 2.41l-4.1 2.33-.08.05z" fill="#FFD600" />
    <path d="M17.6 15.3L14 11.75 3.3 22.2c.39.4.1.46 1.73-.47l12.53-7.11.04.68z" fill="#FF3D00" />
    <path d="M17.6 8.7L5.03 1.6C3.4.67 3.69.72 3.3 1.13l10.72 10.43 3.54-3.54.04.68z" fill="#00B0FF" />
  </svg>
);

export const PlayButton: React.FC<{ className?: string }> = ({ className = '' }) => (
  <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className={`btn-play ${className}`}>
    <PlayStoreIcon />
    <span className="play-label">
      <span className="sm">Get it on</span>
      <span className="lg">Google Play</span>
    </span>
  </a>
);

export const BrandLockup: React.FC<{ withSub?: boolean }> = ({ withSub = true }) => (
  <span className="brand-lockup">
    <img src="/assets/logo-mark.png" alt="" className="brand-mark" width={30} height={34} />
    <span className="brand-text">
      <span className="brand-name">Postings</span>
      {withSub && <span className="brand-sub">Doctors Network</span>}
    </span>
  </span>
);

/* Android device frame. Screens crossfade when more than one is passed. */
export const Phone = React.forwardRef<
  HTMLDivElement,
  { screens: { src: string; alt: string }[]; active?: number; className?: string; eager?: boolean }
>(({ screens, active = 0, className = '', eager = false }, ref) => (
  <div ref={ref} className={`phone ${className}`}>
    <span className="phone-btn power" />
    <span className="phone-btn vol" />
    <div className="phone-screen">
      <div className="phone-status" aria-hidden="true">
        <span>9:41</span>
        <span className="cam" />
        <span className="sys">
          <svg width="14" height="10" viewBox="0 0 14 10" fill="currentColor">
            <rect x="0" y="7" width="2.4" height="3" rx="0.6" />
            <rect x="3.8" y="5" width="2.4" height="5" rx="0.6" />
            <rect x="7.6" y="2.6" width="2.4" height="7.4" rx="0.6" />
            <rect x="11.4" y="0" width="2.4" height="10" rx="0.6" />
          </svg>
          <span className="bat" />
        </span>
      </div>
      <div className="phone-viewport">
        {screens.map((s, i) => (
          <img
            key={s.src}
            src={s.src}
            alt={s.alt}
            loading={eager || i === 0 ? 'eager' : 'lazy'}
            decoding="async"
            style={{
              opacity: i === active ? 1 : 0,
              transform: i === active ? 'scale(1)' : 'scale(1.03)',
            }}
            aria-hidden={i !== active}
          />
        ))}
      </div>
    </div>
    <div className="phone-glare" />
  </div>
));
Phone.displayName = 'Phone';
