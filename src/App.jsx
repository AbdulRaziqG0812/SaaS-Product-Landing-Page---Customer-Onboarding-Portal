import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductOverview from './components/ProductOverview';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Onboarding from './components/Onboarding';
import DashboardPreview from './components/DashboardPreview';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Global Translation Master Dictionary for all system components
const translations = {
  EN: {
    hero: {
      heroTag: "AUTOMATED CORE PLATFORM",
      heroTitle: "Accelerate Frontend Development Engine",
      heroDesc: "The modern framework layer designed for speed, layout precision, and dynamic enterprise portal scaling.",
      startBtn: "Get Started"
    },
    overview: {
      tag: "Platform Engine",
      titlePre: "The Core Architecture for Dynamic",
      titlePost: "Conversion Growth",
      desc: "Teyzix Core monitors and micro-optimizes layout render sequences in real-time, removing critical interactive blockages that commonly frustrate modern SaaS platform visitors.",
      feat1Title: "Smart Render Triggers:",
      feat1Desc: "Delivers sub-millisecond structural adjustments dynamically.",
      feat2Title: "Behavioral Flow Maps:",
      feat2Desc: "Automates data profiling paths safely and transparently.",
      cardTitle: "CORE COMPLIANCE STATUS",
      cardBadge: "99.8% OPTIMIZED",
      cardMetric: "Frontend Render Efficiency",
      cardCompare: "+42% vs Baseline",
      diagTitle: "# system_status_diagnostic",
      diagLine1: "› core_engine: active [onboarding_ready]",
      diagLine2: "› latency_metrics: 0.04ms response"
    }
  },
  ES: {
    hero: {
      heroTag: "PLATAFORMA NÚCLEO AUTOMATIZADA",
      heroTitle: "Acelere el Motor de Desarrollo Frontend",
      heroDesc: "La capa de marco moderna diseñada para la velocidad, la precisión del diseño y el escalado de portales empresariales.",
      startBtn: "Comenzar"
    },
    overview: {
      tag: "Motor de la Plataforma",
      titlePre: "La Arquitectura Central para el Crecimiento",
      titlePost: "Dinámico de Conversión",
      desc: "Teyzix Core monitorea y micro-optimiza las secuencias de renderizado de diseño en tiempo real, eliminando bloqueos interactivos críticos que comúnmente frustran a los visitantes de las plataformas SaaS modernas.",
      feat1Title: "Disparadores de Render Inteligentes:",
      feat1Desc: "Ofrece ajustes estructurales de sub-milisegundos dinámicamente.",
      feat2Title: "Mapas de Flujo de Comportamiento:",
      feat2Desc: "Automatiza las rutas de perfilado de datos de forma segura y transparente.",
      cardTitle: "ESTADO DE CUMPLIMIENTO CENTRAL",
      cardBadge: "99.8% OPTIMIZADO",
      cardMetric: "Eficiencia de Renderizado Frontend",
      cardCompare: "+42% frente al valor inicial",
      diagTitle: "# diagnóstico_estado_sistema",
      diagLine1: "› motor_central: activo [onboarding_listo]",
      diagLine2: "› métricas_latencia: respuesta de 0.04ms"
    }
  }
};

function App() {
  const [isDark, setIsDark] = useState(true);
  const [accentColor, setAccentColor] = useState('emerald'); 
  const [lang, setLang] = useState('EN'); 
  const [textSize, setTextSize] = useState('normal'); 

  const themeClasses = {
    emerald: { text: 'text-emerald-400', bg: 'bg-emerald-500', border: 'border-emerald-500/20', fromTo: 'from-emerald-400 to-teal-300' },
    blue: { text: 'text-blue-400', bg: 'bg-blue-500', border: 'border-blue-500/20', fromTo: 'from-blue-400 to-cyan-300' },
    violet: { text: 'text-violet-400', bg: 'bg-violet-500', border: 'border-violet-500/20', fromTo: 'from-violet-400 to-fuchsia-300' }
  };

  const currentTheme = themeClasses[accentColor] || themeClasses['emerald'];
  const textScaleClass = textSize === 'large' ? 'text-lg' : 'text-base';
  
  // Safe extraction wrapper fallback
  const currentTranslations = translations[lang] || translations['EN'];

  return (
    // App.jsx mein ye line update karein:
    <div className={`min-h-screen transition-all duration-300 ${textScaleClass} ${isDark ? 'bg-[#0A0E17] text-white' : 'bg-slate-50 text-slate-900'}`}>
      
      <Navbar 
        isDark={isDark} setIsDark={setIsDark} 
        accentColor={accentColor} setAccentColor={setAccentColor}
        lang={lang} setLang={setLang}
        textSize={textSize} setTextSize={setTextSize}
        currentTheme={currentTheme}
      />
      
      {/* Har single sub-component ko dynamic language mapping explicit pass kar di hai */}
      <Hero isDark={isDark} currentTheme={currentTheme} t={currentTranslations.hero} />
      
      <ProductOverview isDark={isDark} currentTheme={currentTheme} lang={lang} />
      
      <Features isDark={isDark} currentTheme={currentTheme} lang={lang} />
      
      <Testimonials isDark={isDark} currentTheme={currentTheme} lang={lang} />
      
      <Pricing isDark={isDark} currentTheme={currentTheme} lang={lang} />
      
      <FAQ isDark={isDark} currentTheme={currentTheme} lang={lang} />
      
      <Onboarding isDark={isDark} currentTheme={currentTheme} lang={lang} />
      
      <DashboardPreview isDark={isDark} currentTheme={currentTheme} lang={lang} />
      
      <Contact isDark={isDark} currentTheme={currentTheme} lang={lang} />
      
      <Footer isDark={isDark} />
    </div>
  );
}

export default App;