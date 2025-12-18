import React, { useState } from 'react';
import { Send, Mail, MapPin, CheckCircle, X, Sparkles } from 'lucide-react';
import { PROFILE } from '../constants';
import LinkedInButton from './LinkedInButton';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct mailto link
    const subject = encodeURIComponent(`[Portfolio Contact] ${formData.subject}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    const mailtoLink = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success state
    setShowSuccess(true);
    
    // Reset form
    setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    // Auto dismiss after 5 seconds
    setTimeout(() => {
        setShowSuccess(false);
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 w-full bg-slate-50 dark:bg-slate-950 transition-colors duration-300 relative">
      
      {/* Success Toast */}
      {showSuccess && (
        <div className="fixed bottom-6 right-6 z-50 animate-fadeIn">
            <div className="bg-emerald-600 text-white px-6 py-4 rounded-lg shadow-xl flex items-center gap-3">
                <CheckCircle className="h-6 w-6" />
                <div>
                    <h4 className="font-bold text-sm font-sans">Message sent successfully!</h4>
                    <p className="text-xs text-emerald-100 font-sans">Thank you for reaching out. I'll get back to you soon.</p>
                </div>
                <button 
                    onClick={() => setShowSuccess(false)}
                    className="ml-4 hover:bg-emerald-700 p-1 rounded-full transition-colors"
                >
                    <X className="h-4 w-4" />
                </button>
            </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Architectural Header */}
        <div className="border-b border-slate-200 dark:border-slate-800 pb-8 mb-16">
            <span className="text-blue-600 dark:text-blue-500 font-mono text-xs font-bold tracking-wider uppercase mb-2 block">
                ./contact
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white font-sans tracking-tight">Let's Connect</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column: Contact Info */}
          <div className="space-y-8">
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-sans font-medium">
              I'm currently looking for new opportunities in AI Research and Data Engineering. 
              Whether you have a question, a project idea, or just want to say hi, my inbox is always open!
            </p>

            <div className="space-y-6">
              {/* LinkedIn Direct Action Card */}
              <div className="p-6 rounded-xl bg-blue-50/50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800/50">
                  <div className="flex items-center gap-2 mb-4">
                      <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      <span className="text-xs font-mono font-bold text-blue-700 dark:text-blue-400 uppercase tracking-widest">Recruiter Quick Action</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 font-sans">Prefer a direct message?</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 font-sans">Skip the form and connect with me directly on LinkedIn for a faster response.</p>
                  <LinkedInButton />
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <div className="p-2 bg-slate-50 dark:bg-slate-800 rounded text-slate-700 dark:text-slate-300">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-0.5 font-sans">Email</h3>
                  <a href={`mailto:${PROFILE.email}`} className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-sans">
                    {PROFILE.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <div className="p-2 bg-slate-50 dark:bg-slate-800 rounded text-slate-700 dark:text-slate-300">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-0.5 font-sans">Location</h3>
                  <p className="text-slate-600 dark:text-slate-400 font-sans">
                    {PROFILE.location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="sm:col-span-1">
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 font-sans">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all font-sans"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="sm:col-span-1">
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 font-sans">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all font-sans"
                  placeholder="john@example.com"
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 font-sans">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all font-sans"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 font-sans">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-y min-h-[120px] font-sans"
                  placeholder="Hello, I'd like to discuss..."
                ></textarea>
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-bold rounded-lg text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 transition-all shadow-sm font-sans"
                >
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;