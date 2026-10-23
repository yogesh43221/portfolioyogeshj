import type { VercelRequest, VercelResponse } from '@vercel/node';
import { GoogleGenAI } from '@google/genai';
import { SYSTEM_INSTRUCTION, PROJECTS, PROFILE } from '../constants';

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
