import React from 'react';
import { PROFILE, EXPERIENCE, PUBLICATIONS } from '../constants';

export interface CommandOutput {
  id?: string;
  cmd: string;
  output: React.ReactNode;
  isLoading?: boolean;
}

export interface TerminalExecutionResult {
  output?: React.ReactNode;
  isClear?: boolean;
  isAsk?: boolean;
  askQuery?: string;
}

export const executeTerminalCommand = (rawCmd: string): TerminalExecutionResult => {
  const trimmed = rawCmd.trim();
  const lower = trimmed.toLowerCase();

  if (!lower) {
    return { output: null };
  }

  // Handle explicit "ask <query>" command
  if (lower.startsWith('ask')) {
    const query = trimmed.slice(3).trim();
    if (!query) {
      return {
        output: (
          <div className="space-y-1 text-xs font-mono text-amber-700 dark:text-amber-400 min-w-0">
            <p>Usage: <code className="text-slate-900 dark:text-white font-bold">ask &lt;question&gt;</code></p>
            <p className="text-slate-600 dark:text-slate-400 text-[11px] font-sans">
              Example: <code className="text-sky-700 dark:text-sky-300">ask What projects are in the portfolio?</code>
            </p>
          </div>
        )
      };
    }
    return { isAsk: true, askQuery: query };
  }

  // Natural language query detection in CLI (e.g. "what projects...", "how was orbitdesk tested?")
  const isQuestion = /^(what|how|why|tell|explain|can|does|is|who)\b/i.test(lower);
  if (isQuestion && lower.split(/\s+/).length > 2) {
    return { isAsk: true, askQuery: trimmed };
  }

  switch (lower) {
    case 'help':
      return {
        output: (
          <div className="space-y-2 text-xs text-slate-800 dark:text-slate-300 font-mono min-w-0">
            <p className="text-sky-800 dark:text-sky-400 font-bold">YJ-CLI // Available Commands:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[11px] min-w-0">
              <p className="min-w-0 truncate"><span className="text-emerald-700 dark:text-emerald-400 font-bold">whoami</span> — Identity, bio &amp; focus</p>
              <p className="min-w-0 truncate"><span className="text-emerald-700 dark:text-emerald-400 font-bold">stack</span> — Core engineering toolkit</p>
              <p className="min-w-0 truncate"><span className="text-emerald-700 dark:text-emerald-400 font-bold">hub9</span> — Clinical QA &amp; API internship</p>
              <p className="min-w-0 truncate"><span className="text-emerald-700 dark:text-emerald-400 font-bold">projects</span> — 7 verified software projects</p>
              <p className="min-w-0 truncate"><span className="text-emerald-700 dark:text-emerald-400 font-bold">ieee</span> — IEEE 2023 fall detection paper</p>
              <p className="min-w-0 truncate"><span className="text-emerald-700 dark:text-emerald-400 font-bold">springer</span> — Springer Nature 2025 TinyML paper</p>
              <p className="min-w-0 truncate"><span className="text-emerald-700 dark:text-emerald-400 font-bold">research</span> — Both peer-reviewed publications</p>
              <p className="min-w-0 truncate"><span className="text-emerald-700 dark:text-emerald-400 font-bold">contact</span> — Email, GitHub, LinkedIn</p>
              <p className="min-w-0 truncate"><span className="text-sky-700 dark:text-sky-300 font-bold">ask &lt;q&gt;</span> — Ask the Digital Twin directly in CLI</p>
              <p className="min-w-0 truncate"><span className="text-emerald-700 dark:text-emerald-400 font-bold">clear</span> — Reset terminal buffer</p>
            </div>
          </div>
        )
      };

    case 'whoami':
      return {
        output: (
          <div className="text-xs space-y-1.5 text-slate-800 dark:text-slate-300 font-sans min-w-0">
            <p className="font-bold text-slate-900 dark:text-white text-sm font-sans">{PROFILE.name}</p>
            <p className="text-sky-800 dark:text-sky-400 font-mono text-xs font-semibold">{PROFILE.title}</p>
            <p className="text-slate-700 dark:text-slate-300 mt-1 leading-relaxed text-[12px] break-words">{PROFILE.shortBio}</p>
            <p className="text-slate-600 dark:text-slate-400 text-[11px] font-mono mt-1">Location: {PROFILE.location} · Status: Open to opportunities</p>
          </div>
        )
      };

    case 'stack':
      return {
        output: (
          <div className="text-xs space-y-2 text-slate-800 dark:text-slate-300 font-sans min-w-0">
            <p className="text-sky-800 dark:text-sky-400 font-bold font-mono">Core Engineering Toolkit:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-[11px] min-w-0">
              <div className="min-w-0 break-words">
                <span className="text-slate-600 dark:text-slate-400 block font-bold font-mono">QA &amp; Automation:</span>
                <span className="text-emerald-700 dark:text-emerald-400 font-mono break-words">Playwright, Pytest, Postman, API Validation, E2E Testing</span>
              </div>
              <div className="min-w-0 break-words">
                <span className="text-slate-600 dark:text-slate-400 block font-bold font-mono">Backend &amp; APIs:</span>
                <span className="text-emerald-700 dark:text-emerald-400 font-mono break-words">Python, FastAPI, REST APIs, PostgreSQL, SQL, Docker</span>
              </div>
              <div className="min-w-0 break-words">
                <span className="text-slate-600 dark:text-slate-400 block font-bold font-mono">AI / LLM &amp; Search:</span>
                <span className="text-emerald-700 dark:text-emerald-400 font-mono break-words">LangChain, FAISS, Hugging Face, Transformers, Vector Search</span>
              </div>
              <div className="min-w-0 break-words">
                <span className="text-slate-600 dark:text-slate-400 block font-bold font-mono">Data &amp; Analytics:</span>
                <span className="text-emerald-700 dark:text-emerald-400 font-mono break-words">Pandas, NumPy, Power BI, SQL Queries</span>
              </div>
            </div>
          </div>
        )
      };

    case 'hub9':
      return {
        output: (
          <div className="text-xs space-y-2 text-slate-800 dark:text-slate-300 font-sans min-w-0">
            <p className="text-sky-800 dark:text-sky-400 font-bold font-mono">Hub9 — Software Development Intern (QA &amp; Backend)</p>
            <p className="text-slate-600 dark:text-slate-400 text-[11px] font-mono">Jan 2025 – Oct 2025 · Clinical Software Workflows</p>
            <ul className="list-disc pl-4 space-y-1 text-slate-700 dark:text-slate-300 text-[11px] leading-relaxed break-words">
              <li>Developed Playwright test flows and validated clinical workflows across dev/staging environments.</li>
              <li>Used Postman to validate REST API endpoint behavior, payload schemas, and error boundaries.</li>
              <li>Contributed to FastAPI backend workflows and formulated SQL queries in PostgreSQL.</li>
              <li>Documented test cases, plans, and defects in Jira and Confluence.</li>
            </ul>
          </div>
        )
      };

    case 'projects':
      return {
        output: (
          <div className="text-xs space-y-2 text-slate-800 dark:text-slate-300 font-mono min-w-0">
            <p className="text-sky-800 dark:text-sky-400 font-bold">The 7 Verified Software Projects:</p>
            <div className="space-y-1.5 text-[11px] min-w-0">
              <p className="break-words"><span className="text-emerald-700 dark:text-emerald-400 font-bold">1. OrbitDesk Support Agent</span> — Multi-turn agent with intent routing &amp; Pytest (Repo)</p>
              <p className="break-words"><span className="text-emerald-700 dark:text-emerald-400 font-bold">2. Radiology Report Labeling</span> — FastAPI, PostgreSQL, Docker (Repo)</p>
              <p className="break-words"><span className="text-emerald-700 dark:text-emerald-400 font-bold">3. Booking Analytics RAG</span> — LangChain, Pinecone, FAISS, SQL (Repo)</p>
              <p className="break-words"><span className="text-emerald-700 dark:text-emerald-400 font-bold">4. DocuMate Document Q&amp;A</span> — Vector search &amp; RAG (Repo)</p>
              <p className="break-words"><span className="text-emerald-700 dark:text-emerald-400 font-bold">5. Transaction Fraud Detection</span> — Imbalanced classification &amp; SMOTE (Repo)</p>
              <p className="break-words"><span className="text-emerald-700 dark:text-emerald-400 font-bold">6. Vidhya Vision</span> — Course Finder with FAISS (Repo + Live Demo)</p>
              <p className="break-words"><span className="text-emerald-700 dark:text-emerald-400 font-bold">7. Eklavya AI Generator</span> — Educational study generator (Repo + Live Demo)</p>
            </div>
          </div>
        )
      };

    case 'ieee': {
      const ieee = PUBLICATIONS[0];
      return {
        output: (
          <div className="text-xs space-y-1.5 text-slate-800 dark:text-slate-300 font-sans min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-sky-800 dark:text-sky-400 font-bold font-mono">IEEE International Conference · 2023</span>
            </div>
            <p className="text-slate-900 dark:text-white font-semibold text-[11px] leading-snug break-words">{ieee?.title}</p>
            <p className="text-slate-600 dark:text-slate-400 text-[11px] leading-relaxed break-words">{ieee?.summary}</p>
            <div className="pt-1 flex flex-wrap items-center gap-3 text-[11px]">
              <a 
                href={ieee?.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-emerald-700 dark:text-emerald-400 underline hover:text-emerald-800 dark:hover:text-emerald-300 font-mono"
              >
                Official IEEE Xplore ↗
              </a>
              {ieee?.doi && (
                <a 
                  href={ieee.doi} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sky-700 dark:text-sky-400 underline hover:text-sky-800 dark:hover:text-sky-300 font-mono"
                >
                  DOI: {ieee.doi.replace('https://doi.org/', '')} ↗
                </a>
              )}
            </div>
          </div>
        )
      };
    }

    case 'springer': {
      const springer = PUBLICATIONS[1];
      return {
        output: (
          <div className="text-xs space-y-1.5 text-slate-800 dark:text-slate-300 font-sans min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-sky-800 dark:text-sky-400 font-bold font-mono">Springer Nature · 2025</span>
            </div>
            <p className="text-slate-900 dark:text-white font-semibold text-[11px] leading-snug break-words">{springer?.title}</p>
            <p className="text-slate-600 dark:text-slate-400 text-[11px] leading-relaxed break-words">{springer?.summary}</p>
            <div className="pt-1 flex flex-wrap items-center gap-3 text-[11px]">
              <a 
                href={springer?.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-emerald-700 dark:text-emerald-400 underline hover:text-emerald-800 dark:hover:text-emerald-300 font-mono"
              >
                Official Springer Nature Chapter ↗
              </a>
              {springer?.doi && (
                <a 
                  href={springer.doi} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sky-700 dark:text-sky-400 underline hover:text-sky-800 dark:hover:text-sky-300 font-mono"
                >
                  DOI: {springer.doi.replace('https://doi.org/', '')} ↗
                </a>
              )}
            </div>
          </div>
        )
      };
    }

    case 'research':
    case 'publications':
      return {
        output: (
          <div className="text-xs space-y-3 text-slate-800 dark:text-slate-300 font-sans min-w-0">
            <p className="text-sky-800 dark:text-sky-400 font-bold font-mono">Peer-Reviewed Scientific Publications (2):</p>
            {PUBLICATIONS.map((pub, idx) => (
              <div key={idx} className="border-l-2 border-slate-300 dark:border-slate-700 pl-3 space-y-1 text-[11px] min-w-0">
                <div className="text-amber-700 dark:text-amber-400 font-mono font-bold">{pub.conference} · {pub.year}</div>
                <p className="text-slate-900 dark:text-white font-semibold leading-snug break-words">{pub.title}</p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed break-words">{pub.summary}</p>
                <div className="flex flex-wrap items-center gap-3 pt-0.5 font-mono">
                  <a href={pub.link} target="_blank" rel="noopener noreferrer" className="text-emerald-700 dark:text-emerald-400 underline hover:text-emerald-800 dark:hover:text-emerald-300">
                    Official Publisher Page ↗
                  </a>
                  {pub.doi && (
                    <a href={pub.doi} target="_blank" rel="noopener noreferrer" className="text-sky-700 dark:text-sky-400 underline hover:text-sky-800 dark:hover:text-sky-300">
                      DOI: {pub.doi.replace('https://doi.org/', '')} ↗
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )
      };

    case 'contact':
      return {
        output: (
          <div className="text-xs space-y-1.5 text-slate-800 dark:text-slate-300 font-mono min-w-0">
            <p className="text-sky-800 dark:text-sky-400 font-bold">Direct Contact Channels:</p>
            <p className="text-[11px] break-words">Email: <a href={`mailto:${PROFILE.email}`} className="text-emerald-700 dark:text-emerald-400 underline">{PROFILE.email}</a></p>
            <p className="text-[11px] break-words">LinkedIn: <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="text-emerald-700 dark:text-emerald-400 underline">linkedin.com/in/yogesh-jadhav ↗</a></p>
            <p className="text-[11px] break-words">GitHub: <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="text-emerald-700 dark:text-emerald-400 underline">github.com/yogesh43221 ↗</a></p>
          </div>
        )
      };

    case 'clear':
      return { output: null, isClear: true };

    default:
      return {
        output: (
          <div className="space-y-1 text-xs text-slate-800 dark:text-slate-300 font-mono min-w-0">
            <p className="text-amber-700 dark:text-amber-400">
              Command &ldquo;{rawCmd}&rdquo; not recognized.
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-[11px] font-sans">
              Type <code className="text-emerald-700 dark:text-emerald-400 font-mono font-bold">help</code> to list available commands, or ask the AI guide directly by typing <code className="text-sky-700 dark:text-sky-300 font-mono font-bold">ask &lt;question&gt;</code>.
            </p>
          </div>
        )
      };
  }
};
