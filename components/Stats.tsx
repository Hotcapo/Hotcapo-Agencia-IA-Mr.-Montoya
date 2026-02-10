
import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    { label: "Microempresas sin web", value: "87.7%", sub: "Brecha Masiva" },
    { label: "Búsquedas via IA", value: "25%", sub: "Tendencia 2026" },
    { label: "Optimización", value: "30%", sub: "Impacto Inmediato" },
    { label: "ROI en Ads", value: "40%", sub: "Eficiencia Real" },
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
        {stats.map((stat, idx) => (
          <div key={idx} className="text-center group interactive-card">
            <div className="text-4xl md:text-5xl font-black metal-silver tracking-tighter mb-2">
              {stat.value}
            </div>
            <div className="text-[10px] font-black text-sky-500 uppercase tracking-[0.2em]">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
