import React, { useState } from 'react';
import Logo from './Logo';

/**
 * Barra de navegación principal con soporte responsivo para escritorio y móvil.
 */
const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Motor IA', href: '#motor' },
    { label: 'Método AIM', href: '#metodo' },
    { label: 'Precios', href: '#precios' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 md:px-6 py-4">
      <div className="max-w-7xl mx-auto bg-[#000511]/90 backdrop-blur-xl rounded-full px-6 md:px-8 py-2.5 flex items-center justify-between border border-white/10 shadow-2xl">
        <a href="#" aria-label="M. Skills IA Inicio">
          <Logo className="h-14 md:h-16" />
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#contacto"
            className="hidden sm:inline-block bg-sky-500 hover:bg-sky-400 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-sky-500/20"
          >
            Agendar Consultoría
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menú de navegación"
            className="md:hidden w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
          >
            <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-7xl mx-auto bg-[#000511]/95 backdrop-blur-2xl rounded-3xl p-6 border border-white/10 shadow-2xl flex flex-col gap-4 animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-300 hover:text-sky-400 font-semibold text-base py-2 border-b border-white/5 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setMobileMenuOpen(false)}
            className="bg-sky-500 hover:bg-sky-400 text-white text-center px-6 py-3 rounded-full text-sm font-bold transition-all shadow-lg shadow-sky-500/20 mt-2"
          >
            Agendar Consultoría
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
