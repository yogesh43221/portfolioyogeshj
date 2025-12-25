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

export const ALL_CERTIFICATIONS_URL = "https://www.linkedin.com/in/yogesh-jadhav-60548020a/details/certifications/";

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Booking Analytics RAG System",
    description: "A natural-language-driven analytics system where non-technical users can ask complex questions about booking data using LangChain and Pinecone.",
    techStack: ["Python", "LangChain", "OpenAI API", "Pinecone", "FAISS", "SQL"],
    category: "AI / LLM / NLP Systems",
    github: "https://github.com/yogesh43221/Booking-Analytics-RAG-System",
    image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=600",
    featured: true,
    extendedDetails: {
      problem: "Business teams often rely on static dashboards and pre-defined SQL queries, limiting exploration and requiring technical expertise.",
      solution: "Implemented a Retrieval-Augmented Generation (RAG) pipeline to process user queries via LangChain, retrieving context from a vector DB for LLM-based answering.",
      results: "Reduced dependency on SQL experts and enabled faster business insights through context-aware natural language querying."
    }
  },
  {
    id: 2,
    title: "Mentor Recommendation System",
    description: "A personalized mentor recommendation engine built using profile similarity and preferences to match learners with the right mentors.",
    techStack: ["Python", "Pandas", "Scikit-learn", "Cosine Similarity"],
    category: "Machine Learning Systems",
    github: "https://github.com/yogesh43221/mentor_recommendation_system",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600",
    extendedDetails: {
      problem: "Learners often struggle to find the right mentor due to mismatches in skills, interests, and goals.",
      solution: "Built a recommendation engine using Cosine Similarity on encoded categorical features (skills) and normalized numerical attributes (experience).",
      results: "Created a scalable content-based recommendation system with explainable matching logic."
    }
  },
  {
    id: 3,
    title: "Transaction Fraud Detection",
    description: "A robust fraud detection system designed to handle extreme class imbalance in financial transaction data using SMOTE and Random Forest.",
    techStack: ["Python", "Pandas", "Scikit-learn", "SMOTE", "Random Forest"],
    category: "Machine Learning Systems",
    github: "https://github.com/yogesh43221/Data-Science-Projects/tree/main/Transaction%20Fraud%20Detection",
    image: "https://images.unsplash.com/photo-1563986768494-4dee46a38531?auto=format&fit=crop&q=80&w=600",
    extendedDetails: {
      problem: "Financial transaction datasets are highly imbalanced, making fraud detection difficult and error-prone.",
      solution: "Applied SMOTE to balance samples and trained a Random Forest classifier with hyperparameter tuning for recall and precision.",
      results: "Significantly improved fraud recall and demonstrated an end-to-end imbalance-aware ML workflow."
    }
  },
  {
    id: 4,
    title: "Pizza Sales Trends Analysis",
    description: "End-to-end BI pipeline analyzing sales patterns and building executive dashboards to visualize revenue and category performance.",
    techStack: ["SQL", "Power BI", "Data Modeling"],
    category: "Data Analytics & Business Intelligence",
    github: "https://github.com/yogesh43221/Analyzing-Pizza-Sales-Trends-with-SQL-and-Power-BI",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600",
    extendedDetails: {
      problem: "Raw sales data lacks structured analysis for immediate business insights.",
      solution: "Structured raw data using SQL queries (revenue by category, trends) and built interactive Power BI visuals.",
      results: "Developed a KPI-driven dashboard for business storytelling and trend analysis."
    }
  },
  {
    id: 5,
    title: "Brainlox Chatbot API",
    description: "A RESTful chatbot API built to answer student course-related queries using Flask and NLP preprocessing.",
    techStack: ["Python", "Flask", "NLP", "JSON"],
    category: "Backend & API Development",
    github: "https://github.com/yogesh43221/FlaskProjects/tree/main/BrainloxChatbot-API",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=600",
    extendedDetails: {
      problem: "Students need quick answers about courses without manual browsing.",
      solution: "Implemented Flask-based API endpoints with NLP preprocessing for intent matching.",
      results: "Developed a stateless, extendable backend-first chatbot architecture."
    }
  },
  {
    id: 6,
    title: "Vidhya Vision",
    description: "Context-aware educational content discovery tool using transformer models and vector similarity search.",
    techStack: ["Python", "LangChain", "FAISS", "Hugging Face"],
    category: "AI / LLM / NLP Systems",
    github: "https://github.com/yogesh43221/Vidhya-Vision",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=600",
    extendedDetails: {
      problem: "Traditional keyword search fails to capture semantic meaning in educational content.",
      solution: "Used text embeddings from transformer models and FAISS for vector similarity search.",
      results: "Enabled high-quality semantic ranking for educational resources."
    }
  },
  {
    id: 7,
    title: "Blinkit Sales Data Analytics",
    description: "Deep dive into retail sales patterns and inventory metrics to generate actionable behavioral insights.",
    techStack: ["SQL", "Python", "Data Cleaning"],
    category: "Data Analytics & Business Intelligence",
    github: "https://github.com/yogesh43221/Blinkit-Sales-Data-Analytics",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=600",
    extendedDetails: {
      problem: "Retail businesses require real-time insights into sales patterns to optimize inventory.",
      solution: "Conducted SQL-heavy analysis on revenue trends and product category performance.",
      results: "Identified key customer behavior patterns and revenue growth opportunities."
    }
  },
  {
    id: 8,
    title: "Quick Resume Analyzer",
    description: "Automation tool for parsing resumes and matching candidate skills with job requirements using SpaCy.",
    techStack: ["Python", "SpaCy", "Streamlit", "NLP"],
    category: "AI / LLM / NLP Systems",
    github: "https://github.com/yogesh43221/Quick-Resume-Analyzer",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=600",
    extendedDetails: {
      problem: "Manual resume screening is slow, inconsistent, and error-prone.",
      solution: "Developed an NLP-based entity extraction tool using SpaCy and a Streamlit UI for recruiters.",
      results: "Automated resume parsing and skill matching to improve recruiter productivity."
    }
  },
  {
    id: 9,
    title: "Automated E2E Test Suite for Clinical Workflows",
    description: "Robust automation framework reducing manual regression testing for clinical AI platforms using Playwright.",
    techStack: ["Python", "Playwright", "Browser-Use AI", "CI/CD", "Automated Testing"],
    category: "QA & Systems Engineering",
    github: "https://github.com/yogesh43221",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600",
    featured: true,
    extendedDetails: {
      problem: "Clinical AI platforms involve complex workflows difficult to scale with manual regression testing.",
      solution: "Engineered a Python-based framework using Playwright locators and AI agents for exploratory testing of dynamic content.",
      results: "Reduced manual regression time and improved release confidence for clinical AI systems.",
      contributions: [
        "Automated login, MFA, and role-based access switching journeys",
        "Stabilized tests with explicit waits for AI inference latency",
        "Integrated AI agents to validate logical consistency in medical summaries",
        "Verified audio playback and session persistence across clinical apps"
      ]
    }
  },
  {
    id: 10,
    title: "Radiology Report Management System",
    description: "Production-grade healthcare app built to practice Gray-Box testing and identify SDLC defects early.",
    techStack: ["FastAPI", "React.js", "PostgreSQL", "Docker", "Gray Box Testing"],
    category: "QA & Systems Engineering",
    github: "https://github.com/yogesh43221",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600",
    featured: true,
    extendedDetails: {
      problem: "Disconnected testing approaches lead to misdiagnosed defects and incomplete coverage.",
      solution: "Built a full-stack system with FastAPI/React/PostgreSQL to test failures across all layers.",
      results: "Identified deep architectural bugs and improved debugging efficiency using Gray Box techniques.",
      contributions: [
        "Designed REST APIs with JWT auth and payload validation",
        "Architected PostgreSQL schemas for data integrity testing",
        "Built React UI for real-time state and payload inspection",
        "Containerized the environment with Docker for reproducibility"
      ]
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
    modularAchievements: [
      {
        title: "Backend Engineering",
        iconType: 'engineering',
        points: [
          "Developed RESTful APIs for clinical agents using FastAPI & Python.",
          "Managed Docker containerization for staging and testing environments."
        ]
      },
      {
        title: "QA & Automation",
        iconType: 'qa',
        points: [
          "Acted as Release Gatekeeper ensuring zero-defect deployments.",
          "Built automated E2E test suites using Playwright, significantly reducing manual regression cycles."
        ]
      },
      {
        title: "Data Systems",
        iconType: 'data',
        points: [
          "Optimized PostgreSQL queries for medical decision trees.",
          "Implemented logic for complex clinical decision workflows."
        ]
      }
    ]
  },
  {
    id: 2,
    role: "Data Engineer Intern",
    company: "Celebal Technologies Pvt. Ltd.",
    period: "June 2023 - Aug 2023",
    description: "Focused on end-to-end ETL pipelines and Business Intelligence architectures.",
    modularAchievements: [
      {
        title: "ETL & Data Pipelines",
        iconType: 'data',
        points: [
          "Developed and optimized ETL pipelines for large-scale sales datasets.",
          "Improved data processing efficiency by ~30% through query and pipeline optimization."
        ]
      },
      {
        title: "Analytics & BI",
        iconType: 'systems',
        points: [
          "Built executive Power BI dashboards for Customer Acquisition & Retention analysis.",
          "Translated raw transactional data into KPI-driven business insights."
        ]
      },
      {
        title: "Data Analysis & Forecasting",
        iconType: 'analytics',
        points: [
          "Analyzed historical sales trends to improve forecasting accuracy.",
          "Supported data-driven decision-making for business stakeholders."
        ]
      }
    ]
  },
  {
    id: 3,
    role: "Machine Learning Intern",
    company: "InThink Technologies Pvt. Ltd.",
    period: "Aug 2022 – Dec 2022",
    description: "Applied statistical modeling and algorithmic optimization to large-scale datasets.",
    modularAchievements: [
      {
        title: "Machine Learning & Modeling",
        iconType: 'research',
        points: [
          "Built and optimized machine learning models for real-world datasets.",
          "Fine-tuned algorithms using performance metrics to reduce error rates by ~50%."
        ]
      },
      {
        title: "Data Pipelines & Preprocessing",
        iconType: 'data',
        points: [
          "Designed efficient data preprocessing pipelines for model training.",
          "Reduced preprocessing time and improved training stability."
        ]
      },
      {
        title: "Model Evaluation & Optimization",
        iconType: 'systems',
        points: [
          "Analyzed precision, recall, and accuracy to guide model improvements.",
          "Iteratively refined features and hyperparameters."
        ]
      }
    ]
  }
];

export const EARLY_ENGINEERING: Experience[] = [
  {
    id: 4,
    role: "Hardware Design Engineer Trainee",
    company: "Aeron Systems Pvt. Ltd.",
    period: "Jun 2023 - Dec 2023",
    description: "Foundational engineering role focusing on high-reliability systems and navigation grade testing.",
    modularAchievements: [
      {
        title: "Systems Validation",
        iconType: 'systems',
        points: [
          "Tested defense-grade navigation systems for the Indian Navy, ensuring zero-failure reliability.",
          "Executed stress tests for high-reliability hardware compliance."
        ]
      },
      {
        title: "Engineering Compliance",
        iconType: 'research',
        points: [
          "Managed technical documentation and international compliance checks for production hardware.",
          "Optimized quality control processes for naval navigation components."
        ]
      }
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
    title: "SQL (Advanced)",
    issuer: "HackerRank",
    date: "Feb 2025",
    link: "https://www.hackerrank.com/certificates/dce52142cbb1"
  },
  {
    id: 2,
    title: "Cloud Computing - NPTEL",
    issuer: "NPTEL / IIT Kharagpur",
    date: "Jul 2023",
    link: "https://nptel.ac.in/noc/Ecertificate/?q=NPTEL23CS89S545102024"
  },
  {
    id: 3,
    title: "Career Essentials in Data Analysis",
    issuer: "Microsoft & LinkedIn",
    date: "Dec 2024",
    link: "https://www.linkedin.com/learning/certificates/4a7fd2ac1808cad37350a93231cd76cb6d85d49c7244df9b88a42882d906ad48"
  },
  {
    id: 4,
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft & LinkedIn",
    date: "Dec 2024",
    link: "https://www.linkedin.com/learning/certificates/d074fb736fdfab6d6c0f30e298d28c3f6d4fd49b13958cf5d42579eb1da4f712"
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 1,
    title: "Amazon ML Summer School 2023",
    description: "Intensive mentorship by Amazon Scientists on Large Scale Machine Learning and Deep Neural Networks.",
    link: "https://drive.google.com/file/d/1cTHgGRHQiOSybRy7cbgNUgATr736QCLL/view?usp=sharing"
  },
  {
    id: 2,
    title: "DD-ROBOCON 2022",
    description: "National Level Robotics competition held at IIT Delhi. Expertise in Eagle PCB, Embedded Systems, and hardware validation.",
    link: "https://drive.google.com/file/d/10N3A4Sd5KlkR0SzpXLXfD64jtI2EGNWv/view?usp=sharing"
  }
];

export const SKILLS: Skill[] = [
  // Backend & APIs
  { name: "FastAPI / Flask", level: 90, icon: "Server", category: "Backend & APIs", context: "Primary Frameworks" },
  { name: "Python (Expert)", level: 95, icon: "Code", category: "Backend & APIs", context: "Main Language" },
  { name: "SQLAlchemy", level: 90, icon: "Layers", category: "Backend & APIs", context: "ORM / Modeling" },
  { name: "Pydantic", level: 92, icon: "CheckCircle", category: "Backend & APIs", context: "Data Validation" },
  { name: "JWT / OAuth2", level: 85, icon: "Lock", category: "Backend & APIs", context: "Auth & Security" },
  { name: "RESTful APIs", level: 90, icon: "Network", category: "Backend & APIs", context: "Service Design" },
  
  // Data Analysis & DBMS
  { name: "Advanced SQL", level: 95, icon: "Database", category: "Data Analysis", context: "Complex Joins" },
  { name: "MySQL", level: 92, icon: "Database", category: "Data Analysis", context: "Production RDBMS" },
  { name: "PostgreSQL", level: 88, icon: "Database", category: "Data Analysis", context: "Clinical Data" },
  { name: "Database Design", level: 85, icon: "GitMerge", category: "Data Analysis", context: "Schema Modeling" },
  { name: "Query Optimization", level: 85, icon: "TrendingUp", category: "Data Analysis", context: "Performance Tuning" },
  { name: "Power BI", level: 90, icon: "BarChart", category: "Data Analysis", context: "BI Pipelines" },
  { name: "Pandas / NumPy", level: 90, icon: "Grid", category: "Data Analysis", context: "Data Wrangling" },
  
  // AI & LLMs
  { name: "LangChain", level: 90, icon: "Layers", category: "AI & LLMs", context: "RAG Pipelines" },
  { name: "LLMs (GPT/Llama)", level: 90, icon: "Brain", category: "AI & LLMs", context: "Agentic Logic" },
  { name: "Vector DBs", level: 85, icon: "Zap", category: "AI & LLMs", context: "Pinecone / FAISS" },
  { name: "Prompt Eng.", level: 85, icon: "Terminal", category: "AI & LLMs", context: "System Prompts" },
  
  // Machine Learning
  { name: "Scikit-learn", level: 90, icon: "Activity", category: "Machine Learning", context: "Modeling" },
  { name: "XGBoost / Random Forest", level: 95, icon: "GitBranch", category: "Machine Learning", context: "Classification" },
  { name: "PyTorch", level: 75, icon: "Cpu", category: "Machine Learning", context: "Neural Nets" },
  { name: "Hugging Face", level: 85, icon: "Smile", category: "Machine Learning", context: "Transformers" },
  { name: "Feature Eng.", level: 90, icon: "Sliders", category: "Machine Learning", context: "Preprocessing" },
  
  // Tools & Platforms
  { name: "Playwright", level: 90, icon: "Shield", category: "Tools & Platforms", context: "QA Automation" },
  { name: "Postman", level: 95, icon: "Send", category: "Tools & Platforms", context: "API Debugging" },
  { name: "DBeaver", level: 90, icon: "Database", category: "Tools & Platforms", context: "SQL Workbench" },
  { name: "Docker", level: 85, icon: "Container", category: "Tools & Platforms", context: "Deployment" },
  { name: "Git", level: 90, icon: "GitMerge", category: "Tools & Platforms", context: "Versioning" },
  { name: "AWS (Basic)", level: 75, icon: "Cloud", category: "Tools & Platforms", context: "Infrastructure" }
];

export const SYSTEM_INSTRUCTION = `
You are an AI twin of ${PROFILE.name}. 
Persona: Software Engineer, Data Analyst, and QA Automation expert.
Expertise: Bridging the gap between dev and quality. Hub9 experience is primary.
Tone: Professional, direct, and system-oriented.
`;