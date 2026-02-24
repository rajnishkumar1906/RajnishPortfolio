// portfolioData.js - Updated with correct sequential IDs

export const personalInfo = {
  name: "Rajnish Kumar",
  title: "Full Stack Developer | MERN & AI Engineer",
  tagline:
    "Building scalable software, AI-powered applications, and solving real-world problems through technology.",
  about:
    "Software Development Engineer with experience building scalable backend and full-stack (MERN) systems, along with applied AI/ML pipelines. Strong in Python, RESTful APIs, WebSockets, database optimization (Redis, indexing), and modern AI workflows including NLP, computer vision, Retrieval-Augmented Generation (RAG), and multi-agent systems, with a focus on performance, scalability, and reliability.",
  email: "rajnishk71249@gmail.com",
  github: "https://github.com/rajnishkumar1906",
  linkedin: "https://www.linkedin.com/in/rajnishkumar1906/",
  resume: "/resume/Rajnish_Kumar_Resume.pdf",
  avatar: "https://github.com/rajnishkumar1906.png"
};

export const skills = [
  // Programming Languages
  "Python",
  "JavaScript",
  "C++",
  "Java",
  "C",
  
  // Web & Frontend
  "React",
  "Next.js",
  "Tailwind CSS",
  "Responsive Design",
  "Vite",
  
  // Backend & APIs
  "Node.js",
  "Express",
  "FastAPI",
  "Flask",
  "REST APIs",
  "WebSockets",
  "Socket.IO",
  
  // Databases & Caching
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "SQLite",
  "Redis",
  "Firebase",
  "ChromaDB",
  
  // AI / Machine Learning
  "Machine Learning",
  "Deep Learning",
  "NLP",
  "Computer Vision",
  "YOLOv11",
  "OpenCV",
  "TensorFlow",
  "PyTorch",
  "Scikit-Learn",
  "NumPy",
  "Pandas",
  
  // LLM & AI Agents
  "Large Language Models (LLMs)",
  "LangChain",
  "LangGraph",
  "RAG (Retrieval-Augmented Generation)",
  "Multi-Agent Systems",
  "Gemini AI",
  "SentenceTransformers",
  
  // DevOps & Tools
  "Docker",
  "Git & GitHub",
  "GitHub Actions (CI/CD)",
  "AWS (EC2, S3)",
  "Vercel",
  "Render",
  "Cloudinary",
  
  // Core CS Fundamentals
  "Data Structures & Algorithms",
  "DBMS",
  "Operating Systems",
  "Computer Networks"
];

export const projects = [
  // PROJECT 1: Connectly (Most Recent)
  {
    id: 1,
    title: "Connectly - Full-Stack Social Media Platform",
    description: "A production-ready full-stack social media platform with user authentication, posts, follows, real-time chat, and personalized feeds. Features scalable MERN stack architecture with hybrid REST + WebSocket communication.",
    longDescription: "Connectly is a modern full-stack social media platform built with the MERN stack. It allows users to connect, share posts, follow others, and communicate via real-time chat. This project demonstrates scalable backend architecture, clean frontend state management, and hybrid REST + WebSocket communication — perfect for portfolio showcase. Features include secure JWT authentication with HTTP-only cookies, real-time one-to-one chat using Socket.IO, Cloudinary-based image uploads, and a fully responsive Tailwind CSS design.",
    technologies: ["React 19", "Node.js", "Express", "MongoDB", "Socket.IO", "Tailwind CSS", "JWT", "Cloudinary", "Vite", "Render", "Vercel"],
    features: [
      "🔐 JWT Authentication with HTTP-only cookies",
      "💬 Real-time messaging with Socket.IO",
      "👤 Editable user profiles with Cloudinary uploads",
      "📰 Social feed with posts, likes & comments",
      "🤝 Follow/unfollow system with social graph",
      "🔔 Real-time notifications",
      "📱 Fully responsive design"
    ],
    github: "https://github.com/rajnishkumar1906/Connectly",
    demo: "https://connectly-lovat.vercel.app/",
    image: "/connectly.png",
    category: "Full Stack",
    year: "2026"
  },

  // PROJECT 2: LitScholar
{
  id: 2,
  title: "LitScholar – AI-Powered Virtual Librarian",
  description: "An AI-powered virtual librarian that uses semantic search and Retrieval-Augmented Generation (RAG) to deliver explainable, citation-backed book recommendations.",
  longDescription: "LitScholar is a full-stack AI-powered virtual librarian that understands natural language queries and provides intelligent, explainable book recommendations using semantic search and Retrieval-Augmented Generation (RAG). The system leverages SentenceTransformers and ChromaDB for high-precision vector retrieval, integrates Google Gemini for contextual reasoning, and supports secure user authentication with JWT and Google OAuth. It also includes a structured data pipeline for cleaning book datasets, generating embeddings, and delivering citation-backed responses.",
  technologies: [
    "FastAPI",
    "React",
    "PostgreSQL",
    "SentenceTransformers",
    "ChromaDB",
    "RAG",
    "Google Gemini",
    "JWT",
    "OAuth 2.0",
    "Tailwind CSS"
  ],
  features: [
    "🧠 Semantic search using vector embeddings",
    "🤖 RAG-based explainable recommendations with citations",
    "📝 AI-powered librarian-style responses",
    "👤 Secure authentication with JWT and Google OAuth",
    "📊 Structured data pipeline for embeddings and retrieval",
    "🏠 Privacy-aware architecture with local vector storage"
  ],
  github: "https://github.com/rajnishkumar1906/litscholar",
  demo: "#",
  image: "/litscholar.png",
  category: "AI/ML",
  year: "2026"
},
  // PROJECT 3: Agentic Marketing Intelligence System
  {
    id: 3,
    title: "Agentic Marketing Intelligence System",
    description: "An autonomous multi-agent AI pipeline that analyzes 4,500+ Facebook ad performance records, diagnoses ROAS fluctuations, and generates creative recommendations.",
    longDescription: "An Agentic AI system built for comprehensive Facebook Ads analysis. It autonomously analyzes ad performance, diagnoses ROAS fluctuations, validates hypotheses using quantitative signals (CTR, ROAS, CPC metrics), and generates new creative recommendations grounded in real ad messaging. Features a multi-agent architecture (Planner → Data → Insight → Evaluator → Creative) with structured prompting and JSON schema validation.",
    technologies: ["Python", "LangChain", "Multi-Agent Architecture", "LLMs", "Pandas", "FastAPI", "RAG", "JSON Schema", "Pytest", "CLI"],
    features: [
      "🧠 Multi-agent architecture (Planner → Data → Insight → Evaluator → Creative)",
      "📊 Quantitative validation with CTR/ROAS/CPC metrics",
      "🔍 Autonomous ROAS fluctuation diagnosis",
      "💡 Data-driven creative generation",
      "📈 Structured JSON/Markdown outputs",
      "🔬 Hypothesis validation with confidence scores",
      "📝 Comprehensive reporting system"
    ],
    github: "https://github.com/rajnishkumar1906/agentic-fb-analyst",
    demo: "#",
    image: "/agentic-fb.jpg",
    category: "AI/ML",
    year: "2025"
  },

  // PROJECT 4: Computer Vision Image Search
  {
    id: 4,
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

  // PROJECT 5: PPE Detection — Hybrid YOLOv8 + ViT
  {
    id: 5,
    title: "PPE Detection — Hybrid YOLOv8 + ViT",
    description: "An intelligent PPE safety monitoring system using hybrid YOLOv8 and Vision Transformer to detect helmets, jackets, and safety gear in workplace environments.",
    longDescription: "Built an intelligent PPE safety monitoring system using hybrid YOLOv8 and Vision Transformer architecture for accurate detection of safety equipment in workplace environments. Combines the speed of YOLO with the attention mechanisms of Vision Transformers for improved accuracy.",
    technologies: ["YOLOv8", "Vision Transformer", "Deep Learning", "OpenCV", "PyTorch", "Computer Vision"],
    features: [
      "🪖 Helmet detection",
      "🧥 Safety jacket detection",
      "⚙️ Real-time monitoring",
      "🎯 Hybrid architecture for accuracy"
    ],
    github: "https://github.com/rajnishkumar1906/PPE-Detection-Hybrid_YOLOv8_ViT",
    demo: "#",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=900",
    category: "Computer Vision",
    year: "2025"
  },

  // PROJECT 6: HospiTex — Hospital Management System
  {
    id: 6,
    title: "HospiTex — Hospital Management System",
    description: "A full-stack hospital platform with role-based access for Admins, Doctors, Patients & Diagnostics. Includes AI Medibot using Gemini + secure JWT authentication.",
    longDescription: "A comprehensive hospital management system with role-based access control for different user types. Features an AI-powered medical chatbot using Gemini API and RAG architecture for intelligent patient queries.",
    technologies: ["MERN", "JWT", "MongoDB", "Gemini AI", "RAG", "Express", "React", "Node.js"],
    features: [
      "👥 Role-based access (Admin, Doctor, Patient)",
      "🤖 AI Medibot with Gemini",
      "🔐 Secure JWT authentication",
      "📋 Patient record management"
    ],
    github: "https://github.com/rajnishkumar1906/HospiTex",
    demo: "#",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=900",
    category: "Full Stack",
    year: "2025"
  },

  // PROJECT 7: DocuBot — AI Knowledge Assistant
  {
    id: 7,
    title: "DocuBot — AI Knowledge Assistant",
    description: "An AI-powered document chatbot that extracts insights, answers queries, and performs semantic search across uploaded PDFs and files.",
    longDescription: "An intelligent document chatbot leveraging RAG architecture to extract insights and answer queries from uploaded PDFs. Uses embedding models for semantic search and context-aware responses.",
    technologies: ["Generative AI", "Python", "RAG", "Embedding Models", "LangChain", "Streamlit"],
    features: [
      "📄 PDF document processing",
      "🔍 Semantic search across documents",
      "💬 Context-aware Q&A",
      "🧠 RAG-based responses"
    ],
    github: "https://github.com/rajnishkumar1906/DocuBot",
    demo: "#",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900",
    category: "AI/ML",
    year: "2025"
  },

  // PROJECT 8: GaonShield — Rural Health Monitoring
  {
    id: 8,
    title: "GaonShield — Rural Health Monitoring",
    description: "A smart community health & water-borne disease early-warning system deployed for rural regions under social innovation initiative.",
    longDescription: "A community health monitoring system designed for rural areas that provides early warning for water-borne diseases. Integrates IoT sensors with mobile app for real-time health data collection and analysis.",
    technologies: ["IoT", "Kotlin", "Android", "Health Analytics", "Firebase", "Data Visualization"],
    features: [
      "🌡️ Real-time health monitoring",
      "💧 Water-borne disease prediction",
      "📱 Android mobile app",
      "🏥 Rural healthcare focus"
    ],
    github: "https://github.com/rajnishkumar1906/Gaon-Shield",
    demo: "#",
    image: "/image.png",
    category: "Mobile",
    year: "2024"
  },

  // PROJECT 9: MoodLens — Sentiment Analysis App
  {
    id: 9,
    title: "MoodLens — Sentiment Analysis App",
    description: "A Streamlit-powered NLP sentiment analysis tool using transformer models for contextual emotion detection in text.",
    longDescription: "A sentiment analysis application that uses transformer-based models to detect emotions and sentiment in text. Features real-time analysis and visualization of results.",
    technologies: ["NLP", "Transformers", "Python", "Streamlit", "Hugging Face", "PyTorch"],
    features: [
      "😊 Emotion detection",
      "📊 Sentiment visualization",
      "⚡ Real-time analysis",
      "🧠 Transformer models"
    ],
    github: "https://github.com/rajnishkumar1906/MoodLens",
    demo: "#",
    image: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?w=900",
    category: "AI/ML",
    year: "2024"
  },

  // PROJECT 10: MNIST Digit Classifier
  {
    id: 10,
    title: "MNIST Digit Classifier",
    description: "Feed-forward neural network for handwritten digit recognition built using PyTorch with training, evaluation & visualization utilities.",
    longDescription: "A deep learning model for handwritten digit recognition using PyTorch. Includes comprehensive training pipeline, evaluation metrics, and visualization tools for model performance analysis.",
    technologies: ["PyTorch", "Deep Learning", "Python", "Neural Networks", "NumPy", "Matplotlib"],
    features: [
      "✍️ Handwritten digit recognition",
      "📈 Training visualization",
      "📊 Model evaluation metrics",
      "🔬 Neural network architecture"
    ],
    github: "https://github.com/rajnishkumar1906/mnist-classification",
    demo: "#",
    image: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?w=900",
    category: "AI/ML",
    year: "2024"
  },

  // PROJECT 11: Financial Fraud Detection
  {
    id: 11,
    title: "Financial Fraud Detection",
    description: "Machine-learning based fraud detection system trained on real-world datasets with anomaly detection & model explainability support.",
    longDescription: "A machine learning system for detecting financial fraud using various algorithms including anomaly detection. Features model explainability to understand why transactions are flagged as fraudulent.",
    technologies: ["Machine Learning", "Python", "Pandas", "Sklearn", "XGBoost", "Anomaly Detection", "SHAP"],
    features: [
      "💳 Fraud transaction detection",
      "📊 Anomaly detection algorithms",
      "🔍 Model explainability (SHAP)",
      "📈 Performance metrics"
    ],
    github: "https://github.com/rajnishkumar1906/FinancialFraudDetection",
    demo: "#",
    image: "https://images.unsplash.com/photo-1561414927-6d86591d0c4f?w=900",
    category: "AI/ML",
    year: "2024"
  },

  // PROJECT 12: MERN Auth — Secure Authentication System
  {
    id: 12,
    title: "MERN Auth — Secure Authentication System",
    description: "Secure authentication module with JWT, bcrypt, email-based SMTP verification and protected routes for production-grade MERN apps.",
    longDescription: "A production-ready authentication system for MERN applications featuring JWT tokens, bcrypt password hashing, email verification via SMTP, and protected route middleware.",
    technologies: ["MERN", "JWT", "SMTP", "Security", "bcrypt", "Express", "MongoDB", "React"],
    features: [
      "🔐 JWT authentication",
      "📧 Email verification (SMTP)",
      "🛡️ Protected routes",
      "🔑 bcrypt password hashing"
    ],
    github: "https://github.com/rajnishkumar1906/MERN-AUTH",
    demo: "#",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=900",
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
    description: "Earned a 5-Star rating in Python on HackerRank."
  },
  {
    title: "Competitive Programming",
    description: "Regular participant in competitive programming contests."
  }
];

// Export certifications from resume
export const certifications = [
  {
    title: "Complete Machine Learning and Data Science",
    issuer: "GeeksForGeeks",
    year: "2024"
  },
  {
    title: "Introduction to Large Language Models",
    issuer: "Coursera",
    year: "2024"
  },
  {
    title: "Complete Computer Vision Bootcamp with PyTorch & TensorFlow",
    issuer: "Udemy",
    year: "2024"
  }
];

// Export education info
export const education = {
  university: "Lovely Professional University",
  degree: "Bachelor of Technology in Computer Science and Engineering",
  cgpa: "7.23",
  school: "Red Rose School",
  highSchool: "Senior Secondary (Science)",
  highSchoolPercentage: "84%"
};

// Export experience (can be expanded later)
export const experience = [
  {
    title: "Software Development Engineer",
    company: "Freelance / Personal Projects",
    period: "2023 - Present",
    description: "Building scalable full-stack applications and AI-powered systems with focus on performance and reliability."
  }
];
