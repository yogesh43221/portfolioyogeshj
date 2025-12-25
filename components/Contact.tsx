import React, { useState } from 'react';
import { Send, Mail, MapPin, CheckCircle, X, MessageSquare, Loader2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { PROFILE } from '../constants';
import LinkedInButton from './LinkedInButton';

// Declare process for environment variable access fallback (mapped in vite.config.ts)
declare const process: any;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    const serviceId = (import.meta as any).env?.VITE_EMAILJS_SERVICE_ID || process.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = (import.meta as any).env?.VITE_EMAILJS_TEMPLATE_ID || process.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = (import.meta as any).env?.VITE_EMAILJS_PUBLIC_KEY || process.env.VITE_EMAILJS_PUBLIC_KEY;

    console.group("EmailJS Configuration Status");
    console.log("Service ID:", serviceId ? "✅ Loaded" : "❌ MISSING");
    console.log("Template ID:", templateId ? "✅ Loaded" : "❌ MISSING");
    console.log("Public Key:", publicKey ? "✅ Loaded" : "❌ MISSING");
    console.groupEnd();

    if (!serviceId || !templateId || !publicKey) {
      setErrorMessage("Environment variables not detected. Please check your .env file or Vercel settings.");
      setShowError(true);
      return;
    }

    setIsSubmitting(true);
    setShowError(false);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        reply_to: formData.email,
      };

      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      if (response.status === 200) {
        setShowSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setShowSuccess(false), 8000);
      } else {
        throw new Error(`EmailJS Error Status: ${response.status}`);
      }
    } catch (error: any) {
      console.error("Transmission failed:", error);
      const errTxt = error?.text || error?.message || "Check your EmailJS Public Key or Daily Limits.";
      setErrorMessage(`Transmission Failed: ${errTxt}`);
      setShowError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 w-full bg-horizon-light dark:bg-midnight-950 relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/3 h-full bg-horizon-sky/5 blur-[120px] pointer-events-none"></div>

      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 xl:gap-24">
          <div className="lg:w-2/5 space-y-12">
            <div className="space-y-6">
                <span className="accent-mono text-sm tracking-[0.2em]">./init_connection</span>
                <h2 className="leading-[0.9] text-5xl md:text-6xl font-black">Let's <br /><span className="text-horizon-sky">Collab.</span></h2>
                <p className="text-xl text-slate-700 dark:text-slate-300 font-bold leading-relaxed">
                  Available for technical roles in Backend, Data, and QA systems. Let's build something reliable.
                </p>
            </div>

            <div className="space-y-8">
              <div className="p-8 glass-card border-horizon-sky/20 hover:scale-[1.01] shadow-xl">
                  <div className="flex items-center gap-3 mb-6">
                      <MessageSquare className="h-5 w-5 text-horizon-sky" />
                      <span className="accent-mono text-sm">Real-time Interface</span>
                  </div>
                  <h3 className="text-2xl font-black mb-3">Immediate Pipeline</h3>
                  <p className="text-base text-slate-700 dark:text-slate-300 mb-8 leading-relaxed font-semibold">Fastest response via LinkedIn direct messaging. Let's discuss engineering value.</p>
                  <LinkedInButton />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="p-6 glass-card group shadow-xl border-slate-200 dark:border-midnight-700/50">
                      <Mail className="h-6 w-6 text-horizon-sky mb-4" />
                      <h4 className="font-black text-sm mb-2 uppercase tracking-tight">Direct Mail</h4>
                      <p className="text-[12px] text-slate-900 dark:text-white truncate font-mono font-bold">{PROFILE.email}</p>
                  </div>
                  <div className="p-6 glass-card group shadow-xl border-slate-200 dark:border-midnight-700/50">
                      <MapPin className="h-6 w-6 text-horizon-sky mb-4" />
                      <h4 className="font-black text-sm mb-2 uppercase tracking-tight">Base Ops</h4>
                      <p className="text-[12px] text-slate-900 dark:text-white font-mono font-bold">{PROFILE.location}</p>
                  </div>
              </div>
            </div>
          </div>

          <div className="lg:w-3/5">
            <div className="glass-card p-10 md:p-14 shadow-2xl relative overflow-hidden !rounded-[3rem] border-slate-300 dark:border-midnight-600/50">
              {showSuccess && (
                <div className="absolute inset-0 z-20 bg-emerald-600 flex flex-col items-center justify-center text-white animate-fadeIn p-12 text-center">
                  <CheckCircle className="w-20 h-20 mb-6" />
                  <h3 className="text-3xl font-black">Message Transmitted</h3>
                  <p className="mt-4 text-xl text-emerald-50 font-medium">Handshake complete. I'll get back to you shortly.</p>
                  <button 
                    onClick={() => setShowSuccess(false)} 
                    className="mt-10 px-10 py-4 bg-white text-emerald-700 rounded-2xl text-sm font-black uppercase tracking-widest hover:bg-emerald-50 transition-all shadow-xl"
                  >
                    Send another
                  </button>
                </div>
              )}

              {showError && (
                <div className="absolute top-8 left-8 right-8 z-30 p-6 bg-red-600 text-white rounded-2xl flex items-center justify-between shadow-2xl animate-fadeIn border border-white/20">
                  <div className="flex items-center gap-4">
                    <AlertCircle className="w-6 h-6" />
                    <span className="text-sm font-black leading-tight uppercase tracking-wide">{errorMessage}</span>
                  </div>
                  <button onClick={() => setShowError(false)} className="hover:bg-white/10 p-2 rounded-xl transition-colors flex-shrink-0">
                    <X className="w-5 h-5" />
                  </button>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <label className="accent-mono text-sm flex items-center gap-3 font-black text-slate-900 dark:text-white">
                        <span className="w-2 h-2 bg-horizon-sky rounded-full"></span>
                        01 // Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="input-field"
                      placeholder="e.g. Jane Doe"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="accent-mono text-sm flex items-center gap-3 font-black text-slate-900 dark:text-white">
                        <span className="w-2 h-2 bg-horizon-sky rounded-full"></span>
                        02 // Return Path
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="input-field"
                      placeholder="e.g. name@company.com"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="accent-mono text-sm flex items-center gap-3 font-black text-slate-900 dark:text-white">
                      <span className="w-2 h-2 bg-horizon-sky rounded-full"></span>
                      03 // Project ID / Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="input-field"
                    placeholder="Brief summary of your inquiry"
                  />
                </div>

                <div className="space-y-4">
                  <label className="accent-mono text-sm flex items-center gap-3 font-black text-slate-900 dark:text-white">
                      <span className="w-2 h-2 bg-horizon-sky rounded-full"></span>
                      04 // Payload / Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="input-field resize-none"
                    placeholder="Provide details about your project or mission..."
                  ></textarea>
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full !rounded-[1.5rem] flex items-center justify-center py-6 mt-6 shadow-2xl hover:shadow-horizon-sky/20"
                >
                    {isSubmitting ? (
                      <div className="flex items-center gap-4">
                        <Loader2 className="h-6 w-6 animate-spin" />
                        <span className="tracking-[0.2em] uppercase text-sm">Transmitting Data...</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-4">
                        <span className="tracking-[0.2em] uppercase text-sm">Execute Secure Request</span>
                        <Send className="h-6 w-6" />
                      </div>
                    )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;