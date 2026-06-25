import React, { useState } from 'react';

function Contact({ isDark, currentTheme, lang }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ email: '', message: '' });

  const t = {
    EN: {
      title: "Connect With", highlight: "Core Support", desc: "Dispatch queries directly into our monitoring systems.",
      placeholder: "operator@enterprise.com", label: "Message Payload", btn: "Dispatch Message", success: "Transmission Sent!"
    },
    ES: {
      title: "Conecta con", highlight: "Soporte Central", desc: "Envía consultas a nuestros sistemas de monitoreo.",
      placeholder: "operador@empresa.com", label: "Cuerpo del Mensaje", btn: "Enviar Mensaje", success: "¡Transmisión Enviada!"
    }
  }[lang] || {
    title: "Connect With", highlight: "Core Support", desc: "Dispatch queries directly into our monitoring systems.",
    placeholder: "operator@enterprise.com", label: "Message Payload", btn: "Dispatch Message", success: "Transmission Sent!"
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email.trim() || !formData.message.trim()) return;
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1500);
  };

  return (
    <section id="contact" className={`py-24 px-6 border-t transition-colors duration-300 ${isDark ? 'bg-[#0A0E17]' : 'bg-slate-50'}`}>
      <div className="max-w-md mx-auto space-y-8">
        
        <div className="text-center space-y-2">
          <h2 className={`text-2xl md:text-4xl font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
            {t.title} <span className={currentTheme?.text || 'text-emerald-400'}>{t.highlight}</span>
          </h2>
          <p className="text-xs text-slate-500">{t.desc}</p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Work Email</label>
              <input 
                type="email" required value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder={t.placeholder}
                className={`w-full border p-3.5 rounded-xl text-xs outline-none transition-all ${
                  isDark 
                    ? 'bg-[#060911] border-slate-800 text-white placeholder-slate-600' 
                    : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-slate-400'
                }`}
              />
            </div>
            
            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{t.label}</label>
              <textarea 
                rows="4" required value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className={`w-full border p-3.5 rounded-xl text-xs outline-none transition-all resize-none ${
                  isDark 
                    ? 'bg-[#060911] border-slate-800 text-white' 
                    : 'bg-white border-slate-300 text-slate-900 focus:border-slate-400'
                }`}
              />
            </div>

            <button 
              type="submit" disabled={loading}
              className={`w-full text-black font-black text-xs py-3.5 rounded-xl cursor-pointer hover:opacity-90 transition-all active:scale-[0.98] ${currentTheme?.bg || 'bg-emerald-500'}`}
            >
              {loading ? "Dispatching..." : `${t.btn} →`}
            </button>
          </form>
        ) : (
          <div className={`text-center p-8 border rounded-2xl ${isDark ? 'bg-[#0D1321] border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
            <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${currentTheme?.bg} text-black font-bold`}>✓</div>
            <h3 className={`font-black text-lg ${isDark ? 'text-white' : 'text-slate-900'}`}>{t.success}</h3>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-2">Our team will dispatch a response within 04 hours.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Contact;