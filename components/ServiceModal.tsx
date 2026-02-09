import React, { useState, useEffect } from 'react';

interface ServiceModalProps {
    isOpen: boolean;
    onClose: () => void;
    service: {
        title: string;
        desc: string;
        icon: string;
        color: string;
        type: 'chatbot' | 'crm' | 'leads' | 'operations';
    } | null;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ isOpen, onClose, service }) => {
    if (!isOpen || !service) return null;

    // -- CHATBOT STATE --
    const [chatStep, setChatStep] = useState(0);
    const [isTyping, setIsTyping] = useState(false);

    // -- CRM STATE --
    const [crmStep, setCrmStep] = useState(0); // 0: Idle, 1: Dragging, 2: Dropped
    const [crmExample, setCrmExample] = useState(0); // 0: Pipeline, 1: Follow-up, 2: Reactivation

    // -- LEADS STATE --
    const [enrichmentStep, setEnrichmentStep] = useState(0);
    const [leadsExample, setLeadsExample] = useState(0); // 0: Enrichment, 1: Scraping, 2: Filtering

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

    const colorClasses = getColorClasses(service.color);

    useEffect(() => {
        if (!isOpen) {
            // Reset all states when modal closes
            setChatStep(0);
            setIsTyping(false);
            setCrmStep(0);
            setCrmExample(0);
            setEnrichmentStep(0);
            setLeadsExample(0);
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

        // -- LEADS ANIMATION SEQUENCE --
        if (service.type === 'leads') {
            setEnrichmentStep(0);

            if (leadsExample === 0) {
                // Enrichment (Existing)
                const sequence = async () => {
                    await new Promise(r => setTimeout(r, 800));
                    setEnrichmentStep(1); // Incoming message
                    await new Promise(r => setTimeout(r, 1000));
                    setEnrichmentStep(2); // Analyzing
                    await new Promise(r => setTimeout(r, 2500));
                    setEnrichmentStep(3); // Enriched Result
                };
                sequence();
            } else if (leadsExample === 1) {
                // Scraping (New)
                const sequence = async () => {
                    await new Promise(r => setTimeout(r, 500));
                    setEnrichmentStep(1); // Load profile
                    await new Promise(r => setTimeout(r, 1000));
                    setEnrichmentStep(2); // Extracting
                    await new Promise(r => setTimeout(r, 1500));
                    setEnrichmentStep(3); // Data Card
                };
                sequence();
            } else if (leadsExample === 2) {
                // Filtering (New)
                const sequence = async () => {
                    await new Promise(r => setTimeout(r, 500));
                    setEnrichmentStep(1); // List loaded
                    await new Promise(r => setTimeout(r, 1000));
                    setEnrichmentStep(2); // Scannning/Filtering
                    await new Promise(r => setTimeout(r, 1500));
                    setEnrichmentStep(3); // Qualified Only
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

    }, [isOpen, service.type, opsExample, crmExample, leadsExample]);


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

            case 'leads':
                return (
                    <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700 h-[400px] flex flex-col relative">

                        {/* Selector */}
                        <div className="flex space-x-2 mb-4 justify-center bg-slate-800/80 p-1 rounded-lg w-fit mx-auto mt-4 z-50 sticky top-0 backdrop-blur-sm">
                            {[
                                { id: 0, label: 'Enriquecimiento', icon: 'fa-wand-magic-sparkles' },
                                { id: 1, label: 'Scraping', icon: 'fa-globe' },
                                { id: 2, label: 'Filtrado', icon: 'fa-filter' }
                            ].map(item => (
                                <button
                                    key={item.id}
                                    onClick={() => setLeadsExample(item.id)}
                                    className={`px-3 py-1.5 rounded-md text-[10px] font-bold uppercase tracking-wide transition-all flex items-center gap-2
                                        ${leadsExample === item.id
                                            ? 'bg-purple-600 text-white shadow-lg'
                                            : 'text-slate-400 hover:bg-slate-700 hover:text-white'
                                        }
                                    `}
                                >
                                    <i className={`fa-solid ${item.icon}`}></i>
                                    {item.label}
                                </button>
                            ))}
                        </div>

                        {/* Background Grid */}
                        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                        {/* EXAMPLE 0: Enrichment */}
                        {leadsExample === 0 && (
                            <div className="relative h-full p-6">
                                {/* Step 1: Input Source (Incoming Message) */}
                                <div className={`transition-all duration-700 flex justify-center mb-8 z-10
                                     ${enrichmentStep === 0 ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'}
                                     ${enrichmentStep >= 3 ? 'opacity-0 scale-50 absolute top-0' : ''}
                                `}>
                                    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl rounded-bl-none shadow-xl max-w-[80%]">
                                        <div className="text-[10px] text-slate-400 mb-1 flex items-center gap-2">
                                            <i className="fa-brands fa-whatsapp text-green-400"></i> +57 321 000...
                                        </div>
                                        <div className="text-white text-lg font-medium">"Hola, info precios?"</div>
                                    </div>
                                </div>

                                {/* Step 2: AI Processing Overlay */}
                                {enrichmentStep === 2 && (
                                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-slate-900/80 backdrop-blur-sm">
                                        <div className="w-16 h-16 rounded-full border-4 border-slate-700 border-t-emerald-500 animate-spin mb-4"></div>
                                        <div className="space-y-2 font-mono text-center">
                                            <div className="text-emerald-400 text-xs animate-pulse">&gt; Identifying Contact...</div>
                                            <div className="text-sky-400 text-xs animate-pulse delay-100">&gt; Looking up Company...</div>
                                            <div className="text-purple-400 text-xs animate-pulse delay-200">&gt; Calculating Score...</div>
                                        </div>
                                    </div>
                                )}

                                {/* Step 3: Enriched Profile Result */}
                                {enrichmentStep === 3 && (
                                    <div className="z-10 animate-zoom-in">
                                        <div className="bg-slate-800 border border-emerald-500/30 rounded-xl p-0 overflow-hidden shadow-2xl shadow-emerald-500/10 mb-4">
                                            {/* Header */}
                                            <div className="bg-slate-700/50 p-4 flex gap-4 items-center border-b border-white/5">
                                                <div className="w-16 h-16 rounded-full bg-slate-600 overflow-hidden border-2 border-emerald-500 shadow-lg shadow-emerald-500/20">
                                                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-500 text-2xl font-bold text-white">
                                                        JG
                                                    </div>
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-white">Juan Gonzalez (CEO)</h3>
                                                    <p className="text-slate-400 text-xs flex items-center gap-2">
                                                        <i className="fa-solid fa-building"></i> TechSolutions Inc.
                                                    </p>
                                                </div>
                                                <div className="ml-auto text-right">
                                                    <div className="text-emerald-400 text-2xl font-bold">98/100</div>
                                                    <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Lead Score</div>
                                                </div>
                                            </div>

                                            {/* Details */}
                                            <div className="p-4 grid grid-cols-2 gap-4">
                                                <div className="bg-slate-900/50 p-2 rounded border border-white/5">
                                                    <div className="text-[10px] text-slate-500 uppercase mb-1">Intención</div>
                                                    <div className="text-sky-400 text-sm font-medium flex items-center gap-1">
                                                        <i className="fa-solid fa-temperature-full text-red-500"></i> Compra Inmediata
                                                    </div>
                                                </div>
                                                <div className="bg-slate-900/50 p-2 rounded border border-white/5">
                                                    <div className="text-[10px] text-slate-500 uppercase mb-1">Presupuesto Est.</div>
                                                    <div className="text-emerald-400 text-sm font-medium">$5k - $10k USD</div>
                                                </div>
                                                <div className="col-span-2 bg-emerald-500/10 border border-emerald-500/20 p-2 rounded flex items-center justify-between">
                                                    <span className="text-emerald-400 text-xs font-medium">Respuesta Sugerida Generada</span>
                                                    <button className="bg-emerald-500 hover:bg-emerald-600 text-white text-[10px] font-bold px-3 py-1 rounded transition-colors">
                                                        Enviar Ahora
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* EXAMPLE 1: Scraping */}
                        {leadsExample === 1 && (
                            <div className="h-full flex items-center justify-center relative p-6 w-full">
                                {/* Target Website (Simulated Browser - Dark Mode) */}
                                <div className={`w-[300px] h-[220px] bg-slate-950 rounded-lg shadow-2xl overflow-hidden relative transition-all duration-700 border border-slate-700
                                    ${enrichmentStep >= 3 ? 'scale-90 opacity-40 blur-[2px]' : 'scale-100'}
                                    ${enrichmentStep === 0 ? 'opacity-0 translate-y-10' : 'opacity-100'}
                                `}>
                                    {/* Browser Header */}
                                    <div className="bg-slate-900 h-7 w-full flex items-center px-3 gap-1.5 border-b border-slate-800">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                                        <div className="ml-3 w-40 h-4 bg-slate-800 rounded-md flex items-center px-2 border border-slate-700">
                                            <div className="w-2 h-2 rounded-full border border-slate-500"></div>
                                            <div className="ml-2 w-20 h-1.5 bg-slate-600 rounded-full"></div>
                                        </div>
                                    </div>

                                    {/* Webpage Content Skeleton (LinkedIn Style Dark High Contrast) */}
                                    <div className="relative bg-slate-900 h-full">
                                        {/* Banner */}
                                        <div className="h-16 bg-gradient-to-r from-slate-800 to-slate-700 w-full relative overflow-hidden border-b border-slate-700">
                                            <div className="absolute inset-0 bg-white/5" style={{ backgroundImage: 'radial-gradient(#ffffff 0.5px, transparent 0.5px)', backgroundSize: '8px 8px', opacity: 0.2 }}></div>
                                        </div>

                                        <div className="px-4 -mt-8 flex justify-between items-end relative z-10">
                                            {/* Avatar */}
                                            <div className="w-16 h-16 rounded-full bg-slate-800 border-4 border-slate-900 relative overflow-hidden shadow-lg">
                                                <div className="absolute inset-0 flex items-center justify-center bg-slate-700">
                                                    <i className="fa-solid fa-user text-slate-400 text-2xl"></i>
                                                </div>
                                            </div>
                                            {/* Connect Button */}
                                            <div className="h-6 w-20 bg-blue-600 rounded-full mb-3 shadow-lg shadow-blue-900/40"></div>
                                        </div>

                                        <div className="p-4 space-y-3">
                                            {/* Name & Headline */}
                                            <div>
                                                <div className="h-4 bg-slate-600 w-1/2 rounded mb-2"></div>
                                                <div className="h-2.5 bg-slate-700 w-3/4 rounded border border-slate-600/30"></div>
                                            </div>

                                            <div className="border-t border-slate-700 pt-3 space-y-2">
                                                <div className="h-2 bg-slate-700 w-full rounded"></div>
                                                <div className="h-2 bg-slate-700 w-5/6 rounded"></div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Scanning Laser Effect */}
                                    {enrichmentStep >= 1 && enrichmentStep < 3 && (
                                        <div className="absolute inset-0 z-20 pointer-events-none">
                                            {/* Moving scan beam */}
                                            <div className="w-full h-[2px] bg-emerald-400 shadow-[0_0_20px_rgba(52,211,153,1)] absolute top-0 animate-scan z-30"></div>

                                            {/* Detected Highlights - Borders only to be cleaner */}
                                            <div className="absolute top-[85px] left-[16px] w-[64px] h-[64px] border-2 border-emerald-400/80 rounded-full animate-pulse transition-all shadow-[0_0_10px_rgba(52,211,153,0.3)]"></div>
                                            <div className="absolute top-[152px] left-[16px] w-[140px] h-[16px] border border-emerald-400/80 bg-emerald-500/10 rounded animate-pulse delay-75 shadow-[0_0_10px_rgba(52,211,153,0.3)]"></div>

                                            {/* Status Pill */}
                                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/80 border border-emerald-500 text-emerald-400 text-[10px] font-mono px-4 py-1.5 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.4)] flex items-center gap-2 z-40 backdrop-blur-md w-max">
                                                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping shrink-0"></div>
                                                <span className="font-bold tracking-wider whitespace-nowrap">EXTRAYENDO DATOS...</span>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Extracted Data Card (Glassmorphism) */}
                                {enrichmentStep >= 3 && (
                                    <div className="absolute z-30 bg-slate-900/90 backdrop-blur-xl border border-slate-600/50 rounded-xl p-0 shadow-2xl animate-fade-in-up w-[240px] overflow-hidden">
                                        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-3 flex justify-between items-center">
                                            <div className="flex items-center gap-2">
                                                <div className="bg-white/20 p-1.5 rounded-lg">
                                                    <i className="fa-brands fa-linkedin text-white text-sm"></i>
                                                </div>
                                                <span className="text-white text-xs font-bold">Perfil Exportado</span>
                                            </div>
                                            <div className="w-1.5 h-1.5 bg-green-400 rounded-full shadow-[0_0_10px_rgba(74,222,128,1)]"></div>
                                        </div>

                                        <div className="p-4 space-y-3">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center border border-slate-600">
                                                    <span className="text-slate-400 font-bold">CR</span>
                                                </div>
                                                <div>
                                                    <div className="text-sm font-bold text-white">Carlos Rodriguez</div>
                                                    <div className="text-[10px] text-slate-400">CTO @ TechGlobal</div>
                                                </div>
                                            </div>

                                            <div className="bg-slate-800/50 rounded-lg p-2 space-y-1.5 border border-slate-700/50">
                                                <div className="flex justify-between items-center">
                                                    <span className="text-[10px] text-slate-500">Email Corp.</span>
                                                    <span className="text-[10px] text-emerald-400 font-mono bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">carlos@techglobal.io</span>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span className="text-[10px] text-slate-500">Ubicación</span>
                                                    <span className="text-[10px] text-slate-300">Medellín, CO</span>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span className="text-[10px] text-slate-500">Móvil</span>
                                                    <span className="text-[10px] text-slate-300">+57 300 ...</span>
                                                </div>
                                            </div>

                                            <button className="w-full bg-slate-800 hover:bg-slate-700 text-slate-300 text-[10px] py-2 rounded-lg border border-slate-700 transition-colors flex items-center justify-center gap-2">
                                                <i className="fa-solid fa-download"></i> Guardar en CRM
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* EXAMPLE 2: Filtering */}
                        {leadsExample === 2 && (
                            <div className="w-full px-8 py-4 space-y-2">
                                {/* Header */}
                                <div className="flex justify-between text-[10px] text-slate-500 font-bold uppercase mb-2">
                                    <span>Lead</span>
                                    <span>Status</span>
                                </div>

                                {/* List Items */}
                                {[
                                    { name: 'Lead A', quality: 'baja' },
                                    { name: 'Lead B', quality: 'alta' },
                                    { name: 'Lead C', quality: 'baja' }
                                ].map((lead, idx) => (
                                    <div key={idx} className={`flex justify-between items-center p-2 rounded border transition-all duration-700
                                         ${enrichmentStep === 0 ? 'opacity-0 translate-x-[-20px]' : 'opacity-100 translate-x-0'}
                                         ${enrichmentStep >= 2 && lead.quality === 'baja' ? 'opacity-25 grayscale' : 'bg-slate-800 border-slate-700'}
                                         ${enrichmentStep >= 3 && lead.quality === 'alta' ? 'bg-emerald-500/20 border-emerald-500 shadow-lg scale-105' : ''}
                                     `} style={{ transitionDelay: `${idx * 100}ms` }}>
                                        <div className="flex items-center gap-2">
                                            <div className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center text-[10px] text-slate-400">{lead.name[5]}</div>
                                            <span className="text-xs text-white">{lead.name}</span>
                                        </div>
                                        <div>
                                            {enrichmentStep >= 2 ? (
                                                lead.quality === 'alta' ?
                                                    <span className="text-[10px] text-emerald-400 font-bold"><i className="fa-solid fa-check"></i> Calificado</span> :
                                                    <span className="text-[10px] text-red-400"><i className="fa-solid fa-xmark"></i> Descartado</span>
                                            ) : (
                                                <span className="text-[10px] text-slate-500">Pendiente...</span>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

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
                        <button className={`group bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg hover:shadow-blue-600/30 flex items-center gap-2 transform hover:-translate-y-0.5`}>
                            <span>Quiero esto en mi negocio</span>
                            <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceModal;
