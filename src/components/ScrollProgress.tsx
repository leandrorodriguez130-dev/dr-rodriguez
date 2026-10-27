import React, { useEffect, useState } from 'react';

export const ScrollProgress: React.FC = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollPercentage(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top 2px Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[2.5px] bg-[#081627]/40 z-[1001] pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-[#CBD5E1] via-[#F1F5F9] to-emerald-400 transition-all duration-150 ease-out"
          style={{ width: `${scrollPercentage}%` }}
        />
      </div>

      {/* Persistent Ambient Floating 3D Decorative Parallax Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden hidden md:block">
        {/* Subtle Grid Pattern Overlay (2% opacity) */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(226,232,240,0.8) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />

        {/* Floating Ring (Parallax layer) */}
        <div
          className="absolute top-[30%] left-[5%] w-16 h-16 rounded-full border border-[#CBD5E1]/10 opacity-40 transition-transform duration-75"
          style={{ transform: `translateY(${scrollPercentage * 1.5}px)` }}
        />

        {/* Floating Dots */}
        <div
          className="absolute top-[60%] right-[8%] w-3 h-3 rounded-full bg-[#CBD5E1]/20 transition-transform duration-75"
          style={{ transform: `translateY(${-scrollPercentage * 1.2}px)` }}
        />

        {/* Floating Scale Silhouette */}
        <div
          className="absolute top-[80%] left-[3%] text-[#CBD5E1]/5 text-5xl transition-transform duration-75"
          style={{ transform: `translateY(${scrollPercentage * 0.8}px) rotate(10deg)` }}
        >
          <i className="fa-solid fa-scale-balanced" />
        </div>
      </div>
    </>
  );
};
