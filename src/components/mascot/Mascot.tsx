import React from 'react';

interface MascotProps {
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
  className?: string;
}

export const Mascot: React.FC<MascotProps> = ({ 
  size = 'md', 
  animated = false, 
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32'
  };

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      <svg 
        viewBox="0 0 200 200" 
        className="w-full h-full"
        aria-label="Roleplay Platform Mascot"
      >
        <defs>
          <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5865F2" />
            <stop offset="100%" stopColor="#404EED" />
          </linearGradient>
          <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF73FA" />
            <stop offset="100%" stopColor="#4340FF" />
          </linearGradient>
        </defs>
        
        {/* Body */}
        <ellipse cx="100" cy="130" rx="45" ry="35" fill="url(#bodyGradient)" />
        
        {/* Head */}
        <circle cx="100" cy="80" r="35" fill="url(#bodyGradient)" />
        
        {/* Ears */}
        <ellipse cx="65" cy="65" rx="8" ry="15" fill="url(#bodyGradient)" transform="rotate(-30 65 65)" />
        <ellipse cx="135" cy="65" rx="8" ry="15" fill="url(#bodyGradient)" transform="rotate(30 135 65)" />
        
        {/* Eyes */}
        <ellipse cx="85" cy="75" rx="8" ry="6" fill="#FFFFFF" />
        <ellipse cx="115" cy="75" rx="8" ry="6" fill="#FFFFFF" />
        <circle cx="85" cy="75" r="4" fill="#000000" />
        <circle cx="115" cy="75" r="4" fill="#000000" />
        
        {/* RP elements */}
        <g transform="translate(70, 110)">
          <rect x="0" y="0" width="20" height="20" rx="3" fill="#FFFFFF" stroke="#5865F2" strokeWidth="2" />
          <circle cx="5" cy="5" r="2" fill="#5865F2" />
          <circle cx="15" cy="5" r="2" fill="#5865F2" />
          <circle cx="10" cy="10" r="2" fill="#5865F2" />
          <circle cx="5" cy="15" r="2" fill="#5865F2" />
          <circle cx="15" cy="15" r="2" fill="#5865F2" />
        </g>
        
        <g transform="translate(110, 110)">
          <path d="M10 0 L15 5 L10 10 L5 5 Z" fill="url(#accentGradient)" />
          <path d="M10 10 L10 20" stroke="#5865F2" strokeWidth="2" />
        </g>
        
        {/* Smile */}
        <path d="M85 90 Q100 100 115 90" stroke="#FFFFFF" strokeWidth="3" fill="none" />
        
        {/* Speech bubble */}
        <g transform="translate(130, 40)">
          <path d="M0 0 L20 0 L20 15 L10 25 L0 15 Z" fill="#5865F2" opacity="0.8" />
          <text x="10" y="12" textAnchor="middle" fontSize="8" fill="#FFFFFF" fontFamily="Arial">RP</text>
        </g>
        
        {/* Sparkles */}
        <circle cx="50" cy="40" r="3" fill="#FFD700" opacity="0.7" />
        <circle cx="150" cy="50" r="2" fill="#FFD700" opacity="0.7" />
        <circle cx="160" cy="90" r="2.5" fill="#FFD700" opacity="0.7" />
      </svg>
      
      {animated && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-2 h-2 bg-yellow-400 rounded-full animate-ping" />
          <div className="absolute bottom-0 left-0 w-1 h-1 bg-purple-400 rounded-full animate-pulse" />
        </div>
      )}
    </div>
  );
};
