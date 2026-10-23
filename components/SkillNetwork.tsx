import React, { useState } from 'react';
import { SkillCategory, Skill } from '../types';
import { SKILLS } from '../constants';
import { ShieldCheck, GitMerge } from 'lucide-react';

const CATEGORY_ORDER: SkillCategory[] = [
  'QA & Automation',
  'Programming & Backend',
  'AI / ML / LLM',
  'Data & Analytics',
  'Tools & Infrastructure'
];

// Group skills by category
const groupedSkills = SKILLS.reduce((acc, skill) => {
  if (!acc[skill.category]) acc[skill.category] = [];
  acc[skill.category].push(skill);
  return acc;
}, {} as Record<SkillCategory, Skill[]>);

const categories = CATEGORY_ORDER.filter(cat => (groupedSkills[cat] || []).length > 0);

const getCategoryColor = (cat: SkillCategory) => {
  switch (cat) {
    case 'QA & Automation':
      return 'text-horizon-sky border-horizon-sky bg-sky-50 dark:bg-sky-950/30';
    case 'Programming & Backend':
      return 'text-horizon-gold border-horizon-gold bg-amber-50 dark:bg-amber-950/30';
    case 'AI / ML / LLM':
      return 'text-indigo-500 border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20';
    case 'Data & Analytics':
      return 'text-emerald-500 border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20';
    case 'Tools & Infrastructure':
      return 'text-slate-600 dark:text-slate-300 border-slate-400 dark:border-slate-600 bg-slate-100 dark:bg-slate-800/40';
    default:
      return 'text-slate-500 border-slate-500 bg-slate-50 dark:bg-slate-800';
  }
};

const SkillNetwork: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory | null>(null);

  return (
    <div className="w-full">
      <div className="flex items-center gap-2 mb-6 border-b border-amber-900/10 dark:border-slate-800 pb-3">
        <ShieldCheck className="w-4 h-4 text-horizon-sky" />
        <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
          Technical Skills Matrix
        </h3>
      </div>

      <div className="relative space-y-6 pl-4">
        {/* Main Vertical Trunk Line */}
        <div className="absolute left-1.5 top-2 bottom-6 w-0.5 bg-amber-900/10 dark:bg-slate-800"></div>

        {categories.map((category) => {
          const isHovered = activeCategory === category;
          const colorClass = getCategoryColor(category);

          return (
            <div 
              key={category} 
              className="relative"
              onMouseEnter={() => setActiveCategory(category)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              {/* Category Node (Hub) */}
              <div className="flex items-center gap-3 mb-2.5 relative z-10">
                <div className={`
                  w-2.5 h-2.5 rounded-full border-2 transition-all duration-200 relative bg-[#FFFDF9] dark:bg-slate-900
                  ${isHovered ? colorClass.split(' ')[1] : 'border-slate-400 dark:border-slate-600'}
                `}>
                </div>
                
                <h4 className={`text-xs font-bold font-mono uppercase tracking-wider transition-colors ${isHovered ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-400'}`}>
                  {category}
                </h4>
              </div>

              {/* Skills (Leaves) */}
              <div className="pl-8 grid grid-cols-2 gap-2 relative">
                {/* Connecting Curved Lines (SVG Overlay) */}
                <svg className="absolute top-0 left-1.5 w-6 h-full pointer-events-none opacity-50" preserveAspectRatio="none">
                  <path 
                    d={`M 1 0 C 1 15, 15 15, 24 15`} 
                    fill="none" 
                    stroke={isHovered ? "currentColor" : "#cbd5e1"} 
                    strokeWidth="1"
                    className={`transition-colors duration-300 ${isHovered ? colorClass.split(' ')[0] : 'text-slate-300 dark:text-slate-700'}`}
                  />
                </svg>

                {groupedSkills[category].map((skill) => (
                  <div 
                    key={skill.name}
                    className={`
                      group relative px-3 py-2 rounded-lg border text-xs font-mono font-bold transition-all duration-300 cursor-default
                      ${isHovered 
                        ? `${colorClass} shadow-sm translate-x-1` 
                        : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300'}
                    `}
                  >
                    <div className="flex items-center justify-between gap-1.5">
                      <span className="truncate">{skill.name}</span>
                      {skill.context && (
                        <span className="text-[10px] font-mono font-normal opacity-60 flex-shrink-0 hidden sm:inline">
                          {skill.context}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillNetwork;