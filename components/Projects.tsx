import React, { useState } from 'react';
import { ExternalLink, Github, Code, Brain, Database, Server, ChevronDown, ChevronUp, Network } from 'lucide-react';
import { PROJECTS } from '../constants';
import { ProjectCategory } from '../types';

const Projects: React.FC = () => {
  const categories: ProjectCategory[] = [
    'AI / LLM / NLP Systems',
    'Machine Learning Systems',
    'Backend & API Development',
    'Data Analytics & Business Intelligence'
  ];

  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('AI / LLM / NLP Systems');
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
      default: return <Code className="w-4 h-4" />;
    }
  };

  return (
    <section id="projects" className="py-32 w-full bg-horizon-light dark:bg-midnight-900 transition-colors duration-500 relative">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="mb-16 border-b border-slate-300 dark:border-midnight-800 pb-8">
            <span className="text-horizon-sky font-mono text-sm font-bold tracking-wider uppercase mb-3 block">
                ./portfolio
            </span>
            <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-8">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white font-sans tracking-tight mb-4">
                        Built Systems
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl font-sans">
                        A selection of production-ready architectures, RAG pipelines, and analytical tools.
                    </p>
                </div>
                
                <div className="flex flex-wrap gap-3">
                    {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => {
                            setActiveCategory(cat);
                            setExpandedProjectId(null); 
                        }}
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-mono font-bold transition-all duration-300 border ${
                        activeCategory === cat
                            ? 'bg-midnight-900 dark:bg-white text-white dark:text-midnight-900 border-midnight-900 dark:border-white shadow-lg scale-105'
                            : 'bg-white dark:bg-midnight-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-midnight-700 hover:border-horizon-sky dark:hover:border-horizon-sky hover:bg-slate-50'
                        }`}
                    >
                        {getCategoryIcon(cat)}
                        {cat.split(' ')[0]}
                        <span className="hidden sm:inline">{cat.substring(cat.split(' ')[0].length)}</span>
                    </button>
                    ))}
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeIn items-start">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group flex flex-col bg-white dark:bg-midnight-800 rounded-2xl border border-slate-200 dark:border-midnight-700 hover:border-horizon-sky dark:hover:border-horizon-sky transition-all duration-500 hover:shadow-xl shadow-sm h-full"
            >
              <div className="p-8 pb-0 flex-grow">
                 <div className="flex justify-between items-start mb-6">
                    <div>
                        <span className="text-xs font-mono font-bold text-slate-400 block mb-2">ID: {project.id.toString().padStart(3, '0')}</span>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-horizon-sky transition-colors font-sans leading-tight">
                        {project.title}
                        </h3>
                    </div>
                    {project.featured && (
                         <span className="flex items-center gap-1 bg-horizon-sky/10 text-horizon-sky text-[10px] font-bold px-3 py-1 rounded-full border border-horizon-sky/20 uppercase tracking-wide font-mono">
                           Featured
                         </span>
                    )}
                 </div>

                 <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-8 font-sans font-medium">
                    {project.description}
                 </p>

                 <div className="flex flex-wrap gap-x-3 gap-y-2 mb-8">
                    {project.techStack.map(tech => (
                        <span key={tech} className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-midnight-900 text-slate-700 dark:text-slate-300 text-xs font-mono font-bold border border-slate-200 dark:border-midnight-700">
                            {tech}
                        </span>
                    ))}
                 </div>
              </div>

              {project.extendedDetails && (
                 <div className="px-8 border-t border-dashed border-slate-200 dark:border-midnight-700">
                    {expandedProjectId === project.id && (
                        <div className="py-6 space-y-4 animate-fadeIn">
                            <div className="bg-slate-50 dark:bg-midnight-900 p-4 rounded-lg text-sm font-mono text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-midnight-700 leading-relaxed">
                                <span className="text-horizon-sky font-bold block mb-1 uppercase tracking-wider">Problem</span> {project.extendedDetails.problem}
                            </div>
                            <div className="bg-slate-50 dark:bg-midnight-900 p-4 rounded-lg text-sm font-mono text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-midnight-700 leading-relaxed">
                                <span className="text-horizon-gold font-bold block mb-1 uppercase tracking-wider">Solution</span> {project.extendedDetails.solution}
                            </div>
                        </div>
                    )}
                     <button
                        onClick={(e) => {
                            e.stopPropagation(); 
                            toggleProjectDetails(project.id);
                        }}
                        className="w-full py-4 flex items-center justify-between text-xs font-mono font-bold text-slate-500 hover:text-horizon-sky transition-colors tracking-wide"
                      >
                        {expandedProjectId === project.id ? 'CLOSE_DETAILS' : 'VIEW_CASE_STUDY'}
                        {expandedProjectId === project.id ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                      </button>
                 </div>
              )}

              <div className="p-5 bg-slate-50 dark:bg-midnight-950/30 rounded-b-2xl border-t border-slate-200 dark:border-midnight-700 flex items-center justify-between">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-xs font-mono font-bold text-slate-600 dark:text-slate-400 hover:text-horizon-sky transition-colors">
                        <Github className="h-4 w-4 mr-2" /> 
                        SOURCE
                    </a>
                    {project.link && (
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center gap-2 text-xs font-mono font-bold text-horizon-sky hover:text-horizon-gold transition-colors"
                        >
                            LIVE DEMO
                            <ExternalLink className="h-4 w-4" />
                        </a>
                    )}
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

export default Projects;