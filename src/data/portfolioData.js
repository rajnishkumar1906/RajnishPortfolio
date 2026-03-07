// portfolioData.js - Updated with correct sequential IDs

export const personalInfo = {
  name: "Rajnish Kumar",
  title: "AI Full Stack Engineer | MERN & LLM Systems",
  tagline:
    "Building production-ready AI applications and scalable full-stack systems that solve real-world problems.",
  about:
    "AI Full Stack Engineer with 3 production applications combining full-stack development and AI/ML. Built Finlyze, a LangGraph multi-agent system that reduced stock analysis time by 70%, and LitScholar, an AI librarian serving 10k+ monthly users with 750ms semantic search across 16K+ books. Experienced in React, Node.js, FastAPI, LangChain, ChromaDB, and Redis. Strong foundation in Python, REST APIs, WebSockets, database optimization, and modern AI workflows including RAG and multi-agent systems. Solved 500+ DSA problems with 5-Star Python rating on HackerRank.",
  email: "rajnishk71249@gmail.com",
  github: "https://github.com/rajnishkumar1906",
  linkedin: "https://www.linkedin.com/in/rajnishkumar1906/",
  resume: "/SDE_Resume.pdf",
  avatar: "https://github.com/rajnishkumar1906.png"
};

export const skills = [
  // Programming Languages
  "Python",
  "JavaScript",
  "TypeScript",
  "C++",
  "Java",
  
  // Frontend
  "React",
  "Next.js",
  "Tailwind CSS",
  "HTML5/CSS3",
  "Vite",
  
  // Backend & APIs
  "Node.js",
  "Express.js",
  "FastAPI",
  "Flask",
  "REST APIs",
  "WebSockets",
  "Socket.IO",
  
  // Databases & Caching
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "Redis",
  "ChromaDB",
  "Firebase",
  
  // AI / LLM
  "LangChain",
  "LangGraph",
  "RAG (Retrieval-Augmented Generation)",
  "Multi-Agent Systems",
  "LLMs (Gemini, OpenAI)",
  "SentenceTransformers",
  "Embeddings",
  "Prompt Engineering",
  
  // Machine Learning
  "Machine Learning",
  "Deep Learning",
  "NLP",
  "PyTorch",
  "TensorFlow",
  "Scikit-Learn",
  "NumPy",
  "Pandas",
  "OpenCV",
  
  // DevOps & Tools
  "Docker",
  "Git & GitHub",
  "CI/CD",
  "AWS (EC2, S3)",
  "Vercel",
  "Render",
  
  // Core CS
  "Data Structures & Algorithms",
  "System Design",
  "DBMS",
  "Operating Systems",
  "Computer Networks"
];

export const projects = [
  {
    id: 1,
    title: "Finlyze — AI Multi-Agent Stock Research Platform",
    description:
      "A multi-agent AI system orchestrating 12+ specialized agents for collaborative stock research, automating data collection, analysis, and report generation.",
    longDescription:
      "Finlyze is a production-grade AI-powered stock research platform built using LangGraph and multi-agent architecture. It orchestrates specialized agents (Researcher, Analyst, Writer) to collect real-time market data, analyze technical indicators, process financial news sentiment, and generate structured investment reports. The system aggregates 50+ technical indicators and scrapes 150+ daily market reports for Gemini-powered NLP sentiment analysis. Built with asynchronous concurrency to cut data retrieval latency by 55%, achieving consistent sub-2s reporting speeds. Finlyze reduces end-to-end stock analysis time by 70% while remaining useful for both research teams and individual investors.",
    technologies: [
      "Python",
      "LangGraph",
      "Gemini AI",
      "FastAPI",
      "Streamlit",
      "Multi-Agent Systems",
      "yfinance",
      "NLP",
      "Async Python"
    ],
    features: [
      "🤖 12+ autonomous agents (Researcher, Analyst, Writer, Sentiment)",
      "📈 50+ technical indicators automated analysis",
      "📰 150+ daily market reports scraped for sentiment",
      "📄 Structured report generation (PDF, TXT, MD)",
      "⚡ 70% faster stock analysis workflow",
      "⏱️ Sub-2s reporting with async concurrency"
    ],
    github: "https://github.com/rajnishkumar1906/Finlyze",
    demo: "https://finlyze.onrender.com",
    image: "/finlyze.png",
    category: "AI/ML",
    year: "2026"
  },
  
  {
    id: 2,
    title: "LitScholar — AI-Powered Virtual Librarian",
    description: "An AI-powered virtual librarian enabling natural language book discovery, follow-up conversations, and personalized recommendations using semantic search across 16,000+ books.",
    longDescription: "LitScholar is a full-stack AI-powered virtual librarian that understands natural language queries and provides intelligent, explainable book recommendations using semantic search and Retrieval-Augmented Generation (RAG). The system leverages SentenceTransformers and ChromaDB for high-precision vector retrieval achieving 750ms latency, integrates Google Gemini for contextual reasoning, and supports secure user authentication with JWT and Google OAuth. Features a personalized recommendation system using collaborative filtering and genre-based similarity. Built with FastAPI backend with PostgreSQL connection pooling (50+ concurrent users), Redis caching reducing database queries by 70%, and a React frontend serving 10k+ monthly users.",
    technologies: [
      "FastAPI",
      "React",
      "PostgreSQL",
      "Redis",
      "SentenceTransformers",
      "ChromaDB",
      "RAG",
      "Google Gemini",
      "JWT",
      "OAuth 2.0",
      "Tailwind CSS"
    ],
    features: [
      "🧠 Natural language book discovery",
      "💬 Follow-up conversation capability",
      "🎯 Personalized recommendations (collaborative filtering)",
      "🔍 Semantic search across 16K+ books",
      "⚡ 750ms retrieval latency",
      "📊 10k+ monthly users",
      "💾 70% DB query reduction via Redis"
    ],
    github: "https://github.com/rajnishkumar1906/litscholar",
    demo: "https://lit-scholar.vercel.app",
    image: "/litscholar.png",
    category: "AI/ML",
    year: "2026"
  },
  
  {
    id: 3,
    title: "Nexora — Real-Time Community Platform",
    description: "A scalable real-time community platform with text, voice, and video interactions supporting 100+ concurrent users with sub-100ms message delivery.",
    longDescription: "Nexora is a modular MERN ecosystem with 12+ decoupled backend services facilitating high-availability community interactions and multiplayer gaming. Orchestrated bidirectional data streams via Socket.IO maintaining sub-100ms message delivery while supporting 100+ concurrent real-time events per channel. Integrated WebRTC for peer-to-peer voice/video calls directly in the browser. Fortified security using JWT and HTTP-only cookie persistence, while slashing response payload sizes by 40% via Gzip compression. Deployed on Vercel with responsive Tailwind CSS frontend.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "WebRTC",
      "JWT",
      "Tailwind CSS",
      "Vercel"
    ],
    features: [
      "💬 Real-time messaging (sub-100ms latency)",
      "📹 Peer-to-peer voice/video calls",
      "👥 100+ concurrent users per channel",
      "🎮 Multiplayer gaming support",
      "🔐 JWT with HTTP-only cookies",
      "📦 40% payload reduction via Gzip",
      "⚡ 12+ decoupled backend services"
    ],
    github: "https://github.com/rajnishkumar1906/Nexora",
    demo: "https://nexora-teal.vercel.app",
    image: "/nexora.png",
    category: "Full Stack",
    year: "2025-2026"
  },

  {
    id: 4,
    title: "Agentic Marketing Intelligence System",
    description: "An autonomous multi-agent AI pipeline that analyzes 4,500+ Facebook ad performance records, diagnoses ROAS fluctuations, and generates creative recommendations.",
    longDescription: "An Agentic AI system built for comprehensive Facebook Ads analysis. It autonomously analyzes ad performance, diagnoses ROAS fluctuations, validates hypotheses using quantitative signals (CTR, ROAS, CPC metrics), and generates new creative recommendations grounded in real ad messaging. Features a multi-agent architecture (Planner → Data → Insight → Evaluator → Creative) with structured prompting and JSON schema validation.",
    technologies: ["Python", "LangChain", "Multi-Agent Architecture", "LLMs", "Pandas", "FastAPI", "JSON Schema", "Pytest"],
    features: [
      "🧠 5-agent architecture (Planner → Data → Insight → Evaluator → Creative)",
      "📊 Quantitative validation with CTR/ROAS/CPC metrics",
      "🔍 Autonomous ROAS fluctuation diagnosis",
      "💡 Data-driven creative generation",
      "🔬 Hypothesis validation with confidence scores"
    ],
    github: "https://github.com/rajnishkumar1906/agentic-fb-analyst",
    demo: "#",
    image: "/agentic-fb.jpg",
    category: "AI/ML",
    year: "2025"
  },

  {
    id: 5,
    title: "Computer Vision Image Search",
    description: "A computer-vision powered image search engine using YOLO + Streamlit that allows users to search visually similar images based on object detection embeddings.",
    longDescription: "Engineered a computer vision pipeline using YOLOv11 for semantic image retrieval without metadata dependency. Architectured a metadata-driven indexing system supporting logical queries and object-count filtering. Developed an interactive Streamlit interface for batch inference, visualization, and cached performance.",
    technologies: ["YOLOv11", "Computer Vision", "Streamlit", "Python", "OpenCV", "NumPy"],
    features: [
      "🔍 Semantic image retrieval without metadata",
      "📊 Metadata-driven indexing system",
      "🖼️ Batch inference and visualization",
      "⚡ Cached performance optimization"
    ],
    github: "https://github.com/rajnishkumar1906/computer-vision-image-search",
    demo: "#",
    image: "/image-search-app.png",
    category: "Computer Vision",
    year: "2025"
  },

  {
    id: 6,
    title: "PPE Detection — Hybrid YOLOv8 + ViT",
    description: "An intelligent PPE safety monitoring system using hybrid YOLOv8 and Vision Transformer to detect helmets, jackets, and safety gear in workplace environments.",
    longDescription: "Built an intelligent PPE safety monitoring system using hybrid YOLOv8 and Vision Transformer architecture for accurate detection of safety equipment in workplace environments. Combines the speed of YOLO with the attention mechanisms of Vision Transformers for improved accuracy in real-time monitoring scenarios.",
    technologies: ["YOLOv8", "Vision Transformer", "Deep Learning", "OpenCV", "PyTorch", "Computer Vision"],
    features: [
      "🪖 Helmet detection",
      "🧥 Safety jacket detection",
      "⚙️ Real-time monitoring",
      "🎯 Hybrid architecture for improved accuracy"
    ],
    github: "https://github.com/rajnishkumar1906/PPE-Detection-Hybrid_YOLOv8_ViT",
    demo: "#",
    image: "/ppe-detection.png",
    category: "Computer Vision",
    year: "2025"
  },

  {
    id: 7,
    title: "HospiTex — Hospital Management System",
    description: "A full-stack hospital platform with role-based access for Admins, Doctors, Patients & Diagnostics. Includes AI Medibot using Gemini + RAG architecture.",
    longDescription: "A comprehensive hospital management system with role-based access control for different user types. Features an AI-powered medical chatbot using Gemini API and RAG architecture for intelligent patient queries. Includes patient record management, appointment scheduling, and diagnostic report storage.",
    technologies: ["MERN", "JWT", "MongoDB", "Gemini AI", "RAG", "Express", "React", "Node.js", "Tailwind CSS"],
    features: [
      "👥 Role-based access (Admin, Doctor, Patient, Diagnostic)",
      "🤖 AI Medibot with Gemini + RAG",
      "🔐 Secure JWT authentication",
      "📋 Patient record management",
      "📅 Appointment scheduling"
    ],
    github: "https://github.com/rajnishkumar1906/HospiTex",
    demo: "#",
    image: "/hospitex.png",
    category: "Full Stack",
    year: "2025"
  },

  {
    id: 8,
    title: "DocuBot — AI Knowledge Assistant",
    description: "An AI-powered document chatbot that extracts insights, answers queries, and performs semantic search across uploaded PDFs and files using RAG architecture.",
    longDescription: "An intelligent document chatbot leveraging RAG architecture to extract insights and answer queries from uploaded PDFs. Uses SentenceTransformers for embedding generation and ChromaDB for vector storage, enabling semantic search and context-aware responses. Features document chunking strategies for optimal retrieval and citation-backed answers.",
    technologies: ["Python", "LangChain", "RAG", "SentenceTransformers", "ChromaDB", "Streamlit", "PyPDF2"],
    features: [
      "📄 PDF document processing and chunking",
      "🔍 Semantic search across documents",
      "💬 Context-aware Q&A with citations",
      "🧠 RAG-based response generation",
      "📊 Multiple document upload support"
    ],
    github: "https://github.com/rajnishkumar1906/DocuBot",
    demo: "#",
    image: "/docubot.png",
    category: "AI/ML",
    year: "2025"
  },

  {
    id: 9,
    title: "GaonShield — Rural Health Monitoring",
    description: "A smart community health and water-borne disease early-warning system deployed for rural regions under social innovation initiative.",
    longDescription: "A community health monitoring system designed for rural areas that provides early warning for water-borne diseases. Integrates IoT sensors with mobile app for real-time health data collection and analysis. Features predictive analytics for disease outbreak forecasting and offline-first architecture for areas with limited connectivity.",
    technologies: ["IoT", "Kotlin", "Android", "Firebase", "Machine Learning", "Data Visualization", "MPAndroidChart"],
    features: [
      "🌡️ Real-time health monitoring",
      "💧 Water-borne disease prediction",
      "📱 Android mobile app with offline support",
      "🏥 Rural healthcare focus",
      "📊 Health data visualization"
    ],
    github: "https://github.com/rajnishkumar1906/Gaon-Shield",
    demo: "#",
    image: "/gaonshield.png",
    category: "Mobile",
    year: "2024"
  },

  {
    id: 10,
    title: "MoodLens — Sentiment Analysis App",
    description: "A Streamlit-powered NLP sentiment analysis tool using transformer models for contextual emotion detection in text with real-time visualization.",
    longDescription: "A sentiment analysis application that uses transformer-based models (BERT, RoBERTa) to detect emotions and sentiment in text. Features real-time analysis, batch processing, and interactive visualizations of results. Includes support for multiple languages and custom model fine-tuning capabilities.",
    technologies: ["Python", "Transformers", "Streamlit", "Hugging Face", "PyTorch", "Plotly", "NLP"],
    features: [
      "😊 Multi-class emotion detection",
      "📊 Interactive sentiment visualization",
      "⚡ Real-time analysis",
      "🧠 BERT/RoBERTa transformer models",
      "🌐 Multi-language support"
    ],
    github: "https://github.com/rajnishkumar1906/MoodLens",
    demo: "#",
    image: "/moodlens.png",
    category: "AI/ML",
    year: "2024"
  },

  {
    id: 11,
    title: "MNIST Digit Classifier",
    description: "Feed-forward neural network for handwritten digit recognition built using PyTorch with comprehensive training, evaluation, and visualization utilities.",
    longDescription: "A deep learning model for handwritten digit recognition using PyTorch. Includes comprehensive training pipeline with configurable hyperparameters, evaluation metrics (accuracy, precision, recall, F1), and visualization tools for model performance analysis. Features multiple architecture variants and experiment tracking.",
    technologies: ["PyTorch", "Deep Learning", "Python", "Neural Networks", "NumPy", "Matplotlib", "Scikit-learn"],
    features: [
      "✍️ Handwritten digit recognition (99.2% accuracy)",
      "📈 Training visualization with TensorBoard",
      "📊 Comprehensive evaluation metrics",
      "🔬 Multiple architecture variants",
      "🧪 Experiment tracking"
    ],
    github: "https://github.com/rajnishkumar1906/mnist-classification",
    demo: "#",
    image: "/mnist.png",
    category: "AI/ML",
    year: "2024"
  },

  {
    id: 12,
    title: "Financial Fraud Detection",
    description: "Machine learning-based fraud detection system trained on real-world datasets with anomaly detection algorithms and model explainability support.",
    longDescription: "A machine learning system for detecting financial fraud using various algorithms including Isolation Forest, XGBoost, and neural networks. Features comprehensive data preprocessing, handling of imbalanced datasets with SMOTE, and model explainability using SHAP and LIME to understand why transactions are flagged as fraudulent. Includes interactive dashboard for monitoring.",
    technologies: ["Python", "Scikit-learn", "XGBoost", "Pandas", "SHAP", "Imbalanced-learn", "FastAPI", "Plotly"],
    features: [
      "💳 Fraud transaction detection (95% precision)",
      "📊 Anomaly detection algorithms",
      "🔍 Model explainability (SHAP, LIME)",
      "⚖️ Imbalanced data handling with SMOTE",
      "📈 Real-time monitoring dashboard"
    ],
    github: "https://github.com/rajnishkumar1906/FinancialFraudDetection",
    demo: "#",
    image: "/fraud-detection.png",
    category: "AI/ML",
    year: "2024"
  },

  {
    id: 13,
    title: "MERN Auth — Secure Authentication System",
    description: "Production-ready authentication module with JWT, bcrypt, email-based SMTP verification, and protected routes for MERN stack applications.",
    longDescription: "A production-ready authentication system for MERN applications featuring JWT tokens with refresh token rotation, bcrypt password hashing, email verification via SMTP (Nodemailer), password reset flow, and protected route middleware. Includes rate limiting, security headers (Helmet), and MongoDB session management.",
    technologies: ["MERN", "JWT", "bcrypt", "Nodemailer", "Express", "MongoDB", "React", "Redis", "Helmet"],
    features: [
      "🔐 JWT authentication with refresh tokens",
      "📧 Email verification (SMTP)",
      "🔄 Password reset flow",
      "🛡️ Protected routes with role-based access",
      "⏱️ Rate limiting & security headers",
      "📦 Redis session management"
    ],
    github: "https://github.com/rajnishkumar1906/MERN-AUTH",
    demo: "#",
    image: "/mernauth.png",
    category: "Full Stack",
    year: "2024"
  }
];

// Export achievements from resume
export const achievements = [
  {
    title: "Problem Solving",
    description: "Solved 500+ algorithmic problems across LeetCode, GeeksforGeeks, Codeforces, and HackerRank."
  },
  {
    title: "Python Rating",
    description: "Earned a 5-Star rating in Python on HackerRank, validating advanced proficiency in Python syntax and algorithmic efficiency."
  },
  {
    title: "Competitive Programming",
    description: "Regular participant in global competitive programming contests with peak LeetCode rating of 1364."
  }
];

// Export certifications from resume
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
    year: "2024",
    link: "https://drive.google.com/file/d/1xGqmvKTR2deFGsJbZU_eP5Rnow4xWNOO/view"
  }
];

// Export education info
export const education = [
  {
    institution: "Lovely Professional University",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    period: "Oct 2022 – Present",
    score: "CGPA: 7.23",
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

// Export experience
export const experience = [
  {
    title: "AI Full Stack Engineer",
    company: "Personal Projects",
    period: "2024 – Present",
    description: "Building production-grade AI applications and full-stack systems with focus on performance, scalability, and user experience. Developed three flagship projects: Finlyze (multi-agent stock analysis), LitScholar (AI librarian with RAG), and Nexora (real-time community platform)."
  }
];
