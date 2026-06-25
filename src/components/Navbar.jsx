import React from 'react';

function Navbar({ isDark, setIsDark, accentColor, setAccentColor, lang, setLang, textSize, setTextSize, currentTheme }) {
  return (
    <nav className={`w-full border-b py-4 px-6 sticky top-0 z-50 transition-all duration-300 ${
      isDark 
        ? 'bg-[#0A0E17]/80 backdrop-blur-xl border-slate-800 text-white' 
        : 'bg-slate-50/80 backdrop-blur-xl border-slate-200 text-slate-900'
    }`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Brand Logo */}
        <div className="flex items-center space-x-2.5 cursor-pointer">
          <span className={`font-black tracking-tighter text-xl ${isDark ? 'text-white' : 'text-slate-950'}`}>
            TEYZIX
          </span>
          <span className={`text-[9px] font-black tracking-widest px-2 py-0.5 rounded-md shadow-sm ${currentTheme?.bg || 'bg-emerald-500'} text-black`}>
            CORE
          </span>
        </div>

        {/* Navigation Links */}
        <div className={`flex items-center space-x-8 text-[11px] font-bold tracking-widest uppercase ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          {['Overview', 'Features', 'Pricing', 'Onboarding', 'Contact'].map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`} 
              className={`transition-colors duration-200 hover:${currentTheme?.text || 'text-emerald-500'}`}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Controls Grid */}
        <div className="flex flex-wrap items-center gap-2">
          
          {/* Accent Color Selection */}
          <div className={`flex p-1 rounded-xl border ${isDark ? 'bg-slate-950/50 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
            {['emerald', 'blue', 'violet'].map((color) => (
              <button 
                key={color} 
                onClick={() => setAccentColor(color)}
                className={`text-[10px] uppercase font-black px-3 py-1 rounded-lg cursor-pointer transition-all ${
                  accentColor === color 
                    ? (currentTheme?.bg || 'bg-emerald-500') + ' text-black shadow-md' 
                    : isDark ? 'text-slate-500' : 'text-slate-400'
                }`}
              >
                {color[0]}
              </button>
            ))}
          </div>

          {/* Language Switcher */}
          <select 
            value={lang} 
            onChange={(e) => setLang(e.target.value)} 
            className={`border text-[10px] font-bold p-1.5 px-2 rounded-xl cursor-pointer outline-none ${
              isDark ? 'bg-slate-950/50 border-slate-800 text-slate-200' : 'bg-white border-slate-200 text-slate-800 shadow-sm'
            }`}
          >
            <option value="EN">EN</option>
            <option value="ES">ES</option>
          </select>

          {/* Dark/Light Toggle */}
          <button 
            onClick={() => setIsDark(!isDark)}
            className={`text-[10px] font-bold border px-4 py-1.5 rounded-xl cursor-pointer transition-all shadow-sm ${
              isDark 
                ? 'bg-slate-900 border-slate-700 text-white hover:border-slate-600' 
                : 'bg-white border-slate-200 text-slate-900 hover:bg-slate-50'
            }`}
          >
            {isDark ? '☀️ LIGHT' : '🌙 DARK'}
          </button>
          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;