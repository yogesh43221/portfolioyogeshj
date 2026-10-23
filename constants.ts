import { Project, Experience, Skill, Education, Achievement, Publication, Certification } from './types';
const profilePhoto = "/profile.jpg";

// ==========================================
// YOGESH JADHAV PORTFOLIO DATA
// ==========================================

export const PROFILE = {
  name: "Yogesh Jadhav",
  title: "QA Automation / Software Engineer",
  profileImage: profilePhoto || "/profile.jpg", 
  shortBio: "B.Tech graduate and early-career engineer with practical experience across software development, test automation, APIs, and data. Focused on QA automation with Python and Playwright, while building and testing backend services and AI systems.",
  about: `Hello! I’m Yogesh Jadhav, an early-career engineer with a B.Tech in Electronics & Telecommunication and a minor in AI & Machine Learning from MIT Academy of Engineering. My background combines hands-on software development with a strong focus on QA automation and software quality. During my internship at Hub9, I worked on Python and FastAPI microservices while building automated test suites using Playwright to validate clinical workflows. I enjoy working across the development lifecycle — from writing backend logic and querying SQL databases to designing test cases, automating regression tests, and experimenting with AI systems. My goal is to grow as a QA Automation / SDET engineer who understands how software is built from the inside out.`,
  email: "yj43221@gmail.com",
  location: "Pune, India",
  github: "https://github.com/yogesh43221",
  linkedin: "https://www.linkedin.com/in/yogesh-jadhav-60548020a/"
};

export const NAV_LINKS = [
  { name: 'Core Strengths', href: '#why_hire_me' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'About', href: '#about' },
  { name: 'AI Assistant', href: '#ai-chat' },
  { name: 'Contact', href: '#contact' },
];

export const RESUME_PATH = "/Yogesh_Jadhav_QA_Resume.pdf";

export const RESUME_URLS = {
  AI_ML: "https://drive.google.com/file/d/your-ai-ml-resume-id/view?usp=sharing",
  DATA_ANALYST: "https://drive.google.com/file/d/your-data-analyst-resume-id/view?usp=sharing",
  BACKEND: "https://drive.google.com/file/d/your-backend-resume-id/view?usp=sharing"
};

export const ALL_CERTIFICATIONS_URL = "https://www.linkedin.com/in/yogesh-jadhav-60548020a/details/certifications/";

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "OrbitDesk Support Agent",
    description: "Multi-turn customer support agent capable of resolving inquiries, executing tool-assisted lookups, and categorizing issue severity with automated test suites.",
    techStack: ["Python", "Pytest", "FastAPI", "LangChain", "Tool Calling", "Schema Validation"],
    category: "QA Automation",
    github: "https://github.com/yogesh43221/orbitdesk-support-agent",
    image: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&q=80&w=600",
    featured: true,
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
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600",
    featured: true,
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
    image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=600",
    featured: true,
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
    image: "https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&q=80&w=600",
    featured: true,
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
    image: "https://images.unsplash.com/photo-1563986768494-4dee46a38531?auto=format&fit=crop&q=80&w=600",
    featured: false,
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
    link: "https://huggingface.co/spaces/yogeshjadhav666/Vidhya_Vision",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=600",
    featured: true,
    deployed: true,
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
    link: "https://eklavya-ai-generator.onrender.com",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=600",
    featured: true,
    deployed: true,
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

export const ARCHIVED_PROJECTS: Project[] = [
  {
    id: 6,
    title: "AutoStream Conversational Agent",
    description: "Real-time conversational streaming service built with Python and asynchronous handlers to deliver low-latency token streaming dialogue.",
    techStack: ["Python", "LangChain", "AsyncIO", "FastAPI", "Streaming APIs", "NLP"],
    category: "AI / LLM",
    github: "https://github.com/yogesh43221/autostream-ai-agent",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600",
    extendedDetails: {
      problem: "Standard LLM request-response cycles suffer from perceived latency when users wait for complete answers before any text renders.",
      solution: "Implemented an asynchronous streaming conversational architecture that streams token chunks to client interfaces in real time.",
      contributions: [
        "Designed streaming response handlers using asynchronous Python generators",
        "Managed conversational message history buffers with rolling context limits",
        "Configured robust error handling and timeout boundaries during network drops"
      ],
      testing: "Verified token delivery stability and buffer cleanup across simulated concurrent client connections.",
      results: "Enabled fluid real-time conversational streaming with minimal initial response latency."
    }
  },
  {
    id: 7,
    title: "Eklavya AI Generator",
    description: "Educational content generation system that synthesizes structured study modules, conceptual summaries, and practice assessments from input topics.",
    techStack: ["Python", "Streamlit", "LLMs", "Prompt Engineering", "NLP"],
    category: "AI / LLM",
    github: "https://github.com/yogesh43221/eklavya-ai-generator",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=600",
    extendedDetails: {
      problem: "Compiling structured study materials, conceptual primers, and self-assessment questions manually requires significant preparation time.",
      solution: "Developed an interactive generator utilizing prompt chaining and formatted outputs to generate modular study materials on demand.",
      contributions: [
        "Constructed structured prompt chains generating modular sections (concept definitions, code examples, quizzes)",
        "Formatted outputs into clean markdown with downloadable review exports",
        "Implemented input parameter guards to ensure predictable generation formats"
      ],
      testing: "Tested generation reliability and consistency across varied technical subject prompts.",
      results: "Built an interactive educational generator for structured study guides and practice quizzes on demand."
    }
  },
  {
    id: 8,
    title: "Blinkit Sales Forecasting & Interactive Dashboard",
    description: "Retail analytics project analyzing grocery sales, outlet distributions, and item visibility using SQL queries and Python to identify revenue patterns.",
    techStack: ["SQL", "Python", "Pandas", "Data Cleaning", "EDA"],
    category: "Data / Analytics",
    github: "https://github.com/yogesh43221/Blinkit-Sales-Data-Analytics",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=600",
    extendedDetails: {
      problem: "Raw retail sales data contains missing values, inconsistent categories, and unaggregated metrics that obscure store performance trends.",
      solution: "Executed data cleaning pipelines in Python and performed structured SQL aggregations to evaluate sales by outlet size, location type, and product tier.",
      contributions: [
        "Wrote multi-table SQL queries with aggregate functions, window queries, and group-by clauses",
        "Cleaned and imputed missing values in item fat content, weight, and outlet establishment data",
        "Analyzed sales variance across outlet tiers and product categories to highlight key revenue drivers"
      ],
      testing: "Cross-checked SQL query output totals against Python Pandas summary statistics to verify data reconciliation.",
      results: "Delivered structured exploratory analysis and documented key distribution trends across retail outlets."
    }
  },
  {
    id: 9,
    title: "Vidhya Vision",
    description: "Semantic search application using Hugging Face transformer embeddings and FAISS vector indexing to discover conceptually related educational resources.",
    techStack: ["Python", "LangChain", "FAISS", "Hugging Face", "Transformers"],
    category: "AI / LLM",
    github: "https://github.com/yogesh43221/Vidhya-Vision",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=600",
    extendedDetails: {
      problem: "Keyword-based search fails to retrieve educational materials when query words do not match document text verbatim.",
      solution: "Implemented vector embedding generation with open-source Hugging Face models and indexed document vectors in FAISS for cosine similarity retrieval.",
      contributions: [
        "Integrated Hugging Face embedding models to transform educational text into dense vector representations",
        "Built FAISS index retrieval for sub-second similarity search over document chunks"
      ],
      testing: "Tested semantic retrieval with conceptual queries against a curated educational dataset.",
      results: "Improved conceptual document retrieval compared to traditional lexical keyword matching."
    }
  },
  {
    id: 10,
    title: "Mentor Recommendation System",
    description: "Personalized mentor recommendation engine using profile similarity and preferences to match learners with mentors.",
    techStack: ["Python", "Pandas", "Scikit-learn", "Cosine Similarity"],
    category: "Machine Learning",
    github: "https://github.com/yogesh43221/mentor_recommendation_system",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 11,
    title: "Quick Resume Analyzer",
    description: "Entity extraction tool parsing resumes and matching skills with job descriptions using SpaCy and Streamlit.",
    techStack: ["Python", "SpaCy", "Streamlit", "NLP"],
    category: "AI / LLM",
    github: "https://github.com/yogesh43221/Quick-Resume-Analyzer",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 12,
    title: "Pizza Sales Trends Analysis",
    description: "Business intelligence project utilizing relational SQL queries and Power BI dashboards to analyze order volumes and category revenue.",
    techStack: ["SQL", "Power BI", "Data Modeling", "ETL"],
    category: "Data / Analytics",
    github: "https://github.com/yogesh43221/Analyzing-Pizza-Sales-Trends-with-SQL-and-Power-BI",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 13,
    title: "Brainlox Course Chatbot API",
    description: "RESTful backend API built with Python and Flask that processes incoming course inquiries.",
    techStack: ["Python", "Flask", "REST APIs", "NLP", "JSON"],
    category: "Backend / API",
    github: "https://github.com/yogesh43221/FlaskProjects/tree/main/BrainloxChatbot-API",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=600"
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: 0,
    role: "Post-LLM Training Intern",
    company: "Ethara AI",
    period: "Jan 2026 – Aug 2026",
    description: "Evaluated and annotated AI model outputs against strict quality, factual accuracy, and instruction-following criteria.",
    modularAchievements: [
      {
        title: "LLM Output Evaluation & Quality Assurance",
        iconType: 'qa',
        points: [
          "Evaluated AI-generated responses for factual accuracy, relevance, consistency, and adherence to complex instructions.",
          "Identified and flagged factual errors, logical contradictions, unsupported statements, and hallucinations.",
          "Assessed response completeness against multi-step task requirements and constraint criteria.",
          "Applied evaluation guidelines and standardized quality rubrics consistently to rate model outputs."
        ]
      },
      {
        title: "Data Annotation & Labeling",
        iconType: 'data',
        points: [
          "Performed data annotation and structured labeling following task-specific guidelines and conventions.",
          "Applied quality criteria and classification labels consistently across diverse evaluation datasets."
        ]
      }
    ]
  },
  {
    id: 1,
    role: "Software Development Intern — QA & Backend",
    company: "Hub9",
    period: "Jan 2025 – Oct 2025",
    description: "Bridging software development, QA automation, and AI-assisted workflows across clinical software applications.",
    modularAchievements: [
      {
        title: "QA & Test Automation",
        iconType: 'qa',
        points: [
          "Tested clinical application workflows across available development, staging, and production environments.",
          "Performed manual UI testing, end-to-end workflow validation, build validation, and regression testing.",
          "Tested workflows involving AI-generated clinical summaries, ICD coding, de-identification, and provider-facing functionality.",
          "Used Postman to validate REST API behavior, responses, error handling, and relevant request scenarios.",
          "Worked with Playwright-based automated tests by defining test flows, identifying UI elements, specifying expected behavior, and executing and validating test scenarios.",
          "Documented defects, test cases, and test plans in Jira and Confluence."
        ]
      },
      {
        title: "Backend & Systems Development",
        iconType: 'engineering',
        points: [
          "Contributed to FastAPI backend workflows and formulated SQL queries in PostgreSQL to validate clinical data retrieval and record updates.",
          "Supported application environments using Docker containerization across Dev and Staging, working with AWS Cognito and Firebase Authentication."
        ]
      },
      {
        title: "AI-Assisted Development & Evaluation",
        iconType: 'systems',
        points: [
          "Evaluated and validated AI-generated clinical summaries, ICD code mappings, and de-identification outputs against medical record criteria.",
          "Utilized AI-assisted engineering tools to accelerate test case generation, test planning, and defect reproduction."
        ]
      }
    ]
  },
  {
    id: 2,
    role: "Data Engineer Intern",
    company: "Celebal Technologies Pvt. Ltd.",
    period: "June 2023 - Aug 2023",
    description: "Focused on end-to-end ETL pipelines and Business Intelligence reporting.",
    modularAchievements: [
      {
        title: "ETL & Data Pipelines",
        iconType: 'data',
        points: [
          "Developed and optimized ETL pipelines for large-scale sales datasets.",
          "Optimized SQL queries and ETL pipeline data transformations to streamline sales data processing."
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
          "Analyzed historical sales trends to support forecasting models and operational reporting.",
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
    description: "Applied statistical modeling and algorithmic evaluation to real-world datasets.",
    modularAchievements: [
      {
        title: "Machine Learning & Modeling",
        iconType: 'research',
        points: [
          "Built and trained machine learning classification models for structured datasets.",
          "Tuned algorithms using precision, recall, and F1-score metrics to improve predictive performance."
        ]
      },
      {
        title: "Data Pipelines & Preprocessing",
        iconType: 'data',
        points: [
          "Designed structured data preprocessing and cleaning pipelines for model training.",
          "Handled missing data, categorical encoding, and feature normalization to ensure training stability."
        ]
      },
      {
        title: "Model Evaluation & Optimization",
        iconType: 'systems',
        points: [
          "Evaluated models using confusion matrices, ROC-AUC, and cross-validation splits to guide iterative refinements.",
          "Iteratively refined feature subsets and hyperparameters across experimentation cycles."
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
          "Tested defense-grade navigation systems for the Indian Navy to verify compliance with strict operational requirements.",
          "Executed functional and stress tests for high-reliability hardware compliance."
        ]
      },
      {
        title: "Engineering Compliance",
        iconType: 'research',
        points: [
          "Maintained technical documentation, calibration logs, and compliance records for production hardware.",
          "Assisted in quality control workflows and inspection procedures for naval navigation components."
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
    summary: "Proposed a computer vision pipeline utilizing HOG features and AdaBoost to accurately detect falls in elderly populations with high precision.",
    link: "https://ieeexplore.ieee.org/document/10291838",
    doi: "https://doi.org/10.1109/ccpis59145.2023.10291838"
  },
  {
    id: 2,
    title: "Classroom Activity Detection Using TinyML",
    conference: "Springer Nature",
    year: "2025",
    summary: "Edge machine learning research investigating resource-constrained TinyML deployment for automated classroom activity recognition and behavioral engagement monitoring.",
    link: "https://link.springer.com/chapter/10.1007/978-981-96-6406-1_3",
    doi: "https://doi.org/10.1007/978-981-96-6406-1_3"
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
  // 1. QA & Automation
  { name: "Playwright", category: "QA & Automation", context: "E2E Testing" },
  { name: "Pytest", category: "QA & Automation", context: "Test Framework" },
  { name: "API Testing", category: "QA & Automation", context: "Endpoints & Schemas" },
  { name: "Postman", category: "QA & Automation", context: "API Debugging" },
  { name: "E2E Testing", category: "QA & Automation", context: "Clinical Workflows" },
  { name: "Regression Testing", category: "QA & Automation", context: "Release Validation" },

  // 2. Programming & Backend
  { name: "Python", category: "Programming & Backend", context: "Core Language" },
  { name: "FastAPI", category: "Programming & Backend", context: "REST Framework" },
  { name: "REST APIs", category: "Programming & Backend", context: "Service Design" },
  { name: "SQL", category: "Programming & Backend", context: "Queries & Joins" },
  { name: "SQLAlchemy", category: "Programming & Backend", context: "ORM Modeling" },
  { name: "Flask", category: "Programming & Backend", context: "Microservices" },

  // 3. AI / ML / LLM
  { name: "LangChain", category: "AI / ML / LLM", context: "RAG Pipelines" },
  { name: "RAG Architecture", category: "AI / ML / LLM", context: "Document Retrieval" },
  { name: "FAISS", category: "AI / ML / LLM", context: "Vector Search" },
  { name: "Hugging Face", category: "AI / ML / LLM", context: "Transformers" },
  { name: "Scikit-learn", category: "AI / ML / LLM", context: "ML Models" },
  { name: "XGBoost", category: "AI / ML / LLM", context: "Classification" },
  { name: "PyTorch", category: "AI / ML / LLM", context: "Neural Networks" },

  // 4. Data & Analytics
  { name: "Pandas", category: "Data & Analytics", context: "Data Wrangling" },
  { name: "NumPy", category: "Data & Analytics", context: "Array Operations" },
  { name: "Power BI", category: "Data & Analytics", context: "BI Dashboards" },
  { name: "Streamlit", category: "Data & Analytics", context: "Data Apps" },
  { name: "Data Analysis", category: "Data & Analytics", context: "EDA & Reporting" },

  // 5. Tools & Infrastructure
  { name: "Git & GitHub", category: "Tools & Infrastructure", context: "Version Control" },
  { name: "Docker", category: "Tools & Infrastructure", context: "Containerization" },
  { name: "PostgreSQL", category: "Tools & Infrastructure", context: "Relational DB" },
  { name: "MySQL", category: "Tools & Infrastructure", context: "Production RDBMS" },
  { name: "DBeaver", category: "Tools & Infrastructure", context: "SQL Workbench" },
  { name: "AWS (Basic)", category: "Tools & Infrastructure", context: "Cognito / Cloud" }
];

export const SYSTEM_INSTRUCTION = `
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