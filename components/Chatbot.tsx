
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Loader2, Sparkles } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { SYSTEM_INSTRUCTION } from '../data/chatbotContext';

interface Message {
    id: string;
    text: string;
    sender: 'user' | 'bot';
    timestamp: Date;
}

const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            text: '¡Hola! Soy el asistente virtual de Mr. Montoya. ¿En qué puedo ayudarte hoy?',
            sender: 'bot',
            timestamp: new Date()
        }
    ]);
    const [inputText, setInputText] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = async () => {
        if (!inputText.trim()) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            text: inputText,
            sender: 'user',
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        setInputText('');
        setIsLoading(true);

        try {
            const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

            if (!apiKey || apiKey === 'PLACEHOLDER_API_KEY') {
                throw new Error('API Key no configurada');
            }

            const genAI = new GoogleGenerativeAI(apiKey);
            // Lista de modelos para probar en orden de prioridad/disponibilidad
            const modelsToTry = ["gemini-2.0-flash-exp", "gemini-flash-latest", "gemini-2.5-flash"];

            let text = '';
            let lastError = null;

            for (const modelName of modelsToTry) {
                try {
                    console.log(`Intentando con modelo: ${modelName}`);
                    const model = genAI.getGenerativeModel({
                        model: modelName,
                        systemInstruction: SYSTEM_INSTRUCTION
                    });
                    const result = await model.generateContent(userMessage.text);
                    const response = await result.response;
                    text = response.text();

                    // Si llegamos aquí, tuvimos éxito
                    lastError = null;
                    break;
                } catch (e: any) {
                    console.warn(`Falló modelo ${modelName}:`, e.message);
                    lastError = e;
                    // Continuar con el siguiente modelo
                    if (e.message?.includes('429')) continue; // Si es cuota, probar otro
                    if (e.message?.includes('404')) continue; // Si no existe, probar otro
                    throw e; // Otros errores (auth, etc) lanzarlos
                }
            }

            if (lastError || !text) {
                throw lastError || new Error('No se pudo obtener respuesta de ningún modelo');
            }


            const botMessage: Message = {
                id: (Date.now() + 1).toString(),
                text: text,
                sender: 'bot',
                timestamp: new Date()
            };

            setMessages(prev => [...prev, botMessage]);
        } catch (error: any) {
            console.error('Error getting response:', error);
            let errorText = 'Lo siento, hubo un error al procesar tu solicitud.';

            // Debug info
            const rawError = error instanceof Error ? error.message : String(error);
            errorText += ` (Detalles: ${rawError})`;

            if (error.message === 'API Key no configurada') {
                errorText = 'Error de configuración: No se encontró la API Key. Por favor verifica el archivo .env.local y reinicia el servidor.';
            } else if (error.message?.includes('429')) {
                errorText = 'El sistema está saturado momentáneamente (Límite de cuota). Intenta de nuevo en unos segundos.';
            } else if (error.message?.includes('400')) {
                errorText = 'Error de validación: La solicitud fue rechazada. Verifica que la API Key sea válida.';
            }

            const errorMessage: Message = {
                id: (Date.now() + 1).toString(),
                text: errorText,
                sender: 'bot',
                timestamp: new Date()
            };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
            {/* Chat Window */}
            <div
                className={`
          mb-4 w-[350px] md:w-[400px] h-[500px] bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right pointer-events-auto
          ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-10 pointer-events-none'}
        `}
            >
                {/* Header */}
                <div className="p-4 bg-slate-800/50 border-b border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-sky-500/20">
                            <Bot className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h3 className="font-bold text-white text-sm">Agente Mr. Montoya</h3>
                            <p className="text-xs text-sky-400 flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                En línea
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="p-2 hover:bg-white/5 rounded-full text-slate-400 hover:text-white transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-sky-500/20 scrollbar-track-transparent">
                    {messages.map((msg) => (
                        <div
                            key={msg.id}
                            className={`flex items-start gap-3 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}
                        >
                            <div
                                className={`
                  w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0
                  ${msg.sender === 'user'
                                        ? 'bg-slate-700 text-slate-300'
                                        : 'bg-sky-500/10 text-sky-400 border border-sky-500/20'}
                `}
                            >
                                {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Sparkles className="w-4 h-4" />}
                            </div>
                            <div
                                className={`
                  max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed
                  ${msg.sender === 'user'
                                        ? 'bg-sky-600 text-white rounded-tr-sm'
                                        : 'bg-slate-800 text-slate-300 rounded-tl-sm border border-white/5'}
                `}
                            >
                                {msg.text}
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20 flex items-center justify-center flex-shrink-0">
                                <Bot className="w-4 h-4" />
                            </div>
                            <div className="bg-slate-800 p-3 rounded-2xl rounded-tl-sm border border-white/5">
                                <Loader2 className="w-5 h-5 animate-spin text-sky-500" />
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="p-4 bg-slate-800/50 border-t border-white/5">
                    <div className="flex items-center gap-2 bg-slate-900/50 border border-white/10 rounded-full px-4 py-2 focus-within:border-sky-500/50 transition-colors">
                        <textarea
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                            onKeyDown={handleKeyPress}
                            placeholder="Escribe tu mensaje..."
                            rows={1}
                            className="flex-1 bg-transparent border-none focus:outline-none text-sm text-white placeholder-slate-500 resize-none py-2 max-h-32"
                            disabled={isLoading}
                        />
                        <button
                            onClick={handleSendMessage}
                            disabled={isLoading || !inputText.trim()}
                            className="p-1.5 bg-sky-500 rounded-full text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-sky-400 transition-colors"
                        >
                            <Send className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`
          group pointer-events-auto w-14 h-14 rounded-full flex items-center justify-center shadow-lg shadow-sky-500/20 transition-all duration-300 hover:scale-110 active:scale-95
          ${isOpen ? 'bg-slate-800 text-white' : 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white'}
        `}
            >
                {isOpen ? (
                    <X className="w-6 h-6 transition-transform group-hover:rotate-90" />
                ) : (
                    <MessageCircle className="w-7 h-7" />
                )}
            </button>
        </div>
    );
};

export default Chatbot;
