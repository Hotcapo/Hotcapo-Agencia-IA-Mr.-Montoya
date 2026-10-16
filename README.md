# M. Skills IA | Agencia de Automatización y Desarrollo con IA

Plataforma web corporativa e interactiva de **M. Skills IA**, diseñada con una estética futurista (Glassmorphism, gradientes metálicos y sistema orbital 3D) para presentar soluciones de Agentes de IA, Automatización CRM, Creación de Páginas Web impulsadas por IA y Operaciones Inteligentes.

## 🚀 Stack Tecnológico

- **Frontend:** React 19 + TypeScript
- **Estilos:** Tailwind CSS v4 + Animaciones 3D CSS (`preserve-3d`, `@keyframes orbitSpin`)
- **Bundler:** Vite 6
- **IA Conversacional:** `@google/generative-ai` (Google Gemini 2.5 / 2.0 Flash) con historial multi-turno y motor de respaldo local.
- **Iconografía:** Font Awesome 6.4 + Lucide React

## 🧩 Arquitectura de Componentes

- `components/Navbar.tsx`: Navegación fija con soporte responsivo y menú desplegable móvil.
- `components/Hero.tsx`: Propuesta de valor central y sistema planetario 3D con satélites en órbitas multi-eje y escala de profundidad dinámica.
- `components/Stats.tsx`: Indicadores clave de impacto y retorno de inversión.
- `components/Services.tsx` & `components/ServiceModal.tsx`: Catálogo de los 4 pilares de servicio con demostraciones interactivas animadas por fases (incluyendo el módulo de **Creación de Páginas Web**).
- `components/ProcessFlow.tsx`: Motor de conversión en 3 etapas (*Captura*, *Nutre*, *Cierra*).
- `components/Framework.tsx`: Metodología **AIM** (*Audit & Unify*, *Go-Live*, *Scale & Control*).
- `components/Pricing.tsx`: Planes de inversión (*Básico*, *Avanzado*, *Elite Business*).
- `components/Contact.tsx`: Formulario interactivo de captura de prospectos con validación y estado de confirmación.
- `components/Chatbot.tsx` & `data/chatbotContext.ts`: Asistente virtual **Agente M. Skills IA** con contexto de marca, servicios y precios actualizados.

## 🛠️ Instalación y Ejecución Local

1. **Instalar dependencias:**
   ```bash
   npm install
   ```
2. **Configurar variables de entorno (Opcional para IA en vivo):**
   Define `VITE_GEMINI_API_KEY` en tu archivo `.env.local`:
   ```env
   VITE_GEMINI_API_KEY=tu_clave_de_gemini
   ```
   *(Si no se configura, el chatbot activará automáticamente su motor de respuesta inteligente local).*
3. **Iniciar servidor de desarrollo:**
   ```bash
   npm run dev
   ```
4. **Compilar para producción:**
   ```bash
   npm run build
   ```

