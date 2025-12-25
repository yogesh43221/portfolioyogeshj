import React, { useState } from 'react';
import { Github, Code, Brain, Database, Server, ChevronDown, ChevronUp, Network, ArrowUpRight, ShieldCheck, ListFilter } from 'lucide-react';
import { PROJECTS } from '../constants';
import { ProjectCategory, Project } from '../types';

const ProjectCard: React.FC<{ 
  project: Project; 
  isExpanded: boolean; 
  onToggle: () => void;
  getCategoryIcon: (cat: ProjectCategory) => React.ReactNode;
}> = ({ project, isExpanded, onToggle, getCategoryIcon }) => {
  return (
    <div className={`group flex flex-col h-full glass-card overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 ${isExpanded ? 'ring-2 ring-horizon-sky/30' : ''}`}>
      {/* Top Content Area - This grows to fill space */}
      <div className="p-8 flex-grow flex flex-col">
         <div className="flex justify-between items-start mb-6">
            <div className="p-3 bg-horizon-sky/10 rounded-xl border border-horizon-sky/20">
                {getCategoryIcon(project.category)}
            </div>
            {project.featured && (
                 <div className="accent-mono bg-horizon-gold/10 !text-horizon-gold px-3 py-1 rounded-full border border-horizon-gold/30">
                   Featured
                 </div>
            )}
         </div>

         <h3 className="text-2xl font-bold mb-4 leading-tight group-hover:text-horizon-sky transition-colors">
            {project.title}
         </h3>

         <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8">
            {project.description}
         </p>

         <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.map(tech => (
                <span key={tech} className="px-3 py-1.5 rounded-lg text-[10px] font-mono font-bold border bg-slate-50 dark:bg-midnight-900/50 text-slate-700 dark:text-slate-400 border-slate-200 dark:border-midnight-700">
                    {tech}
                </span>
            ))}
         </div>
         
         {/* Push everything below this to the bottom of the card content area */}
         <div className="mt-auto">
            {project.extendedDetails && (
               <div className="pt-4 border-t border-dashed border-slate-200 dark:border-midnight-700">
                  {isExpanded && (
                      <div className="pb-6 space-y-5 animate-fadeIn">
                          <div className="space-y-1">
                              <span className="accent-mono !text-[10px]">Problem</span>
                              <p className="text-xs text-slate-700 dark:text-slate-300">{project.extendedDetails.problem}</p>
                          </div>
                          <div className="space-y-1">
                              <span className="accent-mono !text-[10px] !text-horizon-gold">Solution</span>
                              <p className="text-xs text-slate-700 dark:text-slate-300">{project.extendedDetails.solution}</p>
                          </div>
                          <div className="space-y-1">
                              <span className="accent-mono !text-[10px] !text-emerald-500">Results</span>
                              <p className="text-xs text-slate-700 dark:text-slate-300">{project.extendedDetails.results}</p>
                          </div>
                      </div>
                  )}
                   <button
                      onClick={onToggle}
                      className="w-full py-4 flex items-center justify-center gap-3 text-[11px] font-mono font-bold text-slate-500 hover:text-horizon-sky transition-colors"
                    >
                      {isExpanded ? 'Hide Details' : 'View Case Study'}
                      {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </button>
               </div>
            )}
         </div>
      </div>

      {/* Footer - Pinned to the very bottom */}
      <div className="p-6 bg-slate-50/50 dark:bg-midnight-900/40 border-t border-slate-200 dark:border-midnight-700 flex items-center justify-between">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="accent-mono !text-slate-600 dark:!text-slate-400 hover:!text-horizon-sky flex items-center">
                <Github className="h-4 w-4 mr-2" /> SOURCE
            </a>
            {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary !px-4 !py-2 !text-[10px]"
                >
                    Launch <ArrowUpRight className="h-4 w-4 ml-1" />
                </a>
            )}
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const categories: (ProjectCategory | 'All')[] = [
    'All',
    'QA & Systems Engineering',
    'AI / LLM / NLP Systems',
    'Machine Learning Systems',
    'Backend & API Development',
    'Data Analytics & Business Intelligence'
  ];

  const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'All'>('All');
  const [expandedProjectId, setExpandedProjectId] = useState<number | null>(null);

  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);
  
  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'AI / LLM / NLP Systems': return <Brain className="w-4 h-4" />;
      case 'Machine Learning Systems': return <Network className="w-4 h-4" />;
      case 'Backend & API Development': return <Server className="w-4 h-4" />;
      case 'Data Analytics & Business Intelligence': return <Database className="w-4 h-4" />;
      case 'QA & Systems Engineering': return <ShieldCheck className="w-4 h-4" />;
      default: return <Code className="w-4 h-4" />;
    }
  };

  return (
    <section id="projects" className="py-32 w-full bg-white dark:bg-midnight-950 relative">
      <div className="section-container">
        <div className="mb-20">
            <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-10 border-b border-slate-200 dark:border-midnight-800 pb-12">
                <div className="space-y-4">
                    <span className="accent-mono flex items-center gap-2">
                        <div className="w-8 h-px bg-horizon-sky"></div> Directory_Listing
                    </span>
                    <h2 className="text-slate-900 dark:text-white">Selected Works.</h2>
                </div>

                <div className="flex flex-wrap gap-2 p-1 bg-slate-100 dark:bg-midnight-900 rounded-2xl w-fit">
                    {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`flex items-center gap-2 px-6 py-3 rounded-xl text-[11px] font-mono font-bold transition-all ${
                        activeCategory === cat
                            ? 'bg-white dark:bg-midnight-800 text-horizon-sky shadow-xl'
                            : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
                        }`}
                    >
                        {cat === 'All' ? 'View All' : cat.split(' ')[0]}
                    </button>
                    ))}
                </div>
            </div>
        </div>

        {/* items-stretch ensures all items in a row are equal height */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch">
          {filteredProjects.map((project) => (
            <div key={project.id} className="flex">
              <ProjectCard 
                  project={project} 
                  isExpanded={expandedProjectId === project.id}
                  onToggle={() => setExpandedProjectId(expandedProjectId === project.id ? null : project.id)}
                  getCategoryIcon={getCategoryIcon}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;