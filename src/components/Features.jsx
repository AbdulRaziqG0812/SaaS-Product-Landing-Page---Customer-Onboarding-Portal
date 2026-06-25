import React from 'react';

function Features({ isDark, currentTheme, lang }) {
  const content = {
    EN: {
      titlePre: "Engineered For",
      titlePost: "Optimal Scaling",
      subtitle: "Explore architectural properties designed explicitly for complex product automation.",
      points: [
        { title: "Component Isolation", desc: "Maintains absolute state isolation parameters automatically across rendering processes." },
        { title: "Dynamic Themes", desc: "Changes base global styling systems dynamically on production environments without performance loss." },
        { title: "Fluid Scalability", desc: "Handles high data workload arrays efficiently with sub-millisecond response matrices." }
      ]
    },
    ES: {
      titlePre: "Diseñado para un",
      titlePost: "Escalamiento Óptimo",
      subtitle: "Explore las propiedades arquitectónicas diseñadas explícitamente para la automatización de productos complejos.",
      points: [
        { title: "Aislamiento de Componentes", desc: "Mantiene parámetros de aislamiento de estado absoluto automáticamente a través de los procesos de renderizado." },
        { title: "Temas Dinámicos", desc: "Cambia los sistemas de estilo global base de forma dinámica en entornos de producción sin pérdida de rendimiento." },
        { title: "Escalabilidad Fluida", desc: "Maneja matrices de alta carga de trabajo de datos de manera eficiente con matrices de respuesta de sub-milisegundos." }
      ]
    }
  };

  const t = content[lang] || content['EN'];

  return (
    <section id="features" className={`py-28 px-6 transition-all duration-300 ${
      isDark ? 'bg-[#0A0E17] text-white' : 'bg-slate-50 text-slate-900'
    }`}>
      
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Header Section */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
            {t.titlePre} <span className={`text-transparent bg-clip-text bg-gradient-to-r ${currentTheme.fromTo}`}>{t.titlePost}</span>
          </h2>
          <p className={`text-xs md:text-sm font-medium max-w-xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            {t.subtitle}
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.points.map((p, i) => (
            <div 
              key={i} 
              className={`p-8 border rounded-3xl space-y-5 transition-all duration-300 group hover:-translate-y-1 ${
                isDark 
                  ? 'bg-[#0D1321] border-slate-800 shadow-2xl shadow-black/20' 
                  : 'bg-white border-slate-200 shadow-xl shadow-slate-200/60'
              }`}
            >
              {/* Badge */}
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-mono font-black text-xs shadow-md ${currentTheme.bg} text-black`}>
                0{i + 1}
              </div>
              
              {/* Content */}
              <div className="space-y-2">
                <h3 className="text-sm md:text-base font-bold tracking-tight">
                  {p.title}
                </h3>
                <p className={`text-xs md:text-[13px] leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Features;