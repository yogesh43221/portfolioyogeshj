# Portfolio Redesign Integration Context & Working Memory

## 1. Project Objective & Success Criteria
- **Project Goal:** Safely integrate the Google AI Studio portfolio redesign from `portfolio` (read-only reference) into the existing GitHub repository `portfolioyogeshj-redesign` on branch `redesign-preview`.
- **Live Site:** `https://portfolioyogeshj.vercel.app/`
- **GitHub Repository:** `https://github.com/yogesh43221/portfolioyogeshj`
- **Active Branch:** `redesign-preview` (Production branch `main` is untouched)
- **Deployment Platform:** Vercel (Preset: Vite, Output: `dist`, Build: `vite build`, Node.js: 24.x)
- **Success Criteria:**
  1. Complete AI Studio redesign (UI, components, styling, animations, terminal, case study dossiers) integrated without feature regression.
  2. Zero secret leaks: `VITE_API_KEY` removed from client-side bundles; `GEMINI_API_KEY` configured strictly server-side.
  3. Vercel Serverless Function architecture (`api/chat.ts`, `api/health.ts`) created to cleanly support the AI assistant without relying on an un-hosted Express process.
  4. Honest fallback responses: when `GEMINI_API_KEY` is missing or quota is exhausted, responses are clearly marked as sourced from verified grounded portfolio records.
  5. Clean production build (`npm run build`) with zero TypeScript errors (`npx tsc --noEmit`).
  6. Git history, remote, and branches preserved; no unauthorized commits, pushes, merges, or Vercel setting changes.

## 2. Current Status & Milestone Checklist
- [x] Phase 1: Read-only inspection of both projects completed and reported.
- [x] Pre-implementation alignment on Vercel Function architecture, secret safety, and honest fallback.
- [x] Milestone 1: Initialize `CONTEXT.md` and harden `.gitignore` (explicitly ignores `.env`, `.env.*`, `.vercel`).
- [x] Milestone 2: Recreate asset directories (`public/`, `src/assets/images/`) and transfer assets (`mascot-*.svg`, `profile.jpg`).
- [x] Milestone 3: Implement Vercel Serverless Functions (`api/chat.ts`, `api/health.ts`) with honest grounded fallback and isolated local test script (`scripts/verify-chat-api.ts`).
- [x] Milestone 4: Reconcile configuration files (`package.json`, `vite.config.ts`, `tailwind.config.js`, `tsconfig.json`, `index.html`, `vite-env.d.ts`).
- [x] Milestone 5: Transfer and adapt redesign components, services, constants, types, styles, and `App.tsx`.
- [x] Milestone 6: Execute local verification and initial push (`e7523c6`).
- [x] Milestone 7: Add QA resume PDF to `public/` and push (`b636e69`).
- [x] Milestone 8: Investigate and resolve Vercel runtime `ERR_MODULE_NOT_FOUND` in `api/chat.ts` by making it self-contained (`892ddec`).
- [x] Milestone 9: Implement safe server-side diagnostic logging (categorizing missing key, empty response, auth, quota, 404 model, and timeouts) and increase internal timeout to 8.5s (`9257419`).
- [x] Milestone 10: Implement transient HTTP 503 single retry with time-guard, greeting vs unknown question distinction, education/certifications matchers, and 15-case test suite (`776b0d8`).
- [x] Milestone 11: Add VERIFIED_BACKGROUND (MIT AOE B.Tech, Hub9 Software, research, certifications) into live Gemini DETAILED_INSTRUCTION, add salary unavailable instruction, and expand regression tests to 19 cases.

## 3. Technology Stack & Component Architecture
- **Frontend Framework:** React 18, TypeScript, Vite 5, TailwindCSS 3, Lucide React
- **Email Contact Service:** `@emailjs/browser` reading `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`
- **Serverless Backend:** Vercel Node.js Functions (`api/chat.ts`, `api/health.ts`) with `@google/genai`
- **Key Secrets:**
  - `GEMINI_API_KEY`: Server-only secret to be configured in Vercel project settings (not baked into frontend)
  - `VITE_EMAILJS_*`: Client-safe configuration for EmailJS transmission
- **Design System:** Custom `paper` and `blueprint` Tailwind extensions, synchronized `workstation-scrollbar`, light theme `#FAF7F2` and dark theme `#0E1117`.

## 4. Significant Decisions & Trade-Offs
- **Decision 1: Vercel Serverless Functions (`api/chat.ts`) over Express server (`server.ts`):**
  - *Rationale:* Vercel's Vite preset does not run background Node/Express servers. Placing handler functions in `api/` gives native, zero-config serverless endpoints on Vercel without altering build commands or presets.
- **Decision 2: Remove `process.env.API_KEY` from `vite.config.ts` `define`:**
  - *Rationale:* Prevents API key exposure in client JavaScript bundles. Only serverless functions will read `process.env.GEMINI_API_KEY`.
- **Decision 3: Honest fallback labeling:**
  - *Rationale:* Fallback responses generated from the embedded portfolio knowledge base explicitly prefix responses with `[Verified Portfolio Knowledge Base]` and return `{ source: 'grounded_knowledge_base' }`, distinguishing them from live generative text.
- **Decision 4: Clean `vite.config.ts` without custom connect middleware:**
  - *Rationale:* Keeps the Vite build config simple and unpolluted. Local API testing is verified using an isolated runner script (`scripts/verify-chat-api.ts`), while live Vercel Function behavior will be tested on the Vercel Preview URL.
- **Decision 5: Preserved `ResumeDropdown.tsx` & `RESUME_URLS` in `constants.ts`:**
  - *Rationale:* Backward compatibility ensures that existing components are not broken while the new `WorkspaceHero` direct resume download is the active UI.
- **Decision 6: Self-contained `api/chat.ts` for Vercel Node ESM compatibility:**
  - *Root Cause:* In `package.json`, `"type": "module"` configures Node.js in native ESM mode. In Vercel's deployed container `/var/task/`, relative extensionless imports like `../constants` fail at runtime with `Error [ERR_MODULE_NOT_FOUND]: Cannot find module '/var/task/constants' imported from /var/task/api/chat.js` because `constants.ts` is outside `api/` and Node ESM requires exact extensions and compiled modules.
  - *Solution:* Inlined `PROFILE`, `SYSTEM_INSTRUCTION`, and the 7 `PROJECTS` knowledge definitions directly inside `api/chat.ts`.
  - *Trade-off:* Eliminates all local relative imports, requires zero build configuration changes or plugins, and makes the serverless function 100% self-contained and reliable on Vercel Node runtime.

## 5. Tests Performed & Verification Log
- **1. Handler Unit/Contract Test (`npm run test:api`):**
  - Test 1 (GET method rejection): Status 405 Method Not Allowed — PASSED
  - Test 2 (Empty body rejection): Status 400 Message is required — PASSED
  - Test 3 (Grounded fallback formatting): Status 200, source `grounded_knowledge_base`, honest label present, verified OrbitDesk details returned — PASSED
  - Test 4 (Knowledge base query): Direct query returned verified Hub9 experience — PASSED
  - Test 5 (Stringified JSON payload): Defensive body parsing passed — PASSED
  - Overall: 5/5 tests passed
- **2. TypeScript Compilation Check (`npx tsc --noEmit`):**
  - Total errors: 0
- **3. Production Bundle Build (`npm run build`):**
  - Vite transformed 1,513 modules in 3.36s
  - Output files generated in `dist/`:
    - `dist/index.html` (3.89 kB)
    - `dist/assets/profile-CTGvIZmj.jpg` (8.88 kB)
    - `dist/assets/index-BbsU5BsY.css` (80.47 kB)
    - `dist/assets/index-BHpi6XYi.js` (396.07 kB)
- **4. Secret Leakage Audit:**
  - Ripgrep search in `dist/` for `GEMINI_API_KEY`: 0 results
  - Ripgrep search in `dist/` for `VITE_API_KEY`: 0 results
  - Zero API secrets defined in `vite.config.ts`
  - `.gitignore` confirmed ignoring `.env`, `.env.*`, `node_modules`, `dist`, `.vercel`
- **5. Resume Asset Verification:**
  - PDF `public/Yogesh_Jadhav_QA_Resume.pdf` (114,389 bytes) verified present and copied to `dist/`.

## 6. Current Stopping Point & Next Steps
- **Current Branch:** `redesign-preview`
- **Working Tree Changes:** `api/chat.ts` and `CONTEXT.md` modified.
- **Next Step:**
  - Present report and verification results to user.
  - Await explicit user approval before staging, committing, and pushing to `origin redesign-preview`.


