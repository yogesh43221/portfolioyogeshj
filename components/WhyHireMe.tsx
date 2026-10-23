import React from 'react';
import { ShieldCheck, Server, Brain, BarChart3 } from 'lucide-react';

interface StrengthItem {
  title: string;
  description: string;
  tags: string[];
  icon: React.ReactNode;
  accentColor: string;
}

const STRENGTHS: StrengthItem[] = [
  {
    title: "QA Automation & Testing",
    description: "Hands-on experience developing Playwright-based E2E automation, validating API workflows, and automating regression scenarios across clinical applications.",
    tags: ["Playwright", "E2E Testing", "API Testing", "Regression Testing"],
    icon: <ShieldCheck className="h-6 w-6 text-horizon-sky" />,
    accentColor: "hover:border-horizon-sky"
  },
  {
    title: "Backend & API Engineering",
    description: "Practical experience developing RESTful services in Python using FastAPI, formulating SQL database queries, and managing containerized Docker environments.",
    tags: ["Python", "FastAPI", "REST APIs", "SQL", "Docker"],
    icon: <Server className="h-6 w-6 text-horizon-gold" />,
    accentColor: "hover:border-horizon-gold"
  },
  {
    title: "AI / LLM Systems",
    description: "Built RAG applications and LLM-based agent workflows featuring document retrieval, vector embeddings, prompt grounding, and multi-step routing.",
    tags: ["RAG Architecture", "Vector Search", "LangChain", "FastAPI"],
    icon: <Brain className="h-6 w-6 text-indigo-500 dark:text-indigo-400" />,
    accentColor: "hover:border-indigo-400"
  },
  {
    title: "Data & Analytics",
    description: "Experience querying relational databases with SQL, data preprocessing and trend forecasting in Pandas, and creating interactive Power BI dashboards.",
    tags: ["SQL", "Pandas", "Power BI", "Data Analysis"],
    icon: <BarChart3 className="h-6 w-6 text-emerald-500" />,
    accentColor: "hover:border-emerald-500"
  }
];

const WhyHireMe: React.FC = () => {
  return (
    <section id="why_hire_me" className="py-16 sm:py-20 lg:py-24 w-full bg-white dark:bg-midnight-950 transition-colors duration-150 relative">
      <div className="section-container">
        
        {/* Architectural Header */}
        <div className="border-b border-slate-300 dark:border-midnight-800 pb-6 sm:pb-8 mb-10 sm:mb-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-horizon-sky font-mono text-sm font-bold tracking-wider uppercase mb-3 block">
                Technical Capabilities
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white font-sans tracking-tight leading-tight">
                Core Strengths
              </h2>
            </div>
            <p className="text-slate-700 dark:text-slate-300 max-w-xl leading-relaxed text-base sm:text-lg font-sans pb-1 font-medium">
              An early-career engineer combining software development capabilities with a quality-first mindset. Practical experience spanning test automation, API backends, AI systems, and data analytics.
            </p>
          </div>
        </div>

        {/* Structured 4-Column Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STRENGTHS.map((strength) => (
            <div
              key={strength.title}
              className={`flex flex-col p-6 sm:p-8 rounded-2xl bg-white dark:bg-midnight-900 border border-slate-200 dark:border-midnight-700 ${strength.accentColor} transition-all duration-200 shadow-sm hover:shadow-md`}
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="p-3 bg-slate-50 dark:bg-midnight-800 rounded-xl border border-slate-200/70 dark:border-midnight-700">
                  {strength.icon}
                </div>
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white font-sans text-xl mb-3 leading-snug">
                {strength.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans mb-6">
                {strength.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-slate-200/70 dark:border-midnight-700/70">
                {strength.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-md bg-slate-100 dark:bg-midnight-800 text-slate-700 dark:text-slate-300 font-mono font-medium border border-slate-200/70 dark:border-midnight-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Subtle Bottom Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-midnight-700 to-transparent opacity-60"></div>
    </section>
  );
};

export default WhyHireMe;