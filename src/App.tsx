import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Header,
  Hero,
  AppShowcase,
  FeaturesGrid,
  Trust,
  FAQ,
  FinalCTA,
  Footer,
  MobileSticky,
  GetAppModal,
  LegalModal,
} from './components/Sections';

gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  const [appModalOpen, setAppModalOpen] = useState(false);
  const [legalType, setLegalType] = useState<string | null>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  // GSAP scroll animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Standard 2D to 3D lift reveals
      gsap.utils.toArray<HTMLElement>('.reveal').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 32 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              once: true,
            },
          }
        );
      });

      // 3D perspective reveals
      gsap.utils.toArray<HTMLElement>('.reveal-3d').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 44, rotateX: 6 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              once: true,
            },
          }
        );
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef} style={{ position: 'relative' }}>
      <Header onGetApp={() => setAppModalOpen(true)} />

      <main>
        <Hero onScanQR={() => setAppModalOpen(true)} />
        <AppShowcase />
        <FeaturesGrid />
        <Trust />
        <FAQ />
        <FinalCTA onScanQR={() => setAppModalOpen(true)} />
      </main>

      <Footer onLegal={(t) => setLegalType(t)} />
      <MobileSticky />
      <GetAppModal open={appModalOpen} onClose={() => setAppModalOpen(false)} />
      <LegalModal type={legalType} onClose={() => setLegalType(null)} />
    </div>
  );
};

export default App;
