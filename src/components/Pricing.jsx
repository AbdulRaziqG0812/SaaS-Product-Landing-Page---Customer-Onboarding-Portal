import React, { useState } from 'react';

function Pricing({ isDark, currentTheme, lang }) {
  const [userLimit, setUserLimit] = useState(10);

  const content = {
    EN: {
      badge: "Bonus Component",
      titlePre: "Flexible",
      titlePost: "Pricing Plans",
      calcLabel: "Interactive Seat Calculator:",
      users: "Users",
      btnText: "Choose",
      popular: "Most Popular",
      perMonth: "/month",
      plans: [
        { name: "Starter", basePrice: 19, desc: "Perfect for early-stage startups trying to optimize core setups.", features: ["3 Projects Allowed", "Basic Core UI Pack", "Community Support", "7-Day Analytics"] },
        { name: "Pro", basePrice: 49, desc: "Built for scaling products looking for advanced performance.", features: ["Unlimited Projects", "Premium UI Elements", "Priority 24/7 Support", "Real-time Metrics Dashboard"] },
        { name: "Enterprise", basePrice: 99, desc: "Designed for larger operations requiring enterprise automation.", features: ["Custom Automated Flows", "Dedicated Account Manager", "SLA Guarantee", "Advanced Access Control"] }
      ]
    },
    ES: {
      badge: "Componente Extra",
      titlePre: "Planes de Precios",
      titlePost: "Flexibles",
      calcLabel: "Calculadora Interactiva de Usuarios:",
      users: "Usuarios",
      btnText: "Elegir",
      popular: "Más Popular",
      perMonth: "/mes",
      plans: [
        { name: "Inicial", basePrice: 19, desc: "Perfecto para startups en etapa temprana que intentan optimizar configuraciones.", features: ["3 Proyectos Permitidos", "Pack UI Básico", "Soporte Comunitario", "Analítica de 7 días"] },
        { name: "Pro", basePrice: 49, desc: "Construido para productos en escala que buscan rendimiento avanzado.", features: ["Proyectos Ilimitados", "Elementos UI Premium", "Soporte Prioritario 24/7", "Tablero de Métricas en Tiempo Real"] },
        { name: "Empresa", basePrice: 99, desc: "Diseñado para operaciones grandes que requieren automatización empresarial.", features: ["Flujos Automatizados Personalizados", "Gestor de Cuenta Dedicado", "Garantía SLA", "Control de Acceso Avanzado"] }
      ]
    }
  };

  const t = content[lang] || content['EN'];
  const getCalculatedPrice = (base) => Math.round(base * (userLimit / 10));

  return (
    <section id="pricing" className={`py-28 px-6 transition-all duration-300 ${isDark ? 'bg-[#0A0E17] text-white' : 'bg-slate-50 text-slate-900'}`}>
      <div className="max-w-7xl mx-auto space-y-20">
        
        <div className="text-center space-y-4">
          <span className={`inline-block text-[10px] border px-3 py-1 rounded-full font-black tracking-widest uppercase ${isDark ? 'bg-emerald-500/10 border-emerald-500/20' : 'bg-white border-slate-200'}`}>
            {t.badge}
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
            {t.titlePre} <span className={`text-transparent bg-clip-text bg-gradient-to-r ${currentTheme.fromTo}`}>{t.titlePost}</span>
          </h2>
        </div>

        <div className={`max-w-md mx-auto p-8 rounded-3xl text-center space-y-4 border ${isDark ? 'bg-[#0D1321] border-slate-800' : 'bg-white border-slate-200 shadow-xl shadow-slate-200/60'}`}>
          <label className="text-[10px] font-black text-slate-400 block uppercase tracking-widest">
            {t.calcLabel} <span className={`font-mono text-sm ml-2 ${currentTheme.text}`}>{userLimit} {t.users}</span>
          </label>
          <input 
            type="range" min="10" max="100" step="10" value={userLimit} 
            onChange={(e) => setUserLimit(Number(e.target.value))}
            className="w-full cursor-pointer h-2 rounded-lg appearance-none bg-slate-200"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.plans.map((plan, i) => {
            const isPopular = i === 1;
            return (
              <div key={i} className={`relative p-8 md:p-10 rounded-3xl border flex flex-col justify-between transition-all duration-300 ${
                isPopular 
                  ? `border-2 ${currentTheme.border} ${isDark ? 'bg-[#0D1321]' : 'bg-white shadow-2xl shadow-slate-200/60'}` 
                  : `${isDark ? 'bg-[#0D1321]/50 border-slate-800' : 'bg-white border-slate-200 shadow-xl shadow-slate-200/40'}`
              }`}>
                {isPopular && (
                  <span className={`absolute -top-3 left-1/2 -translate-x-1/2 text-black font-black text-[9px] uppercase px-4 py-1 rounded-full shadow-sm ${currentTheme.bg}`}>
                    {t.popular}
                  </span>
                )}
                
                <div>
                  <h3 className="text-xl font-black mb-2">{plan.name}</h3>
                  <p className="text-xs text-slate-400 mb-6 leading-relaxed">{plan.desc}</p>
                  <div className="flex items-baseline space-x-1 mb-8">
                    <span className={`text-5xl font-black ${currentTheme.text}`}>${getCalculatedPrice(plan.basePrice)}</span>
                    <span className="text-xs font-bold text-slate-400">{t.perMonth}</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((f, fi) => (
                      <li key={fi} className="flex items-center space-x-3 text-xs font-semibold">
                        <span className={currentTheme.text}>✓</span>
                        <span className={isDark ? 'text-slate-300' : 'text-slate-600'}>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className={`w-full py-4 rounded-xl font-black text-[11px] uppercase tracking-widest cursor-pointer hover:opacity-90 transition-all active:scale-[0.98] ${
                  isPopular 
                    ? `text-black shadow-lg ${currentTheme.bg}` 
                    : isDark ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-900'
                }`}>
                  {t.btnText} {plan.name}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Pricing;