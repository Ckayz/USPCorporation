// src/components/ParallaxSection.tsx
import React, { useEffect, useState } from 'react';

interface ParallaxSectionProps {
  children: React.ReactNode;
  bgUrl?: string;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ children, bgUrl }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      style={{
        backgroundImage: bgUrl ? `url(${bgUrl})` : undefined,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: `center ${offset * 0.3}px`, // Moves background as you scroll
        width: '100%',
        minHeight: '100vh',
        transition: 'background-position 0.2s',
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxSection;
