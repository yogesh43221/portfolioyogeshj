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

const VERIFIED_BACKGROUND = `
VERIFIED EDUCATION:
- Degree: B.Tech in Electronics & Telecommunication
- Minor: Artificial Intelligence & Machine Learning (AI/ML)
- Institution: MIT Academy of Engineering, Alandi (MIT AOE)
- Period: 2020 – 2024
- Extracurricular Activities: Active member of Robotics Club (DD-Robocon)

VERIFIED WORK EXPERIENCE:
- Post-LLM Training Intern at Ethara AI (Jan 2026 – Aug 2026): Evaluated LLM outputs for factual accuracy, consistency, quality rubrics, and data annotation.
- Software Development Intern — QA & Backend at Hub9 Software (Jan 2025 – Oct 2025): Automated end-to-end testing with Playwright (Chromium, Firefox, WebKit), REST API validation with Postman, FastAPI backend services, and PostgreSQL queries.
- Data Engineer Intern at Celebal Technologies (Jun 2023 – Aug 2023): ETL data pipelines and executive Power BI dashboards.
- Machine Learning Intern at InThink Technologies (Aug 2022 – Dec 2022): ML classification models, Scikit-learn, and metric optimization.
- Hardware Design Engineer Trainee at Aeron Systems (Jun 2023 – Dec 2023): Validated defense-grade navigation hardware for the Indian Navy.

VERIFIED RESEARCH & PUBLICATIONS:
- "Fall Detection Using HOG Feature Extraction and Adaptive Boosting Technique" (IEEE International Conference, 2023)
- "Classroom Activity Detection Using TinyML" (Springer Nature, 2025)

VERIFIED CERTIFICATIONS & ACHIEVEMENTS:
- HackerRank: SQL (Advanced) — Feb 2025
- NPTEL / IIT Kharagpur: Cloud Computing — Jul 2023
- Microsoft & LinkedIn: Career Essentials in Generative AI & Data Analysis — Dec 2024
- Amazon ML Summer School 2023: Mentorship on Large-Scale Machine Learning
- DD-ROBOCON 2022: National Robotics Competition at IIT Delhi
`;

export const DETAILED_INSTRUCTION = `
${SYSTEM_INSTRUCTION}

You are the digital twin of ${PROFILE.name}. You represent his complete technical portfolio, verified education, engineering experience, and background.

${VERIFIED_BACKGROUND}

KNOWLEDGE_BASE (PROJECTS):
${PROJECTS_KNOWLEDGE}

QUERY & TOPIC PROTOCOL:
1. When asked about education, degrees, university, or college:
   Answer using the VERIFIED EDUCATION records: Yogesh holds a B.Tech in Electronics & Telecommunication with a minor in AI & Machine Learning from MIT Academy of Engineering, Alandi (2020–2024), where he was also an active member of the Robotics Club (DD-Robocon).
2. When asked about work experience:
   Highlight his primary Software Development Internship at Hub9 Software (QA automation with Playwright, Postman, FastAPI, PostgreSQL), Ethara AI (LLM evaluation & annotation), and supporting engineering roles.
3. When asked about specific projects:
   Locate the project in KNOWLEDGE_BASE and structure response: The Challenge, The Engineering Solution, and The Business Impact / Outcomes.
4. When asked about research, publications, or certifications:
   Cite the verified IEEE/Springer papers and HackerRank/NPTEL certifications above.
5. When asked about personal or private information NOT present in the verified records (such as current salary, personal compensation, or private personal details):
   Explicitly and politely state that the requested information is not available in Yogesh's verified portfolio. Do not guess, estimate, or invent details.

GENERAL GUIDELINES:
1. Maintain a professional, engineering-focused tone.
2. Reference specific technologies (e.g. "In this project, I used Playwright to...") to showcase hands-on skills.
3. If asked about technologies, recommend specific projects where those tools were applied.
`;

// In-memory quota pause cache to minimize repeated failed calls
let quotaExhaustedUntil = 0;

/**
 * Honest, verified grounded fallback answering mechanism.
 * Clearly labels output as coming from the verified portfolio records.
 */
export function getGroundedPortfolioReply(message: string): string {
  const lower = message.toLowerCase().trim();
  const label = "[Verified Portfolio Knowledge Base]\n\n";

  // 1. Greetings (explicit greeting words or introductions)
  const greetingWords = ['hi', 'hello', 'hey', 'greetings', 'who are you', 'introduce yourself', 'what can you do', 'good morning', 'good afternoon', 'good evening'];
  const isGreeting = greetingWords.some(g => lower === g || lower.startsWith(g + ' ') || lower.startsWith(g + '!') || lower.startsWith(g + ',') || lower.startsWith(g + '.'));
  if (isGreeting) {
    return `${label}Hello! I am ${PROFILE.name}'s digital twin. I specialize in QA automation with Playwright, Python backend development with FastAPI, and SQL data integrity. Feel free to ask about any specific project (such as OrbitDesk, Radiology Report Labeling, or Vidhya Vision), work experience at Hub9 Software, research publications, or education!`;
  }

  // 2. Matched Project
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

  // 3. Research / Publications
  if (lower.includes('research') || lower.includes('publication') || lower.includes('paper') || lower.includes('ieee') || lower.includes('springer') || lower.includes('tinyml') || lower.includes('fall detection')) {
    return `${label}Yogesh has co-authored two peer-reviewed research publications:\n\n1. **Fall Detection Using HOG Feature Extraction and Adaptive Boosting Technique** (IEEE, 2023) — Evaluated HOG feature descriptors and AdaBoost classifiers for fall event classification.\n\n2. **Classroom Activity Detection Using TinyML** (Springer Nature, 2025) — Implemented low-power TinyML models on resource-constrained embedded edge devices for ambient activity recognition.`;
  }

  // 4. Hub9 Experience & QA Testing
  if (lower.includes('hub9') || lower.includes('experience') || lower.includes('playwright') || lower.includes('qa') || lower.includes('intern') || lower.includes('postman')) {
    return `${label}At **Hub9 Software** (Jan 2025 – Oct 2025), Yogesh served as a Software Development Intern focused on QA Automation & Backend APIs. Key contributions:\n\n• Engineered automated end-to-end test flows with **Playwright** across Chromium, Firefox, and WebKit for clinical workflows.\n• Validated REST API endpoint payloads, status codes, and error bounds using **Postman**.\n• Contributed to **FastAPI** backend routing and formulated structured **PostgreSQL** queries.\n• Maintained bug reports and regression plans in Jira and Confluence.`;
  }

  // 5. Core Tech Stack / Skills
  if (lower.includes('stack') || lower.includes('skill') || lower.includes('tool') || lower.includes('python') || lower.includes('sql') || lower.includes('fastapi') || lower.includes('pytest')) {
    return `${label}Yogesh's core engineering toolkit covers:\n\n• **QA Automation & Testing**: Playwright, Pytest, Postman, API Validation, E2E Regression Testing.\n• **Backend & APIs**: Python, FastAPI, RESTful APIs, PostgreSQL, SQL, Docker.\n• **AI / LLM & Search**: LangChain, FAISS, Hugging Face, Transformers, Vector Search.\n• **Data & Analytics**: Pandas, NumPy, Power BI, SQL Query Formulation.`;
  }

  // 6. Education & Academics (verified in constants)
  if (lower.includes('education') || lower.includes('degree') || lower.includes('college') || lower.includes('university') || lower.includes('b.tech') || lower.includes('mit') || lower.includes('academic') || lower.includes('study')) {
    return `${label}Yogesh holds a **B.Tech in Electronics & Telecommunication** with a minor in **AI & Machine Learning** from **MIT Academy of Engineering, Alandi** (2020 – 2024). He was also an active member of the Robotics Club (DD-Robocon).`;
  }

  // 7. Certifications & Achievements (verified in constants)
  if (lower.includes('certificate') || lower.includes('certification') || lower.includes('achievement') || lower.includes('hackerrank') || lower.includes('nptel') || lower.includes('amazon ml') || lower.includes('robocon')) {
    return `${label}Key verified certifications and achievements:\n\n• **HackerRank**: SQL (Advanced) — Feb 2025\n• **NPTEL / IIT Kharagpur**: Cloud Computing — Jul 2023\n• **Microsoft & LinkedIn**: Career Essentials in Generative AI & Data Analysis — Dec 2024\n• **Amazon ML Summer School 2023**: Mentorship on Large-Scale Machine Learning\n• **DD-ROBOCON 2022**: National Level Robotics Competition held at IIT Delhi`;
  }

  // 8. Quality Manifesto / Principles
  if (lower.includes('manifesto') || lower.includes('why hire') || lower.includes('quality') || lower.includes('philosophy') || lower.includes('flakiness')) {
    return `${label}Yogesh's engineering philosophy is founded on three core tenets:\n\n1. **Flakiness is a Defect**: Automated suites must produce deterministic, reproducible outcomes across Chromium, Firefox, and WebKit.\n2. **API-First Contracts**: FastAPI schema validations and Pydantic models catch regressions before they reach frontend interfaces.\n3. **Shift-Left Quality**: Testing continuously in CI/CD pipelines eliminates defects during development rather than post-release.`;
  }

  // 9. Contact & Bio / Resume
  if (lower.includes('contact') || lower.includes('email') || lower.includes('hire') || lower.includes('resume') || lower.includes('reach') || lower.includes('linkedin') || lower.includes('github') || lower.includes('phone') || lower.includes('location')) {
    return `${label}You can reach Yogesh directly via email at **${PROFILE.email}**, connect on LinkedIn (${PROFILE.linkedin}), or check out his code repositories on GitHub (${PROFILE.github}). You can also download his resume using the button in the hero section!`;
  }

  // 10. Unknown / Unanswered Question Fallback
  return `${label}I do not have verified information in Yogesh's portfolio regarding that specific question.\n\nAs his grounded portfolio assistant, I can verify and answer questions about:\n• **QA Automation**: Playwright, Pytest, E2E testing, API testing.\n• **Backend & APIs**: Python, FastAPI, PostgreSQL, SQL data queries, Docker.\n• **Featured Projects**: OrbitDesk Support Agent, Radiology Report Labeling, Booking Analytics RAG, and more.\n• **Experience**: Software Development Intern at Hub9 Software.\n• **Education & Research**: MIT Academy of Engineering (B.Tech) and IEEE/Springer publications.\n\nPlease feel free to ask about any of these topics!`;
}

interface GenerateContentParams {
  model: string;
  contents: any[];
  config: {
    systemInstruction: string;
    temperature: number;
    maxOutputTokens: number;
  };
}

export interface GeminiClientLike {
  models: {
    generateContent: (params: GenerateContentParams) => Promise<{ text?: string | null }>;
  };
}

/**
 * Executes a Gemini chat generation request with at most ONE retry for transient 503 / UNAVAILABLE errors.
 * Rejects immediately without retry for permanent errors (400, 401, 403, 404, 429) and timeouts.
 */
export async function executeChatGeneration(
  ai: GeminiClientLike,
  modelName: string,
  contents: any[],
  detailedInstruction: string,
  totalTimeoutMs: number = 8500
): Promise<{ text?: string | null; attempts: number }> {
  const startTime = Date.now();
  let attempts = 0;

  while (attempts < 2) {
    attempts++;
    const elapsed = Date.now() - startTime;
    const remainingTime = totalTimeoutMs - elapsed;

    if (remainingTime <= 1000) {
      throw new Error('timeout');
    }

    let timeoutId: NodeJS.Timeout | null = null;
    const timeoutPromise = new Promise<never>((_, reject) => {
      timeoutId = setTimeout(() => reject(new Error('timeout')), remainingTime);
    });

    try {
      if (attempts === 1) {
        console.log('[api/chat] Initiating Gemini generateContent request with model:', modelName);
      } else {
        console.warn(`[api/chat] Transient 503 received on attempt 1. Attempting retry #2 with ${remainingTime}ms remaining budget...`);
      }

      const response = await Promise.race([
        ai.models.generateContent({
          model: modelName,
          contents,
          config: {
            systemInstruction: detailedInstruction,
            temperature: 0.7,
            maxOutputTokens: 500,
          },
        }),
        timeoutPromise,
      ]);

      if (timeoutId) clearTimeout(timeoutId);
      return { text: response.text, attempts };
    } catch (err: any) {
      if (timeoutId) clearTimeout(timeoutId);

      const errStr = String(err?.message || err || '');
      const errStatus = err?.status || err?.statusCode || err?.code;
      const isTransient503 = (
        errStatus === 503 ||
        errStr.includes('503') ||
        errStr.includes('UNAVAILABLE') ||
        errStr.includes('high demand')
      );

      const elapsedSoFar = Date.now() - startTime;
      const timeRemaining = totalTimeoutMs - elapsedSoFar;

      // Only retry if transient 503, on attempt 1, and first attempt failed quickly with > 3000ms left
      if (attempts === 1 && isTransient503 && elapsedSoFar < 3500 && timeRemaining > 3000) {
        console.warn('[api/chat] Transient 503/UNAVAILABLE encountered on attempt 1. Waiting 400ms backoff before retry...');
        await new Promise(res => setTimeout(res, 400));
        continue;
      }

      // Do not retry: permanent error, timeout, or budget exhausted
      throw err;
    }
  }

  throw new Error('timeout');
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

  if (!apiKey) {
    console.warn('[api/chat] Fallback: GEMINI_API_KEY environment variable is not configured or empty.');
    res.status(200).json({
      reply: getGroundedPortfolioReply(message),
      source: 'grounded_knowledge_base'
    });
    return;
  }

  if (Date.now() < quotaExhaustedUntil) {
    console.warn('[api/chat] Fallback: Active rate-limit/quota cooldown in effect until', new Date(quotaExhaustedUntil).toISOString());
    res.status(200).json({
      reply: getGroundedPortfolioReply(message),
      source: 'grounded_knowledge_base'
    });
    return;
  }

  const modelName = process.env.GEMINI_MODEL || 'gemini-2.5-flash';
  const TIMEOUT_MS = 8500; // 8.5 seconds: safely under Vercel Hobby 10-second limit while accommodating cold starts

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

    const result = await executeChatGeneration(ai, modelName, contents, DETAILED_INSTRUCTION, TIMEOUT_MS);

    if (result.text) {
      console.log(`[api/chat] Success: Live Gemini response generated from model '${modelName}' (attempts: ${result.attempts}).`);
    } else {
      console.warn('[api/chat] Fallback: Gemini request succeeded but returned empty text output.');
    }

    const reply = result.text || getGroundedPortfolioReply(message);
    res.status(200).json({
      reply,
      source: result.text ? 'live_gemini' : 'grounded_knowledge_base'
    });
    return;
  } catch (err: any) {
    const errStr = String(err?.message || err || '');
    const errStatus = err?.status || err?.statusCode || err?.code;

    if (err?.message === 'timeout' || err?.name === 'AbortError') {
      console.warn(`[api/chat] Fallback: Gemini API call timed out after ${TIMEOUT_MS}ms.`);
    } else if (errStatus === 429 || errStr.includes('429') || errStr.includes('quota') || errStr.includes('RESOURCE_EXHAUSTED')) {
      quotaExhaustedUntil = Date.now() + 5 * 60 * 1000; // 5-minute cooldown
      console.warn('[api/chat] Fallback: Gemini rate limit/quota exhausted (HTTP 429). 5-minute cooldown activated.');
    } else if (errStatus === 401 || errStatus === 403 || errStr.includes('API_KEY_INVALID') || errStr.includes('unauthorized') || errStr.includes('PERMISSION_DENIED')) {
      console.error('[api/chat] Fallback: Gemini authentication or permission error. Status:', errStatus || 'unauthorized');
    } else if (errStatus === 404 || errStr.includes('not found') || errStr.includes('NOT_FOUND')) {
      console.error(`[api/chat] Fallback: Model '${modelName}' not found or unsupported for generateContent (HTTP 404).`);
    } else if (errStatus === 503 || errStr.includes('503') || errStr.includes('UNAVAILABLE')) {
      console.warn('[api/chat] Fallback: Gemini service unavailable / capacity exhausted (HTTP 503).');
    } else {
      console.error('[api/chat] Fallback: Gemini request failed with error:', {
        name: err?.name || 'Error',
        status: errStatus,
        message: err?.message || 'Unknown error'
      });
    }

    res.status(200).json({
      reply: getGroundedPortfolioReply(message),
      source: 'grounded_knowledge_base'
    });
    return;
  }
}
