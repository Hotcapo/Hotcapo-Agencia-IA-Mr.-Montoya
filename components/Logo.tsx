
import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "h-8" }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg viewBox="0 0 100 100" className="w-8 h-8 fill-none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 80V20L50 50L80 20V80" stroke="url(#paint0_linear)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="50" cy="50" r="10" fill="url(#paint1_radial)" className="animate-pulse" />
        <defs>
          <linearGradient id="paint0_linear" x1="20" y1="20" x2="80" y2="80" gradientUnits="userSpaceOnUse">
            <stop stopColor="#38BDF8" />
            <stop offset="1" stopColor="#818CF8" />
          </linearGradient>
          <radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(50 50) rotate(90) scale(10)">
            <stop stopColor="#38BDF8" />
            <stop offset="1" stopColor="#818CF8" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
      <span className="text-xl font-extrabold tracking-tighter text-white">
        MR.MONTOYA<span className="text-sky-400">IA</span>
      </span>
    </div>
  );
};

export default Logo;
