import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  X,
  ChevronDown,
  Shield,
  Users,
  Stethoscope,
  MessageCircle,
  UserCheck,
  Star,
  Check,
  ArrowRight,
  QrCode,
} from 'lucide-react';
import { Medical3DCanvas } from './Medical3DCanvas';

gsap.registerPlugin(ScrollTrigger);

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.vaidyasarthi.app';

const PlayStoreIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M3.6 1.8C3.4 2 3.3 2.35 3.3 2.77v18.46c0 .42.11.74.31.95l.05.05L14 11.88v-.26L3.66 1.27 3.6 1.8z" fill="#00E676" />
    <path d="M17.5 15.3l-3.5-3.46v-.26l3.5-3.46.08.05 4.1 2.33c1.17.66 1.17 1.75 0 2.41l-4.1 2.33-.08.05z" fill="#FFD600" />
    <path d="M17.6 15.3L14 11.75 3.3 22.2c.39.4.1.46 1.73-.47l12.53-7.11.04.68z" fill="#FF3D00" />
    <path d="M17.6 8.7L5.03 1.6C3.4.67 3.69.72 3.3 1.13l10.72 10.43 3.54-3.54.04.68z" fill="#00B0FF" />
  </svg>
);

/* ═══════════════════════════════════════════════
   HEADER — Minimal Frosted Glass Navigation
   ═══════════════════════════════════════════════ */
export const Header: React.FC<{ onGetApp: () => void }> = ({ onGetApp }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 25);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { label: 'Inside the App', href: '#showcase' },
    { label: 'Features', href: '#features' },
    { label: 'Verification', href: '#trust' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: 'var(--nav-h)',
        display: 'flex',
        alignItems: 'center',
        background: scrolled ? 'rgba(255, 255, 255, 0.94)' : 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'saturate(180%) blur(16px)',
        WebkitBackdropFilter: 'saturate(180%) blur(16px)',
        borderBottom: scrolled ? '1px solid rgba(13, 155, 92, 0.1)' : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}
    >
      <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img
            src="/assets/logo.png"
            alt="VaidyaSarthi"
            className="header-logo-img"
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
          <span className="header-logo-text">
            VaidyaSarthi
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="desktop-nav" style={{ display: 'none', alignItems: 'center', gap: '26px' }}>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontSize: '0.88rem',
                fontWeight: 600,
                color: 'var(--text-2)',
                transition: 'color 0.18s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--brand)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-2)')}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button
            onClick={onGetApp}
            className="qr-btn"
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 13px',
              borderRadius: '11px',
              border: '1px solid var(--border-hard)',
              fontSize: '0.84rem',
              fontWeight: 600,
              color: 'var(--text-2)',
              background: '#fff',
              transition: 'all 0.2s ease',
            }}
          >
            <QrCode size={15} />
            Scan QR
          </button>

          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="desktop-cta-btn btn-primary"
            style={{
              display: 'none',
              padding: '9px 18px',
              fontSize: '0.86rem',
            }}
          >
            Download App
            <ArrowRight size={14} />
          </a>

          {/* Quick Mobile Header Download Button */}
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-header-btn"
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '4px',
              padding: '7px 13px',
              borderRadius: '10px',
              background: 'var(--brand)',
              color: '#ffffff',
              fontSize: '0.8rem',
              fontWeight: 700,
            }}
          >
            Get App
            <ArrowRight size={13} />
          </a>

          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ display: 'flex', padding: '6px' }}
            aria-label="Toggle Menu"
          >
            {menuOpen ? (
              <X size={22} />
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--text)" strokeWidth="2.2" strokeLinecap="round">
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="16" y2="12" />
                <line x1="4" y1="17" x2="12" y2="17" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Backdrop */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            top: 'var(--nav-h)',
            background: 'rgba(15, 31, 23, 0.25)',
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(4px)',
            zIndex: 99,
          }}
        />
      )}

      {/* Mobile Drawer */}
      {menuOpen && (
        <div
          style={{
            position: 'absolute',
            top: 'var(--nav-h)',
            left: 0,
            right: 0,
            zIndex: 100,
            background: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(0,0,0,0.06)',
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
            boxShadow: 'var(--shadow-lg)',
            animation: 'fadeIn 0.2s ease',
          }}
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text)', padding: '6px 0' }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ marginTop: '8px', justifyContent: 'center' }}
          >
            Download on Google Play <ArrowRight size={15} />
          </a>
        </div>
      )}

      <style>{`
        @media (min-width: 960px) {
          .desktop-nav { display: flex !important; }
          .desktop-cta-btn { display: inline-flex !important; }
          .qr-btn { display: inline-flex !important; }
          .mobile-menu-btn { display: none !important; }
          .mobile-header-btn { display: none !important; }
        }
        @media (max-width: 959px) {
          .desktop-nav { display: none !important; }
          .desktop-cta-btn { display: none !important; }
          .qr-btn { display: none !important; }
          .mobile-header-btn { display: inline-flex !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
};

/* ═══════════════════════════════════════════════
   HERO — Clean, Uncluttered Flagship Android Reveal
   Verified medical community positioning, auto-storytelling phone
   ═══════════════════════════════════════════════ */
export const Hero: React.FC<{ onScanQR: () => void }> = ({ onScanQR }) => {
  const phoneContainerRef = useRef<HTMLDivElement>(null);
  const phoneElementRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const heroScreens = [
    {
      image: '/assets/hero-app-screen.jpg',
      alt: 'Clinical Case Debate',
      caption: 'Connect with verified peers.',
      subcaption: 'Debate diagnostic mysteries & clinical protocols',
      tag: 'Community',
    },
    {
      image: '/assets/real-profile.jpg',
      alt: 'Doctor Profile Verification',
      caption: "Know who you're learning from.",
      subcaption: 'Government-verified healthcare credentials',
      tag: 'Profile',
    },
    {
      image: '/assets/real-clinical.jpg',
      alt: 'Bedside Clinical Tools',
      caption: 'Reference what you need.',
      subcaption: 'Bedside calculators & validated formulas',
      tag: 'Tools',
    },
  ];

  // Auto-transition loop every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroScreens.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [heroScreens.length]);

  // App popup & launch 3D entrance animation
  useEffect(() => {
    if (!phoneElementRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        phoneElementRef.current,
        {
          y: 60,
          scale: 0.9,
          opacity: 0,
          rotateX: 8,
        },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          rotateX: 0,
          duration: 1,
          ease: 'power3.out',
          delay: 0.2,
        }
      );
    });

    return () => ctx.revert();
  }, []);

  // Subtle 3D tilt tracking on desktop mouse move
  useEffect(() => {
    const el = phoneContainerRef.current;
    if (!el || window.innerWidth < 820) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const rotY = (x / rect.width) * 10;
      const rotX = -(y / rect.height) * 10;

      gsap.to('.hero-3d-phone', {
        rotateY: rotY,
        rotateX: rotX,
        duration: 0.35,
        ease: 'power1.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to('.hero-3d-phone', {
        rotateY: 0,
        rotateX: 0,
        duration: 0.7,
        ease: 'power2.out',
      });
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section
      id="hero"
      style={{
        minHeight: '88vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 'calc(var(--nav-h) + 20px)',
        paddingBottom: '40px',
        background: 'var(--bg-hero)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* 3D Canvas Ambient Network */}
      <Medical3DCanvas density={35} />

      {/* Subtle radial aura */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(13, 155, 92, 0.08) 0%, rgba(52, 211, 153, 0.02) 50%, transparent 70%)',
          pointerEvents: 'none',
          filter: 'blur(50px)',
          zIndex: 1,
        }}
      />

      <div className="wrap" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        <div
          className="hero-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '36px',
            alignItems: 'center',
          }}
        >
          {/* Copy Column — Problem -> Solution Positioning */}
          <div className="hero-copy" style={{ maxWidth: '580px' }}>
            <h1 className="hero-title reveal">
              Your medical network,<br />
              <span
                style={{
                  background: 'var(--brand-gradient)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                without the noise.
              </span>
            </h1>

            <p className="hero-subtitle reveal">
              <span className="desktop-only">
                A focused professional community for doctors and medical students with clinical discussions, meaningful connections, and practical tools in one workspace.
              </span>
              <span className="mobile-only">
                A focused medical network for verified doctors & students with clinical discussions and bedside tools.
              </span>
            </p>

            {/* Direct Google Play CTA */}
            <div className="hero-cta-wrap reveal" style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="btn-play">
                <div className="play-icon">
                  <PlayStoreIcon />
                </div>
                <div className="play-label">
                  <span className="sm">GET IT ON</span>
                  <span className="lg">Google Play</span>
                </div>
              </a>

              <button onClick={onScanQR} className="btn-ghost btn-qr-hero">
                <QrCode size={16} style={{ color: 'var(--brand)' }} />
                Scan QR Code
              </button>
            </div>

            {/* Desktop Proof Row */}
            <div className="reveal hero-proof-line desktop-only">
              <span>Verified professionals</span>
              <span className="dot">·</span>
              <span>Clinical discussions</span>
              <span className="dot">·</span>
              <span>Clinical workspace</span>
            </div>

            {/* Mobile-Optimized Proof Row (Single line, zero clutter) */}
            <div className="reveal hero-proof-mobile mobile-only">
              <span>Verified Doctors</span>
              <span className="dot">·</span>
              <span>Clinical Cases</span>
              <span className="dot">·</span>
              <span>Bedside Tools</span>
            </div>
          </div>

          {/* Top-End Android Device Mockup with Auto-Storytelling Transitions */}
          <div
            ref={phoneContainerRef}
            className="hero-phone-area"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
            }}
          >
            <div className="phone-3d-wrap" style={{ position: 'relative' }}>
              {/* Contextual Floating Labels (Desktop) */}
              <div className="hero-context-badge hero-badge-1">
                <Shield size={14} style={{ color: 'var(--brand)' }} />
                <span>Verified identity ✓</span>
              </div>

              <div className="hero-context-badge hero-badge-2">
                <MessageCircle size={14} style={{ color: 'var(--brand)' }} />
                <span>Medical conversations</span>
              </div>

              <div className="hero-context-badge hero-badge-3">
                <Stethoscope size={14} style={{ color: 'var(--brand)' }} />
                <span>Clinical tools</span>
              </div>

              {/* Flagship Android Device with Levitation */}
              <div ref={phoneElementRef} className="phone hero-3d-phone phone-levitate">
                {/* Physical Android Hardware Details */}
                <div className="phone-side-power" />
                <div className="phone-side-vol" />
                <div className="phone-earpiece" />
                <div className="phone-punch-hole" />
                <div className="phone-glare" />

                {/* Auto-cycling Screen Crossfade */}
                <div className="phone-screen" style={{ position: 'relative', overflow: 'hidden' }}>
                  {heroScreens.map((s, idx) => (
                    <img
                      key={idx}
                      src={s.image}
                      alt={s.alt}
                      loading={idx === 0 ? 'eager' : 'lazy'}
                      decoding="async"
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'top',
                        opacity: activeSlide === idx ? 1 : 0,
                        transform: activeSlide === idx ? 'scale(1)' : 'scale(1.03)',
                        transition: 'opacity 0.65s cubic-bezier(0.4, 0, 0.2, 1), transform 3.5s ease-out',
                        pointerEvents: activeSlide === idx ? 'auto' : 'none',
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Interactive Storytelling Caption Bar with Dots */}
            <div className="phone-caption-bar">
              <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text)', lineHeight: 1.2 }}>
                  {heroScreens[activeSlide].caption}
                </span>
                <span style={{ fontSize: '0.68rem', color: 'var(--text-3)', fontWeight: 600 }}>
                  {heroScreens[activeSlide].subcaption}
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                {heroScreens.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSlide(idx)}
                    className="caption-dot"
                    aria-label={`Slide ${idx + 1}`}
                    style={{
                      width: activeSlide === idx ? '18px' : '7px',
                      height: '7px',
                      borderRadius: '4px',
                      background: activeSlide === idx ? 'var(--brand)' : 'rgba(0, 0, 0, 0.18)',
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .hero-grid { grid-template-columns: 1.15fr 0.85fr !important; }
        }
        @media (max-width: 959px) {
          .hero-copy { text-align: center; margin: 0 auto; }
          .hero-cta-wrap { justify-content: center; }
        }
      `}</style>
    </section>
  );
};

/* ═══════════════════════════════════════════════
   APP SHOWCASE — Interactive 4-Tab Flagship Android Tour
   See What Happens Inside
   ═══════════════════════════════════════════════ */
export const AppShowcase: React.FC = () => {
  const [tab, setTab] = useState(0);
  const phoneRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const tabs = [
    {
      id: 'community',
      label: 'Peer Cases',
      icon: <Users size={16} />,
      image: '/assets/hero-app-screen.jpg',
      title: 'Clinical discussions & case debates',
      desc: 'Debate genuine clinical dilemmas, rare findings, and treatment protocols with verified doctors across specialties.',
      features: [
        'Radiological imaging & clinical case attachments',
        'Doctor-moderated peer discussion threads',
        'Official clinical editorial synthesis',
      ],
    },
    {
      id: 'clinical',
      label: 'Clinical Tools',
      icon: <Stethoscope size={16} />,
      image: '/assets/real-clinical.jpg',
      title: 'Evidence-based bedside calculators',
      desc: 'Formulas for GFR, BMI, Heart Risk Index, APGAR, Gestational Age, and Pediatric Dosing ready for bedside rounds.',
      features: [
        'GFR kidney staging with validated formulas',
        'Heart Risk Index & cardiovascular scoring',
        'Pediatric and adult dosing references',
      ],
    },
    {
      id: 'messages',
      label: 'Secure DMs',
      icon: <MessageCircle size={16} />,
      image: '/assets/real-messages.jpg',
      title: 'Peer consults with disappearing messages',
      desc: 'Discuss sensitive clinical cases confidentially. Messages automatically delete after 24 hours with daily quotas against spam.',
      features: [
        'Auto-disappearing messages after 24 hours',
        'Anti-spam quota: 10 new requests/day',
        'Search verified practitioners by specialty',
      ],
    },
    {
      id: 'profile',
      label: 'Doctor Profile',
      icon: <UserCheck size={16} />,
      image: '/assets/real-profile.jpg',
      title: 'Government-verified healthcare identity',
      desc: 'Showcase your registered license, clinical specialty, and hospital/clinic affiliations to colleagues across India.',
      features: [
        'Official registration verification (NMC, Dental, AYUSH, Nursing Councils)',
        'Toggle between Public View and Stealth Private Mode',
        'Verified Member badge establishing clinical authenticity',
      ],
    },
  ];

  const current = tabs[tab];

  // Animate phone on tab change
  useEffect(() => {
    if (!phoneRef.current) return;
    gsap.fromTo(
      phoneRef.current,
      { rotateY: 6, scale: 0.97, opacity: 0.7 },
      { rotateY: 0, scale: 1, opacity: 1, duration: 0.35, ease: 'power2.out' }
    );
  }, [tab]);

  return (
    <section id="showcase" ref={sectionRef} style={{ padding: '80px 0', background: '#ffffff', position: 'relative' }}>
      <div className="wrap">
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '32px' }}>
          {/* Eyebrow */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 13px',
              borderRadius: '20px',
              background: 'rgba(13, 155, 92, 0.08)',
              border: '1px solid rgba(13, 155, 92, 0.18)',
              color: 'var(--brand)',
              fontSize: '0.72rem',
              fontWeight: 800,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '12px',
            }}
          >
            SEE WHAT HAPPENS INSIDE
          </div>

          <h2
            style={{
              fontSize: 'clamp(1.9rem, 3.8vw, 2.8rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              marginBottom: '10px',
              color: 'var(--text)',
            }}
          >
            The clinical workspace<br />for real bedside practice.
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--text-3)', maxWidth: '520px', margin: '0 auto' }}>
            Community · Network · Clinical Tools — interact with authentic screens from the physician workspace.
          </p>
        </div>

        {/* Tab Selector (Scrollable Pills on Mobile) */}
        <div
          className="showcase-tabs-container reveal"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            background: 'var(--surface-2)',
            borderRadius: '16px',
            padding: '5px',
            maxWidth: '560px',
            margin: '0 auto 40px auto',
          }}
        >
          {tabs.map((t, idx) => (
            <button
              key={t.id}
              onClick={() => setTab(idx)}
              className="showcase-tab-btn"
              style={{
                flex: '0 0 auto',
                padding: '10px 16px',
                borderRadius: '12px',
                fontSize: '0.85rem',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                background: tab === idx ? '#ffffff' : 'transparent',
                color: tab === idx ? 'var(--brand)' : 'var(--text-3)',
                boxShadow: tab === idx ? 'var(--shadow-sm)' : 'none',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap',
              }}
            >
              <span>{t.icon}</span>
              {t.label}
            </button>
          ))}
        </div>

        {/* 2-Column Product Experience */}
        <div
          className="showcase-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '40px',
            alignItems: 'center',
          }}
        >
          {/* Flagship Android Device Display */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div ref={phoneRef} className="phone-3d-wrap" style={{ perspective: '1200px' }}>
              <div
                className="phone"
                style={{
                  width: '270px',
                  transformStyle: 'preserve-3d',
                }}
              >
                <div className="phone-side-power" />
                <div className="phone-side-vol" />
                <div className="phone-earpiece" />
                <div className="phone-punch-hole" />
                <div className="phone-glare" />

                <div className="phone-screen">
                  <img key={current.id} src={current.image} alt={current.title} />
                </div>
              </div>
            </div>
          </div>

          {/* Feature Explanations */}
          <div key={current.id} style={{ maxWidth: '460px', margin: '0 auto' }}>
            <h3
              style={{
                fontSize: '1.65rem',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                marginBottom: '12px',
                lineHeight: 1.25,
                color: 'var(--text)',
              }}
            >
              {current.title}
            </h3>

            <p
              style={{
                fontSize: '1rem',
                color: 'var(--text-2)',
                marginBottom: '24px',
                lineHeight: 1.55,
              }}
            >
              {current.desc}
            </p>

            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
              {current.features.map((item, i) => (
                <li
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    fontSize: '0.92rem',
                    color: 'var(--text-2)',
                    lineHeight: 1.5,
                  }}
                >
                  <span
                    style={{
                      background: 'rgba(13, 155, 92, 0.12)',
                      color: 'var(--brand)',
                      padding: '3px',
                      borderRadius: '50%',
                      display: 'flex',
                      flexShrink: 0,
                      marginTop: '2px',
                    }}
                  >
                    <Check size={13} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ width: '100%', maxWidth: '280px', justifyContent: 'center' }}>
              Download on Google Play
              <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .showcase-grid { grid-template-columns: 1fr 1.15fr !important; }
        }
        @media (max-width: 959px) {
          .showcase-grid > div:last-child { text-align: center; }
          .showcase-grid ul { align-items: flex-start; text-align: left; }
        }
      `}</style>
    </section>
  );
};

/* ═══════════════════════════════════════════════
   FEATURES GRID — Clean Cards
   ═══════════════════════════════════════════════ */
export const FeaturesGrid: React.FC = () => {
  const features = [
    {
      icon: <Users size={20} />,
      title: 'Verified Healthcare Community',
      desc: 'Exclusive to government-registered doctors (Allopathy, AYUSH, Dental), registered nurses, and enrolled healthcare students. Zero spam.',
    },
    {
      icon: <Stethoscope size={20} />,
      title: 'Bedside Clinical Calculators',
      desc: 'Evidence-based tools for GFR, BMI, Heart Risk Index, APGAR, Gestational Age, and pediatric/adult drug dosing references.',
    },
    {
      icon: <MessageCircle size={20} />,
      title: '24h Ephemeral Messaging',
      desc: 'Secure peer consults that automatically erase messages after 24 hours with daily conversation quotas against spam.',
    },
    {
      icon: <Shield size={20} />,
      title: 'Government Registry Verification',
      desc: 'Strict manual review of official council registration numbers ensuring clinical authenticity across discussions.',
    },
    {
      icon: <UserCheck size={20} />,
      title: 'Professional Identity & Stealth',
      desc: 'Display your specialization, registration credentials, and affiliations, or switch to Stealth Private Mode when desired.',
    },
    {
      icon: <Star size={20} />,
      title: 'Clinical Case Discussions',
      desc: 'Debate diagnostic enigmas, atypical presentations, and evidence-based treatment protocols with verified colleagues.',
    },
  ];

  return (
    <section id="features" style={{ padding: '70px 0', background: 'var(--bg-off)' }}>
      <div className="wrap">
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2
            style={{
              fontSize: 'clamp(1.9rem, 3.8vw, 2.7rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              marginBottom: '10px',
            }}
          >
            Built for the rigor of<br />modern clinical practice.
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--text-3)', maxWidth: '440px', margin: '0 auto' }}>
            Calibrated for speed, clinical precision, and patient confidentiality.
          </p>
        </div>

        <div className="features-grid-cards">
          {features.map((f) => (
            <div key={f.title} className="feature-card">
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: 'var(--brand-dim)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '14px',
                  color: 'var(--brand)',
                }}
              >
                {f.icon}
              </div>
              <h3
                style={{
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  marginBottom: '8px',
                  letterSpacing: '-0.01em',
                  color: 'var(--text)',
                }}
              >
                {f.title}
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-2)', lineHeight: 1.55 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════
   TRUST — 4-Step Verification Workflow
   ═══════════════════════════════════════════════ */
export const Trust: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Download App',
      desc: 'Install the Android app from Google Play and select your clinical discipline or specialty.',
      color: 'var(--brand)',
    },
    {
      step: '02',
      title: 'Submit License',
      desc: 'Upload your official government registration certificate (NMC, Dental, AYUSH, Nursing) or college ID.',
      color: '#0d9b5c',
    },
    {
      step: '03',
      title: 'Background Verification',
      desc: 'Immediate access upon signup. Official state or NMC council verification runs seamlessly in the background without blocking your workflow.',
      color: '#10b96d',
    },
    {
      step: '04',
      title: 'Verified Badge & Network',
      desc: 'Receive your official Verified Doctor badge on your profile and participate fully in peer case debates.',
      color: '#059669',
    },
  ];

  return (
    <section id="trust" style={{ padding: '70px 0', background: 'var(--bg-mint)' }}>
      <div className="wrap">
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2
            style={{
              fontSize: 'clamp(1.9rem, 3.8vw, 2.7rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              marginBottom: '10px',
              color: 'var(--text)',
            }}
          >
            Verified by design.
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--text-3)', maxWidth: '460px', margin: '0 auto' }}>
            Every account is authenticated against official government healthcare registries.
          </p>
        </div>

        <div className="trust-steps-grid">
          {steps.map((s) => (
            <div
              key={s.step}
              className="trust-step-card"
              style={{
                padding: '24px 20px',
                borderRadius: '18px',
                background: '#ffffff',
                border: '1px solid rgba(13, 155, 92, 0.1)',
                boxShadow: 'var(--shadow-sm)',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: 'var(--brand-dim)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 14px auto',
                  fontSize: '0.86rem',
                  fontWeight: 800,
                  color: s.color,
                }}
              >
                {s.step}
              </div>
              <h3 style={{ fontSize: '1.02rem', fontWeight: 700, marginBottom: '6px', color: 'var(--text)' }}>
                {s.title}
              </h3>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-3)', lineHeight: 1.5 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════
   FAQ — Clinician Clarifications
   ═══════════════════════════════════════════════ */
export const FAQ: React.FC = () => {
  const [open, setOpen] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Who is eligible to join VaidyaSarthi?',
      a: 'Any doctor or nurse registered with official government healthcare bodies is welcome. This includes allopathic physicians (MBBS, MD/MS, DNB, DM/MCh), AYUSH practitioners (BAMS, BHMS, BUMS), dental surgeons (BDS/MDS), registered nurses with state or national nursing councils, and bona fide medical or nursing students enrolled in recognized institutions.',
    },
    {
      q: 'How does the credential verification process work?',
      a: 'You get immediate access to explore the community and use bedside calculators as soon as you sign up. Practitioners simply submit their official registration certificate or number (issued by NMC, State Medical Councils, Dental, AYUSH, or Nursing Councils) or college photo ID. Our administrative team verifies credentials in the background to award your official Verified Doctor badge — there is zero waiting time to use the app.',
    },
    {
      q: 'Are the clinical calculators validated?',
      a: 'Yes. All calculators (such as GFR, BMI, Heart Risk Index, APGAR, and Pediatric Dosing) use standardized, peer-reviewed clinical formulas calibrated for rapid ward rounds and bedside reference.',
    },
    {
      q: 'How does VaidyaSarthi protect patient privacy?',
      a: 'We mandate that all case discussions de-identify protected health information (PHI). Direct messages are ephemeral and permanently purged after 24 hours from all production servers with strict daily quotas against spam.',
    },
    {
      q: 'Can I delete my account and data?',
      a: 'Yes, at any time directly through Profile → Settings → Privacy & Security → Delete Account, or by emailing officialskillsociety@gmail.com.',
    },
  ];

  return (
    <section id="faq" style={{ padding: '70px 0', background: '#ffffff' }}>
      <div className="wrap" style={{ maxWidth: '720px' }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '36px' }}>
          <h2
            style={{
              fontSize: 'clamp(1.9rem, 3.8vw, 2.6rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              color: 'var(--text)',
            }}
          >
            Common questions.
          </h2>
        </div>

        <div className="reveal" style={{ display: 'flex', flexDirection: 'column' }}>
          {faqs.map((f, i) => (
            <div key={i} style={{ borderBottom: '1px solid var(--border-hard)' }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '18px 0',
                  textAlign: 'left',
                  fontSize: '0.98rem',
                  fontWeight: 700,
                  color: 'var(--text)',
                  transition: 'color 0.2s ease',
                }}
              >
                <span>{f.q}</span>
                <ChevronDown
                  size={18}
                  style={{
                    color: 'var(--text-3)',
                    flexShrink: 0,
                    marginLeft: '12px',
                    transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.25s ease',
                  }}
                />
              </button>
              <div
                style={{
                  maxHeight: open === i ? '600px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.35s ease',
                }}
              >
                <p
                  style={{
                    fontSize: '0.92rem',
                    color: 'var(--text-2)',
                    lineHeight: 1.6,
                    paddingBottom: '18px',
                  }}
                >
                  {f.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════
   FINAL CTA — Clean Download Card
   ═══════════════════════════════════════════════ */
export const FinalCTA: React.FC<{ onScanQR: () => void }> = ({ onScanQR }) => {
  return (
    <section style={{ padding: '70px 0', background: 'linear-gradient(180deg, #ffffff 0%, #f2faf5 100%)', position: 'relative' }}>
      <div className="wrap">
        <div
          style={{
            background: 'linear-gradient(145deg, #ffffff 0%, #f4fbf7 60%, #e6f4ea 100%)',
            borderRadius: '28px',
            border: '1px solid rgba(13, 155, 92, 0.18)',
            padding: 'clamp(28px, 4.5vw, 56px) clamp(20px, 4vw, 48px)',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-xl)',
          }}
        >
          {/* Top Emerald Gradient Line */}
          {/* <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: 'var(--brand-gradient)',
            }}
          /> */}

          <div className="final-cta-grid">
            {/* Left Copy & Action */}
            <div className="final-cta-copy">
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  background: 'rgba(13, 155, 92, 0.08)',
                  border: '1px solid rgba(13, 155, 92, 0.2)',
                  color: 'var(--brand)',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: '14px',
                }}
              >
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--brand)', display: 'inline-block' }} />
                VERIFIED MEDICAL WORKSPACE
              </div>

              <h2
                style={{
                  fontSize: 'clamp(1.85rem, 3.8vw, 2.75rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.15,
                  marginBottom: '14px',
                  color: 'var(--text)',
                }}
              >
                Your medical network<br />
                <span
                  style={{
                    background: 'var(--brand-gradient)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  is ready.
                </span>
              </h2>

              <p
                style={{
                  fontSize: '0.98rem',
                  color: 'var(--text-2)',
                  marginBottom: '20px',
                  lineHeight: 1.55,
                }}
              >
                Download VaidyaSarthi on Google Play. Connect with verified colleagues, debate clinical dilemmas, and access evidence-based bedside calculators.
              </p>

              {/* Verified Trust Chips */}
              <div
                className="final-cta-features-list"
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px 16px',
                  marginBottom: '26px',
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  color: 'var(--text-2)',
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <Shield size={14} style={{ color: 'var(--brand)' }} />
                  Government Registry Verified
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <Stethoscope size={14} style={{ color: 'var(--brand)' }} />
                  Bedside Calculators
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <MessageCircle size={14} style={{ color: 'var(--brand)' }} />
                  24h Ephemeral DMs
                </span>
              </div>

              <div className="final-cta-btn-wrap" style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-play"
                >
                  <div className="play-icon">
                    <PlayStoreIcon />
                  </div>
                  <div className="play-label">
                    <span className="sm">GET IT ON</span>
                    <span className="lg">Google Play</span>
                  </div>
                </a>

                <button onClick={onScanQR} className="btn-ghost btn-qr-hero" style={{ padding: '10px 20px' }}>
                  <QrCode size={17} style={{ color: 'var(--brand)' }} />
                  Scan QR Code
                </button>
              </div>

              <p style={{ fontSize: '0.76rem', color: 'var(--text-3)', marginTop: '14px' }}>
                Requires Android 8.0+ • Official verification for doctors & students
              </p>
            </div>

            {/* Right Showcase: God Level Visual */}
            <div className="final-cta-img-wrap">
              <div className="final-cta-float-badge final-cta-badge-top">
                <Shield size={14} style={{ color: 'var(--brand)' }} />
                <span>Verified Doctor Community ✓</span>
              </div>

              <img
                src="/assets/final-cta-doctor.jpg"
                alt="VaidyaSarthi Clinical Workspace"
                className="final-cta-img"
                loading="lazy"
              />

              <div className="final-cta-float-badge final-cta-badge-bottom">
                <Stethoscope size={14} style={{ color: 'var(--brand)' }} />
                <span>Real-Time Clinical Tools</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════
   FOOTER
   ═══════════════════════════════════════════════ */
export const Footer: React.FC<{ onLegal: (type: string) => void }> = ({ onLegal }) => {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-hard)',
        background: 'var(--bg-off)',
        padding: '48px 0 28px 0',
      }}
    >
      <div className="wrap">
        <div className="footer-links-grid">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <img
                src="/assets/logo.png"
                alt="VaidyaSarthi"
                style={{ height: '28px', width: 'auto' }}
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <span style={{ fontFamily: 'var(--font-head)', fontWeight: 800, fontSize: '1.15rem', color: 'var(--text)' }}>
                VaidyaSarthi
              </span>
            </div>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-3)', lineHeight: 1.5 }}>
              India's verified medical workspace and clinical intelligence platform.
            </p>
          </div>

          <div>
            <p style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--text-3)', marginBottom: '10px' }}>
              Product
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
              <a href="#showcase" style={{ fontSize: '0.86rem', color: 'var(--text-2)' }}>Inside the App</a>
              <a href="#features" style={{ fontSize: '0.86rem', color: 'var(--text-2)' }}>Features</a>
              <a href="#trust" style={{ fontSize: '0.86rem', color: 'var(--text-2)' }}>Verification</a>
              <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.86rem', color: 'var(--brand)', fontWeight: 600 }}>Google Play Store</a>
            </div>
          </div>

          <div>
            <p style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--text-3)', marginBottom: '10px' }}>
              Legal
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
              <button onClick={() => onLegal('privacy')} style={{ fontSize: '0.86rem', color: 'var(--text-2)', textAlign: 'left' }}>
                Privacy Policy
              </button>
              <button onClick={() => onLegal('terms')} style={{ fontSize: '0.86rem', color: 'var(--text-2)', textAlign: 'left' }}>
                Terms of Service
              </button>
              <button onClick={() => onLegal('deletion')} style={{ fontSize: '0.86rem', color: 'var(--text-2)', textAlign: 'left' }}>
                Account Deletion
              </button>
            </div>
          </div>

          <div>
            <p style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--text-3)', marginBottom: '10px' }}>
              Connect
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
              <a href="https://instagram.com/vaidyasarthi.app" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.86rem', color: 'var(--text-2)' }}>
                Instagram: vaidyasarthi.app
              </a>
              <a href="mailto:officialskillsociety@gmail.com" style={{ fontSize: '0.86rem', color: 'var(--text-2)', wordBreak: 'break-all' }}>
                officialskillsociety@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div
          style={{
            borderTop: '1px solid var(--border-hard)',
            paddingTop: '18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '10px',
            fontSize: '0.76rem',
            color: 'var(--text-3)',
          }}
        >
          <span>© {new Date().getFullYear()} VaidyaSarthi. All rights reserved.</span>
          <span>Educational & peer reference tool. Does not replace clinical judgment.</span>
        </div>
      </div>
    </footer>
  );
};

/* ═══════════════════════════════════════════════
   MOBILE STICKY DOWNLOAD BAR (High-Converting 1-Tap)
   ═══════════════════════════════════════════════ */
export const MobileSticky: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 280);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="mobile-sticky"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 90,
        padding: '10px 16px',
        display: 'none',
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'saturate(180%) blur(16px)',
        WebkitBackdropFilter: 'saturate(180%) blur(16px)',
        borderTop: '1px solid rgba(13, 155, 92, 0.15)',
        boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.08)',
        transform: visible ? 'translateY(0)' : 'translateY(100%)',
        transition: 'transform 0.28s ease',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', maxWidth: '480px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <img
            src="/assets/logo-icon.png"
            alt=""
            style={{ width: '28px', height: '28px', borderRadius: '7px' }}
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
          <div>
            <div style={{ fontSize: '0.84rem', fontWeight: 800, color: 'var(--text)', lineHeight: 1.1 }}>VaidyaSarthi</div>
            <div style={{ fontSize: '0.68rem', color: 'var(--text-3)', fontWeight: 500 }}>Free on Google Play</div>
          </div>
        </div>

        <a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '9px 18px',
            borderRadius: '12px',
            background: 'var(--brand)',
            color: '#ffffff',
            fontSize: '0.86rem',
            fontWeight: 700,
            boxShadow: '0 4px 12px rgba(13, 155, 92, 0.3)',
            whiteSpace: 'nowrap',
          }}
        >
          Install App
          <ArrowRight size={14} />
        </a>
      </div>

      <style>{`
        @media (max-width: 820px) {
          .mobile-sticky { display: block !important; }
          body { padding-bottom: 64px; }
        }
      `}</style>
    </div>
  );
};

/* ═══════════════════════════════════════════════
   GET APP MODAL (QR Code + Link)
   ═══════════════════════════════════════════════ */
export const GetAppModal: React.FC<{ open: boolean; onClose: () => void }> = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        background: 'rgba(15, 31, 23, 0.4)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '390px',
          background: '#ffffff',
          borderRadius: '24px',
          padding: '32px 24px',
          textAlign: 'center',
          boxShadow: 'var(--shadow-xl)',
          border: '1px solid rgba(13, 155, 92, 0.15)',
          position: 'relative',
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            color: 'var(--text-3)',
            padding: '4px',
          }}
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <p style={{ fontFamily: 'var(--font-head)', fontWeight: 800, fontSize: '1.25rem', marginBottom: '4px', color: 'var(--text)' }}>
          Download VaidyaSarthi
        </p>
        <p style={{ fontSize: '0.88rem', color: 'var(--text-3)', marginBottom: '20px' }}>
          Scan QR with your phone camera
        </p>

        <div
          style={{
            background: 'var(--bg-mint)',
            borderRadius: '18px',
            padding: '16px',
            display: 'inline-block',
            marginBottom: '20px',
            border: '1px solid rgba(13, 155, 92, 0.12)',
          }}
        >
          <img
            src="/assets/playstore-qr.png"
            alt="Google Play QR Code"
            style={{ width: '160px', height: '160px', objectFit: 'contain' }}
          />
        </div>

        <p style={{ fontSize: '0.78rem', color: 'var(--text-3)', marginBottom: '14px' }}>or click below</p>

        <a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-play"
          style={{ width: '100%', justifyContent: 'center' }}
        >
          <div className="play-icon">
            <PlayStoreIcon />
          </div>
          <div className="play-label">
            <span className="sm">GET IT ON</span>
            <span className="lg">Google Play</span>
          </div>
        </a>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════
   LEGAL MODAL
   ═══════════════════════════════════════════════ */
export const LegalModal: React.FC<{ type: string | null; onClose: () => void }> = ({ type, onClose }) => {
  if (!type) return null;

  const content: Record<string, { title: string; body: React.ReactNode }> = {
    privacy: {
      title: 'Privacy Policy',
      body: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem', color: 'var(--text-2)', lineHeight: 1.6 }}>
          <p><strong>Effective Date:</strong> January 2026</p>
          <p>
            VaidyaSarthi collects professional registration credentials strictly for identity verification and community safety.
          </p>
          <p>
            We do not sell, rent, or monetize doctor or patient data to third parties.
          </p>
          <p>
            Direct Messages between healthcare practitioners are strictly ephemeral and are permanently purged after 24 hours.
          </p>
          <p>
            Contact: <a href="mailto:officialskillsociety@gmail.com" style={{ color: 'var(--brand)', fontWeight: 600 }}>officialskillsociety@gmail.com</a>
          </p>
        </div>
      ),
    },
    terms: {
      title: 'Terms of Service',
      body: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem', color: 'var(--text-2)', lineHeight: 1.6 }}>
          <p><strong>Last Updated:</strong> January 2026</p>
          <p>
            Access to VaidyaSarthi is restricted to licensed medical practitioners holding valid registrations with recognized State Medical Councils or the National Medical Commission (NMC), as well as bona fide MBBS students.
          </p>
          <p>
            All clinical tools, calculators, and discussions are for peer education and reference only and do not replace independent clinical diagnosis.
          </p>
        </div>
      ),
    },
    deletion: {
      title: 'Account & Data Deletion',
      body: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem', color: 'var(--text-2)', lineHeight: 1.6 }}>
          <p>
            You can request complete account and data deletion at any time in the app:
          </p>
          <p style={{ background: 'var(--surface-2)', padding: '8px 12px', borderRadius: '8px', fontWeight: 600 }}>
            Profile → Settings → Privacy & Security → Delete Account
          </p>
          <p>
            Alternatively, email <a href="mailto:officialskillsociety@gmail.com" style={{ color: 'var(--brand)', fontWeight: 600 }}>officialskillsociety@gmail.com</a> with subject "Account Deletion Request".
          </p>
        </div>
      ),
    },
  };

  const c = content[type];
  if (!c) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        background: 'rgba(15, 31, 23, 0.4)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '520px',
          maxHeight: '80vh',
          overflowY: 'auto',
          background: '#ffffff',
          borderRadius: '22px',
          padding: '30px',
          boxShadow: 'var(--shadow-xl)',
          border: '1px solid rgba(13, 155, 92, 0.12)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '1.2rem', fontWeight: 800, color: 'var(--text)' }}>
            {c.title}
          </h3>
          <button onClick={onClose} style={{ color: 'var(--text-3)', padding: '4px' }} aria-label="Close">
            <X size={18} />
          </button>
        </div>
        {c.body}
      </div>
    </div>
  );
};
