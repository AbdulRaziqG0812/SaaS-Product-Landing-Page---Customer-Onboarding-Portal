import React from 'react';

function DashboardPreview({ isDark, currentTheme, lang }) {
  // Multilingual content dictionary
  const t = {
    EN: {
      title: ["Live Platform", "Dashboard Preview"],
      subtitle: "Explore the frontend execution runtime analytics engine built to evaluate production metrics scaling.",
      profile: { name: "Abdul Raziq", role: "Frontend Developer", security: "Verified Layer-1", tier: "Pro Automation Cluster", status: "Active" },
      metrics: [
        { title: "Active Conversion Nodes", value: "1,429", change: "+12.4%" },
        { title: "Average Render Latency", value: "0.04ms", change: "-8.1%" },
        { title: "Onboarding Flow Rate", value: "94.2%", change: "+3.2%" }
      ],
      logs: { header: "Recent Workspace Execution Logs", live: "REAL-TIME" },
      activities: [
        { event: "Instance Node Instantiated", target: "Workspace core_prod_01", time: "2 mins ago" },
        { event: "Flow State Optimization Triggered", target: "Landing page variant_B", time: "14 mins ago" },
        { event: "Traffic Spike Balancing Engaged", target: "API route /v1/onboard", time: "1 hour ago" }
      ]
    },
    ES: {
      title: ["Plataforma en Vivo", "Vista Previa del Panel"],
      subtitle: "Explore el motor de análisis de ejecución frontend diseñado para evaluar el escalado de métricas de producción.",
      profile: { name: "Abdul Raziq", role: "Desarrollador Frontend", security: "Capa-1 Verificada", tier: "Cluster Pro Automation", status: "Activo" },
      metrics: [
        { title: "Nodos de Conversión Activos", value: "1,429", change: "+12.4%" },
        { title: "Latencia Promedio de Render", value: "0.04ms", change: "-8.1%" },
        { title: "Tasa de Flujo de Onboarding", value: "94.2%", change: "+3.2%" }
      ],
      logs: { header: "Registros de Ejecución Recientes", live: "TIEMPO REAL" },
      activities: [
        { event: "Nodo de Instancia Creado", target: "Workspace core_prod_01", time: "hace 2 min" },
        { event: "Optimización de Flujo Activada", target: "Landing page variant_B", time: "hace 14 min" },
        { event: "Balanceo de Pico de Tráfico", target: "Ruta API /v1/onboard", time: "hace 1 hora" }
      ]
    }
  }[lang] || { /* Default to EN */ ...{...content.EN} };

  const content = (lang === 'ES') ? { ...t } : { ...t }; // Using t directly for cleaner access

  return (
    <section id="dashboard" className={`py-24 px-6 border-t transition-colors duration-300 ${isDark ? 'bg-[#0A0E17] text-white border-slate-900/50' : 'bg-white text-slate-900 border-slate-200'}`}>
      <div className="max-w-6xl mx-auto space-y-12">
        
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight">
            {t.title[0]} <span className={`text-transparent bg-clip-text bg-gradient-to-r ${currentTheme.fromTo}`}>{t.title[1]}</span>
          </h2>
          <p className={`text-xs max-w-md mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className={`border p-6 rounded-2xl h-fit space-y-6 transition-colors duration-300 ${isDark ? 'bg-[#0D1321]/40 border-slate-800' : 'bg-slate-50 border-slate-200 shadow-sm'}`}>
            <div className="flex items-center space-x-4">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center font-black text-black text-sm shadow-md ${currentTheme.bg}`}>AR</div>
              <div>
                <h4 className="text-sm font-black tracking-wide">{t.profile.name}</h4>
                <p className={`text-[10px] font-mono font-bold uppercase tracking-wider ${currentTheme.text}`}>{t.profile.role}</p>
              </div>
            </div>

            <div className={`border-t pt-4 space-y-3 text-[11px] ${isDark ? 'border-slate-800/60' : 'border-slate-200'}`}>
              <div className="flex justify-between">
                <span className="text-slate-500">Security Clearance:</span>
                <span className={`font-mono font-bold ${isDark ? 'text-slate-300' : 'text-slate-800'}`}>{t.profile.security}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Current Node Tier:</span>
                <span className={`font-bold ${currentTheme.text}`}>{t.profile.tier}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Workspace Status:</span>
                <span className="font-bold flex items-center gap-1 text-teal-400">
                  <span className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-ping"></span> {t.profile.status}
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {t.metrics.map((m, idx) => (
                <div key={idx} className={`border p-5 rounded-xl space-y-2 relative overflow-hidden transition-all duration-300 hover:scale-[1.02] ${isDark ? 'bg-[#0D1321]/30 border-slate-800/60' : 'bg-slate-50 border-slate-200 shadow-sm'}`}>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-slate-500">{m.title}</p>
                  <div className="flex items-baseline justify-between">
                    <span className="text-xl md:text-2xl font-black tracking-tight">{m.value}</span>
                    <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-opacity-10 ${currentTheme.bg} ${currentTheme.text}`}>
                      {m.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className={`border p-6 rounded-2xl space-y-4 ${isDark ? 'bg-[#0D1321]/40 border-slate-800' : 'bg-slate-50 border-slate-200 shadow-sm'}`}>
              <div className="flex justify-between items-center border-b border-slate-800/20 pb-3">
                <h4 className="text-xs uppercase font-black text-slate-400 tracking-wider">{t.logs.header}</h4>
                <span className="text-[9px] bg-slate-500/10 text-slate-400 border border-slate-500/20 px-2 py-0.5 rounded font-mono">{t.logs.live}</span>
              </div>

              <div className="space-y-3.5">
                {t.activities.map((act, idx) => (
                  <div key={idx} className="flex items-start justify-between text-xs transition-all duration-200 hover:translate-x-1">
                    <div className="space-y-1">
                      <p className="font-bold tracking-wide">{act.event}</p>
                      <p className="text-[10px] text-slate-500 font-mono">› target_node: {act.target}</p>
                    </div>
                    <div className="text-right space-y-1 shrink-0">
                      <p className="text-[10px] text-slate-500 font-mono">{act.time}</p>
                      <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]"></span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DashboardPreview;