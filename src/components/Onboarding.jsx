import React, { useState } from 'react';

function Onboarding({ isDark, currentTheme, lang }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '', workEmail: '', companyName: '', industry: '', teamSize: '1-10'
  });
  const [errors, setErrors] = useState({});

  const t = {
    EN: {
      title: "Account Initialization",
      steps: ["User Info", "Company", "Finalize"],
      labels: { name: "Full Name", email: "Work Email", company: "Company Name", industry: "Industry" },
      btnBack: "Back", btnContinue: "Continue", btnConfirm: "Confirm Deployment 🚀",
      error: "This field is required"
    },
    ES: {
      title: "Inicialización de Cuenta",
      steps: ["Info Usuario", "Empresa", "Finalizar"],
      labels: { name: "Nombre Completo", email: "Correo", company: "Empresa", industry: "Sector" },
      btnBack: "Atrás", btnContinue: "Continuar", btnConfirm: "Confirmar Despliegue 🚀",
      error: "Este campo es obligatorio"
    }
  }[lang] || {};

  const validate = () => {
    let err = {};
    if (currentStep === 1 && (!formData.fullName.trim() || !formData.workEmail.trim())) err.step1 = t.error;
    if (currentStep === 2 && (!formData.companyName.trim() || !formData.industry.trim())) err.step2 = t.error;
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const next = () => { if (validate()) setCurrentStep(p => p + 1); };

  const finalizeDeployment = () => {
    setLoading(true);
    // 2 second process feedback
    setTimeout(() => {
      setLoading(false);
      // Redirect to hero section
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        heroSection.scrollIntoView({ behavior: 'smooth' });
      }
      // Reset form
      setCurrentStep(1);
      setFormData({ fullName: '', workEmail: '', companyName: '', industry: '', teamSize: '1-10' });
    }, 2000);
  };

  return (
    <section id="onboarding" className={`py-20 px-6 ${isDark ? 'bg-[#0A0E17]' : 'bg-slate-50'}`}>
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-black text-center mb-10">{t.title}</h2>
        
        <div className="flex justify-between mb-8">
          {t.steps.map((s, i) => (
            <div key={i} className={`text-[10px] font-bold ${currentStep >= i + 1 ? currentTheme.text : 'text-slate-500'}`}>0{i + 1}. {s}</div>
          ))}
        </div>

        <div className={`p-8 rounded-3xl border ${isDark ? 'bg-[#0D1321] border-slate-800' : 'bg-white border-slate-200 shadow-xl'}`}>
          {currentStep === 1 && (
            <div className="space-y-4">
              <input className={`w-full p-3 rounded-xl border text-xs ${errors.step1 ? 'border-red-500' : 'border-slate-300'}`} placeholder={t.labels.name} value={formData.fullName} onChange={(e) => setFormData({...formData, fullName: e.target.value})} />
              <input className={`w-full p-3 rounded-xl border text-xs ${errors.step1 ? 'border-red-500' : 'border-slate-300'}`} placeholder={t.labels.email} value={formData.workEmail} onChange={(e) => setFormData({...formData, workEmail: e.target.value})} />
              {errors.step1 && <p className="text-[10px] text-red-500 font-bold">{errors.step1}</p>}
            </div>
          )}
          {currentStep === 2 && (
            <div className="space-y-4">
              <input className={`w-full p-3 rounded-xl border text-xs ${errors.step2 ? 'border-red-500' : 'border-slate-300'}`} placeholder={t.labels.company} value={formData.companyName} onChange={(e) => setFormData({...formData, companyName: e.target.value})} />
              <input className={`w-full p-3 rounded-xl border text-xs ${errors.step2 ? 'border-red-500' : 'border-slate-300'}`} placeholder={t.labels.industry} value={formData.industry} onChange={(e) => setFormData({...formData, industry: e.target.value})} />
              {errors.step2 && <p className="text-[10px] text-red-500 font-bold">{errors.step2}</p>}
            </div>
          )}
          {currentStep === 3 && (
            <div className="text-center p-6">
              <p className="text-sm font-bold">{loading ? "Deploying Core Infrastructure..." : "Ready to deploy infrastructure?"}</p>
            </div>
          )}

          <div className="flex justify-between mt-8">
            {currentStep > 1 && <button onClick={() => setCurrentStep(p => p - 1)} className="px-6 py-2 rounded-xl font-bold border text-xs">Back</button>}
            {currentStep < 3 ? 
              <button onClick={next} className={`px-6 py-2 rounded-xl font-bold text-xs text-black ${currentTheme.bg}`}>Continue</button> : 
              <button onClick={finalizeDeployment} disabled={loading} className={`px-8 py-2 rounded-xl font-bold text-xs text-black ${currentTheme.bg}`}>
                {loading ? "Processing..." : t.btnConfirm}
              </button>
            }
          </div>
        </div>
      </div>
    </section>
  );
}

export default Onboarding;