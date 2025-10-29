const projectsData = [
  {
    title: "Income Prediction using Machine Learning",
    description: "Built a supervised ML pipeline on UCI Census data using Random Forest, achieving 97.6% recall for high-income prediction. Performed AIC-based feature selection and model evaluation via AUC and ROC.",
    tech: "Python, Scikit-learn, Pandas, Seaborn",
    github: "https://github.com/SanjyotAmritkar/Income-Prediction",
    demo: ""
  },
  {
    title: "E-commerce Chatbot with RAG",
    description: "Developed a chatbot using product reviews from Amazon with Retrieval-Augmented Generation using FAISS and LLM. Built with FastAPI backend and React frontend.",
    tech: "Python, FastAPI, React, FAISS, OpenAI",
    github: "https://github.com/SanjyotAmritkar/Ecommerce-RAG-Chatbot",
    demo: ""
  },
{
  title: "Trial Match",
  subtitle: "Swipe-based clinical trial matching platform",
  description: `TrialMatch revolutionizes clinical trial recruitment by offering a Tinder-style interface that connects users with research organizations. Using advanced NLP tools like Clinphen and Phrank, it maps user symptoms to HPO terms and finds matching trials.`,
  features: [
    "⚕️ Swipe-based participant-trial matching for enhanced UX.",
    "🧠 Symptom-to-HPO mapping using Clinphen for smart self-diagnosis.",
    "🔍 Disease matching via Phrank to connect with relevant trials.",
    "🧬 Support for rare disease identification and recruitment.",
    "📩 Instant dual-sided notifications on match confirmation."
  ],
  tech: "Python, React, FastAPI, MongoDB, Clinphen, Phrank",
  github: "https://github.com/SanjyotAmritkar/Trial-Match",
  demo: "", // Add demo link if any
},

  {
    title: "Fraud Detection with Differential Privacy",
    description: "Trained ML models using IBM’s diffprivlib to detect credit card fraud with 95% accuracy. Contributed Isolation Forest to open-source library.",
    tech: "Python, IBM diffprivlib, Scikit-learn, Machine learning, Statistics, Model training",
    github: "https://github.com/SanjyotAmritkar/IBMDiffprivlib",
    demo: ""
  },
{
  title: "NYC Affordable Housing Dashboard",
  subtitle: "Visual insights into NYC’s housing equity and development",
  description: `This interactive dashboard empowers policymakers, urban planners, and researchers to analyze NYC’s affordable housing distribution and development patterns across all five boroughs. It reveals key insights into housing equity, trends, and resource allocation.`,
  features: [
    "Multi-layered housing data visualization with D3.js & Plotly.",
    "Geographic mapping of development patterns across NYC.",
    "Borough-wise comparisons for resource allocation and impact.",
    "Interactivity for deep-dive filtering by year, project type, and borough.",
    "Equity analysis through socio-economic overlays."
  ],
  tech: "React, D3.js, Plotly, JavaScript, CSS, NYC OpenData",
  github: "https://github.com/SanjyotAmritkar/NYC-Affordable-Housing-Dashboard", // Replace with actual
  demo: "", // Optional live demo link
},

  {
    title: "License Plate Detection",
    description: " Built a computer vision model using YOLOv5, OpenCV, and Python to accurately extract license plate numbers from images with 90% precision.Implemented real-time vehicle tracking by storing detected data in a centralized database using Pyrebase",
    tech: "Python, OpenCV, YOLOv5, Firebase, Computer Vision",
    github: "https://github.com/SanjyotAmritkar/License-Plate-Detection",
    demo: ""
  },
  {
    title: "BSE/NSE Arbitrage Recommendation System",
    description: "Built a stock arbitrage system to recommend buy/sell actions between BSE/NSE markets based on pricing anomalies. Achieved 92% accuracy using Spring Boot, SQL, and AngularJS.",
    tech: "Java, Spring Boot, AngularJS, SQL, Full-stack Development",
    github: "https://github.com/SanjyotAmritkar/BSE-NSE-Arbitrage-Recommendation-System",
    demo: ""
  },
  {
    title: "Crime Trends Analysis",
    description: "Analyzed and clustered Indian crime data using R and unsupervised ML to detect trends by crime category. Achieved 86.6% accuracy in crime severity classification using XGBoost, Logistic Regression, and Random Forest.",
    tech: "R, K-Means, XGBoost, Logistic Regression, Random Forest, Machine Learning",
    github: "https://github.com/SanjyotAmritkar/Crime-Trends-analysis-using-R",
    demo: ""
  }
  
];

export default projectsData;
