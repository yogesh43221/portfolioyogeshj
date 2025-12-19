import React from 'react';
import { Database, GitMerge, Zap } from 'lucide-react';
import MLSystemPipeline from './MLSystemPipeline';
import { PROFILE } from '../constants';

const Philosophy: React.FC = () => {
  const principles = [
    {
      icon: <Database className="h-6 w-6" />,
      title: "Data Integrity First",
      desc: "Models are only as good as the data they consume. I prioritize robust ETL pipelines and strict schema validation before any training begins."
    },
    {
      icon: <GitMerge className="h-6 w-6" />,
      title: "Scalable Architecture",
      desc: "Building systems, not just scripts. I design modular, containerized backends (Docker/FastAPI) ready for production deployment."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Latency & Optimization",
      desc: "Optimizing SQL queries and vector retrieval paths to ensure real-time AI responses remain under strict latency budgets."
    }
  ];

  return (
    <section className="py-24 w-full bg-horizon-light dark:bg-midnight-900 transition-colors duration-500 relative">
      {/* Hidden SVG for rounded hexagon clip-path */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="rounded-hex" clipPathUnits="objectBoundingBox">
            <path d="M0.5,0 L0.9,0.15 Q1,0.2 1,0.3 L1,0.7 Q1,0.8 0.9,0.85 L0.5,1 L0.1,0.85 Q0,0.8 0,0.7 L0,0.3 Q0,0.2 0.1,0.15 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Architectural Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-20 border-b border-slate-300 dark:border-midnight-800 pb-8">
            <div>
                <span className="text-horizon-sky font-mono text-sm font-bold tracking-wider uppercase mb-3 block">
                   ./about_and_philosophy
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white font-sans tracking-tight">
                    About & Philosophy
                </h2>
            </div>
            {/* Visual Balance Element */}
            <div className="hidden md:block text-right">
                <span className="text-xs font-mono text-slate-500 block">Core Values</span>
                <span className="text-xs font-mono text-slate-500 block">v1.0.5</span>
            </div>
        </div>

        {/* 1. About Me & Hex Profile Section */}
        <div className="grid md:grid-cols-12 gap-12 lg:gap-20 items-start mb-28">
             {/* Left: Hexagon Profile Photo */}
             <div className="md:col-span-5 lg:col-span-4 flex justify-center md:justify-start pt-4">
                 <div className="relative w-64 h-72 lg:w-72 lg:h-80 group">
                    {/* Primary Accent Glow */}
                    <div className="absolute inset-0 bg-horizon-sky/40 dark:bg-horizon-sky/30 blur-3xl rounded-full scale-75 group-hover:scale-100 transition-all duration-1000 opacity-60 pointer-events-none" />
                    
                    {/* Hexagon Container with Border Glow */}
                    <div className="relative w-full h-full p-[3px] transition-all duration-500 hover:shadow-[0_0_30px_rgba(61,126,174,0.4)]"
                         style={{
                           clipPath: 'url(#rounded-hex)',
                           background: 'linear-gradient(135deg, #3D7EAE, #AACADF, #3D7EAE)'
                         }}>
                        
                        {/* Image inside hexagon */}
                        <div className="w-full h-full bg-slate-200 dark:bg-midnight-800 overflow-hidden flex items-center justify-center relative"
                             style={{
                               clipPath: 'url(#rounded-hex)'
                             }}>
                            
                            <div className="neural-scanner"></div>

                            {PROFILE.profileImage ? (
                                <img 
                                    src={PROFILE.profileImage} 
                                    alt={PROFILE.name}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out scale-105 group-hover:scale-110"
                                />
                            ) : (
                                <div className="w-full h-full bg-midnight-800 flex items-center justify-center text-white font-bold text-5xl font-mono tracking-tighter">
                                    YJ
                                    <div className="absolute inset-0 bg-gradient-to-tr from-horizon-sky/20 to-transparent"></div>
                                </div>
                            )}
                        </div>
                    </div>
                    
                    {/* Subtle outer stroke effect */}
                    <div className="absolute inset-0 border border-horizon-sky/10 dark:border-horizon-sky/20 pointer-events-none group-hover:border-horizon-sky/30 transition-colors duration-500"
                         style={{
                           clipPath: 'url(#rounded-hex)',
                           transform: 'scale(1.02)'
                         }} />
                 </div>
             </div>

             {/* Right: Bio Text */}
             <div className="md:col-span-7 lg:col-span-8 flex flex-col justify-center">
                 <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 font-sans flex items-center gap-2">
                    <span className="w-8 h-px bg-horizon-sky"></span>
                    Identity & Mission
                 </h3>
                 <div className="prose dark:prose-invert max-w-none">
                     <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed font-sans font-medium">
                         {PROFILE.about}
                     </p>
                 </div>
             </div>
         </div>

        {/* 2. Interactive ML Pipeline Visualization */}
        <div className="mb-24">
             <div className="mb-12">
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white font-sans mb-3">
                    How I Design Production AI Systems
                </h3>
                <p className="text-slate-600 dark:text-slate-400 font-sans text-lg border-l-4 border-horizon-sky pl-4 italic">
                    A practical blueprint from raw data to business value
                </p>
            </div>
            <MLSystemPipeline />
        </div>

        {/* 3. Core Principles Cards */}
        <div>
            <div className="mb-12">
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white font-sans mb-3">
                    Core Engineering Principles
                </h3>
                <p className="text-slate-600 dark:text-slate-400 font-sans text-lg border-l-4 border-horizon-gold pl-4 italic">
                    Non-negotiables I follow in every production system
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {principles.map((item, idx) => (
                    <div key={idx} className="group p-8 rounded-2xl bg-white dark:bg-midnight-800 border border-slate-200 dark:border-midnight-700 hover:border-horizon-sky transition-all shadow-sm hover:shadow-lg">
                        <div className="mb-6 inline-flex p-3.5 rounded-xl bg-slate-100 dark:bg-midnight-900 text-slate-600 dark:text-slate-400 group-hover:text-horizon-sky transition-colors">
                            {item.icon}
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 font-sans">
                            {item.title}
                        </h3>
                        <p className="text-base text-slate-700 dark:text-slate-400 leading-relaxed font-sans">
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