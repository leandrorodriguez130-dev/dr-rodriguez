import React from 'react';

interface CaseCardIconProps {
  title: string;
}

export const CaseCardIcon: React.FC<CaseCardIconProps> = ({ title }) => {
  // Shared Navy Blue Palette SVG Defs & Filters
  const renderContainer = (children: React.ReactNode) => (
    <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-2xl bg-gradient-to-br from-[#EFEAE1] via-[#F5F0E8] to-[#E3DCCF] border-2 border-[#1B2A49]/30 shadow-md flex items-center justify-center p-2.5 group-hover:scale-108 group-hover:rotate-1 transition-all duration-300 relative overflow-hidden shrink-0">
      {/* Metallic specular highlight */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/25 to-transparent pointer-events-none" />
      {children}
    </div>
  );

  const sharedSvgDefs = (
    <defs>
      {/* Primary Navy Blue Metal Gradient */}
      <linearGradient id="petrolMetal" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#314B7D" />
        <stop offset="45%" stopColor="#1B2A49" />
        <stop offset="100%" stopColor="#12203A" />
      </linearGradient>

      {/* Lighter Navy Blue Accent Gradient */}
      <linearGradient id="petrolLight" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#5072A7" />
        <stop offset="100%" stopColor="#253C66" />
      </linearGradient>

      {/* Terracotta / Rust Accent Gradient */}
      <linearGradient id="terracottaAccent" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#E07A5F" />
        <stop offset="100%" stopColor="#A8432E" />
      </linearGradient>

      {/* Antique Bronze / Olive Accent Gradient */}
      <linearGradient id="bronzeAccent" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#C89D52" />
        <stop offset="100%" stopColor="#7E5C23" />
      </linearGradient>

      {/* Deep Emboss Shadow */}
      <filter id="petrolEmboss">
        <feDropShadow dx="1" dy="2" stdDeviation="1" floodColor="#12203A" floodOpacity="0.75" />
      </filter>
    </defs>
  );

  // 1. Me acusan de algo que no hice
  if (title.includes('no hice')) {
    return renderContainer(
      <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-sm">
        {sharedSvgDefs}
        {/* Innocence Shield */}
        <path
          d="M 50,12 L 80,24 C 80,58 50,84 50,84 C 50,84 20,58 20,24 Z"
          fill="url(#petrolMetal)"
          stroke="#1B2A49"
          strokeWidth="2"
          filter="url(#petrolEmboss)"
        />
        {/* Person Silhouette inside Shield */}
        <circle cx="50" cy="38" r="8" fill="url(#terracottaAccent)" />
        <path
          d="M 34,62 C 34,50 66,50 66,62 Z"
          fill="url(#terracottaAccent)"
          filter="url(#petrolEmboss)"
        />
        {/* Question Mark Badge on Right */}
        <circle cx="68" cy="30" r="11" fill="url(#petrolLight)" stroke="#F5F0E8" strokeWidth="1.5" />
        <text x="68" y="35" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="900" fontFamily="sans-serif">?</text>
      </svg>
    );
  }

  // 2. Tengo una imputación penal
  if (title.includes('imputación penal')) {
    return renderContainer(
      <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-sm">
        {sharedSvgDefs}
        {/* Judicial Folder / Expediente */}
        <rect x="20" y="24" width="60" height="56" rx="4" fill="url(#petrolMetal)" stroke="#1B2A49" strokeWidth="2" filter="url(#petrolEmboss)" />
        <path d="M 20,34 L 80,34" stroke="#F5F0E8" strokeWidth="1.5" opacity="0.6" />
        {/* Folder Tab */}
        <path d="M 20,24 L 42,24 L 48,30 L 80,30" fill="none" stroke="url(#petrolLight)" strokeWidth="2" />
        {/* Document Lines */}
        <line x1="30" y1="44" x2="70" y2="44" stroke="#F5F0E8" strokeWidth="2" strokeLinecap="round" />
        <line x1="30" y1="52" x2="60" y2="52" stroke="#F5F0E8" strokeWidth="2" strokeLinecap="round" />
        {/* Official Terracotta Wax Seal */}
        <circle cx="64" cy="62" r="12" fill="url(#terracottaAccent)" filter="url(#petrolEmboss)" />
        <path d="M 60,62 L 68,62 M 64,58 L 64,66" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  // 3. Me detuvieron con estupefacientes
  if (title.includes('estupefacientes')) {
    return renderContainer(
      <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-sm">
        {sharedSvgDefs}
        {/* Stylized Leaf Motif */}
        <path
          d="M 50,15 C 30,30 25,55 50,75 C 75,55 70,30 50,15 Z"
          fill="url(#petrolLight)"
          opacity="0.8"
          filter="url(#petrolEmboss)"
        />
        <line x1="50" y1="20" x2="50" y2="72" stroke="#1B2A49" strokeWidth="2" />
        {/* Metallic Detention Handcuffs overlay */}
        <circle cx="36" cy="58" r="14" fill="none" stroke="url(#petrolMetal)" strokeWidth="4" filter="url(#petrolEmboss)" />
        <circle cx="64" cy="58" r="14" fill="none" stroke="url(#petrolMetal)" strokeWidth="4" filter="url(#petrolEmboss)" />
        <path d="M 50,58 L 50,58" stroke="url(#terracottaAccent)" strokeWidth="3" />
        <rect x="46" y="55" width="8" height="6" fill="url(#terracottaAccent)" rx="1" />
      </svg>
    );
  }

  // 4. Me acusan de robo o hurto
  if (title.includes('robo o hurto')) {
    return renderContainer(
      <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-sm">
        {sharedSvgDefs}
        {/* Mask / Intruder Silhouette */}
        <path
          d="M 22,35 C 22,25 35,20 50,20 C 65,20 78,25 78,35 C 78,45 65,50 50,50 C 35,50 22,45 22,35 Z"
          fill="url(#petrolMetal)"
          filter="url(#petrolEmboss)"
        />
        {/* Mask Eye Slits */}
        <ellipse cx="38" cy="35" rx="6" ry="4" fill="#F5F0E8" />
        <ellipse cx="62" cy="35" rx="6" ry="4" fill="#F5F0E8" />
        {/* Scales of Justice overlaid in Terracotta */}
        <path d="M 50,50 L 50,82 M 30,62 L 70,62" stroke="url(#terracottaAccent)" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M 30,62 L 22,76 L 38,76 Z" fill="url(#terracottaAccent)" />
        <path d="M 70,62 L 62,76 L 78,76 Z" fill="url(#terracottaAccent)" />
      </svg>
    );
  }

  // 5. Quiero mejorar mi situación estando detenido
  if (title.includes('situación estando detenido')) {
    return renderContainer(
      <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-sm">
        {sharedSvgDefs}
        {/* Prison Bars Frame */}
        <rect x="18" y="18" width="64" height="64" rx="4" fill="none" stroke="url(#petrolMetal)" strokeWidth="3" filter="url(#petrolEmboss)" />
        <line x1="34" y1="18" x2="34" y2="82" stroke="url(#petrolMetal)" strokeWidth="2.5" />
        <line x1="66" y1="18" x2="66" y2="82" stroke="url(#petrolMetal)" strokeWidth="2.5" />
        {/* Opening Cell Door in Center with Sun Rays */}
        <rect x="42" y="18" width="16" height="64" fill="url(#bronzeAccent)" opacity="0.3" />
        {/* Key of Freedom / Light Rays */}
        <circle cx="50" cy="42" r="10" fill="url(#bronzeAccent)" filter="url(#petrolEmboss)" />
        <path d="M 50,52 L 50,72 M 50,60 L 58,60 M 50,66 L 56,66" stroke="url(#bronzeAccent)" strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }

  // 6. Estoy detenido y no debería estarlo
  if (title.includes('detenido y no debería')) {
    return renderContainer(
      <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-sm">
        {sharedSvgDefs}
        {/* Snapped / Broken Handcuff */}
        <circle cx="32" cy="52" r="15" fill="none" stroke="url(#petrolMetal)" strokeWidth="4" filter="url(#petrolEmboss)" />
        <circle cx="68" cy="52" r="15" fill="none" stroke="url(#petrolMetal)" strokeWidth="4" filter="url(#petrolEmboss)" />
        {/* Broken Chain Link */}
        <path d="M 47,48 L 51,44 M 53,56 L 49,60" stroke="url(#terracottaAccent)" strokeWidth="3.5" strokeLinecap="round" />
        {/* Freedom Wings / Habeas Corpus Scroll Symbol */}
        <path d="M 20,30 Q 50,15 80,30 Q 50,22 20,30 Z" fill="url(#terracottaAccent)" filter="url(#petrolEmboss)" />
      </svg>
    );
  }

  // 7. Me estafaron por WhatsApp o redes sociales
  if (title.includes('WhatsApp')) {
    return renderContainer(
      <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-sm">
        {sharedSvgDefs}
        {/* Smartphone Outline */}
        <rect x="28" y="16" width="44" height="68" rx="8" fill="url(#petrolMetal)" stroke="#1B2A49" strokeWidth="2" filter="url(#petrolEmboss)" />
        <rect x="32" y="24" width="36" height="50" rx="3" fill="#F5F0E8" />
        {/* Phishing Hook / Warning Alert inside Phone */}
        <path d="M 50,30 L 50,48 Q 50,56 42,56 Q 36,56 36,50" fill="none" stroke="url(#terracottaAccent)" strokeWidth="3" strokeLinecap="round" />
        {/* Warning Triangle */}
        <polygon points="50,28 62,48 38,48" fill="url(#terracottaAccent)" filter="url(#petrolEmboss)" />
        <text x="50" y="44" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">!</text>
      </svg>
    );
  }

  // 8. Me vaciaron la cuenta bancaria
  if (title.includes('cuenta bancaria')) {
    return renderContainer(
      <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-sm">
        {sharedSvgDefs}
        {/* Bank Card Base */}
        <rect x="18" y="22" width="64" height="42" rx="6" fill="url(#petrolMetal)" stroke="#1B2A49" strokeWidth="2" filter="url(#petrolEmboss)" />
        <rect x="24" y="30" width="12" height="10" rx="2" fill="url(#bronzeAccent)" />
        {/* Empty Vault / Broken Dollar Overlay */}
        <circle cx="62" cy="62" r="18" fill="#F5F0E8" stroke="url(#terracottaAccent)" strokeWidth="2.5" filter="url(#petrolEmboss)" />
        <text x="62" y="68" textAnchor="middle" fill="#A8432E" fontSize="18" fontWeight="900">$</text>
        <line x1="50" y1="72" x2="74" y2="52" stroke="#A8432E" strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }

  // 9. Intereses imposibles de pagar
  if (title.includes('Intereses')) {
    return renderContainer(
      <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-sm">
        {sharedSvgDefs}
        {/* Percentage % Sign */}
        <text x="32" y="52" fill="url(#petrolMetal)" fontSize="34" fontWeight="900" filter="url(#petrolEmboss)">%</text>
        {/* Exploding / Soaring Debt Arrow */}
        <path d="M 20,78 L 45,55 L 60,65 L 82,24" fill="none" stroke="url(#terracottaAccent)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <polygon points="82,24 68,26 78,38" fill="url(#terracottaAccent)" />
        {/* Heavy Chain Link */}
        <circle cx="30" cy="74" r="8" fill="none" stroke="url(#petrolMetal)" strokeWidth="2.5" />
      </svg>
    );
  }

  // 10. Un banco o financiera me cobra de más
  if (title.includes('cobra de más')) {
    return renderContainer(
      <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-sm">
        {sharedSvgDefs}
        {/* Bank Columns */}
        <path d="M 18,34 L 50,18 L 82,34 Z" fill="url(#petrolMetal)" filter="url(#petrolEmboss)" />
        <rect x="22" y="38" width="8" height="30" fill="url(#petrolMetal)" />
        <rect x="38" y="38" width="8" height="30" fill="url(#petrolMetal)" />
        <rect x="54" y="38" width="8" height="30" fill="url(#petrolMetal)" />
        <rect x="70" y="38" width="8" height="30" fill="url(#petrolMetal)" />
        <rect x="16" y="68" width="68" height="6" fill="url(#petrolMetal)" rx="1" />
        {/* Exclamation / Overflow Receipt Tag */}
        <rect x="56" y="36" width="26" height="36" rx="3" fill="url(#terracottaAccent)" filter="url(#petrolEmboss)" />
        <text x="69" y="60" textAnchor="middle" fill="#FFFFFF" fontSize="20" fontWeight="bold">!</text>
      </svg>
    );
  }

  // 11. Compré algo con defectos ocultos
  if (title.includes('defectos ocultos')) {
    return renderContainer(
      <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-sm">
        {sharedSvgDefs}
        {/* Package Box */}
        <polygon points="50,18 80,32 80,68 50,84 20,68 20,32" fill="url(#petrolMetal)" stroke="#1B2A49" strokeWidth="2" filter="url(#petrolEmboss)" />
        <line x1="50" y1="18" x2="50" y2="84" stroke="#F5F0E8" strokeWidth="1.5" opacity="0.6" />
        <line x1="20" y1="32" x2="50" y2="48" stroke="#F5F0E8" strokeWidth="1.5" opacity="0.6" />
        <line x1="80" y1="32" x2="50" y2="48" stroke="#F5F0E8" strokeWidth="1.5" opacity="0.6" />
        {/* Magnifying Glass with Defect Crack */}
        <circle cx="58" cy="52" r="14" fill="#F5F0E8" stroke="url(#terracottaAccent)" strokeWidth="3" filter="url(#petrolEmboss)" />
        <path d="M 52,46 L 58,54 L 64,50" stroke="url(#terracottaAccent)" strokeWidth="2" fill="none" />
        <line x1="68" y1="62" x2="78" y2="72" stroke="url(#terracottaAccent)" strokeWidth="4" strokeLinecap="round" />
      </svg>
    );
  }

  // 12. Me entregaron algo distinto a lo prometido
  if (title.includes('distinto a lo prometido')) {
    return renderContainer(
      <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-sm">
        {sharedSvgDefs}
        {/* Shopping Bag / Package 1 */}
        <rect x="18" y="32" width="30" height="42" rx="4" fill="url(#petrolMetal)" stroke="#1B2A49" strokeWidth="2" filter="url(#petrolEmboss)" />
        <path d="M 26,32 Q 33,20 40,32" fill="none" stroke="url(#petrolLight)" strokeWidth="2.5" />
        {/* Mismatched Package 2 */}
        <rect x="52" y="32" width="30" height="42" rx="4" fill="url(#terracottaAccent)" stroke="#A8432E" strokeWidth="2" filter="url(#petrolEmboss)" />
        <path d="M 60,32 Q 67,20 74,32" fill="none" stroke="#F5F0E8" strokeWidth="2.5" />
        {/* Not Equal Symbol ≠ in Center */}
        <text x="50" y="58" textAnchor="middle" fill="#1B2A49" fontSize="22" fontWeight="900">≠</text>
      </svg>
    );
  }

  // 13. Me despidieron sin causa
  if (title.includes('despidieron sin causa')) {
    return renderContainer(
      <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-sm">
        {sharedSvgDefs}
        {/* Briefcase */}
        <rect x="22" y="38" width="38" height="28" rx="4" fill="url(#petrolMetal)" stroke="#1B2A49" strokeWidth="1.5" filter="url(#petrolEmboss)" />
        <path d="M 34,38 L 34,32 C 34,30 36,28 38,28 L 44,28 C 46,28 48,30 48,32 L 48,38" fill="none" stroke="url(#petrolMetal)" strokeWidth="2" />
        {/* Person Leaving Silhouette */}
        <circle cx="68" cy="34" r="7" fill="url(#terracottaAccent)" />
        <path d="M 58,58 C 58,46 78,46 78,58 Z" fill="url(#terracottaAccent)" filter="url(#petrolEmboss)" />
        {/* Dismissal Telegram Notice Icon */}
        <rect x="50" y="56" width="30" height="20" rx="2" fill="#F5F0E8" stroke="url(#terracottaAccent)" strokeWidth="1.5" />
        <line x1="54" y1="62" x2="74" y2="62" stroke="url(#terracottaAccent)" strokeWidth="1.5" />
        <line x1="54" y1="68" x2="68" y2="68" stroke="url(#terracottaAccent)" strokeWidth="1.5" />
      </svg>
    );
  }

  // 14. Trabajo en negro
  if (title.includes('Trabajo en negro')) {
    return renderContainer(
      <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-sm">
        {sharedSvgDefs}
        {/* Shadow Worker Silhouette */}
        <circle cx="40" cy="36" r="9" fill="url(#petrolMetal)" filter="url(#petrolEmboss)" />
        <path d="M 22,62 C 22,48 58,48 58,62 Z" fill="url(#petrolMetal)" filter="url(#petrolEmboss)" />
        {/* Unrecorded / Slash Document */}
        <rect x="52" y="36" width="30" height="42" rx="3" fill="#F5F0E8" stroke="url(#terracottaAccent)" strokeWidth="2" filter="url(#petrolEmboss)" />
        <line x1="58" y1="46" x2="76" y2="46" stroke="url(#terracottaAccent)" strokeWidth="1.5" />
        <line x1="58" y1="54" x2="76" y2="54" stroke="url(#terracottaAccent)" strokeWidth="1.5" />
        <circle cx="67" cy="64" r="6" fill="url(#terracottaAccent)" />
        <path d="M 64,61 L 70,67 M 70,61 L 64,67" stroke="#FFFFFF" strokeWidth="1.5" />
      </svg>
    );
  }

  // 15. No me pagan lo que corresponde
  if (title.includes('no me pagan')) {
    return renderContainer(
      <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-sm">
        {sharedSvgDefs}
        {/* Stack of Salary Coins */}
        <ellipse cx="38" cy="68" rx="18" ry="6" fill="url(#petrolMetal)" />
        <ellipse cx="38" cy="58" rx="18" ry="6" fill="url(#petrolMetal)" stroke="#F5F0E8" strokeWidth="1" />
        <ellipse cx="38" cy="48" rx="18" ry="6" fill="url(#petrolMetal)" stroke="#F5F0E8" strokeWidth="1" />
        {/* Deficit / Minus Indicator in Terracotta */}
        <circle cx="68" cy="42" r="14" fill="url(#terracottaAccent)" filter="url(#petrolEmboss)" />
        <rect x="60" y="40" width="16" height="4" fill="#FFFFFF" rx="1" />
      </svg>
    );
  }

  // 16. Accidente de trabajo y la ART no responde
  if (title.includes('ART no responde')) {
    return renderContainer(
      <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-sm">
        {sharedSvgDefs}
        {/* Industrial Gear */}
        <circle cx="38" cy="48" r="18" fill="url(#petrolMetal)" filter="url(#petrolEmboss)" />
        <circle cx="38" cy="48" r="8" fill="#F5F0E8" />
        {/* ART Medical Cross Shield on Right */}
        <path d="M 58,30 L 82,30 C 82,56 58,74 58,74 C 58,74 34,56 34,30 Z" fill="url(#terracottaAccent)" opacity="0.9" filter="url(#petrolEmboss)" />
        <path d="M 58,40 L 58,58 M 49,49 L 67,49" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }

  // 17. Acoso laboral (Mobbing)
  if (title.includes('Acoso laboral')) {
    return renderContainer(
      <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-sm">
        {sharedSvgDefs}
        {/* Central Person Profile */}
        <circle cx="50" cy="42" r="9" fill="url(#petrolMetal)" filter="url(#petrolEmboss)" />
        <path d="M 32,68 C 32,54 68,54 68,68 Z" fill="url(#petrolMetal)" filter="url(#petrolEmboss)" />
        {/* Hostile Pressure Arrows pointing inwards */}
        <path d="M 18,30 L 32,38" stroke="url(#terracottaAccent)" strokeWidth="3" strokeLinecap="round" />
        <path d="M 82,30 L 68,38" stroke="url(#terracottaAccent)" strokeWidth="3" strokeLinecap="round" />
        <path d="M 18,60 L 30,56" stroke="url(#terracottaAccent)" strokeWidth="3" strokeLinecap="round" />
        <path d="M 82,60 L 70,56" stroke="url(#terracottaAccent)" strokeWidth="3" strokeLinecap="round" />
        {/* Protective Dignity Barrier Arc */}
        <path d="M 28,26 A 26,26 0 0,1 72,26" fill="none" stroke="url(#petrolLight)" strokeWidth="2.5" />
      </svg>
    );
  }

  // 18. Me presionan para renunciar
  if (title.includes('presionan para renunciar')) {
    return renderContainer(
      <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-sm">
        {sharedSvgDefs}
        {/* Resignation Telegram Document */}
        <rect x="22" y="20" width="56" height="60" rx="4" fill="url(#petrolMetal)" stroke="#1B2A49" strokeWidth="2" filter="url(#petrolEmboss)" />
        <line x1="30" y1="32" x2="70" y2="32" stroke="#F5F0E8" strokeWidth="2" />
        <line x1="30" y1="42" x2="60" y2="42" stroke="#F5F0E8" strokeWidth="2" />
        {/* Pen / Pressure Hand Signature */}
        <path d="M 30,58 L 50,58" stroke="url(#terracottaAccent)" strokeWidth="3" strokeLinecap="round" />
        {/* Stop Hand Warning Badge */}
        <circle cx="68" cy="62" r="14" fill="url(#terracottaAccent)" filter="url(#petrolEmboss)" />
        <path d="M 68,54 L 68,64 M 68,68 L 68,70" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    );
  }

  // 19. Quiero divorciarme
  if (title.includes('divorciarme')) {
    return renderContainer(
      <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-sm">
        {sharedSvgDefs}
        {/* Separating Ring 1 */}
        <ellipse cx="36" cy="50" rx="16" ry="12" fill="none" stroke="url(#petrolMetal)" strokeWidth="3.5" filter="url(#petrolEmboss)" />
        {/* Separating Ring 2 */}
        <ellipse cx="64" cy="50" rx="16" ry="12" fill="none" stroke="url(#petrolMetal)" strokeWidth="3.5" filter="url(#petrolEmboss)" />
        {/* Break Slash Line */}
        <line x1="48" y1="32" x2="52" y2="68" stroke="url(#terracottaAccent)" strokeWidth="3" strokeLinecap="round" />
        {/* Regulatory Proposal Scroll Icon */}
        <path d="M 38,72 L 62,72" stroke="url(#bronzeAccent)" strokeWidth="2" />
      </svg>
    );
  }

  // 20. No me dejan ver a mis hijos
  if (title.includes('ver a mis hijos')) {
    return renderContainer(
      <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-sm">
        {sharedSvgDefs}
        {/* Child Silhouette in Center */}
        <circle cx="50" cy="38" r="7" fill="url(#bronzeAccent)" />
        <path d="M 38,58 C 38,48 62,48 62,58 Z" fill="url(#bronzeAccent)" filter="url(#petrolEmboss)" />
        {/* Parent Reaching Hands Barrier Arc */}
        <path d="M 20,62 C 20,32 34,22 42,28" stroke="url(#petrolMetal)" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M 80,62 C 80,32 66,22 58,28" stroke="url(#terracottaAccent)" strokeWidth="3" fill="none" strokeLinecap="round" />
      </svg>
    );
  }

  // 21. No me pagan la cuota de alimentos
  if (title.includes('cuota de alimentos')) {
    return renderContainer(
      <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-sm">
        {sharedSvgDefs}
        {/* Family Support Bowl */}
        <path d="M 22,48 C 22,68 78,68 78,48 Z" fill="url(#petrolMetal)" filter="url(#petrolEmboss)" />
        <rect x="20" y="44" width="60" height="5" fill="url(#petrolMetal)" rx="1" />
        {/* Judicial Enforcement Gavel on Top */}
        <rect x="42" y="22" width="28" height="12" rx="2" fill="url(#terracottaAccent)" filter="url(#petrolEmboss)" />
        <line x1="56" y1="34" x2="56" y2="50" stroke="url(#terracottaAccent)" strokeWidth="3" />
      </svg>
    );
  }

  // 22. La cuota alimentaria quedó desactualizada
  if (title.includes('desactualizada')) {
    return renderContainer(
      <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-sm">
        {sharedSvgDefs}
        {/* Rising Chart Arrow */}
        <path d="M 20,72 L 40,55 L 58,62 L 80,26" fill="none" stroke="url(#terracottaAccent)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <polygon points="80,26 68,28 76,38" fill="url(#terracottaAccent)" />
        {/* Family / Child Coins Icon */}
        <circle cx="34" cy="42" r="8" fill="url(#petrolMetal)" filter="url(#petrolEmboss)" />
        <text x="34" y="46" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="bold">$</text>
      </svg>
    );
  }

  // 23. Conflicto por una herencia
  if (title.includes('herencia')) {
    return renderContainer(
      <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-sm">
        {sharedSvgDefs}
        {/* Estate House Outline */}
        <path d="M 22,44 L 50,22 L 78,44 L 78,74 L 22,74 Z" fill="url(#petrolMetal)" stroke="#1B2A49" strokeWidth="2" filter="url(#petrolEmboss)" />
        {/* Dispute Slash / Balance Overlay */}
        <line x1="50" y1="22" x2="50" y2="74" stroke="url(#terracottaAccent)" strokeWidth="2.5" />
        <path d="M 32,52 L 68,52" stroke="url(#bronzeAccent)" strokeWidth="2.5" />
      </svg>
    );
  }

  // 24. Tramitar una sucesión (or default fallback)
  return renderContainer(
    <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-sm">
      {sharedSvgDefs}
      {/* Succession Deed Scroll */}
      <rect x="24" y="18" width="52" height="64" rx="4" fill="url(#petrolMetal)" stroke="#1B2A49" strokeWidth="2" filter="url(#petrolEmboss)" />
      <line x1="32" y1="30" x2="68" y2="30" stroke="#F5F0E8" strokeWidth="2" />
      <line x1="32" y1="40" x2="68" y2="40" stroke="#F5F0E8" strokeWidth="2" />
      <line x1="32" y1="50" x2="58" y2="50" stroke="#F5F0E8" strokeWidth="2" />
      {/* Wax Seal with House Key */}
      <circle cx="62" cy="62" r="11" fill="url(#terracottaAccent)" filter="url(#petrolEmboss)" />
      <path d="M 58,62 L 66,62 M 64,58 L 64,66" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
};
