import React, { useState } from 'react';

function FAQ({ isDark, currentTheme, lang }) {
  const [openIndex, setOpenIndex] = useState(null);

  const content = {
    EN: {
      title: "Frequently Asked Questions",
      highlight: "Questions",
      faqs: [
        { q: "How does Teyzix Core optimize onboarding metrics?", a: "It implements dynamic structural lifecycle tracking parameters that safely remove render lag triggers during visitor session processing." },
        { q: "Is the theme state setup safe for data tracking?", a: "Yes, all styling systems map to secure sandbox environments completely decoupled from internal database queries." },
        { q: "Can I integrate custom UI components easily?", a: "Absolutely. Teyzix Core is built on a modular React architecture, allowing you to plug in custom components while maintaining structural integrity." },
        { q: "Does this impact frontend bundle size?", a: "No, the engine utilizes advanced code-splitting techniques to ensure that only essential operational logic is loaded at runtime." }
      ]
    },
    ES: {
      title: "Preguntas Frecuentes",
      highlight: "Preguntas",
      faqs: [
        { q: "¿Cómo optimiza Teyzix Core las métricas de incorporación?", a: "Implementa parámetros de seguimiento del ciclo de vida estructural dinámico que eliminan de forma segura los disparadores de retardo de renderizado durante el procesamiento de la sesión del visitante." },
        { q: "¿Es segura la configuración del estado del tema para el seguimiento de datos?", a: "Sí, todos los sistemas de estilo se asignan a entornos sandbox seguros, completamente desacoplados de las consultas internas de la base de datos." },
        { q: "¿Puedo integrar componentes de interfaz personalizados fácilmente?", a: "Absolutamente. Teyzix Core está construido sobre una arquitectura React modular, lo que le permite conectar componentes personalizados manteniendo la integridad estructural." },
        { q: "¿Afecta esto al tamaño del paquete frontend?", a: "No, el motor utiliza técnicas avanzadas de división de código para garantizar que solo la lógica operativa esencial se cargue en tiempo de ejecución." }
      ]
    }
  };

  const t = content[lang] || content['EN'];

  return (
    <section id="faq" className={`py-28 px-6 transition-all duration-300 ${isDark ? 'bg-[#0A0E17] text-white' : 'bg-slate-50 text-slate-900'}`}>
      <div className="max-w-3xl mx-auto space-y-16">
        
        <h2 className="text-3xl md:text-5xl font-black text-center tracking-tight">
          {t.title.split(' ')[0] + ' ' + t.title.split(' ')[1]} <span className={`text-transparent bg-clip-text bg-gradient-to-r ${currentTheme.fromTo}`}>{t.highlight}</span>
        </h2>
        
        <div className="space-y-4">
          {t.faqs.map((faq, i) => (
            <div 
              key={i} 
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                isDark 
                  ? 'bg-[#0D1321] border-slate-800' 
                  : 'bg-white border-slate-200 shadow-xl shadow-slate-200/50'
              }`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 text-left font-bold text-xs md:text-sm flex justify-between items-center cursor-pointer group"
              >
                <span className="transition-colors duration-200">{faq.q}</span>
                <span className={`text-lg transition-transform duration-300 ${currentTheme.text} ${openIndex === i ? 'rotate-45' : ''}`}>
                  ＋
                </span>
              </button>
              
              {openIndex === i && (
                <div className={`p-6 pt-0 text-[13px] leading-relaxed border-t ${isDark ? 'border-slate-800 text-slate-400' : 'border-slate-100 text-slate-600'}`}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;