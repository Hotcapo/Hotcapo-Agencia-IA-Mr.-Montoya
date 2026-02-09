
import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    { label: "Microempresas sin web", value: "87.7%", sub: "Brecha masiva de mercado" },
    { label: "Búsquedas via IA", value: "25%", sub: "Tendencia para 2026" },
    { label: "Optimización Proyectada", value: "30%", sub: "Regla del impacto inmediato" },
    { label: "Mejora en Campañas", value: "40%", sub: "ROI en Ads con IA" },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center group">
              <div className="text-4xl md:text-5xl font-extrabold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-sky-400 uppercase tracking-tight mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-slate-500">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
