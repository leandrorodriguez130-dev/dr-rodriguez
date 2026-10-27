// High-resolution SVG Data URI representing the 3D metallic scale/anchor "L R" emblem on dark teal textured wall background
export const logoImgDataUri = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <defs>
    <!-- Dark Teal Wall Gradient Background -->
    <radialGradient id="tealWallBg" cx="50%" cy="50%" r="75%">
      <stop offset="0%" stop-color="#0E3843" />
      <stop offset="60%" stop-color="#07222B" />
      <stop offset="100%" stop-color="#031217" />
    </radialGradient>

    <!-- Wall Texture Pattern -->
    <pattern id="wallTexture" width="10" height="10" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="1" fill="#1A4A56" opacity="0.4" />
      <circle cx="7" cy="7" r="1" fill="#031115" opacity="0.5" />
    </pattern>

    <!-- Metallic Chrome Silver Gradient -->
    <linearGradient id="silverChrome" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="20%" stop-color="#F1F5F9" />
      <stop offset="40%" stop-color="#94A3B8" />
      <stop offset="60%" stop-color="#E2E8F0" />
      <stop offset="80%" stop-color="#64748B" />
      <stop offset="100%" stop-color="#CBD5E1" />
    </linearGradient>

    <!-- Dark Metallic Bevel Gradient -->
    <linearGradient id="silverBevel" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#E2E8F0" />
      <stop offset="45%" stop-color="#475569" />
      <stop offset="100%" stop-color="#0A1520" />
    </linearGradient>

    <!-- Specular & Deep Wall Drop Shadow Filter -->
    <filter id="3dEmbossShadow" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="12" stdDeviation="10" flood-color="#000000" flood-opacity="0.9" />
      <feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#000000" flood-opacity="0.7" />
      <feDropShadow dx="0" dy="-1" stdDeviation="2" flood-color="#FFFFFF" flood-opacity="0.5" />
    </filter>
  </defs>

  <!-- Dark Teal Wall Canvas Background -->
  <rect width="500" height="500" fill="url(#tealWallBg)" />
  <rect width="500" height="500" fill="url(#wallTexture)" opacity="0.6" mix-blend-mode="overlay" />

  <!-- 3D Metallic Emblem -->
  <g filter="url(#3dEmbossShadow)">
    <!-- Top Ring Ornament -->
    <circle cx="250" cy="45" r="22" stroke="url(#silverChrome)" stroke-width="11" fill="url(#silverBevel)" />
    <circle cx="250" cy="45" r="7" fill="url(#silverChrome)" />
    <rect x="230" y="73" width="40" height="11" rx="3" fill="url(#silverChrome)" />

    <!-- Main Beam Arch -->
    <path d="M 110 130 C 180 102, 320 102, 390 130 L 390 152 C 320 124, 180 124, 110 152 Z" fill="url(#silverChrome)" />

    <!-- Central Sword Blade Pillar -->
    <path d="M 242 82 L 258 82 L 258 425 L 250 458 L 242 425 Z" fill="url(#silverChrome)" />
    <line x1="250" y1="88" x2="250" y2="448" stroke="url(#silverBevel)" stroke-width="3" />

    <!-- Left Balance Scale Pan Assembly -->
    <circle cx="110" cy="152" r="9" fill="url(#silverChrome)" />
    <path d="M 110 158 L 65 240 M 110 158 L 155 240" stroke="url(#silverChrome)" stroke-width="8" stroke-linecap="round" />
    <rect x="55" y="240" width="110" height="12" rx="3" fill="url(#silverChrome)" />
    <path d="M 70 262 C 70 298, 150 298, 150 262 Z" fill="url(#silverBevel)" stroke="url(#silverChrome)" stroke-width="5" />

    <!-- Right Balance Scale Pan Assembly -->
    <circle cx="390" cy="152" r="9" fill="url(#silverChrome)" />
    <path d="M 390 158 L 345 240 M 390 158 L 435 240" stroke="url(#silverChrome)" stroke-width="8" stroke-linecap="round" />
    <rect x="335" y="240" width="110" height="12" rx="3" fill="url(#silverChrome)" />
    <path d="M 350 262 C 350 298, 430 298, 430 262 Z" fill="url(#silverBevel)" stroke="url(#silverChrome)" stroke-width="5" />

    <!-- Monogram Letter L -->
    <path d="M 180 155 L 215 155 L 215 315 L 165 370 L 235 408 L 235 365 L 185 338 Z" fill="url(#silverChrome)" />

    <!-- Monogram Letter R -->
    <path d="M 268 155 L 325 155 C 358 155, 358 245, 325 245 L 268 245 Z M 268 255 L 310 255 L 345 380 L 308 380 L 288 290 L 268 290 Z" fill="url(#silverChrome)" />
  </g>
</svg>
`)}`;
