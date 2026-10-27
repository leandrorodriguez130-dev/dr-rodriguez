import React, { useEffect, useRef } from 'react';
import perfilPhoto from '../assets/PERFIL.png';
import heroVideo from '../assets/video/video-loop.mp4';
import { getWhatsAppUrl } from '../constants/contact';

export const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Strict DOM properties needed for iOS Safari & Android mobile autoplay
    video.muted = true;
    video.defaultMuted = true;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        const handleUserGesture = () => {
          video.play().catch(() => {});
        };
        window.addEventListener('touchstart', handleUserGesture, { passive: true, once: true });
        window.addEventListener('scroll', handleUserGesture, { passive: true, once: true });
      });
    }
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen pt-24 pb-16 flex items-center justify-center bg-[#0B1E3D] overflow-hidden border-b border-[#CBD5E1]/10 perspective-container"
    >
      {/* Hero Looping Background Video (All viewports) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105 filter brightness-95 contrast-110 saturate-75"
          poster="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1920&q=80"
        >
          <source src={heroVideo} type="video/mp4" />
          <source src="https://cdn.pixabay.com/video/2020/05/25/40149-424843073_large.mp4" type="video/mp4" />
        </video>

        {/* Asymmetric Gradient Scrim in Navy Blue (#0B1E3D):
            Lighter directional scrim: ~38% on the left (text) down to ~10% on the right (emblem) */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, rgba(11, 30, 61, 0.38) 0%, rgba(11, 30, 61, 0.24) 48%, rgba(11, 30, 61, 0.08) 100%)',
          }}
        />

        {/* Top/Bottom Softening Gradients - Reduced opacity by half */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#0B1E3D]/40 via-transparent to-[#0B1E3D]/50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left Column Container: 'contents' on mobile so children participate in parent flex order; flex-col grid item on lg */}
          <div className="contents lg:flex lg:flex-col lg:col-span-7 lg:items-start lg:space-y-6 text-left">
            
            {/* 1. TOP COHESIVE GROUP: Badge + Headline + Subtitle phrase (Order 1 on mobile & desktop) */}
            <div className="order-1 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left w-full">
              {/* Pre-title badge pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#CBD5E1]/40 bg-[#081627]/80 backdrop-blur-md text-xs font-medium text-[#CBD5E1] shadow-lg shadow-black/40">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
                {/* Mobile Short Version */}
                <span className="sm:hidden">
                  Defensa Penal · Familia · Laboral
                </span>
                {/* Desktop Full Version */}
                <span className="hidden sm:inline">
                  Defensa Penal & Ciberdelitos · Derecho del Consumidor · Familia · Laboral
                </span>
              </div>

              {/* Main Headline H1 (Hidden on mobile to avoid redundancy with navbar, visible on desktop lg+) */}
              <div className="hidden lg:flex flex-col w-full items-start mt-5">
                <h1 
                  className="font-serif-brand text-5xl md:text-6xl font-bold text-white tracking-wider leading-none"
                  style={{
                    textShadow: '0 4px 24px rgba(0, 0, 0, 0.95), 0 2px 8px rgba(0, 0, 0, 0.9), 0 1px 3px rgba(0, 0, 0, 1), 0 0 35px rgba(11, 30, 61, 0.95)',
                  }}
                >
                  LEANDRO RODRÍGUEZ
                </h1>
                <div className="flex items-center justify-start gap-3 my-2.5 w-full max-w-md">
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-[#CBD5E1]/60 via-[#F1F5F9] to-transparent shadow-sm" />
                  <span 
                    className="font-serif-brand text-base text-[#CBD5E1] tracking-[0.3em] uppercase font-normal"
                    style={{
                      textShadow: '0 2px 10px rgba(0, 0, 0, 0.9), 0 1px 3px rgba(0, 0, 0, 0.8)',
                    }}
                  >
                    ABOGADO
                  </span>
                  <div className="h-[1px] flex-1 bg-gradient-to-l from-[#CBD5E1]/60 via-[#F1F5F9] to-transparent shadow-sm" />
                </div>
              </div>

              {/* Subtitle phrase: Refined editorial pull-quote typography with framing lines */}
              <div className="mt-7 sm:mt-8 lg:mt-4 w-full flex flex-col items-center lg:items-start max-w-2xl">
                {/* Decorative framing line above */}
                <div className="flex items-center justify-center lg:justify-start w-full max-w-xs sm:max-w-sm my-1">
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#CBD5E1]/40 to-transparent lg:from-[#CBD5E1]/50 lg:via-[#CBD5E1]/30 lg:to-transparent" />
                </div>

                <p 
                  className="font-serif-brand font-light italic text-xl sm:text-2xl lg:text-[1.65rem] text-[#F8FAFC] tracking-wide leading-relaxed text-center lg:text-left px-3 sm:px-0 py-1"
                  style={{
                    textShadow: '0 4px 20px rgba(0, 0, 0, 0.95), 0 2px 6px rgba(0, 0, 0, 0.9), 0 0 25px rgba(11, 30, 61, 0.95)',
                  }}
                >
                  Tu caso no es un expediente más — es tu vida, tu libertad, tu familia.
                </p>

                {/* Decorative framing line below */}
                <div className="flex items-center justify-center lg:justify-start w-full max-w-xs sm:max-w-sm my-1">
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#CBD5E1]/40 to-transparent lg:from-[#CBD5E1]/50 lg:via-[#CBD5E1]/30 lg:to-transparent" />
                </div>
              </div>
            </div>

            {/* 2. CTA BUTTONS (Compact proportionate size: reduced padding, smaller font, elegant max-width) */}
            <div className="order-2 lg:order-2 mt-8 sm:mt-10 lg:mt-4 w-full max-w-[240px] sm:max-w-none px-1 sm:px-0 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2.5 sm:gap-3 mx-auto lg:mx-0">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg bg-gradient-to-r from-[#F1F5F9] via-[#CBD5E1] to-[#E2E8F0] text-[#0B1E3D] font-bold text-[11px] sm:text-xs tracking-wide shadow-md shadow-black/40 hover:shadow-lg hover:scale-[1.02] active:scale-95 transition-all duration-300 group"
              >
                <i className="fa-brands fa-whatsapp text-sm sm:text-base text-emerald-700 group-hover:scale-110 transition-transform" />
                <span>Escribinos por WhatsApp</span>
              </a>

              {/* Outline Button with subtle backdrop-filter blur for guaranteed legibility over video */}
              <a
                href="#agendar"
                className="w-full sm:w-auto relative inline-flex items-center justify-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg border border-[#CBD5E1]/50 bg-[#0B1E3D]/50 text-[#F1F5F9] font-semibold text-[11px] sm:text-xs tracking-wide shadow-sm hover:bg-[#18335E]/80 hover:border-[#F1F5F9] hover:shadow-md transition-all duration-300 active:scale-95 group overflow-hidden"
                style={{
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                }}
              >
                <i className="fa-regular fa-calendar-check text-xs sm:text-sm text-[#CBD5E1] group-hover:text-amber-300 transition-colors" />
                <span>Agendar Consulta</span>
              </a>
            </div>

            {/* 4. TRUST INDICATORS ROW (Order 4 on mobile, directly below Logo Card with NO background box - video directly visible) */}
            <div 
              className="order-4 lg:order-3 w-full max-w-md lg:max-w-none px-4 sm:px-0 mt-4 sm:mt-5 lg:mt-6"
            >
              <div
                className="py-1 px-2 lg:py-3 lg:px-0 bg-transparent border-0 lg:border-t lg:border-[#CBD5E1]/20 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 text-[11px] sm:text-xs text-[#F1F5F9] text-center sm:text-left"
              >
                <div 
                  className="flex items-center justify-center sm:justify-start gap-2"
                  style={{
                    textShadow: '0 2px 10px rgba(0, 0, 0, 0.95), 0 1px 3px rgba(0, 0, 0, 0.85), 0 0 12px rgba(11, 30, 61, 0.9)',
                  }}
                >
                  <i 
                    className="fa-solid fa-lock text-[#E2E8F0] metallic-icon-engraved text-xs shrink-0" 
                    style={{ filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.95)) drop-shadow(0 1px 2px rgba(0,0,0,0.85))' }}
                  />
                  <span>Consulta 100% confidencial</span>
                </div>
                <div 
                  className="flex items-center justify-center sm:justify-start gap-2"
                  style={{
                    textShadow: '0 2px 10px rgba(0, 0, 0, 0.95), 0 1px 3px rgba(0, 0, 0, 0.85), 0 0 12px rgba(11, 30, 61, 0.9)',
                  }}
                >
                  <i 
                    className="fa-solid fa-bolt text-[#E2E8F0] metallic-icon-engraved text-xs shrink-0" 
                    style={{ filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.95)) drop-shadow(0 1px 2px rgba(0,0,0,0.85))' }}
                  />
                  <span>Respuesta inmediata</span>
                </div>
                <div 
                  className="flex items-center justify-center sm:justify-start gap-2"
                  style={{
                    textShadow: '0 2px 10px rgba(0, 0, 0, 0.95), 0 1px 3px rgba(0, 0, 0, 0.85), 0 0 12px rgba(11, 30, 61, 0.9)',
                  }}
                >
                  <i 
                    className="fa-solid fa-location-dot text-[#E2E8F0] metallic-icon-engraved text-xs shrink-0" 
                    style={{ filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.95)) drop-shadow(0 1px 2px rgba(0,0,0,0.85))' }}
                  />
                  <span>Córdoba · Atención Nacional</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Container: 'contents' on mobile so photo participates in parent flex order; flex-col grid item on lg */}
          <div className="contents lg:flex lg:flex-col lg:col-span-5 lg:items-center lg:justify-center select-none">
            {/* 3. PORTRAIT PHOTO: Clean studio frame, neutral shadow, no navy glow or halo */}
            <div className="order-3 lg:order-1 mt-6 lg:mt-0 w-[80vw] max-w-[320px] lg:w-[360px] lg:max-w-[380px] aspect-[4/5] rounded-[16px] overflow-hidden border border-[#CBD5E1]/25 shadow-[0_20px_50px_rgba(0,0,0,0.45)] mx-auto flex-shrink-0">
              <img
                id="hero-emblem-img"
                src={perfilPhoto}
                alt="Leandro Rodríguez Abogado"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Location Pill - Hidden on mobile, visible only on lg desktop screens */}
            <div className="order-5 lg:order-2 hidden lg:inline-flex mt-6 items-center gap-2.5 px-4 py-2 rounded-full bg-[#081627]/90 border border-[#CBD5E1]/40 text-xs font-medium text-[#F1F5F9] shadow-xl backdrop-blur-sm">
              <i className="fa-solid fa-location-dot text-red-400 text-xs" />
              <span>Cofico, Córdoba</span>
            </div>
          </div>

        </div>
      </div>

      {/* Animated Bouncing Scroll Chevron */}
      <a
        href="#especialidades"
        aria-label="Scroll to next section"
        className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 text-[#CBD5E1]/60 hover:text-[#F1F5F9] transition-colors duration-300 animate-bounce p-2 z-10"
      >
        <i className="fa-solid fa-chevron-down text-xl" />
      </a>
    </section>
  );
};

