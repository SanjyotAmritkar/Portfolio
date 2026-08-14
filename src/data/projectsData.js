import medivaultImage from "../assets/projects/medivault.jpg";
import customerPulseImage from "../assets/projects/customerpulse.jpg";
import ecommerceRagImage from "../assets/projects/ecommerce-rag.jpg";
import mediRagImage from "../assets/projects/medirag.jpg";
import adaptiveFitnessImage from "../assets/projects/adaptive-fitness.jpg";
import incomePredictionImage from "../assets/projects/income-prediction.jpg";
import trialMatchImage from "../assets/projects/trialmatch.jpg";
import nycHousingImage from "../assets/projects/nyc-housing.jpg";
import crimeTrendsImage from "../assets/projects/crime-trends.jpg";
import fraudPrivacyImage from "../assets/projects/fraud-privacy.jpg";
import licensePlateImage from "../assets/projects/license-plate.jpg";
import marketArbitrageImage from "../assets/projects/market-arbitrage.jpg";

const projectsData = [
  {
    title: "MediVault",
    subtitle: "Privacy-first medical claims automation",
    description:
      "Built an end-to-end medical document processing pipeline that combines Tesseract OCR, structured extraction, and local LLM inference to turn clinical documents into validated claim data. The system recommends ICD-10 and CPT codes, generates CMS-1500 forms, and keeps sensitive records local; the workflow reduced manual data entry by approximately 60% and achieved approximately 85% coding accuracy.",
    highlights: ["~60% less manual data entry", "~85% medical coding accuracy", "Local-first PHI processing"],
    tech: ["Python", "Streamlit", "Tesseract OCR", "Ollama", "LangChain", "AWS"],
    github: "https://github.com/SanjyotAmritkar/Medivault-AI-Agent",
    demo: "",
    image: medivaultImage,
    featured: true,
  },
  {
    title: "CustomerPulse",
    subtitle: "Predictive customer-retention analytics",
    description:
      "Engineered an explainable machine learning platform that identifies high-risk customer segments using XGBoost and SHAP. Added production-oriented ETL, data-quality validation, Redis-backed monitoring, and FastAPI endpoints to surface real-time alerts, improving retention by 18% and reducing intervention time by 50% in project evaluation.",
    highlights: ["18% retention improvement", "50% faster intervention", "Explainable risk predictions"],
    tech: ["Python", "XGBoost", "SHAP", "FastAPI", "Redis", "SQL", "ETL"],
    github: "",
    demo: "",
    image: customerPulseImage,
    featured: true,
  },
  {
    title: "E-commerce Product Chatbot",
    subtitle: "Scalable semantic product discovery with RAG",
    description:
      "Architected a full-stack RAG application that retrieves relevant Amazon product-review context with SentenceTransformer embeddings and FAISS before generating grounded responses. Exposed versioned FastAPI endpoints and containerized the service for Kubernetes deployment on GCP, delivering approximately 40% higher response relevance than keyword search in project evaluation.",
    highlights: ["~40% higher response relevance", "Versioned REST API", "Containerized for horizontal scaling"],
    tech: ["Python", "FastAPI", "React", "FAISS", "SentenceTransformers", "Docker", "Kubernetes", "GCP"],
    github: "https://github.com/SanjyotAmritkar/Ecommerce-project",
    demo: "",
    image: ecommerceRagImage,
    featured: true,
  },
  // {
  //   title: "ChronicleAI",
  //   subtitle: "Explainable clinical narrative intelligence",
  //   description:
  //     "Developed a healthcare NLP proof of concept that transforms longitudinal clinical notes into traceable patient journeys. A modular pipeline reconstructs timelines, detects medication and symptom changes, identifies care gaps, attributes evidence, and uses an LLM to synthesize clinical narratives from synthetic patient records.",
  //   highlights: ["Evidence-linked AI outputs", "Longitudinal trajectory analysis", "Synthetic data only"],
  //   tech: ["Python", "Streamlit", "Pandas", "Plotly", "NLP", "Anthropic API"],
  //   github: "https://github.com/SanjyotAmritkar/ChronicleAI_Cotiviti_Intern_Assessment",
  //   demo: "",
  // },
  {
    title: "MediRAG",
    subtitle: "Offline semantic search for biomedical research",
    description:
      "Built a four-stage pipeline that parses PubMed XML into Parquet, creates 384-dimensional e5-small embeddings, indexes research abstracts with FAISS, and uses a local Phi-3 model to synthesize citation-backed answers. The system searches more than two million articles and returns the five most relevant papers in under one second.",
    highlights: ["2M+ PubMed articles", "Sub-second semantic retrieval", "Offline, citation-backed answers"],
    tech: ["Python", "PySpark", "FAISS", "SentenceTransformers", "Phi-3", "Pandas", "PyArrow", "Slurm"],
    github: "https://github.com/SanjyotAmritkar/MediRAG",
    demo: "",
    image: mediRagImage,
  },
  {
    title: "State-Aware Adaptive Fitness",
    subtitle: "AI-assisted workouts that respond to user readiness",
    description:
      "Created a full-stack fitness prototype that adapts workout intensity and recovery guidance to a user's current sleep, stress, energy, connection, and enjoyment signals. The application turns weekly check-ins into a burnout classification, contextual recommendations, and equipment-aware workout plans.",
    highlights: ["Five-signal burnout tracking", "Context-aware workout adaptation", "Live full-stack prototype"],
    tech: ["React", "Vite", "Tailwind CSS", "FastAPI", "Python", "LLMs"],
    github: "https://github.com/SanjyotAmritkar/State-Aware-Adaptive-Fitness",
    demo: "https://state-aware-adaptive-fitness.onrender.com",
    image: adaptiveFitnessImage,
  },
  {
    title: "Income Prediction using Machine Learning",
    subtitle: "Rigorous model comparison on UCI Adult Census data",
    description:
      "Developed and evaluated seven classification models for income prediction after preprocessing, class balancing, AIC-based forward feature selection, and randomized hyperparameter tuning. Random Forest achieved the strongest test performance with 92.8% accuracy, 97.6% sensitivity, and a 0.9844 AUC.",
    highlights: ["92.8% test accuracy", "97.6% sensitivity", "0.9844 AUC"],
    tech: ["Python", "Scikit-learn", "XGBoost", "Pandas", "Statsmodels", "Seaborn"],
    github: "https://github.com/SanjyotAmritkar/Income-prediction-using-Machine-Learning",
    demo: "",
    image: incomePredictionImage,
  },
  {
    title: "TrialMatch",
    subtitle: "Swipe-based clinical trial recruitment",
    description:
      "Built at Harvard's HACKRARE hackathon, TrialMatch streamlines two-sided discovery between potential participants and research organizations. The platform maps free-text symptoms to Human Phenotype Ontology terms with ClinPhen, applies Phrank for disease matching, and uses mutual interest to connect candidates with relevant trials.",
    highlights: ["Harvard HACKRARE project", "HPO-based symptom mapping", "Two-sided trial matching"],
    tech: ["React", "Node.js", "Express", "MongoDB", "ClinPhen", "Phrank"],
    github: "https://github.com/SanjyotAmritkar/Trial-Match",
    demo: "",
    image: trialMatchImage,
  },
  {
    title: "NYC Affordable Housing Dashboard",
    subtitle: "Interactive analysis for equitable urban planning",
    description:
      "Designed a multi-view analytics dashboard for exploring affordable housing distribution, development patterns, and resource allocation across New York City's five boroughs. Interactive D3.js visualizations pair geographic and borough-level analysis with a Python data-processing workflow to support evidence-based policy exploration.",
    highlights: ["Five-borough analysis", "Interactive multidimensional views", "NYC Open Data exploration"],
    tech: ["D3.js", "JavaScript", "HTML", "CSS", "Python", "Pandas", "Scikit-learn"],
    github: "https://github.com/SanjyotAmritkar/NYC-Affordable-Housing-Dashboard",
    demo: "https://www.youtube.com/watch?v=R9fkcc9ry_0",
    image: nycHousingImage,
  },
  {
    title: "Crime Trends Analysis",
    subtitle: "Statistical modeling of U.S. crime patterns",
    description:
      "Analyzed U.S. crime data from 2020 onward through regression, classification, clustering, and exploratory visualization in R. XGBoost reached an R² of 0.6818 for crime-frequency prediction, while Logistic Regression produced the strongest violent-crime classification ROC-AUC of 0.8331.",
    highlights: ["2.5M+ source records", "0.6818 best regression R²", "0.8331 best classification AUC"],
    tech: ["R", "XGBoost", "Random Forest", "Logistic Regression", "K-Means", "ggplot2"],
    github: "https://github.com/SanjyotAmritkar/Crime-Trends-analysis-using-R",
    demo: "",
    image: crimeTrendsImage,
  },
  {
    title: "Fraud Detection with Differential Privacy",
    subtitle: "Privacy-preserving intelligence for financial fraud",
    description:
      "Explored a more responsible approach to fraud detection, one that uncovers suspicious credit card activity without exposing the sensitive financial data behind it. Built with IBM's diffprivlib and anomaly-detection techniques, the project demonstrates how privacy and predictive value can coexist in high-risk financial systems.",
    tech: ["Python", "IBM diffprivlib", "Scikit-learn", "Isolation Forest", "Differential Privacy"],
    github: "https://github.com/SanjyotAmritkar/IBMDiffprivlib",
    demo: "",
    image: fraudPrivacyImage,
  },
  {
    title: "License Plate Detection",
    subtitle: "Real-time vehicle identification through computer vision",
    description:
      "Created an automated vehicle-identification pipeline that locates license plates in images, extracts plate information, and records each detection in a centralized system. YOLOv5 and OpenCV power the vision workflow, while Firebase enables detections to become searchable, persistent vehicle records.",
    tech: ["Python", "YOLOv5", "OpenCV", "Firebase", "Pyrebase", "Computer Vision"],
    github: "https://github.com/SanjyotAmritkar/License-Plate-Detection",
    demo: "",
    image: licensePlateImage,
  },
  {
    title: "BSE/NSE Arbitrage Recommendation System",
    subtitle: "Turning cross-exchange price gaps into actionable signals",
    description:
      "Collaborated on a full-stack market intelligence platform that tracks price differences between India's BSE and NSE exchanges and converts arbitrage opportunities into clear buy-and-sell recommendations. The system combines a Spring Boot service layer, SQL-backed market data, and an AngularJS interface, reaching 92% recommendation accuracy in project evaluation.",
    tech: ["Java", "Spring Boot", "AngularJS", "SQL", "REST APIs"],
    github: "https://github.com/SanjyotAmritkar/BSE-NSE-Arbitrage-Recommendation-System",
    demo: "",
    image: marketArbitrageImage,
  },
];

export default projectsData;
