import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, Linkedin, Mail, Terminal } from 'lucide-react';
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
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsExiting(true);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
        setIsExiting(false);
      }, 500);
    }, 6000);

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
    <section id="about" className="relative min-h-[95vh] flex items-center justify-center pt-24 pb-16 z-20 overflow-hidden bg-grain">
      {/* Dynamic Mesh Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 bg-horizon-light dark:bg-midnight-950 transition-colors duration-500">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(128,128,128,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(128,128,128,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
          
          {/* Floating Data Packets (Engineering visualization) */}
          <div className="absolute inset-0">
             {[...Array(6)].map((_, i) => (
                <div 
                    key={i} 
                    className="absolute bg-horizon-sky/20 dark:bg-horizon-sky/40 rounded-sm animate-pulse"
                    style={{
                        width: '4px',
                        height: '4px',
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 5}s`,
                        animationDuration: `${3 + Math.random() * 4}s`
                    }}
                />
             ))}
          </div>

          <div className="absolute left-1/4 top-1/4 h-[600px] w-[600px] rounded-full bg-horizon-sky/10 dark:bg-horizon-sky/20 blur-[150px] animate-pulse-slow"></div>
          <div className="absolute right-1/4 bottom-1/4 h-[500px] w-[500px] rounded-full bg-horizon-gold/10 dark:bg-horizon-gold/10 blur-[130px] animate-pulse-slow delay-1000"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-center text-center relative z-10">
        
        {/* Status Area */}
        <div className="flex flex-col items-center gap-6 mb-12 animate-fadeIn">
            {/* Modern Pill Badge */}
            <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-horizon-sky to-horizon-gold rounded-full blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                <div className="relative inline-flex items-center gap-2 px-4 py-1.5 bg-white dark:bg-midnight-900 border border-slate-200 dark:border-midnight-700 rounded-full cursor-default">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-horizon-gold opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-horizon-gold"></span>
                    </span>
                    <span className="text-[10px] font-mono font-bold text-slate-600 dark:text-slate-300 tracking-[0.2em] uppercase">
                        Available for Innovation
                    </span>
                </div>
            </div>

            {/* Glass Terminal Role Switcher */}
            <div className="relative group">
                <div className="absolute -inset-[1px] bg-gradient-to-r from-horizon-sky/50 to-horizon-gold/50 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition duration-700"></div>
                
                <div className="relative glass-card px-10 py-5 rounded-xl border-slate-200/50 dark:border-midnight-700/50 min-w-[320px] sm:min-w-[700px] justify-center overflow-hidden">
                    <div className="scanline-effect"></div>
                    <div className="flex items-center justify-center gap-5">
                        <Terminal className="w-5 h-5 text-horizon-sky flex-shrink-0 animate-pulse" />
                        
                        <div className={`flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-5 transition-all duration-700 transform ${isExiting ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                            <span className="font-bold text-slate-900 dark:text-white text-lg sm:text-xl tracking-tight font-sans">
                                {ROLES[roleIndex].title}
                            </span>
                            
                            <div className="h-6 w-px bg-slate-300 dark:bg-midnight-700 hidden sm:block"></div>
                            
                            <span className="font-mono text-sm sm:text-base text-horizon-sky font-medium opacity-80">
                                {ROLES[roleIndex].subtitle}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter text-slate-900 dark:text-white mb-10 font-sans leading-[0.9]">
          Design <span className="text-horizon-sky">Sync</span>
        </h1>

        <p className="mt-4 text-xl md:text-3xl text-slate-700 dark:text-slate-300 max-w-4xl leading-relaxed font-sans font-medium tracking-tight">
          {PROFILE.shortBio}
        </p>

        {/* Technical Stack Tags */}
        <div className="mt-14 flex flex-wrap justify-center gap-3">
            {['AGENTIC_AI', 'ETL_ARCH', 'LLM_OPS'].map(tag => (
                <span key={tag} className="px-5 py-2 glass-card rounded-lg text-xs font-mono font-bold text-slate-600 dark:text-slate-400 hover:text-horizon-sky transition-colors cursor-default border-slate-200 dark:border-midnight-800">
                    #{tag}
                </span>
            ))}
        </div>

        {/* Hero CTAs */}
        <div className="mt-14 flex flex-col sm:flex-row gap-6 w-full justify-center items-center">
          <a
            href="#projects"
            onClick={(e) => handleNavClick(e, '#projects')}
            className="group relative inline-flex items-center justify-center px-10 py-5 bg-slate-900 dark:bg-white text-white dark:text-midnight-950 text-base font-bold rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-2xl glow-shadow-sky w-full sm:w-auto"
          >
            Explore Systems
            <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1.5 transition-transform" />
          </a>
          
          <ResumeDropdown align="center" className="w-full sm:w-auto" />
        </div>

        {/* Dynamic Social Links */}
        <div className="mt-20 flex gap-10 items-center">
            {[
                { Icon: Github, href: PROFILE.github, color: 'hover:text-slate-800 dark:hover:text-white' },
                { Icon: Linkedin, href: PROFILE.linkedin, color: 'hover:text-[#0A66C2]' },
                { Icon: Mail, href: `mailto:${PROFILE.email}`, color: 'hover:text-horizon-gold' }
            ].map(({ Icon, href, color }, idx) => (
                <a 
                    key={idx} 
                    href={href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`text-slate-400 ${color} transition-all transform hover:scale-125 hover:-translate-y-1 duration-300`}
                >
                    <Icon className="h-8 w-8"/>
                </a>
            ))}
        </div>
      </div>

      {/* Modern Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-midnight-800 to-transparent opacity-80"></div>
    </section>
  );
};

export default Hero;