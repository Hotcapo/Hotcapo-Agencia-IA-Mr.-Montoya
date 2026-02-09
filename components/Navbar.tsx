
import React from 'react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto glass-card rounded-full px-6 py-3 flex items-center justify-between border-white/5 shadow-2xl">
        <Logo />
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <a href="#servicios" className="hover:text-white transition-colors">Servicios</a>
          <a href="#metodo" className="hover:text-white transition-colors">Método AIM</a>
          <a href="#precios" className="hover:text-white transition-colors">Precios</a>
        </div>

        <a 
          href="#contacto" 
          className="bg-sky-500 hover:bg-sky-400 text-white px-6 py-2 rounded-full text-sm font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-sky-500/20"
        >
          Agendar Consultoría
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
