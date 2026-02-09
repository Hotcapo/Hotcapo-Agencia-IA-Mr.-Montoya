
import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <Logo />
        
        <div className="text-slate-500 text-sm text-center md:text-right">
          <p>© 2026 Mr.Montoya Agencia IA. Todos los derechos reservados.</p>
          <p className="mt-1">Estrategia AAA para el Ecosistema Digital de Latinoamérica.</p>
        </div>
        
        <div className="flex gap-4">
          <a href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-slate-400 hover:text-sky-400 transition-colors">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-slate-400 hover:text-sky-400 transition-colors">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-slate-400 hover:text-sky-400 transition-colors">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
