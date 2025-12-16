import React from 'react';
import { ArrowRight, Github, Linkedin, Mail, Terminal, Cpu, Network } from 'lucide-react';
import { PROFILE } from '../constants';
import ResumeDropdown from './ResumeDropdown';

const Hero: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // Increased z-index, optimized spacing for large screens
    <section id="about" className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-16 z-20 overflow-hidden">
      {/* Background: Technical Grid */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 bg-slate-50 dark:bg-slate-950">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          {/* Subtle glow effect */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-blue-500/5 blur-[120px]"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-center text-center relative z-10">
        
        {/* Identity Command Bar Container (Photo removed) */}
        <div className="flex flex-col items-center gap-6 mb-12 animate-fadeIn">
            
            {/* Command Bar - Static & Confident */}
            <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-1000"></div>
                
                <div className="relative flex items-center gap-4 px-8 py-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-300 dark:border-slate-700 shadow-sm transition-all duration-300">
                    <Terminal className="w-5 h-5 text-blue-600 dark:text-blue-500" />
                    
                    <span className="font-bold text-slate-900 dark:text-white text-base tracking-tight font-sans">
                        AI Researcher & Data Engineer
                    </span>
                    
                    <div className="h-5 w-px bg-slate-300 dark:bg-slate-700 hidden sm:block"></div>
                    
                    <span className="font-mono text-sm text-slate-600 dark:text-slate-400 hidden sm:block">
                        Specializing in Agentic Workflows & Scalable ETL
                    </span>
                </div>
            </div>

            {/* Status Badge */}
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-widest bg-emerald-100/50 dark:bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-200 dark:border-emerald-500/20 cursor-default">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Available for Hire
            </div>
        </div>

        {/* Engineer-Centric Typography - Large & Readable */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-slate-900 dark:text-white mb-8 font-sans leading-[1.1]">
          Architecting <br className="hidden md:block" />
          <span className="text-blue-600 dark:text-blue-500">Intelligent Pipelines</span>
        </h1>

        <p className="mt-4 text-xl md:text-2xl text-slate-700 dark:text-slate-300 max-w-3xl leading-relaxed font-sans font-medium">
          {PROFILE.shortBio}
        </p>

        {/* Technical Stats - High Contrast */}
        <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-mono font-bold text-slate-600 dark:text-slate-400 border-t border-b border-slate-200 dark:border-slate-800 py-6 px-10 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm rounded-xl">
            <span className="flex items-center gap-2"><Cpu className="w-4 h-4 text-blue-500" /> AGENTIC_WORKFLOWS</span>
            <span className="hidden sm:inline text-slate-300 dark:text-slate-700">|</span>
            <span className="flex items-center gap-2"><Network className="w-4 h-4 text-blue-500" /> ETL_PIPELINES</span>
            <span className="hidden sm:inline text-slate-300 dark:text-slate-700">|</span>
            <span className="flex items-center gap-2"><Terminal className="w-4 h-4 text-blue-500" /> BACKEND_OPS</span>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-5 w-full justify-center items-center">
          <a
            href="#projects"
            onClick={(e) => handleNavClick(e, '#projects')}
            className="group inline-flex items-center justify-center px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-base font-mono font-bold rounded-lg hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl w-full sm:w-auto"
          >
            ./view_projects.sh
            <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <ResumeDropdown align="center" className="w-full sm:w-auto" />
        </div>

        <div className="mt-20 flex gap-8 items-center">
            <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors transform hover:scale-110 duration-200">
              <Github className="h-7 w-7"/>
            </a>
            <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors transform hover:scale-110 duration-200">
              <Linkedin className="h-7 w-7"/>
            </a>
            <a href={`mailto:${PROFILE.email}`} className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors transform hover:scale-110 duration-200">
              <Mail className="h-7 w-7"/>
            </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;