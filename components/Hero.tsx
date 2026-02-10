import React from 'react';

const Hero: React.FC = () => {
  const platforms = [
    { icon: "fa-whatsapp", color: "#25D366", pos: "top-[5%] left-[25%]" },
    { icon: "fa-instagram", color: "#E4405F", pos: "top-[15%] right-[15%]" },
    { icon: "fa-facebook", color: "#1877F2", pos: "bottom-[15%] right-[15%]" },
    { icon: "fa-linkedin", color: "#0A66C2", pos: "top-[40%] right-[8%]" },
    {
      type: 'svg',
      svg: <path d="M12 2L3.5 13.5H10V22L18.5 10.5H12V2Z" />,
      color: "#3ecf8e",
      pos: "bottom-[10%] left-[20%]",
      label: "Supabase"
    },
    {
      type: 'svg',
      svg: <path d="M12 1L14.89 8.22L22 11L14.89 13.78L12 21L9.11 13.78L2 11L9.11 8.22L12 1Z" />,
      color: "url(#geminiGrad)",
      pos: "top-[50%] left-[10%]",
      label: "Gemini"
    }
  ];

  return (
    <section className="pt-32 pb-20 px-6 overflow-hidden relative min-h-screen flex items-center">
      {/* Dynamic Background Glows */}
      <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-sky-500/10 blur-[150px] rounded-full pointer-events-none animate-pulse"></div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-20 items-center relative z-10">
        <div className="space-y-8 text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-sky-500/5 border border-sky-400/20 text-sky-400 text-[10px] font-black uppercase tracking-[0.2em]">
            <i className="fa-solid fa-bolt text-[8px]"></i>
            Agencia de Inteligencia Artificial
          </div>

          <h1 className="text-[3.5rem] md:text-[5.5rem] font-black leading-[0.95] tracking-tighter uppercase whitespace-pre-line">
            <span className="metal-silver block">Menos</span>
            <span className="metal-silver block">Procesos.</span>
            <span className="metal-blue block mt-4">Más</span>
            <span className="metal-blue block">Resultados.</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-lg">
            IA que trabaja. <span className="text-slate-400">Tú escalas.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 pt-10">
            <button className="bg-[#0ea5e9] text-white px-10 py-5 rounded-xl font-black text-lg hover:bg-sky-400 transition-all hover:scale-105 shadow-[0_15px_40px_rgba(14,165,233,0.3)] uppercase tracking-tighter">
              INICIAR PROYECTO
            </button>
            <button className="glass-card text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white/10 transition-all border-white/10 uppercase tracking-tighter flex items-center gap-3 group/btn">
              Ver Soluciones <i className="fa-solid fa-arrow-right text-sm group-hover/btn:translate-x-1 transition-transform"></i>
            </button>
          </div>
        </div>

        {/* AI Ecosystem Hub (Omnicanalidad Visual) */}
        <div className="relative hidden lg:flex items-center justify-center">
          <div className="relative w-[500px] h-[500px] flex items-center justify-center">

            {/* Central Hub (The Brain) */}
            <div className="relative w-48 h-48 z-20">
              <div className="absolute inset-0 bg-sky-500/20 rounded-full animate-pulse blur-3xl"></div>
              <div className="relative w-full h-full bg-[#020617] border border-sky-500/30 rounded-full flex items-center justify-center text-6xl text-sky-400 shadow-[0_0_100px_rgba(14,165,233,0.2)] overflow-hidden">
                <i className="fa-solid fa-brain relative z-10 animate-float"></i>
                <div className="absolute inset-0 bg-gradient-to-t from-sky-500/10 to-transparent"></div>
              </div>
            </div>

            {/* Connecting Lines (SVG) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 100 100">
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
                <linearGradient id="geminiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FF4B4B" />
                  <stop offset="33%" stopColor="#448AFF" />
                  <stop offset="66%" stopColor="#00E676" />
                  <stop offset="100%" stopColor="#FFD600" />
                </linearGradient>
              </defs>
              <path d="M50 50 L40 10" stroke="url(#lineGrad)" strokeWidth="0.15" className="animate-dash" strokeDasharray="100" />
              <path d="M50 50 L85 25" stroke="url(#lineGrad)" strokeWidth="0.15" className="animate-dash" strokeDasharray="100" />
              <path d="M50 50 L85 85" stroke="url(#lineGrad)" strokeWidth="0.15" className="animate-dash" strokeDasharray="100" />
              <path d="M50 50 L92 45" stroke="url(#lineGrad)" strokeWidth="0.15" className="animate-dash" strokeDasharray="100" />
              <path d="M50 50 L70 10" stroke="url(#lineGrad)" strokeWidth="0.15" className="animate-dash" strokeDasharray="100" />
              <path d="M50 50 L15 55" stroke="url(#lineGrad)" strokeWidth="0.15" className="animate-dash" strokeDasharray="100" />
            </svg>

            {/* Platform Nodes */}
            {platforms.map((p: any, i) => (
              <div
                key={i}
                className={`absolute ${p.pos} z-20 animate-float opacity-30 hover:opacity-100 transition-all duration-500 flex items-center justify-center`}
                style={{ animationDelay: `${i * 0.8}s` }}
              >
                {p.type === 'svg' ? (
                  <svg
                    viewBox="0 0 24 24"
                    className="w-10 h-10 drop-shadow-[0_0_15px_rgba(255,255,240,0.2)]"
                    fill={p.color}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {p.svg}
                  </svg>
                ) : (
                  <i className={`fa-brands ${p.icon} text-4xl drop-shadow-[0_0_15px_rgba(255,255,255,0.05)]`} style={{ color: p.color }}></i>
                )}
              </div>
            ))}

            {/* Floating Particles */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-sky-400 rounded-full blur-[1px] animate-pulse"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.5}s`
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
