import React from 'react';

/**
 * Componente de identidad visual para M. Skills IA.
 * @param className Clases de utilidad para controlar dimensiones del logo.
 */
const Logo: React.FC<{ className?: string }> = ({ className = "h-16 md:h-20" }) => {
  return (
    <div className={`flex items-center justify-center ${className} transition-transform hover:scale-105 duration-300`}>
      <img
        src="/logo.png"
        alt="M. Skills IA Logo"
        className="h-full w-auto object-contain rounded-2xl"
      />
    </div>
  );
};

export default Logo;




