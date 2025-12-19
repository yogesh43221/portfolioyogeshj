import React, { useState } from 'react';
import { ExternalLink, Github, Code, Brain, Database, Server, ChevronDown, ChevronUp, Network, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { PROJECTS } from '../constants';
import { ProjectCategory, Project } from '../types';

const ProjectCard: React.FC<{ 
  project: Project; 
  isExpanded: boolean; 
  onToggle: () => void;
  getCategoryIcon: (cat: ProjectCategory) => React.ReactNode;
}> = ({ project, isExpanded, onToggle, getCategoryIcon }) => {
  return (
    <div 
      className={`group flex flex-col glass-card rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl h-full border border-slate-200 dark:border-midnight-800`}
    >
      {/* Visual Card Top */}
      <div className="p-8 pb-0 flex-grow">
         <div className="flex justify-between items-start mb-6">
            <div className="p-3 bg-horizon-sky/10 dark:bg-horizon-sky/5 rounded-xl border border-horizon-sky/20">
                {getCategoryIcon(project.category)}
            </div>
            {project.featured && (
                 <div className="flex items-center gap-2 bg-horizon-gold/10 text-horizon-gold text-[10px] font-black px-3 py-1 rounded-full border border-horizon-gold/30 uppercase tracking-widest">
                   Featured
                 </div>
            )}
         </div>

         <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-horizon-sky transition-colors font-sans mb-4 leading-tight">
            {project.title}
         </h3>

         <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8 font-sans font-medium">
            {project.description}
         </p>

         <div className="flex flex-wrap gap-2 mb-10">
            {project.techStack.map(tech => (
                <span key={tech} className="px-3 py-1.5 rounded-lg text-[10px] font-mono font-bold border bg-slate-50 dark:bg-midnight-900/50 text-slate-700 dark:text-slate-400 border-slate-200 dark:border-midnight-700">
                    {tech}
                </span>
            ))}
         </div>
      </div>

      {/* Case Study Section */}
      {project.extendedDetails && (
         <div className="px-8">
            {isExpanded && (
                <div className="py-6 space-y-5 animate-fadeIn border-t border-slate-200 dark:border-midnight-700">
                    <div className="space-y-2">
                        <span className="text-[10px] font-black text-horizon-sky uppercase tracking-widest">Problem</span>
                        <p className="text-xs font-sans text-slate-700 dark:text-slate-300 leading-relaxed">{project.extendedDetails.problem}</p>
                    </div>
                    <div className="space-y-2">
                        <span className="text-[10px] font-black text-horizon-gold uppercase tracking-widest">Solution</span>
                        <p className="text-xs font-sans text-slate-700 dark:text-slate-300 leading-relaxed">{project.extendedDetails.solution}</p>
                    </div>
                    <div className="space-y-2">
                        <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">Results</span>
                        <p className="text-xs font-sans text-slate-700 dark:text-slate-300 leading-relaxed">{project.extendedDetails.results}</p>
                    </div>
                    {project.extendedDetails.contributions && (
                        <div className="space-y-2">
                            <span className="text-[10px] font-black text-indigo-500 uppercase tracking-widest">Contributions</span>
                            <ul className="space-y-1">
                                {project.extendedDetails.contributions.map((c, i) => (
                                    <li key={i} className="text-xs font-sans text-slate-700 dark:text-slate-300 flex items-start gap-2">
                                        <div className="w-1 h-1 bg-indigo-500 rounded-full mt-1.5 flex-shrink-0"></div>
                                        {c}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            )}
             <button
                onClick={(e) => {
                    e.stopPropagation(); 
                    onToggle();
                }}
                className="w-full py-6 flex items-center justify-center gap-3 text-xs font-mono font-bold text-slate-500 hover:text-horizon-sky transition-colors border-t border-dashed border-slate-200 dark:border-midnight-700"
              >
                {isExpanded ? 'Hide Details' : 'View Case Study'}
                {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </button>
         </div>
      )}

      {/* Footer Actions */}
      <div className="p-6 bg-slate-50/50 dark:bg-midnight-900/40 border-t border-slate-200 dark:border-midnight-700 flex items-center justify-between mt-auto">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-xs font-mono font-bold text-slate-600 dark:text-slate-400 hover:text-horizon-sky transition-colors">
                <Github className="h-4 w-4 mr-2" /> 
                SOURCE
            </a>
            {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-xs font-mono font-bold text-white bg-slate-900 dark:bg-horizon-sky px-4 py-2 rounded-xl hover:opacity-90 transition-all"
                >
                    Launch
                    <ArrowUpRight className="h-4 w-4" />
                </a>
            )}
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const categories: ProjectCategory[] = [
    'QA & Systems Engineering',
    'AI / LLM / NLP Systems',
    'Machine Learning Systems',
    'Backend & API Development',
    'Data Analytics & Business Intelligence'
  ];

  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('QA & Systems Engineering');
  const [expandedProjectId, setExpandedProjectId] = useState<number | null>(null);

  const filteredProjects = PROJECTS.filter(p => p.category === activeCategory);
  
  const toggleProjectDetails = (projectId: number) => {
    setExpandedProjectId(prev => (prev === projectId ? null : projectId));
  };

  const getCategoryIcon = (cat: ProjectCategory) => {
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
    <section id="projects" className="py-32 w-full bg-white dark:bg-midnight-950 transition-colors duration-500 relative">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header Section */}
        <div className="mb-20">
            <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-10 border-b border-slate-200 dark:border-midnight-800 pb-12">
                <div className="space-y-4">
                    <span className="text-horizon-sky font-mono text-sm font-bold tracking-widest uppercase flex items-center gap-2">
                        <div className="w-8 h-px bg-horizon-sky"></div>
                        Portfolio_Directory
                    </span>
                    <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white font-sans tracking-tight">
                        Selected Works.
                    </h2>
                </div>

                {/* Filter Pills */}
                <div className="flex flex-wrap gap-2 p-1 bg-slate-100 dark:bg-midnight-900 rounded-2xl w-fit">
                    {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => {
                            setActiveCategory(cat);
                            setExpandedProjectId(null); 
                        }}
                        className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-mono font-bold transition-all duration-300 ${
                        activeCategory === cat
                            ? 'bg-white dark:bg-midnight-800 text-horizon-sky shadow-xl scale-[1.02]'
                            : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
                        }`}
                    >
                        {getCategoryIcon(cat)}
                        {cat.split(' ')[0]}
                    </button>
                    ))}
                </div>
            </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 animate-fadeIn items-start">
          {filteredProjects.map((project) => (
            <ProjectCard 
                key={project.id} 
                project={project} 
                isExpanded={expandedProjectId === project.id}
                onToggle={() => toggleProjectDetails(project.id)}
                getCategoryIcon={getCategoryIcon}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-slate-500 dark:text-slate-400 font-mono">No projects found in this category.</p>
          </div>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-midnight-800 to-transparent"></div>
    </section>
  );
};

export default Projects;