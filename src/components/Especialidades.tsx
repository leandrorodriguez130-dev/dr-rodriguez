import React from 'react';
import { SpecialtyIcon } from './SpecialtyIcon';
import { SectionWatermark } from './SectionWatermark';
import { getWhatsAppUrl } from '../constants/contact';

export const Especialidades: React.FC = () => {
  const specialties = [
    {
      id: 'penal',
      title: 'Defensa Penal & Ciberdelitos',
      icon: 'fa-shield-halved',
      description:
        '¿Te vaciaron la cuenta, te estafaron por redes sociales o tenés una causa penal abierta? Actuamos con urgencia y estrategia desde el primer minuto para proteger tu libertad y tus derechos.',
      isFeatured: true,
      tag: 'ESPECIALIDAD PRINCIPAL',
      ctaText: 'Analizar mi caso →',
      link: getWhatsAppUrl('Hola, necesito asesoramiento por Defensa Penal o Ciberdelito'),
    },
    {
      id: 'familia',
      title: 'Civil y Familia',
      icon: 'fa-scale-balanced',
      description:
        'Divorcios, alimentos, régimen de comunicación con tus hijos y sucesiones. Procesos familiares manejados con sensibilidad, reserva y agilidad.',
      isFeatured: false,
      ctaText: 'Consultar →',
      link: getWhatsAppUrl('Hola, necesito asesoramiento en Civil o Familia'),
    },
    {
      id: 'bancario',
      title: 'Derecho del Consumidor',
      icon: 'fa-building-columns',
      description:
        'Publicidad engañosa, incumplimiento contractual, cobros indebidos y fallas de productos o servicios. Defendemos tus derechos como consumidor frente a empresas, comercios y prestadores de servicios.',
      isFeatured: false,
      ctaText: 'Consultar →',
      link: getWhatsAppUrl('Hola, necesito asesoramiento por Derecho del Consumidor'),
    },
    {
      id: 'laboral',
      title: 'Derecho Laboral y ART',
      icon: 'fa-briefcase',
      description:
        'Despidos, trabajo no registrado, diferencias salariales y accidentes de trabajo. Reclamamos ante tu empleador y la ART para que cobres lo que te corresponde.',
      isFeatured: false,
      ctaText: 'Consultar →',
      link: getWhatsAppUrl('Hola, necesito asesoramiento en Derecho Laboral o ART'),
    },
  ];

  return (
    <section id="especialidades" className="py-24 relief-bg relative border-b border-[#CBD5E1]/10 overflow-hidden">
      {/* Large Asymmetric Embossed Watermark Motif (Judge's Gavel bleeding off top-left) */}
      <SectionWatermark motif="gavel" variant="navy" position="top-left" className="opacity-95" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold tracking-widest text-[#CBD5E1] uppercase">
            NUESTRAS ÁREAS DE PRÁCTICA
          </span>
          <h2 className="font-serif-brand text-3xl sm:text-4xl lg:text-5xl font-bold text-silver-metallic uppercase tracking-wider">
            ¿En qué podemos ayudarte?
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-transparent via-[#CBD5E1] to-transparent mx-auto rounded-full" />
          <p className="text-[#CBD5E1] text-base sm:text-lg font-light pt-2">
            Soluciones claras frente a problemas complejos.
          </p>
        </div>

        {/* 2x2 Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 perspective-container">
          {specialties.map((item) => (
            <div
              key={item.id}
              className={`group relative p-8 sm:p-10 rounded-2xl bg-[#081627] transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02] hover:border-l-4 hover:border-l-[#F1F5F9] shadow-xl hover:shadow-2xl flex flex-col justify-between ${
                item.isFeatured
                  ? 'border-2 border-[#CBD5E1]/60 featured-shimmer-border shadow-slate-950/50'
                  : 'border border-[#CBD5E1]/15'
              }`}
              style={{ perspective: '800px' }}
            >
              {/* Card Header & Tag */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  {/* Composite Engraved Metallic Icon */}
                  <SpecialtyIcon id={item.id} />

                  {item.tag && (
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-widest bg-[#F1F5F9]/10 border border-[#F1F5F9]/30 text-[#F1F5F9] uppercase">
                      {item.tag}
                    </span>
                  )}
                </div>

                <h3 className="font-serif-brand text-2xl font-bold text-[#F1F5F9] mb-4 tracking-wide group-hover:text-silver-metallic transition-colors">
                  {item.title}
                </h3>

                <p className="text-[#CBD5E1] text-sm sm:text-base leading-relaxed font-light mb-6">
                  {item.description}
                </p>
              </div>

              {/* Card Footer CTA */}
              <div className="pt-4 border-t border-[#CBD5E1]/10 flex items-center justify-between">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#F1F5F9] hover:text-emerald-400 transition-colors group/link"
                >
                  <span>{item.ctaText}</span>
                </a>
                <a
                  href="#es-tu-caso"
                  className="text-xs text-[#CBD5E1]/60 hover:text-[#CBD5E1] underline decoration-dotted"
                >
                  Ver ejemplos
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
