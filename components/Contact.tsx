
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contacto" className="py-24 px-6">
      <div className="max-w-4xl mx-auto glass-card rounded-[3rem] p-12 text-center border-white/10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-sky-500/10 to-transparent pointer-events-none"></div>
        
        <div className="relative z-10 space-y-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            ¿Listo para dominar el <br />
            <span className="gradient-text">Triángulo de Herramientas Core?</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Auditamos tus procesos y construimos tu primer agente de IA en menos de 7 días. Agenda tu consultoría estratégica hoy.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Tu email corporativo" 
              className="flex-grow bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-sky-500 transition-colors"
            />
            <button className="bg-sky-500 hover:bg-sky-400 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-sky-500/20 transition-all hover:scale-105">
              Enviar Solicitud
            </button>
          </form>
          
          <div className="pt-8 flex flex-wrap justify-center gap-8 text-slate-500 text-sm font-bold uppercase tracking-widest">
            <span className="flex items-center gap-2"><i className="fa-brands fa-whatsapp text-emerald-400 text-lg"></i> WhatsApp Agents</span>
            <span className="flex items-center gap-2"><i className="fa-solid fa-code text-indigo-400 text-lg"></i> Make Flow</span>
            <span className="flex items-center gap-2"><i className="fa-solid fa-brain text-sky-400 text-lg"></i> LLM Brains</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
