import React from 'react';
import { Database, GitMerge, Zap } from 'lucide-react';
import MLSystemPipeline from './MLSystemPipeline';

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
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 border-b border-slate-300 dark:border-slate-800 pb-8">
            <div>
                <span className="text-blue-600 dark:text-blue-500 font-mono text-sm font-bold tracking-wider uppercase mb-3 block">
                   ./philosophy
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white font-sans tracking-tight">
                    Engineering Principles
                </h2>
            </div>
            {/* Visual Balance Element */}
            <div className="hidden md:block text-right">
                <span className="text-sm font-mono text-slate-500 block">Core Values</span>
                <span className="text-sm font-mono text-slate-500 block">v1.0.4</span>
            </div>
        </div>

        {/* 1. Interactive ML Pipeline Visualization */}
        <MLSystemPipeline />

        {/* 2. Core Principles Cards */}
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
    </section>
  );
};

export default Philosophy;