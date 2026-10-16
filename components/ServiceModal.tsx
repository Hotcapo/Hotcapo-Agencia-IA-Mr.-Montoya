import React, { useState, useEffect } from 'react';

interface ServiceModalProps {
    isOpen: boolean;
    onClose: () => void;
    service: {
        title: string;
        desc: string;
        icon: string;
        color: string;
        type: 'chatbot' | 'crm' | 'web' | 'operations';
    } | null;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ isOpen, onClose, service }) => {
    // -- CHATBOT STATE --
    const [chatStep, setChatStep] = useState(0);
    const [isTyping, setIsTyping] = useState(false);

    // -- CRM STATE --
    const [crmStep, setCrmStep] = useState(0); // 0: Idle, 1: Dragging, 2: Dropped
    const [crmExample, setCrmExample] = useState(0); // 0: Pipeline, 1: Follow-up, 2: Reactivation

    // -- WEB STATE --
    const [webStep, setWebStep] = useState(0);
    const [webExample, setWebExample] = useState(0); // 0: Diseño, 1: Desarrollo, 2: Despliegue

    // -- OPS STATE --
    const [opsStep, setOpsStep] = useState(0);
    const [opsExample, setOpsExample] = useState(0); // 0: Invoicing, 1: Inventory, 2: Onboarding

    // Helper for safe color classes (Tailwind can't scan dynamic strings like `bg-${color}-500`)
    const getColorClasses = (color: string) => {
        const colors: Record<string, { bg: string, text: string, button: string, buttonHover: string, iconBg: string, shadow: string }> = {
            blue: {
                bg: 'bg-blue-500',
                text: 'text-blue-400',
                button: 'bg-blue-600',
                buttonHover: 'hover:bg-blue-500',
                iconBg: 'bg-blue-500/10',
                shadow: 'hover:shadow-blue-500/25'
            },
            indigo: {
                bg: 'bg-indigo-500',
                text: 'text-indigo-400',
                button: 'bg-indigo-600',
                buttonHover: 'hover:bg-indigo-500',
                iconBg: 'bg-indigo-500/10',
                shadow: 'hover:shadow-indigo-500/25'
            },
            purple: {
                bg: 'bg-purple-500',
                text: 'text-purple-400',
                button: 'bg-purple-600',
                buttonHover: 'hover:bg-purple-500',
                iconBg: 'bg-purple-500/10',
                shadow: 'hover:shadow-purple-500/25'
            },
            emerald: {
                bg: 'bg-emerald-500',
                text: 'text-emerald-400',
                button: 'bg-emerald-600',
                buttonHover: 'hover:bg-emerald-500',
                iconBg: 'bg-emerald-500/10',
                shadow: 'hover:shadow-emerald-500/25'
            },
            sky: {
                bg: 'bg-sky-500',
                text: 'text-sky-400',
                button: 'bg-sky-600',
                buttonHover: 'hover:bg-sky-500',
                iconBg: 'bg-sky-500/10',
                shadow: 'hover:shadow-sky-500/25'
            },
            // Fallback
            default: {
                bg: 'bg-slate-500',
                text: 'text-slate-400',
                button: 'bg-slate-600',
                buttonHover: 'hover:bg-slate-500',
                iconBg: 'bg-slate-500/10',
                shadow: 'hover:shadow-slate-500/25'
            }
        };
        return colors[color] || colors.default;
    };

    const colorClasses = getColorClasses(service?.color || 'sky');

    useEffect(() => {
        if (!isOpen || !service) {
            // Reset all states when modal closes
            setChatStep(0);
            setIsTyping(false);
            setCrmStep(0);
            setCrmExample(0);
            setWebStep(0);
            setWebExample(0);
            setOpsStep(0);
            setOpsExample(0);
            return;
        }

        // -- CHATBOT ANIMATION SEQUENCE --
        if (service.type === 'chatbot') {
            const sequence = async () => {
                setChatStep(0);
                await new Promise(r => setTimeout(r, 500));
                setIsTyping(true);
                await new Promise(r => setTimeout(r, 1500));
                setIsTyping(false);
                setChatStep(1); // Bot greeting

                await new Promise(r => setTimeout(r, 1000));
                setChatStep(2); // User option appears

                await new Promise(r => setTimeout(r, 800));
                setIsTyping(true); // User "typing" / clicking
                await new Promise(r => setTimeout(r, 500));
                setIsTyping(false);
                setChatStep(3); // User response sent

                await new Promise(r => setTimeout(r, 800));
                setIsTyping(true);
                await new Promise(r => setTimeout(r, 1500));
                setIsTyping(false);
                setChatStep(4); // Bot final response
            };
            sequence();
        }

        // -- CRM ANIMATION SEQUENCE --
        if (service.type === 'crm') {
            setCrmStep(0); // Reset on switch

            if (crmExample === 0) {
                // Pipeline (Drag & Drop)
                const sequence = async () => {
                    await new Promise(r => setTimeout(r, 1000));
                    setCrmStep(1); // Start dragging
                    await new Promise(r => setTimeout(r, 2000));
                    setCrmStep(2); // Drop
                };
                sequence();
                const interval = setInterval(() => {
                    setCrmStep(0);
                    setTimeout(() => sequence(), 100);
                }, 5000);
                return () => clearInterval(interval);

            } else if (crmExample === 1) {
                // Follow-up (Timeline)
                const sequence = async () => {
                    await new Promise(r => setTimeout(r, 500));
                    setCrmStep(1); // Email sent
                    await new Promise(r => setTimeout(r, 1500));
                    setCrmStep(2); // WhatsApp sent
                    await new Promise(r => setTimeout(r, 1500));
                    setCrmStep(3); // Client replied
                };
                sequence();

            } else if (crmExample === 2) {
                // Reactivation (List processing)
                const sequence = async () => {
                    await new Promise(r => setTimeout(r, 800));
                    setCrmStep(1); // Identify inactive
                    await new Promise(r => setTimeout(r, 1500));
                    setCrmStep(2); // Send promo
                    await new Promise(r => setTimeout(r, 1500));
                    setCrmStep(3); // Reactivated
                };
                sequence();
            }
        }

        // -- WEB ANIMATION SEQUENCE --
        if (service.type === 'web') {
            setWebStep(0);

            if (webExample === 0) {
                // Diseño (Wireframes)
                const sequence = async () => {
                    await new Promise(r => setTimeout(r, 800));
                    setWebStep(1); // Skeleton
                    await new Promise(r => setTimeout(r, 1000));
                    setWebStep(2); // Styling
                    await new Promise(r => setTimeout(r, 2000));
                    setWebStep(3); // Finished Design
                };
                sequence();
            } else if (webExample === 1) {
                // Desarrollo (Código IA)
                const sequence = async () => {
                    await new Promise(r => setTimeout(r, 500));
                    setWebStep(1); // Generating Code
                    await new Promise(r => setTimeout(r, 1500));
                    setWebStep(2); // Compiling
                    await new Promise(r => setTimeout(r, 1500));
                    setWebStep(3); // Live Preview
                };
                sequence();
            } else if (webExample === 2) {
                // Despliegue
                const sequence = async () => {
                    await new Promise(r => setTimeout(r, 500));
                    setWebStep(1); // Uploading
                    await new Promise(r => setTimeout(r, 1000));
                    setWebStep(2); // Optimizing
                    await new Promise(r => setTimeout(r, 1500));
                    setWebStep(3); // 100/100 Lighthouse
                };
                sequence();
            }
        }

        // -- OPS ANIMATION SEQUENCE --
        if (service.type === 'operations') {
            // Reset step when switching examples
            setOpsStep(0);

            if (opsExample === 0) {
                // Invoicing (Existing)
                const sequence = async () => {
                    await new Promise(r => setTimeout(r, 500));
                    setOpsStep(1); // Scanning
                    await new Promise(r => setTimeout(r, 2000));
                    setOpsStep(2); // Extracted
                    await new Promise(r => setTimeout(r, 1000));
                    setOpsStep(3); // Success
                };
                sequence();
            } else if (opsExample === 1) {
                // Inventory (New)
                const sequence = async () => {
                    await new Promise(r => setTimeout(r, 1000));
                    setOpsStep(1); // Low Stock Detected
                    await new Promise(r => setTimeout(r, 1500));
                    setOpsStep(2); // Order Created
                    await new Promise(r => setTimeout(r, 1500));
                    setOpsStep(3); // Restocked
                };
                sequence();
            } else if (opsExample === 2) {
                // Onboarding (New)
                const sequence = async () => {
                    await new Promise(r => setTimeout(r, 800));
                    setOpsStep(1); // New Hire Detected
                    await new Promise(r => setTimeout(r, 1000));
                    setOpsStep(2); // Provisioning Accounts
                    await new Promise(r => setTimeout(r, 2000));
                    setOpsStep(3); // Complete
                };
                sequence();
            }
        }

    }, [isOpen, service?.type, opsExample, crmExample, webExample]);

    if (!isOpen || !service) return null;

    const renderVisualExample = () => {
        switch (service.type) {
            case 'chatbot':
                return (
                    <div className="bg-slate-900 rounded-xl p-4 border border-slate-700 font-mono text-sm h-[400px] flex flex-col relative">
                        <div className="flex items-center gap-2 mb-4 border-b border-slate-800 pb-2">
                            <div className="w-2 h-2 rounded-full bg-red-500"></div>
                            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            <span className="ml-2 text-slate-500 text-xs">AI Agent Active</span>
                        </div>

                        <div className="flex-1 space-y-4 overflow-y-auto custom-scrollbar p-2">
                            {/* Bot Greeting */}
                            <div className={`flex gap-3 transition-all duration-500 ${chatStep >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                                <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                                    <i className="fa-solid fa-robot text-xs"></i>
                                </div>
                                <div className="bg-slate-800 p-3 rounded-lg rounded-tl-none max-w-[85%]">
                                    <p className="text-slate-300">Hola, veo que te interesan nuestros servicios de automatización. ¿Te gustaría agendar una demo corta?</p>
                                </div>
                            </div>

                            {/* User Reply Options (Simulated Click) */}
                            {chatStep === 2 && (
                                <div className="flex justify-end gap-2 animate-pulse">
                                    <button className="bg-sky-500/20 text-sky-400 border border-sky-500/50 px-3 py-1 rounded-full text-xs hover:bg-sky-500 hover:text-white transition-colors">
                                        No, gracias
                                    </button>
                                    <button className="bg-sky-500 text-white px-3 py-1 rounded-full text-xs shadow-lg shadow-sky-500/20 ring-2 ring-white/50">
                                        Sí, por favor
                                    </button>
                                </div>
                            )}

                            {/* User Response */}
                            {chatStep >= 3 && (
                                <div className="flex gap-3 flex-row-reverse animate-fade-in-up">
                                    <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-slate-400 shrink-0">
                                        <i className="fa-solid fa-user text-xs"></i>
                                    </div>
                                    <div className="bg-sky-600 p-3 rounded-lg rounded-tr-none max-w-[85%]">
                                        <p className="text-white">Sí, por favor.</p>
                                    </div>
                                </div>
                            )}

                            {/* Bot Confirmation */}
                            {chatStep >= 4 && (
                                <div className="flex gap-3 animate-fade-in-up">
                                    <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                                        <i className="fa-solid fa-robot text-xs"></i>
                                    </div>
                                    <div className="bg-slate-800 p-3 rounded-lg rounded-tl-none max-w-[85%]">
                                        <p className="text-slate-300">¡Perfecto! Aquí tienes mi calendario. He reservado un espacio para ti. 📅</p>
                                    </div>
                                </div>
                            )}

                            {isTyping && (
                                <div className="flex gap-2 ml-10">
                                    <span className="w-2 h-2 bg-slate-600 rounded-full animate-bounce"></span>
                                    <span className="w-2 h-2 bg-slate-600 rounded-full animate-bounce delay-75"></span>
                                    <span className="w-2 h-2 bg-slate-600 rounded-full animate-bounce delay-150"></span>
                                </div>
                            )}
                        </div>
                    </div>
                );

            case 'crm':
                return (
                    <div className="bg-slate-900 rounded-xl p-4 border border-slate-700 h-[400px] flex flex-col relative overflow-hidden">

                        {/* Selector */}
                        <div className="flex space-x-2 mb-4 justify-center bg-slate-800/50 p-1 rounded-lg w-fit mx-auto sticky top-0 z-50">
                            {[
                                { id: 0, label: 'Pipeline', icon: 'fa-diagram-project' },
                                { id: 1, label: 'Seguimiento', icon: 'fa-stopwatch' },
                                { id: 2, label: 'Reactivación', icon: 'fa-bolt' }
                            ].map(item => (
                                <button
                                    key={item.id}
                                    onClick={() => setCrmExample(item.id)}
                                    className={`px-3 py-1.5 rounded-md text-[10px] font-bold uppercase tracking-wide transition-all flex items-center gap-2
                                        ${crmExample === item.id
                                            ? 'bg-blue-600 text-white shadow-lg'
                                            : 'text-slate-400 hover:bg-slate-700 hover:text-white'
                                        }
                                    `}
                                >
                                    <i className={`fa-solid ${item.icon}`}></i>
                                    {item.label}
                                </button>
                            ))}
                        </div>

                        {/* EXAMPLE 0: Pipeline (Existing) */}
                        {crmExample === 0 && (
                            <div className="grid grid-cols-3 gap-3 h-full pb-2">
                                {/* Column 1: New */}
                                <div className="bg-slate-800/30 rounded-lg p-2 border border-slate-700/50">
                                    <div className="text-xs font-bold text-slate-500 mb-3 uppercase">Nuevos</div>
                                    <div className="space-y-2 relative">
                                        <div className="bg-slate-700 p-3 rounded border-l-2 border-blue-500 shadow-sm opacity-50">
                                            <div className="h-2 w-16 bg-slate-600 rounded mb-2"></div>
                                            <div className="h-2 w-10 bg-slate-600/50 rounded"></div>
                                        </div>

                                        {/* Animated Card */}
                                        <div
                                            className={`bg-slate-700 p-3 rounded border-l-2 border-blue-500 shadow-xl z-20 absolute w-full top-[60px] transition-all duration-[2000ms] ease-in-out
                                    ${crmStep === 0 ? 'translate-x-0 translate-y-0 rotate-0' : ''}
                                    ${crmStep === 1 ? 'translate-x-[220%] translate-y-0 rotate-3 scale-105 border-emerald-500 bg-slate-600' : ''}
                                    ${crmStep === 2 ? 'translate-x-[220%] translate-y-[0px] rotate-0 scale-100 border-emerald-500' : ''}
                                `}
                                        >
                                            <div className="flex justify-between items-start mb-1">
                                                <span className="text-xs text-white font-bold">Empresa ABC</span>
                                                {crmStep >= 1 && <i className="fa-solid fa-fire text-orange-500 text-xs animate-bounce"></i>}
                                            </div>
                                            <div className="text-[10px] text-slate-400">Interés: Alto</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Column 2: Negotiation */}
                                <div className="bg-slate-800/30 rounded-lg p-2 border border-slate-700/50">
                                    <div className="text-xs font-bold text-slate-500 mb-3 uppercase">Negociación</div>
                                    <div className="space-y-2">
                                        <div className="bg-slate-700 p-3 rounded border-l-2 border-yellow-500 shadow-sm">
                                            <div className="h-2 w-20 bg-slate-600 rounded mb-2"></div>
                                            <div className="h-2 w-8 bg-slate-600/50 rounded"></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Column 3: Closed */}
                                <div className="bg-slate-800/30 rounded-lg p-2 border border-slate-700/50 relative">
                                    <div className="text-xs font-bold text-slate-500 mb-3 uppercase">Cerrados</div>

                                    {/* Placeholder for dropped card */}
                                    {crmStep === 2 && (
                                        <div className="absolute top-[52px] w-[calc(100%-16px)] h-[60px] border-2 border-dashed border-emerald-500/30 rounded bg-emerald-500/5 flex items-center justify-center animate-pulse">
                                            <span className="text-emerald-500 text-xs font-bold">¡Venta!</span>
                                        </div>
                                    )}
                                </div>

                                {/* Cursor Simulation */}
                                <div
                                    className={`absolute w-6 h-6 pointer-events-none z-50 transition-all duration-[2000ms] ease-in-out
                            ${crmStep === 0 ? 'top-[130px] left-[60px]' : ''}
                            ${crmStep === 1 ? 'top-[130px] left-[70%]' : ''}
                            ${crmStep === 2 ? 'top-[150px] left-[80%] opacity-0' : ''}
                        `}
                                >
                                    <svg className="w-full h-full text-white drop-shadow-md" fill="currentColor" viewBox="0 0 24 24"><path d="M7 2l12 11.2-5.8.5 3.3 7.3-2.2.9-3.2-7.4-4.4 4.6V2z" /></svg>
                                </div>
                            </div>
                        )}

                        {/* EXAMPLE 1: Follow-up */}
                        {crmExample === 1 && (
                            <div className="flex flex-col gap-4 px-8 mt-4 relative">
                                <div className="absolute left-10 top-0 bottom-0 w-0.5 bg-slate-700 z-0"></div>

                                {/* Step 1: Email */}
                                <div className={`relative z-10 flex gap-4 items-center transition-all duration-500 ${crmStep >= 1 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-10px]'}`}>
                                    <div className="w-6 h-6 rounded-full bg-slate-800 border-2 border-blue-500 flex items-center justify-center text-[10px] text-blue-400">1</div>
                                    <div className="flex-1 bg-slate-800 p-2 rounded border border-slate-700 flex justify-between items-center">
                                        <div className="flex items-center gap-2">
                                            <i className="fa-regular fa-envelope text-slate-400"></i>
                                            <span className="text-xs text-slate-300">Email: Propuesta</span>
                                        </div>
                                        <span className="text-[10px] text-green-400">Abierto</span>
                                    </div>
                                </div>

                                {/* Step 2: WhatsApp */}
                                <div className={`relative z-10 flex gap-4 items-center transition-all duration-500 delay-100 ${crmStep >= 2 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-10px]'}`}>
                                    <div className="w-6 h-6 rounded-full bg-slate-800 border-2 border-green-500 flex items-center justify-center text-[10px] text-green-400">2</div>
                                    <div className="flex-1 bg-slate-800 p-2 rounded border border-slate-700 flex justify-between items-center">
                                        <div className="flex items-center gap-2">
                                            <i className="fa-brands fa-whatsapp text-green-400"></i>
                                            <span className="text-xs text-slate-300">Msg: ¿Dudas?</span>
                                        </div>
                                        <i className="fa-solid fa-check-double text-[10px] text-blue-400"></i>
                                    </div>
                                </div>

                                {/* Step 3: Response */}
                                <div className={`relative z-10 flex gap-4 items-center transition-all duration-500 delay-200 ${crmStep >= 3 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-10px]'}`}>
                                    <div className="w-6 h-6 rounded-full bg-emerald-500 border-2 border-emerald-400 flex items-center justify-center text-[10px] text-white"><i className="fa-solid fa-check"></i></div>
                                    <div className="flex-1 bg-emerald-500/10 p-2 rounded border border-emerald-500/30 flex justify-between items-center">
                                        <div className="flex items-center gap-2">
                                            <i className="fa-solid fa-user text-emerald-400"></i>
                                            <span className="text-xs text-white font-bold">Cliente: "Me interesa"</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* EXAMPLE 2: Reactivation */}
                        {crmExample === 2 && (
                            <div className="space-y-2 mt-2">
                                <div className="grid grid-cols-4 text-[9px] text-slate-500 uppercase font-bold border-b border-slate-700 pb-1 mb-2">
                                    <div className="col-span-2">Cliente</div>
                                    <div>Estado</div>
                                    <div>Acción</div>
                                </div>

                                {/* Row 1 */}
                                <div className="grid grid-cols-4 items-center bg-slate-800 p-2 rounded border border-slate-700">
                                    <div className="col-span-2 text-xs text-slate-300">Juan Pérez</div>
                                    <div><span className="bg-red-500/20 text-red-400 text-[9px] px-1.5 py-0.5 rounded">Inactivo</span></div>
                                    <div className="text-[9px] text-slate-500">...</div>
                                </div>

                                {/* Row 2 (Active) */}
                                <div className={`grid grid-cols-4 items-center bg-slate-800 p-2 rounded border transition-all duration-500
                                    ${crmStep >= 1 ? 'border-orange-500/50 bg-orange-500/5' : 'border-slate-700'}
                                    ${crmStep >= 3 ? 'border-emerald-500/50 bg-emerald-500/5' : ''}
                                `}>
                                    <div className="col-span-2 text-xs text-white font-bold">Maria Gomez</div>
                                    <div>
                                        {crmStep >= 3 ? (
                                            <span className="bg-emerald-500/20 text-emerald-400 text-[9px] px-1.5 py-0.5 rounded animate-pulse">Activo</span>
                                        ) : (
                                            <span className="bg-red-500/20 text-red-400 text-[9px] px-1.5 py-0.5 rounded">Inactivo</span>
                                        )}
                                    </div>
                                    <div>
                                        {crmStep === 1 && <i className="fa-solid fa-circle-notch fa-spin text-orange-500 text-xs"></i>}
                                        {crmStep === 2 && <span className="text-[8px] bg-sky-500/20 text-sky-400 px-1 rounded">PROMO ENVIADA</span>}
                                        {crmStep >= 3 && <i className="fa-solid fa-check text-emerald-500 text-xs"></i>}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                );

            case 'web':
                return (
                    <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700 h-[400px] flex flex-col relative">
                        {/* Selector */}
                        <div className="flex space-x-2 mb-4 justify-center bg-slate-800/80 p-1 rounded-lg w-fit mx-auto mt-4 z-50 sticky top-0 backdrop-blur-sm">
                            {[
                                { id: 0, label: 'Diseño UI/UX', icon: 'fa-pen-nib' },
                                { id: 1, label: 'Desarrollo AI', icon: 'fa-code' },
                                { id: 2, label: 'Despliegue', icon: 'fa-rocket' }
                            ].map(item => (
                                <button
                                    key={item.id}
                                    onClick={() => setWebExample(item.id)}
                                    className={`px-3 py-1.5 rounded-md text-[10px] font-bold uppercase tracking-wide transition-all flex items-center gap-2
                                        ${webExample === item.id
                                            ? 'bg-emerald-600 text-white shadow-lg'
                                            : 'text-slate-400 hover:bg-slate-700 hover:text-white'
                                        }
                                    `}
                                >
                                    <i className={`fa-solid ${item.icon}`}></i>
                                    {item.label}
                                </button>
                            ))}
                        </div>

                        {/* Contenido Visual */}
                        <div className="flex-1 relative flex flex-col items-center justify-center p-6 bg-slate-900/50">
                            
                            {/* Fase 0: Diseño */}
                            {webExample === 0 && (
                                <div className="w-full max-w-md flex flex-col animate-fade-in">
                                    <div className="flex items-center gap-3 mb-4 text-emerald-400 font-bold text-lg drop-shadow-[0_0_10px_rgba(52,211,153,0.5)] justify-center">
                                        <i className="fa-solid fa-pen-nib animate-bounce"></i> Generando Interfaz UI/UX
                                    </div>
                                    
                                    <div className="bg-slate-900/80 rounded-xl overflow-hidden border border-slate-700 shadow-2xl backdrop-blur-md">
                                        {/* Browser Header */}
                                        <div className="flex bg-slate-800/80 px-4 py-3 border-b border-slate-700/50 items-center gap-2">
                                            <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_5px_rgba(239,68,68,0.5)]"></div>
                                            <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-[0_0_5px_rgba(234,179,8,0.5)]"></div>
                                            <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_5px_rgba(34,197,94,0.5)]"></div>
                                            <div className="mx-auto bg-slate-900/50 rounded-full h-4 w-32 border border-slate-700/30"></div>
                                        </div>
                                        
                                        {/* Browser Body */}
                                        <div className="p-4 flex flex-col gap-3 relative overflow-hidden">
                                            {/* Glowing background blob */}
                                            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl transition-opacity duration-1000 ${webStep > 0 ? 'opacity-100' : 'opacity-0'}`}></div>

                                            {/* Hero section */}
                                            <div className={`w-full h-12 rounded-lg transition-all duration-1000 relative overflow-hidden ${webStep > 0 ? 'bg-gradient-to-r from-emerald-500/20 to-sky-500/20 border border-emerald-500/30' : 'bg-slate-800 opacity-30'}`}>
                                                {webStep > 0 && <div className="absolute left-4 top-3 w-1/3 h-2 bg-emerald-400/40 rounded-full"></div>}
                                                {webStep > 0 && <div className="absolute left-4 top-7 w-1/4 h-2 bg-slate-500/40 rounded-full"></div>}
                                            </div>
                                            
                                            {/* Features section */}
                                            <div className="flex gap-3">
                                                <div className={`flex-1 h-20 rounded-lg transition-all duration-1000 delay-300 relative flex flex-col items-center justify-center gap-2 ${webStep > 1 ? 'bg-slate-800/80 border border-slate-600 shadow-[0_0_15px_rgba(52,211,153,0.1)]' : 'bg-slate-800 opacity-30'}`}>
                                                    {webStep > 1 && <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center"><i className="fa-solid fa-image text-emerald-400/50"></i></div>}
                                                    {webStep > 1 && <div className="w-3/4 h-1.5 bg-slate-600 rounded-full"></div>}
                                                </div>
                                                <div className={`flex-1 h-20 rounded-lg transition-all duration-1000 delay-500 relative flex flex-col items-center justify-center gap-2 ${webStep > 1 ? 'bg-slate-800/80 border border-slate-600 shadow-[0_0_15px_rgba(14,165,233,0.1)]' : 'bg-slate-800 opacity-30'}`}>
                                                    {webStep > 1 && <div className="w-8 h-8 rounded-full bg-sky-500/20 flex items-center justify-center"><i className="fa-solid fa-bolt text-sky-400/50"></i></div>}
                                                    {webStep > 1 && <div className="w-3/4 h-1.5 bg-slate-600 rounded-full"></div>}
                                                </div>
                                            </div>

                                            {/* CTA section */}
                                            <div className={`w-full h-10 rounded-lg transition-all duration-1000 delay-700 mt-1 flex items-center justify-center ${webStep > 2 ? 'bg-gradient-to-r from-purple-600 to-emerald-600 border border-emerald-400 shadow-[0_0_20px_rgba(168,85,247,0.4)]' : 'bg-slate-800 opacity-30'}`}>
                                                {webStep > 2 && <span className="text-white font-bold text-sm tracking-wider drop-shadow-md"><i className="fa-solid fa-check-double mr-2"></i>DISEÑO APROBADO</span>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Fase 1: Desarrollo AI */}
                            {webExample === 1 && (
                                <div className="w-full max-w-md bg-black rounded-lg border border-slate-700 overflow-hidden font-mono text-xs animate-fade-in shadow-2xl">
                                    <div className="flex bg-slate-800 px-4 py-2 border-b border-slate-700 gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    </div>
                                    <div className="p-4 text-emerald-400">
                                        <p className="mb-2 text-slate-500">{"// Inicializando Agente Coder..."}</p>
                                        <p className={`transition-opacity duration-300 ${webStep > 0 ? 'opacity-100' : 'opacity-0'}`}>
                                            <span className="text-purple-400">const</span> App = () =&gt; {"{"}
                                        </p>
                                        <p className={`ml-4 transition-opacity duration-300 delay-300 ${webStep > 0 ? 'opacity-100' : 'opacity-0'}`}>
                                            <span className="text-purple-400">return</span> (
                                        </p>
                                        <p className={`ml-8 text-blue-400 transition-opacity duration-300 delay-500 ${webStep > 1 ? 'opacity-100' : 'opacity-0'}`}>
                                            &lt;div className="modern-web-app"&gt;
                                        </p>
                                        <p className={`ml-12 text-white transition-opacity duration-300 delay-700 ${webStep > 1 ? 'opacity-100' : 'opacity-0'}`}>
                                            Desarrollo ultra rápido.
                                        </p>
                                        <p className={`ml-8 text-blue-400 transition-opacity duration-300 delay-1000 ${webStep > 1 ? 'opacity-100' : 'opacity-0'}`}>
                                            &lt;/div&gt;
                                        </p>
                                        <p className={`ml-4 transition-opacity duration-300 delay-1000 ${webStep > 1 ? 'opacity-100' : 'opacity-0'}`}>
                                            );
                                        </p>
                                        <p className={`transition-opacity duration-300 delay-1000 ${webStep > 1 ? 'opacity-100' : 'opacity-0'}`}>
                                            {"}"}
                                        </p>
                                        {webStep > 2 && (
                                            <div className="mt-4 pt-4 border-t border-slate-700 text-center animate-fade-in text-emerald-400 font-bold">
                                                <i className="fa-solid fa-check-circle mr-2"></i> COMPILADO EXITOSAMENTE
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* Fase 2: Despliegue */}
                            {webExample === 2 && (
                                <div className="w-full max-w-sm flex flex-col items-center gap-6 animate-fade-in">
                                    <div className="relative">
                                        <i className={`fa-solid fa-rocket text-5xl transition-all duration-1000 ${webStep > 0 ? 'text-emerald-400 -translate-y-4 drop-shadow-[0_0_20px_rgba(52,211,153,0.8)]' : 'text-slate-600'}`}></i>
                                        <div className={`absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-emerald-500 rounded-full blur-xl transition-opacity duration-1000 ${webStep > 0 ? 'opacity-50' : 'opacity-0'}`}></div>
                                    </div>

                                    {webStep > 1 && (
                                        <div className="text-center animate-fade-in">
                                            <div className="text-sm font-bold text-slate-400 mb-2">Performance SEO</div>
                                            <div className="flex gap-4">
                                                <div className="w-16 h-16 rounded-full border-4 border-emerald-500 flex items-center justify-center text-emerald-400 font-black text-xl shadow-[0_0_15px_rgba(52,211,153,0.4)]">
                                                    99
                                                </div>
                                                <div className="w-16 h-16 rounded-full border-4 border-emerald-500 flex items-center justify-center text-emerald-400 font-black text-xl shadow-[0_0_15px_rgba(52,211,153,0.4)]">
                                                    100
                                                </div>
                                                <div className="w-16 h-16 rounded-full border-4 border-emerald-500 flex items-center justify-center text-emerald-400 font-black text-xl shadow-[0_0_15px_rgba(52,211,153,0.4)]">
                                                    100
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {webStep > 2 && (
                                        <div className="bg-emerald-500/20 border border-emerald-500/50 text-emerald-400 px-6 py-2 rounded-full font-bold animate-pulse-glow mt-2">
                                            <i className="fa-solid fa-globe mr-2"></i> SITIO EN VIVO
                                        </div>
                                    )}
                                </div>
                            )}

                        </div>
                    </div>
                );

            case 'operations':
                return (
                    <div className="bg-slate-900 rounded-xl p-4 border border-slate-700 h-[400px] flex flex-col relative overlow-hidden">

                        {/* 1. Examples Functionality Selector */}
                        <div className="flex space-x-2 mb-4 justify-center bg-slate-800/50 p-1 rounded-lg w-fit mx-auto sticky top-0 z-50">
                            {[
                                { id: 0, label: 'Facturación', icon: 'fa-file-invoice' },
                                { id: 1, label: 'Inventario', icon: 'fa-boxes-stacked' },
                                { id: 2, label: 'Onboarding', icon: 'fa-user-plus' }
                            ].map(item => (
                                <button
                                    key={item.id}
                                    onClick={() => setOpsExample(item.id)}
                                    className={`px-3 py-1.5 rounded-md text-[10px] font-bold uppercase tracking-wide transition-all flex items-center gap-2
                                        ${opsExample === item.id
                                            ? 'bg-sky-600 text-white shadow-lg'
                                            : 'text-slate-400 hover:bg-slate-700 hover:text-white'
                                        }
                                    `}
                                >
                                    <i className={`fa-solid ${item.icon}`}></i>
                                    {item.label}
                                </button>
                            ))}
                        </div>

                        {/* Content Container */}
                        <div className="flex-1 relative flex items-center justify-center">

                            {/* EXAMPLE 0: Document Processing (Existing) */}
                            {opsExample === 0 && (
                                <div className="w-full h-full flex flex-col items-center justify-center relative">
                                    {/* Step 1: Document Arrival */}
                                    <div className={`transition-all duration-700 absolute
                                        ${opsStep === 0 ? 'translate-y-[-50px] opacity-0' : 'translate-y-0 opacity-100'}
                                        ${opsStep >= 2 ? 'scale-75 translate-x-[-120px] opacity-50' : 'scale-100'}
                                    `}>
                                        <div className="w-24 h-32 bg-slate-800 border border-slate-600 rounded-lg relative shadow-xl flex flex-col items-center justify-center p-2">
                                            <i className="fa-solid fa-file-invoice-dollar text-4xl text-slate-500 mb-2"></i>
                                            <div className="w-16 h-2 bg-slate-700 rounded mb-1"></div>
                                            <div className="w-12 h-2 bg-slate-700 rounded mb-1"></div>
                                            <div className="w-16 h-2 bg-slate-700 rounded mb-4"></div>
                                            <div className="text-[8px] text-slate-500">INVOICE-2024.pdf</div>

                                            {/* Scanning Beam */}
                                            {opsStep === 1 && (
                                                <div className="absolute inset-0 overflow-hidden rounded-lg">
                                                    <div className="w-full h-2 bg-emerald-400/50 shadow-[0_0_15px_rgba(52,211,153,0.8)] absolute top-0 animate-scan"></div>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Connection Line */}
                                    {opsStep >= 2 && (
                                        <div className="absolute w-20 h-0.5 bg-slate-700 left-[120px] z-0 animate-grow-width origin-left">
                                            <div className="absolute right-0 top-[-3px] w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                                        </div>
                                    )}

                                    {/* Step 2: Extracted Data Table */}
                                    <div className={`transition-all duration-700 bg-slate-800 border border-slate-600 rounded-lg p-0 shadow-2xl w-[220px] ml-[100px] z-10 overflow-hidden
                                        ${opsStep >= 2 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[50px]'}
                                    `}>
                                        <div className="bg-slate-700/50 px-3 py-2 border-b border-slate-600 flex justify-between items-center">
                                            <div className="flex gap-2">
                                                <div className="w-2 h-2 rounded-full bg-red-400"></div>
                                                <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                                                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                                            </div>
                                            <div className="text-[9px] font-mono text-slate-400">db_invoices.xlsx</div>
                                        </div>
                                        <div className="p-3 space-y-2">
                                            <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-300 items-center border-b border-slate-700 pb-1">
                                                <div className="text-sky-400">Vendor</div>
                                                <div className="font-mono">Acme Corp</div>
                                            </div>
                                            <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-300 items-center">
                                                <div className="text-sky-400">Total</div>
                                                <div className="font-mono bg-emerald-500/20 text-emerald-400 px-1 rounded w-fit">$4,500.00</div>
                                            </div>
                                        </div>

                                        {/* Step 3: Success Badge */}
                                        {opsStep >= 3 && (
                                            <div className="bg-emerald-500 text-white text-[10px] font-bold py-1 text-center animate-fade-in-up">
                                                <i className="fa-solid fa-check mr-1"></i> Data Exported
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* EXAMPLE 1: Inventory Management */}
                            {opsExample === 1 && (
                                <div className="w-full flex flex-col items-center gap-4">
                                    <div className="w-full bg-slate-800 rounded-lg p-3 border border-slate-700 shadow-xl">
                                        <div className="flex justify-between text-[10px] text-slate-400 mb-2 uppercase font-bold">
                                            <span>Producto</span>
                                            <span>Stock Actual</span>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex justify-between items-center p-2 bg-slate-900 rounded border border-slate-700">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-6 h-6 bg-indigo-500/20 rounded text-indigo-400 flex items-center justify-center text-xs"><i className="fa-solid fa-box"></i></div>
                                                    <span className="text-xs text-white">Smart Watch V2</span>
                                                </div>
                                                <div className={`text-xs font-mono font-bold transition-all duration-500
                                                    ${opsStep === 0 ? 'text-emerald-400' : ''}
                                                    ${opsStep === 1 ? 'text-red-500 animate-pulse scale-110' : ''}
                                                    ${opsStep === 2 ? 'text-red-500' : ''}
                                                    ${opsStep === 3 ? 'text-emerald-400' : ''}
                                                `}>
                                                    {opsStep === 0 ? '450' : opsStep >= 3 ? '500' : '5'}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action Event */}
                                    {opsStep >= 1 && (
                                        <div className="flex flex-col items-center gap-2 w-full animate-fade-in-up">
                                            <div className="w-0.5 h-6 bg-red-500/50"></div>
                                            <div className="bg-red-500/10 border border-red-500/50 text-red-300 px-3 py-2 rounded-lg text-xs flex items-center gap-2 w-full justify-center">
                                                <i className="fa-solid fa-triangle-exclamation"></i> Alerta: Stock Bajo (5 Unidades)
                                            </div>
                                        </div>
                                    )}

                                    {/* Automated Resolution */}
                                    {opsStep >= 2 && (
                                        <div className="bg-emerald-500/10 border border-emerald-500/50 text-emerald-300 px-3 py-2 rounded-lg text-xs flex items-center gap-2 w-full justify-center animate-fade-in-up delay-100">
                                            <i className="fa-solid fa-robot"></i>
                                            {opsStep === 2 ? 'Generando Orden de Compra #992...' : 'Orden #992 Enviada a Proveedor'}
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* EXAMPLE 2: Employee Onboarding */}
                            {opsExample === 2 && (
                                <div className="w-full px-4">
                                    {/* New Hire Profile */}
                                    <div className={`flex items-center gap-3 mb-6 transition-all duration-500
                                        ${opsStep === 0 ? 'opacity-0 translate-x-[-20px]' : 'opacity-100 translate-x-0'}
                                     `}>
                                        <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-pink-500/30">
                                            SC
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-white">Sofia Cortes</div>
                                            <div className="text-[10px] text-slate-400">Nuevo Ingreso: Designer</div>
                                        </div>
                                        {opsStep >= 3 && <span className="ml-auto bg-emerald-500 text-white text-[9px] font-bold px-2 py-1 rounded">ACTIVE</span>}
                                    </div>

                                    {/* Provisioning Steps */}
                                    {opsStep >= 1 && (
                                        <div className="space-y-3">
                                            {/* Step 1: Email */}
                                            <div className="flex items-center justify-between p-2 bg-slate-800 rounded border border-slate-700 animate-slide-in-right delay-0">
                                                <div className="flex items-center gap-2">
                                                    <i className="fa-brands fa-google text-slate-400"></i>
                                                    <span className="text-xs text-slate-300">Google Workspace</span>
                                                </div>
                                                {opsStep >= 2 ? (
                                                    <i className="fa-solid fa-check-circle text-emerald-500 text-sm animate-bounce-short"></i>
                                                ) : (
                                                    <i className="fa-solid fa-circle-notch fa-spin text-sky-500 text-xs"></i>
                                                )}
                                            </div>

                                            {/* Step 2: Slack */}
                                            <div className="flex items-center justify-between p-2 bg-slate-800 rounded border border-slate-700 animate-slide-in-right delay-100">
                                                <div className="flex items-center gap-2">
                                                    <i className="fa-brands fa-slack text-slate-400"></i>
                                                    <span className="text-xs text-slate-300">Slack Channels</span>
                                                </div>
                                                {opsStep >= 2 ? (
                                                    <i className="fa-solid fa-check-circle text-emerald-500 text-sm animate-bounce-short delay-100"></i>
                                                ) : (
                                                    <i className="fa-solid fa-circle-notch fa-spin text-sky-500 text-xs"></i>
                                                )}
                                            </div>

                                            {/* Step 3: Notion */}
                                            <div className="flex items-center justify-between p-2 bg-slate-800 rounded border border-slate-700 animate-slide-in-right delay-200">
                                                <div className="flex items-center gap-2">
                                                    <i className="fa-solid fa-n text-slate-400 font-serif"></i>
                                                    <span className="text-xs text-slate-300">Notion Access</span>
                                                </div>
                                                {opsStep >= 2 ? (
                                                    <i className="fa-solid fa-check-circle text-emerald-500 text-sm animate-bounce-short delay-200"></i>
                                                ) : (
                                                    <i className="fa-solid fa-circle-notch fa-spin text-sky-500 text-xs"></i>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}

                        </div>

                    </div>
                );

            default:
                return <div className="text-slate-400 text-center italic">Visualización no disponible</div>;
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm bg-black/60" onClick={onClose}>
            <div
                className="bg-slate-900/95 border border-slate-700 w-full max-w-lg rounded-2xl shadow-2xl transform transition-all scale-100 overflow-hidden animate-zoom-in"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="p-5 border-b border-slate-800 flex justify-between items-center bg-gradient-to-r from-slate-900 to-slate-800/50">
                    <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-lg ${colorClasses.iconBg} flex items-center justify-center ${colorClasses.text}`}>
                            <i className={`fa-solid ${service.icon} text-lg`}></i>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white leading-tight">{service.title}</h3>
                            <p className="text-slate-500 text-xs hidden sm:block">Demostración Interactiva</p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-slate-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 w-8 h-8 rounded-full flex items-center justify-center"
                    >
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>

                <div className="p-6 bg-slate-950/50">
                    {renderVisualExample()}

                    <div className="mt-6 flex justify-center">
                        <a
                            href="#contacto"
                            onClick={onClose}
                            className="group bg-sky-500 hover:bg-sky-400 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg hover:shadow-sky-500/30 flex items-center gap-2 transform hover:-translate-y-0.5"
                        >
                            <span>Quiero esto en mi negocio</span>
                            <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceModal;
