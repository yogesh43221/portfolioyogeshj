import { Project, Experience, Skill, Education, Achievement, Publication, Certification } from './types';

// ==========================================
// YOGESH JADHAV PORTFOLIO DATA
// ==========================================

export const PROFILE = {
  name: "Yogesh Jadhav",
  title: "AI Researcher & Data Engineer",
  // This points to the file you manually uploaded to the public folder.
  profileImage: "/profile.jpg", 
  shortBio: "AI Researcher specializing in Agentic workflows, clinical data optimization, and production-grade ML systems.",
  about: `I am an AI Researcher and Data Engineer with a strong foundation in Electronics & Telecommunications. Currently at Hub9, I focus on architecting autonomous AI agents and optimizing high-volume clinical data pipelines. My work involves designing robust RAG systems, fine-tuning LLMs, and building scalable ETL workflows that drive measurable business ROI. I have a proven track record of reducing operational costs by up to 40% through intelligent system design and rigorous data validation.`,
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
      problem: "Extracting insights from complex booking databases required technical SQL knowledge, creating a bottleneck for non-technical stakeholders.",
      solution: "Built a RAG pipeline where user queries are converted to vector embeddings, matched with schema context, and processed by an LLM to generate accurate answers.",
      results: "Enabled instant, natural language access to booking analytics, reducing dependency on data analysts for routine queries.",
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
    featured: true,
    tags: ["Fraud Detection", "Classification", "Imbalanced Data"],
    extendedDetails: {
      problem: "Financial fraud is rare but costly; standard models failed to detect fraud due to extreme class imbalance (0.1% fraud rate).",
      solution: "Applied SMOTE for synthetic oversampling and trained an XGBoost classifier optimized for high recall.",
      results: "Achieved high detection rate while minimizing false positives on a dataset of 6.3 million transactions.",
      architecture: "Raw Transaction Data → Cleaning & Encoding → SMOTE Oversampling → XGBoost Classifier → Prediction API"
    }
  },
  {
    id: 6,
    title: "Brainlox Chatbot API",
    description: "Scalable REST API built with Flask to serve chatbot responses and handle user sessions.",
    techStack: ["Flask", "Python", "REST API", "JSON"],
    category: "Backend & API Development",
    github: "https://github.com/yogesh43221/FlaskProjects/tree/main/BrainloxChatbot-API",
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&q=80&w=600",
    impact: "Robust API Architecture",
    featured: true,
    tags: ["Backend", "API", "Flask"],
    extendedDetails: {
      problem: "The chatbot needed a decoupled backend to handle logic independently of the frontend UI.",
      solution: "Designed a RESTful API using Flask that processes user input, interacts with the logic layer, and returns structured JSON responses.",
      results: "Enabled seamless integration with multiple frontend clients and ensured scalable request handling.",
      architecture: "Client Request (JSON) → Flask Routes → Input Validation → Logic Processing → Response Formatting → Client"
    }
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    role: "AI Researcher",
    company: "Hub9 (Remote)",
    period: "Jan 2025 - Present",
    description: "Leading research on Agentic Workflows and clinical data optimization.",
    achievements: [
      "Designed and deployed AI Agents using Python & LLMs to automate clinical data workflows, reducing manual processing time by 40%.",
      "Optimized operational costs by refactoring inefficient SQL/ORM queries for high-scale clinical environments.",
      "Analyzed the MIMIC-IV dataset (50k+ patients) using advanced SQL to validate business logic.",
      "Architected a RAG pipeline for medical documentation retrieval with focus on precision and low-latency."
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
  { name: "LLMs (GPT/Llama)", level: 90, icon: "Brain", category: "AI & LLMs", context: "RAG Systems, Fine-tuning" },
  { name: "LangChain", level: 85, icon: "Link", category: "AI & LLMs", context: "Agentic Workflows" },
  { name: "FastAPI / Flask", level: 80, icon: "Server", category: "Backend & APIs", context: "Model Serving" },
  { name: "Advanced SQL", level: 95, icon: "Database", category: "Data Analysis", context: "Complex CTEs, Optimization" },
  { name: "Docker", level: 80, icon: "Container", category: "Backend & APIs", context: "Deployment" },
];

export const SYSTEM_INSTRUCTION = `
You are an AI twin of ${PROFILE.name}. 
Focus on technical depth and measurable impact.
Expertise: Agentic AI, RAG, clinical data engineering, and scalable Python backends.
Tone: Professional, direct, and system-oriented.
`;