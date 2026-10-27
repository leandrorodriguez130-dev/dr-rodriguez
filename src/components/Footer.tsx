import React from 'react';
import { Logo } from './Logo';
import { getWhatsAppUrl, WHATSAPP_DISPLAY, LINKEDIN_URL } from '../constants/contact';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#051020] text-[#CBD5E1] pt-16 border-t border-gradient-to-r from-transparent via-[#CBD5E1]/40 to-transparent relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* COL 1: Brand */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <Logo size={44} />
              <div className="flex flex-col">
                <span className="font-serif-brand font-semibold text-xl text-silver-metallic tracking-wider uppercase">
                  LEANDRO RODRÍGUEZ
                </span>
                <span className="font-serif-brand text-xs text-[#CBD5E1] tracking-[0.25em] uppercase">
                  ABOGADO
                </span>
              </div>
            </div>

            <p className="text-xs text-[#CBD5E1]/80 leading-relaxed font-light max-w-md pt-2">
              Defensa Penal & Ciberdelitos · Derecho del Consumidor · Civil y Familia · Laboral
            </p>

            <p className="text-xs text-[#CBD5E1]/60 italic font-serif-brand">
              "Tu caso no es un expediente más — es tu vida, tu libertad, tu familia."
            </p>
          </div>

          {/* COL 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif-brand text-sm font-bold text-[#F1F5F9] tracking-wider uppercase mb-4">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs">
              {['Inicio', 'Especialidades', '¿Es tu caso?', 'Contacto', 'El Estudio', 'Proceso', 'Testimonios'].map(
                (item, idx) => {
                  const hrefs = ['#inicio', '#especialidades', '#es-tu-caso', '#contacto', '#el-estudio', '#proceso', '#testimonios'];
                  return (
                    <li key={idx}>
                      <a
                        href={hrefs[idx]}
                        className="hover:text-white transition-colors duration-200 inline-block py-0.5"
                      >
                        {item}
                      </a>
                    </li>
                  );
                }
              )}
            </ul>
          </div>

          {/* COL 3: Contact Info */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-serif-brand text-sm font-bold text-[#F1F5F9] tracking-wider uppercase mb-4">
              Estudio Jurídico
            </h4>
            <ul className="space-y-3 text-xs text-[#CBD5E1]/90">
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-location-dot text-red-400 text-sm mt-0.5" />
                <span>Cofico, Córdoba</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-brands fa-whatsapp text-emerald-400 text-sm" />
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-regular fa-envelope text-[#CBD5E1] text-sm" />
                <a href="mailto:dr.rodriguez.judicial@gmail.com" className="hover:text-white transition-colors">
                  dr.rodriguez.judicial@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-brands fa-linkedin-in text-[#CBD5E1] text-sm" />
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn de Leandro Rodríguez"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* BOTTOM BAR (Silver Gradient Background) */}
      <div className="bg-gradient-to-r from-[#64748B] via-[#E2E8F0] to-[#64748B] text-[#051020] py-3 text-center text-xs font-semibold tracking-wide shadow-inner">
        <div className="max-w-7xl mx-auto px-4">
          © 2026 Leandro Rodríguez — Abogado. Todos los derechos reservados. Mat. Prof. 1-45450
        </div>
      </div>
    </footer>
  );
};
