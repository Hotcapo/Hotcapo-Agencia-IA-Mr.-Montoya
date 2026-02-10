
import React, { useEffect, useState } from 'react';

const ProcessFlow: React.FC = () => {
    const [activeStep, setActiveStep] = useState(0);

    const steps = [
        {
            title: "CAPTURA",
            icon: "fa-magnet",
            desc: "Centralizamos WhatsApp, Instagram y Email en un solo flujo inteligente.",
            color: "from-sky-500 to-blue-500",
            glow: "shadow-sky-500/20"
        },
        {
            title: "NUTRE",
            icon: "fa-brain",
            desc: "Nuestros agentes IA califican y responden dudas en < 10 segundos, 24/7.",
            color: "from-indigo-500 to-purple-500",
            glow: "shadow-indigo-500/20"
        },
        {
            title: "CIERRA",
            icon: "fa-vault",
            desc: "Agenda citas y recupera el 40% de las ventas que antes perdías por falta de seguimiento.",
            color: "from-emerald-500 to-teal-500",
            glow: "shadow-emerald-500/20"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % steps.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [steps.length]);

    return (
        <section className="py-24 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
                        <span className="metal-silver">Nuestro</span> <span className="metal-blue">Motor.</span>
                    </h2>
                </div>

                <div className="grid lg:grid-cols-3 gap-12 relative">
                    {steps.map((step, idx) => (
                        <div
                            key={idx}
                            onMouseEnter={() => setActiveStep(idx)}
                            className={`relative z-10 p-8 rounded-3xl transition-all duration-500 cursor-pointer group interactive-card
                ${activeStep === idx
                                    ? 'glass-card border-sky-500/30 bg-sky-500/5'
                                    : 'opacity-40 hover:opacity-100'
                                }`}
                        >
                            <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center text-2xl transition-all duration-500
                ${activeStep === idx ? 'bg-sky-500 text-white shadow-[0_0_30px_rgba(14,165,233,0.5)]' : 'bg-white/5 text-slate-500'}`}>
                                <i className={`fa-solid ${step.icon}`}></i>
                            </div>

                            <h3 className={`text-2xl font-black mb-2 uppercase tracking-tight
                ${activeStep === idx ? 'metal-blue' : 'text-slate-500'}`}>
                                {step.title}
                            </h3>

                            <p className="text-sm text-slate-400 font-medium">
                                {step.desc.split('.')[0]}.
                            </p>
                        </div>
                    ))}
                </div>

                {/* Demo Call to Action */}
                <div className="mt-20 flex justify-center">
                    <button className="bg-sky-500 text-slate-950 font-black px-12 py-5 rounded-2xl transition-all hover:scale-105 shadow-[0_20px_40px_rgba(14,165,233,0.2)] uppercase tracking-tighter text-lg">
                        Agendar Demo
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProcessFlow;
