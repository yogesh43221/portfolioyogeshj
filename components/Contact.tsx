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
    <section id="contact" className="py-16 sm:py-20 lg:py-24 w-full bg-white dark:bg-midnight-950 relative overflow-hidden transition-colors duration-150 scroll-mt-24 sm:scroll-mt-28">
      <div className="absolute right-0 top-0 w-1/3 h-full bg-horizon-sky/5 blur-[120px] pointer-events-none"></div>

      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-14 xl:gap-20">
          <div className="lg:w-2/5 space-y-6 sm:space-y-8">
            <div className="space-y-3 sm:space-y-4">
                <span className="text-horizon-sky font-mono text-sm font-bold tracking-wider uppercase mb-2 block">
                  Get In Touch
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white font-sans tracking-tight leading-tight">
                  Let's <span className="text-horizon-sky">Connect.</span>
                </h2>
                <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-sans font-medium">
                  Available for engineering roles across QA Automation, Backend, and AI/ML systems. Let's build something reliable.
                </p>
            </div>

            <div className="space-y-6">
              <div className="p-6 sm:p-8 bg-white dark:bg-midnight-900 rounded-2xl border border-slate-200 dark:border-midnight-700 shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-sky-50 dark:bg-sky-950/50 text-horizon-sky border border-sky-200/60 dark:border-sky-800/50">
                        <MessageSquare className="h-4 w-4" />
                      </div>
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-horizon-sky">Direct Messaging</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-sans mb-2">Connect on LinkedIn</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed font-sans">Fastest response via LinkedIn direct messaging. Let's discuss engineering value.</p>
                  <LinkedInButton />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-5 bg-white dark:bg-midnight-900 rounded-2xl border border-slate-200 dark:border-midnight-700 shadow-sm">
                      <Mail className="h-5 w-5 text-horizon-sky mb-3" />
                      <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">Direct Mail</h4>
                      <p className="text-xs sm:text-sm text-slate-900 dark:text-white font-mono font-semibold truncate">{PROFILE.email}</p>
                  </div>
                  <div className="p-5 bg-white dark:bg-midnight-900 rounded-2xl border border-slate-200 dark:border-midnight-700 shadow-sm">
                      <MapPin className="h-5 w-5 text-horizon-sky mb-3" />
                      <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">Location</h4>
                      <p className="text-xs sm:text-sm text-slate-900 dark:text-white font-mono font-semibold">{PROFILE.location}</p>
                  </div>
              </div>
            </div>
          </div>

          <div className="lg:w-3/5">
            <div className="bg-white dark:bg-midnight-900 p-6 sm:p-8 lg:p-10 rounded-2xl border border-slate-200 dark:border-midnight-700 shadow-sm relative overflow-hidden">
              {showSuccess && (
                <div className="absolute inset-0 z-20 bg-emerald-600 flex flex-col items-center justify-center text-white animate-fadeIn p-12 text-center">
                  <CheckCircle className="w-16 h-16 mb-4" />
                  <h3 className="text-2xl font-bold">Message Transmitted</h3>
                  <p className="mt-2 text-base text-emerald-50 font-medium">Handshake complete. I'll get back to you shortly.</p>
                  <button 
                    onClick={() => setShowSuccess(false)} 
                    className="mt-8 px-6 py-3 bg-white text-emerald-700 rounded-xl text-xs font-mono font-bold uppercase tracking-wider hover:bg-emerald-50 transition-all shadow-md"
                  >
                    Send another
                  </button>
                </div>
              )}

              {showError && (
                <div className="absolute top-6 left-6 right-6 z-30 p-4 bg-red-600 text-white rounded-xl flex items-center justify-between shadow-lg animate-fadeIn border border-white/20">
                  <div className="flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <span className="text-xs font-bold leading-tight uppercase tracking-wide">{errorMessage}</span>
                  </div>
                  <button onClick={() => setShowError(false)} className="hover:bg-white/10 p-1.5 rounded-lg transition-colors flex-shrink-0">
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                        Full Name
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
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                        Email Address
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

                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                      Subject
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

                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                      Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="input-field resize-none"
                    placeholder="Provide details about your project or mission..."
                  ></textarea>
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full flex items-center justify-center py-3.5 mt-4"
                >
                    {isSubmitting ? (
                      <div className="flex items-center gap-3">
                        <Loader2 className="h-5 w-5 animate-spin" />
                        <span className="tracking-wider uppercase text-xs font-mono font-bold">Transmitting Data...</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-3">
                        <span className="tracking-wider uppercase text-xs font-mono font-bold">Execute Secure Request</span>
                        <Send className="h-4 w-4" />
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