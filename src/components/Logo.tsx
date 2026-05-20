import React from 'react';

export default function Logo({ className = "h-12 w-12" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Glow effect in background */}
      <circle cx="100" cy="100" r="80" fill="url(#magicGlow)" opacity="0.15" />

      {/* Sparks of magic around the staff */}
      <circle cx="50" cy="55" r="3" fill="#FBBF24" className="animate-pulse" />
      <circle cx="45" cy="85" r="2" fill="#FBBF24" opacity="0.8" />
      <path d="M 40 40 L 45 45 M 45 40 L 40 45" stroke="#FBBF24" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M 160 80 L 165 85 M 165 80 L 160 85" stroke="#FBBF24" strokeWidth="1.5" strokeLinecap="round" />

      {/* Magical Staff of Frieren (left side, leaning rightwards slightly) */}
      <g id="frieren-staff">
        {/* Staff handle (wood brown) */}
        <line x1="35" y1="165" x2="68" y2="45" stroke="#78350F" strokeWidth="6" strokeLinecap="round" />
        {/* Gold metal bands on wood */}
        <line x1="43" y1="135" x2="48" y2="136" stroke="#FBBF24" strokeWidth="6" />
        <line x1="53" y1="100" x2="58" y2="101" stroke="#FBBF24" strokeWidth="6" />

        {/* Staff Head - Large Golden Crescent Head */}
        <path
          d="M 64 60 C 50 50, 52 30, 70 24 C 85 20, 92 34, 88 48 C 84 62, 70 65, 64 60 Z"
          fill="#FBBF24"
          stroke="#D97706"
          strokeWidth="2"
        />
        {/* Inner magical glowing ruby sphere */}
        <circle cx="72" cy="40" r="10" fill="#EF4444" filter="url(#rubyGlow)" />
        {/* Gold Spear point tip of staff */}
        <path d="M 62 25 L 70 10 L 75 22 Z" fill="#FBBF24" stroke="#D97706" strokeWidth="1.5" />
        {/* Golden wing ornament on side of crescent */}
        <path d="M 85 40 C 95 42, 98 52, 90 56 C 85 58, 83 48, 85 40 Z" fill="#F3F4F6" opacity="0.9" />
        {/* Little gold ribbon tied to staff */}
        <path d="M 58 75 C 65 80, 70 95, 62 105 C 58 98, 52 82, 58 75 Z" fill="#EF4444" opacity="0.9" />
        <path d="M 57 76 C 68 85, 64 100, 74 110" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" />
      </g>

      {/* Wizard Hat (placed near top of cat head) */}
      <g id="wizard-hat">
        {/* Purple Hat Cone */}
        <path
          d="M 95 72 L 132 20 C 135 15, 142 18, 141 25 L 148 68 Z"
          fill="#6D28D9"
          stroke="#4C1D95"
          strokeWidth="2"
        />
        {/* Gold Hat Ribbon Band */}
        <path
          d="M 103 66 L 145 62 L 147 68 L 105 72 Z"
          fill="#FBBF24"
          stroke="#D97706"
          strokeWidth="1"
        />
        {/* Hat Tip Star/Bell decoration */}
        <circle cx="132" cy="20" r="4" fill="#FBBF24" />
      </g>

      {/* Cute White Cat (Main Character) */}
      <g id="white-cat">
        {/* Cat Back & Body (slightly leaning right to face viewer) */}
        <path
          d="M 95 160 C 85 130, 95 95, 125 90 C 155 85, 170 115, 160 160 Z"
          fill="#FFFFFF"
          stroke="#E5E7EB"
          strokeWidth="3"
        />

        {/* Cat Ears */}
        {/* Left Ear */}
        <path
          d="M 100 95 L 90 70 L 115 84 Z"
          fill="#FFFFFF"
          stroke="#E5E7EB"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path d="M 96 90 L 93 76 L 108 84 Z" fill="#FCA5A5" opacity="0.6" /> {/* Pink inside left ear */}

        {/* Right Ear */}
        <path
          d="M 135 84 L 148 60 L 152 88 Z"
          fill="#FFFFFF"
          stroke="#E5E7EB"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path d="M 138 82 L 145 67 L 147 84 Z" fill="#FCA5A5" opacity="0.6" /> {/* Pink inside right ear */}

        {/* Cat Head */}
        <ellipse cx="125" cy="110" rx="28" ry="24" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="3" />

        {/* Magical Wizard Cloak/Cape (over the body) */}
        {/* Purple Cape covering chest and back */}
        <path
          d="M 98 122 C 102 118, 120 115, 126 120 C 132 115, 150 118, 152 124 C 158 140, 162 160, 158 165 C 130 170, 105 166, 96 155 C 94 145, 95 130, 98 122 Z"
          fill="#7C3AED"
          stroke="#5B21B6"
          strokeWidth="2"
        />
        {/* Gold Brooch/Gem in center of cape */}
        <circle cx="125" cy="126" r="6" fill="#FBBF24" stroke="#D97706" strokeWidth="1" />
        <circle cx="125" cy="126" r="3" fill="#3B82F6" /> {/* Blue sapphire inside gold clasp */}

        {/* Cat Face details */}
        {/* Golden Sparkly Eyes */}
        <circle cx="113" cy="106" r="4" fill="#FBBF24" />
        <circle cx="114" cy="105" r="1.5" fill="#FFFFFF" /> {/* Eye reflection */}
        
        <circle cx="137" cy="106" r="4" fill="#FBBF24" />
        <circle cx="138" cy="105" r="1.5" fill="#FFFFFF" /> {/* Eye reflection */}

        {/* Cat Nose & Mouth (Frieren classic expressions, soft cat smile) */}
        <path d="M 125 110 L 125 113" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M 121 114 C 123 116, 125 115, 125 113 C 125 115, 127 116, 129 114" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" />

        {/* Cute Pink Cheeks Rosy blush */}
        <ellipse cx="106" cy="112" rx="4" ry="2.5" fill="#FCA5A5" opacity="0.7" />
        <ellipse cx="144" cy="112" rx="4" ry="2.5" fill="#FCA5A5" opacity="0.7" />

        {/* Cat Whiskers */}
        <line x1="92" y1="110" x2="82" y2="108" stroke="#D1D5DB" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="91" y1="114" x2="80" y2="114" stroke="#D1D5DB" strokeWidth="1.5" strokeLinecap="round" />
        
        <line x1="158" y1="110" x2="168" y2="108" stroke="#D1D5DB" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="159" y1="114" x2="170" y2="114" stroke="#D1D5DB" strokeWidth="1.5" strokeLinecap="round" />

        {/* White Cat Paws holding the staff */}
        {/* Left Paw holding staff */}
        <circle cx="58" cy="108" r="7" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1.5" />
        {/* Right Paw waving or rested on chest */}
        <circle cx="108" cy="138" r="6" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1.5" />
      </g>

      {/* Audio/Spell Waves (Golden Arc under logo) */}
      <path
        d="M 30 180 C 70 195, 130 195, 170 180"
        stroke="url(#mysticGradient)"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.8"
      />

      {/* Gradients and Filters Definitions */}
      <defs>
        <radialGradient id="magicGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#A78BFA" />
          <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="rubyGlow" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#F87171" />
          <stop offset="60%" stopColor="#EF4444" />
          <stop offset="100%" stopColor="#B91C1C" />
        </radialGradient>
        <linearGradient id="mysticGradient" x1="30" y1="180" x2="170" y2="180" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0" />
          <stop offset="30%" stopColor="#FBBF24" />
          <stop offset="70%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#EF4444" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
