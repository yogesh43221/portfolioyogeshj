import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, Linkedin, Mail, Terminal } from 'lucide-react';
import { PROFILE } from '../constants';
import ResumeDropdown from './ResumeDropdown';

const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  const ROLES = [
    { title: "Software Engineer", subtitle: "Building Robust Scalable Logic" },
    { title: "Data Analyst", subtitle: "Analyzing Logic-Driven Data" },
    { title: "QA Automation", subtitle: "Testing Limits & Ensuring Quality" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsExiting(true);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
        setIsExiting(false);
      }, 500);
    }, 5000);

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
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 bg-horizon-light dark:bg-midnight-950 transition-colors duration-500">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(128,128,128,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(128,128,128,0.05)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
          
          <div className="absolute left-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-horizon-sky/5 dark:bg-horizon-sky/10 blur-[120px] animate-pulse-slow"></div>
          <div className="absolute right-1/4 bottom-1/3 h-[400px] w-[400px] rounded-full bg-horizon-gold/5 dark:bg-horizon-gold/5 blur-[100px] animate-pulse-slow delay-700"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-center text-center relative z-10">
        
        {/* Status Area */}
        <div className="flex flex-col items-center gap-6 mb-12 animate-fadeIn">
            <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-horizon-sky to-horizon-gold rounded-full blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                <div className="relative inline-flex items-center gap-2 px-4 py-1.5 bg-white dark:bg-midnight-900 border border-slate-200 dark:border-midnight-700 rounded-full">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-[10px] font-mono font-bold text-slate-600 dark:text-slate-300 tracking-[0.2em] uppercase">
                        Bridging Development & Quality
                    </span>
                </div>
            </div>
        </div>

        <h1 className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter text-slate-900 dark:text-white mb-8 font-sans leading-[1.1] uppercase">
          Building <span className="text-horizon-sky">Logic.</span> <br />
          Testing <span className="text-horizon-gold">Limits.</span> <br />
          Analyzing <span className="text-horizon-clouds">Data.</span>
        </h1>

        <h2 className="text-xl md:text-3xl font-bold text-slate-500 dark:text-slate-400 mb-8 font-mono tracking-tight">
            Software Engineer | Data Analyst | QA Automation
        </h2>

        <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-3xl leading-relaxed font-sans font-medium tracking-tight mb-12">
          I bridge the gap between development and quality. With a background in Backend Engineering (FastAPI), Data Logic (SQL), and QA Automation (Playwright), I build systems that are robust, scalable, and data-driven.
        </p>

        {/* Hero CTAs */}
        <div className="flex flex-col sm:flex-row gap-6 w-full justify-center items-center">
          <a
            href="#projects"
            onClick={(e) => handleNavClick(e, '#projects')}
            className="group relative inline-flex items-center justify-center px-10 py-5 bg-slate-900 dark:bg-white text-white dark:text-midnight-950 text-base font-black rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-xl w-full sm:w-auto"
          >
            Explore My Work
            <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1.5 transition-transform" />
          </a>
          
          <ResumeDropdown align="center" className="w-full sm:w-auto" />
        </div>

        {/* Social Links */}
        <div className="mt-16 flex gap-8 items-center">
            {[
                { Icon: Github, href: PROFILE.github, label: 'GitHub' },
                { Icon: Linkedin, href: PROFILE.linkedin, label: 'LinkedIn' },
                { Icon: Mail, href: `mailto:${PROFILE.email}`, label: 'Email' }
            ].map(({ Icon, href, label }) => (
                <a 
                    key={label} 
                    href={href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-slate-400 hover:text-horizon-sky transition-all transform hover:scale-110 duration-300"
                    title={label}
                >
                    <Icon className="h-7 w-7"/>
                </a>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;