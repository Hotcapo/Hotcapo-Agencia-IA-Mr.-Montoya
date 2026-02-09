
import React from 'react';

const Framework: React.FC = () => {
  const steps = [
    {
      step: "01",
      name: "Assess (Auditoría)",
      desc: "Auditamos tus procesos actuales y detectamos el 30% de tareas repetitivas para un ROI inmediato.",
      icon: "fa-magnifying-glass-chart"
    },
    {
      step: "02",
      name: "Implement (Despliegue)",
      desc: "Construimos la infraestructura de IA personalizada usando el stack core: OpenAI, Make y Botpress.",
      icon: "fa-gears"
    },
    {
      step: "03",
      name: "Maintain (Monitoreo)",
      desc: "Optimización continua de prompts y mantenimiento mensual para garantizar la estabilidad del sistema.",
      icon: "fa-shield-check"
    }
  ];

  // Fix: Ensure that the section tag is correctly parsed as a JSX element by maintaining clear syntax and proper tag closing.
  return (
    <section id="metodo" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-4xl font-extrabold text-white leading-tight">
              Nuestro Framework <br />
              <span className="text-sky-400">Metodológico AIM</span>
            </h2>
            <p className="text-slate-400 text-lg">
              Adoptamos un modelo de éxito probado para que la transición a la IA sea fluida, segura y altamente rentable desde el primer día.
            </p>
            
            <div className="space-y-8 mt-12">
              {steps.map((item, idx) => (
                <div key={idx} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 glass-card rounded-full flex items-center justify-center text-sky-400 font-bold border-sky-500/20">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{item.name}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
             <div className="space-y-4 pt-12">
                <div className="glass-card p-6 rounded-2xl border-white/5 shadow-xl">
                  <div className="text-sky-400 text-2xl font-bold mb-2">OpenAI</div>
                  <div className="text-xs text-slate-500 italic">El Cerebro</div>
                </div>
                <div className="glass-card p-6 rounded-2xl border-white/5 shadow-xl">
                  <div className="text-indigo-400 text-2xl font-bold mb-2">Make.com</div>
                  <div className="text-xs text-slate-500 italic">El Sistema Nervioso</div>
                </div>
             </div>
             <div className="space-y-4">
                <div className="glass-card p-6 rounded-2xl border-white/5 shadow-xl">
                  <div className="text-emerald-400 text-2xl font-bold mb-2">Botpress</div>
                  <div className="text-xs text-slate-500 italic">La Interfaz</div>
                </div>
                <div className="glass-card p-6 rounded-2xl border-white/5 shadow-xl bg-sky-500/5">
                  <div className="text-white text-2xl font-bold mb-2">ROI +30%</div>
                  <div className="text-xs text-slate-500 italic">Impacto Garantizado</div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Framework;
