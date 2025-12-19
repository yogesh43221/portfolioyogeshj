
import React, { useState } from 'react';
import { Send, Mail, MapPin, CheckCircle, X, Sparkles, MessageSquare, Loader2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { PROFILE } from '../constants';
import LinkedInButton from './LinkedInButton';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({
    email: '',
    form: ''
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const MAX_MESSAGE_CHARS = 1000;

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    // Local Validation
    let hasError = false;
    const newErrors = { email: '', form: '' };

    if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
      hasError = true;
    }

    if (!formData.name.trim() || !formData.message.trim()) {
      newErrors.form = 'All fields are required.';
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setShowError(false);
    setErrors({ email: '', form: '' });

    // Access injected keys
    const serviceId = (import.meta as any).env.VITE_EMAILJS_SERVICE_ID;
    const templateId = (import.meta as any).env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = (import.meta as any).env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS credentials missing.");
      setShowError(true);
      setIsSubmitting(false);
      return;
    }

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: PROFILE.email,
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
        setTimeout(() => setShowSuccess(false), 5000);
      } else {
        throw new Error('Delivery failed');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setShowError(true);
      setTimeout(() => setShowError(false), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === 'message' && value.length > MAX_MESSAGE_CHARS) return;

    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear field-specific error as user types
    if (name === 'email' && errors.email) {
      setErrors(prev => ({ ...prev, email: '' }));
    }
    if (errors.form) {
      setErrors(prev => ({ ...prev, form: '' }));
    }
  };

  return (
    <section id="contact" className="py-32 w-full bg-horizon-light dark:bg-midnight-950 transition-colors duration-500 relative overflow-hidden">
      
      {/* Mesh Glow Background */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-horizon-sky/5 blur-[120px] pointer-events-none"></div>

      {/* Success Notification */}
      {showSuccess && (
        <div className="fixed bottom-6 right-6 z-50 animate-fadeIn">
            <div className="glass-card text-slate-900 dark:text-white px-8 py-5 rounded-2xl shadow-2xl flex items-center gap-4 border-emerald-500/30">
                <CheckCircle className="h-8 w-8 text-emerald-500" />
                <div>
                    <h4 className="font-bold text-base font-sans">Message Sent</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-sans">It's safely landed in my inbox.</p>
                </div>
                <button onClick={() => setShowSuccess(false)} className="ml-4 hover:bg-slate-100 dark:hover:bg-midnight-800 p-2 rounded-full">
                    <X className="h-4 w-4" />
                </button>
            </div>
        </div>
      )}

      {/* Error Notification */}
      {showError && (
        <div className="fixed bottom-6 right-6 z-50 animate-fadeIn">
            <div className="glass-card text-slate-900 dark:text-white px-8 py-5 rounded-2xl shadow-2xl flex items-center gap-4 border-red-500/30">
                <X className="h-8 w-8 text-red-500" />
                <div>
                    <h4 className="font-bold text-base font-sans">Delivery Failed</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-sans">Something went wrong. Please try LinkedIn.</p>
                </div>
                <button onClick={() => setShowError(false)} className="ml-4 hover:bg-slate-100 dark:hover:bg-midnight-800 p-2 rounded-full">
                    <X className="h-4 w-4" />
                </button>
            </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-24">
          
          {/* Left Side: Strategic Info */}
          <div className="lg:w-2/5 space-y-12">
            <div className="space-y-6">
                <span className="text-horizon-sky font-mono text-sm font-bold tracking-widest uppercase">./init_connection</span>
                <h2 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white font-sans tracking-tight leading-[0.9]">
                    Let's <br /><span className="text-horizon-sky">Collab.</span>
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-sans font-medium">
                  Currently open to senior-level discussions regarding Agentic AI workflows and Data Infrastructure.
                </p>
            </div>

            <div className="space-y-8">
              {/* Premium LinkedIn Card */}
              <div className="p-8 rounded-3xl glass-card border-horizon-sky/20 transition-all hover:scale-[1.02] duration-300">
                  <div className="flex items-center gap-3 mb-6">
                      <MessageSquare className="h-5 w-5 text-horizon-sky" />
                      <span className="text-xs font-mono font-bold text-horizon-sky uppercase tracking-widest">Real-time Interface</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 font-sans">Immediate Pipeline</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-8 font-sans leading-relaxed">Fastest response via LinkedIn direct messaging. Let's talk about technical ROI.</p>
                  <LinkedInButton />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl glass-card group hover:border-horizon-sky/40 transition-all">
                      <Mail className="h-5 w-5 text-horizon-sky mb-4" />
                      <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">Direct Mail</h4>
                      <p className="text-xs text-slate-500 truncate">{PROFILE.email}</p>
                  </div>
                  <div className="p-6 rounded-2xl glass-card group hover:border-horizon-sky/40 transition-all">
                      <MapPin className="h-5 w-5 text-horizon-sky mb-4" />
                      <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">Base Ops</h4>
                      <p className="text-xs text-slate-500">{PROFILE.location}</p>
                  </div>
              </div>
            </div>
          </div>

          {/* Right Side: High-End Form */}
          <div className="lg:w-3/5">
            <div className="glass-card p-10 md:p-14 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-horizon-gold/5 blur-3xl rounded-full"></div>
              
              <form onSubmit={handleSubmit} className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="input-focus-line">
                    <label className={`block text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${focusedField === 'name' ? 'text-horizon-sky translate-y-0' : 'text-slate-400'}`}>01 // Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      onChange={handleChange}
                      className="w-full py-4 bg-transparent border-b border-slate-200 dark:border-midnight-700 text-lg text-slate-900 dark:text-white outline-none font-sans font-semibold placeholder:text-slate-300 dark:placeholder:text-midnight-700"
                      placeholder="Ident Name"
                    />
                  </div>
                  
                  <div className="input-focus-line">
                    <label className={`block text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${focusedField === 'email' ? 'text-horizon-sky translate-y-0' : 'text-slate-400'} ${errors.email ? 'text-red-500' : ''}`}>
                      02 // Return Path
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      onChange={handleChange}
                      className={`w-full py-4 bg-transparent border-b ${errors.email ? 'border-red-500' : 'border-slate-200 dark:border-midnight-700'} text-lg text-slate-900 dark:text-white outline-none font-sans font-semibold placeholder:text-slate-300 dark:placeholder:text-midnight-700`}
                      placeholder="email@example.com"
                    />
                    {errors.email && (
                      <p className="mt-2 text-[10px] text-red-500 font-mono font-bold flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="input-focus-line">
                  <label className={`block text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${focusedField === 'subject' ? 'text-horizon-sky translate-y-0' : 'text-slate-400'}`}>03 // Project ID</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField(null)}
                    onChange={handleChange}
                    className="w-full py-4 bg-transparent border-b border-slate-200 dark:border-midnight-700 text-lg text-slate-900 dark:text-white outline-none font-sans font-semibold placeholder:text-slate-300 dark:placeholder:text-midnight-700"
                    placeholder="Subject Header"
                  />
                </div>

                <div className="input-focus-line">
                  <div className="flex justify-between items-center mb-1">
                    <label className={`block text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${focusedField === 'message' ? 'text-horizon-sky translate-y-0' : 'text-slate-400'}`}>04 // Payload</label>
                    <span className={`text-[10px] font-mono ${formData.message.length > MAX_MESSAGE_CHARS * 0.9 ? 'text-horizon-gold' : 'text-slate-500'}`}>
                      {formData.message.length} / {MAX_MESSAGE_CHARS}
                    </span>
                  </div>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    onChange={handleChange}
                    className="w-full py-4 bg-transparent border-b border-slate-200 dark:border-midnight-700 text-lg text-slate-900 dark:text-white outline-none font-sans font-semibold placeholder:text-slate-300 dark:placeholder:text-midnight-700 resize-none"
                    placeholder="Describe mission details..."
                  ></textarea>
                </div>

                <div className="pt-6 space-y-4">
                    {errors.form && (
                      <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl flex items-center gap-3">
                        <AlertCircle className="w-5 h-5 text-red-500" />
                        <p className="text-xs font-bold text-red-500 font-sans">{errors.form}</p>
                      </div>
                    )}
                    
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group relative inline-flex items-center justify-center px-12 py-5 bg-slate-900 dark:bg-white text-white dark:text-midnight-950 text-base font-black rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-xl glow-shadow-sky w-full disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? (
                          <>
                            Executing...
                            <Loader2 className="ml-3 h-5 w-5 animate-spin" />
                          </>
                        ) : (
                          <>
                            Execute Request
                            <Send className="ml-3 h-5 w-5 group-hover:translate-x-1.5 group-hover:-translate-y-1.5 transition-transform" />
                          </>
                        )}
                    </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
