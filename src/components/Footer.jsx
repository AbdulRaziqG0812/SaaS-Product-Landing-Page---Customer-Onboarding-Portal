import React from 'react';

function Footer({ isDark = true, currentTheme }) {
  const footerLinks = [
    { label: "Overview", href: "#" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Security", href: "#contact" }
  ];

  return (
    <footer className={`py-12 px-6 border-t transition-colors duration-500 ${isDark ? 'bg-[#060911] border-slate-900' : 'bg-slate-50 border-slate-200'}`}>
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-1">
            <h3 className={`text-sm font-black tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>TEYZIX CORE</h3>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Engineering Next-Gen Systems</p>
          </div>
          
          <nav className="flex items-center gap-6">
            {footerLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href}
                className={`text-[11px] font-bold transition-colors uppercase tracking-wider ${isDark ? 'text-slate-500 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom Section */}
        <div className={`pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4 ${isDark ? 'border-slate-900' : 'border-slate-200'}`}>
          <p className="text-[10px] text-slate-500 font-medium">
            © 2026 TEYZIX CORE. All rights reserved.
          </p>
          
          <div className="flex items-center gap-3">
            <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${currentTheme?.bg || 'bg-emerald-500'}`}></span>
            <span className={`text-[9px] font-black tracking-[0.2em] uppercase ${currentTheme?.text || 'text-emerald-500'}`}>
              Core of Innovation
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;