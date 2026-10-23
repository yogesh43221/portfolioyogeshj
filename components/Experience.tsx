import React, { useState } from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  ArrowUpRight, 
  ExternalLink, 
  ChevronDown, 
  ChevronUp, 
  Code, 
  Database, 
  ShieldCheck, 
  Settings, 
  Microscope, 
  TrendingUp,
  BookOpen,
  Award,
  CheckCircle2
} from 'lucide-react';
import { 
  EXPERIENCE, 
  EDUCATION, 
  ACHIEVEMENTS, 
  PUBLICATIONS, 
  CERTIFICATIONS, 
  ALL_CERTIFICATIONS_URL, 
  EARLY_ENGINEERING 
} from '../constants';
import SkillNetwork from './SkillNetwork';

const getCategoryIcon = (type: string) => {
  switch (type) {
    case 'engineering': return <Code className="h-3.5 w-3.5 text-sky-600 dark:text-sky-400" />;
    case 'data': return <Database className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" />;
    case 'qa': return <ShieldCheck className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />;
    case 'systems': return <Settings className="h-3.5 w-3.5 text-slate-600 dark:text-slate-400" />;
    case 'research': return <Microscope className="h-3.5 w-3.5 text-purple-600 dark:text-purple-400" />;
    case 'analytics': return <TrendingUp className="h-3.5 w-3.5 text-rose-600 dark:text-rose-400" />;
    default: return <Code className="h-3.5 w-3.5 text-slate-600 dark:text-slate-400" />;
  }
};

const ExperienceCard: React.FC<{ job: any; index: number }> = ({ job, index }) => {
  const isPrimaryInternship = job.company.toLowerCase().includes('hub9');

  return (
    <article className="relative pl-6 sm:pl-8 group">
      {/* Timeline Node */}
      <div 
        className={`absolute -left-[9px] top-1.5 h-4 w-4 rounded-full ring-4 ring-[#FAF7F2] dark:ring-[#0E1117] transition-colors ${
          isPrimaryInternship 
            ? 'bg-horizon-sky ring-sky-100 dark:ring-sky-950/60' 
            : 'bg-slate-300 dark:bg-slate-700 group-hover:bg-amber-500'
        }`}
        aria-hidden="true"
      />

      {/* Role Card Container */}
      <div className="rounded-2xl sm:rounded-3xl border border-amber-900/15 dark:border-slate-800 bg-[#FFFDF9] dark:bg-[#121620] shadow-2xs hover:shadow-sm transition-shadow p-5 sm:p-7">
        
        {/* Header Metadata */}
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
          <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white font-sans tracking-tight">
            {job.role}
          </h4>
          <span className="text-xs font-mono text-slate-500 dark:text-slate-400 tabular-nums">
            {job.period}
          </span>
        </div>

        {/* Company & Location */}
        <div className="text-sm font-mono font-bold text-sky-800 dark:text-sky-400 mb-3">
          {job.company}
        </div>

        {/* Short Summary Description */}
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans mb-5">
          {job.description}
        </p>

        {/* Modular Achievements Grid */}
        <div className="space-y-4 pt-4 border-t border-amber-900/10 dark:border-slate-800">
          {job.modularAchievements.map((block: any, idx: number) => (
            <div key={idx} className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="p-1 rounded bg-[#FAF5EC] dark:bg-slate-800 border border-amber-900/10 dark:border-slate-700">
                  {getCategoryIcon(block.iconType)}
                </span>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                  {block.title}
                </span>
              </div>

              <ul className="space-y-1.5 pl-6">
                {block.points.map((pt: string, pIdx: number) => (
                  <li key={pIdx} className="flex items-start text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                    <span className="mr-2.5 mt-1.5 w-1 h-1 bg-amber-600 dark:text-amber-400 rounded-full flex-shrink-0" aria-hidden="true"></span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </article>
  );
};

export const Experience: React.FC = () => {
  const [showEarlyCareer, setShowEarlyCareer] = useState(false);

  return (
    <section 
      id="experience" 
      className="py-16 sm:py-20 lg:py-28 w-full bg-[#FAF7F2] dark:bg-[#0E1117] transition-colors duration-150 relative scroll-mt-24 sm:scroll-mt-28"
      aria-label="Engineering Trajectory and Research Publications"
    >
      <div className="section-container max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="border-b border-amber-900/15 dark:border-slate-800 pb-8 mb-10 sm:mb-14">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                <span className="text-xs font-mono font-bold tracking-wider uppercase text-amber-800 dark:text-amber-400">
                  Engineering Trajectory · Field Journal
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white font-sans tracking-tight leading-tight">
                Experience &amp; Research Records
              </h2>
            </div>

            <p className="text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed text-sm sm:text-base md:text-lg font-sans font-medium">
              Practical software engineering across QA test automation, clinical workflows, backend services, and peer-reviewed research publications.
            </p>
          </div>
        </div>

        {/* 2-Column Split: Experience Journal (Left 7 cols) & Publications/Credentials (Right 5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* LEFT COLUMN: Career Experience Timeline */}
          <div className="lg:col-span-7 space-y-12">
            
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Briefcase className="w-5 h-5 text-horizon-sky" />
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-sans tracking-tight">
                  Professional Experience
                </h3>
              </div>

              {/* Vertical Timeline Track */}
              <div className="relative border-l-2 border-amber-900/15 dark:border-slate-800 ml-2 space-y-8 sm:space-y-10">
                {EXPERIENCE.map((job, idx) => (
                  <ExperienceCard key={job.id} job={job} index={idx} />
                ))}
              </div>

              {/* Collapsible Early Engineering Foundation */}
              <div className="mt-8 ml-2 border-l-2 border-dashed border-amber-900/20 dark:border-slate-800/60 pl-6 sm:pl-8">
                <button
                  onClick={() => setShowEarlyCareer(!showEarlyCareer)}
                  className="flex items-center gap-2 text-xs font-mono font-bold text-slate-500 dark:text-slate-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors uppercase tracking-wider py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-horizon-sky rounded-md"
                  aria-expanded={showEarlyCareer}
                >
                  {showEarlyCareer ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  <span>Prior Engineering Foundation (Aeron Systems)</span>
                </button>

                {showEarlyCareer && (
                  <div className="mt-4 space-y-6 animate-fadeIn">
                    {EARLY_ENGINEERING.map((job, idx) => (
                      <ExperienceCard key={job.id} job={job} index={idx} />
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Education Section */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap className="w-5 h-5 text-horizon-sky" />
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-sans tracking-tight">
                  Academic Foundation
                </h3>
              </div>

              <div className="relative border-l-2 border-amber-900/15 dark:border-slate-800 ml-2">
                {EDUCATION.map((edu) => (
                  <div key={edu.id} className="relative pl-6 sm:pl-8 group">
                    <div className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-slate-300 dark:bg-slate-700 ring-4 ring-[#FAF7F2] dark:ring-[#0E1117] group-hover:bg-horizon-sky transition-colors"></div>
                    
                    <div className="rounded-2xl sm:rounded-3xl border border-amber-900/15 dark:border-slate-800 bg-[#FFFDF9] dark:bg-[#121620] p-5 sm:p-6 shadow-2xs">
                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white font-sans">
                          {edu.degree}
                        </h4>
                        <span className="text-xs font-mono text-slate-500 dark:text-slate-400 tabular-nums">
                          {edu.period}
                        </span>
                      </div>

                      <div className="text-sm font-mono text-sky-800 dark:text-sky-400 font-bold mb-2">
                        {edu.institution}
                      </div>

                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Research Publications Spotlight, Skills & Accreditations */}
          <div className="lg:col-span-5 space-y-10">
            
            {/* RESEARCH PUBLICATIONS SPOTLIGHT */}
            <div className="rounded-2xl sm:rounded-3xl border border-amber-900/15 dark:border-slate-800 bg-[#FFFDF9] dark:bg-[#121620] p-6 sm:p-8 shadow-sm">
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-amber-900/10 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-amber-700 dark:text-amber-400" />
                  <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                    Research Publications
                  </h3>
                </div>
                <span className="text-xs font-mono text-slate-400">
                  2 Peer-Reviewed Papers
                </span>
              </div>

              <div className="space-y-8">
                {PUBLICATIONS.map((pub, idx) => {
                  const isIEEE = pub.conference.toLowerCase().includes('ieee');
                  const publisherName = isIEEE ? 'IEEE International Conference' : 'Springer Nature';

                  return (
                    <article 
                      key={pub.id}
                      className="group border-b last:border-b-0 border-amber-900/10 dark:border-slate-800/80 pb-6 last:pb-0"
                    >
                      {/* Publisher Tagline */}
                      <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 mb-2">
                        <span className="font-bold text-amber-800 dark:text-amber-400">
                          {publisherName}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span className="tabular-nums">{pub.year}</span>
                      </div>

                      {/* Paper Title */}
                      <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-sans leading-snug tracking-tight mb-2.5">
                        {pub.title}
                      </h4>

                      {/* Summary */}
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans mb-4">
                        {pub.summary}
                      </p>

                      {/* Verified Publisher Links */}
                      <div className="flex flex-wrap items-center gap-3 pt-1">
                        <a 
                          href={pub.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-bold text-slate-800 dark:text-slate-200 bg-[#FAF5EC] dark:bg-slate-800 hover:bg-amber-100 dark:hover:bg-slate-700 transition-colors border border-amber-900/10 dark:border-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-horizon-sky"
                          title={`Open ${publisherName} official page for ${pub.title}`}
                        >
                          <span>{isIEEE ? 'IEEE Xplore Page' : 'Springer Chapter'}</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>

                        {pub.doi && (
                          <a 
                            href={pub.doi} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-mono text-sky-700 dark:text-sky-400 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-horizon-sky py-1"
                            title={`Digital Object Identifier: ${pub.doi}`}
                          >
                            <span>DOI: {pub.doi.replace('https://doi.org/', '')}</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    </article>
                  );
                })}
              </div>

              <div className="mt-6 pt-4 border-t border-amber-900/10 dark:border-slate-800 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                Official peer-reviewed publications with permanent Digital Object Identifiers.
              </div>
            </div>

            {/* TECHNICAL SKILLS MATRIX */}
            <div className="rounded-2xl sm:rounded-3xl border border-amber-900/15 dark:border-slate-800 bg-[#FFFDF9] dark:bg-[#121620] p-6 sm:p-8 shadow-sm">
              <SkillNetwork />
            </div>

            {/* VERIFIED CERTIFICATIONS */}
            <div className="rounded-2xl sm:rounded-3xl border border-amber-900/15 dark:border-slate-800 bg-[#FFFDF9] dark:bg-[#121620] p-6 sm:p-8 shadow-sm">
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-amber-900/10 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-horizon-sky" />
                  <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                    Verified Certifications
                  </h3>
                </div>
                <a 
                  href={ALL_CERTIFICATIONS_URL} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-xs font-mono font-bold text-horizon-sky hover:underline inline-flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-horizon-sky"
                >
                  <span>All</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <ul className="space-y-4">
                {CERTIFICATIONS.map((cert) => (
                  <li key={cert.id} className="flex items-start justify-between gap-3 text-xs sm:text-sm">
                    <a 
                      href={cert.link} 
                      target={cert.link !== "#" ? "_blank" : "_self"} 
                      rel="noopener noreferrer"
                      className="group flex-1"
                    >
                      <span className="font-bold text-slate-900 dark:text-white group-hover:text-horizon-sky transition-colors font-sans flex items-center gap-1.5">
                        {cert.title}
                        {cert.link && cert.link !== "#" && (
                          <ArrowUpRight className="w-3 h-3 text-slate-400 group-hover:text-horizon-sky transition-colors" />
                        )}
                      </span>
                      <span className="text-xs text-slate-500 font-sans block mt-0.5">
                        {cert.issuer}
                      </span>
                    </a>
                    <span className="text-xs font-mono text-slate-400 tabular-nums">
                      {cert.date}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* HONORS & COMPETITIVE ENGINEERING */}
            <div className="rounded-2xl sm:rounded-3xl border border-amber-900/15 dark:border-slate-800 bg-[#FFFDF9] dark:bg-[#121620] p-6 sm:p-8 shadow-sm">
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4 pb-3 border-b border-amber-900/10 dark:border-slate-800">
                Honors &amp; Mentorship
              </h3>
              <ul className="space-y-4">
                {ACHIEVEMENTS.map((ach) => (
                  <li key={ach.id} className="text-xs sm:text-sm">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-bold text-slate-900 dark:text-white font-sans">
                        {ach.title}
                      </span>
                      {ach.link && (
                        <a 
                          href={ach.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-1 rounded text-slate-400 hover:text-horizon-sky transition-colors"
                          title="View Verification"
                        >
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed font-sans">
                      {ach.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;