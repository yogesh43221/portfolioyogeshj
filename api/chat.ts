import type { VercelRequest, VercelResponse } from '@vercel/node';
import { GoogleGenAI } from '@google/genai';

interface ProjectDetails {
  problem: string;
  solution: string;
  results?: string;
  architecture?: string;
  contributions?: string[];
  testing?: string;
  limitations?: string;
}

interface ProjectKnowledge {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  category: string;
  github?: string;
  extendedDetails?: ProjectDetails;
}

// Inlined self-contained profile knowledge to avoid Node ESM runtime module resolution errors in Vercel Serverless Functions
const PROFILE = {
  name: "Yogesh Jadhav",
  title: "QA Automation / Software Engineer",
  email: "yj43221@gmail.com",
  location: "Pune, India",
  github: "https://github.com/yogesh43221",
  linkedin: "https://www.linkedin.com/in/yogesh-jadhav-60548020a/"
};

const SYSTEM_INSTRUCTION = `
You are the AI portfolio assistant and digital representative of ${PROFILE.name}.
Persona: Software Engineer specialized in QA Automation, with supporting pillars in Backend/API Engineering and AI/ML.
Core Direction: QA Automation and Software Engineering (Playwright, Pytest, API testing, regression validation).
Supporting Strengths: Python backend engineering (FastAPI, SQL, Docker) and practical AI/LLM applications (RAG pipelines, LangChain, FAISS). Hub9 experience is primary.
Grounding Rules:
- Answer questions about Yogesh's resume, projects, experience, education, and skills using ONLY facts supported by the portfolio content.
- Do not claim seniority, production scale, or tools not present in the verified portfolio data.
- If information is not provided in the portfolio or is unknown, explicitly state that rather than inventing or assuming details.
Tone: Professional, direct, precise, and engineering-oriented.
`;

const PROJECTS: ProjectKnowledge[] = [
  {
    id: 1,
    title: "OrbitDesk Support Agent",
    description: "Multi-turn customer support agent capable of resolving inquiries, executing tool-assisted lookups, and categorizing issue severity with automated test suites.",
    techStack: ["Python", "Pytest", "FastAPI", "LangChain", "Tool Calling", "Schema Validation"],
    category: "QA Automation",
    github: "https://github.com/yogesh43221/orbitdesk-support-agent",
    extendedDetails: {
      problem: "Customer support desks face ticket backlogs and repetitive inquiry triage that delay responses to routine questions, requiring rigorous test verification across dialogue flows and tool integrations.",
      solution: "Designed an agentic support workflow capable of parsing customer issues, routing queries by intent, and executing knowledge lookups, backed by automated Pytest test suites.",
      contributions: [
        "Constructed conversational decision logic and intent classification for customer support queries",
        "Integrated structured tool calling for simulated ticket lookup and status updates",
        "Implemented fallback handling and out-of-scope question redirection",
        "Built automated test suites covering request routing, schema validation, and failure paths"
      ],
      testing: "Implemented Pytest suites verifying intent routing, schema validation, invalid input rejection, confidence boundaries, and tool failure paths.",
      results: "Demonstrated an autonomous support agent prototype handling triage and automated context lookups with verified test coverage across edge cases."
    }
  },
  {
    id: 2,
    title: "Radiology Report Labeling & Validation System",
    description: "Full-stack medical report labeling and validation service built with FastAPI, PostgreSQL, and Docker, designed with schema validation and testability across API and database layers.",
    techStack: ["Python", "FastAPI", "PostgreSQL", "Docker", "REST APIs", "Pytest"],
    category: "Backend / API",
    github: "https://github.com/yogesh43221/radiology-report-labeling-system",
    extendedDetails: {
      problem: "Healthcare record workflows require strict schema validation, reliable error handling, and robust database constraints to prevent invalid medical report states.",
      solution: "Designed a RESTful API backend using FastAPI and Pydantic models for request validation, PostgreSQL for structured storage, and Docker containerization for reproducible test environments.",
      contributions: [
        "Developed CRUD endpoints for radiology report creation, labeling status updates, and retrieval with JWT authentication",
        "Structured PostgreSQL relational schemas with foreign key constraints and indexed query paths",
        "Containerized the backend and database using Docker Compose for local development and test isolation"
      ],
      testing: "Tested endpoint responses, payload boundary conditions, and database transaction integrity using Pytest.",
      results: "Established a functional prototype demonstrating clean API contracts, JWT authentication, and schema-level validation."
    }
  },
  {
    id: 3,
    title: "Booking Analytics RAG System",
    description: "Retrieval-Augmented Generation (RAG) system built with LangChain, Pinecone, and Python that allows users to query booking and reservation datasets using natural language.",
    techStack: ["Python", "LangChain", "OpenAI API", "Pinecone", "FAISS", "SQL"],
    category: "Backend / API",
    github: "https://github.com/yogesh43221/Booking-Analytics-RAG-System",
    extendedDetails: {
      problem: "Querying operational booking data typically requires writing custom SQL queries, creating a barrier for non-technical team members seeking quick answers.",
      solution: "Constructed a vector search pipeline using LangChain and Pinecone to embed data schemas and retrieve relevant contextual records for an LLM to generate answers.",
      contributions: [
        "Built document and metadata chunking pipelines to index tabular booking records into vector collections",
        "Implemented similarity search retrieval using Pinecone and FAISS vector stores",
        "Designed prompt templates to constrain LLM responses strictly to retrieved booking context"
      ],
      testing: "Evaluated response relevance across sample domain questions and verified context retrieval accuracy against raw SQL reference queries.",
      results: "Enabled conversational querying over booking records with grounded contextual responses.",
      limitations: "Relies on external LLM API availability and vector embedding quality for domain-specific terminology."
    }
  },
  {
    id: 4,
    title: "DocuMate — Document Q&A Assistant",
    description: "Retrieval-Augmented Generation (RAG) assistant that indexes documents and provides conversational question answering over uploaded files using embeddings and vector search.",
    techStack: ["Python", "LangChain", "RAG", "Vector Search", "FAISS", "Embeddings"],
    category: "AI / LLM",
    github: "https://github.com/yogesh43221/DocuMate-RAG-QA-System",
    extendedDetails: {
      problem: "Reviewing lengthy unstructured documents and technical guides manually to locate specific answers is slow and error-prone.",
      solution: "Built a document question-answering workflow using LangChain, text chunking, vector indexing, and LLM context synthesis.",
      contributions: [
        "Implemented document parsing pipelines with sliding chunk windows and overlap preservation",
        "Built vector similarity retrieval using embedding stores to retrieve relevant context chunks",
        "Designed structured prompt templates to constrain LLM responses strictly to retrieved source text"
      ],
      testing: "Tested retrieval consistency against diverse question types and evaluated chunk boundary effects on answer accuracy.",
      results: "Delivered a conversational document assistant capable of grounded answering from document context."
    }
  },
  {
    id: 5,
    title: "Financial Transaction Fraud Detection",
    description: "Machine learning pipeline designed to detect fraudulent financial transactions in highly imbalanced datasets using SMOTE and Random Forest.",
    techStack: ["Python", "Scikit-learn", "Pandas", "SMOTE", "Random Forest"],
    category: "Machine Learning",
    github: "https://github.com/yogesh43221/Data-Science-Projects/tree/main/Transaction%20Fraud%20Detection",
    extendedDetails: {
      problem: "Identifying fraudulent transactions in high-volume financial data is challenging due to extreme class imbalance where legitimate events heavily outnumber anomalies.",
      solution: "Engineered an end-to-end machine learning workflow utilizing SMOTE for synthetic minority oversampling and Random Forest classifiers for robust decision boundaries.",
      contributions: [
        "Preprocessed financial transaction records, handled missing features, and normalized numerical feature scales",
        "Applied SMOTE to balance class distributions without discarding legitimate transaction records",
        "Trained Random Forest classification models tuned to prioritize precision and recall on the minority class"
      ],
      testing: "Evaluated classification performance using precision, recall, F1-score, and confusion matrices against held-out test splits.",
      results: "Demonstrated a machine learning pipeline capable of identifying minority fraud patterns on imbalanced transaction data.",
      limitations: "Trained on static benchmark distributions; production deployment would require dynamic thresholding and concept drift monitoring."
    }
  },
  {
    id: 6,
    title: "Vidhya Vision — Analytics Vidhya Course Finder",
    description: "Semantic search and course discovery application using Hugging Face transformer embeddings and FAISS vector indexing to find relevant educational courses.",
    techStack: ["Python", "LangChain", "FAISS", "Hugging Face", "Transformers", "Streamlit"],
    category: "AI / LLM",
    github: "https://github.com/yogesh43221/Vidhya-Vision",
    extendedDetails: {
      problem: "Keyword-based search fails to retrieve educational courses and resources when query words do not match course titles or descriptions verbatim.",
      solution: "Implemented semantic vector search using open-source Hugging Face embeddings and FAISS indexing, deployed live as an interactive web app on Hugging Face Spaces.",
      contributions: [
        "Integrated Hugging Face embedding models to transform course listings and metadata into dense vector representations",
        "Built FAISS index retrieval for sub-second similarity search over course catalogs",
        "Deployed an interactive web application on Hugging Face Spaces for live course discovery"
      ],
      testing: "Tested semantic retrieval with conceptual queries against curated educational course datasets.",
      results: "Deployed live on Hugging Face Spaces, enabling conversational course discovery beyond exact keyword matching."
    }
  },
  {
    id: 7,
    title: "Eklavya AI Generator",
    description: "Educational content generation system that synthesizes structured study modules, conceptual summaries, and practice assessments from input topics.",
    techStack: ["Python", "Streamlit", "LLMs", "Prompt Engineering", "NLP"],
    category: "AI / LLM",
    github: "https://github.com/yogesh43221/eklavya-ai-generator",
    extendedDetails: {
      problem: "Compiling structured study materials, conceptual primers, and self-assessment questions manually requires significant preparation time.",
      solution: "Developed an interactive web generator utilizing prompt chaining and formatted outputs to generate modular study materials on demand, deployed on Render.",
      contributions: [
        "Constructed structured prompt workflows generating modular sections (concept definitions, code examples, quizzes)",
        "Formatted outputs into clean markdown with downloadable review exports",
        "Implemented input parameter guards to ensure predictable generation formats",
        "Deployed the interactive web application to Render with live public access"
      ],
      testing: "Tested generation reliability and consistency across varied technical subject prompts.",
      results: "Deployed live web generator on Render providing on-demand educational primers and quiz generation."
    }
  }
];

// Construct grounded knowledge base from the PROJECTS array
const PROJECTS_KNOWLEDGE = PROJECTS.map(p => `
[PROJECT ID: ${p.id}]
TITLE: ${p.title}
CATEGORY: ${p.category}
STACK: ${p.techStack.join(', ')}
SHORT_DESCRIPTION: ${p.description}
${p.extendedDetails ? `
DETAILED_CASE_STUDY:
- The Problem: ${p.extendedDetails.problem}
- The Solution: ${p.extendedDetails.solution}
- The Result/Impact: ${p.extendedDetails.results || 'Documented in case study'}
${p.extendedDetails.architecture ? `- Architecture: ${p.extendedDetails.architecture}` : ''}
${p.extendedDetails.contributions ? `- Specific Contributions: ${p.extendedDetails.contributions.join('; ')}` : ''}
` : 'No extended details available for this item.'}
---`).join('\n\n');

const DETAILED_INSTRUCTION = `
${SYSTEM_INSTRUCTION}

You are the digital twin of ${PROFILE.name}. You have access to his full project portfolio.
Your goal is to represent his technical expertise to potential recruiters and collaborators.

KNOWLEDGE_BASE (PROJECTS):
${PROJECTS_KNOWLEDGE}

PROJECT QUERY PROTOCOL:
When a user asks about a specific project (e.g., "Tell me more about [Project Title]"), you MUST:
1. Locate the project in the KNOWLEDGE_BASE.
2. Retrieve the 'extendedDetails' if available.
3. Structure your response clearly:
   - **The Challenge**: Summarize the problem.
   - **The Engineering Solution**: Describe the technical implementation and stack used.
   - **The Business Impact**: Detail the results and impact.
4. If 'extendedDetails' are missing, provide a robust summary using the 'description' and 'techStack'.

GENERAL GUIDELINES:
1. Maintain a professional, engineering-focused tone.
2. Reference specific technologies (e.g., "In this project, I used Playwright to...") to showcase hands-on skills.
3. If asked about technologies, recommend specific projects where those tools were applied.
4. If a user asks something out of context, politely bring the conversation back to your engineering portfolio.
`;

// In-memory quota pause cache to minimize repeated failed calls
let quotaExhaustedUntil = 0;

/**
 * Honest, verified grounded fallback answering mechanism.
 * Clearly labels output as coming from the verified portfolio records.
 */
export function getGroundedPortfolioReply(message: string): string {
  const lower = message.toLowerCase();
  const label = "[Verified Portfolio Knowledge Base]\n\n";

  // 1. Matched Project
  const matchedProject = PROJECTS.find(p => 
    lower.includes(p.title.toLowerCase()) || 
    p.title.toLowerCase().split(/[\s—:-]+/).some(w => w.length > 4 && lower.includes(w))
  );

  if (matchedProject) {
    let reply = `${label}Here are the verified technical details for **${matchedProject.title}** (${matchedProject.category}):\n\n`;
    if (matchedProject.extendedDetails) {
      reply += `• **The Challenge**: ${matchedProject.extendedDetails.problem}\n\n`;
      reply += `• **The Engineering Solution**: ${matchedProject.extendedDetails.solution}\n\n`;
      reply += `• **Impact & Outcomes**: ${matchedProject.extendedDetails.results || 'See project dossier'}\n\n`;
    } else {
      reply += `${matchedProject.description}\n\n`;
    }
    reply += `• **Technologies**: ${matchedProject.techStack.join(', ')}`;
    return reply;
  }

  // 2. Research / Publications
  if (lower.includes('research') || lower.includes('publication') || lower.includes('paper') || lower.includes('ieee') || lower.includes('springer') || lower.includes('tinyml') || lower.includes('fall detection')) {
    return `${label}Yogesh has co-authored two peer-reviewed research publications:\n\n1. **Fall Detection Using HOG Feature Extraction and Adaptive Boosting Technique** (IEEE, 2023) — Evaluated HOG feature descriptors and AdaBoost classifiers for fall event classification.\n\n2. **Classroom Activity Detection Using TinyML** (Springer Nature, 2025) — Implemented low-power TinyML models on resource-constrained embedded edge devices for ambient activity recognition.`;
  }

  // 3. Hub9 Experience & QA Testing
  if (lower.includes('hub9') || lower.includes('experience') || lower.includes('playwright') || lower.includes('qa') || lower.includes('intern') || lower.includes('postman')) {
    return `${label}At **Hub9 Software** (Jan 2025 – Oct 2025), Yogesh served as a Software Development Intern focused on QA Automation & Backend APIs. Key contributions:\n\n• Engineered automated end-to-end test flows with **Playwright** across Chromium, Firefox, and WebKit for clinical workflows.\n• Validated REST API endpoint payloads, status codes, and error bounds using **Postman**.\n• Contributed to **FastAPI** backend routing and formulated structured **PostgreSQL** queries.\n• Maintained bug reports and regression plans in Jira and Confluence.`;
  }

  // 4. Core Tech Stack / Skills
  if (lower.includes('stack') || lower.includes('skill') || lower.includes('tool') || lower.includes('python') || lower.includes('sql') || lower.includes('fastapi') || lower.includes('pytest')) {
    return `${label}Yogesh's core engineering toolkit covers:\n\n• **QA Automation & Testing**: Playwright, Pytest, Postman, API Validation, E2E Regression Testing.\n• **Backend & APIs**: Python, FastAPI, RESTful APIs, PostgreSQL, SQL, Docker.\n• **AI / LLM & Search**: LangChain, FAISS, Hugging Face, Transformers, Vector Search.\n• **Data & Analytics**: Pandas, NumPy, Power BI, SQL Query Formulation.`;
  }

  // 5. Quality Manifesto / Principles
  if (lower.includes('manifesto') || lower.includes('why hire') || lower.includes('quality') || lower.includes('philosophy') || lower.includes('flakiness')) {
    return `${label}Yogesh's engineering philosophy is founded on three core tenets:\n\n1. **Flakiness is a Defect**: Automated suites must produce deterministic, reproducible outcomes across Chromium, Firefox, and WebKit.\n2. **API-First Contracts**: FastAPI schema validations and Pydantic models catch regressions before they reach frontend interfaces.\n3. **Shift-Left Quality**: Testing continuously in CI/CD pipelines eliminates defects during development rather than post-release.`;
  }

  // 6. Contact & Bio
  if (lower.includes('contact') || lower.includes('email') || lower.includes('hire') || lower.includes('resume') || lower.includes('reach') || lower.includes('linkedin') || lower.includes('github')) {
    return `${label}You can reach Yogesh directly via email at **${PROFILE.email}**, connect on LinkedIn (${PROFILE.linkedin}), or check out his code repositories on GitHub (${PROFILE.github}). You can also download his resume using the button in the hero section!`;
  }

  // 7. Default verified summary
  return `${label}Hello! I am ${PROFILE.name}'s digital twin. I specialize in QA automation with Playwright, Python backend development with FastAPI, and SQL data integrity. Feel free to ask about any specific project (such as OrbitDesk, Radiology Report Labeling, or Vidhya Vision) or explore the engineering dossiers above!`;
}

export default async function handler(req: VercelRequest, res: VercelResponse): Promise<void> {
  // Enforce POST method
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch {
      res.status(400).json({ error: 'Invalid JSON body' });
      return;
    }
  }

  const { message, history } = body || {};
  if (!message || typeof message !== 'string') {
    res.status(400).json({ error: 'Message is required' });
    return;
  }

  // Server-only Gemini API key
  const apiKey = process.env.GEMINI_API_KEY;

  // If no API key configured or quota was recently exhausted, fulfill from grounded knowledge base
  if (!apiKey || Date.now() < quotaExhaustedUntil) {
    res.status(200).json({
      reply: getGroundedPortfolioReply(message),
      source: 'grounded_knowledge_base'
    });
    return;
  }

  try {
    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'portfolio-assistant',
        },
      },
    });

    // Format conversation history (limit to last 6 turns)
    const contents = (Array.isArray(history) ? history.slice(-6) : []).map((msg: any) => ({
      role: msg.role === 'model' ? 'model' : 'user',
      parts: [{ text: String(msg.text || '') }],
    }));

    contents.push({
      role: 'user',
      parts: [{ text: message }],
    });

    let timeoutId: NodeJS.Timeout | null = null;
    const timeoutPromise = new Promise<never>((_, reject) => {
      timeoutId = setTimeout(() => reject(new Error('timeout')), 5000);
    });

    try {
      const response = await Promise.race([
        ai.models.generateContent({
          model: process.env.GEMINI_MODEL || 'gemini-2.5-flash',
          contents,
          config: {
            systemInstruction: DETAILED_INSTRUCTION,
            temperature: 0.7,
            maxOutputTokens: 500,
          },
        }),
        timeoutPromise,
      ]);

      if (timeoutId) clearTimeout(timeoutId);

      const reply = response.text || getGroundedPortfolioReply(message);
      res.status(200).json({
        reply,
        source: response.text ? 'live_gemini' : 'grounded_knowledge_base'
      });
      return;
    } finally {
      if (timeoutId) clearTimeout(timeoutId);
    }
  } catch (err: any) {
    const errStr = String(err?.message || err || '');
    if (errStr.includes('429') || errStr.includes('quota') || errStr.includes('RESOURCE_EXHAUSTED') || err?.status === 429) {
      quotaExhaustedUntil = Date.now() + 24 * 60 * 60 * 1000;
    }

    res.status(200).json({
      reply: getGroundedPortfolioReply(message),
      source: 'grounded_knowledge_base'
    });
    return;
  }
}
