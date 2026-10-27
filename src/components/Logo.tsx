import React from 'react';
import logoImg from '../activos/logotipo';

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  interactive?: boolean;
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 48,
  showText = false,
  interactive = false,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center gap-3 ${
        interactive ? 'cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95' : ''
      } ${className}`}
    >
      {/* Circular Isotipo framing the logo emblem image */}
      <div
        className="relative flex items-center justify-center rounded-full p-1 bg-gradient-to-br from-[#0B2E38] via-[#071F26] to-[#031317] border-2 border-[#CBD5E1]/40 shadow-xl overflow-hidden group transition-all duration-300 hover:border-emerald-400/60 hover:shadow-2xl hover:shadow-emerald-950/40"
        style={{
          width: `${size + 12}px`,
          height: `${size + 12}px`,
          boxShadow: '0 6px 20px rgba(0, 0, 0, 0.65), inset 0 1px 3px rgba(255, 255, 255, 0.3)',
        }}
      >
        {/* Dark Teal Textured Wall Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-25 pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(226, 232, 240, 0.5) 1px, transparent 1px)`,
            backgroundSize: '6px 6px',
          }}
        />

        {/* Specular Radial Glare Reflection */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#F1F5F9]/15 to-white/25 opacity-80 pointer-events-none rounded-full" />

        {/* Logo emblem image filling the circular isotipo frame */}
        <img
          id="nav-brand-logo-img"
          src={logoImg}
          alt="Logo Leandro Rodríguez Abogado"
          className="w-full h-full object-contain rounded-full relative z-10 transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]"
        />
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className="font-serif-brand font-semibold text-lg md:text-xl text-silver-metallic tracking-wider uppercase leading-tight drop-shadow">
            LEANDRO RODRÍGUEZ
          </span>
          <div className="flex items-center gap-2 my-0.5">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#CBD5E1] to-transparent" />
            <span className="font-serif-brand text-[10px] md:text-xs text-[#CBD5E1] tracking-[0.25em] uppercase">
              ABOGADO
            </span>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#CBD5E1] to-transparent" />
          </div>
        </div>
      )}
    </div>
  );
};



