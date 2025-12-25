import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
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
    <section id="about" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 z-20 bg-grain">
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 bg-horizon-light dark:bg-midnight-950 transition-colors duration-150">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(128,128,128,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(128,128,128,0.05)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
          <div className="absolute left-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-horizon-sky/5 dark:bg-horizon-sky/10 blur-[120px]"></div>
      </div>

      <div className="section-container flex flex-col items-center text-center relative z-10">
        <div className="mb-12">
            <div className="relative inline-flex items-center gap-2 px-4 py-1.5 glass-card border-horizon-sky/20">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="accent-mono !text-[10px]">Bridging Development & Quality</span>
            </div>
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-slate-900 dark:text-white mb-8 uppercase leading-[1]">
          Building <span className="text-horizon-sky">Logic.</span> <br />
          Testing <span className="text-horizon-gold">Limits.</span> <br />
          Analyzing <span className="text-horizon-clouds">Data.</span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 max-w-3xl leading-relaxed mb-12 font-medium">
          {PROFILE.shortBio}
        </p>

        <div className="flex flex-col sm:flex-row gap-6 w-full justify-center items-center">
          <a
            href="#projects"
            onClick={(e) => handleNavClick(e, '#projects')}
            className="btn-primary w-full sm:w-auto"
          >
            Explore My Work
            <ArrowRight className="ml-3 h-5 w-5" />
          </a>
          <ResumeDropdown align="center" className="w-full sm:w-auto" />
        </div>

        <div className="mt-16 flex gap-10 items-center">
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
                    className="text-slate-400 hover:text-horizon-sky transition-all transform hover:scale-110 duration-150"
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