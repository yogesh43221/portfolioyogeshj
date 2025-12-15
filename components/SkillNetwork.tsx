import React, { useState } from 'react';
import { SkillCategory, Skill } from '../types';
import { SKILLS } from '../constants';
import { Cpu, Database, Server, Layers, Container, Circle, GitMerge } from 'lucide-react';

// Group skills by category
const groupedSkills = SKILLS.reduce((acc, skill) => {
  if (!acc[skill.category]) acc[skill.category] = [];
  acc[skill.category].push(skill);
  return acc;
}, {} as Record<SkillCategory, Skill[]>);

const categories = Object.keys(groupedSkills) as SkillCategory[];

const getCategoryColor = (cat: string) => {
    switch(cat) {
        case 'AI & LLMs': return 'text-purple-500 border-purple-500 bg-purple-50 dark:bg-purple-900/20';
        case 'Machine Learning': return 'text-blue-500 border-blue-500 bg-blue-50 dark:bg-blue-900/20';
        case 'Data Analysis': return 'text-emerald-500 border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20';
        case 'Backend & APIs': return 'text-indigo-500 border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20';
        default: return 'text-slate-500 border-slate-500 bg-slate-50 dark:bg-slate-800';
    }
};

const SkillNetwork: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory | null>(null);

  return (
    <div className="w-full">
      <div className="flex items-center gap-2 mb-8 border-b border-slate-200 dark:border-slate-800 pb-3">
         <GitMerge className="w-4 h-4 text-slate-900 dark:text-white" />
         <h3 className="font-mono text-sm font-bold text-slate-900 dark:text-white uppercase tracking-widest">
            Technical Arsenal
         </h3>
      </div>

      <div className="relative space-y-8 pl-4">
        {/* Main Vertical Trunk Line */}
        <div className="absolute left-1.5 top-2 bottom-6 w-0.5 bg-slate-200 dark:bg-slate-800"></div>

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
                    <div className="flex items-center gap-4 mb-3 relative z-10">
                        <div className={`
                            w-3 h-3 rounded-full border-2 transition-all duration-300 relative bg-white dark:bg-slate-900
                            ${isHovered ? colorClass.split(' ')[1] : 'border-slate-300 dark:border-slate-600'}
                        `}>
                            {/* Pulse effect */}
                             {isHovered && <div className={`absolute -inset-1 rounded-full opacity-30 animate-ping ${colorClass.split(' ')[1].replace('border', 'bg')}`}></div>}
                        </div>
                        
                        <h4 className={`text-sm font-bold font-mono uppercase tracking-wide transition-colors ${isHovered ? 'text-slate-900 dark:text-white' : 'text-slate-500'}`}>
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
                                        : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-300'}
                                `}
                            >
                                <div className="flex items-center justify-between">
                                    <span>{skill.name}</span>
                                    {/* Level Bar */}
                                    {isHovered && (
                                        <div className="w-8 h-1 bg-slate-200 dark:bg-slate-700 rounded-full ml-2 overflow-hidden">
                                            <div 
                                                className={`h-full rounded-full ${colorClass.split(' ')[1].replace('border', 'bg')}`} 
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
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