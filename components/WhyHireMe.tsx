import React from 'react';
import { BookOpen, Server, TrendingUp } from 'lucide-react';

const WhyHireMe: React.FC = () => {
  return (
    <section className="py-24 w-full bg-white dark:bg-midnight-950 transition-colors duration-500 relative">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Architectural Header */}
        <div className="border-b border-slate-300 dark:border-midnight-800 pb-8 mb-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <span className="text-horizon-sky font-mono text-sm font-bold tracking-wider uppercase mb-3 block">
                    ./why_hire_me
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white font-sans tracking-tight leading-tight">
                        Bridging Research &<br />Production Engineering
                    </h2>
                </div>
                <p className="text-slate-700 dark:text-slate-300 max-w-xl leading-relaxed text-lg font-sans pb-1 font-medium">
                    I don't just build models; I build reliable, scalable systems. My background blends academic rigor with the practical constraints of real-world software engineering.
                </p>
            </div>
        </div>

        {/* Structured Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group p-10 rounded-2xl bg-slate-50 dark:bg-midnight-800 border border-slate-200 dark:border-midnight-700 hover:border-horizon-sky transition-all duration-300 shadow-sm hover:shadow-md">
                <div className="flex items-center gap-4 mb-5">
                    <div className="p-3 bg-white dark:bg-midnight-900 rounded-xl shadow-sm text-horizon-sky border border-slate-100 dark:border-midnight-700">
                        <BookOpen className="h-6 w-6" />
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-white font-sans text-xl">
                        Research-Grade Rigor
                    </h3>
                </div>
                <p className="text-base text-slate-700 dark:text-slate-400 leading-relaxed font-sans">
                    Published IEEE author with deep understanding of algorithmic foundations. I move beyond "import sklearn" to understand and optimize mathematical underpinnings for edge-case robustness.
                </p>
            </div>

            {/* Card 2 */}
            <div className="group p-10 rounded-2xl bg-slate-50 dark:bg-midnight-800 border border-slate-200 dark:border-midnight-700 hover:border-horizon-sky transition-all duration-300 shadow-sm hover:shadow-md">
                <div className="flex items-center gap-4 mb-5">
                    <div className="p-3 bg-white dark:bg-midnight-900 rounded-xl shadow-sm text-horizon-gold border border-slate-100 dark:border-midnight-700">
                        <Server className="h-6 w-6" />
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-white font-sans text-xl">
                        Full-Cycle Systems
                    </h3>
                </div>
                <p className="text-base text-slate-700 dark:text-slate-400 leading-relaxed font-sans">
                    Not siloed in Jupyter notebooks. I architect end-to-end pipelines: from complex SQL ETL and vector database management to deploying robust FastAPI services in Docker containers.
                </p>
            </div>

            {/* Card 3 */}
            <div className="group p-10 rounded-2xl bg-slate-50 dark:bg-midnight-800 border border-slate-200 dark:border-midnight-700 hover:border-horizon-sky transition-all duration-300 shadow-sm hover:shadow-md">
                <div className="flex items-center gap-4 mb-5">
                    <div className="p-3 bg-white dark:bg-midnight-900 rounded-xl shadow-sm text-emerald-500 border border-slate-100 dark:border-midnight-700">
                        <TrendingUp className="h-6 w-6" />
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-white font-sans text-xl">
                        Impact-Driven Results
                    </h3>
                </div>
                <p className="text-base text-slate-700 dark:text-slate-400 leading-relaxed font-sans">
                    Proven track record of ROI. Whether reducing clinical data processing time by 40% or optimizing inventory for sales forecasting, I focus on measurable efficiency and cost reduction.
                </p>
            </div>
        </div>
      </div>
      
      {/* Subtle Bottom Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-midnight-700 to-transparent opacity-60"></div>
    </section>
  );
};

export default WhyHireMe;