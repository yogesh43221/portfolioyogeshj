import React, { useState } from 'react';
import { Database, GitMerge, Zap } from 'lucide-react';
import MLSystemPipeline from './MLSystemPipeline';
import { PROFILE } from '../constants';
import { useProfileImage } from '../services/profileImageStore';

const Philosophy: React.FC = () => {
  const { profileImage } = useProfileImage();
  const [imgError, setImgError] = useState(false);
  const principles = [
    {
      icon: <GitMerge className="h-6 w-6" />,
      title: "Quality & Testability",
      desc: "Writing software with testability in mind from day one. Clear API contracts, structured regression testing, and catching edge cases early."
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Data Integrity & Validation",
      desc: "Applications and models are only as reliable as their underlying data. I prioritize strict schema validation and clean SQL queries."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Modular System Design",
      desc: "Building clean, maintainable backends with FastAPI and Docker that can be easily tested, containerized, and deployed."
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 w-full bg-horizon-light dark:bg-midnight-900 transition-colors duration-150 relative scroll-mt-24 sm:scroll-mt-28">
      {/* Hidden SVG for rounded hexagon clip-path */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="rounded-hex" clipPathUnits="objectBoundingBox">
            <path d="M0.5,0 L0.9,0.15 Q1,0.2 1,0.3 L1,0.7 Q1,0.8 0.9,0.85 L0.5,1 L0.1,0.85 Q0,0.8 0,0.7 L0,0.3 Q0,0.2 0.1,0.15 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="section-container">
        
        {/* Architectural Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 sm:mb-16 border-b border-slate-300 dark:border-midnight-800 pb-6 sm:pb-8">
            <div>
                <span className="text-horizon-sky font-mono text-sm font-bold tracking-wider uppercase mb-3 block">
                   About & Engineering Approach
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white font-sans tracking-tight">
                    About & Approach
                </h2>
            </div>
            {/* Visual Balance Element */}
            <div className="hidden md:block text-right">
                <span className="text-xs font-mono text-slate-500 block">Core Values</span>
                <span className="text-xs font-mono text-slate-500 block">v1.0.5</span>
            </div>
        </div>

        {/* 1. About Me & Profile Section */}
        <div className="grid md:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center mb-16 sm:mb-20">
             {/* Left: Refined Engineering Profile Photo Card */}
             <div className="md:col-span-5 lg:col-span-4 flex justify-center md:justify-start">
                 <div className="relative w-64 h-72 sm:w-72 sm:h-80 rounded-2xl overflow-hidden bg-slate-100 dark:bg-midnight-900 border border-slate-200 dark:border-midnight-700 shadow-sm group">
                     {!imgError && profileImage ? (
                         <img 
                             src={profileImage} 
                             alt={PROFILE.name}
                             onError={() => setImgError(true)}
                             className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                         />
                     ) : (
                         <div className="w-full h-full bg-slate-100 dark:bg-midnight-900 flex items-center justify-center text-slate-700 dark:text-white font-bold text-5xl font-mono tracking-tighter">
                             YJ
                         </div>
                     )}
                     {/* Subtle bottom tag */}
                     <div className="absolute bottom-3 left-3 right-3 px-3 py-1.5 rounded-xl bg-white/95 dark:bg-midnight-900/95 border border-slate-200/80 dark:border-midnight-700/80 text-center shadow-sm">
                         <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                             {PROFILE.name}
                         </span>
                     </div>
                 </div>
             </div>

             {/* Right: Bio Text */}
             <div className="md:col-span-7 lg:col-span-8 flex flex-col justify-center">
                 <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 font-sans flex items-center gap-2">
                    <span className="w-8 h-px bg-horizon-sky"></span>
                    Identity & Mission
                 </h3>
                 <div className="prose dark:prose-invert max-w-none">
                     <p className="text-base sm:text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed font-sans font-medium">
                         {PROFILE.about}
                     </p>
                 </div>
             </div>
         </div>

        {/* 2. Interactive ML Pipeline Visualization */}
        <div className="mb-16 sm:mb-20">
             <div className="mb-8 sm:mb-10">
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-sans mb-2">
                    System Pipeline & Architecture
                </h3>
                <p className="text-slate-600 dark:text-slate-400 font-sans text-base sm:text-lg">
                    A structured workflow from data ingestion to validation and testing
                </p>
            </div>
            <MLSystemPipeline />
        </div>

        {/* 3. Core Principles Cards */}
        <div>
            <div className="mb-8 sm:mb-10">
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-sans mb-2">
                    Core Engineering Principles
                </h3>
                <p className="text-slate-600 dark:text-slate-400 font-sans text-base sm:text-lg">
                    Principles guiding my development, testing, and system workflows
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {principles.map((item, idx) => (
                    <div key={idx} className="group p-6 sm:p-8 rounded-2xl bg-white dark:bg-midnight-900 border border-slate-200 dark:border-midnight-700 hover:border-slate-300 dark:hover:border-midnight-600 transition-all duration-200 shadow-sm hover:shadow-md">
                        <div className="mb-5 inline-flex p-3 rounded-xl bg-slate-50 dark:bg-midnight-800 border border-slate-200/70 dark:border-midnight-700 text-slate-700 dark:text-slate-300 group-hover:text-horizon-sky transition-colors">
                            {item.icon}
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 font-sans">
                            {item.title}
                        </h3>
                        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* Subtle Bottom Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-midnight-700 to-transparent opacity-60"></div>
    </section>
  );
};

export default Philosophy;