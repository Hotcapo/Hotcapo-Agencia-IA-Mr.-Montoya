
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Framework from './components/Framework';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import StarBackground from './components/StarBackground';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-sky-500/30">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,_#1e293b_0%,_#020617_100%)]"></div>

      <StarBackground />

      {/* Dynamic Background Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-sky-500/10 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-500/10 blur-[120px]"></div>
      </div>

      <Navbar />

      <main>
        <Hero />
        <Stats />
        <Services />
        <Framework />
        <Pricing />
        <Contact />
      </main>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default App;
