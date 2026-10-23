import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Terminal, 
  Download, 
  Check, 
  X, 
  Bug, 
  FileText 
} from 'lucide-react';
import { PROFILE, RESUME_PATH } from '../constants';
import SystemTerminalModal from './SystemTerminalModal';
import { WorkspaceIllustration } from './WorkspaceIllustration';

export const WorkspaceHero: React.FC = () => {
  const [isTerminalModalOpen, setIsTerminalModalOpen] = useState(false);
  const [isNotesModalOpen, setIsNotesModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isNotesModalOpen) {
        setIsNotesModalOpen(false);
      }
    };
    if (isNotesModalOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isNotesModalOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navbarOffset = 84;
      const elementTop = element.getBoundingClientRect().top;
      const targetPosition = elementTop + window.pageYOffset - navbarOffset;
      window.scrollTo({
        top: Math.max(0, targetPosition),
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[90vh] flex flex-col justify-center pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 z-20 overflow-hidden bg-[#FAF7F2] dark:bg-[#0E1117] transition-colors duration-200 scroll-mt-24 sm:scroll-mt-28"
    >
      {/* Warm organic ambient paper background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        {/* Soft, warm paper glow blooms */}
        <div className="absolute left-1/12 top-1/4 h-[420px] w-[420px] rounded-full bg-amber-100/40 dark:bg-amber-400/5 blur-[120px]"></div>
        <div className="absolute right-1/12 top-1/3 h-[460px] w-[460px] rounded-full bg-sky-100/40 dark:bg-sky-500/5 blur-[130px]"></div>
      </div>

      <div className="section-container relative z-10 w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Editorial Two-Column Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column (5 Cols): Editorial Storytelling, Concise Headline, Honest Bio & Actions */}
          <div className="lg:col-span-5 flex flex-col text-left">
            
            {/* Friendly Personal Intro - Cleanly structured for mobile and desktop */}
            <div className="mb-4 sm:mb-5">
              <div className="flex flex-wrap sm:flex-nowrap items-baseline gap-x-2 gap-y-1">
                <span className="text-sm sm:text-base font-medium text-slate-600 dark:text-slate-400 font-sans whitespace-nowrap">
                  Hello, I&apos;m
                </span>
                <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white font-sans whitespace-nowrap">
                  {PROFILE.name}
                </span>
                <span className="hidden sm:inline text-slate-300 dark:text-slate-700">•</span>
                <span className="w-full sm:w-auto text-xs sm:text-sm font-mono text-sky-700 dark:text-sky-400 font-semibold whitespace-nowrap mt-0.5 sm:mt-0">
                  QA &amp; Software Engineer
                </span>
              </div>
            </div>

            {/* Concise, Visually Dominant Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-4">
              I build software. I make it reliable.
            </h1>

            {/* Grounded supporting paragraph */}
            <p className="text-base sm:text-[17px] text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-normal">
              Specialized in Playwright, Python backends, and API validation. Focused on eliminating test flakiness, testing edge cases early, and shipping calm, dependable engineering.
            </p>

            {/* Primary & Secondary Actions */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <a
                href="#projects"
                onClick={(e) => handleNavClick(e, '#projects')}
                className="btn-primary px-6 py-3 text-sm font-bold shadow-xs hover:shadow-md transition-all text-center"
              >
                Explore My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>

              <a
                href={RESUME_PATH}
                target="_blank"
                rel="noopener noreferrer"
                download="Yogesh_Jadhav_QA_Resume.pdf"
                className="btn-secondary px-5 py-3 text-sm font-bold text-center"
              >
                <Download className="mr-2 h-4 w-4 text-sky-600 dark:text-sky-400" />
                Download Resume
              </a>

              <button
                onClick={() => setIsTerminalModalOpen(true)}
                className="p-3 rounded-xl border border-slate-300/80 dark:border-midnight-700 bg-white/70 dark:bg-midnight-900/70 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-sky-500 transition-colors shadow-2xs"
                title="Launch YJ-CLI interactive engineering terminal"
                aria-label="Launch YJ-CLI interactive terminal"
              >
                <Terminal className="w-4 h-4 text-sky-600 dark:text-sky-400" />
              </button>
            </div>

            {/* Clean Typographic Stack Cue (Unboxed & Restrained) */}
            <div className="pt-2 border-t border-slate-200/80 dark:border-midnight-800">
              <p className="text-xs font-mono text-slate-500 dark:text-slate-400 tracking-wide">
                <span className="font-semibold text-slate-700 dark:text-slate-300">Core Toolkit:</span> Python · Playwright · API Testing · FastAPI · SQL · Docker
              </p>
            </div>

          </div>

          {/* Right Column (7 Cols): The Illustrated Engineering Workbench */}
          <div className="lg:col-span-7 w-full flex flex-col items-center">
            <WorkspaceIllustration 
              onOpenTerminal={() => setIsTerminalModalOpen(true)}
              onOpenNotesModal={() => setIsNotesModalOpen(true)}
            />
          </div>

        </div>

      </div>

      {/* Modals */}
      <SystemTerminalModal
        isOpen={isTerminalModalOpen}
        onClose={() => setIsTerminalModalOpen(false)}
      />

      {/* Interactive QA Notes Modal (triggered from desk notebook) */}
      {isNotesModalOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 pt-20 sm:pt-6 pb-4 sm:pb-6 bg-slate-950/85 backdrop-blur-sm overflow-hidden select-none animate-fadeIn"
          onClick={() => setIsNotesModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Yogesh Jadhav QA Engineering Rules"
        >
          <div 
            className="relative w-full max-w-lg max-h-[calc(100dvh-5.5rem)] sm:max-h-[calc(100vh-4rem)] bg-[#FAF7F0] dark:bg-midnight-900 border border-amber-300/80 dark:border-midnight-700 rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Strip: always pinned, visible below navbar, comfortable touch target */}
            <div className="px-4 sm:px-6 py-3 sm:py-3.5 border-b border-amber-200/80 dark:border-midnight-800 flex items-center justify-between gap-3 flex-shrink-0">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="p-2 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-400 rounded-lg shrink-0">
                  <Bug className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white font-mono truncate">
                    QA Engineering Rules
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-mono truncate">
                    Desk Notes • Playwright &amp; FastAPI Quality Gate
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsNotesModalOpen(false)}
                className="p-2 min-h-[44px] min-w-[44px] rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-amber-100/60 dark:hover:bg-midnight-800 transition-colors flex items-center justify-center shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-horizon-sky"
                aria-label="Close engineering notes"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Content Body with rebalanced spacing */}
            <div className="flex-1 min-h-0 overflow-y-auto p-4 sm:p-6 space-y-3 font-mono text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <div className="p-3 sm:p-3.5 rounded-xl bg-white/90 dark:bg-midnight-800/80 border border-amber-200/60 dark:border-midnight-700 flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 dark:text-white block sm:inline">Flakiness is a Defect: </span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">Automated suites must produce deterministic, reproducible outcomes across Chromium, Firefox, and WebKit.</span>
                </div>
              </div>

              <div className="p-3 sm:p-3.5 rounded-xl bg-white/90 dark:bg-midnight-800/80 border border-amber-200/60 dark:border-midnight-700 flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 dark:text-white block sm:inline">API First Contracts: </span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">FastAPI schema validations and Pydantic models catch data regressions before they touch frontend UIs.</span>
                </div>
              </div>

              <div className="p-3 sm:p-3.5 rounded-xl bg-white/90 dark:bg-midnight-800/80 border border-amber-200/60 dark:border-midnight-700 flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 dark:text-white block sm:inline">Shift-Left Quality: </span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">Test continuously in CI/CD pipelines so defects are eliminated during authoring, not post-release.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default WorkspaceHero;
