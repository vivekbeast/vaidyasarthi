import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import {
  ArrowRight,
  Bell,
  ChevronDown,
  Clock3,
  FileCheck2,
  MessageCircle,
  QrCode,
  ScanFace,
  ShieldCheck,
  Stethoscope,
  UserRound,
  Users,
} from 'lucide-react';
import { Medical3DCanvas } from './Medical3DCanvas';
import { PLAY_STORE_URL, Phone, PlayButton } from './brand';

/* Pro rules, mirrored from the backend (users/models.py + users/views.py) */
const PRO = { join: 30, perPost: 1, streakBonus: 30, streakLength: 30, perReferral: 60 };

/* Shown under every download CTA so the first thing people learn about Pro is the gift */
const OfferLine: React.FC = () => (
  <p className="offer-line">
    <strong>Your first {PRO.join} days of Pro are on us.</strong> No card needed. <a href="#pro">Keep it going</a>
  </p>
);

/* ═══════════════════════════════════════════════
   HERO
   ═══════════════════════════════════════════════ */
const HERO_SCREENS = [
  { src: '/assets/screen-community.jpg', alt: 'Postings community feed', title: 'Discuss real cases' },
  { src: '/assets/screen-clinical.jpg', alt: 'Postings Clinical Hub', title: 'Calculate at the bedside' },
  { src: '/assets/screen-messages.jpg', alt: 'Postings messages', title: 'Consult a colleague' },
  { src: '/assets/screen-profile.jpg', alt: 'Verified doctor profile', title: 'Show who you are' },
];

export const Hero: React.FC<{ onScanQR: () => void }> = ({ onScanQR }) => {
  const areaRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((p) => (p + 1) % HERO_SCREENS.length), 3800);
    return () => clearInterval(t);
  }, [active]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        phoneRef.current,
        { y: 60, scale: 0.92, opacity: 0, rotateX: 8 },
        { y: 0, scale: 1, opacity: 1, rotateX: 0, duration: 1, ease: 'power3.out', delay: 0.15 }
      );
      gsap.fromTo(
        '.hero-copy > *',
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out', stagger: 0.08 }
      );
    });
    return () => ctx.revert();
  }, []);

  // Gentle tilt toward the cursor on desktop
  useEffect(() => {
    const el = areaRef.current;
    if (!el || window.innerWidth < 960 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      gsap.to(phoneRef.current, {
        rotateY: ((e.clientX - r.left - r.width / 2) / r.width) * 10,
        rotateX: -((e.clientY - r.top - r.height / 2) / r.height) * 10,
        duration: 0.35,
        ease: 'power1.out',
      });
    };
    const onLeave = () => gsap.to(phoneRef.current, { rotateY: 0, rotateX: 0, duration: 0.7, ease: 'power2.out' });
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <section id="top" className="hero">
      <Medical3DCanvas density={30} />

      <div className="wrap" style={{ width: '100%' }}>
        <div className="hero-grid">
          <div className="hero-copy">
            <h1 className="hero-title">
              Take your clinical cases <span className="accent">off WhatsApp.</span>
            </h1>
            <p className="hero-sub">
              The verified network for Indian doctors and medical students. Discuss cases, consult colleagues and
              calculate at the bedside, all in one app.
            </p>
            <div className="hero-ctas">
              <PlayButton />
              <button onClick={onScanQR} className="btn btn-ghost">
                <QrCode size={17} />
                Scan QR code
              </button>
            </div>
            <OfferLine />
          </div>

          <div ref={areaRef} className="hero-device">
            <div className="hero-phones" style={{ perspective: 1200 }}>
              <Phone
                screens={[{ src: '/assets/screen-notifications.jpg', alt: 'Postings activity feed' }]}
                className="hero-phone-back"
              />
              <div className="phone-levitate hero-phone-front">
                <Phone ref={phoneRef} screens={HERO_SCREENS} active={active} />
              </div>
            </div>
            <div className="device-caption" aria-live="polite">
              <span className="cap-title">{HERO_SCREENS[active].title}</span>
              <span className="dots">
                {HERO_SCREENS.map((s, i) => (
                  <button
                    key={s.src}
                    className={`dot-btn ${i === active ? 'active' : ''}`}
                    onClick={() => setActive(i)}
                    aria-label={`Show screen ${i + 1}: ${s.title}`}
                  />
                ))}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════
   APP SHOWCASE
   ═══════════════════════════════════════════════ */
const TABS = [
  {
    id: 'community',
    label: 'Community',
    icon: <Users size={16} />,
    image: '/assets/screen-community.jpg',
    title: 'Discuss real cases.',
    desc: 'Cases, debates and questions from verified doctors, sorted by topic.',
  },
  {
    id: 'clinical',
    label: 'Clinical Hub',
    icon: <Stethoscope size={16} />,
    image: '/assets/screen-clinical.jpg',
    title: 'Calculate at the bedside.',
    desc: 'Seven calculators and your own patient records, one tap away.',
  },
  {
    id: 'messages',
    label: 'Messages',
    icon: <MessageCircle size={16} />,
    image: '/assets/screen-messages.jpg',
    title: 'Consult a colleague.',
    desc: 'Private chats and Doctor Circles that clear themselves after 24 hours.',
  },
  {
    id: 'activity',
    label: 'Activity',
    icon: <Bell size={16} />,
    image: '/assets/screen-notifications.jpg',
    title: 'Never miss a reply.',
    desc: 'Reactions, replies and requests, all in one place.',
  },
  {
    id: 'profile',
    label: 'Profile',
    icon: <UserRound size={16} />,
    image: '/assets/screen-profile.jpg',
    title: 'Show who you are.',
    desc: 'Your specialty and council registration, verified.',
  },
];

export const AppShowcase: React.FC = () => {
  const [tab, setTab] = useState(0);
  const phoneRef = useRef<HTMLDivElement>(null);
  const current = TABS[tab];

  useEffect(() => {
    if (!phoneRef.current) return;
    gsap.fromTo(
      phoneRef.current,
      { rotateY: 8, scale: 0.97, opacity: 0.6 },
      { rotateY: 0, scale: 1, opacity: 1, duration: 0.45, ease: 'power2.out' }
    );
  }, [tab]);

  return (
    <section id="showcase" className="section section-subtle">
      <div className="wrap">
        <div className="section-head reveal">
          <h2 className="section-title">One app for the whole posting.</h2>
          <p className="section-lede">Real screens. Tap through.</p>
        </div>

        <div className="tabs reveal" role="tablist" aria-label="App screens">
          {TABS.map((t, i) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={tab === i}
              className={`tab ${tab === i ? 'active' : ''}`}
              onClick={() => setTab(i)}
            >
              {t.icon}
              {t.label}
            </button>
          ))}
        </div>

        <div className="showcase-grid">
          <div className="showcase-device">
            {[-1, 0, 1].map((o) => {
              const idx = (tab + o + TABS.length) % TABS.length;
              const t = TABS[idx];
              return o === 0 ? (
                <Phone key="c" ref={phoneRef} screens={[{ src: t.image, alt: t.title }]} className="fan-center" />
              ) : (
                <button
                  key={o}
                  className={`fan-side ${o < 0 ? 'left' : 'right'}`}
                  onClick={() => setTab(idx)}
                  aria-label={`Show ${t.label}`}
                >
                  <Phone screens={[{ src: t.image, alt: '' }]} />
                </button>
              );
            })}
          </div>

          <div key={current.id} className="showcase-copy fade-in" role="tabpanel">
            <p className="showcase-num">
              0{tab + 1} / 0{TABS.length}
            </p>
            <h3 className="showcase-title">{current.title}</h3>
            <p className="showcase-desc">{current.desc}</p>
            <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Start with {PRO.join} days of Pro
              <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};



/* ═══════════════════════════════════════════════
   PRO: three plain ways to have it
   ═══════════════════════════════════════════════ */
export const Pro: React.FC = () => (
  <section id="pro" className="section section-tint">
    <div className="wrap">
      <div className="section-head reveal">
        <h2 className="section-title">
          {PRO.join} days of Pro, on us.
          <br />
          <span className="accent">Then earn more.</span>
        </h2>
        <p className="section-lede">Pro unlocks the community, messages and Doctor Circles. No card needed to start.</p>
      </div>

      <div className="pro-cards">
        <div className="pro-card reveal">
          <span className="pro-card-num">{PRO.join}</span>
          <span className="pro-card-unit">days free</span>
          <h3>Join</h3>
          <p>Your Pro starts the day you finish setting up.</p>
        </div>
        <div className="pro-card reveal">
          <span className="pro-card-num">+{PRO.perPost}</span>
          <span className="pro-card-unit">day, every day</span>
          <h3>Post a case</h3>
          <p>
            Each day you post adds a day. Hit {PRO.streakLength} days in a row for +{PRO.streakBonus} more.
          </p>
        </div>
        <div className="pro-card reveal">
          <span className="pro-card-num">+{PRO.perReferral}</span>
          <span className="pro-card-unit">days per friend</span>
          <h3>Invite a colleague</h3>
          <p>Share your code. You get {PRO.perReferral} days when they join.</p>
        </div>
      </div>

      <div className="pro-foot reveal">
        <p>
          Post daily for a month and invite one colleague:{' '}
          <strong>{PRO.join + PRO.streakLength + PRO.streakBonus + PRO.perReferral} days of Pro</strong>.
        </p>
        <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          Claim your {PRO.join} days
          <ArrowRight size={15} />
        </a>
        <span className="pro-note">Calculators, patient records and your profile never need Pro.</span>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════
   PRIVACY
   ═══════════════════════════════════════════════ */
const PRIVACY = [
  { icon: <ScanFace size={22} />, title: 'De-ID Studio', text: 'Mask names, UHIDs and faces before a scan uploads.' },
  { icon: <FileCheck2 size={22} />, title: 'Identifier check', text: 'Posts with UHIDs, Aadhaar or phone numbers are held back.' },
  { icon: <ShieldCheck size={22} />, title: 'Consent first', text: 'Every case is confirmed as de-identified and consented.' },
  { icon: <Clock3 size={22} />, title: 'Gone in 24 hours', text: 'Messages and shared scans delete themselves.' },
];

export const Privacy: React.FC = () => (
  <section id="privacy" className="section">
    <div className="wrap privacy-grid">
      <div>
        <div className="section-head left reveal">
          <h2 className="section-title">
            Share the case.
            <br />
            <span className="accent">Never the patient.</span>
          </h2>
          <p className="section-lede">Built around the NMC code of ethics and the DPDP Act, 2023.</p>
        </div>
        <div className="privacy-list">
          {PRIVACY.map((i) => (
            <div key={i.title} className="privacy-item reveal">
              {i.icon}
              <h3>{i.title}</h3>
              <p>{i.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="privacy-visual reveal">
        <Phone screens={[{ src: '/assets/screen-community.jpg', alt: 'A case tagged NMC De-Identified' }]} />
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════
   AUDIENCE
   ═══════════════════════════════════════════════ */
const PERSONAS = [
  { title: 'Interns & DMOs', text: 'Casualty nights, with seniors a message away.' },
  { title: 'Residents', text: 'Rounds, on-calls and case presentations.' },
  { title: 'Consultants', text: 'Curbside colleagues and mentor juniors.' },
  { title: 'Students & PG aspirants', text: 'Learn from real, de-identified cases.' },
];

export const Audience: React.FC = () => (
  <section className="section section-tint">
    <div className="wrap audience-grid">
      <div className="collage reveal">
        <img className="collage-back" src="/assets/photo-mentor.jpg" alt="Senior doctor mentoring a resident" loading="lazy" />
        <img className="collage-front" src="/assets/photo-resident.jpg" alt="Resident studying patient notes" loading="lazy" />
      </div>
      <div>
        <div className="section-head left reveal">
          <h2 className="section-title">Built for every posting.</h2>
        </div>
        <div className="persona-grid">
          {PERSONAS.map((p) => (
            <div key={p.title} className="persona reveal">
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════
   VERIFICATION
   ═══════════════════════════════════════════════ */
const STEPS = [
  { title: 'Install', text: 'Sign in with Google or your mobile number.' },
  { title: 'Add credentials', text: 'Council registration, or college ID for students.' },
  { title: 'Start right away', text: 'Use the app while we review.' },
  { title: 'Get verified', text: 'Your profile shows the verified mark.' },
];

export const Verification: React.FC = () => (
  <section id="verification" className="section section-subtle">
    <div className="wrap">
      <div className="section-head reveal">
        <h2 className="section-title">Verified by design.</h2>
        <p className="section-lede">Every member is checked against council or college records.</p>
      </div>
      <div className="steps">
        {STEPS.map((s, i) => (
          <div key={s.title} className="step reveal">
            <div className="step-num">0{i + 1}</div>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════
   FAQ
   ═══════════════════════════════════════════════ */
const FAQS = [
  {
    q: 'Who can join?',
    a: 'Doctors registered with the NMC or a State Medical Council, including interns and residents, and students at recognised medical colleges.',
  },
  {
    q: 'How does Pro work?',
    a: `Pro is a paid plan that unlocks the community, messages and Doctor Circles. Every new member gets ${PRO.join} days of Pro on joining. Calculators, patient records and your profile never need Pro.`,
  },
  {
    q: 'How do I earn more Pro days?',
    a: `Post a case each day for +${PRO.perPost} day, finish a ${PRO.streakLength}-day streak for +${PRO.streakBonus}, and get +${PRO.perReferral} for every colleague who joins with your code.`,
  },
  {
    q: 'How is verification done?',
    a: 'Add your council registration, or college ID if you are a student. You can use the app while our team reviews it.',
  },
  {
    q: 'How is patient privacy protected?',
    a: 'Images are de-identified before upload, text is checked for identifiers, and messages delete after 24 hours.',
  },
  {
    q: 'Is there an iPhone app?',
    a: 'Postings is on Android for now (8.0 and above).',
  },
  {
    q: 'How do I delete my account?',
    a: 'Go to Profile → Settings → Delete Account, or email officialskillsociety@gmail.com.',
  },
];

export const FAQ: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="faq" className="section section-subtle">
      <div className="wrap">
        <div className="section-head reveal">
          <h2 className="section-title">Questions.</h2>
        </div>
        <div className="faq-list reveal">
          {FAQS.map((f, i) => (
            <div key={f.q} className={`faq-item ${open === i ? 'open' : ''}`}>
              <button
                className="faq-q"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                aria-controls={`faq-${i}`}
              >
                <span>{f.q}</span>
                <ChevronDown size={18} />
              </button>
              <div className="faq-a" id={`faq-${i}`} role="region">
                <div>
                  <p>{f.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════
   FINAL CTA
   ═══════════════════════════════════════════════ */
export const FinalCTA: React.FC<{ onScanQR: () => void }> = ({ onScanQR }) => (
  <section className="section">
    <div className="wrap">
      <div className="cta-card reveal">
        <div className="cta-copy">
          <h2 className="cta-title">
            Medicine is a conversation.
            <br />
            <span className="accent">Join it.</span>
          </h2>
          <p className="cta-text">Verify once, then discuss cases with people who understand the work.</p>
          <div className="cta-actions">
            <PlayButton />
            <button onClick={onScanQR} className="btn btn-ghost">
              <QrCode size={17} />
              Scan QR code
            </button>
          </div>
          <OfferLine />
        </div>
        <div className="cta-phones">
          <Phone screens={[{ src: '/assets/screen-notifications.jpg', alt: 'Postings activity feed' }]} className="cta-phone-back" />
          <Phone screens={[{ src: '/assets/screen-community.jpg', alt: 'Postings community feed' }]} className="cta-phone-front" />
        </div>
      </div>
    </div>
  </section>
);
