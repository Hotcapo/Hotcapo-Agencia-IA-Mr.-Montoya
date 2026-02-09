
import React, { lazy } from 'react';

// Lazy load the modal to avoid any potential initialization issues with circular dependencies if applicable
// and to keep initial bundle size smaller if the modal is heavy (though it's light here)
const ServiceModal = lazy(() => import('./ServiceModal'));

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = React.useState<any>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const services = [
    {
      title: "Agentes de IA y Chatbots",
      desc: "Sistemas conversacionales avanzados en WhatsApp, Instagram y Web que operan 24/7 con razonamiento autónomo.",
      icon: "fa-comments",
      color: "sky",
      type: "chatbot"
    },
    {
      title: "Automatización de CRM",
      desc: "Sincronización de datos, puntuación de leads (scoring) y seguimiento automático de canales de venta sin intervención humana.",
      icon: "fa-users-gear",
      color: "indigo",
      type: "crm"
    },
    {
      title: "Generación de Leads",
      desc: "Automatización de respuestas inmediatas y filtrado inteligente de prospectos para maximizar la conversión del equipo de ventas.",
      icon: "fa-bolt",
      color: "emerald",
      type: "leads"
    },
    {
      title: "Operaciones Internas",
      desc: "Optimización de facturación, onboarding de empleados y reportes financieros mediante bots capaces de utilizar software humano.",
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
    <section id="servicios" className="py-20 px-6 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-extrabold text-white">Servicios de Alta Demanda</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Implementamos sistemas inteligentes que ejecutan tareas complejas basándose en razonamiento, no solo en flujos lineales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              onClick={() => handleServiceClick(service)}
              className="glass-card p-8 rounded-3xl border-white/5 hover:border-white/20 transition-all group cursor-pointer hover:bg-white/5"
            >
              <div className={`w-12 h-12 rounded-xl bg-${service.color}-500/10 flex items-center justify-center text-${service.color}-400 mb-6 group-hover:scale-110 transition-transform`}>
                <i className={`fa-solid ${service.icon} text-xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                {service.desc}
              </p>
              <div className={`text-${service.color}-400 text-xs font-bold uppercase tracking-wider flex items-center opacity-0 group-hover:opacity-100 transition-opacity`}>
                Ver Ejemplo <i className="fa-solid fa-arrow-right ml-2"></i>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dynamic import or conditional render to avoid circular dependencies if any, though likely not an issue here */}
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
