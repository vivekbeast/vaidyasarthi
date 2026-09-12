import React, { useEffect, useRef } from 'react';
import lottie, { AnimationItem } from 'lottie-web';

interface LottieProps {
  animationData?: any;
  animationPath?: string;
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const LottieAnimation: React.FC<LottieProps> = ({
  animationData,
  animationPath = '/assets/medical-pulse.json',
  loop = true,
  autoplay = true,
  className = '',
  style = {},
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<AnimationItem | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clean up existing instance
    if (animRef.current) {
      animRef.current.destroy();
    }

    try {
      animRef.current = lottie.loadAnimation({
        container: containerRef.current,
        renderer: 'svg',
        loop,
        autoplay,
        path: animationData ? undefined : animationPath,
        animationData: animationData,
      });
    } catch (e) {
      console.warn('Lottie load issue:', e);
    }

    return () => {
      if (animRef.current) {
        animRef.current.destroy();
      }
    };
  }, [animationData, animationPath, loop, autoplay]);

  return <div ref={containerRef} className={className} style={{ width: '100%', height: '100%', ...style }} />;
};
