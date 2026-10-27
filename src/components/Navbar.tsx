import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Logo } from './Logo';
import { getWhatsAppUrl } from '../constants/contact';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Especialidades', href: '#especialidades' },
    { name: '¿Es tu caso?', href: '#es-tu-caso' },
    { name: 'Contacto', href: '#contacto' },
    { name: 'El Estudio', href: '#el-estudio' },
    { name: 'Proceso', href: '#proceso' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 glass-nav border-b border-[#CBD5E1]/10 ${
          isScrolled ? 'h-[56px] shadow-lg shadow-[#081627]/40' : 'h-[70px]'
        }`}
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        {/* Brand Logo & Name (Visible on both mobile and desktop) */}
        <a href="#inicio" className="flex items-center gap-2.5 sm:gap-3 group transition-transform duration-200 hover:scale-[1.02]">
          <Logo size={isScrolled ? 32 : 40} />
          <div className="flex flex-col justify-center">
            <span className="font-serif-brand font-bold text-sm sm:text-base lg:text-xl text-silver-metallic tracking-wider uppercase leading-none drop-shadow-md">
              LEANDRO RODRÍGUEZ
            </span>
            <span className="font-serif-brand text-[9px] sm:text-[10px] lg:text-[11px] text-[#CBD5E1] tracking-[0.25em] uppercase mt-1 opacity-90">
              ABOGADO
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-sm font-medium text-[#CBD5E1] hover:text-[#F1F5F9] transition-colors duration-200 py-1 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-gradient-to-r from-[#CBD5E1] to-[#F1F5F9] transition-all duration-300 group-hover:w-full group-hover:left-0" />
            </a>
          ))}
        </nav>

        {/* Right CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg border border-[#CBD5E1]/60 text-[#F1F5F9] hover:bg-[#CBD5E1]/10 hover:border-[#F1F5F9] transition-all duration-300 shadow-sm active:scale-95"
          >
            <i className="fa-brands fa-whatsapp text-emerald-400 text-sm" />
            <span>Consulta Urgente</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setMobileMenuOpen((prev) => !prev);
            }}
            aria-label={mobileMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            aria-expanded={mobileMenuOpen}
            className="lg:hidden w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg text-[#CBD5E1] hover:text-white hover:bg-[#CBD5E1]/10 focus:outline-none cursor-pointer transition-colors"
          >
            <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-xl transition-transform duration-300`} />
          </button>
        </div>
      </div>
    </header>

    {/* Mobile Menu Overlay - Rendered in document.body via Portal to escape header containing block */}
    {mounted && mobileMenuOpen && typeof document !== 'undefined' && createPortal(
      <div
        id="mobile-menu-overlay"
        className="lg:hidden fixed inset-0 z-[999999] w-screen h-screen min-h-screen flex flex-col overflow-y-auto"
        style={{
          backgroundColor: '#0B1E3D', // 100% Solid Navy Blue - absolutely no bleed-through
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 999999,
        }}
      >
        {/* Menu Top Bar */}
        <div className="h-[70px] px-4 sm:px-6 flex items-center justify-between border-b border-[#CBD5E1]/20 shrink-0 bg-[#0B1E3D]">
          <a
            href="#inicio"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5 sm:gap-3"
          >
            <Logo size={36} />
            <div className="flex flex-col justify-center">
              <span className="font-serif-brand font-bold text-sm sm:text-base text-silver-metallic tracking-wider uppercase leading-none drop-shadow-md">
                LEANDRO RODRÍGUEZ
              </span>
              <span className="font-serif-brand text-[9px] sm:text-[10px] text-[#CBD5E1] tracking-[0.25em] uppercase mt-1 opacity-90">
                ABOGADO
              </span>
            </div>
          </a>

          {/* High-visibility Close Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Cerrar menú"
            className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-lg border border-[#CBD5E1]/30 bg-[#081627] flex items-center justify-center text-[#F1F5F9] hover:text-white hover:border-white transition-colors cursor-pointer"
          >
            <i className="fa-solid fa-xmark text-xl" />
          </button>
        </div>

        {/* Menu Body Content (Solid Navy, completely covering background) */}
        <div className="flex-1 px-6 py-6 flex flex-col justify-between space-y-6 bg-[#0B1E3D]">
          {/* Specialty Badge Pill */}
          <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-full border border-[#CBD5E1]/30 bg-[#081627] text-xs font-medium text-[#CBD5E1] shadow-sm w-full max-w-sm mx-auto">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
            <span>Defensa Penal · Familia · Laboral</span>
          </div>

          {/* Navigation Links with high contrast white text */}
          <nav className="flex flex-col divide-y divide-[#CBD5E1]/15">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-serif-brand font-medium text-[#F8FAFC] hover:text-white py-3.5 flex items-center justify-between transition-colors min-h-[48px]"
              >
                <span>{link.name}</span>
                <i className="fa-solid fa-chevron-right text-xs text-[#CBD5E1]/60" />
              </a>
            ))}
          </nav>

          {/* CTA Action Buttons */}
          <div className="flex flex-col space-y-3 pt-2">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-3 py-3.5 px-6 rounded-lg bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-bold text-sm shadow-lg shadow-black/40 hover:from-emerald-500 hover:to-emerald-400 active:scale-95 transition-all"
            >
              <i className="fa-brands fa-whatsapp text-xl" />
              <span>Escribinos por WhatsApp</span>
            </a>

            <a
              href="#agendar"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-lg border border-[#CBD5E1]/40 bg-[#081627] text-[#F8FAFC] font-semibold text-sm shadow-md active:scale-95 hover:bg-[#18335E]/60 transition-all"
            >
              <i className="fa-regular fa-calendar-check text-base text-[#CBD5E1]" />
              <span>Agendar Consulta</span>
            </a>
          </div>

          {/* Location & Trust Footer */}
          <div className="pt-4 border-t border-[#CBD5E1]/15 flex flex-col items-center text-center space-y-1.5 text-xs text-[#CBD5E1]">
            <div className="flex items-center gap-2 text-[#CBD5E1]">
              <i className="fa-solid fa-location-dot text-red-400 text-xs" />
              <span>Cofico, Córdoba</span>
            </div>
            <div className="flex items-center gap-1.5 text-[#94A3B8]">
              <i className="fa-solid fa-shield-halved text-xs text-emerald-400" />
              <span>Atención confidencial en todo el territorio nacional</span>
            </div>
          </div>
        </div>
      </div>,
      document.body
    )}
    </>
  );
};
