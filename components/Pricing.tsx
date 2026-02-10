
import React from 'react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Básico",
      setup: "$150",
      retainer: "$60/m",
      features: [
        "Flujo único",
        "IA Conversacional",
        "Mantenimiento básico"
      ],
      popular: false
    },
    {
      name: "Avanzado",
      setup: "$700",
      retainer: "$150/m",
      features: [
        "Multifluido",
        "Base de Conocimiento",
        "Soporte 24/7"
      ],
      popular: true
    },
    {
      name: "Elite Business",
      setup: "+$2.8k",
      retainer: "+$800/m",
      features: [
        "Automatización Total",
        "Decision Making AI",
        "Consultoría VIP"
      ],
      popular: false
    }
  ];

  return (
    <section id="precios" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black metallic-text tracking-tight uppercase mb-4">Inversión</h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto italic">
            Modelos de inversión transparentes para escalar tu negocio con IA.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`reveal-on-hover glass-card p-10 rounded-3xl border-white/5 flex flex-col items-center text-center transition-all duration-500 ${plan.popular ? 'border-sky-500/30 bg-sky-500/5' : ''}`}
            >
              <h3 className="text-sm font-black text-sky-400 mb-6 uppercase tracking-widest">{plan.name}</h3>

              <div className="mb-8">
                <div className="text-5xl font-black text-white tracking-tighter mb-1">{plan.setup}</div>
                <div className="text-[10px] text-slate-500 font-bold tracking-widest uppercase">Pago Inicial (Setup)</div>
              </div>

              <div className="hidden-content w-full">
                <div className="h-px bg-white/5 w-full mb-6"></div>
                <div className="text-3xl font-black text-white mb-1">{plan.retainer}</div>
                <div className="text-[10px] text-slate-500 font-bold tracking-widest uppercase mb-6">Mantenimiento Mensual</div>

                <ul className="space-y-2 mb-8 text-xs text-slate-400">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-center justify-center gap-2">
                      <i className="fa-solid fa-check text-[8px] text-sky-500"></i>
                      {f}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 rounded-xl font-bold text-sm transition-all ${plan.popular ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/20' : 'bg-white/5 text-white hover:bg-white/10'}`}>
                  SELECCIONAR PLAN
                </button>
              </div>

              {!plan.popular && <div className="text-[10px] text-slate-600 font-bold uppercase tracking-widest group-hover:opacity-0 transition-opacity">Expandir Detalles</div>}
              {plan.popular && <div className="text-[10px] text-sky-400 font-bold uppercase tracking-widest group-hover:opacity-0 transition-opacity">Plan Sugerido</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
