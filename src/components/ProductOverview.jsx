import React from 'react';

function ProductOverview({ isDark, currentTheme, lang }) {
  const content = {
    EN: {
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
    },
    ES: {
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
  };

  const t = content[lang] || content['EN'];

  return (
    <section id="overview" className={`py-28 px-6 transition-all duration-300 ${
      isDark ? 'bg-[#0A0E17] text-white' : 'bg-slate-50 text-slate-900'
    }`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Informational Content */}
        <div className="space-y-7">
          <span className={`inline-block text-[10px] border px-3 py-1.5 rounded-full font-black tracking-widest uppercase shadow-sm ${
            isDark ? 'bg-emerald-500/10 border-emerald-500/20' : 'bg-white border-slate-200'
          }`}>
            {t.tag}
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-[1.1]">
            {t.titlePre} <span className={`text-transparent bg-clip-text bg-gradient-to-r ${currentTheme.fromTo}`}>{t.titlePost}</span>
          </h2>
          <p className={`text-xs md:text-[13px] leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            {t.desc}
          </p>
          
          <div className="space-y-4 pt-2">
            {[ { title: t.feat1Title, desc: t.feat1Desc }, { title: t.feat2Title, desc: t.feat2Desc } ].map((f, i) => (
              <div key={i} className="flex items-start space-x-3.5 text-xs">
                <span className={`mt-0.5 font-bold text-sm ${currentTheme.text}`}>✓</span>
                <p className={isDark ? 'text-slate-300' : 'text-slate-700'}>
                  <strong className={`font-bold mr-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>{f.title}</strong> {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Dashboard Card */}
        <div className={`border p-8 rounded-3xl transition-all duration-500 ${
          isDark 
            ? 'bg-[#0D1321] border-slate-800 shadow-2xl' 
            : 'bg-white border-slate-200 shadow-xl shadow-slate-200/50'
        }`}>
          <div className={`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r ${currentTheme.fromTo}`}></div>
          
          <div className="space-y-6">
            <div className={`flex justify-between items-center border-b pb-4 ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
              <span className="text-[10px] font-black text-slate-400 tracking-widest uppercase">{t.cardTitle}</span>
              <span className={`text-[9px] text-black px-2 py-0.5 rounded font-black ${currentTheme.bg}`}>
                {t.cardBadge}
              </span>
            </div>
            
            <div className="space-y-2">
              <div className={`h-2 rounded-full overflow-hidden ${isDark ? 'bg-slate-950' : 'bg-slate-100'}`}>
                <div className={`h-full w-[94%] ${currentTheme.bg}`}></div>
              </div>
              <div className="flex justify-between text-[10px] font-bold text-slate-400">
                <span>{t.cardMetric}</span>
                <span className={currentTheme.text}>{t.cardCompare}</span>
              </div>
            </div>
            
            <div className={`p-4 border rounded-2xl space-y-1.5 ${isDark ? 'bg-slate-950/50 border-slate-900' : 'bg-slate-50 border-slate-100'}`}>
              <p className={`text-[10px] font-mono font-bold ${currentTheme.text}`}>{t.diagTitle}</p>
              <p className={`text-[9px] font-mono ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>{t.diagLine1}</p>
              <p className={`text-[9px] font-mono ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>{t.diagLine2}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductOverview;