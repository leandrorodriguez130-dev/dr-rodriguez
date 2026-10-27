import React from 'react';
import { getWhatsAppUrl } from '../constants/contact';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl = getWhatsAppUrl();

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacto directo por WhatsApp"
      className="fixed bottom-6 right-6 z-[9999] w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group hover:rotate-12"
      style={{
        boxShadow: '0 8px 25px rgba(16, 185, 129, 0.4)',
      }}
    >
      <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-75 animate-ping pointer-events-none" />
      <i className="fa-brands fa-whatsapp text-3xl relative z-10" />

      {/* Tooltip on Hover */}
      <span className="absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-[#081627] text-white text-xs font-medium whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-[#CBD5E1]/20">
        ¿Hablamos por WhatsApp?
      </span>
    </a>
  );
};
