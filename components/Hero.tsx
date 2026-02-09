
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
            </span>
            Guía Maestra 2026: El Futuro de la IA
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] text-white">
            No solo automatizamos flujos, <br />
            <span className="gradient-text">Desplegamos Agentes de IA.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed">
            En 2026, las empresas ya no preguntan si deben usar IA, sino quién puede implementarla. Cerramos la brecha digital con automatización inteligente que toma decisiones por ti.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-slate-950 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-200 transition-all flex items-center justify-center gap-2">
              Iniciar Proyecto
              <i className="fa-solid fa-arrow-right"></i>
            </button>
            <button className="glass-card text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all border-white/10">
              Ver Demo de Agentes
            </button>
          </div>

          <div className="flex items-center gap-6 pt-4 border-t border-white/10">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <img key={i} src={`https://picsum.photos/seed/${i + 10}/100`} className="w-10 h-10 rounded-full border-2 border-slate-900" alt="Client" />
              ))}
            </div>
            <p className="text-sm text-slate-500">
              +150 empresas automatizadas en Latinoamérica
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-sky-500/20 blur-3xl rounded-full"></div>
          <div className="relative glass-card rounded-3xl p-6 border-white/10 shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-xs text-slate-500 font-mono">system.status: active</div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white/5 rounded-lg p-4 flex gap-4 items-center">
                <div className="w-10 h-10 rounded bg-sky-500/20 flex items-center justify-center text-sky-400">
                  <i className="fa-solid fa-robot"></i>
                </div>
                <div>
                  <div className="text-sm font-bold">Agente de Ventas Activo</div>
                  <div className="text-xs text-slate-500">Analizando sentimientos en tiempo real...</div>
                </div>
              </div>
              
              <div className="bg-white/5 rounded-lg p-4 flex gap-4 items-center border-l-2 border-indigo-500">
                <div className="w-10 h-10 rounded bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <i className="fa-solid fa-chart-line"></i>
                </div>
                <div>
                  <div className="text-sm font-bold">ROI Proyectado: +340%</div>
                  <div className="text-xs text-slate-500">Optimización de CRM completada.</div>
                </div>
              </div>

              <div className="p-4 border border-white/5 rounded-lg bg-slate-900/50">
                <div className="flex justify-between text-xs text-slate-400 mb-2">
                  <span>Procesamiento de Leads</span>
                  <span>87%</span>
                </div>
                <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-sky-500 h-full w-[87%] shadow-[0_0_10px_#38bdf8]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
