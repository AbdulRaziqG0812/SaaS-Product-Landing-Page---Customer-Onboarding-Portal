import React from 'react';

function Hero({ isDark, currentTheme, t }) {
  return (
    <section className={`py-24 px-6 text-center space-y-8 transition-colors duration-300 ${
      isDark ? 'bg-[#0A0E17]' : 'bg-slate-50'
    }`}>
      <div className="max-w-3xl mx-auto space-y-6">
        
        {/* Dynamic Badge */}
        <span className={`inline-block text-[10px] border px-3 py-1 rounded-full font-black tracking-widest uppercase shadow-sm ${
          isDark 
            ? 'bg-emerald-500/10 border-emerald-500/20 text-white' 
            : 'bg-white border-slate-200 text-slate-900'
        }`}>
          {t?.heroTag || "AUTOMATED CORE PLATFORM"}
        </span>

        {/* Heading */}
        <h1 className={`text-4xl md:text-6xl font-black tracking-tight leading-none ${isDark ? 'text-white' : 'text-slate-950'}`}>
          {t?.heroTitle || "Accelerate Frontend Development Engine"}{' '}
          <span className={`text-transparent bg-clip-text bg-gradient-to-r ${currentTheme?.fromTo || 'from-emerald-400 to-teal-300'}`}>
            Teyzix Core
          </span>
        </h1>

        {/* Description */}
        <p className={`text-sm md:text-base max-w-xl mx-auto leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          {t?.heroDesc || "The modern framework layer designed for speed, layout precision, and dynamic enterprise portal scaling."}
        </p>

        {/* Call To Action Buttons */}
        <div className="pt-4 flex justify-center items-center space-x-4">
          <a href="#onboarding" className={`font-black text-xs px-8 py-3.5 rounded-xl shadow-lg transition-all hover:scale-[1.02] active:scale-95 ${
            currentTheme?.bg || 'bg-emerald-500'
          } text-black`}>
            {t?.startBtn || "Get Started"} &rarr;
          </a>
          <a href="#overview" className={`text-xs font-bold px-6 py-3.5 rounded-xl border transition-all ${
            isDark 
              ? 'border-slate-800 hover:bg-slate-900 text-slate-300' 
              : 'bg-white border-slate-200 hover:bg-slate-100 text-slate-700 shadow-sm'
          }`}>
            Explore Core Architecture
          </a>
        </div>

      </div>
    </section>
  );
}

export default Hero;