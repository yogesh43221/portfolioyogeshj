import { Project, Experience, Skill, Education, Achievement, Publication, Certification } from './types';

// ==========================================
// YOGESH JADHAV PORTFOLIO DATA
// ==========================================

export const PROFILE = {
  name: "Yogesh Jadhav",
  title: "AI Researcher & Data Engineer",
  // CHANGED: Using a relative path without the leading slash.
  // Ensure 'profile.jpg' is in the root directory (same level as index.html)
  profileImage: "profile.jpg", 
  shortBio: "AI Researcher building agentic systems, LLM workflows, and production-grade data pipelines.",
  about: `I am an AI Researcher and Data Engineer with a strong foundation in Electronics & Telecommunications. Currently working at Hub9, I design autonomous AI agents and optimize large-scale clinical data pipelines. My expertise spans across building RAG systems, fine-tuning LLMs, and architecting robust ETL workflows. I have a proven track record of reducing operational costs and improving system efficiency, demonstrated through my work with the MIMIC-IV dataset and high-volume sales forecasting systems.`,
  email: "yj43221@gmail.com",
  location: "Pune, India",
  github: "https://github.com/yogesh43221",
  linkedin: "https://www.linkedin.com/in/yogesh-jadhav-60548020a/"
};

export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'AI Chat', href: '#ai-chat' },
  { name: 'Contact', href: '#contact' },
];

// ------------------------------------------
// RESUME LINKS (Update these with actual URLs)
// ------------------------------------------
export const RESUME_URLS = {
  AI_ML: "https://drive.google.com/file/d/your-ai-ml-resume-id/view?usp=sharing",
  DATA_ANALYST: "https://drive.google.com/file/d/your-data-analyst-resume-id/view?usp=sharing",
  BACKEND: "https://drive.google.com/file/d/your-backend-resume-id/view?usp=sharing"
};

// ------------------------------------------
// CERTIFICATIONS ARCHIVE
// ------------------------------------------
export const ALL_CERTIFICATIONS_URL = "https://drive.google.com/drive/folders/your-certs-folder-id?usp=sharing";

export const PROJECTS: Project[] = [
  // --- AI / LLM / NLP Systems ---
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
    id: 2,
    title: "Vidhya Vision Search",
    description: "Semantic search engine for educational content utilizing vector embeddings for context-aware discovery.",
    techStack: ["LangChain", "FAISS", "Hugging Face", "React"],
    category: "AI / LLM / NLP Systems",
    github: "https://github.com/yogesh43221/Vidhya-Vision",
    image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&q=80&w=600",
    impact: "Context-aware course discovery",
    tags: ["Semantic Search", "NLP", "Embeddings"],
    extendedDetails: {
      problem: "Keyword-based search failed to capture the intent behind educational queries, leading to irrelevant course recommendations.",
      solution: "Implemented a semantic search system using Hugging Face embeddings and FAISS vector store to understand query context.",
      results: "Significantly improved search relevance by matching concepts rather than just keywords.",
      architecture: "Course Data → Text Chunker → Embedding Model → FAISS Index ← User Query (Embedded) → Ranked Results"
    }
  },
  {
    id: 3,
    title: "Quick Resume Analyzer",
    description: "NLP-powered tool to parse resumes, extract entity skills, and match them against job descriptions.",
    techStack: ["Spacy", "Streamlit", "Python", "NLP"],
    category: "AI / LLM / NLP Systems",
    github: "https://github.com/yogesh43221/Quick-Resume-Analyzer",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=600",
    tags: ["NLP", "Resume Parsing", "Streamlit"],
    extendedDetails: {
      problem: "Manual resume screening is time-consuming and subjective.",
      solution: "Developed an NLP pipeline using Spacy to extract named entities (skills, education) and calculate cosine similarity with job descriptions.",
      results: "Provides instant matching scores to help recruiters shortlist candidates efficiently."
    }
  },

  // --- Machine Learning Systems ---
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
    id: 5,
    title: "Mentor Recommendation System",
    description: "ML-based matching system connecting students with mentors based on skills and interests.",
    techStack: ["Cosine Similarity", "Pandas", "Scikit-learn"],
    category: "Machine Learning Systems",
    github: "https://github.com/yogesh43221/mentor_recommendation_system",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600",
    tags: ["Recommender System", "ML"],
    extendedDetails: {
      problem: "Students struggle to find mentors with relevant expertise manually.",
      solution: "Built a content-based recommendation engine that calculates similarity scores between student interest profiles and mentor expertise vectors.",
      results: "Automated the matching process, ensuring high-relevance connections."
    }
  },

  // --- Backend & API Development ---
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
  },

  // --- Data Analytics & BI ---
  {
    id: 7,
    title: "Blinkit Sales Data Analytics",
    description: "Comprehensive data analysis of sales trends to optimize inventory and delivery logistics.",
    techStack: ["Python", "Pandas", "Matplotlib", "EDA"],
    category: "Data Analytics & Business Intelligence",
    github: "https://github.com/yogesh43221/Blinkit-Sales-Data-Analytics",
    image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=600",
    tags: ["Analytics", "EDA", "Business Insights"],
    extendedDetails: {
      problem: "Understanding purchasing patterns in quick-commerce to reduce waste and improve stock availability.",
      solution: "Performed extensive Exploratory Data Analysis (EDA) on sales data to identify peak hours and top-selling categories.",
      results: "Provided actionable insights for inventory distribution."
    }
  },
  {
    id: 8,
    title: "Pizza Sales Trends Analysis",
    description: "End-to-end business intelligence project using SQL for data extraction and Power BI for visualization.",
    techStack: ["Advanced SQL", "Power BI", "Data Modeling"],
    category: "Data Analytics & Business Intelligence",
    github: "https://github.com/yogesh43221/Analyzing-Pizza-Sales-Trends-with-SQL-and-Power-BI",
    image: "https://images.unsplash.com/photo-1590947132387-155cc6db23e6?auto=format&fit=crop&q=80&w=600",
    tags: ["SQL", "Power BI", "Visualization"],
    featured: true,
    extendedDetails: {
      problem: "Restaurant needed to track daily sales performance and menu item popularity.",
      solution: "Wrote complex SQL queries to aggregate sales data and visualized key metrics (AOV, Total Orders) in an interactive Power BI dashboard.",
      results: "Empowered stakeholders to make data-driven decisions on menu pricing and staffing."
    }
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    role: "AI Researcher",
    company: "Hub9 (Remote)",
    period: "Jan 2025 - Oct 2025",
    description: "Leading research on Agentic Workflows and clinical data optimization.",
    achievements: [
      "Designed and deployed AI Agents using Python & LLMs to automate clinical data workflows, reducing manual processing time by 40%.",
      "Optimized operational costs by refactoring inefficient SQL/ORM queries.",
      "Analyzed the massive MIMIC-IV dataset using advanced SQL to validate logic across complex schemas.",
      "Built a real-time logging & monitoring system to identify data retrieval bottlenecks."
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
      "Improved sales forecasting accuracy by analyzing historical trends."
    ]
  },
  {
    id: 3,
    role: "Machine Learning Intern",
    company: "Inthink Technologies Pvt. Ltd.",
    period: "Aug 2022 - Dec 2022",
    description: "Worked on Computer Vision and Edge AI.",
    achievements: [
      "Optimized data pipelines for model training, reducing preprocessing time.",
      "Analyzed performance metrics to fine-tune algorithms, reducing error rates by 50%."
    ]
  }
];

export const EARLY_ENGINEERING: Experience[] = [
  {
    id: 4,
    role: "Hardware Design Engineer Trainee",
    company: "Aeron Systems Pvt. Ltd.",
    period: "Jun 2023 - Dec 2023",
    description: "Foundational engineering role focusing on high-reliability systems and testing protocols.",
    achievements: [
      "Contributed to testing and validation workflows for defense-grade navigation systems (Indian Navy), ensuring zero-failure reliability.",
      "Managed rigorous documentation and compliance checks, translating complex requirements into production-ready deliverables.",
      "Developed a systems-thinking mindset for error handling and validation, now applied to designing robust data pipelines."
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
    summary: "Proposed a computer vision pipeline utilizing HOG features and AdaBoost to accurately detect falls in elderly populations, optimizing for edge deployment.",
    link: "https://ieeexplore.ieee.org"
  }
];

// FEATURED CERTIFICATIONS ONLY (Max 4-6)
// Add your specific drive link for each if available, or just use the generic folder link logic in the component
export const CERTIFICATIONS: Certification[] = [
  {
    id: 1,
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    date: "2024",
    link: "#"
  },
  {
    id: 2,
    title: "Deep Learning Specialization",
    issuer: "DeepLearning.AI / Coursera",
    date: "2023",
    link: "#"
  },
  {
    id: 3,
    title: "SQL Advanced",
    issuer: "HackerRank",
    date: "2023",
    link: "https://www.hackerrank.com/"
  },
  {
    id: 4,
    title: "Machine Learning Specialization",
    issuer: "Stanford / Coursera",
    date: "2022",
    link: "#"
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 1,
    title: "Amazon ML Summer School 2023",
    description: "Selected for intensive mentorship program by Amazon Scientists, focusing on Large Scale ML and Deep Learning.",
    link: "https://amazon.com"
  },
  {
    id: 2,
    title: "AIR 10 in Robocon 2022",
    description: "Secured All India Rank 10 in the prestigious national robotics contest, leading the autonomous navigation module.",
    link: "#"
  }
];

export const SKILLS: Skill[] = [
  // AI & LLMs
  { name: "LLMs (GPT/Llama)", level: 90, icon: "Brain", category: "AI & LLMs", context: "RAG Systems, Fine-tuning" },
  { name: "LangChain", level: 85, icon: "Link", category: "AI & LLMs", context: "Agentic Workflows" },
  { name: "AI Agents", level: 85, icon: "Bot", category: "AI & LLMs", context: "Autonomous Task Automation" },
  
  // Machine Learning
  { name: "Scikit-learn", level: 90, icon: "Activity", category: "Machine Learning", context: "Predictive Modeling" },
  { name: "XGBoost", level: 85, icon: "Zap", category: "Machine Learning", context: "Fraud Detection, Classification" },
  { name: "TensorFlow", level: 80, icon: "Layers", category: "Machine Learning", context: "Deep Learning Models" },

  // Backend & APIs
  { name: "FastAPI / Flask", level: 80, icon: "Server", category: "Backend & APIs", context: "Model Serving, REST APIs" },
  { name: "Docker", level: 80, icon: "Container", category: "Backend & APIs", context: "Containerization" },
  
  // Data Analysis
  { name: "Advanced SQL", level: 95, icon: "Database", category: "Data Analysis", context: "Complex Queries, CTEs" },
  { name: "Pandas/NumPy", level: 95, icon: "Code", category: "Data Analysis", context: "Data Manipulation" },
  { name: "ETL Pipelines", level: 85, icon: "GitMerge", category: "Data Analysis", context: "Data Processing Workflows" },

  // Tools & Platforms
  { name: "Power BI", level: 90, icon: "BarChart", category: "Tools & Platforms", context: "Business Intelligence Dashboards" },
  { name: "Git / GitHub", level: 90, icon: "Github", category: "Tools & Platforms", context: "Version Control" },
  { name: "AWS", level: 75, icon: "Cloud", category: "Tools & Platforms", context: "Cloud Deployment" },
];

export const SYSTEM_INSTRUCTION = `
You are an AI assistant representing ${PROFILE.name}.
Your goal is to answer questions from recruiters about ${PROFILE.name}'s background.

Context:
Bio: ${PROFILE.shortBio}
Current Role: ${EXPERIENCE[0].role} at ${EXPERIENCE[0].company}.
Key Skills: LLMs, Agents, SQL, Power BI, Python, FastAPI.
Key Projects: Booking Analytics RAG, Transaction Fraud Detection, Vidhya Vision.
Research: ${PUBLICATIONS.map(p => p.title).join(", ")}.
Achievements: IEEE Publication, Amazon ML Summer School.

Tone: Professional, serious, data-driven, and concise. 
Focus on the impact of work (e.g., "reduced costs", "improved efficiency").
`;