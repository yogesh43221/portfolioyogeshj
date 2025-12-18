import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, Linkedin, Mail, Terminal, Cpu, Network } from 'lucide-react';
import { PROFILE } from '../constants';
import ResumeDropdown from './ResumeDropdown';

const ROLES = [
  { 
    title: "AI Researcher & Data Engineer", 
    subtitle: "Specializing in Agentic Workflows & Scalable ETL" 
  },
  { 
    title: "Machine Learning Engineer", 
    subtitle: "Optimizing Predictive Models for Production" 
  },
  { 
    title: "Backend Systems Architect", 
    subtitle: "Building Robust APIs with FastAPI & Docker" 
  }
];

const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-16 z-20">
      {/* Background: Technical Grid */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 bg-horizon-light dark:bg-midnight-900 transition-colors duration-500">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          {/* Theme-synced glow effects */}
          <div className="absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-horizon-sky/5 dark:bg-horizon-sky/10 blur-[120px] animate-pulse-slow"></div>
          <div className="absolute right-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full bg-horizon-gold/5 dark:bg-horizon-gold/5 blur-[100px] animate-pulse-slow delay-1000"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-center text-center relative z-10">
        
        <div className="flex flex-col items-center gap-6 mb-12 animate-fadeIn">
            <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-horizon-sky to-horizon-gold rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-1000"></div>
                
                <div className="relative flex items-center gap-4 px-8 py-3 bg-white dark:bg-midnight-800 rounded-lg border border-slate-200 dark:border-midnight-700 shadow-sm transition-all duration-500 min-w-[320px] sm:min-w-[600px] justify-center">
                    <Terminal className="w-5 h-5 text-horizon-sky flex-shrink-0" />
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 overflow-hidden">
                        <span key={`title-${roleIndex}`} className="font-bold text-slate-900 dark:text-white text-base tracking-tight font-sans animate-[fadeIn_0.5s_ease-out_forwards]">
                            {ROLES[roleIndex].title}
                        </span>
                        
                        <div className="h-5 w-px bg-slate-300 dark:bg-midnight-700 hidden sm:block"></div>
                        
                        <span key={`sub-${roleIndex}`} className="font-mono text-sm text-slate-600 dark:text-slate-400 hidden sm:block animate-[fadeIn_0.5s_ease-out_forwards]">
                            {ROLES[roleIndex].subtitle}
                        </span>
                    </div>
                </div>
            </div>

            {/* Status Badge with Solar Gold Accent */}
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-horizon-sky dark:text-horizon-gold uppercase tracking-widest bg-horizon-sky/10 dark:bg-horizon-gold/5 px-4 py-1.5 rounded-full border border-horizon-sky/20 dark:border-horizon-gold/20 cursor-default">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-horizon-gold opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-horizon-gold"></span>
                </span>
                Available for Hire
            </div>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-slate-900 dark:text-white mb-8 font-sans leading-[1.1]">
          Architecting <br className="hidden md:block" />
          <span className="text-horizon-sky">Intelligent Pipelines</span>
        </h1>

        <p className="mt-4 text-xl md:text-2xl text-slate-700 dark:text-slate-300 max-w-3xl leading-relaxed font-sans font-medium">
          {PROFILE.shortBio}
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-mono font-bold text-slate-600 dark:text-slate-400 border-t border-b border-slate-200 dark:border-midnight-700 py-6 px-10 bg-white/50 dark:bg-midnight-800/50 backdrop-blur-sm rounded-xl transition-colors duration-500">
            <span className="flex items-center gap-2"><Cpu className="w-4 h-4 text-horizon-sky" /> AGENTIC_WORKFLOWS</span>
            <span className="hidden sm:inline text-slate-300 dark:text-midnight-700">|</span>
            <span className="flex items-center gap-2"><Network className="w-4 h-4 text-horizon-sky" /> ETL_PIPELINES</span>
            <span className="hidden sm:inline text-slate-300 dark:text-midnight-700">|</span>
            <span className="flex items-center gap-2"><Terminal className="w-4 h-4 text-horizon-sky" /> BACKEND_OPS</span>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-5 w-full justify-center items-center">
          <a
            href="#projects"
            onClick={(e) => handleNavClick(e, '#projects')}
            className="group inline-flex items-center justify-center px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-midnight-900 text-base font-mono font-bold rounded-lg hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl w-full sm:w-auto"
          >
            ./view_projects.sh
            <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <ResumeDropdown align="center" className="w-full sm:w-auto" />
        </div>

        <div className="mt-20 flex gap-8 items-center">
            <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-horizon-sky transition-colors transform hover:scale-110 duration-200">
              <Github className="h-7 w-7"/>
            </a>
            <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-horizon-sky transition-colors transform hover:scale-110 duration-200">
              <Linkedin className="h-7 w-7"/>
            </a>
            <a href={`mailto:${PROFILE.email}`} className="text-slate-500 hover:text-horizon-sky transition-colors transform hover:scale-110 duration-200">
              <Mail className="h-7 w-7"/>
            </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;