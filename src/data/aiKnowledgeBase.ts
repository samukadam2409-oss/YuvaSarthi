import { KBEntry } from '../types';

export const AI_KNOWLEDGE_BASE: KBEntry[] = [
  // ==========================================
  // 1. RESUME & ATS OPTIMIZATION
  // ==========================================
  {
    id: 'kb-resume-ats-boost',
    category: 'resume',
    categoryLabel: 'ATS Resume Optimizer',
    title: 'How to Boost Resume ATS Score to 95+',
    sampleQuestions: [
      'how do i improve my ats score',
      'how to increase resume score to 95',
      'my ats score is low how to fix it',
      'resume ats optimizer tips',
      'how can i get 95+ score on resume analyzer'
    ],
    primaryKeywords: ['ats', 'score', 'resume', 'boost', 'increase', 'improve', '95', 'scanner'],
    secondaryKeywords: ['analyzer', 'rating', 'points', 'optimize', 'parser', 'audit', 'cv'],
    responseTemplate: `Your resume is currently rated **{atsScore}/100** on YuvaSarthi's ATS Scanner. 🎯

Here is the exact step-by-step formula to cross **95+**:
1. **Keyword Density**: Match key terms from target roles (e.g. *FastAPI, React 19, Docker containerization, Vector DBs*).
2. **Quantify Every Bullet Point**: Follow Google's XYZ formula: *"Accomplished [X], as measured by [Y], by doing [Z]"* (e.g. *"Reduced API latency by 42% using Redis caching"*).
3. **Clean Single-Column Layout**: Remove tables, multi-column blocks, or graphics that confuse ATS parsers.
4. **Standard Section Headers**: Use *Education, Technical Skills, Experience, Projects, Certifications*.
5. **Verifiable Proof**: Include live URLs and GitHub repository links for all listed projects.`,
    suggestions: ['Open Resume Analyzer', 'Scan Missing Keywords', 'Check Project Bullet Formulas'],
    actionRoute: 'resume-analyzer',
    actionLabel: 'Go to Resume Analyzer'
  },
  {
    id: 'kb-resume-ats-keywords',
    category: 'resume',
    categoryLabel: 'ATS Keywords Guide',
    title: 'Top ATS Keywords for AI & Full-Stack Resumes',
    sampleQuestions: [
      'what keywords should i add to my resume',
      'missing ats keywords for python and react resume',
      'best tech keywords for ai full stack cv',
      'keywords for software engineering resume',
      'what ats keywords should i include in my cv'
    ],
    primaryKeywords: ['ats keywords', 'resume keywords', 'cv keywords', 'missing keywords', 'resume skills keywords'],
    secondaryKeywords: ['resume buzzwords', 'parser keywords', 'ats scanner keywords', 'resume tech terms'],
    responseTemplate: `Based on current 2026 hiring data for **{targetRole}**, here are the top high-impact ATS keywords to include on your **Resume / CV**:

• **AI & MLOps**: *PyTorch, Transformers, LLM Fine-Tuning, LangChain, RAG Pipelines, Vector Databases (ChromaDB, Pinecone), ONNX Runtime, CUDA Acceleration*
• **Full-Stack & Cloud**: *React 19, TypeScript, Next.js, FastAPI, Node.js, GraphQL, Redis Caching, PostgreSQL, Microservices*
• **DevOps & Architecture**: *Docker, Kubernetes Helm, GitHub Actions CI/CD, AWS ECS/Lambda, Terraform, REST API Architecture*

💡 **Pro-Tip**: Add these organically inside your project descriptions rather than just dumping an uncontextualized keyword list!`,
    suggestions: ['Analyze My Resume', 'View Skill Gaps', 'Draft Cover Letter'],
    actionRoute: 'resume-analyzer',
    actionLabel: 'Scan Resume Keywords'
  },
  {
    id: 'kb-resume-metrics',
    category: 'resume',
    categoryLabel: 'Metric Quantification',
    title: 'How to Quantify Achievements and Projects on Resume',
    sampleQuestions: [
      'how to quantify resume bullets',
      'how to write numbers on resume',
      'xyz formula google resume',
      'quantify impact on projects'
    ],
    primaryKeywords: ['quantify', 'metrics', 'numbers', 'xyz', 'bullet', 'impact', 'formula'],
    secondaryKeywords: ['percentages', 'latency', 'users', 'accuracy', 'results', 'data'],
    responseTemplate: `Recruiters and ATS engines prioritize quantified impact over generic task descriptions.

**Transform your bullet points using the XYZ formula:**

❌ *Weak*: "Built a full-stack platform for campus internship matching."
✅ *Strong*: "Architected a full-stack matching engine serving **10,000+ students**, achieving **sub-80ms semantic query latency** with **94.2% AI match accuracy**."

❌ *Weak*: "Implemented machine learning model for image processing."
✅ *Strong*: "Trained a PyTorch CNN model on **50,000+ scans**, boosting diagnostic sensitivity by **18%** while cutting inference time by **35%**."`,
    suggestions: ['Improve My Resume', 'Optimize Cover Letter', 'Explore Projects Hub'],
    actionRoute: 'resume-analyzer',
    actionLabel: 'Test Bullets in Analyzer'
  },
  {
    id: 'kb-resume-format',
    category: 'resume',
    categoryLabel: 'Resume Formatting',
    title: 'Best Resume Format: LaTeX vs Word vs PDF',
    sampleQuestions: [
      'is latex resume good for ats',
      'single page resume or two pages',
      'pdf or word for ats scanner',
      'what is the best resume template'
    ],
    primaryKeywords: ['latex', 'template', 'format', 'pdf', 'word', 'single', 'page', 'pages'],
    secondaryKeywords: ['layout', 'design', 'overleaf', 'jakes', 'ats-friendly'],
    responseTemplate: `For college students and candidates with < 5 years of experience:

1. **Length**: Strictly **1 Page**. Two-page resumes get penalized by Tier-1 screening algorithms.
2. **File Format**: Standard text-selectable **PDF** (ensure text can be copied with Ctrl+C).
3. **Template Style**: Minimalist, single-column templates like *Jake's Resume (LaTeX/Overleaf)* or *Harvard Clean Format*.
4. **Avoid**: Two-column grids, skill progress bars (e.g. "80% Python"), photos, tables, and icons in text paths.
5. **Fonts**: Clear standard fonts (*Inter, Calibri, Arial, Helvetica, Latin Modern*) between 10pt and 11.5pt.`,
    suggestions: ['Analyze My Resume Score', 'Check My Profile Info', 'Ask Another Question'],
    actionRoute: 'resume-analyzer',
    actionLabel: 'Audit My Resume Layout'
  },

  // ==========================================
  // 2. INTERNSHIPS & OPPORTUNITIES
  // ==========================================
  {
    id: 'kb-internship-search-remote',
    category: 'internships',
    categoryLabel: 'Internship Discovery',
    title: 'Top Remote & High-Stipend AI Internships',
    sampleQuestions: [
      'find remote internships',
      'what remote internships match my python react profile',
      'high stipend internships in india',
      'available work from home internships',
      'python react remote jobs'
    ],
    primaryKeywords: ['remote', 'internship', 'internships', 'wfh', 'python', 'react', 'stipend', 'jobs'],
    secondaryKeywords: ['opportunities', 'apply', 'openings', 'work from home', 'stipends', 'salary'],
    responseTemplate: `Based on your verified skills in **React (90%)** and **Python (85%)**, here are top opportunities matching your profile:

1. **Tata Digital Labs** — *Full-Stack React & Cloud Intern*
   • **Stipend**: ₹40,000 / mo | **Mode**: Remote | **Match**: 94%
2. **ISRO SAC** — *AI Satellite Vision Trainee*
   • **Stipend**: ₹35,000 / mo | **Mode**: Hybrid / Bengaluru | **Match**: 96%
3. **Microsoft India** — *Generative AI & LLM Systems Intern*
   • **Stipend**: ₹80,000 / mo | **Mode**: Hybrid / Hyderabad | **Match**: 91%
4. **Zomato Engineering** — *Backend Platform Intern (FastAPI & Golang)*
   • **Stipend**: ₹50,000 / mo | **Mode**: Remote | **Match**: 89%

You can submit an instant verified application with 1-click on the Internships Portal!`,
    suggestions: ['Go to Internships Portal', 'Check My Matched Roles', 'Draft Cover Letter'],
    actionRoute: 'internships',
    actionLabel: 'Browse Internships'
  },
  {
    id: 'kb-internship-isro-satellite',
    category: 'internships',
    categoryLabel: 'ISRO Internship Program',
    title: 'ISRO Satellite Vision Trainee Program Details',
    sampleQuestions: [
      'tell me about isro internship',
      'isro satellite trainee requirements',
      'isro stipend and eligibility',
      'how to prepare for isro interview'
    ],
    primaryKeywords: ['isro', 'satellite', 'vision', 'sac', 'ursc', 'space', 'trainee'],
    secondaryKeywords: ['computer vision', 'pytorch', 'remote sensing', 'ministry', 'research'],
    responseTemplate: `**ISRO Space Applications Centre (SAC) AI Satellite Vision Program**:

• **Role**: AI Satellite Vision & Geospatial Trainee
• **Stipend**: ₹35,000 / month + Research Housing Allowance
• **Duration**: 6 Months (Commencing July 2026)
• **Key Work**: Processing multi-spectral satellite imagery, neural segmentation for land-use mapping, and high-performance CUDA inference.
• **Eligibility**: B.Tech CS/AI/ECE with CGPA ≥ 8.0 (Your CGPA: **{cgpa}** — *Eligible!*).

You have already been officially matched and pre-allocated for this prestigious opportunity!`,
    suggestions: ['View Allocation Result', 'Download Offer Letter', 'Contact Assigned Mentor'],
    actionRoute: 'allocation',
    actionLabel: 'Check My ISRO Allotment'
  },
  {
    id: 'kb-internship-tata-digital',
    category: 'internships',
    categoryLabel: 'Tata Digital Program',
    title: 'Tata Digital Full-Stack Internship Insights',
    sampleQuestions: [
      'tell me about tata digital internship',
      'tata digital interview process',
      'tata neu intern stipend',
      'how to get selected at tata digital'
    ],
    primaryKeywords: ['tata', 'digital', 'neu', 'fullstack', 'full-stack', 'react'],
    secondaryKeywords: ['fastapi', 'microfrontends', 'selection', 'cloud', 'interview'],
    responseTemplate: `**Tata Digital Labs — Full-Stack Cloud & AI Internship**:

• **Stipend**: ₹40,000 / month (Fully Remote)
• **Tech Stack**: React 19, TypeScript, GraphQL, FastAPI, AWS Serverless.
• **Hiring Flow**: 
  1. AI Resume Screening (Threshold: 85+ ATS Score)
  2. 60-min Live Coding Test (Data Structures & React state management)
  3. Techno-Managerial Fitment Round
• **Conversion Rate**: ~75% of high-performing interns receive a full-time PPO (₹18-24 LPA CTC).`,
    suggestions: ['Draft Tata Cover Letter', 'Practice React Interview', 'View Openings'],
    actionRoute: 'internships',
    actionLabel: 'View Tata Digital Role'
  },
  {
    id: 'kb-internship-1click-apply',
    category: 'internships',
    categoryLabel: '1-Click Application',
    title: 'How the 1-Click AI Application System Works',
    sampleQuestions: [
      'how do i apply for internships',
      'how does 1 click application work',
      'do i need to upload resume every time',
      'can i add a custom note when applying'
    ],
    primaryKeywords: ['apply', '1-click', 'application', 'submit', 'how to apply', 'process'],
    secondaryKeywords: ['profile', 'fast', 'instant', 'cover note', 'tracking'],
    responseTemplate: `YuvaSarthi streamlines your internship hunt through **AI Verified 1-Click Applications**:

1. **Unified Verified Profile**: Your verified college credentials, CGPA ({cgpa}), ATS resume, and skill badges are bundled automatically.
2. **AI Match Score**: Every application computes your compatibility percentage instantly based on employer criteria.
3. **Optional Cover Note**: You can attach a tailored AI-generated cover statement to stand out.
4. **Real-time Pipeline Tracking**: Monitor review status (*Applied ➔ AI Shortlisted ➔ Interview ➔ Offer*) from your Dashboard.`,
    suggestions: ['Explore Open Roles', 'View My Applications', 'Analyze Resume'],
    actionRoute: 'internships',
    actionLabel: 'Apply on Internships Hub'
  },

  // ==========================================
  // 3. SKILL GAP & CAREER ROADMAPS
  // ==========================================
  {
    id: 'kb-skill-gap-analysis',
    category: 'skills',
    categoryLabel: 'Skill Gap Intelligence',
    title: 'How Skill Gap Analysis Works and How to Bridge Gaps',
    sampleQuestions: [
      'what is skill gap analysis',
      'how to check my missing skills',
      'how to bridge skill gaps',
      'what skills do i need for target role'
    ],
    primaryKeywords: ['skill', 'gap', 'skills', 'readiness', 'gaps', 'missing', 'target', 'role'],
    secondaryKeywords: ['proficiency', 'benchmark', 'roadmap', 'score', 'requirements'],
    responseTemplate: `YuvaSarthi's **Skill Gap Intelligence Engine** benchmarks your verified skill matrix against 50,000+ active industry job descriptions for **{targetRole}**.

**Your Current Standing**:
• Current Readiness Score: **{readinessScore}%**
• Core Strengths: *React & TypeScript (90%), Python & FastAPI (85%)*
• High-Priority Gaps:
  1. **Docker & Kubernetes** (Current: 68% | Target: 85%) — *Recommended: Cloud-Native Microservices on Swayam*
  2. **PyTorch MLOps** (Current: 75% | Target: 90%) — *Recommended: DeepLearning.AI Specialization*

Bridging these two gaps will elevate your readiness score to **96%+**!`,
    suggestions: ['Open Skill Gap Analyzer', 'Enroll in Free Courses', 'View Career Paths'],
    actionRoute: 'skill-gap',
    actionLabel: 'Analyze My Skill Gaps'
  },
  {
    id: 'kb-skill-fullstack-roadmap',
    category: 'skills',
    categoryLabel: 'Full-Stack Roadmap',
    title: '2026 AI Full-Stack Engineer Roadmap',
    sampleQuestions: [
      'full stack roadmap 2026',
      'how to become full stack developer',
      'technologies needed for full stack',
      'learning path for web development'
    ],
    primaryKeywords: ['fullstack', 'full-stack', 'roadmap', 'frontend', 'backend', 'web', 'path'],
    secondaryKeywords: ['react', 'nextjs', 'fastapi', 'node', 'typescript', 'postgres', 'docker'],
    responseTemplate: `Here is the modern industry roadmap for **AI Full-Stack Engineers**:

1. **Frontend Mastery**: TypeScript, React 19, Next.js App Router, Tailwind CSS, TanStack Query, State Management (Zustand).
2. **High-Concurrency Backend**: FastAPI / Python or Node.js/Go, REST & GraphQL APIs, Asynchronous Workers (Celery/BullMQ).
3. **Database Architecture**: PostgreSQL with indexing, Redis caching layers, Vector DBs (ChromaDB/pgvector for AI RAG).
4. **Cloud & Containerization**: Docker, Docker Compose, CI/CD GitHub Actions, AWS ECS/Cloudflare Workers.
5. **AI Integration**: LangChain/LlamaIndex, OpenAI/Gemini API pipelines, Structured Outputs, Local LLM quantization.`,
    suggestions: ['Explore Career Paths', 'View Recommended Courses', 'Scan Resume for Full-Stack'],
    actionRoute: 'career-paths',
    actionLabel: 'View Full-Stack Path'
  },
  {
    id: 'kb-skill-ai-engineer-roadmap',
    category: 'skills',
    categoryLabel: 'AI & ML Roadmap',
    title: 'Artificial Intelligence & Machine Learning Roadmap',
    sampleQuestions: [
      'ai engineer roadmap',
      'how to become machine learning engineer',
      'what to learn for ai jobs',
      'generative ai developer path'
    ],
    primaryKeywords: ['ai', 'ml', 'machine learning', 'artificial intelligence', 'llm', 'deep learning'],
    secondaryKeywords: ['pytorch', 'tensorflow', 'transformers', 'rag', 'nlp', 'computer vision'],
    responseTemplate: `Here is the industry-standard **AI / ML Systems Engineer Roadmap**:

1. **Core Mathematics & Python**: Linear algebra, multivariate calculus, probability, NumPy, Pandas, Vectorized computing.
2. **Deep Learning Frameworks**: PyTorch (tensors, autograd, custom training loops), HuggingFace Transformers.
3. **Generative AI & LLMs**: RAG (Retrieval-Augmented Generation), Prompt Engineering, Fine-tuning with LoRA/QLoRA, Vector embeddings.
4. **MLOps & Deployment**: ONNX model export, FastAPI inference endpoints, Docker containerization, Triton Inference Server.
5. **Evaluation & Safety**: Ragas evaluation framework, Guardrails, Latency and Token optimization.`,
    suggestions: ['View AI Career Path', 'Check ISRO Placement Details', 'Learning Hub'],
    actionRoute: 'career-paths',
    actionLabel: 'View AI Roadmap'
  },
  {
    id: 'kb-learn-aiml-skills',
    category: 'skills',
    categoryLabel: 'AI & ML Curriculum',
    title: 'Mastering AI & Machine Learning Skills (AIML Domain Guide)',
    sampleQuestions: [
      'i want to learn new skills completely based on aiml domain',
      'what skills to learn in aiml domain',
      'how to learn ai and machine learning skills',
      'aiml skill roadmap and courses',
      'what are the best skills in aiml for freshers',
      'learn artificial intelligence and machine learning',
      'i want to learn aiml'
    ],
    primaryKeywords: ['aiml', 'aiml domain', 'ai', 'ml', 'machine learning', 'learn aiml', 'ai skills', 'ml skills', 'artificial intelligence', 'learning aiml'],
    secondaryKeywords: ['curriculum', 'pytorch', 'deep learning', 'transformers', 'llm', 'learn', 'study', 'skills', 'course', 'neural'],
    responseTemplate: `Here is the structured roadmap to master **AI & Machine Learning (AI/ML)** in 2026:

1. **Foundations & Mathematical Core**:
   • **Mathematics**: Linear Algebra (Matrix decomposition, SVD), Multivariate Calculus (Gradients, Jacobians), Probability & Bayes Theorem.
   • **Numerical Computing**: Python 3.12, NumPy vectorization, Pandas data wrangling.

2. **Classical Machine Learning**:
   • **Supervised Learning**: Linear/Logistic Regression, Random Forests, Gradient Boosted Trees (XGBoost, LightGBM).
   • **Unsupervised Learning**: K-Means, PCA Dimensionality Reduction, t-SNE embeddings.
   • **Model Evaluation**: Cross-Validation, Precision-Recall curves, ROC-AUC, Confusion Matrices.

3. **Deep Learning & Computer Vision / NLP**:
   • **Frameworks**: PyTorch (Tensors, Autograd, custom \`nn.Module\` pipelines).
   • **Vision & Sequences**: ResNets, ConvNeXt, Vision Transformers (ViT), LSTMs.
   • **Modern NLP**: Hugging Face Transformers, BERT tokenization, GPT decoder models.

4. **Generative AI & LLM Engineering**:
   • **RAG Pipelines**: Vector DBs (*ChromaDB, Pinecone, pgvector*), LangChain / LlamaIndex, semantic chunking.
   • **Model Fine-Tuning**: LoRA, QLoRA parameter-efficient adaptation, RLHF fundamentals.
   • **Efficient Inference**: ONNX Runtime, Ollama, TensorRT-LLM, Token streaming.

5. **MLOps & Production Systems**:
   • Containerizing inference engines with **Docker & FastAPI**, experiment tracking via **MLflow**, and CI/CD pipelines.

💡 **Next Step**: You can enroll in AICTE-certified **Deep Learning & Cloud Modules** directly in our Learning Hub with 100% credit transfer!`,
    suggestions: ['Open Learning Hub', 'View Target Role Gaps', 'Explore AI Career Paths'],
    actionRoute: 'learning',
    actionLabel: 'Explore AI/ML Courses'
  },
  {
    id: 'kb-learn-cloud-devops',
    category: 'skills',
    categoryLabel: 'Cloud & DevOps Guide',
    title: 'Mastering Cloud Computing & DevOps Architecture',
    sampleQuestions: [
      'i want to learn cloud and devops',
      'skills to learn for devops engineer',
      'how to learn docker and kubernetes',
      'cloud engineering learning path'
    ],
    primaryKeywords: ['cloud', 'devops', 'docker', 'kubernetes', 'aws', 'learn cloud', 'learn devops', 'ci cd'],
    secondaryKeywords: ['terraform', 'helm', 'containers', 'infrastructure', 'microservices'],
    responseTemplate: `Here is the modern **Cloud & DevOps Engineering Roadmap**:

1. **Linux & Scripting**: Linux internals, Bash scripting, networking (DNS, Subnets, TLS/SSL, Reverse Proxies).
2. **Containerization & Orchestration**:
   • **Docker**: Multi-stage builds, rootless containers, Docker Compose.
   • **Kubernetes**: Pods, Deployments, Services, Ingress, Helm charts, ConfigMaps & Secrets.
3. **CI/CD Automation**: GitHub Actions, GitLab CI, automated testing, container registry publishing.
4. **Cloud Providers**: AWS (EC2, ECS, EKS, Lambda, S3, RDS, IAM) or GCP/Azure.
5. **Infrastructure as Code (IaC)**: Terraform modules, state management, Ansible configuration management.
6. **Observability**: Prometheus metrics scraping, Grafana dashboards, OpenTelemetry distributed tracing.`,
    suggestions: ['View DevOps Learning Path', 'Enroll in AWS Cloud Prep', 'Bridge Skill Gaps'],
    actionRoute: 'learning',
    actionLabel: 'Browse Cloud Courses'
  },
  {
    id: 'kb-learn-cybersecurity-skills',
    category: 'skills',
    categoryLabel: 'Cybersecurity & Infosec',
    title: 'Mastering Cybersecurity, Ethical Hacking & SOC Analysis',
    sampleQuestions: [
      'i want to learn cybersecurity',
      'how to learn ethical hacking',
      'cybersecurity learning path for freshers',
      'skills needed for soc analyst',
      'penetration testing roadmap'
    ],
    primaryKeywords: ['cybersecurity', 'cyber', 'security', 'ethical hacking', 'hacking', 'infosec', 'penetration testing', 'pentest', 'soc analyst', 'kali linux'],
    secondaryKeywords: ['networking', 'wireshark', 'burp suite', 'owasp', 'cryptography', 'siem', 'splunk', 'comptia'],
    responseTemplate: `Here is the comprehensive **Cybersecurity & Ethical Hacking Roadmap** for 2026:

1. **Foundations of Networking & Systems**:
   • **Networking Protocols**: TCP/IP stack, DNS, DHCP, HTTP/HTTPS, SSL/TLS handshakes, Subnetting.
   • **Operating Systems**: Linux Command Line mastery (Kali Linux, Parrot OS, Ubuntu Server), Windows Active Directory internals.

2. **Core Security Domains**:
   • **Network Security**: Packet analysis with **Wireshark**, port scanning with **Nmap**, firewall configurations.
   • **Web Application Security**: Understanding the **OWASP Top 10** (*SQL Injection, XSS, CSRF, SSRF, Broken Auth*), intercepting traffic with **Burp Suite**.
   • **Cryptography**: Symmetric/Asymmetric encryption (AES, RSA), hashing algorithms (SHA-256), PKI infrastructure.

3. **Defensive Security (Blue Team & SOC)**:
   • Security Information & Event Management (**SIEM**) with **Splunk** and **ELK Stack**.
   • Incident Response, threat hunting, and log analysis for malware/intrusion detection.

4. **Offensive Security (Red Team & Pentesting)**:
   • Vulnerability assessment with **Metasploit**, privilege escalation on Linux/Windows, TryHackMe & HackTheBox labs.

5. **Top Industry Certifications**:
   • *CompTIA Security+*, *eJPT (Junior Penetration Tester)*, *Certified Ethical Hacker (CEH)*, *OSCP (Advanced)*.`,
    suggestions: ['Open Learning Hub', 'View Security Certifications', 'Check Skill Gaps'],
    actionRoute: 'learning',
    actionLabel: 'Explore Security Courses'
  },
  {
    id: 'kb-learn-datascience-skills',
    category: 'skills',
    categoryLabel: 'Data Science & Analytics',
    title: 'Mastering Data Science, Analytics & Big Data',
    sampleQuestions: [
      'i want to learn data science',
      'data science learning path',
      'how to become data analyst',
      'skills for data scientist',
      'data analytics roadmap'
    ],
    primaryKeywords: ['data science', 'datascience', 'data analytics', 'data analyst', 'statistics', 'eda', 'pandas', 'tableau', 'powerbi', 'sql'],
    secondaryKeywords: ['python', 'numpy', 'scikit-learn', 'visualization', 'bi', 'insights', 'regression', 'clustering'],
    responseTemplate: `Here is the step-by-step **Data Science & Business Analytics Roadmap**:

1. **Data Querying & Relational Databases**:
   • **Advanced SQL**: Complex \`JOIN\`s, Window Functions (\`ROW_NUMBER\`, \`RANK\`, \`LEAD/LAG\`), CTEs, Aggregations, and Query Optimization.
   • **Database Engines**: PostgreSQL, MySQL, Google BigQuery.

2. **Data Wrangling & Statistical Analysis**:
   • **Python Core Libraries**: **Pandas** for tabular manipulation, **NumPy** for numerical matrices.
   • **Applied Statistics**: Hypothesis testing, p-values, A/B Testing mechanics, normal distributions, correlation vs causation.

3. **Exploratory Data Analysis (EDA) & Visualization**:
   • Creating interactive dashboards using **Tableau** and **Power BI**.
   • Statistical plotting with **Seaborn** and **Matplotlib**.

4. **Predictive Machine Learning**:
   • Building regression, classification, and clustering models using **Scikit-Learn**.
   • Feature engineering, handling missing values, and hyperparameter tuning (GridSearchCV/Optuna).

5. **Big Data Fundamentals**:
   • Distributed data processing with **PySpark** and **Databricks**.`,
    suggestions: ['Open Learning Hub', 'View Data Analyst Roadmap', 'Scan Resume for Data Roles'],
    actionRoute: 'learning',
    actionLabel: 'Browse Data Science Hub'
  },
  {
    id: 'kb-learn-dataengineering-skills',
    category: 'skills',
    categoryLabel: 'Data Engineering Guide',
    title: 'Mastering Data Engineering, ETL Pipelines & Lakehouse Architecture',
    sampleQuestions: [
      'i want to learn data engineering',
      'data engineer roadmap',
      'how to build etl pipelines',
      'skills needed for big data engineer',
      'airflow spark kafka learning path'
    ],
    primaryKeywords: ['data engineering', 'data engineer', 'dataengineering', 'etl', 'elt', 'airflow', 'spark', 'kafka', 'snowflake', 'data lake'],
    secondaryKeywords: ['pyspark', 'dbt', 'redshift', 'bigquery', 'streaming', 'lakehouse', 'databricks'],
    responseTemplate: `Here is the modern **Data Engineering & Lakehouse Roadmap**:

1. **Programming & Advanced SQL**:
   • Python (data pipelines, OOP, API ingestion), Scala/Java fundamentals, Performance SQL tuning.

2. **Distributed Data Processing**:
   • **Apache Spark / PySpark**: DataFrames, RDDs, Catalyst Optimizer, distributed partitioning.
   • **Cloud Data Warehouses**: **Snowflake**, **Google BigQuery**, **AWS Redshift**.

3. **Orchestration & Transformation**:
   • **Workflow Scheduling**: Directed Acyclic Graphs (DAGs) with **Apache Airflow** and **Prefect**.
   • **Data Transformation**: Modular modeling, automated testing, and CI/CD with **dbt (data build tool)**.

4. **Real-time Event Streaming**:
   • Event-driven ingestion using **Apache Kafka**, **Confluent Cloud**, and **Spark Streaming**.

5. **Data Lakehouse Architecture**:
   • Open storage formats: **Delta Lake**, **Apache Iceberg**, Parquet columnar storage.`,
    suggestions: ['View Career Roadmaps', 'Open Learning Hub', 'Bridge Cloud Gaps'],
    actionRoute: 'learning',
    actionLabel: 'Explore Data Engineering'
  },
  {
    id: 'kb-learn-mobile-skills',
    category: 'skills',
    categoryLabel: 'Mobile App Development',
    title: 'Mastering Mobile App Development (Flutter, React Native, Android & iOS)',
    sampleQuestions: [
      'i want to learn mobile app development',
      'how to learn flutter',
      'react native vs flutter roadmap',
      'skills for android developer',
      'ios development swift learning path'
    ],
    primaryKeywords: ['mobile', 'app development', 'flutter', 'react native', 'android', 'ios', 'kotlin', 'swift', 'dart', 'cross-platform'],
    secondaryKeywords: ['jetpack compose', 'swiftui', 'bloc', 'riverpod', 'redux', 'mobile engineer'],
    responseTemplate: `Here is the comprehensive **Mobile App Engineering Roadmap**:

1. **Cross-Platform Frameworks (High Industry Demand)**:
   • **Flutter & Dart**: Widget tree architecture, state management (**Riverpod**, **BLoC**), custom animations, Platform Channels.
   • **React Native & TypeScript**: Native components, Expo ecosystem, Zustand/Redux Toolkit, React Navigation.

2. **Native Mobile Development**:
   • **Android**: Modern **Kotlin**, **Jetpack Compose** declarative UI, Coroutines & Flow, MVVM architecture, Room DB.
   • **iOS**: **Swift 6**, **SwiftUI**, Combine framework, CoreData / SwiftData, Xcode tooling.

3. **Backend & Cloud Integration**:
   • REST & GraphQL API consumption, Firebase (Auth, Firestore, Cloud Messaging), Supabase integration.

4. **Mobile Device Capabilities**:
   • Push Notifications (FCM/APNS), Geolocation & Background Services, Camera & Biometric Authentication.

5. **Release & App Store Optimization**:
   • Automated CI/CD builds with **Fastlane**, publishing to Google Play Store and Apple App Store.`,
    suggestions: ['Explore Mobile Roles', 'Open Learning Hub', 'View Career Paths'],
    actionRoute: 'learning',
    actionLabel: 'Browse Mobile Courses'
  },
  {
    id: 'kb-learn-backend-systems-skills',
    category: 'skills',
    categoryLabel: 'Backend & Distributed Systems',
    title: 'Mastering Backend Engineering & High-Concurrency Systems',
    sampleQuestions: [
      'i want to learn backend development',
      'backend engineer roadmap',
      'how to build scalable microservices',
      'golang vs nodejs backend',
      'system design and distributed systems'
    ],
    primaryKeywords: ['backend', 'systems engineering', 'golang', 'go', 'node', 'fastapi', 'microservices', 'distributed systems', 'redis', 'spring boot', 'concurrency'],
    secondaryKeywords: ['grpc', 'rest api', 'postgresql', 'caching', 'rate limiting', 'kafka', 'database architecture'],
    responseTemplate: `Here is the industry-grade **Backend & Distributed Systems Engineering Roadmap**:

1. **High-Performance Languages**:
   • **Go (Golang)**: Goroutines, Channels, Mutexes, standard \`net/http\` performance.
   • **Python (FastAPI / Asyncio)**: Asynchronous event loops, Pydantic schemas, dependency injection.
   • **Node.js / TypeScript**: Event-driven I/O, NestJS framework, Express.js.
   • **Java / Spring Boot**: Enterprise microservices, Spring Security, JPA/Hibernate.

2. **Database Architecture & High-Scale Caching**:
   • **PostgreSQL**: Indexing (B-Tree, GIN, BRIN), Query execution plans (\`EXPLAIN ANALYZE\`), ACID transactions, partitioning.
   • **Redis**: In-memory caching, Distributed locks, Token bucket rate limiters, Session stores.

3. **Inter-Service Communication**:
   • High-throughput **gRPC & Protocol Buffers**, Asynchronous event queues with **Kafka / RabbitMQ**, WebSockets.

4. **System Design & Resilience**:
   • Load balancing algorithms, Circuit Breakers, Database replication & sharding, Idempotency patterns.`,
    suggestions: ['View Full-Stack Roadmap', 'Explore Internships', 'Practice System Design'],
    actionRoute: 'career-paths',
    actionLabel: 'View Backend Roadmap'
  },
  {
    id: 'kb-learn-frontend-skills',
    category: 'skills',
    categoryLabel: 'Frontend Engineering',
    title: 'Mastering Modern Frontend Engineering & Web Architecture',
    sampleQuestions: [
      'i want to learn frontend development',
      'frontend developer roadmap 2026',
      'how to become react developer',
      'skills for frontend engineer',
      'nextjs typescript learning path'
    ],
    primaryKeywords: ['frontend', 'react', 'typescript', 'nextjs', 'css', 'tailwind', 'javascript', 'web performance', 'ui architecture'],
    secondaryKeywords: ['zustand', 'tanstack query', 'responsive', 'accessibility', 'core web vitals', 'vite'],
    responseTemplate: `Here is the modern **Frontend Engineering & Web Architecture Roadmap**:

1. **JavaScript & TypeScript Deep Dive**:
   • Modern ECMAScript (ES2024+), Prototypes, Event Loop & Microtasks, TypeScript Generics & Type Narrowing.

2. **Modern UI Frameworks**:
   • **React 19 & Next.js App Router**: Server Components (RSC), Suspense streaming, Server Actions, Custom Hooks.
   • **Styling Systems**: Tailwind CSS, CSS Modules, Design Tokens, responsive glassmorphism and micro-animations.

3. **State & Network Management**:
   • Client State: **Zustand** or **Redux Toolkit**.
   • Server State & Cache: **TanStack Query (React Query)** for caching, deduplication, and optimistic updates.

4. **Web Performance & Core Web Vitals**:
   • Optimizing LCP (Largest Contentful Paint), INP (Interaction to Next Paint), Code-splitting, dynamic imports, Image optimization.

5. **Testing & Tooling**:
   • **Vitest**, **React Testing Library**, **Playwright** for E2E testing, Vite build toolchain.`,
    suggestions: ['View React Interview Prep', 'Explore Open Frontend Roles', 'Learning Hub'],
    actionRoute: 'learning',
    actionLabel: 'Browse Frontend Courses'
  },
  {
    id: 'kb-learn-embedded-iot-skills',
    category: 'skills',
    categoryLabel: 'Embedded Systems & IoT',
    title: 'Mastering Embedded Systems, IoT & Robotics',
    sampleQuestions: [
      'i want to learn embedded systems',
      'embedded systems learning path',
      'how to learn iot and robotics',
      'skills for firmware engineer',
      'microcontroller and rtos roadmap'
    ],
    primaryKeywords: ['embedded', 'iot', 'robotics', 'firmware', 'microcontroller', 'arduino', 'esp32', 'stm32', 'rtos', 'c++', 'embedded c'],
    secondaryKeywords: ['freertos', 'uart', 'i2c', 'spi', 'can bus', 'sensors', 'ros', 'hardware'],
    responseTemplate: `Here is the comprehensive **Embedded Systems, IoT & Firmware Engineering Roadmap**:

1. **Low-Level Programming & Architecture**:
   • **Embedded C & Modern C++**: Memory pointers, bitwise manipulation, memory-mapped registers, volatile qualifiers.
   • **Computer Architecture**: ARM Cortex-M architecture, interrupts (ISR), timers, direct memory access (DMA).

2. **Microcontroller Platforms & Toolchains**:
   • **STM32 (ARM Cortex)** with STM32CubeIDE / HAL, **ESP32** with ESP-IDF (Wi-Fi & Bluetooth BLE).
   • Hardware Communication Protocols: **UART, SPI, I2C, CAN Bus, Modbus**.

3. **Real-Time Operating Systems (RTOS)**:
   • **FreeRTOS**: Tasks, Queues, Semaphores, Mutexes, Task Scheduling, Priority Inversion mitigation.

4. **IoT Cloud Protocols & Wireless**:
   • **MQTT**, CoAP, HTTP REST for IoT gateways, AWS IoT Core / Azure IoT Hub.

5. **Robotics & Simulation**:
   • **ROS 2 (Robot Operating System)**, Gazebo simulation, kinematics, sensor fusion (IMU, LIDAR).`,
    suggestions: ['View ISRO Placement Details', 'Open Learning Hub', 'Bridge Skill Gaps'],
    actionRoute: 'learning',
    actionLabel: 'Explore Embedded Tracks'
  },
  {
    id: 'kb-learn-blockchain-web3-skills',
    category: 'skills',
    categoryLabel: 'Blockchain & Web3',
    title: 'Mastering Blockchain, Web3 & Smart Contract Development',
    sampleQuestions: [
      'i want to learn blockchain development',
      'how to become web3 developer',
      'solidity and smart contracts roadmap',
      'skills needed for blockchain engineer',
      'ethereum dapps learning path'
    ],
    primaryKeywords: ['blockchain', 'web3', 'solidity', 'smart contracts', 'ethereum', 'evm', 'dapp', 'crypto', 'defi', 'foundry', 'hardhat'],
    secondaryKeywords: ['ethers js', 'viem', 'ipfs', 'security audit', 'reentrancy', 'gas optimization'],
    responseTemplate: `Here is the structured **Blockchain & Web3 Smart Contract Roadmap**:

1. **Cryptographic & Distributed Foundations**:
   • Peer-to-peer networking, Public/Private key cryptography (ECDSA), Hashing (Keccak-256), Merkle Trees, Proof of Stake consensus.

2. **Smart Contract Development**:
   • **Solidity & EVM Internals**: State variables, memory vs calldata vs storage, inheritance, interfaces, ERC-20, ERC-721 (NFTs), ERC-1155 standards.
   • **Development Frameworks**: **Foundry** (fast testing in Solidity) and **Hardhat**.

3. **Decentralized Application (dApp) Full-Stack**:
   • Connecting smart contracts to React/Next.js using **Wagmi**, **Viem**, and **Ethers.js**.
   • Wallet integration with RainbowKit, MetaMask, and WalletConnect.

4. **Smart Contract Security & Auditing**:
   • Preventing Reentrancy attacks, integer overflows, frontrunning, flash loan exploits, and static analysis with Slither.
   • Gas optimization techniques.`,
    suggestions: ['View Career Roadmaps', 'Open Learning Hub', 'Browse Tech Roles'],
    actionRoute: 'learning',
    actionLabel: 'Explore Web3 Courses'
  },
  {
    id: 'kb-learn-uiux-design-skills',
    category: 'skills',
    categoryLabel: 'UI/UX & Product Design',
    title: 'Mastering UI/UX Design, Product Design & Figma Systems',
    sampleQuestions: [
      'i want to learn ui ux design',
      'how to become product designer',
      'figma learning roadmap',
      'skills for ui ux designer',
      'ui ux portfolio guide'
    ],
    primaryKeywords: ['ui', 'ux', 'uiux', 'ui/ux', 'design', 'figma', 'product design', 'wireframing', 'user research', 'prototyping'],
    secondaryKeywords: ['design systems', 'auto layout', 'components', 'heuristics', 'usability', 'micro interactions'],
    responseTemplate: `Here is the comprehensive **UI/UX & Product Design Roadmap**:

1. **UX Foundations & User Research**:
   • **User Research**: Conducting user interviews, creating User Personas, Empathy Maps, and User Journey Maps.
   • **Information Architecture (IA)**: User flows, card sorting, sitemaps.
   • **UX Heuristics**: Nielsen Norman 10 Usability Heuristics, Gestalt principles, Fitts's Law.

2. **Figma Industry Mastery**:
   • **Advanced Layout**: Auto-layout 5.0, constraints, responsive grids.
   • **Design Systems**: Reusable components, Component Variants, Nested Properties, Variables (Color, Typography, Spacing modes for Dark/Light themes).
   • **Interactive Prototyping**: Smart Animate, micro-interactions, interactive component states.

3. **UI Visual Polish**:
   • Typography hierarchy, Color theory, accessible contrast ratios (WCAG 2.1 AA/AAA), spacing 8pt grid systems.

4. **Design-to-Development Handoff**:
   • Design specs documentation, Dev Mode in Figma, exporting SVG/tokens, syncing with frontend design systems.`,
    suggestions: ['View Design Portfolio Tips', 'Open Learning Hub', 'Check Skills Profile'],
    actionRoute: 'skills',
    actionLabel: 'View Design Competencies'
  },
  {
    id: 'kb-learn-qa-automation-skills',
    category: 'skills',
    categoryLabel: 'QA & Test Automation',
    title: 'Mastering QA Engineering, Test Automation & Performance Testing',
    sampleQuestions: [
      'i want to learn software testing and qa',
      'qa automation engineer roadmap',
      'how to learn playwright and selenium',
      'skills for sdet software engineer in test',
      'api and performance testing roadmap'
    ],
    primaryKeywords: ['qa', 'testing', 'software testing', 'automation', 'test automation', 'sdet', 'playwright', 'selenium', 'cypress', 'api testing'],
    secondaryKeywords: ['postman', 'jmeter', 'k6', 'jest', 'vitest', 'unit testing', 'e2e testing'],
    responseTemplate: `Here is the structured **QA & Test Automation (SDET) Roadmap**:

1. **Core Testing Fundamentals**:
   • Testing Types: Unit, Integration, System, Regression, Smoke, Exploratory Testing.
   • Test Case Design, Defect Lifecycle, Agile Sprint QA methodology.

2. **Modern Web UI Automation**:
   • **Playwright & TypeScript**: Multi-tab execution, auto-waiting, parallel test workers, trace viewer debugging.
   • **Cypress** and **Selenium WebDriver** framework design (Page Object Model - POM).

3. **API & Backend Testing**:
   • Automated API testing with **Postman Collections & Newman**, Python \`requests\` + \`pytest\`, or Java **RestAssured**.
   • Validating JSON schemas, status codes, response payloads, and auth tokens.

4. **Performance & Load Testing**:
   • Simulating high concurrency with **k6** and **Apache JMeter**, analyzing throughput, p95/p99 response latency.

5. **CI/CD Test Pipelines**:
   • Integrating automated test suites into GitHub Actions, generating HTML test reports.`,
    suggestions: ['Open Learning Hub', 'Explore QA Career Path', 'Bridge Skill Gaps'],
    actionRoute: 'learning',
    actionLabel: 'Explore QA Tracks'
  },
  {
    id: 'kb-learn-gamedev-skills',
    category: 'skills',
    categoryLabel: 'Game Development & 3D',
    title: 'Mastering Game Development & 3D Interactive Graphics',
    sampleQuestions: [
      'i want to learn game development',
      'how to become game developer',
      'unity vs unreal engine roadmap',
      'skills for game programmer',
      '3d graphics and threejs learning path'
    ],
    primaryKeywords: ['game dev', 'game development', 'gamedev', 'unity', 'unreal engine', 'c#', 'c++', 'shaders', '3d graphics', 'threejs'],
    secondaryKeywords: ['blender', 'physics', 'gameplay', 'game engine', 'quaternions', 'opengl'],
    responseTemplate: `Here is the complete **Game Development & 3D Interactive Graphics Roadmap**:

1. **Game Engines & Core Languages**:
   • **Unity (C#)**: GameObject lifecycle, Prefabs, ScriptableObjects, Physics (Rigidbody, Colliders), UI Toolkit.
   • **Unreal Engine 5 (C++ & Blueprints)**: Actors, Components, Nanite virtualized geometry, Lumen dynamic lighting.

2. **3D Mathematics & Computer Graphics**:
   • Vectors (Dot/Cross products), Matrices, Quaternions for rotational math, Coordinate transformations.
   • Shader programming: Shader Graph, HLSL/GLSL, lighting models (PBR - Physically Based Rendering).

3. **Gameplay Mechanics & AI**:
   • Finite State Machines (FSM), Behavior Trees for enemy AI, Pathfinding (A* / NavMesh).

4. **Web 3D & Interactive Experiences**:
   • Building in-browser 3D experiences with **Three.js**, **React Three Fiber (R3F)**, and WebGL.

5. **Asset Pipelines & Optimization**:
   • Asset creation with **Blender**, LOD (Level of Detail) optimization, draw-call batching, profiler optimization.`,
    suggestions: ['View Career Roadmaps', 'Open Learning Hub', 'Check Skills Profile'],
    actionRoute: 'learning',
    actionLabel: 'Explore Game Dev Tracks'
  },

  // ==========================================
  // 4. AICTE & GOVERNMENT SCHEMES
  // ==========================================
  {
    id: 'kb-scheme-aicte-policy',
    category: 'schemes',
    categoryLabel: 'AICTE Guidelines',
    title: 'AICTE Mandatory Internship Policy & Academic Credits',
    sampleQuestions: [
      'aicte internship guidelines',
      'is internship mandatory in btech',
      'how many credits for internship in aicte',
      'nep 2020 internship rules'
    ],
    primaryKeywords: ['aicte', 'mandatory', 'credits', 'nep', 'policy', 'guidelines', 'btech', 'degree'],
    secondaryKeywords: ['scheme', 'academic', 'college', 'semester', 'hours', 'ugc'],
    responseTemplate: `Under the **AICTE Internship Policy (aligned with NEP 2020)**:

• **Mandatory Requirement**: Every B.Tech / BE undergraduate must complete a minimum of **14 to 20 Academic Credits** of industry internships (approx. 400–600 hours).
• **Timing**: Can be completed across summer breaks (2nd/3rd year) or as a full semester in final year.
• **Credit Transfer**: All internships completed and verified on YuvaSarthi automatically generate digital credit transcripts recognized by AICTE-approved institutions and Academic Bank of Credits (ABC ID).
• **Verification**: Includes QR-verifiable completion certificate, logbook tracking, and mentor assessment report.`,
    suggestions: ['Check Allocation Verification', 'View Learning Credits', 'Profile Certifications'],
    actionRoute: 'allocation',
    actionLabel: 'View Verified Credentials'
  },
  {
    id: 'kb-scheme-pmkvy-swayam',
    category: 'schemes',
    categoryLabel: 'Government Learning Hub',
    title: 'Government Subsidized Swayam & NPTEL Course Credits',
    sampleQuestions: [
      'are courses on yuvasarthi free',
      'swayam nptel course credit transfer',
      'government free certifications',
      'pmkvy skill subsidy'
    ],
    primaryKeywords: ['swayam', 'nptel', 'free', 'subsidy', 'government', 'course', 'subsidized', 'pmkvy'],
    secondaryKeywords: ['iisc', 'iit', 'certifications', 'credits', 'learning'],
    responseTemplate: `Yes! Through the **Ministry of Education & Swayam Integration**:

1. **100% Free Learning Modules**: All AICTE-curated foundational and advanced courses on YuvaSarthi Learning Hub are free for verified students.
2. **IIT & IISc Certifications**: Courses led by faculty from *IISc Bengaluru, IIT Madras, and IIT Bombay* carry official NPTEL exam credits.
3. **Credit Portability**: Course progress and passing grades directly transfer to your college semester grade sheet via National Credit Framework (NCrF).
4. **Top Recommended Active Module**: *Distributed Systems & Cloud-Native Architecture (IIT Bombay - 4 Credits)*.`,
    suggestions: ['Open Learning Hub', 'Enroll in Free Modules', 'View Skill Gaps'],
    actionRoute: 'learning',
    actionLabel: 'Open Learning Hub'
  },
  {
    id: 'kb-scheme-stipend-disbursement',
    category: 'schemes',
    categoryLabel: 'Stipend & DBT Rules',
    title: 'Stipend Protection & Direct Benefit Transfer (DBT)',
    sampleQuestions: [
      'how is stipend paid',
      'is stipend guaranteed by government',
      'when do i receive my internship money',
      'dbt stipend payment process'
    ],
    primaryKeywords: ['stipend', 'payment', 'dbt', 'direct', 'disbursement', 'bank', 'guaranteed'],
    secondaryKeywords: ['salary', 'money', 'transfer', 'account', 'monthly', 'delay'],
    responseTemplate: `On YuvaSarthi, student stipend rights are strictly enforced under **AICTE National Apprenticeship & Internship Fair Regulations**:

• **Guaranteed Timely Pay**: Employers must disburse the agreed monthly stipend directly to your bank account or through Direct Benefit Transfer (DBT) by the 7th of every calendar month.
• **Zero Unpaid Exploitation**: Purely unpaid engineering internships from commercial enterprises are restricted on YuvaSarthi.
• **Escrow / Verification**: For government and public research allocations (e.g. ISRO SAC), stipends are processed through the official PFMS / DBT portal.
• **Grievance Redressal**: Any delayed payment can be flagged immediately via the Feedback & Support Desk for 48-hour escalation.`,
    suggestions: ['View Allotted Stipend', 'Check Feedback & Support', 'Browse Internships'],
    actionRoute: 'feedback',
    actionLabel: 'Contact Support'
  },

  // ==========================================
  // 5. INTERVIEW PREPARATION
  // ==========================================
  {
    id: 'kb-interview-prep-technical',
    category: 'interview',
    categoryLabel: 'Technical Interview Prep',
    title: 'Technical Interview Mastery Strategy (DSA & System Design)',
    sampleQuestions: [
      'how to prepare for technical interview',
      'dsa questions for tech internships',
      'system design for freshers',
      'how to crack coding round'
    ],
    primaryKeywords: ['technical', 'interview', 'dsa', 'coding', 'prepare', 'prep', 'algorithm', 'system design'],
    secondaryKeywords: ['leetcode', 'round', 'questions', 'fresher', 'structures', 'crack'],
    responseTemplate: `Here is the battle-tested roadmap to crack **Tier-1 Technical Interviews**:

1. **Data Structures (High-Frequency Patterns)**:
   • Two Pointers & Sliding Window (*Arrays / Strings*)
   • Fast & Slow Pointers / In-place Reversal (*Linked Lists*)
   • BFS & DFS Traversals (*Binary Trees & Graphs*)
   • Top-K Elements (*Heaps & Priority Queues*)
   • Dynamic Programming: 0/1 Knapsack, Longest Common Subsequence
2. **Live Coding Best Practices**:
   • Clarify edge cases (null inputs, integer overflows, empty arrays) before typing.
   • State time and space complexity ($O(N)$ / $O(1)$) out loud.
   • Write modular, clean code with descriptive variable names.
3. **Core CS Fundamentals**: OOP concepts, DB indexing, ACID properties, HTTP/HTTPS status codes, Concurrency vs Parallelism.`,
    suggestions: ['Practice React Prep', 'Prepare HR Questions', 'View Top Matched Roles'],
    actionRoute: 'learning',
    actionLabel: 'Explore Interview Prep Courses'
  },
  {
    id: 'kb-interview-prep-hr-behavioral',
    category: 'interview',
    categoryLabel: 'Behavioral & HR Prep',
    title: 'Answering HR & Behavioral Questions with the STAR Method',
    sampleQuestions: [
      'how to answer hr questions',
      'tell me about yourself example',
      'star method interview',
      'behavioral questions for freshers'
    ],
    primaryKeywords: ['hr', 'behavioral', 'star', 'method', 'tell me about yourself', 'strengths', 'weakness'],
    secondaryKeywords: ['situation', 'task', 'action', 'result', 'questions', 'soft skills'],
    responseTemplate: `Use the **STAR Framework** (*Situation, Task, Action, Result*) for structured storytelling:

**Template for "Tell Me About Yourself"**:
1. **Present**: *"I am a final-year B.Tech CS & AI student at {college} with strong hands-on expertise in React, TypeScript, and FastAPI."*
2. **Past**: *"Recently, I engineered an AI semantic matching placement engine that handles 10,000+ candidate vectors with sub-80ms retrieval."*
3. **Future**: *"I am excited about this role because I want to contribute to scalable micro-frontends and high-availability AI systems in a high-impact team."*

💡 **Key Tip**: Keep your answer under 90 seconds and end with why this specific company excites you!`,
    suggestions: ['Draft Cover Note', 'Optimize Resume', 'Ask Another Question'],
    actionRoute: 'feedback',
    actionLabel: 'Submit Mock HR Query'
  },
  {
    id: 'kb-interview-react-prep',
    category: 'interview',
    categoryLabel: 'React & Frontend Prep',
    title: 'Top React & TypeScript Interview Questions for 2026',
    sampleQuestions: [
      'react interview questions',
      'typescript interview topics',
      'what to prepare for react developer interview',
      'frontend interview checklist'
    ],
    primaryKeywords: ['react', 'typescript', 'frontend', 'interview', 'hooks', 'virtual dom', 'state'],
    secondaryKeywords: ['useeffect', 'usecallback', 'usememo', 'redux', 'rendering', 'performance'],
    responseTemplate: `Top React 19 & TypeScript questions asked by tech recruiters:

1. **Core React Architecture**:
   • How the React Fiber reconciliation engine and Virtual DOM diffing algorithm work.
   • Differences between Client Components and React Server Components (RSC).
   • Rules of Hooks & avoiding stale closures in \`useEffect\` and \`useCallback\`.
2. **State & Performance**:
   • When to use Context API vs Zustand / Redux Toolkit.
   • Optimizing re-renders with \`useMemo\`, \`React.memo\`, and transitions (\`useTransition\`).
3. **TypeScript Advanced Types**:
   • Generics, Discriminated Unions, Utility Types (\`Pick\`, \`Omit\`, \`Partial\`, \`ReturnType\`).
   • Type Narrowing and Type Guards.`,
    suggestions: ['View Tata Digital Role', 'Check Resume Score', 'Browse Full-Stack Roadmap'],
    actionRoute: 'internships',
    actionLabel: 'Apply for React Roles'
  },

  // ==========================================
  // 6. COVER LETTERS & PROFESSIONAL OUTREACH
  // ==========================================
  {
    id: 'kb-cover-letter-tata',
    category: 'cover-letter',
    categoryLabel: 'Cover Letter Generator',
    title: 'High-Converting Cover Statement for Tata Digital',
    sampleQuestions: [
      'draft cover letter for tata digital',
      'cover note for full stack intern',
      'write application note for tata neu',
      'tata digital application cover statement'
    ],
    primaryKeywords: ['tata', 'cover', 'letter', 'draft', 'note', 'statement', 'digital'],
    secondaryKeywords: ['email', 'outreach', 'hiring', 'recruiter', 'full-stack'],
    responseTemplate: `Here is an optimized cover statement tailored for your **Tata Digital** application:

*"Dear Hiring Team at Tata Digital Labs,

I am writing to express my strong interest in the Full-Stack React & Cloud Platform Internship. As a {degree} student in {branch} at {college} with a {cgpa} CGPA, I have built production-grade web systems utilizing React 19, TypeScript, and FastAPI.

Recently, I architected a high-concurrency placement engine featuring sub-80ms semantic vector queries and automated ATS resume scoring. I am particularly impressed by Tata Neu's micro-frontend architecture and would welcome the opportunity to contribute to your scalable digital platforms.

Thank you for your time and consideration.

Warm regards,
{studentName}"*`,
    suggestions: ['Copy to Application', 'Optimize for ISRO', 'Analyze Resume Match'],
    actionRoute: 'internships',
    actionLabel: 'Apply to Tata Digital'
  },
  {
    id: 'kb-cover-letter-isro-research',
    category: 'cover-letter',
    categoryLabel: 'Research Cover Letter',
    title: 'Formal Cover Statement for ISRO / Research Labs',
    sampleQuestions: [
      'cover letter for isro internship',
      'research internship cover statement',
      'drdo isro application statement of purpose',
      'sop for government lab'
    ],
    primaryKeywords: ['isro', 'research', 'sop', 'cover', 'statement', 'purpose', 'drdo', 'space'],
    secondaryKeywords: ['satellite', 'vision', 'academic', 'scientist', 'formal'],
    responseTemplate: `Here is a formal Statement of Purpose / Cover Letter for **ISRO Space Applications Centre**:

*"To,
The Scientist-in-Charge / Head of Human Resource Development Division,
Space Applications Centre (ISRO), Bengaluru.

Subject: Application for AI Satellite Vision & Geospatial Trainee Internship (Summer/Autumn 2026)

Respected Sir/Madam,

I am writing to submit my candidature for the AI Satellite Vision Trainee program. I am currently pursuing my {degree} in {branch} at {college}, maintaining a cumulative CGPA of {cgpa}.

My academic projects focus on computer vision and deep convolutional networks. Specifically, I have engineered a Neural Vision framework achieving 94.2% validation accuracy on multi-spectral imagery using PyTorch. I am eager to apply my skills in neural segmentation and CUDA-accelerated processing to ISRO's earth observation missions.

Enclosed are my verified academic transcripts and AICTE credentials.

Yours sincerely,
{studentName}"*`,
    suggestions: ['View ISRO Allotment Letter', 'Check Allocation Status', 'Contact ISRO Mentor'],
    actionRoute: 'allocation',
    actionLabel: 'View Allocation Portal'
  },

  // ==========================================
  // 7. CERTIFICATIONS & LEARNING HUB
  // ==========================================
  {
    id: 'kb-cert-valued-tier1',
    category: 'certifications',
    categoryLabel: 'Certifications Guide',
    title: 'Top Valued Certifications for Tier-1 Tech Placements',
    sampleQuestions: [
      'which certifications are most valued for tier 1 placements',
      'best certifications for freshers',
      'are certificates useful for placements',
      'top certifications in 2026'
    ],
    primaryKeywords: ['certification', 'certifications', 'valued', 'tier-1', 'placements', 'certificate', 'credential'],
    secondaryKeywords: ['aws', 'cloud', 'coursera', 'nptel', 'google', 'worth it'],
    responseTemplate: `For campus placements and high-stipend internships, recruiters value **hands-on, proctored industry credentials**:

1. **Cloud Architecture**:
   • *AWS Certified Solutions Architect (Associate)* or *Google Cloud Associate Cloud Engineer* (Demonstrates real deployment capability).
2. **AI & Deep Learning**:
   • *DeepLearning.AI Deep Learning Specialization* (Andrew Ng / Coursera).
   • *NPTEL Deep Learning & Computer Vision by IISc Bengaluru* (Govt. & Academic credit transfer).
3. **National Competitions**:
   • *Smart India Hackathon (SIH) Finalist Credential* (Issued by MoE / AICTE).
4. **DevOps & Kubernetes**:
   • *Certified Kubernetes Application Developer (CKAD)*.

💡 **Rule of Thumb**: 1 certified project with a live URL is worth 10 passive completion badges!`,
    suggestions: ['Open Learning Hub', 'View Target Role Gaps', 'Check Career Paths'],
    actionRoute: 'learning',
    actionLabel: 'Browse Certifications'
  },
  {
    id: 'kb-cert-aws-cloud',
    category: 'certifications',
    categoryLabel: 'AWS Cloud Certification',
    title: 'How to Prepare for AWS Cloud Certifications for Free',
    sampleQuestions: [
      'how to study for aws certified cloud practitioner',
      'aws solutions architect associate preparation',
      'free aws training vouchers',
      'cloud practitioner exam tips'
    ],
    primaryKeywords: ['aws', 'cloud', 'practitioner', 'solutions', 'architect', 'amazon', 'exam'],
    secondaryKeywords: ['voucher', 'free', 'ec2', 's3', 'lambda', 'study'],
    responseTemplate: `Step-by-step guide for **AWS Certified Cloud Practitioner & Solutions Architect**:

1. **Free Official Content**: Complete *AWS Skill Builder Cloud Essentials Learning Plan* (no cost).
2. **Core Services to Master**:
   • Compute: *EC2, Lambda, ECS, Fargate*
   • Storage: *S3, EBS, EFS*
   • Database: *RDS, DynamoDB, Aurora*
   • Networking & Security: *VPC, Subnets, Security Groups, IAM Roles*
3. **Practice Tests**: Solve exam simulations focusing on architectural Well-Architected Framework (Cost, Reliability, Security).
4. **Student Discount**: Use your college \`.edu.in\` email on *AWS Educate* for free cloud credits and 50% exam vouchers!`,
    suggestions: ['Enroll in Cloud Course', 'View DevOps Roadmap', 'Analyze Resume ATS'],
    actionRoute: 'learning',
    actionLabel: 'Start Cloud Learning'
  },

  // ==========================================
  // 8. ALLOCATIONS & JOINING PROCESS
  // ==========================================
  {
    id: 'kb-allocation-isro-offer',
    category: 'allocation',
    categoryLabel: 'Internship Allocation',
    title: 'Your Official ISRO Satellite Trainee Allocation',
    sampleQuestions: [
      'tell me about my allocation',
      'where am i allocated',
      'isro allocation result details',
      'what is my allotted internship',
      'who is my allocated mentor'
    ],
    primaryKeywords: ['allocation', 'allocated', 'allotted', 'isro', 'offer', 'result', 'letter', 'mentor'],
    secondaryKeywords: ['joining', 'reporting', 'stipend', 'verification', 'confirmed'],
    responseTemplate: `Congratulations! You have been officially allocated through YuvaSarthi's National AI Matching Fair:

• **Allotted Position**: **AI Satellite Vision Trainee**
• **Organization**: **ISRO Space Applications Centre (SAC)**
• **Location**: Bengaluru / Ahmedabad Space Centre
• **Monthly Stipend**: **₹35,000 / month** (Govt. Research Scale)
• **Reporting Date**: **July 15, 2026**
• **Assigned Mentor**: **Dr. Vikramaditya Sen** (*Chief Scientist, Optical Payload Division*)
• **Status**: **Verified & Confirmed by AICTE & Ministry of Education**

You can view and download your official stamped Allocation Letter from the Allocation Result portal!`,
    suggestions: ['View Official Allocation Letter', 'Download PDF', 'Contact Mentor'],
    actionRoute: 'allocation',
    actionLabel: 'Open Allocation Result'
  },
  {
    id: 'kb-allocation-acceptance-steps',
    category: 'allocation',
    categoryLabel: 'Offer Acceptance Steps',
    title: 'Next Steps After Receiving Internship Allocation',
    sampleQuestions: [
      'what to do after allocation',
      'how to accept offer letter',
      'documents required for internship joining',
      'joining instructions for allocated role'
    ],
    primaryKeywords: ['accept', 'joining', 'documents', 'offer', 'next steps', 'instructions', 'reporting'],
    secondaryKeywords: ['verification', 'bonafide', 'noc', 'college', 'onboarding'],
    responseTemplate: `Follow these **3 mandatory steps** to finalize your onboarding:

1. **Download Official Allotment Letter**: Access the letter from your Allocation Result tab with your unique Allocation ID (\`YS-AL-2026-884\`).
2. **Submit College NOC**: Obtain a signed No-Objection Certificate (NOC) from your college T&P cell (Training & Placement).
3. **Upload Identity Verification**: Ensure your Government Aadhaar / DigiLocker and College ID are linked on your profile.
4. **Mentor Introduction**: Send a formal acknowledgment email to your assigned mentor before the reporting date.`,
    suggestions: ['Go to Allocation Result', 'Check Student Profile', 'Draft Mentor Email'],
    actionRoute: 'allocation',
    actionLabel: 'View Joining Documents'
  },

  // ==========================================
  // 9. PROJECTS & PORTFOLIO BUILDING
  // ==========================================
  {
    id: 'kb-portfolio-github-standards',
    category: 'portfolio',
    categoryLabel: 'Portfolio Building',
    title: 'How to Build a Standout GitHub Portfolio for Placements',
    sampleQuestions: [
      'how to improve github profile',
      'what projects to put on resume',
      'how to write github readme',
      'portfolio projects for fresher developers'
    ],
    primaryKeywords: ['github', 'portfolio', 'projects', 'readme', 'repo', 'repositories', 'fresher'],
    secondaryKeywords: ['showcase', 'stars', 'demo', 'deployment', 'standout'],
    responseTemplate: `To make your GitHub portfolio stand out to recruiters:

1. **Pin 3-4 Flagship Projects**: Avoid 20 small tutorials (no basic ToDo apps or calculators). Focus on complex, end-to-end full-stack systems.
2. **Every Repo Needs a Live Link**: Deploy frontend on Vercel/Netlify and backend on Render/Railway.
3. **Write a Professional README.md**:
   • 🖼️ Banner & Architecture Diagram (Mermaid or Figma).
   • ⚡ Live Demo Link & Test Credentials.
   • 🛠️ Tech Stack Badges & API Endpoints Documentation.
   • 🚀 1-line setup instructions with Docker (\`docker-compose up\`).
4. **Clean Git Commit History**: Write conventional commits (\`feat: add auth\`, \`fix: resolve memory leak\`).`,
    suggestions: ['Analyze My Resume Projects', 'View Full-Stack Roadmap', 'Check Career Paths'],
    actionRoute: 'skills',
    actionLabel: 'View My Project Skills'
  },
  {
    id: 'kb-portfolio-standout-ideas',
    category: 'portfolio',
    categoryLabel: 'Project Ideas 2026',
    title: 'High-Impact Project Ideas for AI & Full-Stack Engineers',
    sampleQuestions: [
      'project ideas for ai engineer',
      'unique full stack project ideas',
      'final year major project ideas',
      'projects that impress recruiters'
    ],
    primaryKeywords: ['ideas', 'project ideas', 'unique', 'major project', 'impress', 'final year'],
    secondaryKeywords: ['rag', 'vision', 'distributed', 'fastapi', 'microservices'],
    responseTemplate: `High-value project concepts that immediately grab recruiter attention in 2026:

1. **AI Multimodal Research Assistant (RAG Engine)**:
   • PDF parser, semantic embeddings with pgvector/ChromaDB, multi-turn LLM citations, and sub-100ms response streaming.
2. **Distributed Real-time Collaborative Canvas**:
   • React, WebSockets, CRDTs (Yjs) for conflict-free multi-user editing, Redis Pub/Sub backend.
3. **Automated MLOps Pipeline & Model Monitor**:
   • Automated data drift detection, ONNX quantization, model telemetry dashboard with Grafana & Prometheus.
4. **Zero-Knowledge Credential Verifier**:
   • Verifiable decentralized identity and academic transcripts for university admissions.`,
    suggestions: ['View My Current Projects', 'Bridge Skill Gaps', 'Ask Another Question'],
    actionRoute: 'skills',
    actionLabel: 'Check My Skills Profile'
  },

  // ==========================================
  // 10. STIPENDS, SALARIES & CAREER EXPECTATIONS
  // ==========================================
  {
    id: 'kb-stipend-benchmarks',
    category: 'stipend',
    categoryLabel: 'Stipends & Salary Trends',
    title: '2026 Internship Stipend Benchmarks Across Tech Sectors',
    sampleQuestions: [
      'what is average internship stipend in india',
      'highest paying internships for freshers',
      'how much stipend do ai interns get',
      'stipend expectations 2026'
    ],
    primaryKeywords: ['average', 'stipend', 'salary', 'highest', 'paying', 'ctc', 'lpa', 'benchmarks'],
    secondaryKeywords: ['market', 'trends', 'freshers', 'tier-1', 'monthly', 'compensation'],
    responseTemplate: `Current **2026 Monthly Internship Stipend Benchmarks** across India:

• **Tier-1 Global Product Companies** (*Microsoft, Google, Uber*): **₹80,000 – ₹1,25,000 / mo**
• **Top Indian Tech Enterprises** (*Tata Digital, Zomato, Swiggy*): **₹40,000 – ₹60,000 / mo**
• **Govt. & National Research Labs** (*ISRO, DRDO, CSIR*): **₹25,000 – ₹40,000 / mo** (+ allowances)
• **Funded AI & Web3 Startups**: **₹30,000 – ₹55,000 / mo**

💼 **PPO Conversion**: Standard Full-Time conversion packages for high performers range between **₹12 LPA and ₹32 LPA CTC**.`,
    suggestions: ['Explore High-Stipend Roles', 'Check My ISRO Allotment', 'View My Matches'],
    actionRoute: 'internships',
    actionLabel: 'Explore Internships'
  },
  {
    id: 'kb-stipend-ppo-conversion',
    category: 'stipend',
    categoryLabel: 'PPO Conversion Guide',
    title: 'How to Convert an Internship into a Full-Time Job (PPO)',
    sampleQuestions: [
      'how to get ppo from internship',
      'how to convert internship to full time job',
      'ppo conversion tips',
      'pre placement offer guide'
    ],
    primaryKeywords: ['ppo', 'convert', 'full time', 'conversion', 'pre placement offer', 'job'],
    secondaryKeywords: ['performance', 'manager', 'return offer', 'tips', 'strategy'],
    responseTemplate: `Strategies to achieve a **Pre-Placement Offer (PPO)** during your internship:

1. **Deliver Beyond Assigned Scope**: Ship your sprint tasks ahead of schedule and volunteer for performance optimizations or documentation.
2. **Weekly 1-on-1 Sync with Manager**: Ask: *"What does stellar performance look like for this milestone, and what can I improve?"*
3. **Document Your Impact Log**: Maintain a running document of bugs fixed, features shipped, PRs reviewed, and metrics improved.
4. **Cross-Team Collaboration**: Interact with senior engineers, participate in tech talks, and showcase strong communication.
5. **Clear Final Presentation**: Deliver a polished demo of your deliverables to directors and team leads.`,
    suggestions: ['Prepare for Technical Roles', 'View Career Roadmaps', 'Ask Another Question'],
    actionRoute: 'career-paths',
    actionLabel: 'Explore Career Roadmaps'
  },

  // ==========================================
  // 11. PLATFORM NAVIGATION & SUPPORT
  // ==========================================
  {
    id: 'kb-general-profile-edit',
    category: 'general',
    categoryLabel: 'Platform Help',
    title: 'How to Update Your Academic & Skills Profile',
    sampleQuestions: [
      'how to edit profile',
      'how to add new skills to profile',
      'change my cgpa and college details',
      'update my target role'
    ],
    primaryKeywords: ['profile', 'edit', 'update', 'cgpa', 'college', 'change', 'bio', 'details'],
    secondaryKeywords: ['settings', 'account', 'skills', 'projects', 'save'],
    responseTemplate: `You can update your personal information and verified portfolio at any time:

1. Navigate to **My Profile** from the left navigation bar.
2. Click **Edit Profile** to update your contact details, bio, and target role (*currently: {targetRole}*).
3. Under the **Skills & Competencies** section, add new technical badges or update proficiency levels.
4. Upload your updated resume to recalculate your live ATS Readiness Score instantly!`,
    suggestions: ['Go to My Profile', 'Scan Resume', 'View Dashboard'],
    actionRoute: 'profile',
    actionLabel: 'Edit My Profile'
  },
  {
    id: 'kb-general-role-switch',
    category: 'general',
    categoryLabel: 'Platform Help',
    title: 'Switching Between Student and Employer Recruiter Portal',
    sampleQuestions: [
      'how to switch to employer mode',
      'how to change role to recruiter',
      'can i post internships as company',
      'switch user mode'
    ],
    primaryKeywords: ['switch', 'role', 'employer', 'recruiter', 'mode', 'student', 'company'],
    secondaryKeywords: ['toggle', 'portal', 'post internships', 'hiring'],
    responseTemplate: `YuvaSarthi provides dual portals for candidates and corporate recruiters:

• **To Switch Roles**: Click the **Switch to Employer / Student** button located in the top navigation bar or the role toggle inside the left sidebar.
• **Employer Features**: Post new internships, review applicant pipelines with AI matching scores, schedule interviews, and issue allotment offers.
• **Student Features**: Discover internships, analyze ATS resumes, bridge skill gaps, and access official government allocation results.`,
    suggestions: ['Go to Student Dashboard', 'Explore Internships', 'Feedback & Support'],
    actionRoute: 'dashboard',
    actionLabel: 'Go to Dashboard'
  },
  {
    id: 'kb-general-feedback-support',
    category: 'general',
    categoryLabel: 'Support & Helpdesk',
    title: 'How to Submit Grievances, Inquiries, or Platform Feedback',
    sampleQuestions: [
      'how to report issue with internship',
      'submit a complaint or grievance',
      'contact support helpdesk',
      'report a bug or feature request'
    ],
    primaryKeywords: ['feedback', 'support', 'grievance', 'complaint', 'helpdesk', 'report', 'bug', 'issue'],
    secondaryKeywords: ['contact', 'help', 'ticket', 'dispute', 'stipend delay'],
    responseTemplate: `Need help or want to report an issue?

1. Visit the **Feedback & Support Desk** from the sidebar menu.
2. Select your category:
   • *Internship Grievance* (stipend delays, mentor disputes)
   • *Allocation Help* (offer letter verification)
   • *Platform Bug / Feature Suggestion*
3. Provide your details and submit. Official AICTE grievance tickets are reviewed within **24–48 business hours**.`,
    suggestions: ['Open Feedback Desk', 'View Allocation Status', 'Ask Another Question'],
    actionRoute: 'feedback',
    actionLabel: 'Open Support Desk'
  },
  {
    id: 'kb-general-about-yuvasarthi',
    category: 'general',
    categoryLabel: 'About YuvaSarthi',
    title: 'About YuvaSarthi AI National Career Portal',
    sampleQuestions: [
      'what is yuvasarthi',
      'who created yuvasarthi',
      'how does yuvasarthi match students with jobs',
      'what is this website for'
    ],
    primaryKeywords: ['about', 'yuvasarthi', 'what is', 'platform', 'national', 'portal', 'features'],
    secondaryKeywords: ['mission', 'sih', 'aicte', 'smart india hackathon', 'matching engine'],
    responseTemplate: `**YuvaSarthi AI** is India's next-generation National AI Career & Internship Allocation Platform:

• 🎯 **AI Resume & ATS Optimization**: Deep semantic scoring and keyword audit.
• ⚡ **Predictive Skill Gap Intelligence**: Bridges candidate competencies to Tier-1 job requirements.
• 🚀 **1-Click AI Verified Applications**: Connects candidates to national enterprises (*Tata, Microsoft, ISRO*).
• 🏛️ **AICTE & NEP 2020 Compliance**: Automated digital credit transfers and QR-verifiable allocation credentials.

Empowering India's youth with transparent, merit-driven career pathways!`,
    suggestions: ['Explore Internships', 'Analyze My Resume', 'View My Dashboard'],
    actionRoute: 'dashboard',
    actionLabel: 'Explore Dashboard'
  }
];
