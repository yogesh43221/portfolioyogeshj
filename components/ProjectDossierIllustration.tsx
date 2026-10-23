import React from 'react';

interface ProjectIllustrationProps {
  projectId: number;
  className?: string;
}

/**
 * ProjectDossierIllustration
 * 
 * Hand-crafted, technical blueprint & schematic SVG illustrations for each
 * of Yogesh Jadhav's engineering projects. Built with consistent linework,
 * warm paper/dossier styling, technical node diagrams, and domain-accurate details.
 */
export const ProjectDossierIllustration: React.FC<ProjectIllustrationProps> = ({
  projectId,
  className = "w-full h-48 sm:h-52"
}) => {
  return (
    <div className={`relative overflow-hidden rounded-xl border border-slate-200 dark:border-midnight-700/80 bg-amber-50/30 dark:bg-slate-900/60 select-none ${className}`}>
      {/* Schematic Blueprint Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-25 dark:opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, currentColor 0.75px, transparent 0.75px)`,
          backgroundSize: '16px 16px'
        }}
      />

      {/* PROJECT 1: OrbitDesk Support Agent */}
      {projectId === 1 && (
        <svg viewBox="0 0 460 220" className="w-full h-full block" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="orbit-grad-1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#0284C7" stopOpacity="0.05" />
            </linearGradient>
          </defs>

          {/* Schematic Blueprint Header Label */}
          <text x="18" y="22" fill="#64748B" fontSize="9" fontWeight="bold" fontFamily="monospace">
            FIG 1.0 // INTENT ROUTING &amp; QA TEST MATRIX
          </text>
          <text x="442" y="22" textAnchor="end" fill="#0284C7" fontSize="8" fontWeight="bold" fontFamily="monospace">
            SCHEMA: PYDANTIC v2
          </text>

          {/* Node 1: Incoming Support Ticket */}
          <g transform="translate(20, 42)">
            <rect x="0" y="0" width="105" height="120" rx="6" fill="#FFFFFF" className="dark:fill-slate-800" stroke="#0284C7" strokeWidth="1.8" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.06))" />
            <rect x="0" y="0" width="105" height="22" rx="6" fill="#0284C7" />
            <text x="8" y="15" fill="#FFFFFF" fontSize="8.5" fontWeight="bold" fontFamily="monospace">INCOMING TICKET</text>
            
            <text x="8" y="38" fill="#64748B" fontSize="7.5" fontFamily="monospace">ID: #TK-8492</text>
            <text x="8" y="50" fill="#0F172A" className="dark:fill-slate-200" fontSize="7.5" fontWeight="bold" fontFamily="monospace">"Billing status</text>
            <text x="8" y="60" fill="#0F172A" className="dark:fill-slate-200" fontSize="7.5" fontWeight="bold" fontFamily="monospace">upgrade error"</text>
            
            <rect x="8" y="72" width="89" height="18" rx="3" fill="#F1F5F9" className="dark:fill-slate-700" />
            <text x="12" y="84" fill="#0284C7" fontSize="7" fontWeight="bold" fontFamily="monospace">Channel: REST API</text>

            <rect x="8" y="96" width="89" height="16" rx="3" fill="#FEF3C7" className="dark:fill-amber-950/60" stroke="#F59E0B" strokeWidth="0.8" />
            <text x="12" y="107" fill="#B45309" className="dark:fill-amber-300" fontSize="7" fontWeight="bold" fontFamily="monospace">Priority: P1 High</text>
          </g>

          {/* Connecting Flow Arrow 1 */}
          <path d="M125,102 L165,102" fill="none" stroke="#0284C7" strokeWidth="2" strokeDasharray="3 3" />
          <polygon points="165,102 158,98 158,106" fill="#0284C7" />

          {/* Node 2: Intent Classifier & LangChain Tool Calling */}
          <g transform="translate(168, 36)">
            <rect x="0" y="0" width="135" height="135" rx="8" fill="#F8FAFC" className="dark:fill-slate-800/90" stroke="#334155" strokeWidth="1.8" />
            <rect x="0" y="0" width="135" height="24" rx="8" fill="#1E293B" />
            <text x="8" y="16" fill="#38BDF8" fontSize="8.5" fontWeight="bold" fontFamily="monospace">AGENTIC DISPATCHER</text>
            
            {/* Classification Branches */}
            <g transform="translate(8, 34)">
              <rect x="0" y="0" width="119" height="24" rx="4" fill="#E0F2FE" className="dark:fill-sky-950/70" stroke="#38BDF8" strokeWidth="1" />
              <text x="6" y="11" fill="#0369A1" className="dark:fill-sky-300" fontSize="7.5" fontWeight="bold" fontFamily="monospace">Branch A: Billing API</text>
              <text x="6" y="20" fill="#0284C7" className="dark:fill-sky-400" fontSize="6.5" fontFamily="monospace">Lookup active account</text>

              <rect x="0" y="30" width="119" height="24" rx="4" fill="#F3E8FF" className="dark:fill-purple-950/70" stroke="#C084FC" strokeWidth="1" />
              <text x="6" y="41" fill="#7E22CE" className="dark:fill-purple-300" fontSize="7.5" fontWeight="bold" fontFamily="monospace">Branch B: Tool Call</text>
              <text x="6" y="50" fill="#9333EA" className="dark:fill-purple-400" fontSize="6.5" fontFamily="monospace">execute_invoice_check()</text>

              <rect x="0" y="60" width="119" height="24" rx="4" fill="#ECFDF5" className="dark:fill-emerald-950/70" stroke="#34D399" strokeWidth="1" />
              <text x="6" y="71" fill="#047857" className="dark:fill-emerald-300" fontSize="7.5" fontWeight="bold" fontFamily="monospace">Branch C: Fallback</text>
              <text x="6" y="80" fill="#059669" className="dark:fill-emerald-400" fontSize="6.5" fontFamily="monospace">Human operator redirect</text>
            </g>
          </g>

          {/* Connecting Flow Arrow 2 */}
          <path d="M303,102 L335,102" fill="none" stroke="#10B981" strokeWidth="2" strokeDasharray="3 3" />
          <polygon points="335,102 328,98 328,106" fill="#10B981" />

          {/* Node 3: QA Verification & Output */}
          <g transform="translate(338, 42)">
            <rect x="0" y="0" width="105" height="120" rx="6" fill="#FFFFFF" className="dark:fill-slate-800" stroke="#10B981" strokeWidth="1.8" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.06))" />
            <rect x="0" y="0" width="105" height="22" rx="6" fill="#059669" />
            <text x="8" y="15" fill="#FFFFFF" fontSize="8" fontWeight="bold" fontFamily="monospace">TEST SUITE SCOPE</text>
            
            <g transform="translate(8, 30)">
              <text x="0" y="10" fill="#15803D" className="dark:fill-emerald-400" fontSize="8" fontWeight="bold" fontFamily="monospace">• Intent Routing</text>
              <text x="0" y="24" fill="#0F172A" className="dark:fill-slate-300" fontSize="7" fontFamily="monospace">tests/intent_eval.py</text>
              <text x="0" y="36" fill="#15803D" className="dark:fill-emerald-400" fontSize="7" fontFamily="monospace">• Tool Fallback</text>
              <text x="0" y="48" fill="#15803D" className="dark:fill-emerald-400" fontSize="7" fontFamily="monospace">• Schema Validation</text>
              
              <rect x="0" y="58" width="89" height="18" rx="3" fill="#DCFCE7" className="dark:fill-emerald-950/80" stroke="#22C55E" strokeWidth="0.8" />
              <text x="4" y="70" fill="#166534" className="dark:fill-emerald-300" fontSize="6.8" fontWeight="bold" fontFamily="monospace">Pytest Coverage</text>
            </g>
          </g>

          {/* Bottom Technical Status Bar */}
          <rect x="20" y="184" width="420" height="22" rx="4" fill="#F1F5F9" stroke="#CBD5E1" className="dark:fill-slate-800 dark:stroke-slate-700" strokeWidth="1" />
          <circle cx="34" cy="195" r="4" fill="#10B981" />
          <text x="46" y="198" fill="#475569" className="dark:fill-slate-300" fontSize="8" fontFamily="monospace">
            Stack: Python • FastAPI • LangChain • Pytest • Structured Tool Calling
          </text>
        </svg>
      )}

      {/* PROJECT 2: Radiology Report Labeling & Validation System */}
      {projectId === 2 && (
        <svg viewBox="0 0 460 220" className="w-full h-full block" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="med-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#0D9488" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#14B8A6" stopOpacity="0.05" />
            </linearGradient>
          </defs>

          {/* Schematic Blueprint Header Label */}
          <text x="18" y="22" fill="#64748B" fontSize="9" fontWeight="bold" fontFamily="monospace">
            FIG 2.0 // REST API ARCHITECTURE &amp; SCHEMA CONTRACTS
          </text>
          <text x="442" y="22" textAnchor="end" fill="#0D9488" fontSize="8" fontWeight="bold" fontFamily="monospace">
            DOCKER CONTAINERIZED
          </text>

          {/* Component 1: Report Intake UI Schema */}
          <g transform="translate(18, 42)">
            <rect x="0" y="0" width="112" height="122" rx="6" fill="#FFFFFF" className="dark:fill-slate-800" stroke="#0D9488" strokeWidth="1.8" />
            <rect x="0" y="0" width="112" height="22" rx="6" fill="#0D9488" />
            <text x="8" y="15" fill="#FFFFFF" fontSize="8" fontWeight="bold" fontFamily="monospace">REPORT INTAKE</text>

            <g transform="translate(8, 30)">
              <rect x="0" y="0" width="96" height="16" rx="2" fill="#F0FDFA" className="dark:fill-teal-950/60" stroke="#5EEAD4" strokeWidth="0.8" />
              <text x="6" y="11" fill="#0F766E" className="dark:fill-teal-300" fontSize="7" fontFamily="monospace">Type: Chest X-Ray</text>

              <rect x="0" y="22" width="96" height="16" rx="2" fill="#F0FDFA" className="dark:fill-teal-950/60" stroke="#5EEAD4" strokeWidth="0.8" />
              <text x="6" y="33" fill="#0F766E" className="dark:fill-teal-300" fontSize="7" fontFamily="monospace">Status: Unlabeled</text>

              <rect x="0" y="44" width="96" height="34" rx="2" fill="#F8FAFC" className="dark:fill-slate-700/60" />
              <text x="6" y="56" fill="#64748B" fontSize="6.5" fontFamily="monospace">Findings payload:</text>
              <text x="6" y="66" fill="#0F172A" className="dark:fill-slate-300" fontSize="6.5" fontFamily="monospace">Clear lung fields...</text>
            </g>
          </g>

          {/* Connecting Arrow */}
          <path d="M130,103 L162,103" fill="none" stroke="#0D9488" strokeWidth="2" strokeDasharray="3 3" />
          <polygon points="162,103 155,99 155,107" fill="#0D9488" />

          {/* Component 2: FastAPI Service & JWT Auth Gateway */}
          <g transform="translate(165, 38)">
            <rect x="0" y="0" width="145" height="130" rx="8" fill="#F8FAFC" className="dark:fill-slate-800/90" stroke="#334155" strokeWidth="1.8" />
            <rect x="0" y="0" width="145" height="24" rx="8" fill="#1E293B" />
            <text x="8" y="16" fill="#2DD4BF" fontSize="8" fontWeight="bold" fontFamily="monospace">FASTAPI GATEWAY</text>

            <g transform="translate(8, 32)">
              <rect x="0" y="0" width="129" height="24" rx="4" fill="#CCFBF1" className="dark:fill-teal-950/80" stroke="#2DD4BF" strokeWidth="1" />
              <text x="6" y="11" fill="#115E59" className="dark:fill-teal-200" fontSize="7.5" fontWeight="bold" fontFamily="monospace">POST /reports/label</text>
              <text x="6" y="20" fill="#0F766E" className="dark:fill-teal-400" fontSize="6.5" fontFamily="monospace">JWT Bearer Auth</text>

              <rect x="0" y="30" width="129" height="24" rx="4" fill="#F1F5F9" className="dark:fill-slate-700/80" stroke="#94A3B8" strokeWidth="1" />
              <text x="6" y="41" fill="#1E293B" className="dark:fill-slate-200" fontSize="7.5" fontWeight="bold" fontFamily="monospace">Pydantic Schema Check</text>
              <text x="6" y="50" fill="#059669" className="dark:fill-emerald-400" fontSize="6.5" fontWeight="bold" fontFamily="monospace">✓ Strict Type Bounds</text>

              <rect x="0" y="60" width="129" height="24" rx="4" fill="#EEF2FF" className="dark:fill-indigo-950/70" stroke="#818CF8" strokeWidth="1" />
              <text x="6" y="71" fill="#3730A3" className="dark:fill-indigo-300" fontSize="7.5" fontWeight="bold" fontFamily="monospace">Pytest Contract Suite</text>
              <text x="6" y="80" fill="#4338CA" className="dark:fill-indigo-400" fontSize="6.5" fontFamily="monospace">Isolated Mock DB</text>
            </g>
          </g>

          {/* Connecting Arrow */}
          <path d="M310,103 L340,103" fill="none" stroke="#0D9488" strokeWidth="2" strokeDasharray="3 3" />
          <polygon points="340,103 333,99 333,107" fill="#0D9488" />

          {/* Component 3: PostgreSQL Database Schema */}
          <g transform="translate(343, 44)">
            {/* Cylinder Top */}
            <ellipse cx="48" cy="12" rx="46" ry="10" fill="#E2E8F0" className="dark:fill-slate-700" stroke="#334155" strokeWidth="1.8" />
            {/* Cylinder Body */}
            <rect x="2" y="12" width="92" height="98" fill="#FFFFFF" className="dark:fill-slate-800" stroke="#334155" strokeWidth="1.8" />
            <ellipse cx="48" cy="110" rx="46" ry="10" fill="#E2E8F0" className="dark:fill-slate-700" stroke="#334155" strokeWidth="1.8" />

            {/* Cylinder Contents */}
            <text x="48" y="32" textAnchor="middle" fill="#0F172A" className="dark:fill-white" fontSize="8" fontWeight="bold" fontFamily="monospace">POSTGRESQL</text>
            <line x1="8" y1="40" x2="88" y2="40" stroke="#CBD5E1" strokeWidth="1" />

            <g transform="translate(10, 48)">
              <text x="0" y="10" fill="#0D9488" fontSize="7" fontWeight="bold" fontFamily="monospace">FK: patient_id</text>
              <text x="0" y="22" fill="#0D9488" fontSize="7" fontWeight="bold" fontFamily="monospace">IDX: label_status</text>
              <text x="0" y="34" fill="#059669" fontSize="7" fontWeight="bold" fontFamily="monospace">ACID Compliant</text>
              <text x="0" y="46" fill="#64748B" fontSize="6.5" fontFamily="monospace">Docker Isolated</text>
            </g>
          </g>

          {/* Bottom Technical Status Bar */}
          <rect x="18" y="184" width="424" height="22" rx="4" fill="#F1F5F9" className="dark:fill-slate-800" stroke="#CBD5E1" strokeWidth="1" />
          <circle cx="32" cy="195" r="4" fill="#0D9488" />
          <text x="44" y="198" fill="#475569" className="dark:fill-slate-300" fontSize="8" fontFamily="monospace">
            Stack: FastAPI • PostgreSQL • Docker Compose • Pytest • JWT Authentication
          </text>
        </svg>
      )}

      {/* PROJECT 3: Booking Analytics RAG System */}
      {projectId === 3 && (
        <svg viewBox="0 0 460 220" className="w-full h-full block" xmlns="http://www.w3.org/2000/svg">
          {/* Schematic Blueprint Header Label */}
          <text x="18" y="22" fill="#64748B" fontSize="9" fontWeight="bold" fontFamily="monospace">
            FIG 3.0 // VECTOR RETRIEVAL PIPELINE &amp; SQL CONTEXT
          </text>
          <text x="442" y="22" textAnchor="end" fill="#D97706" fontSize="8" fontWeight="bold" fontFamily="monospace">
            PINECONE + FAISS
          </text>

          {/* Left: User Prompt & Natural Query */}
          <g transform="translate(18, 42)">
            <rect x="0" y="0" width="112" height="122" rx="6" fill="#FFFFFF" className="dark:fill-slate-800" stroke="#D97706" strokeWidth="1.8" />
            <rect x="0" y="0" width="112" height="22" rx="6" fill="#D97706" />
            <text x="8" y="15" fill="#FFFFFF" fontSize="8" fontWeight="bold" fontFamily="monospace">QUERY PROMPT</text>

            <g transform="translate(8, 32)">
              <rect x="0" y="0" width="96" height="42" rx="3" fill="#FFFBEB" className="dark:fill-amber-950/60" stroke="#FDE68A" strokeWidth="0.8" />
              <text x="6" y="14" fill="#92400E" className="dark:fill-amber-300" fontSize="7" fontWeight="bold" fontFamily="monospace">"Compare Q3</text>
              <text x="6" y="24" fill="#92400E" className="dark:fill-amber-300" fontSize="7" fontWeight="bold" fontFamily="monospace">occupancy rates</text>
              <text x="6" y="34" fill="#92400E" className="dark:fill-amber-300" fontSize="7" fontWeight="bold" fontFamily="monospace">vs prior year"</text>

              <rect x="0" y="52" width="96" height="26" rx="3" fill="#F1F5F9" className="dark:fill-slate-700/60" />
              <text x="6" y="64" fill="#475569" className="dark:fill-slate-300" fontSize="6.5" fontFamily="monospace">Embeddings:</text>
              <text x="6" y="73" fill="#0284C7" fontSize="6.5" fontWeight="bold" fontFamily="monospace">text-embedding-3</text>
            </g>
          </g>

          {/* Connecting Arrow */}
          <path d="M130,103 L162,103" fill="none" stroke="#D97706" strokeWidth="2" strokeDasharray="3 3" />
          <polygon points="162,103 155,99 155,107" fill="#D97706" />

          {/* Center: Vector Space & Pinecone Index */}
          <g transform="translate(166, 38)">
            <rect x="0" y="0" width="146" height="130" rx="8" fill="#F8FAFC" className="dark:fill-slate-800/90" stroke="#334155" strokeWidth="1.8" />
            <rect x="0" y="0" width="146" height="24" rx="8" fill="#1E293B" />
            <text x="8" y="16" fill="#FBBF24" fontSize="8" fontWeight="bold" fontFamily="monospace">VECTOR INDEX SPACE</text>

            {/* Vector Coordinate Graph */}
            <g transform="translate(12, 34)">
              <rect x="0" y="0" width="122" height="82" rx="4" fill="#0F172A" />
              {/* Axes */}
              <line x1="10" y1="72" x2="112" y2="72" stroke="#475569" strokeWidth="1" />
              <line x1="10" y1="10" x2="10" y2="72" stroke="#475569" strokeWidth="1" />
              
              {/* Dot Clusters */}
              <circle cx="35" cy="35" r="3" fill="#38BDF8" />
              <circle cx="42" cy="40" r="2.5" fill="#38BDF8" />
              <circle cx="38" cy="45" r="2" fill="#38BDF8" />

              <circle cx="85" cy="25" r="3.5" fill="#F59E0B" />
              <circle cx="92" cy="28" r="2.5" fill="#F59E0B" />
              <circle cx="80" cy="32" r="2" fill="#F59E0B" />

              {/* Distance Line */}
              <line x1="38" y1="40" x2="85" y2="28" stroke="#10B981" strokeWidth="1.2" strokeDasharray="2 2" />
              <text x="46" y="25" fill="#34D399" fontSize="6" fontFamily="monospace">Cosine Sim: 0.92</text>

              <text x="12" y="79" fill="#94A3B8" fontSize="6" fontFamily="monospace">Dense Semantic Match</text>
            </g>
          </g>

          {/* Connecting Arrow */}
          <path d="M312,103 L340,103" fill="none" stroke="#D97706" strokeWidth="2" strokeDasharray="3 3" />
          <polygon points="340,103 333,99 333,107" fill="#D97706" />

          {/* Right: Synthesized Analytics Output */}
          <g transform="translate(343, 42)">
            <rect x="0" y="0" width="100" height="122" rx="6" fill="#FFFFFF" className="dark:fill-slate-800" stroke="#10B981" strokeWidth="1.8" />
            <rect x="0" y="0" width="100" height="22" rx="6" fill="#059669" />
            <text x="8" y="15" fill="#FFFFFF" fontSize="8" fontWeight="bold" fontFamily="monospace">GROUNDED LLM</text>

            <g transform="translate(8, 30)">
              <text x="0" y="10" fill="#15803D" className="dark:fill-emerald-400" fontSize="7.5" fontWeight="bold" fontFamily="monospace">CONTEXT RETRIEVED</text>
              <rect x="0" y="18" width="84" height="42" rx="3" fill="#ECFDF5" className="dark:fill-emerald-950/70" stroke="#34D399" strokeWidth="0.8" />
              <text x="4" y="29" fill="#065F46" className="dark:fill-emerald-300" fontSize="6.5" fontFamily="monospace">"Q3 Occupancy: 87.4%</text>
              <text x="4" y="39" fill="#065F46" className="dark:fill-emerald-300" fontSize="6.5" fontFamily="monospace">YoY comparison</text>
              <text x="4" y="49" fill="#065F46" className="dark:fill-emerald-300" fontSize="6.5" fontFamily="monospace">Context Grounded"</text>

              <text x="0" y="74" fill="#64748B" fontSize="6.5" fontFamily="monospace">Vector Context</text>
            </g>
          </g>

          {/* Bottom Technical Status Bar */}
          <rect x="18" y="184" width="424" height="22" rx="4" fill="#F1F5F9" className="dark:fill-slate-800" stroke="#CBD5E1" strokeWidth="1" />
          <circle cx="32" cy="195" r="4" fill="#D97706" />
          <text x="44" y="198" fill="#475569" className="dark:fill-slate-300" fontSize="8" fontFamily="monospace">
            Stack: LangChain • Pinecone • OpenAI • FAISS • SQL Semantic Query
          </text>
        </svg>
      )}

      {/* PROJECT 4: DocuMate — Document Q&A Assistant */}
      {projectId === 4 && (
        <svg viewBox="0 0 460 220" className="w-full h-full block" xmlns="http://www.w3.org/2000/svg">
          {/* Schematic Blueprint Header Label */}
          <text x="18" y="22" fill="#64748B" fontSize="9" fontWeight="bold" fontFamily="monospace">
            FIG 4.0 // SLIDING WINDOW CHUNKING &amp; SOURCE CITATION
          </text>
          <text x="442" y="22" textAnchor="end" fill="#8B5CF6" fontSize="8" fontWeight="bold" fontFamily="monospace">
            OVERLAP: 200 TOKENS
          </text>

          {/* Left: Input Document Parsing & Sliding Window Chunks */}
          <g transform="translate(18, 42)">
            <rect x="0" y="0" width="112" height="122" rx="6" fill="#FFFFFF" className="dark:fill-slate-800" stroke="#8B5CF6" strokeWidth="1.8" />
            <rect x="0" y="0" width="112" height="22" rx="6" fill="#8B5CF6" />
            <text x="8" y="15" fill="#FFFFFF" fontSize="8" fontWeight="bold" fontFamily="monospace">RAW DOCUMENT</text>

            <g transform="translate(8, 30)">
              {/* Chunk 1 */}
              <rect x="0" y="0" width="96" height="22" rx="2" fill="#F5F3FF" className="dark:fill-purple-950/60" stroke="#C4B5FD" strokeWidth="0.8" />
              <text x="6" y="11" fill="#6D28D9" className="dark:fill-purple-300" fontSize="7" fontWeight="bold" fontFamily="monospace">Chunk #01 [0..1000]</text>
              <text x="6" y="19" fill="#7C3AED" className="dark:fill-purple-400" fontSize="6" fontFamily="monospace">Introduction &amp; Scope</text>

              {/* Overlap Indicator */}
              <rect x="0" y="26" width="96" height="22" rx="2" fill="#EDE9FE" className="dark:fill-purple-950/80" stroke="#A78BFA" strokeWidth="0.8" />
              <text x="6" y="37" fill="#5B21B6" className="dark:fill-purple-200" fontSize="7" fontWeight="bold" fontFamily="monospace">Chunk #02 [800..1800]</text>
              <text x="6" y="45" fill="#6D28D9" className="dark:fill-purple-300" fontSize="6" fontFamily="monospace">Technical Specifications</text>

              {/* Overlap tag */}
              <rect x="0" y="54" width="96" height="18" rx="2" fill="#F1F5F9" className="dark:fill-slate-700/60" />
              <text x="6" y="66" fill="#475569" className="dark:fill-slate-300" fontSize="6.5" fontFamily="monospace">Overlap Preserved</text>
            </g>
          </g>

          {/* Connecting Arrow */}
          <path d="M130,103 L162,103" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="3 3" />
          <polygon points="162,103 155,99 155,107" fill="#8B5CF6" />

          {/* Center: Embeddings & Vector Similarity Engine */}
          <g transform="translate(166, 38)">
            <rect x="0" y="0" width="144" height="130" rx="8" fill="#F8FAFC" className="dark:fill-slate-800/90" stroke="#334155" strokeWidth="1.8" />
            <rect x="0" y="0" width="144" height="24" rx="8" fill="#1E293B" />
            <text x="8" y="16" fill="#C084FC" fontSize="8" fontWeight="bold" fontFamily="monospace">EMBEDDING STORE</text>

            <g transform="translate(10, 32)">
              <rect x="0" y="0" width="124" height="26" rx="4" fill="#F3E8FF" className="dark:fill-purple-950/70" stroke="#C084FC" strokeWidth="1" />
              <text x="6" y="12" fill="#6B21A8" className="dark:fill-purple-200" fontSize="7.5" fontWeight="bold" fontFamily="monospace">FAISS Vector Index</text>
              <text x="6" y="21" fill="#7E22CE" className="dark:fill-purple-300" fontSize="6.5" fontFamily="monospace">Dense Semantic Matching</text>

              <rect x="0" y="32" width="124" height="26" rx="4" fill="#EEF2FF" className="dark:fill-indigo-950/70" stroke="#818CF8" strokeWidth="1" />
              <text x="6" y="44" fill="#3730A3" className="dark:fill-indigo-200" fontSize="7.5" fontWeight="bold" fontFamily="monospace">Top-K Chunk Filter</text>
              <text x="6" y="53" fill="#4338CA" className="dark:fill-indigo-300" fontSize="6.5" fontFamily="monospace">k=4 Relevant Passages</text>

              <rect x="0" y="64" width="124" height="22" rx="4" fill="#ECFDF5" className="dark:fill-emerald-950/70" stroke="#34D399" strokeWidth="1" />
              <text x="6" y="77" fill="#047857" className="dark:fill-emerald-300" fontSize="7.5" fontWeight="bold" fontFamily="monospace">Strict Prompt Framing</text>
            </g>
          </g>

          {/* Connecting Arrow */}
          <path d="M310,103 L340,103" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="3 3" />
          <polygon points="340,103 333,99 333,107" fill="#8B5CF6" />

          {/* Right: Answer Synthesis with Exact Citations */}
          <g transform="translate(343, 42)">
            <rect x="0" y="0" width="100" height="122" rx="6" fill="#FFFFFF" className="dark:fill-slate-800" stroke="#10B981" strokeWidth="1.8" />
            <rect x="0" y="0" width="100" height="22" rx="6" fill="#059669" />
            <text x="8" y="15" fill="#FFFFFF" fontSize="8" fontWeight="bold" fontFamily="monospace">GND RESPONSE</text>

            <g transform="translate(8, 30)">
              <text x="0" y="10" fill="#15803D" className="dark:fill-emerald-400" fontSize="7" fontWeight="bold" fontFamily="monospace">✓ SOURCE CITATION</text>
              <rect x="0" y="18" width="84" height="42" rx="3" fill="#F1F5F9" className="dark:fill-slate-700/60" />
              <text x="4" y="29" fill="#0F172A" className="dark:fill-slate-200" fontSize="6.5" fontFamily="monospace">"According to doc</text>
              <text x="4" y="39" fill="#0F172A" className="dark:fill-slate-200" fontSize="6.5" fontFamily="monospace">[Page 4, Para 2],</text>
              <text x="4" y="49" fill="#0F172A" className="dark:fill-slate-200" fontSize="6.5" fontFamily="monospace">timeout is 5000ms"</text>

              <text x="0" y="74" fill="#64748B" fontSize="6.5" fontFamily="monospace">Full Verifiability</text>
            </g>
          </g>

          {/* Bottom Technical Status Bar */}
          <rect x="18" y="184" width="424" height="22" rx="4" fill="#F1F5F9" className="dark:fill-slate-800" stroke="#CBD5E1" strokeWidth="1" />
          <circle cx="32" cy="195" r="4" fill="#8B5CF6" />
          <text x="44" y="198" fill="#475569" className="dark:fill-slate-300" fontSize="8" fontFamily="monospace">
            Stack: Python • LangChain • FAISS • Embeddings • Sliding Window Chunks
          </text>
        </svg>
      )}

      {/* PROJECT 5: Financial Transaction Fraud Detection */}
      {projectId === 5 && (
        <svg viewBox="0 0 460 220" className="w-full h-full block" xmlns="http://www.w3.org/2000/svg">
          {/* Schematic Blueprint Header Label */}
          <text x="18" y="22" fill="#64748B" fontSize="9" fontWeight="bold" fontFamily="monospace">
            FIG 5.0 // SMOTE SYNTHETIC OVERSAMPLING &amp; CLASSIFICATION
          </text>
          <text x="442" y="22" textAnchor="end" fill="#EF4444" fontSize="8" fontWeight="bold" fontFamily="monospace">
            RANDOM FOREST ENSEMBLE
          </text>

          {/* Left: Imbalanced Data vs SMOTE Balance */}
          <g transform="translate(18, 42)">
            <rect x="0" y="0" width="112" height="122" rx="6" fill="#FFFFFF" className="dark:fill-slate-800" stroke="#F59E0B" strokeWidth="1.8" />
            <rect x="0" y="0" width="112" height="22" rx="6" fill="#F59E0B" />
            <text x="8" y="15" fill="#FFFFFF" fontSize="8" fontWeight="bold" fontFamily="monospace">DATA REBALANCE</text>

            <g transform="translate(8, 30)">
              <rect x="0" y="0" width="96" height="20" rx="3" fill="#DCFCE7" className="dark:fill-emerald-950/60" />
              <text x="6" y="13" fill="#15803D" className="dark:fill-emerald-300" fontSize="7" fontWeight="bold" fontFamily="monospace">Legitimate: 99.8%</text>

              <rect x="0" y="25" width="96" height="20" rx="3" fill="#FEE2E2" className="dark:fill-red-950/60" />
              <text x="6" y="38" fill="#B91C1C" className="dark:fill-red-300" fontSize="7" fontWeight="bold" fontFamily="monospace">Fraud Raw: 0.2%</text>

              <rect x="0" y="52" width="96" height="28" rx="3" fill="#EFF6FF" className="dark:fill-blue-950/60" stroke="#60A5FA" strokeWidth="0.8" />
              <text x="6" y="64" fill="#1D4ED8" className="dark:fill-blue-300" fontSize="7" fontWeight="bold" fontFamily="monospace">SMOTE Applied</text>
              <text x="6" y="74" fill="#2563EB" className="dark:fill-blue-400" fontSize="6" fontFamily="monospace">Synthesized Minorities</text>
            </g>
          </g>

          {/* Connecting Arrow */}
          <path d="M130,103 L162,103" fill="none" stroke="#F59E0B" strokeWidth="2" strokeDasharray="3 3" />
          <polygon points="162,103 155,99 155,107" fill="#F59E0B" />

          {/* Center: Feature Space & Random Forest Boundary */}
          <g transform="translate(166, 38)">
            <rect x="0" y="0" width="146" height="130" rx="8" fill="#F8FAFC" className="dark:fill-slate-800/90" stroke="#334155" strokeWidth="1.8" />
            <rect x="0" y="0" width="146" height="24" rx="8" fill="#1E293B" />
            <text x="8" y="16" fill="#F87171" fontSize="8" fontWeight="bold" fontFamily="monospace">DECISION BOUNDARY</text>

            {/* 2D Feature Space Plot */}
            <g transform="translate(12, 34)">
              <rect x="0" y="0" width="122" height="82" rx="4" fill="#0F172A" />
              {/* Feature Axes */}
              <line x1="10" y1="72" x2="112" y2="72" stroke="#475569" strokeWidth="1" />
              <line x1="10" y1="10" x2="10" y2="72" stroke="#475569" strokeWidth="1" />
              <text x="110" y="80" textAnchor="end" fill="#64748B" fontSize="6" fontFamily="monospace">Amount</text>

              {/* Legitimate Cluster (Green) */}
              <circle cx="28" cy="55" r="2.5" fill="#22C55E" />
              <circle cx="34" cy="58" r="2.5" fill="#22C55E" />
              <circle cx="24" cy="50" r="2.5" fill="#22C55E" />
              <circle cx="42" cy="52" r="2.5" fill="#22C55E" />
              <circle cx="32" cy="46" r="2" fill="#22C55E" />
              <circle cx="48" cy="48" r="2" fill="#22C55E" />

              {/* Synthetic SMOTE points (Blue) */}
              <circle cx="70" cy="30" r="2" fill="#60A5FA" />
              <circle cx="78" cy="24" r="2" fill="#60A5FA" />

              {/* Outlier Fraud Point (Red) */}
              <circle cx="88" cy="18" r="3.5" fill="#EF4444" className="animate-ping" />
              <circle cx="88" cy="18" r="3" fill="#EF4444" />
              <text x="96" y="21" fill="#FCA5A5" fontSize="6" fontWeight="bold" fontFamily="monospace">ALERT</text>

              {/* Non-linear Decision Boundary */}
              <path d="M55,72 Q60,40 75,28 T110,12" fill="none" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="3 3" />
            </g>
          </g>

          {/* Connecting Arrow */}
          <path d="M312,103 L340,103" fill="none" stroke="#EF4444" strokeWidth="2" strokeDasharray="3 3" />
          <polygon points="340,103 333,99 333,107" fill="#EF4444" />

          {/* Right: Model Evaluation Matrix */}
          <g transform="translate(343, 42)">
            <rect x="0" y="0" width="100" height="122" rx="6" fill="#FFFFFF" className="dark:fill-slate-800" stroke="#EF4444" strokeWidth="1.8" />
            <rect x="0" y="0" width="100" height="22" rx="6" fill="#DC2626" />
            <text x="8" y="15" fill="#FFFFFF" fontSize="8" fontWeight="bold" fontFamily="monospace">METRICS EVAL</text>

            <g transform="translate(8, 30)">
              <text x="0" y="10" fill="#B91C1C" className="dark:fill-red-400" fontSize="7" fontWeight="bold" fontFamily="monospace">EVALUATION SPLIT</text>
              
              <rect x="0" y="16" width="84" height="16" rx="2" fill="#F1F5F9" className="dark:fill-slate-700/60" />
              <text x="4" y="27" fill="#0F172A" className="dark:fill-slate-200" fontSize="6.5" fontFamily="monospace">Precision Priority</text>

              <rect x="0" y="36" width="84" height="16" rx="2" fill="#F1F5F9" className="dark:fill-slate-700/60" />
              <text x="4" y="47" fill="#0F172A" className="dark:fill-slate-200" fontSize="6.5" fontFamily="monospace">Recall on Minorities</text>

              <rect x="0" y="56" width="84" height="16" rx="2" fill="#F1F5F9" className="dark:fill-slate-700/60" />
              <text x="4" y="67" fill="#0F172A" className="dark:fill-slate-200" fontSize="6.5" fontFamily="monospace">F1 Score Evaluated</text>
            </g>
          </g>

          {/* Bottom Technical Status Bar */}
          <rect x="18" y="184" width="424" height="22" rx="4" fill="#F1F5F9" className="dark:fill-slate-800" stroke="#CBD5E1" strokeWidth="1" />
          <circle cx="32" cy="195" r="4" fill="#EF4444" />
          <text x="44" y="198" fill="#475569" className="dark:fill-slate-300" fontSize="8" fontFamily="monospace">
            Stack: Python • Scikit-learn • Pandas • SMOTE • Random Forest Classifier
          </text>
        </svg>
      )}

      {/* PROJECT 6: Vidhya Vision — Analytics Vidhya Course Finder */}
      {projectId === 6 && (
        <svg viewBox="0 0 460 220" className="w-full h-full block" xmlns="http://www.w3.org/2000/svg">
          {/* Schematic Blueprint Header Label */}
          <text x="18" y="22" fill="#64748B" fontSize="9" fontWeight="bold" fontFamily="monospace">
            FIG 6.0 // SEMANTIC COURSE SEARCH &amp; HF SPACES
          </text>
          <text x="442" y="22" textAnchor="end" fill="#F59E0B" fontSize="8" fontWeight="bold" fontFamily="monospace">
            HUGGING FACE SPACES • DEPLOYED
          </text>

          {/* Left: User Query Input */}
          <g transform="translate(18, 42)">
            <rect x="0" y="0" width="112" height="122" rx="6" fill="#FFFFFF" className="dark:fill-slate-800" stroke="#F59E0B" strokeWidth="1.8" />
            <rect x="0" y="0" width="112" height="22" rx="6" fill="#F59E0B" />
            <text x="8" y="15" fill="#FFFFFF" fontSize="8" fontWeight="bold" fontFamily="monospace">LEARNING QUERY</text>

            <g transform="translate(8, 30)">
              <rect x="0" y="0" width="96" height="38" rx="3" fill="#FFFBEB" className="dark:fill-amber-950/60" stroke="#FDE68A" strokeWidth="0.8" />
              <text x="6" y="14" fill="#92400E" className="dark:fill-amber-300" fontSize="7" fontWeight="bold" fontFamily="monospace">"Data Engineering</text>
              <text x="6" y="24" fill="#92400E" className="dark:fill-amber-300" fontSize="7" fontWeight="bold" fontFamily="monospace">&amp; PySpark course</text>
              <text x="6" y="33" fill="#92400E" className="dark:fill-amber-300" fontSize="6.5" fontFamily="monospace">for beginners"</text>

              <rect x="0" y="46" width="96" height="32" rx="3" fill="#F1F5F9" className="dark:fill-slate-700/60" />
              <text x="6" y="58" fill="#475569" className="dark:fill-slate-300" fontSize="6.5" fontFamily="monospace">Embedding Model:</text>
              <text x="6" y="68" fill="#D97706" className="dark:fill-amber-400" fontSize="6.5" fontWeight="bold" fontFamily="monospace">Hugging Face MiniLM</text>
            </g>
          </g>

          {/* Connecting Flow Arrow */}
          <path d="M130,103 L162,103" fill="none" stroke="#F59E0B" strokeWidth="2" strokeDasharray="3 3" />
          <polygon points="162,103 155,99 155,107" fill="#F59E0B" />

          {/* Center: Vector Search & FAISS Index */}
          <g transform="translate(166, 38)">
            <rect x="0" y="0" width="146" height="130" rx="8" fill="#F8FAFC" className="dark:fill-slate-800/90" stroke="#334155" strokeWidth="1.8" />
            <rect x="0" y="0" width="146" height="24" rx="8" fill="#1E293B" />
            <text x="8" y="16" fill="#FDE68A" fontSize="8" fontWeight="bold" fontFamily="monospace">FAISS VECTOR SEARCH</text>

            <g transform="translate(10, 32)">
              <rect x="0" y="0" width="126" height="24" rx="4" fill="#FEF3C7" className="dark:fill-amber-950/70" stroke="#FBBF24" strokeWidth="1" />
              <text x="6" y="11" fill="#78350F" className="dark:fill-amber-200" fontSize="7.5" fontWeight="bold" fontFamily="monospace">Course Index Catalog</text>
              <text x="6" y="20" fill="#92400E" className="dark:fill-amber-300" fontSize="6.5" fontFamily="monospace">Analytics Vidhya Corpus</text>

              <rect x="0" y="30" width="126" height="26" rx="4" fill="#EFF6FF" className="dark:fill-blue-950/70" stroke="#60A5FA" strokeWidth="1" />
              <text x="6" y="42" fill="#1E40AF" className="dark:fill-blue-200" fontSize="7.5" fontWeight="bold" fontFamily="monospace">Cosine Similarity Match</text>
              <text x="6" y="51" fill="#2563EB" className="dark:fill-blue-300" fontSize="6.5" fontFamily="monospace">Sub-second dense lookup</text>

              <rect x="0" y="62" width="126" height="22" rx="4" fill="#ECFDF5" className="dark:fill-emerald-950/70" stroke="#34D399" strokeWidth="1" />
              <text x="6" y="75" fill="#047857" className="dark:fill-emerald-300" fontSize="7.5" fontWeight="bold" fontFamily="monospace">Dense Vector Indexing</text>
            </g>
          </g>

          {/* Connecting Flow Arrow */}
          <path d="M312,103 L340,103" fill="none" stroke="#10B981" strokeWidth="2" strokeDasharray="3 3" />
          <polygon points="340,103 333,99 333,107" fill="#10B981" />

          {/* Right: Matched Course Discovery Result */}
          <g transform="translate(343, 42)">
            <rect x="0" y="0" width="100" height="122" rx="6" fill="#FFFFFF" className="dark:fill-slate-800" stroke="#10B981" strokeWidth="1.8" />
            <rect x="0" y="0" width="100" height="22" rx="6" fill="#059669" />
            <text x="8" y="15" fill="#FFFFFF" fontSize="8" fontWeight="bold" fontFamily="monospace">MATCHED COURSE</text>

            <g transform="translate(8, 30)">
              <text x="0" y="10" fill="#15803D" className="dark:fill-emerald-400" fontSize="7.5" fontWeight="bold" fontFamily="monospace">✓ TOP RECOMMENDATION</text>
              <rect x="0" y="18" width="84" height="42" rx="3" fill="#ECFDF5" className="dark:fill-emerald-950/70" stroke="#34D399" strokeWidth="0.8" />
              <text x="4" y="29" fill="#065F46" className="dark:fill-emerald-300" fontSize="6.5" fontWeight="bold" fontFamily="monospace">"PySpark for Data"</text>
              <text x="4" y="39" fill="#065F46" className="dark:fill-emerald-300" fontSize="6" fontFamily="monospace">Level: Intermediate</text>
              <text x="4" y="49" fill="#065F46" className="dark:fill-emerald-300" fontSize="6" fontFamily="monospace">Similarity: 0.94</text>

              <text x="0" y="74" fill="#059669" fontSize="6.5" fontWeight="bold" fontFamily="monospace">Live on HF Spaces</text>
            </g>
          </g>

          {/* Bottom Technical Status Bar */}
          <rect x="18" y="184" width="424" height="22" rx="4" fill="#F1F5F9" className="dark:fill-slate-800" stroke="#CBD5E1" strokeWidth="1" />
          <circle cx="32" cy="195" r="4" fill="#F59E0B" />
          <text x="44" y="198" fill="#475569" className="dark:fill-slate-300" fontSize="8" fontFamily="monospace">
            Stack: Python • Hugging Face Spaces • FAISS • Transformers • Streamlit
          </text>
        </svg>
      )}

      {/* PROJECT 7: Eklavya AI Generator */}
      {projectId === 7 && (
        <svg viewBox="0 0 460 220" className="w-full h-full block" xmlns="http://www.w3.org/2000/svg">
          {/* Schematic Blueprint Header Label */}
          <text x="18" y="22" fill="#64748B" fontSize="9" fontWeight="bold" fontFamily="monospace">
            FIG 7.0 // MODULAR STUDY PRIMER &amp; ASSESSMENT ENGINE
          </text>
          <text x="442" y="22" textAnchor="end" fill="#6366F1" fontSize="8" fontWeight="bold" fontFamily="monospace">
            RENDER DEPLOYED • LIVE WEB APP
          </text>

          {/* Left: Study Topic Specification */}
          <g transform="translate(18, 42)">
            <rect x="0" y="0" width="112" height="122" rx="6" fill="#FFFFFF" className="dark:fill-slate-800" stroke="#6366F1" strokeWidth="1.8" />
            <rect x="0" y="0" width="112" height="22" rx="6" fill="#6366F1" />
            <text x="8" y="15" fill="#FFFFFF" fontSize="8" fontWeight="bold" fontFamily="monospace">TOPIC INPUT</text>

            <g transform="translate(8, 30)">
              <rect x="0" y="0" width="96" height="36" rx="3" fill="#EEF2FF" className="dark:fill-indigo-950/60" stroke="#C7D2FE" strokeWidth="0.8" />
              <text x="6" y="13" fill="#3730A3" className="dark:fill-indigo-300" fontSize="7" fontWeight="bold" fontFamily="monospace">Topic: Python Async</text>
              <text x="6" y="22" fill="#3730A3" className="dark:fill-indigo-300" fontSize="6.5" fontFamily="monospace">&amp; Event Loops</text>
              <text x="6" y="30" fill="#4F46E5" className="dark:fill-indigo-400" fontSize="6" fontFamily="monospace">Depth: Engineering</text>

              <rect x="0" y="44" width="96" height="34" rx="3" fill="#F1F5F9" className="dark:fill-slate-700/60" />
              <text x="6" y="56" fill="#475569" className="dark:fill-slate-300" fontSize="6.5" fontFamily="monospace">Generator Engine:</text>
              <text x="6" y="66" fill="#4338CA" className="dark:fill-indigo-300" fontSize="6.5" fontWeight="bold" fontFamily="monospace">Prompt Chains + NLP</text>
            </g>
          </g>

          {/* Connecting Flow Arrow */}
          <path d="M130,103 L162,103" fill="none" stroke="#6366F1" strokeWidth="2" strokeDasharray="3 3" />
          <polygon points="162,103 155,99 155,107" fill="#6366F1" />

          {/* Center: Chained Sections Generator */}
          <g transform="translate(166, 38)">
            <rect x="0" y="0" width="146" height="130" rx="8" fill="#F8FAFC" className="dark:fill-slate-800/90" stroke="#334155" strokeWidth="1.8" />
            <rect x="0" y="0" width="146" height="24" rx="8" fill="#1E293B" />
            <text x="8" y="16" fill="#A5B4FC" fontSize="8" fontWeight="bold" fontFamily="monospace">PROMPT CHAIN ENGINE</text>

            <g transform="translate(10, 32)">
              <rect x="0" y="0" width="126" height="24" rx="4" fill="#EEF2FF" className="dark:fill-indigo-950/70" stroke="#818CF8" strokeWidth="1" />
              <text x="6" y="11" fill="#312E81" className="dark:fill-indigo-200" fontSize="7.5" fontWeight="bold" fontFamily="monospace">1. Conceptual Primers</text>
              <text x="6" y="20" fill="#4338CA" className="dark:fill-indigo-300" fontSize="6.5" fontFamily="monospace">Core terminology breakdown</text>

              <rect x="0" y="28" width="126" height="24" rx="4" fill="#F5F3FF" className="dark:fill-purple-950/70" stroke="#C084FC" strokeWidth="1" />
              <text x="6" y="39" fill="#581C87" className="dark:fill-purple-200" fontSize="7.5" fontWeight="bold" fontFamily="monospace">2. Code Implementation</text>
              <text x="6" y="47" fill="#6B21A8" className="dark:fill-purple-300" fontSize="6.5" fontFamily="monospace">Runnable code syntax</text>

              <rect x="0" y="56" width="126" height="26" rx="4" fill="#ECFDF5" className="dark:fill-emerald-950/70" stroke="#34D399" strokeWidth="1" />
              <text x="6" y="67" fill="#065F46" className="dark:fill-emerald-200" fontSize="7.5" fontWeight="bold" fontFamily="monospace">3. Practice Assessments</text>
              <text x="6" y="77" fill="#047857" className="dark:fill-emerald-300" fontSize="6.5" fontFamily="monospace">Multiple-choice quizzes</text>
            </g>
          </g>

          {/* Connecting Flow Arrow */}
          <path d="M312,103 L340,103" fill="none" stroke="#6366F1" strokeWidth="2" strokeDasharray="3 3" />
          <polygon points="340,103 333,99 333,107" fill="#6366F1" />

          {/* Right: Generated Output Card */}
          <g transform="translate(343, 42)">
            <rect x="0" y="0" width="100" height="122" rx="6" fill="#FFFFFF" className="dark:fill-slate-800" stroke="#6366F1" strokeWidth="1.8" />
            <rect x="0" y="0" width="100" height="22" rx="6" fill="#4F46E5" />
            <text x="8" y="15" fill="#FFFFFF" fontSize="8" fontWeight="bold" fontFamily="monospace">GENERATED GUIDE</text>

            <g transform="translate(8, 30)">
              <text x="0" y="10" fill="#4338CA" className="dark:fill-indigo-300" fontSize="7.5" fontWeight="bold" fontFamily="monospace">✓ EXPORT READY</text>
              <rect x="0" y="18" width="84" height="42" rx="3" fill="#EEF2FF" className="dark:fill-indigo-950/70" stroke="#818CF8" strokeWidth="0.8" />
              <text x="4" y="29" fill="#312E81" className="dark:fill-indigo-200" fontSize="6.5" fontWeight="bold" fontFamily="monospace">Markdown Document</text>
              <text x="4" y="39" fill="#312E81" className="dark:fill-indigo-200" fontSize="6" fontFamily="monospace">3 Quiz Questions</text>
              <text x="4" y="49" fill="#4338CA" className="dark:fill-indigo-300" fontSize="6" fontFamily="monospace">Instant Download</text>

              <text x="0" y="74" fill="#4F46E5" fontSize="6.5" fontWeight="bold" fontFamily="monospace">Live on Render</text>
            </g>
          </g>

          {/* Bottom Technical Status Bar */}
          <rect x="18" y="184" width="424" height="22" rx="4" fill="#F1F5F9" className="dark:fill-slate-800" stroke="#CBD5E1" strokeWidth="1" />
          <circle cx="32" cy="195" r="4" fill="#6366F1" />
          <text x="44" y="198" fill="#475569" className="dark:fill-slate-300" fontSize="8" fontFamily="monospace">
            Stack: Python • Streamlit • LLMs • Prompt Engineering • Render Cloud
          </text>
        </svg>
      )}
    </div>
  );
};
