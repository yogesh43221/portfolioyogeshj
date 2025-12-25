
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

    // Fix: Cast import.meta to any to avoid "Property 'env' does not exist on type 'ImportMeta'" errors
    // and rely on process.env fallbacks defined in vite.config.ts
    const serviceId = (import.meta as any).env?.VITE_EMAILJS_SERVICE_ID || process.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = (import.meta as any).env?.VITE_EMAILJS_TEMPLATE_ID || process.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = (import.meta as any).env?.VITE_EMAILJS_PUBLIC_KEY || process.env.VITE_EMAILJS_PUBLIC_KEY;

    // Helpful console log for the developer to see if the environment is configured correctly
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
        // Auto-hide success after 8 seconds
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
        <div className="flex flex-col lg:flex-row gap-24">
          <div className="lg:w-2/5 space-y-12">
            <div className="space-y-6">
                <span className="accent-mono">./init_connection</span>
                <h2 className="leading-[0.9]">Let's <br /><span className="text-horizon-sky">Collab.</span></h2>
                <p className="text-xl text-slate-600 dark:text-slate-400 font-medium">
                  Available for technical roles in Backend, Data, and QA systems. Let's build something reliable.
                </p>
            </div>

            <div className="space-y-8">
              <div className="p-8 glass-card border-horizon-sky/20 hover:scale-[1.01]">
                  <div className="flex items-center gap-3 mb-6">
                      <MessageSquare className="h-5 w-5 text-horizon-sky" />
                      <span className="accent-mono !text-[10px]">Real-time Interface</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Immediate Pipeline</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">Fastest response via LinkedIn direct messaging. Let's discuss engineering value.</p>
                  <LinkedInButton />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="p-6 glass-card group">
                      <Mail className="h-5 w-5 text-horizon-sky mb-4" />
                      <h4 className="font-bold text-sm mb-1">Direct Mail</h4>
                      <p className="text-[11px] text-slate-500 truncate font-mono">{PROFILE.email}</p>
                  </div>
                  <div className="p-6 glass-card group">
                      <MapPin className="h-5 w-5 text-horizon-sky mb-4" />
                      <h4 className="font-bold text-sm mb-1">Base Ops</h4>
                      <p className="text-[11px] text-slate-500 font-mono">{PROFILE.location}</p>
                  </div>
              </div>
            </div>
          </div>

          <div className="lg:w-3/5">
            <div className="glass-card p-10 md:p-14 shadow-2xl relative overflow-hidden !rounded-[2.5rem]">
              {showSuccess && (
                <div className="absolute inset-0 z-20 bg-emerald-600 flex flex-col items-center justify-center text-white animate-fadeIn">
                  <CheckCircle className="w-16 h-16 mb-4" />
                  <h3 className="text-2xl font-bold">Message Transmitted</h3>
                  <p className="mt-2 text-emerald-50">Handshake complete. I'll get back to you shortly.</p>
                  <button 
                    onClick={() => setShowSuccess(false)} 
                    className="mt-8 px-6 py-2 border border-white/30 rounded-full text-xs font-mono hover:bg-white/10 transition-colors uppercase tracking-widest"
                  >
                    Send another
                  </button>
                </div>
              )}

              {showError && (
                <div className="absolute top-6 left-6 right-6 z-30 p-4 bg-red-500 text-white rounded-xl flex items-center justify-between shadow-lg animate-fadeIn">
                  <div className="flex items-center gap-3">
                    <AlertCircle className="w-5 h-5" />
                    <span className="text-[10px] md:text-xs font-medium leading-tight">{errorMessage}</span>
                  </div>
                  <button onClick={() => setShowError(false)} className="hover:bg-white/10 p-1 rounded-md transition-colors flex-shrink-0 ml-4">
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-2">
                    <label className="accent-mono !text-[9px]">01 // Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="input-field"
                      placeholder="Ident Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="accent-mono !text-[9px]">02 // Return Path</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="input-field"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="accent-mono !text-[9px]">03 // Project ID</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="input-field"
                    placeholder="Subject Header"
                  />
                </div>

                <div className="space-y-2">
                  <label className="accent-mono !text-[9px]">04 // Payload</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="input-field resize-none"
                    placeholder="Describe mission details..."
                  ></textarea>
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full !rounded-2xl flex items-center justify-center"
                >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <Loader2 className="h-5 w-5 animate-spin" />
                        <span>Transmitting...</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <span>Execute Request</span>
                        <Send className="h-5 w-5" />
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
