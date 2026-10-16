import React, { useState } from 'react';

/**
 * Sección de contacto y captura de leads con validación y confirmación interactiva.
 */
const Contact: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section id="contacto" className="py-24 px-6">
      <div className="max-w-7xl mx-auto glass-card rounded-[3rem] p-0 border-white/10 relative overflow-hidden flex flex-col lg:flex-row">
        {/* Left Side: Image */}
        <div className="lg:w-1/2 relative h-[300px] lg:h-auto overflow-hidden">
          <img
            src="/assets/futuristic-city.jpg"
            alt="M. Skills IA Agency"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#020617]/50 to-[#020617]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] lg:from-transparent to-transparent"></div>
        </div>

        {/* Right Side: Content */}
        <div className="lg:w-1/2 p-12 lg:p-20 text-center lg:text-left relative z-10">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              ¿Listo para dominar el <br />
              <span className="metal-blue">Triángulo Core?</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8">
              Auditamos tus procesos, desarrollamos tu plataforma web y construimos tu primer agente de IA con <span className="text-white font-semibold">M. Skills IA</span>. Agenda tu consultoría estratégica hoy.
            </p>

            {submitted ? (
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-6 text-emerald-300 flex flex-col sm:flex-row items-center gap-4 max-w-lg animate-fade-in">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <i className="fa-solid fa-check text-xl"></i>
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-white text-base">¡Solicitud recibida con éxito!</h4>
                  <p className="text-xs text-slate-300 mt-1">
                    Un especialista de M. Skills IA se pondrá en contacto contigo en breve.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-emerald-400 hover:text-white underline ml-auto"
                >
                  Nuevo envío
                </button>
              </div>
            ) : (
              <form className="flex flex-col sm:flex-row gap-4 max-w-lg" onSubmit={handleSubmit}>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Tu email corporativo"
                  className="flex-grow bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-sky-500 transition-colors"
                />
                <button
                  type="submit"
                  className="bg-sky-500 hover:bg-sky-400 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-sky-500/20 transition-all hover:scale-105 cursor-pointer"
                >
                  Enviar Solicitud
                </button>
              </form>
            )}

            <div className="pt-8 flex flex-wrap justify-center lg:justify-start gap-8 text-slate-500 text-sm font-bold uppercase tracking-widest">
              <span className="flex items-center gap-2"><i className="fa-brands fa-whatsapp text-emerald-400 text-lg"></i> WhatsApp Agents</span>
              <span className="flex items-center gap-2"><i className="fa-solid fa-laptop-code text-indigo-400 text-lg"></i> Web AI Dev</span>
              <span className="flex items-center gap-2"><i className="fa-solid fa-brain text-sky-400 text-lg"></i> LLM Brains</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
