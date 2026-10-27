import React from 'react';
import { SectionWatermark } from './SectionWatermark';
import completoPhoto from '../assets/completo.png';
import { LINKEDIN_URL } from '../constants/contact';

export const ElEstudio: React.FC = () => {
  const badges = [
    { icon: 'fa-scale-balanced', label: 'Defensa Penal & Ciberdelitos' },
    { icon: 'fa-shield-halved', label: 'Derecho del Consumidor' },
    { icon: 'fa-people-roof', label: 'Civil, Familia y Sucesiones' },
    { icon: 'fa-briefcase', label: 'Derecho Laboral y ART' },
    { icon: 'fa-location-dot', label: 'Córdoba · Atención Nacional' },
  ];

  return (
    <section id="el-estudio" className="py-24 relief-bg border-b border-[#CBD5E1]/10 relative overflow-hidden">
      {/* Large Asymmetric Embossed Watermark Motif (Justice Scale bleeding off top-right) */}
      <SectionWatermark motif="scale" variant="navy" position="top-right" className="opacity-95" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold tracking-widest text-[#CBD5E1] uppercase">
            CONOCÉ MÁS SOBRE LA FIRMA
          </span>
          <h2 className="font-serif-brand text-3xl sm:text-4xl lg:text-5xl font-bold text-silver-metallic uppercase tracking-wider">
            El Estudio
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-transparent via-[#CBD5E1] to-transparent mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column (Photo & Profile Info, ~40% on desktop) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center text-center space-y-5">
            {/* Natural proportion vertical photo with clean frame and fade/slide-up */}
            <div className="w-[min(80vw,320px)] lg:w-[320px] rounded-[16px] overflow-hidden border border-[rgba(226,232,240,0.25)] shadow-[0_20px_50px_rgba(0,0,0,0.45)] animate-fade-slide-up">
              <img
                src={completoPhoto}
                alt="Leandro Rodríguez - Abogado"
                className="w-full h-auto max-h-[640px] object-cover block"
              />
            </div>

            <div className="flex flex-col items-center">
              <h3 className="font-serif-brand text-2xl font-bold text-silver-metallic tracking-wider">
                LEANDRO RODRÍGUEZ
              </h3>
              <p className="text-xs text-[#CBD5E1] tracking-[0.25em] uppercase font-medium mt-1">
                ABOGADO | MAT. PROF. 1-45450
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-[#081627] border border-[#CBD5E1]/20 flex items-center justify-center text-[#CBD5E1] hover:text-white hover:border-[#F1F5F9] hover:bg-[#CBD5E1]/10 transition-all"
              >
                <i className="fa-brands fa-instagram text-lg" />
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn de Leandro Rodríguez"
                className="w-10 h-10 rounded-full bg-[#081627] border border-[#CBD5E1]/20 flex items-center justify-center text-[#CBD5E1] hover:text-white hover:border-[#F1F5F9] hover:bg-[#CBD5E1]/10 transition-all"
              >
                <i className="fa-brands fa-linkedin-in text-lg" />
              </a>
            </div>
          </div>

          {/* Right Column (Bio Text, Formation & Badges) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left">
            <div className="p-8 sm:p-10 rounded-2xl bg-[#081627]/80 border border-[#CBD5E1]/15 backdrop-blur-xl shadow-xl space-y-5">
              <p className="text-[#CBD5E1] text-base leading-relaxed font-light">
                Soy Leandro Rodríguez, abogado matriculado en Córdoba. Me dedico principalmente a la defensa penal y al derecho del consumidor, y atiendo consultas en todo el país.
              </p>
              
              <p className="text-[#CBD5E1] text-base leading-relaxed font-light">
                Sé que nadie llega a un abogado por un motivo alegre. Por eso estudio cada caso a fondo, te explico con palabras simples qué opciones tenés y te mantengo al tanto de cada paso del proceso.
              </p>

              <p className="text-[#CBD5E1] text-base leading-relaxed font-light">
                Y cuando tu situación requiere otra especialidad, como familia, laboral, civil o sucesiones, trabajo junto a colegas de confianza y con trayectoria, con quienes comparto el mismo nivel de compromiso y seriedad profesional.
              </p>

              <p className="text-white text-base leading-relaxed font-semibold">
                Mi convicción es simple: la ley tiene que estar adentro del problema del cliente, no afuera mirando.
              </p>
            </div>

            {/* Specialty Badges List */}
            <div className="pt-2 flex flex-wrap gap-2.5">
              {badges.map((badge, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#081627] border border-[#CBD5E1]/20 text-xs font-medium text-[#CBD5E1] shadow-sm hover:border-[#CBD5E1]/50 transition-colors"
                >
                  <i className={`fa-solid ${badge.icon} text-[#E2E8F0] text-xs`} />
                  <span>{badge.label}</span>
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

