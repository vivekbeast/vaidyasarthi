import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Header, Footer, MobileSticky, GetAppModal, LegalModal } from './components/Chrome';
import {
  Hero,
  AppShowcase,
  Features,
  Pro,
  Privacy,
  Audience,
  Verification,
  FAQ,
  FinalCTA,
} from './components/Sections';

const App: React.FC = () => {
  const [appModalOpen, setAppModalOpen] = useState(false);
  const [legalType, setLegalType] = useState<string | null>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  // Scroll-triggered reveals
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.reveal').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 90%', once: true },
          }
        );
      });
    }, mainRef);
    return () => ctx.revert();
  }, []);

  const openApp = () => setAppModalOpen(true);

  return (
    <div ref={mainRef}>
      <Header onGetApp={openApp} />

      <main>
        <Hero onScanQR={openApp} />
        <AppShowcase />
        <Features />
        <Pro />
        <Privacy />
        <Audience />
        <Verification />
        <FAQ />
        <FinalCTA onScanQR={openApp} />
      </main>

      <Footer onLegal={setLegalType} />
      <MobileSticky />
      <GetAppModal open={appModalOpen} onClose={() => setAppModalOpen(false)} />
      <LegalModal type={legalType} onClose={() => setLegalType(null)} />
    </div>
  );
};

export default App;
