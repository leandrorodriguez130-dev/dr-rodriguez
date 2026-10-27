import React, { useState, useEffect } from 'react';
import { SectionWatermark } from './SectionWatermark';

export const Testimonios: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'María L.',
      caseType: 'Estafa Virtual',
      rating: 4,
      quote:
        'Me vaciaron la cuenta y no sabía qué hacer. Me explicaron todo con una claridad que me devolvió la calma.',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
    },
    {
      name: 'Carlos R.',
      caseType: 'Derecho Laboral',
      rating: 5,
      quote:
        'Tuve un problema laboral grave y necesitaba alguien que peleara por mí. Me acompañaron en todo momento.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    },
    {
      name: 'Lucía M.',
      caseType: 'Derecho del Consumidor',
      rating: 3,
      quote:
        'Una empresa me aplicaba cobros indebidos y no se hacía cargo. Gracias a ellos recuperé lo que me correspondía.',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    },
    {
      name: 'Gabriel P.',
      caseType: 'Defensa Penal',
      rating: 5,
      quote:
        'Tenía una causa penal injusta y lograron resolverla rápido. Infinitamente agradecido.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const stats = [
    { icon: 'fa-user-shield', label: 'Atención personal en cada consulta' },
    { icon: 'fa-bolt', label: 'Respuesta en menos de 2 horas' },
    { icon: 'fa-hand-holding-heart', label: 'Consulta inicial gratuita' },
    { icon: 'fa-lock', label: 'Confidencialidad total' },
  ];

  return (
    <section id="testimonios" className="py-24 relief-bg border-b border-[#CBD5E1]/10 relative overflow-hidden">
      {/* Large Asymmetric Embossed Watermark Motif (Justice Scale bleeding off top-left) */}
      <SectionWatermark motif="scale" variant="navy" position="top-left" className="opacity-95" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold tracking-widest text-[#CBD5E1] uppercase">
            RESEÑAS REALES
          </span>
          <h2 className="font-serif-brand text-3xl sm:text-4xl lg:text-5xl font-bold text-silver-metallic uppercase tracking-wider">
            Lo que dicen quienes confiaron en nosotros
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-transparent via-[#CBD5E1] to-transparent mx-auto rounded-full" />
        </div>

        {/* Carousel Card Container */}
        <div className="max-w-3xl mx-auto mb-20 relative">
          <div className="p-8 sm:p-12 rounded-2xl glass-navy border border-[#CBD5E1]/20 shadow-2xl backdrop-blur-xl relative overflow-hidden transition-all duration-500 min-h-[260px] flex flex-col justify-between">
            {/* Background metallic accent */}
            <i className="fa-solid fa-quote-right absolute -bottom-4 -right-4 text-8xl text-[#CBD5E1]/5 pointer-events-none" />

            {/* Testimonial Quote */}
            <p className="text-base sm:text-xl text-[#F1F5F9] font-light leading-relaxed italic mb-8 relative z-10">
              "{testimonials[currentIndex].quote}"
            </p>

            {/* Avatar & Author Info */}
            <div className="flex items-center justify-between border-t border-[#CBD5E1]/10 pt-6 relative z-10">
              <div className="flex items-center gap-4">
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#CBD5E1]/40 shadow-md grayscale contrast-125 brightness-90"
                />
                <div className="flex flex-col">
                  <span className="font-serif-brand font-bold text-base text-[#F1F5F9]">
                    {testimonials[currentIndex].name}
                  </span>
                  <span className="text-xs text-[#CBD5E1]/80 font-medium">
                    {testimonials[currentIndex].caseType}
                  </span>
                </div>
              </div>

              {/* Silver Star Rating */}
              <div className="flex items-center gap-1 text-[#E2E8F0]">
                {[...Array(5)].map((_, i) => (
                  <i
                    key={i}
                    className={`fa-solid fa-star text-sm ${
                      i < testimonials[currentIndex].rating
                        ? 'text-[#E2E8F0]'
                        : 'text-[#CBD5E1]/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? 'w-8 bg-gradient-to-r from-[#CBD5E1] to-[#F1F5F9]'
                    : 'w-2.5 bg-[#CBD5E1]/30 hover:bg-[#CBD5E1]/60'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Commitment Attributes Stats Strip */}
        <div className="pt-8 border-t border-[#CBD5E1]/15">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center space-y-3 p-3">
                <div className="text-3xl text-silver-metallic metallic-icon-engraved">
                  <i className={`fa-solid ${stat.icon}`} />
                </div>
                <span className="text-xs sm:text-sm text-[#CBD5E1] font-medium leading-tight max-w-[200px]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
