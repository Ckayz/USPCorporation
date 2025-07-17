import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';


interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // hide the intro after 2s (0.8s delay + 1.2s slide)
    const timer = setTimeout(() => setShowIntro(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen relative">
    

      {/* your normal layout, hidden until the intro is done */}
      {!showIntro && (
        <>
          <Header />
          <main className="flex-grow pt-16">{children}</main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Layout;
