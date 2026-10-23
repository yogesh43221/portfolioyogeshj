import React, { useState } from 'react';
import { ArrowRight, Terminal, Camera, MapPin, CheckCircle2, Download } from 'lucide-react';
import { PROFILE, RESUME_PATH } from '../constants';
import { useProfileImage } from '../services/profileImageStore';
import ProfileAvatarModal from './ProfileAvatarModal';
import SystemTerminalModal from './SystemTerminalModal';

const Hero: React.FC = () => {
  const { profileImage } = useProfileImage();
  const [isAvatarModalOpen, setIsAvatarModalOpen] = useState(false);
  const [isTerminalModalOpen, setIsTerminalModalOpen] = useState(false);
  const [imgLoadFailed, setImgLoadFailed] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center pt-28 sm:pt-32 pb-16 sm:pb-20 z-20 bg-grain">
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 bg-horizon-light dark:bg-midnight-950 transition-colors duration-150">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(128,128,128,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(128,128,128,0.05)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
          <div className="absolute left-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-horizon-sky/5 dark:bg-horizon-sky/10 blur-[120px]"></div>
      </div>

      <div className="section-container flex flex-col items-center text-center relative z-10 max-w-5xl">
        
        {/* Status Pill & Location */}
        <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-midnight-900 border border-slate-200 dark:border-midnight-700 shadow-sm">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">Software Development + QA Automation</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-midnight-900 border border-slate-200 dark:border-midnight-700 text-[11px] text-slate-600 dark:text-slate-400 font-mono shadow-sm">
              <MapPin className="w-3.5 h-3.5 text-horizon-sky" />
              <span>Pune, India</span>
            </div>
        </div>

        {/* Prominent Profile Headshot Showcase */}
        <div className="mb-8 relative group">
          <div className="relative inline-block">
            {/* Ambient Backlight Glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-horizon-sky/20 via-slate-200/20 to-horizon-gold/20 dark:from-horizon-sky/15 dark:to-horizon-gold/15 rounded-full blur-2xl opacity-50 group-hover:opacity-80 transition duration-500"></div>
            
            {/* Outer Ring with interactive click to view/change */}
            <button
              onClick={() => setIsAvatarModalOpen(true)}
              className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full p-1 bg-slate-200 dark:bg-midnight-700 ring-2 ring-slate-300/50 dark:ring-midnight-600/50 hover:ring-horizon-sky transition-all duration-200 block focus:outline-none focus:ring-4 focus:ring-horizon-sky/30 shadow-md"
              title="Click to view or change profile photo"
            >
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-100 dark:bg-midnight-900 relative">
                {!imgLoadFailed ? (
                  <img
                    src={profileImage}
                    alt={PROFILE.name}
                    onError={() => setImgLoadFailed(true)}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center font-mono font-bold text-3xl text-slate-700 dark:text-white bg-midnight-800">
                    YJ
                  </div>
                )}

                {/* Subtle Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-[11px] font-mono gap-1 font-bold">
                  <Camera className="w-4 h-4 text-horizon-sky" />
                  <span>View / Edit</span>
                </div>
              </div>

              {/* Verified Quality Badge */}
              <div 
                className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 p-1.5 bg-emerald-500 text-white rounded-full border-2 border-white dark:border-midnight-950 shadow-sm"
                title="Software Development & QA Automation"
              >
                <CheckCircle2 className="w-4 h-4" />
              </div>
            </button>
          </div>

          <div className="mt-3">
            <span className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400 block">
              {PROFILE.name}
            </span>
          </div>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-slate-900 dark:text-white mb-5 uppercase leading-[1.05]">
          Building <span className="text-horizon-sky">Logic.</span> <br />
          Testing <span className="text-horizon-gold">Limits.</span> <br />
          Shipping <span className="text-horizon-clouds">Quality.</span>
        </h1>

        {/* Clear Primary Positioning */}
        <div className="mb-6 space-y-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white font-sans">
            QA Automation / Software Engineer
          </h2>
          <p className="text-sm sm:text-base font-mono text-horizon-sky font-semibold">
            Python • Playwright • API Testing • SQL • FastAPI • AI/LLM
          </p>
        </div>

        {/* Prioritized Role & Technology Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 max-w-2xl">
          <span className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-amber-50 dark:bg-slate-800/80 text-amber-700 dark:text-amber-200/85 border border-amber-200 dark:border-amber-500/20">
            QA Automation
          </span>
          <span className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-sky-50 dark:bg-slate-800/80 text-horizon-sky dark:text-sky-200/85 border border-sky-200 dark:border-sky-500/20">
            Python
          </span>
          <span className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-amber-50 dark:bg-slate-800/80 text-amber-700 dark:text-amber-200/85 border border-amber-200 dark:border-amber-500/20">
            Playwright
          </span>
          <span className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-emerald-50 dark:bg-slate-800/80 text-emerald-700 dark:text-teal-200/85 border border-emerald-200 dark:border-teal-500/20">
            API Testing
          </span>
          <span className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/70 dark:border-slate-700/60">
            SQL
          </span>
          <span className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-sky-50 dark:bg-slate-800/80 text-horizon-sky dark:text-sky-200/85 border border-sky-200 dark:border-sky-500/20">
            FastAPI
          </span>
          <span className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-indigo-50 dark:bg-slate-800/80 text-indigo-700 dark:text-violet-200/85 border border-indigo-200 dark:border-violet-500/20">
            AI / LLM
          </span>
        </div>

        <p className="text-base sm:text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-3xl leading-relaxed mb-10 font-medium">
          {PROFILE.shortBio}
        </p>

        {/* Primary CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center mb-6">
          <a
            href="#projects"
            onClick={(e) => handleNavClick(e, '#projects')}
            className="btn-primary w-full sm:w-auto"
          >
            Explore My Work
            <ArrowRight className="ml-3 h-5 w-5" />
          </a>
          <a
            href={RESUME_PATH}
            target="_blank"
            rel="noopener noreferrer"
            download="Yogesh_Jadhav_QA_Resume.pdf"
            className="btn-secondary w-full sm:w-auto"
          >
            <Download className="mr-2 h-4 w-4 text-horizon-sky" />
            Download Resume
          </a>
        </div>

        {/* Interactive Terminal Control */}
        <div className="flex items-center justify-center">
          <button
            onClick={() => setIsTerminalModalOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-midnight-800 text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-midnight-700 hover:border-slate-300 dark:hover:border-midnight-600 transition-all text-xs font-mono font-semibold shadow-sm"
          >
            <Terminal className="w-3.5 h-3.5 text-horizon-sky" />
            <span>Launch YJ-CLI</span>
          </button>
        </div>
      </div>

      {/* Interactive Modals */}
      <ProfileAvatarModal 
        isOpen={isAvatarModalOpen} 
        onClose={() => setIsAvatarModalOpen(false)} 
      />

      <SystemTerminalModal
        isOpen={isTerminalModalOpen}
        onClose={() => setIsTerminalModalOpen(false)}
      />
    </section>
  );
};

export default Hero;