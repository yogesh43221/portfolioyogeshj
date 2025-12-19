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
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-horizon-sky/30 dark:bg-horizon-sky/20 blur-3xl rounded-full scale-90 group-hover:scale-110 transition-transform duration-700 opacity-50" />
                    
                    {/* Hexagon Container */}
                    <div className="relative w-full h-full p-[2px] bg-gradient-to-b from-horizon-sky to-horizon-clouds dark:from-horizon-sky dark:to-midnight-700 transition-all duration-500 shadow-2xl"
                         style={{
                           clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                         }}>
                        {/* Image inside hexagon */}
                        <div className="w-full h-full bg-slate-200 dark:bg-midnight-800 overflow-hidden flex items-center justify-center relative"
                             style={{
                               clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                             }}>
                            
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
                    
                    {/* Hexagon Frame Decoration */}
                    <div className="absolute inset-0 border-2 border-horizon-sky/20 pointer-events-none group-hover:border-horizon-sky/40 transition-colors duration-500"
                         style={{
                           clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                           transform: 'scale(1.03)'
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