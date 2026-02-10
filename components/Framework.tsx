
import React from 'react';

const Framework: React.FC = () => {
  const steps = [
    {
      step: "01",
      name: "AUDIT & UNIFY",
      desc: "Auditamos tus procesos y centralizamos WhatsApp, Instagram y Email.",
    },
    {
      step: "02",
      name: "GO-LIVE",
      desc: "Construimos e implementamos tu infraestructura IA personalizada en tiempo récord.",
    },
    {
      step: "03",
      name: "ESCALE & CONTROL",
      desc: "Optimización continua y dashboards en vivo para que no pierdas ni un solo lead.",
    }
  ];

  return (
    <section id="metodo" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
        <div className="lg:w-2/5 mb-10 lg:mb-0">
          <h2 className="text-6xl font-black text-white tracking-tighter leading-none mb-8">
            NUESTRO <br />
            <span className="text-sky-400">MODELO.</span>
          </h2>

          <div className="relative rounded-[40px] overflow-hidden border border-white/10 glass-card mb-8 group">
            <img
              src="/assets/tech-office.jpg"
              alt="Modelo de Trabajo"
              className="w-full h-[300px] object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-sky-500 flex items-center justify-center text-white shadow-lg">
                <i className="fa-solid fa-play"></i>
              </div>
              <span className="text-sm font-bold text-white uppercase tracking-widest">Ver Workshop</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="glass-card p-4 rounded-2xl border-white/5 flex flex-col items-center justify-center text-center">
              <i className="fa-solid fa-bolt text-sky-400 text-xl mb-2"></i>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">ROI Rápido</span>
            </div>
            <div className="glass-card p-4 rounded-2xl border-white/5 flex flex-col items-center justify-center text-center">
              <i className="fa-solid fa-shield-halved text-indigo-400 text-xl mb-2"></i>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Estabilidad</span>
            </div>
          </div>
        </div>

        <div className="lg:w-3/5 space-y-4">
          {steps.map((item, idx) => (
            <div key={idx} className="reveal-on-hover glass-card p-8 md:p-12 rounded-[40px] border-white/5 hover:border-sky-500/20 transition-all cursor-pointer group flex items-center gap-10">
              <div className="text-7xl md:text-8xl font-black text-white/5 group-hover:text-sky-500/20 transition-colors duration-500">
                {item.step}
              </div>
              <div className="flex-1">
                <h4 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase mb-2 group-hover:text-sky-400 transition-colors">
                  {item.name}
                </h4>
                <div className="hidden-content">
                  <p className="text-slate-400 text-sm md:text-lg leading-relaxed max-w-lg">
                    {item.desc}
                  </p>
                </div>
              </div>
              <div className="hidden-content">
                <i className="fa-solid fa-chevron-right text-slate-700"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Framework;
