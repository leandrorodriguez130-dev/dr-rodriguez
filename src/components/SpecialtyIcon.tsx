import React from 'react';

interface SpecialtyIconProps {
  id: string;
}

export const SpecialtyIcon: React.FC<SpecialtyIconProps> = ({ id }) => {
  switch (id) {
    case 'penal':
      return (
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-[#18335E] via-[#0B1E3D] to-[#051020] p-3 border-2 border-[#CBD5E1]/40 shadow-xl flex items-center justify-center group-hover:scale-108 group-hover:rotate-2 transition-all duration-300 overflow-hidden">
          {/* Bevel highlight */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
          
          <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-[0_6px_12px_rgba(0,0,0,0.7)]">
            <defs>
              <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F1F5F9" />
                <stop offset="45%" stopColor="#94A3B8" />
                <stop offset="70%" stopColor="#334155" />
                <stop offset="100%" stopColor="#0F172A" />
              </linearGradient>

              <linearGradient id="cyberGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38BDF8" />
                <stop offset="50%" stopColor="#0284C7" />
                <stop offset="100%" stopColor="#0369A1" />
              </linearGradient>

              <filter id="embossPenal">
                <feDropShadow dx="1" dy="2" stdDeviation="1" floodColor="#000" floodOpacity="0.8" />
              </filter>
            </defs>

            {/* Outer Glow Halo */}
            <circle cx="50" cy="50" r="42" fill="none" stroke="url(#cyberGrad)" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />

            {/* Main Shield Outline */}
            <path
              d="M 50,12 L 82,24 C 82,58 50,86 50,86 C 50,86 18,58 18,24 Z"
              fill="url(#shieldGrad)"
              stroke="#CBD5E1"
              strokeWidth="2"
              filter="url(#embossPenal)"
            />

            {/* Left Half - Classic Beveled Metallic Penal Shield */}
            <path
              d="M 50,14 L 20,25 C 20,56 50,83 50,83 Z"
              fill="#1E293B"
              opacity="0.35"
            />

            {/* Right Half - Cyber / Circuit Grid Motif */}
            <g stroke="url(#cyberGrad)" strokeWidth="1.8" fill="none" opacity="0.95" strokeLinecap="round">
              <path d="M 50,22 L 72,22 L 72,36 L 58,36 L 58,52 L 76,52 L 76,68 L 50,68" />
              <path d="M 62,28 L 78,28" />
              <path d="M 54,44 L 68,44" />
              {/* Circuit Nodes / Pixels */}
              <circle cx="72" cy="22" r="2.5" fill="#38BDF8" stroke="none" />
              <circle cx="72" cy="36" r="2.5" fill="#38BDF8" stroke="none" />
              <circle cx="58" cy="52" r="2.5" fill="#38BDF8" stroke="none" />
              <circle cx="76" cy="68" r="2.5" fill="#38BDF8" stroke="none" />
            </g>

            {/* Center Lock / Keyhole Emblem in Metallic Relief */}
            <path
              d="M 50,38 C 45,38 42,42 42,47 C 42,50 44,53 47,54.5 L 45,66 L 55,66 L 53,54.5 C 56,53 58,50 58,47 C 58,42 55,38 50,38 Z"
              fill="url(#shieldGrad)"
              stroke="#F8FAFC"
              strokeWidth="1.2"
              filter="url(#embossPenal)"
            />
            <circle cx="50" cy="46" r="2.5" fill="#0F172A" />
          </svg>
        </div>
      );

    case 'familia':
      return (
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-[#18335E] via-[#0B1E3D] to-[#051020] p-3 border-2 border-[#CBD5E1]/40 shadow-xl flex items-center justify-center group-hover:scale-108 group-hover:rotate-2 transition-all duration-300 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />

          <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-[0_6px_12px_rgba(0,0,0,0.7)]">
            <defs>
              <linearGradient id="metalSilver" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="50%" stopColor="#CBD5E1" />
                <stop offset="100%" stopColor="#475569" />
              </linearGradient>

              <linearGradient id="roseSteel" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E2E8F0" />
                <stop offset="50%" stopColor="#C084FC" />
                <stop offset="100%" stopColor="#7E22CE" />
              </linearGradient>

              <filter id="embossFamilia">
                <feDropShadow dx="1" dy="2" stdDeviation="1" floodColor="#000" floodOpacity="0.8" />
              </filter>
            </defs>

            {/* Protective Arch Arc above figures */}
            <path
              d="M 18,52 C 18,22 82,22 82,52"
              fill="none"
              stroke="url(#roseSteel)"
              strokeWidth="3"
              strokeLinecap="round"
              filter="url(#embossFamilia)"
            />

            {/* Intertwined Metallic Ring 1 */}
            <ellipse
              cx="40"
              cy="62"
              rx="18"
              ry="14"
              fill="none"
              stroke="url(#metalSilver)"
              strokeWidth="2.5"
              filter="url(#embossFamilia)"
            />

            {/* Intertwined Metallic Ring 2 */}
            <ellipse
              cx="60"
              cy="62"
              rx="18"
              ry="14"
              fill="none"
              stroke="url(#metalSilver)"
              strokeWidth="2.5"
              filter="url(#embossFamilia)"
            />

            {/* Adult Silhouette 1 (Left) */}
            <circle cx="36" cy="38" r="6" fill="url(#metalSilver)" />
            <path
              d="M 26,56 C 26,45 46,45 46,56 Z"
              fill="url(#metalSilver)"
              filter="url(#embossFamilia)"
            />

            {/* Adult Silhouette 2 (Right) */}
            <circle cx="64" cy="38" r="6" fill="url(#metalSilver)" />
            <path
              d="M 54,56 C 54,45 74,45 74,56 Z"
              fill="url(#metalSilver)"
              filter="url(#embossFamilia)"
            />

            {/* Child Silhouette / Central Bond (Center) */}
            <circle cx="50" cy="48" r="4.5" fill="url(#roseSteel)" />
            <path
              d="M 42,65 C 42,56 58,56 58,65 Z"
              fill="url(#roseSteel)"
              filter="url(#embossFamilia)"
            />

            {/* Protective Heart / Ribbon Knot in center */}
            <path
              d="M 50,75 C 50,75 36,64 42,58 C 46,54 50,58 50,58 C 50,58 54,54 58,58 C 64,64 50,75 50,75 Z"
              fill="url(#roseSteel)"
              opacity="0.9"
            />
          </svg>
        </div>
      );

    case 'bancario':
      return (
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-[#18335E] via-[#0B1E3D] to-[#051020] p-3 border-2 border-[#CBD5E1]/40 shadow-xl flex items-center justify-center group-hover:scale-108 group-hover:rotate-2 transition-all duration-300 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />

          <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-[0_6px_12px_rgba(0,0,0,0.7)]">
            <defs>
              <linearGradient id="metalPillars" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="50%" stopColor="#CBD5E1" />
                <stop offset="100%" stopColor="#334155" />
              </linearGradient>

              <linearGradient id="alertGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F87171" />
                <stop offset="50%" stopColor="#EF4444" />
                <stop offset="100%" stopColor="#991B1B" />
              </linearGradient>

              <filter id="embossBancario">
                <feDropShadow dx="1" dy="2" stdDeviation="1" floodColor="#000" floodOpacity="0.8" />
              </filter>
            </defs>

            {/* Bank Temple Pediment (Roof) */}
            <path
              d="M 12,32 L 50,15 L 88,32 Z"
              fill="url(#metalPillars)"
              stroke="#F8FAFC"
              strokeWidth="1.5"
              filter="url(#embossBancario)"
            />
            {/* Pediment Line */}
            <rect x="12" y="32" width="76" height="5" fill="#64748B" rx="1" />

            {/* Bank Pillars (Columns) */}
            <rect x="18" y="38" width="10" height="32" fill="url(#metalPillars)" filter="url(#embossBancario)" />
            <rect x="34" y="38" width="10" height="32" fill="url(#metalPillars)" filter="url(#embossBancario)" />
            <rect x="50" y="38" width="10" height="32" fill="url(#metalPillars)" filter="url(#embossBancario)" />
            <rect x="66" y="38" width="10" height="32" fill="url(#metalPillars)" filter="url(#embossBancario)" />

            {/* Temple Base Steps */}
            <rect x="10" y="70" width="80" height="5" fill="url(#metalPillars)" rx="1" filter="url(#embossBancario)" />
            <rect x="6" y="75" width="88" height="6" fill="#334155" rx="1" />

            {/* Integrated Warning / Alert Shield Motif overlay on the Right/Center */}
            <g transform="translate(48, 30)" filter="url(#embossBancario)">
              {/* Alert Triangle */}
              <polygon
                points="22,5 42,38 2,38"
                fill="url(#alertGrad)"
                stroke="#FCA5A5"
                strokeWidth="1.8"
              />
              {/* Exclamation Mark inside Triangle */}
              <rect x="20.5" y="14" width="3" height="12" rx="1.5" fill="#FFFFFF" />
              <circle cx="22" cy="31" r="2" fill="#FFFFFF" />
            </g>
          </svg>
        </div>
      );

    case 'laboral':
      return (
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-[#18335E] via-[#0B1E3D] to-[#051020] p-3 border-2 border-[#CBD5E1]/40 shadow-xl flex items-center justify-center group-hover:scale-108 group-hover:rotate-2 transition-all duration-300 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />

          <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-[0_6px_12px_rgba(0,0,0,0.7)]">
            <defs>
              <linearGradient id="briefcaseMetal" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="50%" stopColor="#CBD5E1" />
                <stop offset="100%" stopColor="#475569" />
              </linearGradient>

              <linearGradient id="emeraldSteel" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6EE7B7" />
                <stop offset="50%" stopColor="#10B981" />
                <stop offset="100%" stopColor="#047857" />
              </linearGradient>

              <filter id="embossLaboral">
                <feDropShadow dx="1" dy="2" stdDeviation="1" floodColor="#000" floodOpacity="0.8" />
              </filter>
            </defs>

            {/* Briefcase Handle */}
            <path
              d="M 38,36 L 38,26 C 38,23 41,21 44,21 L 56,21 C 59,21 62,23 62,26 L 62,36"
              fill="none"
              stroke="url(#briefcaseMetal)"
              strokeWidth="3.5"
              strokeLinecap="round"
              filter="url(#embossLaboral)"
            />

            {/* Briefcase Main Body */}
            <rect
              x="18"
              y="34"
              width="64"
              height="42"
              rx="6"
              fill="url(#briefcaseMetal)"
              stroke="#F8FAFC"
              strokeWidth="1.5"
              filter="url(#embossLaboral)"
            />

            {/* Briefcase Middle Divider Line & Locks */}
            <line x1="18" y1="52" x2="82" y2="52" stroke="#334155" strokeWidth="2" />
            <rect x="32" y="49" width="6" height="6" fill="#1E293B" rx="1" />
            <rect x="62" y="49" width="6" height="6" fill="#1E293B" rx="1" />

            {/* Integrated Gear / Cog Motif (ART & Protection) on Right Side */}
            <g transform="translate(56, 42)" filter="url(#embossLaboral)">
              {/* Gear Outer Circle with teeth */}
              <circle cx="18" cy="18" r="14" fill="url(#emeraldSteel)" stroke="#A7F3D0" strokeWidth="1.2" />
              {/* Gear Center Hole */}
              <circle cx="18" cy="18" r="6" fill="#0B1E3D" />
              {/* Gear Teeth */}
              <path
                d="M 18,1 L 18,6 M 18,30 L 18,35 M 1,18 L 6,18 M 30,18 L 35,18 M 6,6 L 10,10 M 26,26 L 30,30 M 6,30 L 10,26 M 26,10 L 30,6"
                stroke="url(#emeraldSteel)"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </g>

            {/* Worker Protection Arc over human silhouette (Center-Left) */}
            <g transform="translate(24, 42)">
              <circle cx="12" cy="12" r="3.5" fill="#0B1E3D" />
              <path d="M 5,24 C 5,17 19,17 19,24 Z" fill="#0B1E3D" />
            </g>
          </svg>
        </div>
      );

    default:
      return null;
  }
};
