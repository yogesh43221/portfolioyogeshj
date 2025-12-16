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
    <section className="py-24 w-full bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Architectural Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-20 border-b border-slate-300 dark:border-slate-800 pb-8">
            <div>
                <span className="text-blue-600 dark:text-blue-500 font-mono text-sm font-bold tracking-wider uppercase mb-3 block">
                   ./about_and_philosophy
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white font-sans tracking-tight">
                    About & Philosophy
                </h2>
            </div>
            {/* Visual Balance Element */}
            <div className="hidden md:block text-right">
                <span className="text-sm font-mono text-slate-500 block">Core Values</span>
                <span className="text-sm font-mono text-slate-500 block">v1.0.4</span>
            </div>
        </div>

        {/* 1. About Me & Hex Profile Section */}
        <div className="grid md:grid-cols-12 gap-12 lg:gap-20 items-start mb-28">
             {/* Left: Hexagon Profile Photo */}
             <div className="md:col-span-5 lg:col-span-4 flex justify-center md:justify-start pt-4">
                 <div className="relative w-[280px] h-[320px] flex-shrink-0 group">
                    {/* Glow/Shadow behind */}
                    <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full scale-75 group-hover:scale-100 transition-transform duration-700" />
                    
                    {/* SVG Hexagon */}
                    <svg viewBox="0 0 100 115" className="w-full h-full drop-shadow-2xl" preserveAspectRatio="xMidYMid meet">
                      <defs>
                        <clipPath id="hex-clip">
                          {/* Pointy-top rounded hexagon path */}
                          <path d="M50 2 L92 26 C94 27 95 29 95 31 L95 84 C95 86 94 88 92 89 L50 113 C48 114 46 114 44 113 L2 89 C0 88 -1 86 -1 84 L-1 31 C-1 29 0 27 2 26 L44 2 C46 1 48 1 50 2 Z" transform="translate(3,0)" />
                        </clipPath>
                      </defs>
                      
                      {/* Background/Border Shape (Stroke) */}
                      <path d="M50 2 L92 26 C94 27 95 29 95 31 L95 84 C95 86 94 88 92 89 L50 113 C48 114 46 114 44 113 L2 89 C0 88 -1 86 -1 84 L-1 31 C-1 29 0 27 2 26 L44 2 C46 1 48 1 50 2 Z" 
                            fill="none" 
                            stroke="#3b82f6" 
                            strokeWidth="1.5"
                            className="opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                            transform="translate(3,0)"
                      />
                      
                      {/* Image masked by Hexagon */}
                      <image 
                        href={PROFILE.profileImage} 
                        width="100" 
                        height="115" 
                        clipPath="url(#hex-clip)" 
                        preserveAspectRatio="xMidYMid slice"
                        className="grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
                      />
                    </svg>
                 </div>
             </div>

             {/* Right: Bio Text */}
             <div className="md:col-span-7 lg:col-span-8 flex flex-col justify-center">
                 <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 font-sans flex items-center gap-2">
                    <span className="w-8 h-px bg-blue-500"></span>
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
                <p className="text-slate-600 dark:text-slate-400 font-sans text-lg border-l-4 border-blue-500 pl-4 italic">
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
                <p className="text-slate-600 dark:text-slate-400 font-sans text-lg border-l-4 border-emerald-500 pl-4 italic">
                    Non-negotiables I follow in every production system
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {principles.map((item, idx) => (
                    <div key={idx} className="group p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-all shadow-sm hover:shadow-lg">
                        <div className="mb-6 inline-flex p-3.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
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
    </section>
  );
};

export default Philosophy;