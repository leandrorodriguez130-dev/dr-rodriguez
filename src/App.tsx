import React, { useEffect } from 'react';
import { CurtainReveal } from './components/CurtainReveal';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Especialidades } from './components/Especialidades';
import { EsTuCaso } from './components/EsTuCaso';
import { ElEstudio } from './components/ElEstudio';
import { Proceso } from './components/Proceso';
import { Testimonios } from './components/Testimonios';
import { Contacto } from './components/Contacto';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';

export default function App() {
  useEffect(() => {
    // Initialize GSAP ScrollTrigger if loaded from CDN
    if (typeof window !== 'undefined' && (window as any).gsap && (window as any).ScrollTrigger) {
      const gsap = (window as any).gsap;
      const ScrollTrigger = (window as any).ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      // Simple smooth entrance triggers for sections
      gsap.utils.toArray('section').forEach((section: any) => {
        gsap.fromTo(
          section,
          { opacity: 0.9, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }
  }, []);

  return (
    <div className="min-h-screen relative font-sans-brand bg-[#0B1E3D] text-[#E2E8F0]">
      {/* Page Load Curtain Reveal */}
      <CurtainReveal />

      {/* Scroll Progress Bar & Ambient Floating Particles */}
      <ScrollProgress />

      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Sections */}
      <main>
        <Hero />
        <Especialidades />
        <EsTuCaso />
        <Contacto />
        <ElEstudio />
        <Proceso />
        <Testimonios />
      </main>

      {/* Persistent Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
