import React, { useState } from 'react';
import { Database, FileCode, Brain, Server, TrendingUp, ArrowRight, Layers, GitBranch, Cpu, Zap } from 'lucide-react';

interface Stage {
  id: string;
  label: string;
  icon: React.ElementType;
  description: string;
  tools: string[];
  color: string;
}

const pipelineStages: Stage[] = [
  {
    id: 'ingestion',
    label: 'Data Ingestion',
    icon: Database,
    description: "Aggregating raw data from disparate sources (SQL, APIs, unstructured logs) into a unified lake.",
    tools: ["PostgreSQL", "MIMIC-IV", "S3"],
    color: "text-blue-500"
  },
  {
    id: 'engineering',
    label: 'Feature Eng.',
    icon: GitBranch,
    description: "Building robust ETL pipelines to clean, normalize, and transform raw data into model-ready features.",
    tools: ["Pandas", "dbt", "Airflow"],
    color: "text-cyan-500"
  },
  {
    id: 'modeling',
    label: 'AI Modeling',
    icon: Brain,
    description: "Training predictive models or fine-tuning LLMs (RAG) to extract intelligence and patterns.",
    tools: ["PyTorch", "XGBoost", "LangChain"],
    color: "text-purple-500"
  },
  {
    id: 'deployment',
    label: 'Production',
    icon: Server,
    description: "Containerizing and serving models via scalable APIs with low-latency inference monitoring.",
    tools: ["Docker", "FastAPI", "AWS"],
    color: "text-indigo-500"
  },
  {
    id: 'impact',
    label: 'Business Value',
    icon: TrendingUp,
    description: "Translating technical outputs into actionable insights, dashboards, and automated decisions.",
    tools: ["PowerBI", "ROI Analysis", "Automation"],
    color: "text-emerald-500"
  }
];

const MLSystemPipeline: React.FC = () => {
  const [activeStage, setActiveStage] = useState<string | null>(null);

  return (
    <div className="w-full mb-20 animate-fadeIn">
      <div className="flex items-center gap-2 mb-6">
         <Cpu className="w-4 h-4 text-slate-500" />
         <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500">
            End-to-End System Architecture
         </h3>
      </div>

      {/* Pipeline Visual Container */}
      <div className="relative p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
         {/* Background Grid */}
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>

         <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-0">
            {pipelineStages.map((stage, index) => {
                const isActive = activeStage === stage.id || (activeStage === null && index === 0);
                const isHovered = activeStage === stage.id;
                
                return (
                    <React.Fragment key={stage.id}>
                        {/* Stage Node */}
                        <div 
                            className="relative flex flex-col items-center group cursor-pointer transition-all duration-300 w-full lg:w-48"
                            onMouseEnter={() => setActiveStage(stage.id)}
                            onMouseLeave={() => setActiveStage(null)}
                        >
                            {/* Icon Circle */}
                            <div className={`
                                w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 border-2
                                ${isActive 
                                    ? `bg-white dark:bg-slate-800 border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.2)] scale-110` 
                                    : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-400 grayscale hover:grayscale-0'}
                            `}>
                                <stage.icon className={`w-6 h-6 ${isActive ? stage.color : 'text-slate-400'}`} />
                            </div>

                            {/* Label */}
                            <span className={`text-sm font-bold font-mono transition-colors duration-300 ${isActive ? 'text-slate-900 dark:text-white' : 'text-slate-500'}`}>
                                {stage.label}
                            </span>
                            
                            {/* Connection Line (Mobile: Down, Desktop: Right) */}
                            {index < pipelineStages.length - 1 && (
                                <div className="lg:hidden h-8 w-0.5 bg-slate-200 dark:bg-slate-800 my-2"></div>
                            )}
                        </div>

                        {/* Connection Line (Desktop Only) */}
                        {index < pipelineStages.length - 1 && (
                            <div className="hidden lg:flex flex-1 items-center justify-center px-2 relative h-10">
                                {/* Base Line */}
                                <div className="absolute h-0.5 w-full bg-slate-100 dark:bg-slate-800"></div>
                                {/* Animated Pulse */}
                                <div className="absolute h-0.5 w-full bg-gradient-to-r from-transparent via-blue-400 to-transparent w-1/2 animate-[shimmer_2s_infinite] opacity-50"></div>
                                <ArrowRight className="w-4 h-4 text-slate-300 dark:text-slate-700 relative z-10" />
                            </div>
                        )}
                    </React.Fragment>
                );
            })}
         </div>

         {/* Detail Overlay / Panel */}
         <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 min-h-[120px] transition-all duration-300">
            {pipelineStages.map((stage) => {
                if (activeStage !== stage.id && !(activeStage === null && stage.id === 'ingestion')) return null;
                
                return (
                    <div key={stage.id} className="animate-fadeIn grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="md:col-span-1">
                            <span className={`text-xs font-bold uppercase tracking-wider ${stage.color} mb-1 block`}>Phase Focus</span>
                            <h4 className="text-lg font-bold text-slate-900 dark:text-white font-sans">{stage.label}</h4>
                        </div>
                        <div className="md:col-span-2 border-l border-slate-200 dark:border-slate-800 pl-6">
                             <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 block">Objective</span>
                            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-sans">
                                {stage.description}
                            </p>
                        </div>
                        <div className="md:col-span-1 border-l border-slate-200 dark:border-slate-800 pl-6">
                             <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">Key Stack</span>
                             <div className="flex flex-wrap gap-2">
                                {stage.tools.map(t => (
                                    <span key={t} className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-mono rounded font-bold">
                                        {t}
                                    </span>
                                ))}
                             </div>
                        </div>
                    </div>
                );
            })}
         </div>
      </div>
    </div>
  );
};

export default MLSystemPipeline;