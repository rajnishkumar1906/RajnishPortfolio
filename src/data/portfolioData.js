export const personalInfo = {
  name: "Rajnish Kumar",

  title: "Full Stack Developer | MERN & AI Engineer",

  tagline:
    "Building scalable software, AI-powered applications, and solving real-world problems through technology.",

  about:
    "Passionate full-stack developer experienced in the MERN stack, AI/ML, computer vision, and intelligent systems. I enjoy building production-ready applications that create real impact.",

  email: "rajnishk71249@gmail.com",

  github: "https://github.com/rajnishkumar1906",

  linkedin: "https://www.linkedin.com/in/rajnishkumar1906/",

  // Recommended: place resume file in /public/resume/
  resume: "/resume/Rajnish_Kumar_Resume.pdf",

  // Auto-updating GitHub avatar (fallback included)
  avatar:
    "https://github.com/rajnishkumar1906.png" 
};

export const skills = [
  // Web & Frontend
  "React",
  "JavaScript",
  "Tailwind CSS",
  "Responsive Design",

  // Backend & APIs
  "Node.js",
  "Express",
  "REST APIs",
  "Flask",

  // Databases
  "MongoDB",

  // Dev & Tools
  "Git & GitHub",

  // AI / ML
  "Python",
  "Machine Learning",
  "Computer Vision",
  "LangChain",
  "Flask",
];

export const projects = [
  {
    id: 1,
    title: "Computer Vision Image Search",
    description:
      "A computer-vision powered image search engine using YOLO + Streamlit that allows users to search visually similar images based on object detection embeddings.",
    technologies: ["YOLO", "Computer Vision", "Streamlit", "Python"],
    github: "https://github.com/rajnishkumar1906/computer-vision-image-search",
    demo: "#",
    image: "/image-search-app.png"
  },

  {
    id: 2,
    title: "PPE Detection — Hybrid YOLOv8 + ViT",
    description:
      "An intelligent PPE safety monitoring system using hybrid YOLOv8 and Vision Transformer to detect helmets, jackets, and safety gear in workplace environments.",
    technologies: ["YOLOv8", "Vision Transformer", "Deep Learning", "OpenCV"],
    github: "https://github.com/rajnishkumar1906/PPE-Detection-Hybrid_YOLOv8_ViT",
    demo: "#",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=900"
  },

  {
    id: 3,
    title: "HospiTex — Hospital Management System",
    description:
      "A full-stack hospital platform with role-based access for Admins, Doctors, Patients & Diagnostics. Includes AI Medibot using Gemini + secure JWT authentication.",
    technologies: ["MERN", "JWT", "MongoDB", "Gemini AI", "RAG"],
    github: "https://github.com/rajnishkumar1906/HospiTex",
    demo: "#",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=900"
  },

  {
    id: 4,
    title: "DocuBot — AI Knowledge Assistant",
    description:
      "An AI-powered document chatbot that extracts insights, answers queries, and performs semantic search across uploaded PDFs and files.",
    technologies: ["Generative AI", "Python", "RAG", "Embedding Models"],
    github: "https://github.com/rajnishkumar1906/DocuBot",
    demo: "#",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900"
  },

  // {
  //   id: 5,
  //   title: "ResumeRAG — AI Resume Analyzer",
  //   description:
  //     "AI-based resume analyzer that scans resumes, extracts structured info, and performs semantic matching using Retrieval-Augmented Generation.",
  //   technologies: ["RAG", "Vector DB", "JavaScript", "LLMs"],
  //   github: "https://github.com/rajnishkumar1906/ResumeRag",
  //   demo: "#",
  //   image: "https://images.unsplash.com/photo-1587613864521-9ef9b4b4b31b?w=900"
  // },

  {
    id: 6,
    title: "GaonShield — Rural Health Monitoring",
    description:
      "A smart community health & water-borne disease early-warning system deployed for rural regions under social innovation initiative.",
    technologies: ["IoT", "Kotlin", "Android", "Health Analytics"],
    github: "https://github.com/rajnishkumar1906/Gaon-Shield",
    demo: "#",
    image: "/image.png"
  },

  {
    id: 7,
    title: "MoodLens — Sentiment Analysis App",
    description:
      "A Streamlit-powered NLP sentiment analysis tool using transformer models for contextual emotion detection in text.",
    technologies: ["NLP", "Transformers", "Python", "Streamlit"],
    github: "https://github.com/rajnishkumar1906/MoodLens",
    demo: "#",
    image: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?w=900"
  },

  {
    id: 8,
    title: "MNIST Digit Classifier",
    description:
      "Feed-forward neural network for handwritten digit recognition built using PyTorch with training, evaluation & visualization utilities.",
    technologies: ["PyTorch", "Deep Learning", "Python"],
    github: "https://github.com/rajnishkumar1906/mnist-classification",
    demo: "#",
    image: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?w=900"
  },

  {
    id: 9,
    title: "Financial Fraud Detection",
    description:
      "Machine-learning based fraud detection system trained on real-world datasets with anomaly detection & model explainability support.",
    technologies: ["Machine Learning", "Python", "Pandas", "Sklearn"],
    github: "https://github.com/rajnishkumar1906/FinancialFraudDetection",
    demo: "#",
    image: "https://images.unsplash.com/photo-1561414927-6d86591d0c4f?w=900"
  },

  {
    id: 10,
    title: "MERN Auth — Secure Authentication System",
    description:
      "Secure authentication module with JWT, bcrypt, email-based SMTP verification and protected routes for production-grade MERN apps.",
    technologies: ["MERN", "JWT", "SMTP", "Security"],
    github: "https://github.com/rajnishkumar1906/MERN-AUTH",
    demo: "#",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=900"
  }
];
