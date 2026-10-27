import React from 'react';
import { CustomCalendar } from './CustomCalendar';
import { SectionWatermark } from './SectionWatermark';

export const Contacto: React.FC = () => {
  return (
    <section id="contacto" className="py-24 relief-bg border-b border-[#CBD5E1]/10 relative overflow-hidden">
      {/* Large Asymmetric Embossed Watermark Motif (Judge's Gavel bleeding off bottom-right) */}
      <SectionWatermark motif="gavel" variant="navy" position="bottom-right" className="opacity-95" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold tracking-widest text-[#CBD5E1] uppercase">
            CONTACTO DIRECTO
          </span>
          <h2 className="font-serif-brand text-3xl sm:text-4xl lg:text-5xl font-bold text-silver-metallic uppercase tracking-wider">
            Hablemos de tu caso
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-transparent via-[#CBD5E1] to-transparent mx-auto rounded-full" />
          <p className="text-[#CBD5E1] text-base sm:text-lg font-light pt-2">
            Consulta diagnóstica gratuita, confidencial y sin compromiso.
          </p>
        </div>

        {/* Dedicated Calendar Block (#agendar) */}
        <div
          id="agendar"
          className="max-w-5xl mx-auto p-6 sm:p-10 rounded-2xl bg-[#081627]/80 border-2 border-[#CBD5E1]/40 shadow-2xl backdrop-blur-xl relative overflow-hidden"
        >
          {/* Subtle Metallic Top Highlight & Radial Glow */}
          <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#CBD5E1]/80 to-transparent absolute top-0 left-0" />
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-[#0B1E3D]/40 rounded-full blur-3xl pointer-events-none" />

          {/* Interactive Custom Calendar */}
          <CustomCalendar />
        </div>
      </div>
    </section>
  );
};
