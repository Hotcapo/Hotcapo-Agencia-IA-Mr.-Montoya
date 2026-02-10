
import React, { lazy } from 'react';

// Lazy load the modal to avoid any potential initialization issues with circular dependencies if applicable
// and to keep initial bundle size smaller if the modal is heavy (though it's light here)
const ServiceModal = lazy(() => import('./ServiceModal'));

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = React.useState<any>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const services = [
    {
      title: "Agentes de IA",
      desc: "Sistemas conversacionales autónomos que operan 24/7 en WhatsApp, Instagram y Web.",
      icon: "fa-comments",
      color: "sky",
      type: "chatbot"
    },
    {
      title: "Automatización CRM",
      desc: "Sincronización masiva y seguimiento de leads sin intervención humana.",
      icon: "fa-users-gear",
      color: "indigo",
      type: "crm"
    },
    {
      title: "Lead Gen Engine",
      desc: "Filtrado inteligente y respuesta inmediata para maximizar conversiones.",
      icon: "fa-bolt",
      color: "emerald",
      type: "leads"
    },
    {
      title: "Ops Inteligentes",
      desc: "Bots que ejecutan software humano para facturación y onboarding.",
      icon: "fa-diagram-project",
      color: "purple",
      type: "operations"
    }
  ];

  const handleServiceClick = (service: any) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (
    <section id="servicios" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          <div className="lg:w-1/2 text-left">
            <h2 className="text-5xl md:text-7xl font-black tracking-tight uppercase mb-6">
              <span className="metal-silver">Nuestros</span> <br />
              <span className="metal-blue">Agentes.</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-lg">
              Desplegamos infraestructura de Inteligencia Artificial que no solo responde, sino que <span className="text-white font-bold">entiende y ejecuta</span> tareas complejas por ti.
            </p>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="glass-card rounded-[40px] overflow-hidden border border-white/10 shadow-2xl relative group">
              <img
                src="/assets/hero-bg.jpg"
                alt="AI Agent Systems"
                className="w-full h-[250px] object-cover opacity-60 group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#020617]"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent"></div>

              <div className="absolute top-6 right-6">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 border border-sky-400/20 backdrop-blur-md">
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse"></div>
                  <span className="text-[10px] font-bold text-sky-400 uppercase tracking-widest">Sistemas Live</span>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-500/10 blur-3xl rounded-full"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              onClick={() => handleServiceClick(service)}
              className="reveal-on-hover glass-card p-8 rounded-[32px] border-white/5 hover:border-sky-500/30 transition-all cursor-pointer group relative overflow-hidden flex flex-col items-center text-center"
            >
              <div className={`w-16 h-16 rounded-2xl bg-${service.color}-500/10 flex items-center justify-center text-${service.color}-400 mb-6 group-hover:bg-sky-500 group-hover:text-white transition-all duration-500`}>
                <i className={`fa-solid ${service.icon} text-2xl`}></i>
              </div>

              <h3 className="text-xl font-bold text-white tracking-tight uppercase mb-2">{service.title}</h3>

              <div className="hidden-content">
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
                <div className={`text-${service.color}-400 text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2`}>
                  SABER MÁS <i className="fa-solid fa-play text-[8px]"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedService && (
        <React.Suspense fallback={null}>
          <ServiceModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            service={selectedService}
          />
        </React.Suspense>
      )}
    </section>
  );
};

export default Services;
