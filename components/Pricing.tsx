
import React from 'react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Básico",
      setup: "$150 - $350",
      retainer: "$60 - $150",
      features: [
        "Una sola automatización de flujo",
        "Integración básica con CRM",
        "Reporte mensual de ejecución",
        "Mantenimiento estándar"
      ],
      popular: false
    },
    {
      name: "Avanzado",
      setup: "$700 - $2,000",
      retainer: "$150 - $400",
      features: [
        "Múltiples flujos complejos",
        "Chatbot IA con Base de Conocimientos",
        "Integración WhatsApp Business",
        "Monitoreo 24/7 de errores",
        "Soporte técnico prioritario"
      ],
      popular: true
    },
    {
      name: "Full Business",
      setup: "+$2,800",
      retainer: "+$800",
      features: [
        "Automatización total del negocio",
        "Agentes autónomos de toma de decisión",
        "Optimización de operaciones internas",
        "Dashboards de BI en tiempo real",
        "Consultoría estratégica semanal"
      ],
      popular: false
    }
  ];

  return (
    <section id="precios" className="py-24 px-6 bg-slate-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-extrabold text-white">Estructura de Inversión 2026</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Modelos híbridos diseñados para escalar junto a tu negocio, garantizando flujo de caja y soporte continuo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`relative glass-card p-10 rounded-3xl border-white/5 flex flex-col ${plan.popular ? 'border-sky-500/50 scale-105 z-10 shadow-2xl shadow-sky-500/10' : ''}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-sky-500 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
                  Más Recomendado
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                <div className="space-y-1">
                  <div className="text-3xl font-extrabold text-white">{plan.setup}</div>
                  <div className="text-xs text-sky-400 font-bold uppercase tracking-wider">Setup Initial Fee</div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="text-xl font-bold text-slate-300">{plan.retainer}<span className="text-xs font-normal text-slate-500">/mes</span></div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Monthly Retainer</div>
                </div>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex gap-3 text-sm text-slate-400 items-start">
                    <i className="fa-solid fa-circle-check text-sky-500 mt-1"></i>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.popular ? 'bg-sky-500 hover:bg-sky-400 text-white shadow-lg shadow-sky-500/20' : 'bg-white/5 hover:bg-white/10 text-white'}`}>
                Elegir Plan {plan.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
