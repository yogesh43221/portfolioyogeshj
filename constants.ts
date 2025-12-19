import { Project, Experience, Skill, Education, Achievement, Publication, Certification } from './types';

// ==========================================
// YOGESH JADHAV PORTFOLIO DATA
// ==========================================

export const PROFILE = {
  name: "Yogesh Jadhav",
  title: "Software Engineer | Data Analyst | QA Automation",
  profileImage: "/profile.jpg", 
  shortBio: "I bridge the gap between development and quality. Building systems that are robust, scalable, and data-driven.",
  about: `Hello! I’m Yogesh Jadhav. Unlike traditional developers who just write code, or testers who just find bugs, I operate at the intersection of both. During my time at Hub9, I didn’t just build medical agents using Python — I containerized them with Docker and built Playwright automation suites to test them. Whether I’m optimizing SQL queries for a Data Analyst role or training Computer Vision models for an AI project, my philosophy remains the same: “Quality is not an afterthought; it is part of the architecture.”`,
  email: "yj43221@gmail.com",
  location: "Pune, India",
  github: "https://github.com/yogesh43221",
  linkedin: "https://www.linkedin.com/in/yogesh-jadhav-60548020a/"
};

export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'AI Chat', href: '#ai-chat' },
  { name: 'Contact', href: '#contact' },
];

export const RESUME_URLS = {
  AI_ML: "https://drive.google.com/file/d/your-ai-ml-resume-id/view?usp=sharing",
  DATA_ANALYST: "https://drive.google.com/file/d/your-data-analyst-resume-id/view?usp=sharing",
  BACKEND: "https://drive.google.com/file/d/your-backend-resume-id/view?usp=sharing"
};

export const ALL_CERTIFICATIONS_URL = "https://drive.google.com/drive/folders/your-certs-folder-id?usp=sharing";

export const PROJECTS: Project[] = [
  {
    id: 101,
    title: "Automated E2E Test Suite for Clinical Workflows",
    description: "Designed a robust automation framework that reduced manual regression testing by automating complex clinical workflows using Playwright and AI agents.",
    techStack: ["Python", "Playwright", "Browser-Use AI", "Automated Testing", "CI/CD"],
    category: "QA & Systems Engineering",
    github: "https://github.com/yogesh43221",
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=600",
    impact: "QA Automation Engineer (Hub9)",
    featured: true,
    tags: ["QA", "Playwright", "CI/CD"],
    extendedDetails: {
      problem: "Manual regression testing for complex clinical workflows was slow and error-prone, especially with dynamic AI-generated content.",
      solution: "Engineered a Python & Playwright framework with dynamic UI handling and AI-driven exploratory testing to ensure clinical accuracy.",
      results: "Significantly stabilized flaky UI tests and reduced manual regression cycles, ensuring high reliability for medical decision agents.",
      contributions: [
        "Automated complete user journeys (Login → MFA → Role Switching → Report Generation) using Python & Playwright",
        "Implemented retry loops and explicit waits to stabilize flaky UI tests",
        "Integrated Browser-Use AI for exploratory testing of medical summaries",
        "Validated audio playback, tab navigation, and session persistence"
      ]
    }
  },
  {
    id: 102,
    title: "Radiology Report Management System",
    description: "A production-grade healthcare system built to deeply understand SDLC failures through Gray-Box testing and backend integrity validation.",
    techStack: ["FastAPI", "React.js", "PostgreSQL", "Docker", "Gray-Box Testing"],
    category: "Backend & API Development",
    github: "https://github.com/yogesh43221",
    image: "https://images.unsplash.com/photo-1516542077784-b8967f153db9?auto=format&fit=crop&q=80&w=600",
    impact: "Full-Stack Engineer (QA Focus)",
    featured: true,
    tags: ["FastAPI", "Docker", "Full Stack"],
    extendedDetails: {
      problem: "Traditional 'Black Box' testing often misses deep integration defects at the data and API layer during rapid deployment cycles.",
      solution: "Build a real-world app with FastAPI and React to expose and resolve integration defects across frontend, backend, and database layers.",
      results: "Exposed and resolved critical integration failures in the medical data pipeline via systematic gray-box testing.",
      contributions: [
        "Designed REST APIs with FastAPI, JWT authentication, and strict payload validation",
        "Built a normalized PostgreSQL schema with constraints for integrity testing",
        "Implemented Gray-Box testing to ensure frontend actions correctly updated backend data",
        "Containerized services using Docker for reproducible test environments"
      ]
    }
  },
  {
    id: 1,
    title: "Booking Analytics RAG System",
    description: "A Retrieval-Augmented Generation system that enables natural language querying of booking data for instant analytics.",
    techStack: ["LangChain", "OpenAI API", "Pinecone", "Python"],
    category: "AI / LLM / NLP Systems",
    github: "https://github.com/yogesh43221/Booking-Analytics-RAG-System",
    link: "https://github.com/yogesh43221/Booking-Analytics-RAG-System",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=600",
    impact: "Automated QA for booking data",
    featured: true,
    tags: ["RAG", "LLM", "Analytics", "NLP"],
    extendedDetails: {
      problem: "Traditional analytics dashboards for booking data required complex SQL knowledge to extract deep insights, creating a bottleneck for non-technical stakeholders.",
      solution: "Implemented a Retrieval-Augmented Generation (RAG) architecture using LangChain and Pinecone to allow natural language queries.",
      results: "Reduced time-to-insight for operational teams by 80%, enabling self-service analytics.",
      architecture: "User Query → Embedding Model → Vector DB (Pinecone) → Context Retrieval → LLM (GPT) → Natural Language Answer"
    }
  },
  {
    id: 4,
    title: "Transaction Fraud Detection",
    description: "Robust fraud detection system handling extreme class imbalance in financial transaction data.",
    techStack: ["XGBoost", "SMOTE", "Scikit-learn", "Python"],
    category: "Machine Learning Systems",
    github: "https://github.com/yogesh43221/Data-Science-Projects/tree/main/Transaction%20Fraud%20Detection",
    image: "https://images.unsplash.com/photo-1563986768494-4dee46a38531?auto=format&fit=crop&q=80&w=600",
    impact: "Handled 6.3M+ transactions",
    featured: false,
    tags: ["Fraud Detection", "Classification", "Imbalanced Data"],
    extendedDetails: {
      problem: "Financial fraud models failed due to extreme class imbalance (0.1% fraud rate).",
      solution: "Applied SMOTE for synthetic oversampling and trained an XGBoost classifier.",
      results: "Achieved high detection rate while minimizing false positives in testing.",
      architecture: "Raw Transaction Data → Cleaning & Encoding → SMOTE Oversampling → XGBoost Classifier → Prediction API"
    }
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    role: "Software Engineer Intern",
    company: "Hub9",
    period: "Jan 2025 – Oct 2025",
    description: "Bridging the gap between development and quality through full-stack engineering and QA automation.",
    achievements: [],
    modularAchievements: [
      {
        title: "💻 Backend Engineering",
        points: [
          "Developed RESTful APIs for clinical agents using FastAPI & Python.",
          "Managed Docker containerization for staging and testing environments."
        ]
      },
      {
        title: "✅ QA & Automation",
        points: [
          "Acted as Release Gatekeeper.",
          "Built automated E2E test suites using Playwright, significantly reducing regression cycles."
        ]
      },
      {
        title: "📊 Data Logic",
        points: [
          "Optimized PostgreSQL queries.",
          "Implemented complex algorithmic logic for medical decision trees."
        ]
      }
    ]
  },
  {
    id: 2,
    role: "Data Engineer Intern",
    company: "Celebal Technologies Pvt. Ltd.",
    period: "June 2023 - Aug 2023",
    description: "Focused on ETL pipelines and BI Dashboards.",
    achievements: [
      "Developed and optimized ETL pipelines for sales data, improving efficiency by 30%.",
      "Built executive Power BI dashboards for Customer Acquisition & Retention.",
      "Improved sales forecasting accuracy by 15% through historical trend analysis."
    ]
  }
];

export const EARLY_ENGINEERING: Experience[] = [
  {
    id: 4,
    role: "Hardware Design Engineer Trainee",
    company: "Aeron Systems Pvt. Ltd.",
    period: "Jun 2023 - Dec 2023",
    description: "Foundational engineering role focusing on high-reliability systems.",
    achievements: [
      "Tested defense-grade navigation systems for the Indian Navy, ensuring zero-failure reliability.",
      "Managed technical documentation and compliance checks for production-ready hardware."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    id: 1,
    degree: "B.Tech in Electronics & Telecommunication",
    institution: "MIT Academy of Engineering, Alandi",
    period: "2020 - 2024",
    description: "Minor in AI/ML. Active member of Robotics Club (Robocon)."
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    id: 1,
    title: "Fall Detection Using HOG Feature Extraction and Adaptive Boosting Technique",
    conference: "IEEE International Conference",
    year: "2023",
    summary: "Proposed a computer vision pipeline utilizing HOG features and AdaBoost to accurately detect falls in elderly populations.",
    link: "https://ieeexplore.ieee.org"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 1,
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2024",
    link: "#"
  },
  {
    id: 2,
    title: "Deep Learning Specialization",
    issuer: "DeepLearning.AI",
    date: "2023",
    link: "#"
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 1,
    title: "Amazon ML Summer School 2023",
    description: "Selected for intensive mentorship by Amazon Scientists on Large Scale ML.",
    link: "https://amazon.com"
  }
];

export const SKILLS: Skill[] = [
  { name: "FastAPI / Flask", level: 90, icon: "Server", category: "Backend & APIs", context: "Production APIs" },
  { name: "Playwright", level: 85, icon: "Shield", category: "Tools & Platforms", context: "E2E Automation" },
  { name: "Advanced SQL", level: 95, icon: "Database", category: "Data Analysis", context: "Optimization, CTEs" },
  { name: "LLMs (GPT/Llama)", level: 90, icon: "Brain", category: "AI & LLMs", context: "RAG, Agents" },
  { name: "Docker", level: 85, icon: "Container", category: "Backend & APIs", context: "Containerization" },
];

export const SYSTEM_INSTRUCTION = `
You are an AI twin of ${PROFILE.name}. 
Persona: Software Engineer, Data Analyst, and QA Automation expert.
Expertise: Bridging the gap between dev and quality. Hub9 experience is primary.
Tone: Professional, direct, and system-oriented.
`;