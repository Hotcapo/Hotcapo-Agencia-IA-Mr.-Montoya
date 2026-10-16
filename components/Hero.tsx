import React from 'react';

const PARTICLES = [
  { top: '12%', left: '18%' },
  { top: '24%', left: '82%' },
  { top: '38%', left: '10%' },
  { top: '15%', left: '65%' },
  { top: '52%', left: '88%' },
  { top: '68%', left: '15%' },
  { top: '80%', left: '75%' },
  { top: '85%', left: '30%' },
  { top: '45%', left: '22%' },
  { top: '62%', left: '78%' },
  { top: '28%', left: '35%' },
  { top: '72%', left: '55%' },
];

/**
 * Sección principal (Hero) con propuesta de valor de M. Skills IA y ecosistema 3D orbital.
 */
const Hero: React.FC = () => {
  const platforms = [
    { name: "WhatsApp", icon: "fa-whatsapp", color: "#25D366", tiltX: "10deg", tiltY: "20deg", duration: "12s", link: "https://wa.me/" },
    { name: "Instagram", icon: "fa-instagram", color: "#E4405F", tiltX: "45deg", tiltY: "-20deg", duration: "15s", link: "https://instagram.com/" },
    { name: "Facebook", icon: "fa-facebook", color: "#1877F2", tiltX: "-30deg", tiltY: "40deg", duration: "18s", link: "https://facebook.com/" },
    { name: "LinkedIn", icon: "fa-linkedin", color: "#0A66C2", tiltX: "70deg", tiltY: "10deg", duration: "10s", link: "https://linkedin.com/" },
    {
      name: "Supabase",
      type: 'svg',
      svg: <path d="M12 2L3.5 13.5H10V22L18.5 10.5H12V2Z" />,
      color: "#3ecf8e",
      tiltX: "-50deg", tiltY: "-40deg", duration: "20s",
      label: "Supabase",
      link: "https://supabase.com/"
    },
    {
      name: "Gemini AI",
      type: 'svg',
      svg: <path d="M12 1L14.89 8.22L22 11L14.89 13.78L12 21L9.11 13.78L2 11L9.11 8.22L12 1Z" />,
      color: "url(#geminiGrad)",
      tiltX: "20deg", tiltY: "-60deg", duration: "14s",
      label: "Gemini",
      link: "https://deepmind.google/technologies/gemini/"
    }
  ];

  return (
    <section className="pt-36 md:pt-44 pb-20 px-6 overflow-hidden relative min-h-screen flex items-center">
      {/* Dynamic Background Glows */}
      <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-sky-500/10 blur-[150px] rounded-full pointer-events-none animate-pulse"></div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        <div className="space-y-8 text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-sky-500/5 border border-sky-400/20 text-sky-400 text-[10px] font-black uppercase tracking-[0.2em]">
            <i className="fa-solid fa-bolt text-[8px]"></i>
            M. Skills IA • Agencia de Inteligencia Artificial
          </div>

          <h1 className="text-[3rem] md:text-[4.5rem] font-black leading-[0.95] tracking-tighter uppercase whitespace-pre-line">
            <span className="block">
              <span className="metal-silver">LA </span>
              <span className="metal-blue">IA</span>
              <span className="metal-silver"> TRABAJA</span>
            </span>
            <span className="metal-blue block mt-2">TÚ GANAS</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-400 font-medium max-w-lg">
            No más procesos manuales, no más cuellos de botella, no más 12 horas al día.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 pt-6">
            <a
              href="#contacto"
              className="bg-[#0ea5e9] text-white px-10 py-5 rounded-xl font-black text-lg hover:bg-sky-400 transition-all hover:scale-105 shadow-[0_15px_40px_rgba(14,165,233,0.3)] uppercase tracking-tighter text-center"
            >
              INICIAR PROYECTO
            </a>
            <a
              href="#servicios"
              className="glass-card text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white/10 transition-all border-white/10 uppercase tracking-tighter flex items-center justify-center gap-3 group/btn"
            >
              Ver Soluciones <i className="fa-solid fa-arrow-right text-sm group-hover/btn:translate-x-1 transition-transform"></i>
            </a>
          </div>
        </div>

        {/* AI Ecosystem Hub (Realistic Neon Globe + IA Brain) */}
        <div className="relative flex items-center justify-center scale-[0.58] sm:scale-75 lg:scale-110 preserve-3d h-[360px] sm:h-[460px] lg:h-auto">
          <div className="relative w-[600px] h-[600px] flex items-center justify-center preserve-3d">

            {/* CENTRAL Hub - Original Image with Soft Edge Blending */}
            <div className="relative w-96 h-96 z-20 flex items-center justify-center preserve-3d">

              {/* Enhanced Radial Atmospheric Glow */}
              <div className="absolute inset-0 scale-150 rounded-full bg-cyan-500/20 blur-[100px] pointer-events-none mix-blend-screen"></div>

              {/* The AI Planet Image with Feathered Edges */}
              <img
                src="/assets/planeta-tierra.png.png"
                alt="M. Skills IA Hub Core"
                className="relative w-full h-full object-cover rounded-full animate-float-slow"
                style={{
                  maskImage: 'radial-gradient(circle, black 60%, rgba(0,0,0,0.5) 85%, transparent 100%)',
                  WebkitMaskImage: 'radial-gradient(circle, black 60%, rgba(0,0,0,0.5) 85%, transparent 100%)',
                }}
              />
            </div>

            {/* Platform Nodes in 3D Orbits */}
            {platforms.map((p, i) => (
              <div
                key={p.name}
                className="absolute inset-0 flex items-center justify-center preserve-3d pointer-events-none"
                style={{
                  transform: `rotateX(${p.tiltX}) rotateY(${p.tiltY})`
                }}
              >
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={p.name}
                  title={p.name}
                  className="absolute opacity-60 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer hover:scale-110 pointer-events-auto"
                  style={{
                    animation: `orbitSpin ${p.duration} linear infinite`,
                    animationDelay: `${i * -2}s`,
                    '--tiltX': p.tiltX,
                    '--tiltY': p.tiltY,
                    '--orbit-radius': '250px'
                  } as React.CSSProperties}
                >
                  {p.type === 'svg' ? (
                    <svg
                      viewBox="0 0 24 24"
                      className="w-11 h-11 drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]"
                      fill={p.color}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient id="geminiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#38bdf8" />
                          <stop offset="50%" stopColor="#818cf8" />
                          <stop offset="100%" stopColor="#f472b6" />
                        </linearGradient>
                      </defs>
                      {p.svg}
                    </svg>
                  ) : (
                    <i className={`fa-brands ${p.icon} text-[40px]`} style={{ color: p.color, filter: `drop-shadow(0 0 15px ${p.color})` }}></i>
                  )}
                </a>
              </div>
            ))}

            {/* Floating Particles */}
            {PARTICLES.map((pos, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-sky-400 rounded-full blur-[1px] animate-pulse"
                style={{
                  top: pos.top,
                  left: pos.left,
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
