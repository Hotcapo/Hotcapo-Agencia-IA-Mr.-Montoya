
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contacto" className="py-24 px-6">
      <div className="max-w-7xl mx-auto glass-card rounded-[3rem] p-0 border-white/10 relative overflow-hidden flex flex-col lg:flex-row">
        {/* Left Side: Image */}
        <div className="lg:w-1/2 relative h-[300px] lg:h-auto overflow-hidden">
          <img
            src="/assets/futuristic-city.jpg"
            alt="Futuristic AI Agency"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#020617]/50 to-[#020617]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] lg:from-transparent to-transparent"></div>

          <div className="absolute bottom-10 left-10 z-10 hidden lg:block">
            <div className="glass-card p-6 rounded-2xl backdrop-blur-md border-white/10">
              <div className="flex items-center gap-4 mb-2">
                <i className="fa-solid fa-location-dot text-sky-400"></i>
                <span className="text-sm font-bold text-white uppercase tracking-widest">Presencia Global</span>
              </div>
              <p className="text-xs text-slate-400">Escalando empresas en <br /> Latam y España con IA.</p>
            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="lg:w-1/2 p-12 lg:p-20 text-center lg:text-left relative z-10">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              ¿Listo para dominar el <br />
              <span className="gradient-text">Triángulo Core?</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-xl">
              Auditamos tus procesos y construimos tu primer agente de IA en menos de 7 días. Agenda tu consultoría estratégica hoy.
            </p>

            <form className="flex flex-col sm:flex-row gap-4 max-w-lg" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Tu email corporativo"
                className="flex-grow bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-sky-500 transition-colors"
              />
              <button className="bg-sky-500 hover:bg-sky-400 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-sky-500/20 transition-all hover:scale-105">
                Enviar Solicitud
              </button>
            </form>

            <div className="pt-8 flex flex-wrap justify-center lg:justify-start gap-8 text-slate-500 text-sm font-bold uppercase tracking-widest">
              <span className="flex items-center gap-2"><i className="fa-brands fa-whatsapp text-emerald-400 text-lg"></i> WhatsApp Agents</span>
              <span className="flex items-center gap-2"><i className="fa-solid fa-code text-indigo-400 text-lg"></i> Make Flow</span>
              <span className="flex items-center gap-2"><i className="fa-solid fa-brain text-sky-400 text-lg"></i> LLM Brains</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
