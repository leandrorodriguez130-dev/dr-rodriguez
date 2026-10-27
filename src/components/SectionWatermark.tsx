import React from 'react';

interface SectionWatermarkProps {
  motif: 'scale' | 'gavel';
  variant: 'navy' | 'beige';
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'right-center' | 'left-center';
  className?: string;
}

export const SectionWatermark: React.FC<SectionWatermarkProps> = ({
  motif,
  variant,
  position,
  className = '',
}) => {
  // Position mapping
  const positionClasses = {
    'top-left': '-top-16 -left-20 md:-top-24 md:-left-28 lg:-top-32 lg:-left-36',
    'top-right': '-top-16 -right-20 md:-top-24 md:-right-28 lg:-top-32 lg:-right-36',
    'bottom-left': '-bottom-16 -left-20 md:-bottom-24 md:-left-28 lg:-bottom-32 lg:-left-36',
    'bottom-right': '-bottom-16 -right-20 md:-bottom-24 md:-right-28 lg:-bottom-32 lg:-right-36',
    'right-center': 'top-1/2 -translate-y-1/2 -right-20 md:-right-28 lg:-right-36',
    'left-center': 'top-1/2 -translate-y-1/2 -left-20 md:-left-28 lg:-left-36',
  }[position];

  // Palette tones for 3-6% subtle emboss effect
  // Navy: Base #0B1E3D -> Shadow #050F1E (darker by 5%), Highlight #16325C (lighter by 5%)
  // Beige: Base #F5F0E8 -> Shadow #DDD4C5 (darker by 6%), Highlight #FFFCF7 (lighter by 5%)
  const isNavy = variant === 'navy';
  const shadowColor = isNavy ? '#040C1A' : '#DDD2C1';
  const highlightColor = isNavy ? '#173663' : '#FFFCF8';
  const surfaceStroke = isNavy ? '#0D2447' : '#EDE4D6';

  return (
    <div
      aria-hidden="true"
      className={`absolute ${positionClasses} pointer-events-none select-none overflow-visible z-0 ${className}`}
      style={{
        width: 'min(55vw, 620px)',
        height: 'min(55vw, 620px)',
        minWidth: '320px',
        minHeight: '320px',
      }}
    >
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full transform transition-transform duration-1000 ease-out"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id={`emboss-shadow-${variant}-${motif}`} x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="2.5" dy="3" stdDeviation="2.5" floodColor={shadowColor} floodOpacity={isNavy ? '0.75' : '0.6'} />
            <feDropShadow dx="-1.5" dy="-2" stdDeviation="2" floodColor={highlightColor} floodOpacity={isNavy ? '0.55' : '0.8'} />
          </filter>
        </defs>

        {motif === 'scale' ? (
          <g filter={`url(#emboss-shadow-${variant}-${motif})`}>
            {/* JUSTICE SCALE SILHOUETTE - Elegant Classical Architectural Style */}
            {/* Base Pedestal */}
            <path
              d="M140 370 C140 358 170 352 200 352 C230 352 260 358 260 370 L268 382 C270 385 268 388 262 388 L138 388 C132 388 130 385 132 382 Z"
              stroke={surfaceStroke}
              strokeWidth="2.5"
              fill="none"
            />
            {/* Lower decorative rings */}
            <ellipse cx="200" cy="345" rx="35" ry="6" stroke={surfaceStroke} strokeWidth="2.2" />
            <ellipse cx="200" cy="336" rx="22" ry="4" stroke={surfaceStroke} strokeWidth="2" />

            {/* Central Pillar (Fluted column shaft) */}
            <path
              d="M191 336 L191 100 M209 336 L209 100"
              stroke={surfaceStroke}
              strokeWidth="2.2"
            />
            <path
              d="M197 336 L197 100 M203 336 L203 100"
              stroke={surfaceStroke}
              strokeWidth="1.5"
              strokeDasharray="4 2"
            />

            {/* Pillar Capital & Finial (Tip of the Sword/Pillar) */}
            <ellipse cx="200" cy="98" rx="26" ry="6" stroke={surfaceStroke} strokeWidth="2.2" />
            <ellipse cx="200" cy="88" rx="16" ry="5" stroke={surfaceStroke} strokeWidth="2" />
            <path
              d="M200 83 L200 38 M192 52 L208 52 M196 42 L204 42 M200 32 L200 38"
              stroke={surfaceStroke}
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <circle cx="200" cy="30" r="5" stroke={surfaceStroke} strokeWidth="2" />

            {/* Central Fulcrum / Bearing */}
            <circle cx="200" cy="98" r="9" stroke={surfaceStroke} strokeWidth="2.5" />
            <circle cx="200" cy="98" r="3.5" stroke={surfaceStroke} strokeWidth="1.8" />

            {/* Horizontal Balance Beam (Slight realistic angle) */}
            <path
              d="M52 110 C100 95 160 95 200 98 C240 95 300 95 348 110"
              stroke={surfaceStroke}
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M54 116 C100 101 160 101 200 104 C240 101 300 101 346 116"
              stroke={surfaceStroke}
              strokeWidth="1.8"
            />

            {/* Beam End Caps / Rings */}
            <circle cx="52" cy="110" r="6.5" stroke={surfaceStroke} strokeWidth="2.2" />
            <circle cx="348" cy="110" r="6.5" stroke={surfaceStroke} strokeWidth="2.2" />

            {/* LEFT PAN SUSPENSION (3 Fine Chains) */}
            <path d="M52 116.5 L12 230" stroke={surfaceStroke} strokeWidth="1.5" />
            <path d="M52 116.5 L52 230" stroke={surfaceStroke} strokeWidth="1.5" />
            <path d="M52 116.5 L92 230" stroke={surfaceStroke} strokeWidth="1.5" />
            
            {/* Left Pan Dish */}
            <path
              d="M10 230 C12 258 90 258 94 230 Z"
              stroke={surfaceStroke}
              strokeWidth="2.5"
            />
            <ellipse cx="52" cy="230" rx="42" ry="7" stroke={surfaceStroke} strokeWidth="2" />
            {/* Left Pan rim shadow */}
            <path d="M16 235 C28 252 76 252 88 235" stroke={surfaceStroke} strokeWidth="1.5" />

            {/* RIGHT PAN SUSPENSION (3 Fine Chains) */}
            <path d="M348 116.5 L308 230" stroke={surfaceStroke} strokeWidth="1.5" />
            <path d="M348 116.5 L348 230" stroke={surfaceStroke} strokeWidth="1.5" />
            <path d="M348 116.5 L388 230" stroke={surfaceStroke} strokeWidth="1.5" />

            {/* Right Pan Dish */}
            <path
              d="M306 230 C308 258 386 258 390 230 Z"
              stroke={surfaceStroke}
              strokeWidth="2.5"
            />
            <ellipse cx="348" cy="230" rx="42" ry="7" stroke={surfaceStroke} strokeWidth="2" />
            {/* Right Pan rim shadow */}
            <path d="M312 235 C324 252 372 252 384 235" stroke={surfaceStroke} strokeWidth="1.5" />

            {/* Classical Laurel Flourishes at base of beam */}
            <path
              d="M178 120 C165 140 145 150 125 145 M222 120 C235 140 255 150 275 145"
              stroke={surfaceStroke}
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </g>
        ) : (
          <g filter={`url(#emboss-shadow-${variant}-${motif})`}>
            {/* JUDGE'S GAVEL & SOUND BLOCK SILHOUETTE - Master Crafted Relief */}
            {/* SOUND BLOCK (Base de impacto circular biselada) */}
            <g transform="translate(40, 150)">
              {/* Outer Lower Base */}
              <path
                d="M30 180 C30 155 170 155 170 180 L170 200 C170 225 30 225 30 200 Z"
                stroke={surfaceStroke}
                strokeWidth="2.5"
              />
              <ellipse cx="100" cy="180" rx="70" ry="24" stroke={surfaceStroke} strokeWidth="2.5" />
              <ellipse cx="100" cy="200" rx="70" ry="24" stroke={surfaceStroke} strokeWidth="2" />
              
              {/* Tiered Step of Sound Block */}
              <ellipse cx="100" cy="172" rx="55" ry="18" stroke={surfaceStroke} strokeWidth="2" />
              <ellipse cx="100" cy="165" rx="45" ry="15" stroke={surfaceStroke} strokeWidth="2.2" />
              {/* Decorative center insert ring */}
              <ellipse cx="100" cy="165" rx="28" ry="9" stroke={surfaceStroke} strokeWidth="1.6" strokeDasharray="3 2" />
            </g>

            {/* GAVEL (Martillo de Juez en ángulo de descanso sobre el bloque) */}
            <g transform="translate(195, 175) rotate(-34)">
              {/* Handle (Mango Torneado de Madera Noble) */}
              {/* Grip end pommel */}
              <ellipse cx="0" cy="175" rx="15" ry="9" stroke={surfaceStroke} strokeWidth="2.5" />
              <circle cx="0" cy="182" r="6" stroke={surfaceStroke} strokeWidth="2" />
              
              {/* Handle Shaft */}
              <path
                d="M-8 170 C-10 120 -6 60 -7 18 L7 18 C6 60 10 120 8 170 Z"
                stroke={surfaceStroke}
                strokeWidth="2.5"
              />
              {/* Handle Ergonomic Rings */}
              <path d="M-9 140 C-3 143 3 143 9 140" stroke={surfaceStroke} strokeWidth="2" />
              <path d="M-8 115 C-3 118 3 118 8 115" stroke={surfaceStroke} strokeWidth="2" />
              <path d="M-7 75 C-3 78 3 78 7 75" stroke={surfaceStroke} strokeWidth="2" />
              <path d="M-7 45 C-3 48 3 48 7 45" stroke={surfaceStroke} strokeWidth="2" />

              {/* GAVEL HEAD (Cabeza cilíndrica de doble mazo) */}
              {/* Central Band Collar */}
              <rect x="-14" y="8" width="28" height="18" rx="3" stroke={surfaceStroke} strokeWidth="2.2" />
              <line x1="-14" y1="17" x2="14" y2="17" stroke={surfaceStroke} strokeWidth="1.5" />

              {/* Main Barrel */}
              <path
                d="M-58 -18 L58 -18 C65 -18 72 -10 72 0 C72 10 65 18 58 18 L-58 18 C-65 18 -72 10 -72 0 C-72 -10 -65 -18 -58 -18 Z"
                stroke={surfaceStroke}
                strokeWidth="2.8"
              />
              {/* Left striking face (Bisel de golpe izquierdo) */}
              <ellipse cx="-58" cy="0" rx="14" ry="18" stroke={surfaceStroke} strokeWidth="2.5" />
              <ellipse cx="-64" cy="0" rx="8" ry="16" stroke={surfaceStroke} strokeWidth="2" />
              
              {/* Right striking face (Bisel de golpe derecho) */}
              <ellipse cx="58" cy="0" rx="14" ry="18" stroke={surfaceStroke} strokeWidth="2.5" />
              <ellipse cx="64" cy="0" rx="8" ry="16" stroke={surfaceStroke} strokeWidth="2" />

              {/* Brass decorative inlay rings */}
              <path d="M-30 -18 L-30 18 M-24 -18 L-24 18" stroke={surfaceStroke} strokeWidth="1.8" />
              <path d="M30 -18 L30 18 M24 -18 L24 18" stroke={surfaceStroke} strokeWidth="1.8" />
            </g>
          </g>
        )}
      </svg>
    </div>
  );
};
