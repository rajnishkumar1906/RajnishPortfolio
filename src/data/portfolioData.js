// portfolioData.js - Updated with all projects, including FutureHr and AgroVision, and structured skills.

export const personalInfo = {
  name: "Rajnish Kumar",
  title: "Software Engineer | Full Stack with AI",
  tagline:
    "Building robust software architectures, high-performance Full Stack systems, and production-ready Generative AI integrations.",
  about:
    "Software Engineer specializing in Full Stack architectures and Generative AI systems. Built Finlyze, a LangGraph multi-agent stock research system that accelerated insights by 70%, LitScholar, an AI librarian with 750ms semantic search across 16K+ books for 10k+ monthly users, and AgroVision, a multilingual agricultural platform with a voice-activated RAG chatbot and disease detection. Proficient in React, Node.js, FastAPI, LangChain, LangGraph, and FAISS. Strong foundation in Python, REST APIs, WebSockets, database optimization, and modern AI workflows (RAG, multi-agent orchestrations). Solved 500+ DSA problems with a 5-Star rating on HackerRank.",
  email: "rajnishk71249@gmail.com",
  phone: "+91 8955694170",
  github: "https://github.com/rajnishkumar1906",
  linkedin: "https://www.linkedin.com/in/rajnishkumar1906/",
  resume: "/SDE_Resume.pdf",
  avatar: "https://github.com/rajnishkumar1906.png"
};

// Flat list for legacy support, if any component uses it
export const skills = [
  "Python", "C++", "JavaScript", "TypeScript",
  "React", "Next.js", "Tailwind CSS", "HTML5/CSS3", "Vite",
  "Node.js", "Express.js", "FastAPI", "Flask", "REST APIs", "WebSockets", "Socket.IO",
  "MongoDB", "PostgreSQL", "MySQL", "Redis", "ChromaDB", "Firebase",
  "LangChain", "LangGraph", "RAG", "Multi-Agent Systems", "Gemini AI", "Whisper", "Hugging Face", "Sentence Transformers", "FAISS",
  "Machine Learning", "Deep Learning", "NLP", "PyTorch", "TensorFlow", "Scikit-Learn", "OpenCV", "YOLO Computer Vision",
  "Docker", "JWT", "PASETO", "RazorPay", "SMTP", "Git & GitHub", "Vercel", "Render"
];

// Grouped skills matching the resume sections
export const skillsGrouped = {
  "Languages": ["Python", "C++", "JavaScript", "TypeScript"],
  "AI & LLM": ["GenAI", "LangChain", "LangGraph", "RAG", "FAISS", "Gemini AI", "Whisper", "Hugging Face", "Sentence Transformers"],
  "ML & CV": ["NumPy", "Pandas", "PyTorch", "TensorFlow", "Scikit-Learn", "OpenCV", "YOLO Computer Vision"],
  "Backend": ["FastAPI", "Node.js", "Express.js", "REST APIs"],
  "Frontend": ["React", "Tailwind CSS", "Next.js", "Vite"],
  "Databases": ["PostgreSQL", "MongoDB", "Redis", "ChromaDB", "FAISS"],
  "DevOps & Tools": ["Docker", "JWT", "PASETO", "RazorPay", "SMTP", "Git & GitHub"]
};

export const projects = [
  {
    id: 1,
    title: "FutureHR — AI-Powered HR Management System",
    description:
      "A complete, production-ready HR platform combining employee management with an end-to-end AI recruitment pipeline and voice screening.",
    longDescription:
      "FutureHR is a next-generation multi-tenant HRMS and AI recruitment pipeline built on a microservices architecture. It orchestrates a React frontend and four FastAPI backend services (Auth, HRMS, AI Recruitment, and API Gateway) with role-based routing and HTTP-only JWT auth. The recruitment pipeline screens resumes using Gemini AI to score match and identify skill gaps, generates candidate-specific voice questions from their CV, hosts an in-browser voice interview with Web Speech API live speech-to-text transcript, and generates comprehensive strengths/weaknesses evaluations. Upon hiring, it triggers background tasks for credentials generation and automated email notices.",
    technologies: [
      "React",
      "FastAPI",
      "Google Gemini",
      "Web Speech API",
      "PostgreSQL",
      "NeonDB",
      "Tailwind CSS",
      "JWT",
      "Microservices"
    ],
    features: [
      "🤖 AI Resume Screening (Gemini extracts skills, scores match 0-100, flags gaps)",
      "🎙️ Per-Candidate Voice Interviews (uniquely generated questions + live speech-to-text)",
      "📧 Non-blocking Background Emails (welcome alerts, credentials, voice invites)",
      "🔐 Multi-Role Access Control (Management Admin, HR Recruiter, Senior Manager, Employee, Candidate)",
      "📊 Core HRMS (Employee records, attendance tracking, auto-generated payroll, KPI goals)",
      "💬 Recruiter AI Chatbot (Query candidate profiles and evaluations in real-time)"
    ],
    github: "https://github.com/rajnishkumar1906/FutureHr",
    demo: "https://future-hr.vercel.app",
    category: "Full Stack",
    year: "2026"
  },
  {
    id: 2,
    title: "Finlyze — AI Multi-Agent Stock Research Platform",
    description:
      "A multi-agent AI system orchestrating specialized agents for collaborative stock research, technical analysis, and sentiment parsing.",
    longDescription:
      "Finlyze is a production-grade AI stock research platform powered by LangGraph. It orchestrates a specialized agent ecosystem (Researcher, Analyst, and Writer) to quantify technical indicators and aggregate sentiment. Features a yfinance and DuckDuckGo data pipeline collecting 50+ technical indicators and 150+ daily news reports for Gemini-driven NLP sentiment analysis. Utilizes asynchronous concurrency to cut data retrieval latency by 55% and implements fpdf2 on a React analytics dashboard with a Flask API backend for sub-2s automated PDF report downloads. Finlyze accelerates insights discovery by 70% for retail and professional investment workflows.",
    technologies: [
      "React",
      "Vite",
      "Flask",
      "LangGraph",
      "Gemini AI",
      "SQLite",
      "yfinance",
      "Async Python",
      "fpdf2"
    ],
    features: [
      "🤖 LangGraph Agent Coordination (Specialized Researcher, Analyst, and Writer agents)",
      "📈 50+ Technical Indicators (Automated quantitative evaluation and charts)",
      "📰 150+ Daily News Reports Scraped (Gemini NLP sentiment trend modeling)",
      "⚡ High-Volume Async Pipeline (Cuts data fetching latency by 55%, sub-2s page loads)",
      "📄 On-the-fly PDF Generation (React dashboard with Flask backend and fpdf2 exports)"
    ],
    github: "https://github.com/rajnishkumar1906/Finlyze",
    demo: "https://finlyze.vercel.app",
    category: "AI/ML",
    year: "2026"
  },
  {
    id: 3,
    title: "LitScholar — AI-Powered Virtual Librarian",
    description:
      "An AI-powered virtual librarian enabling natural language book queries, follow-up chats, and collaborative filtering recommendations.",
    longDescription:
      "LitScholar is a full-stack AI virtual librarian serving 10k+ monthly users with semantic search across 16K+ books. Built on a microservices architecture with a React frontend, the backend features a FastAPI system with PostgreSQL connection pooling, Redis caching (slashing database queries by 70%), and ChromaDB vector retrieval. Employs SentenceTransformers and FAISS for 750ms retrieval latency with 92% citation accuracy, and integrates Google Gemini for contextual reasoning. Incorporates collaborative filtering and genre similarity models for a 95% accurate recommendation engine, secured by Google OAuth and Razorpay subscriptions.",
    technologies: [
      "FastAPI",
      "React",
      "PostgreSQL",
      "Redis",
      "ChromaDB",
      "FAISS",
      "SentenceTransformers",
      "RAG",
      "Google Gemini",
      "RazorPay",
      "Google OAuth"
    ],
    features: [
      "🔍 Semantic search across 16K+ books with 750ms retrieval latency",
      "💬 Multi-turn conversational follow-ups and bibliography citations (92% accuracy)",
      "🎯 Hybrid Recommendation Engine (Collaborative filtering + genre-based cosine similarity)",
      "💾 Database Optimization (Neon PostgreSQL connection pooling + Redis cache query reduction)",
      "💳 Commercial integrations (Razorpay subscriptions & Google OAuth credentials)"
    ],
    github: "https://github.com/rajnishkumar1906/litscholar",
    demo: "https://lit-scholar.vercel.app",
    category: "AI/ML",
    year: "2026"
  },
  {
    id: 4,
    title: "AgroVision — AI Agricultural Platform",
    description:
      "A microservices agriculture platform combining ML crop planning, leaf disease detection, and multilingual KrishiBot voice assistant.",
    longDescription:
      "AgroVision is an AI-powered portal for farmers and agricultural advisors. It features three core services: a scikit-learn crop recommender, a leaf disease classifier using EfficientNetB0 transfer learning, and KrishiBot (a RAG chatbot powered by Gemini, FAISS, OpenAI Whisper, and gTTS). Deployed via Docker Compose, it routes all client calls through an Express.js API Gateway logging audit trails to MongoDB. Supports full Hindi, Punjabi, and English localized UI. The EfficientNetB0 model achieves 97.1% accuracy on a 38-class plant disease dataset, translating outputs to vernacular names to assist low-literacy users.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "FastAPI",
      "TensorFlow",
      "EfficientNetB0",
      "LangChain",
      "FAISS",
      "OpenAI Whisper",
      "PASETO",
      "MongoDB"
    ],
    features: [
      "🌾 Crop Recommendation (Inputs: N, P, K, pH, rainfall, temp, humidity, or automatic GPS weather)",
      "🍂 38-Class Leaf Disease Detector (EfficientNetB0 ImageNet model with 97.1% post-fine-tuning accuracy)",
      "🎙️ KrishiBot Text & Voice (FAISS RAG over agriculture guides with Whisper STT & gTTS speech output)",
      "🌐 Multilingual UI (Fully localized frontend pages and voice services in Hindi, Punjabi, and English)",
      "🔐 PASETO-Secured API Gateway (Single entry proxy, audit logging on MongoDB, and Redis caching)"
    ],
    github: "https://github.com/rajnishkumar1906/Agrovision",
    demo: "#",
    category: "AI/ML",
    year: "2025-2026"
  },
  {
    id: 5,
    title: "Nexora — Real-Time Community Platform",
    description:
      "A scalable MERN stack community hub with voice, video, and text chat, featuring WebRTC and Socket.IO integrations.",
    longDescription:
      "Nexora is a high-availability community platform constructed on a decoupled microservices architecture with 12+ Node.js backends. Integrates Socket.IO for real-time messaging, maintaining sub-100ms message propagation speeds under loads of 100+ concurrent events per channel. Employs WebRTC to coordinate peer-to-peer browser video/audio streaming directly. Security is hardened using JWT in HTTP-only cookies, and response payloads are optimized by 40% utilizing Gzip compression middlewares.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "WebRTC",
      "JWT",
      "Tailwind CSS"
    ],
    features: [
      "💬 Real-time text channels with sub-100ms Socket.IO synchronization",
      "📹 P2P voice and video rooms powered by WebRTC protocols",
      "🛡️ HTTP-only cookie-based JWT authorization guards",
      "📦 Node.js gateway routing and 40% payload optimization using Gzip",
      "🎮 In-app modular components ready for multiplayer integrations"
    ],
    github: "https://github.com/rajnishkumar1906/Nexora",
    demo: "https://nexora-teal.vercel.app",
    category: "Full Stack",
    year: "2025-2026"
  },
  {
    id: 6,
    title: "Agentic Marketing Intelligence System",
    description:
      "An autonomous 5-agent marketing pipeline analyzing Facebook ad data to diagnose performance fluctuations and formulate strategies.",
    longDescription:
      "Built an autonomous Agentic AI system for digital advertising intelligence. Features a 5-agent pipeline (Planner, Data, Insight, Evaluator, and Creative) powered by LangChain. It ingests 4,500+ Facebook ad performance records, diagnoses ROAS fluctuations, validates hypotheses with statistical metrics (CTR, CPC, Conversion Rates), and generates data-driven creative recommendations grounded in historic winners. Outfitted with JSON Schema validations for zero-shot structured tool outputs.",
    technologies: [
      "Python",
      "LangChain",
      "FastAPI",
      "Pandas",
      "JSON Schema",
      "Pytest",
      "Multi-Agent"
    ],
    features: [
      "🧠 5-Agent Pipeline (Coordinated data inspection, testing, and creative suggestions)",
      "📊 ROAS Fluctuation Diagnosis (Finds hidden variables and shifts in audience groups)",
      "🔍 Structured Outputs (JSON Schema verification ensures 100% stable parser rates)",
      "💡 Creative Recommendation Engine (Drafts ad copies validated by history performance)"
    ],
    github: "https://github.com/rajnishkumar1906/agentic-fb-analyst",
    demo: "#",
    category: "AI/ML",
    year: "2025"
  },
  {
    id: 7,
    title: "Computer Vision Image Search",
    description:
      "A semantic image search engine using YOLOv11 and Streamlit for metadata-free retrieval and object filtering.",
    longDescription:
      "Developed a computer vision search system using YOLOv11 to index image directories without standard metadata tags. Extracts visual object coordinates and counts, storing them in a searchable database. Built a Streamlit interface allowing users to locate images using natural language queries, object counts (e.g. '3 cars'), and visual similarities with cached vector lookups.",
    technologies: ["Python", "YOLOv11", "Streamlit", "OpenCV", "NumPy", "Computer Vision"],
    features: [
      "🔍 Metadata-free semantic search using YOLO object embeddings",
      "📊 Filter queries based on object counts and class detections",
      "⚡ High-speed batch image indexing with local feature cache",
      "🖼️ Interactive Streamlit browser for visual matches and scores"
    ],
    github: "https://github.com/rajnishkumar1906/computer-vision-image-search",
    demo: "#",
    category: "Computer Vision",
    year: "2025"
  },
  {
    id: 8,
    title: "PPE Detection — Hybrid YOLOv8 + ViT",
    description:
      "An automated workplace safety monitor combining YOLOv8 bounding boxes with Vision Transformers for PPE classification.",
    longDescription:
      "Engineered an automated personal protective equipment safety monitor to detect helmets, safety jackets, and goggles in industrial workspaces. Combines a real-time YOLOv8 detector with a Vision Transformer (ViT) classifier to resolve overlapping instances. The hybrid attention network achieves high precision on safety violations under complex industrial lighting.",
    technologies: ["PyTorch", "YOLOv8", "Vision Transformer", "OpenCV", "Computer Vision"],
    features: [
      "🪖 Real-time detection of helmets, vests, and safety goggles",
      "👁️ Vision Transformer attention layers to categorize crowded objects",
      "⚠️ Instant warning notifications on safety gear violations",
      "📈 Custom PyTorch train cycle for specialized industrial safety datasets"
    ],
    github: "https://github.com/rajnishkumar1906/PPE-Detection-Hybrid_YOLOv8_ViT",
    demo: "#",
    category: "Computer Vision",
    year: "2025"
  },
  {
    id: 9,
    title: "HospiTex — Hospital Management System",
    description:
      "A clinical management portal with role-based access controls and a Gemini-powered medical RAG bot.",
    longDescription:
      "Built a clinic management portal using the MERN stack. Implements separate user flows and dashboards for Admin, Doctors, Patients, and Diagnostics. Integrates an AI MediBot utilizing Google Gemini and a local vector search over clinical guidelines to answer general patient questions safely. Supports appointment schedules and medical record uploads.",
    technologies: ["MongoDB", "Express", "React", "Node.js", "Gemini AI", "RAG", "JWT"],
    features: [
      "👥 Role-based interfaces (separate spaces for Doctors, Admins, Patients, Diagnostics)",
      "🤖 AI Medibot (RAG answering systems over medical sheets)",
      "📅 Electronic Health Records (EHR uploads & appointment booking calendars)",
      "🔐 Secure session tokens (JWT in client cookies + middleware guards)"
    ],
    github: "https://github.com/rajnishkumar1906/HospiTex",
    demo: "#",
    category: "Full Stack",
    year: "2025"
  },
  {
    id: 10,
    title: "DocuBot — AI Knowledge Assistant",
    description:
      "A RAG chatbot that indexes uploaded PDFs to answer queries with precise citation logs.",
    longDescription:
      "DocuBot is a document chat dashboard built with LangChain and Streamlit. It splits uploaded PDF pages into logical chunks, generates vector embeddings using SentenceTransformers, and stores them in ChromaDB. When queried, it fetches relevant blocks and prompts an LLM to answer, providing page-specific citations to prevent hallucinations.",
    technologies: ["Python", "LangChain", "ChromaDB", "SentenceTransformers", "Streamlit", "RAG"],
    features: [
      "📄 High-performance document parsers supporting complex multi-page PDFs",
      "🔍 SentenceTransformers embedding with semantic chunk overlays",
      "💬 Interactive Streamlit chat interface with citation list outputs",
      "🧠 Pure RAG execution preventing hallucinated model text"
    ],
    github: "https://github.com/rajnishkumar1906/DocuBot",
    demo: "#",
    category: "AI/ML",
    year: "2025"
  },
  {
    id: 11,
    title: "GaonShield — Rural Health Monitoring",
    description:
      "A smart community monitoring app with offline-first support to track and warn about water-borne diseases.",
    longDescription:
      "GaonShield is a mobile application developed for rural health tracking. Designed with an offline-first architecture (Room database syncing to Firebase when connected), it tracks community health surveys and cross-references sensor inputs to forecast local water-borne disease outbreaks. Developed under a social innovation program.",
    technologies: ["Kotlin", "Android", "Firebase", "Room DB", "MPAndroidChart", "Machine Learning"],
    features: [
      "🌡️ Health logs capturing temperature, water source, and symptoms",
      "💧 Early warning alert trigger when water parameters decline",
      "📱 Offline sync architecture supporting remote regions without internet",
      "📊 Visual dashboards displaying community health metrics"
    ],
    github: "https://github.com/rajnishkumar1906/Gaon-Shield",
    demo: "#",
    category: "Mobile",
    year: "2024"
  },
  {
    id: 12,
    title: "MoodLens — Sentiment Analysis App",
    description:
      "A Hugging Face BERT and RoBERTa powered emotion classifier with real-time Streamlit visualization.",
    longDescription:
      "Developed an NLP tool using Hugging Face transformers (BERT & RoBERTa) to identify emotions in text blocks. Shows detailed probability meters across positive, negative, and specific emotional classes (joy, anger, sadness). Features batch CSV review, and interactive graphs using Plotly.",
    technologies: ["Python", "Transformers", "Streamlit", "PyTorch", "Plotly", "NLP"],
    features: [
      "😊 Emotion detection mapping text to distinct feelings",
      "📊 Interactive scoreboards showing positive/negative weights",
      "⚡ Support for batch text uploads and data analysis reports",
      "🧠 Fine-tuned transformer models loaded on CPU hosts"
    ],
    github: "https://github.com/rajnishkumar1906/MoodLens",
    demo: "#",
    category: "AI/ML",
    year: "2024"
  },
  {
    id: 13,
    title: "MNIST Digit Classifier",
    description:
      "A feed-forward PyTorch neural network classifying digits with configurable hyperparameters and TensorBoard metrics.",
    longDescription:
      "Built a handwritten digit recognition neural network from scratch in PyTorch. Includes a training pipeline that supports configurable hyperparameters (learning rate, batch sizes, optimizers), evaluation metrics (precision, recall, F1, accuracy), and visual charts logging loss slopes via TensorBoard.",
    technologies: ["PyTorch", "Python", "Neural Networks", "Matplotlib", "TensorBoard"],
    features: [
      "✍️ High-accuracy handwritten classifier (99.2% on test datasets)",
      "📈 Real-time loss charts and weight logs via TensorBoard integration",
      "🔬 Configurable layers allowing tests of feed-forward and CNN variants",
      "🧪 Hyperparameter scripts supporting automated training sweeps"
    ],
    github: "https://github.com/rajnishkumar1906/mnist-classification",
    demo: "#",
    category: "AI/ML",
    year: "2024"
  },
  {
    id: 14,
    title: "Financial Fraud Detection",
    description:
      "An anomaly detector trained with SMOTE balancing, Isolation Forest, and explainability via SHAP/LIME.",
    longDescription:
      "Designed a machine learning fraud detector trained on heavily imbalanced datasets. Utilizes SMOTE to synthetically balance data, and trains XGBoost and Isolation Forest models. Integrates SHAP and LIME to produce explainable indicators showing exactly which transaction parameters triggered fraud warnings.",
    technologies: ["Python", "Scikit-Learn", "XGBoost", "SMOTE", "SHAP", "LIME", "FastAPI"],
    features: [
      "💳 Highly precise fraud classification (95% precision on imbalanced data)",
      "⚖️ SMOTE preprocessing to prevent majority-class learning bias",
      "🔍 SHAP/LIME explainability plots outlining feature impact scores",
      "⚡ FastAPI endpoint exposing classification inferences under 5ms"
    ],
    github: "https://github.com/rajnishkumar1906/FinancialFraudDetection",
    demo: "#",
    category: "AI/ML",
    year: "2024"
  },
  {
    id: 15,
    title: "MERN Auth — Secure Authentication System",
    description:
      "A production-ready authorization gateway using JWTs, cookie security, refresh rotations, and SMTP email tests.",
    longDescription:
      "A boilerplate security module built for MERN stack portals. Employs JWT credentials in HTTP-only cookies, automated refresh token rotation to prevent session hijacking, and bcrypt password salting. Includes SMTP sign-up validation codes, rate-limiting middlewares, and Helmet header hardening.",
    technologies: ["Express", "React", "Node.js", "MongoDB", "JWT", "bcrypt", "Nodemailer", "Redis"],
    features: [
      "🔐 Double-cookie authentication (AccessToken + Rotate RefreshToken)",
      "📧 Nodemailer verification (SMTP code validation during registration)",
      "🛡️ Express Middlewares (Rate limiting, Helmet security headers, CORS guards)",
      "🔄 Robust password reset flows with expiry hashes"
    ],
    github: "https://github.com/rajnishkumar1906/MERN-AUTH",
    demo: "#",
    category: "Full Stack",
    year: "2024"
  }
];

export const achievements = [
  {
    title: "DSA Problem Solving",
    description: "Solved 500+ algorithmic problems across LeetCode, GeeksforGeeks, Codeforces, and HackerRank."
  },
  {
    title: "HackerRank Ratings",
    description: "Earned 5-Star rating on HackerRank, validating proficiency in Python syntax and algorithms."
  },
  {
    title: "LeetCode Contest Rating",
    description: "Regular participant in global competitive programming contests with a peak LeetCode rating of 1364."
  }
];

export const certifications = [
  {
    title: "Complete Machine Learning and Data Science",
    issuer: "GeeksForGeeks",
    year: "2024",
    link: "https://media.geeksforgeeks.org/courses/certificates/b6705e87e989a2bb40d81ca89cd4de00.pdf"
  },
  {
    title: "Introduction to Large Language Models",
    issuer: "Coursera",
    year: "2024",
    link: "https://www.coursera.org/account/accomplishments/verify/U5R6YRQC2P87"
  },
  {
    title: "Complete Computer Vision Bootcamp with PyTorch & TensorFlow",
    issuer: "Udemy",
    year: "2025",
    link: "https://drive.google.com/file/d/1xGqmvKTR2deFGsJbZU_eP5Rnow4xWNOO/view"
  }
];

export const education = [
  {
    institution: "Lovely Professional University",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    period: "Oct 2022 – Present",
    score: "CGPA: 7.29",
    location: "Phagwara, Punjab"
  },
  {
    institution: "Red Rose School",
    degree: "Senior Secondary (Science)",
    period: "Mar 2019 – Jun 2021",
    score: "Percentage: 84%",
    location: "Deoghar, Jharkhand"
  }
];

export const experience = [
  {
    title: "AI Full Stack Engineer",
    company: "Personal Projects",
    period: "2024 – Present",
    description: "Building production-grade AI applications and full-stack systems focusing on performance, modularity, and user experience. Built Finlyze (stock agents via LangGraph), LitScholar (librarian semantic search), AgroVision (disease scanning), and FutureHR (voice recruitment gateway)."
  }
];
