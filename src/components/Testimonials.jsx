import React from 'react';

function Testimonials({ isDark, currentTheme, lang }) {
  const content = {
    EN: {
      titlePre: "Trusted by Industry",
      titlePost: "Innovators",
      subtitle: "See how top engineering teams deploy our structures to power complex customer applications.",
      reviews: [
        { 
          name: "Sarah Jenkins", 
          role: "Chief Executive, TechFlow Enterprise", 
          text: "Integrating Teyzix Core completely shifted our onboarding lifecycle. Our team registered a clear 40% jump in activation tracking parameters within the very first month of frontend deployment.", 
          metric: "40% Conversion Spike" 
        },
        { 
          name: "Marcus Vance", 
          role: "VP of Product, Nexus Automations", 
          text: "The component isolation and sleek clean architecture are exceptional. It handles millions of interface state calls without breaking a sweat on modern setups.", 
          metric: "0.02ms UI Latency" 
        }
      ]
    },
    ES: {
      titlePre: "Confiado por Innovadores de la",
      titlePost: "Industria",
      subtitle: "Vea cómo los mejores equipos de ingeniería implementan nuestras estructuras para impulsar aplicaciones complejas de clientes.",
      reviews: [
        { 
          name: "Sarah Jenkins", 
          role: "Chief Executive, TechFlow Enterprise", 
          text: "La integración de Teyzix Core cambió por completo nuestro ciclo de vida de incorporación. Nuestro equipo registró un claro salto del 40% en los parámetros de seguimiento de activación dentro del primer mes de despliegue frontend.", 
          metric: "40% de Aumento en Conversión" 
        },
        { 
          name: "Marcus Vance", 
          role: "VP of Product, Nexus Automations", 
          text: "El aislamiento de componentes y la elegante arquitectura limpia son excepcionales. Maneja millones de llamadas de estado de interfaz sin ningún problema en configuraciones modernas.", 
          metric: "0.02ms de Latencia de IU" 
        }
      ]
    }
  };

  const t = content[lang] || content['EN'];

  return (
    <section id="testimonials" className={`py-28 px-6 transition-all duration-300 ${
      isDark ? 'bg-[#0A0E17] text-white' : 'bg-slate-50 text-slate-900'
    }`}>
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
            {t.titlePre} <span className={`text-transparent bg-clip-text bg-gradient-to-r ${currentTheme.fromTo}`}>{t.titlePost}</span>
          </h2>
          <p className={`text-xs md:text-sm font-medium max-w-xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            {t.subtitle}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.reviews.map((r, i) => (
            <div 
              key={i} 
              className={`p-10 rounded-3xl border transition-all duration-300 ${
                isDark 
                  ? 'bg-[#0D1321] border-slate-800 shadow-2xl' 
                  : 'bg-white border-slate-200 shadow-xl shadow-slate-200/60'
              }`}
            >
              <span className={`inline-block text-[9px] font-black tracking-wider px-3 py-1 rounded-lg ${currentTheme.bg} text-black`}>
                {r.metric}
              </span>
              
              <p className={`text-xs md:text-[13px] italic mt-6 mb-8 leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                "{r.text}"
              </p>

              <div className={`border-t pt-5 ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
                <h4 className="text-sm font-bold">{r.name}</h4>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
                  {r.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;