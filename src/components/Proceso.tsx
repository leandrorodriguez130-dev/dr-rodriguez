import React, { useState, useRef } from 'react';
import { SectionWatermark } from './SectionWatermark';
import { 
  MessageSquare, 
  FileSearch, 
  Scale, 
  CheckCircle2, 
  ArrowRight, 
  Calendar, 
  ShieldCheck, 
  Clock, 
  Sparkles, 
  PhoneCall,
  FileText,
  Award,
  Zap
} from 'lucide-react';

interface StepData {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  details: string[];
  icon: React.ElementType;
  accentColor: string;
  badge: string;
  illustration: React.ReactNode;
}

export const Proceso: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  // Mouse position state per card for 3D cursor tilt & glare effect
  const [cardTilt, setCardTilt] = useState<{ [key: number]: { rotateX: number; rotateY: number; glowX: number; glowY: number } }>({});

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseMove = (idx: number, e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRefs.current[idx];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation (-12deg to +12deg max)
    const rotateX = -((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * 10;

    // Calculate spotlight percentages
    const glowX = (x / rect.width) * 100;
    const glowY = (y / rect.height) * 100;

    setCardTilt((prev) => ({
      ...prev,
      [idx]: { rotateX, rotateY, glowX, glowY },
    }));
  };

  const handleMouseLeave = (idx: number) => {
    setHoveredStep(null);
    setCardTilt((prev) => ({
      ...prev,
      [idx]: { rotateX: 0, rotateY: 0, glowX: 50, glowY: 50 },
    }));
  };

  const steps: StepData[] = [
    {
      number: '01',
      title: 'Primera Consulta Personalizada',
      subtitle: 'Respuesta en menos de 24 horas',
      description: 'Nos contactás por WhatsApp, llamada o formulario. En menos de 24 horas coordinamos una reunión donde escuchamos tu situación y te decimos con claridad dónde estás parado y qué caminos legales tenés disponibles.',
      duration: 'Respuesta inmediata (24hs max)',
      details: [
        'Atención directa y personal, no derivada a terceros',
        'Diagnóstico claro de tu situación legal',
        'Absoluta confidencialidad'
      ],
      icon: MessageSquare,
      accentColor: 'from-emerald-500/20 via-teal-500/10 to-transparent',
      badge: 'RESPUESTA INMEDIATA',
      illustration: (
        <div className="relative w-full h-36 flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-[#051020] to-[#0B1E3D] p-4 border border-[#CBD5E1]/20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-400/10 via-transparent to-transparent pointer-events-none" />
          {/* Visual Elements */}
          <div className="relative z-10 flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-teal-600 to-emerald-400 flex items-center justify-center text-white shadow-lg shadow-teal-950/60 ring-2 ring-emerald-300/30 animate-pulse">
              <PhoneCall className="w-7 h-7" />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 bg-[#051020] px-3 py-1.5 rounded-lg border border-teal-500/30 text-xs text-teal-200">
                <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                <span>Agendá en 1 click</span>
              </div>
              <div className="flex items-center gap-2 bg-[#051020] px-3 py-1.5 rounded-lg border border-emerald-500/30 text-xs text-emerald-300 font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Atención Directa y Personal</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      number: '02',
      title: 'Diagnóstico y Estrategia',
      subtitle: 'Plan de acción personalizado',
      description: 'Analizamos la documentación y proyectamos la mejor ruta jurídica con presupuesto claro y honorarios acordados de antemano.',
      duration: '48 a 72 hs',
      details: ['Revisión exhaustiva de pruebas', 'Definición de estrategia legal', 'Presupuesto transparente sin sorpresas'],
      icon: FileSearch,
      accentColor: 'from-blue-500/20 via-cyan-500/10 to-transparent',
      badge: 'TRANSPARENCIA',
      illustration: (
        <div className="relative w-full h-36 flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-[#051020] to-[#0B1E3D] p-4 border border-[#CBD5E1]/20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-400/10 via-transparent to-transparent pointer-events-none" />
          <div className="relative z-10 flex items-center justify-between w-full max-w-xs px-2">
            <div className="flex flex-col gap-1.5 bg-[#051020] p-2.5 rounded-lg border border-cyan-500/30 w-28">
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-cyan-300">
                <FileText className="w-3.5 h-3.5 text-cyan-400" /> Dossier
              </div>
              <div className="h-1.5 bg-cyan-950 rounded-full overflow-hidden">
                <div className="w-3/4 h-full bg-cyan-400 rounded-full" />
              </div>
              <span className="text-[10px] text-[#CBD5E1]">Análisis 100%</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-md">
              <Zap className="w-5 h-5 text-amber-300" />
            </div>
            <div className="flex flex-col gap-1 bg-[#051020] p-2.5 rounded-lg border border-blue-500/30 w-28 text-right">
              <span className="text-[10px] text-blue-300 uppercase tracking-widest font-bold">Estrategia</span>
              <span className="text-xs text-white font-serif-brand font-bold">Plan A + B</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      number: '03',
      title: 'Representación Activa',
      subtitle: 'Patrocinio firme y constante',
      description: 'Llevamos adelante las demandas, mediaciones o defensas requeridas con impulso procesal continuo y reportes periódicos.',
      duration: 'Durante todo el proceso',
      details: ['Redacción e interposición de escritos', 'Asistencia personal a audiencias', 'Actualización semanal del estado'],
      icon: Scale,
      accentColor: 'from-amber-500/20 via-orange-500/10 to-transparent',
      badge: 'DEFENSA ACTIVA',
      illustration: (
        <div className="relative w-full h-36 flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-[#051020] to-[#0B1E3D] p-4 border border-[#CBD5E1]/20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-400/10 via-transparent to-transparent pointer-events-none" />
          <div className="relative z-10 flex items-center gap-3">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-600 to-yellow-400 flex items-center justify-center text-slate-950 shadow-lg shadow-amber-950/60 ring-2 ring-amber-300/40">
              <Scale className="w-7 h-7" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1.5 text-xs text-amber-200 font-semibold bg-[#051020] px-2.5 py-1 rounded border border-amber-500/30">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>Protección Legal 24/7</span>
              </div>
              <span className="text-[11px] text-[#CBD5E1]">Seguimiento procesal firme</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      number: '04',
      title: 'Resolución y Seguimiento',
      subtitle: 'Conclusión y acompañamiento',
      description: 'Trabajamos tu causa con el máximo compromiso profesional en cada etapa del proceso, con reportes periódicos y disponibilidad constante. Nuestra obligación es de medios, no de resultados: te garantizamos dedicación total, seguimiento riguroso y una defensa hecha con responsabilidad.',
      duration: 'Cierre del caso',
      details: [
        'Seguimiento constante del expediente',
        'Reportes periódicos de avance',
        'Disponibilidad para futuras consultas'
      ],
      icon: CheckCircle2,
      accentColor: 'from-emerald-500/20 via-green-500/10 to-transparent',
      badge: 'COMPROMISO',
      illustration: (
        <div className="relative w-full h-36 flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-[#051020] to-[#0B1E3D] p-4 border border-[#CBD5E1]/20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-400/10 via-transparent to-transparent pointer-events-none" />
          <div className="relative z-10 flex items-center gap-3">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center text-white shadow-lg shadow-emerald-950/60 ring-2 ring-emerald-300/40">
              <Award className="w-7 h-7" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1.5 text-xs text-emerald-200 font-semibold bg-[#051020] px-2.5 py-1 rounded border border-emerald-500/30">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Acompañamiento Hasta el Final</span>
              </div>
              <span className="text-[11px] text-[#CBD5E1]">Compromiso profesional constante</span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const currentStep = steps[hoveredStep !== null ? hoveredStep : activeStep];

  return (
    <section id="proceso" className="py-24 bg-[#0B1E3D] relief-bg border-b border-[#CBD5E1]/10 relative overflow-hidden">
      {/* Large Asymmetric Embossed Watermark Motif (Judge's Gavel bleeding off bottom-left) */}
      <SectionWatermark motif="gavel" variant="navy" position="bottom-left" className="opacity-95" />

      {/* Background ambient light reflections */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#081627] border border-[#CBD5E1]/20 text-silver-metallic text-xs font-semibold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            PASO A PASO INTERACTIVO
          </div>
          <h2 className="font-serif-brand text-3xl sm:text-4xl lg:text-5xl font-bold text-silver-metallic uppercase tracking-wider">
            ¿Cómo es el proceso?
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-[#CBD5E1] to-transparent mx-auto rounded-full" />
          <p className="text-[#CBD5E1] text-base sm:text-lg font-light pt-2">
            Pasá el cursor por cada tarjeta para explorar los detalles interactivos de tu defensa jurídica.
          </p>
        </div>

        {/* Interactive Progress Bar & Step Selectors (Desktop) */}
        <div className="hidden lg:block mb-12 relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-[#051020] -translate-y-1/2 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300 transition-all duration-500 ease-out"
              style={{ width: `${((hoveredStep !== null ? hoveredStep : activeStep) / (steps.length - 1)) * 100}%` }}
            />
          </div>

          <div className="relative z-10 flex justify-between items-center max-w-5xl mx-auto">
            {steps.map((step, idx) => {
              const isActive = (hoveredStep !== null ? hoveredStep : activeStep) === idx;
              const isPassed = (hoveredStep !== null ? hoveredStep : activeStep) >= idx;

              return (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  onMouseEnter={() => setHoveredStep(idx)}
                  onMouseLeave={() => setHoveredStep(null)}
                  className="group flex flex-col items-center focus:outline-none transition-all duration-300"
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 border-2 shadow-lg ${
                      isActive
                        ? 'bg-[#E2E8F0] border-white text-[#0B1E3D] scale-125 shadow-[0_0_20px_rgba(255,255,255,0.4)]'
                        : isPassed
                        ? 'bg-emerald-600 border-emerald-300 text-white'
                        : 'bg-[#051020] border-[#CBD5E1]/30 text-[#CBD5E1]'
                    }`}
                  >
                    {step.number}
                  </div>
                  <span className={`mt-2 text-xs font-serif-brand tracking-wider uppercase transition-colors duration-200 ${
                    isActive ? 'text-white font-bold' : 'text-[#CBD5E1]/70 group-hover:text-white'
                  }`}>
                    {step.title.split(' ')[0]} {step.title.split(' ')[1] || ''}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3D Interactive Grid of Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 perspective-1000">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isHovered = hoveredStep === idx;
            const isActive = activeStep === idx;

            const tilt = cardTilt[idx] || { rotateX: 0, rotateY: 0, glowX: 50, glowY: 50 };

            return (
              <div
                key={idx}
                ref={(el) => { cardRefs.current[idx] = el; }}
                onMouseMove={(e) => handleMouseMove(idx, e)}
                onMouseEnter={() => setHoveredStep(idx)}
                onMouseLeave={() => handleMouseLeave(idx)}
                onClick={() => setActiveStep(idx)}
                style={{
                  transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) ${
                    isHovered ? 'scale3d(1.03, 1.03, 1.03) translateY(-6px)' : 'scale3d(1, 1, 1)'
                  }`,
                  transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.4s ease-out, border-color 0.3s, box-shadow 0.3s',
                }}
                className={`relative flex flex-col justify-between rounded-2xl p-6 bg-gradient-to-b from-[#0B1E3D] via-[#081627] to-[#051020] border transition-all duration-300 cursor-pointer overflow-hidden shadow-xl group ${
                  isHovered || isActive
                    ? 'border-[#E2E8F0] shadow-[0_15px_35px_rgba(0,0,0,0.6),_0_0_20px_rgba(226,232,240,0.2)]'
                    : 'border-[#CBD5E1]/20 hover:border-[#CBD5E1]/50'
                }`}
              >
                {/* Dynamic Cursor Light Glare Overlay */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
                  style={{
                    background: `radial-gradient(circle 180px at ${tilt.glowX}% ${tilt.glowY}%, rgba(255, 255, 255, 0.15), transparent 80%)`,
                  }}
                />

                {/* Top Card Badge & Number */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-serif-brand font-black text-silver-metallic tracking-wider">
                      {step.number}
                    </span>
                    <span className="text-[10px] font-bold tracking-widest px-2.5 py-1 rounded-full bg-[#051020] border border-[#CBD5E1]/20 text-emerald-300 uppercase">
                      {step.badge}
                    </span>
                  </div>

                  {/* Illustrative Card Graphics */}
                  <div className="mb-6 transform transition-transform duration-300 group-hover:scale-102">
                    {step.illustration}
                  </div>

                  {/* Card Title & Icon */}
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 rounded-xl bg-[#051020] border border-[#CBD5E1]/20 text-emerald-300 group-hover:text-white group-hover:bg-emerald-600 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-serif-brand text-lg font-bold text-white group-hover:text-silver-metallic transition-colors leading-tight">
                        {step.title}
                      </h3>
                      <p className="text-xs text-emerald-400 font-medium">{step.subtitle}</p>
                    </div>
                  </div>

                  {/* Card Description */}
                  <p className="text-xs sm:text-sm text-[#CBD5E1] font-light leading-relaxed mb-6">
                    {step.description}
                  </p>

                  {/* Details Bullet List */}
                  <ul className="space-y-2 pt-2 border-t border-[#CBD5E1]/10 mb-6">
                    {step.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-2 text-xs text-[#CBD5E1]/90">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Duration Badge */}
                <div className="pt-3 border-t border-[#CBD5E1]/10 flex items-center justify-between text-xs text-[#CBD5E1]">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-amber-300" />
                    <span className="font-medium text-[11px] text-amber-200">{step.duration}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-semibold text-emerald-300 group-hover:translate-x-1 transition-transform">
                    <span>Saber más</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured Dynamic Banner for Active Step Focus */}
        <div className="mt-16 bg-gradient-to-r from-[#0B1E3D] via-[#081627] to-[#051020] rounded-2xl p-6 sm:p-8 border border-[#CBD5E1]/30 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 translate-x-8 -translate-y-8 w-64 h-64 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-300 uppercase tracking-widest">
                <Sparkles className="w-4 h-4" />
                <span>Paso Seleccionado: {currentStep.number} — {currentStep.title}</span>
              </div>
              <h4 className="font-serif-brand text-xl sm:text-2xl font-bold text-white">
                {currentStep.subtitle}
              </h4>
              <p className="text-sm text-[#CBD5E1] max-w-2xl font-light">
                {currentStep.description} Tu consulta inicial es completamente confidencial y sin compromiso.
              </p>
            </div>

            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold text-sm tracking-wider uppercase shadow-xl hover:shadow-emerald-950/60 hover:scale-105 active:scale-95 transition-all shrink-0 border border-emerald-300/30"
            >
              <span>Iniciar Paso {currentStep.number}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
