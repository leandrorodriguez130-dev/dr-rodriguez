import React, { useEffect, useState } from 'react';

export const CurtainReveal: React.FC = () => {
  const [opened, setOpened] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpened(true);
    }, 150);

    const removeTimer = setTimeout(() => {
      setRemoved(true);
    }, 1150);

    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (removed) return null;

  return (
    <div className="fixed inset-0 z-[10000] pointer-events-none flex">
      {/* Left Curtain Panel */}
      <div
        className={`w-1/2 h-full bg-[#081627] border-r border-[#CBD5E1]/20 transition-transform duration-1000 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          opened ? '-translate-x-full' : 'translate-x-0'
        }`}
      />
      {/* Right Curtain Panel */}
      <div
        className={`w-1/2 h-full bg-[#081627] border-l border-[#CBD5E1]/20 transition-transform duration-1000 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          opened ? 'translate-x-full' : 'translate-x-0'
        }`}
      />
    </div>
  );
};
