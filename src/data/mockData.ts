import {
  StudentProfile,
  EmployerProfile,
  Internship,
  Application,
  ResumeAnalysisResult,
  SkillGapItem,
  Course,
  CareerPath,
  AllocationResultData,
  NotificationItem
} from '../types';

export const INITIAL_STUDENT_PROFILE: StudentProfile = {
  id: 'STU-2026-9881',
  name: 'Aarav Sharma',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80',
  title: 'B.Tech Computer Science & AI',
  email: 'aarav.sharma@campus.edu.in',
  phone: '+91 98765 43210',
  college: 'National Institute of Technology, Delhi',
  degree: 'Bachelor of Technology',
  branch: 'Computer Science and Engineering',
  cgpa: 8.92,
  graduationYear: 2026,
  location: 'New Delhi, India',
  bio: 'Aspiring AI Full-Stack Developer with a passion for building scalable web platforms, distributed AI agents, and intuitive user experiences. National SIH Hackathon Finalist.',
  targetRole: 'AI Full-Stack Engineer',
  readinessScore: 88,
  matchScore: 94,
  skills: [
    { name: 'React & TypeScript', level: 90, category: 'Frontend' },
    { name: 'Python & FastAPI', level: 85, category: 'Backend' },
    { name: 'PyTorch & ML Flow', level: 75, category: 'AI/ML' },
    { name: 'Docker & Kubernetes', level: 68, category: 'DevOps' },
    { name: 'Tailwind CSS & UI/UX', level: 92, category: 'Design' },
    { name: 'PostgreSQL & Vector DBs', level: 80, category: 'Database' }
  ],
  certifications: [
    { title: 'Google Deep Learning Specialization', issuer: 'DeepLearning.AI / Coursera', date: 'Jan 2026', verified: true },
    { title: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', date: 'Nov 2025', verified: true },
    { title: 'Smart India Hackathon Finalist Credential', issuer: 'Ministry of Education, AICTE', date: 'Dec 2025', verified: true }
  ],
  projects: [
    {
      title: 'YuvaSarthi Smart Placement Engine',
      tech: ['React', 'TypeScript', 'FastAPI', 'ChromaDB'],
      link: 'https://github.com/yuvasarthi/engine',
      description: 'AI-driven contextual matching system pairing 10,000+ students with national corporate and research internships.'
    },
    {
      title: 'Neural Vision Medical Diagnostic Assistant',
      tech: ['PyTorch', 'Next.js', 'Flask', 'Docker'],
      description: 'Computer vision framework detecting anomalies in chest X-rays with 94.2% validation accuracy.'
    }
  ]
};

export const INITIAL_EMPLOYER_PROFILE: EmployerProfile = {
  id: 'EMP-TATA-001',
  name: 'Tata Digital Labs',
  logo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=200&auto=format&fit=crop&q=80',
  industry: 'Enterprise Technology & AI Ecosystem',
  size: '10,000+ Employees',
  location: 'Bengaluru / Mumbai / Hybrid',
  website: 'https://tatadigital.com',
  tagline: 'Pioneering India\'s Digital Super-App & Enterprise AI Future',
  about: 'Tata Digital is building consumer & enterprise AI platforms that serve over 100 million Indian citizens and empower cross-sector innovation in mobility, commerce, and governance.',
  verified: true,
  totalHired: 142,
  activeOpenings: 18
};

export const MOCK_INTERNSHIPS: Internship[] = [
  {
    id: 'INT-ISRO-2026',
    title: 'AI Satellite Vision & Geospatial Trainee',
    company: 'ISRO - Indian Space Research Organisation',
    companyLogo: 'https://images.unsplash.com/photo-1517976487507-5b3b4b371f73?w=200&auto=format&fit=crop&q=80',
    location: 'Bengaluru, Karnataka',
    workMode: 'Hybrid',
    duration: '6 Months',
    stipend: '₹35,000 / month',
    category: 'AI & Space Tech',
    description: 'Work alongside ISRO scientists on computer vision pipelines for high-resolution satellite imagery classification, disaster monitoring, and Earth observation analytics.',
    responsibilities: [
      'Design deep learning algorithms for optical and SAR satellite imagery segmentation',
      'Optimize neural inference models for edge deployment on low-power onboard hardware',
      'Collaborate with the national space observatory telemetry teams'
    ],
    requirements: [
      'Pursuing 3rd or 4th year B.Tech in CS, IT, AI or related disciplines',
      'Strong proficiency in Python, PyTorch/TensorFlow, and OpenCV',
      'Prior experience with geospatial libraries (GDAL, Rasterio) is a plus'
    ],
    skillsRequired: ['Python', 'PyTorch', 'OpenCV', 'Computer Vision', 'Deep Learning'],
    perks: ['National Research Certificate', 'Publication Opportunity', 'Government Research Allowance', 'Letter of Recommendation'],
    openings: 8,
    applicantsCount: 342,
    deadline: '15 March 2026',
    postedDate: '2 Days ago',
    matchScore: 96,
    status: 'Open'
  },
  {
    id: 'INT-TATA-2026',
    title: 'Full-Stack React & Cloud Platform Intern',
    company: 'Tata Digital Labs',
    companyLogo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=200&auto=format&fit=crop&q=80',
    location: 'Bengaluru / Remote',
    workMode: 'Remote',
    duration: '3 - 6 Months',
    stipend: '₹40,000 / month',
    category: 'Software Engineering',
    description: 'Develop responsive, ultra-fast web micro-frontends and backend services supporting millions of high-concurrency requests across Tata Neu and enterprise portals.',
    responsibilities: [
      'Build reusable UI components with React 19, TypeScript, and modern CSS architectures',
      'Develop robust REST & GraphQL endpoints with Node.js/Go',
      'Write end-to-end integration tests and participate in agile sprints'
    ],
    requirements: [
      'Hands-on experience with modern React, JavaScript/TypeScript, and state management',
      'Understanding of asynchronous programming, REST APIs, and Git workflows',
      'Good communication and problem-solving mindset'
    ],
    skillsRequired: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    perks: ['Pre-Placement Offer (PPO) Track', 'Remote Setup Allowance', 'Mentorship from Principal Architects'],
    openings: 12,
    applicantsCount: 618,
    deadline: '20 March 2026',
    postedDate: '1 Day ago',
    matchScore: 94,
    status: 'Open'
  },
  {
    id: 'INT-DRDO-2026',
    title: 'Cyber Defense & Secure Systems Trainee',
    company: 'DRDO - SAG Lab',
    companyLogo: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=200&auto=format&fit=crop&q=80',
    location: 'New Delhi',
    workMode: 'Onsite',
    duration: '6 Months',
    stipend: '₹30,000 / month',
    category: 'Cybersecurity',
    description: 'Engage in vulnerability assessments, cryptanalysis, and resilient protocol simulation in secure mission-critical defense communications infrastructure.',
    responsibilities: [
      'Conduct automated vulnerability scans and write penetration testing scripts',
      'Analyze secure network packets and cryptographic protocol integrity',
      'Prepare technical threat intelligence summaries for lab researchers'
    ],
    requirements: [
      'Knowledge of Linux internals, TCP/IP networking, and Wireshark',
      'Familiarity with Python, C++, or Go for security scripting',
      'Indian citizenship and security clearance verification required'
    ],
    skillsRequired: ['Network Security', 'Python', 'Linux', 'Cryptography', 'Penetration Testing'],
    perks: ['Ministry Defense Security Badge', 'DRDO Lab Certification', 'Access to High-Performance Computing Labs'],
    openings: 5,
    applicantsCount: 189,
    deadline: '28 March 2026',
    postedDate: '3 Days ago',
    matchScore: 82,
    status: 'Open'
  },
  {
    id: 'INT-MSFT-2026',
    title: 'Generative AI & LLM Systems Intern',
    company: 'Microsoft India R&D',
    companyLogo: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?w=200&auto=format&fit=crop&q=80',
    location: 'Hyderabad, Telangana',
    workMode: 'Hybrid',
    duration: '6 Months',
    stipend: '₹80,000 / month',
    category: 'AI & Data Science',
    description: 'Work with the Azure AI & Copilot engineering groups to construct Retrieval Augmented Generation (RAG) pipelines and fine-tune specialized reasoning models.',
    responsibilities: [
      'Develop RAG evaluation benchmarks and prompt optimization frameworks',
      'Fine-tune small language models (SLMs) for low-latency enterprise domains',
      'Build automated latency and hallucination mitigation filters'
    ],
    requirements: [
      'Deep understanding of Transformer architectures, embeddings, and vector databases',
      'Proficiency in Python, LangChain/LlamaIndex, and PyTorch',
      'Published research or open-source contributions is highly valued'
    ],
    skillsRequired: ['Generative AI', 'Python', 'Vector DB', 'LangChain', 'PyTorch'],
    perks: ['Global Mentorship', 'High PPO Conversion Rate', 'Wellness & Gadget Stipend', 'Health Insurance'],
    openings: 6,
    applicantsCount: 1420,
    deadline: '10 March 2026',
    postedDate: 'Just now',
    matchScore: 91,
    status: 'Open'
  },
  {
    id: 'INT-NITI-2026',
    title: 'Digital Public Infrastructure & Data Analyst',
    company: 'NITI Aayog — Government of India',
    companyLogo: 'https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=200&auto=format&fit=crop&q=80',
    location: 'New Delhi',
    workMode: 'Hybrid',
    duration: '3 Months',
    stipend: '₹25,000 / month',
    category: 'Public Policy & Analytics',
    description: 'Analyze nationwide adoption metrics for Aadhaar, UPI, and PM GatiShakti to derive actionable governance and digital transformation recommendations.',
    responsibilities: [
      'Build automated PowerBI and Python data visualization dashboards for national policy tracking',
      'Clean and process multi-gigabyte district-level socio-economic datasets',
      'Draft policy research briefing notes for senior directors'
    ],
    requirements: [
      'Degree in Economics, Data Science, Statistics, Computer Science or allied fields',
      'Expertise with SQL, Python (Pandas/Seaborn), and Dashboarding',
      'Strong structured writing and analytical synthesis skills'
    ],
    skillsRequired: ['Data Analysis', 'Python', 'SQL', 'Tableau/PowerBI', 'Policy Research'],
    perks: ['Prime Minister Policy Fellow Citation', 'Direct Exposure to National Policy Makers', 'Flexible Work Schedule'],
    openings: 10,
    applicantsCount: 450,
    deadline: '22 March 2026',
    postedDate: '4 Days ago',
    matchScore: 85,
    status: 'Open'
  }
];

export const MOCK_APPLICATIONS: Application[] = [
  {
    id: 'APP-001',
    internshipId: 'INT-TATA-2026',
    internshipTitle: 'Full-Stack React & Cloud Platform Intern',
    company: 'Tata Digital Labs',
    companyLogo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=200&auto=format&fit=crop&q=80',
    studentId: 'STU-2026-9881',
    studentName: 'Aarav Sharma',
    studentEmail: 'aarav.sharma@campus.edu.in',
    studentCollege: 'NIT Delhi',
    studentCgpa: 8.92,
    appliedDate: '19 Feb 2026',
    status: 'AI Shortlisted',
    aiMatchScore: 94,
    matchHighlights: ['High proficiency in React 19 and TypeScript', 'Relevant micro-frontends project experience', 'Top 5% CGPA percentile in cohort'],
    coverNote: 'Excited to contribute to Tata Neu\'s cutting-edge frontends and high-volume state management architecture.'
  },
  {
    id: 'APP-002',
    internshipId: 'INT-ISRO-2026',
    internshipTitle: 'AI Satellite Vision & Geospatial Trainee',
    company: 'ISRO - Indian Space Research Organisation',
    companyLogo: 'https://images.unsplash.com/photo-1517976487507-5b3b4b371f73?w=200&auto=format&fit=crop&q=80',
    studentId: 'STU-2026-9881',
    studentName: 'Aarav Sharma',
    studentEmail: 'aarav.sharma@campus.edu.in',
    studentCollege: 'NIT Delhi',
    studentCgpa: 8.92,
    appliedDate: '15 Feb 2026',
    status: 'Selected',
    aiMatchScore: 96,
    matchHighlights: ['Computer vision project with 94% accuracy', 'Deep Learning specialization verified', 'High benchmark in Python/PyTorch'],
    coverNote: 'Dedicated to applying satellite segmentation architectures to national disaster monitoring.'
  },
  {
    id: 'APP-003',
    internshipId: 'INT-MSFT-2026',
    internshipTitle: 'Generative AI & LLM Systems Intern',
    company: 'Microsoft India R&D',
    companyLogo: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?w=200&auto=format&fit=crop&q=80',
    studentId: 'STU-2026-9881',
    studentName: 'Aarav Sharma',
    studentEmail: 'aarav.sharma@campus.edu.in',
    studentCollege: 'NIT Delhi',
    studentCgpa: 8.92,
    appliedDate: '18 Feb 2026',
    status: 'Under Review',
    aiMatchScore: 91,
    matchHighlights: ['RAG and Vector DB hands-on projects', 'Strong mathematical foundation in deep learning'],
    coverNote: 'Eager to optimize RAG latency and reasoning agents with Azure AI core research team.'
  }
];

export const MOCK_RESUME_ANALYSIS: ResumeAnalysisResult = {
  overallScore: 89,
  impactScore: 92,
  brevityScore: 86,
  styleScore: 94,
  keywordsScore: 84,
  summary: 'Your resume exhibits exceptional technical clarity, well-quantified engineering impact metrics, and clean typography. Target keywords for Full-Stack AI roles are strongly represented.',
  strengths: [
    'Strong action verbs with quantifiable outcomes (e.g. "reduced latency by 42%", "trained vision model with 94.2% accuracy")',
    'Clean single-column layout optimized for modern Applicant Tracking Systems (ATS)',
    'Verified certifications with credential URLs from recognized institutions',
    'Demonstrated full-stack breadth (Frontend + Backend + ML pipelines)'
  ],
  improvements: [
    'Add specific benchmarks on cloud infrastructure costs or Docker deployment scaling',
    'Include CI/CD pipeline automation tools like GitHub Actions or GitLab CI',
    'Tighten project descriptions to ensure maximum scannability within 6-second recruiter scans'
  ],
  missingKeywords: ['Kubernetes Helm Charts', 'GraphQL Schema Design', 'CI/CD Pipelines', 'Kafka Event Streaming', 'Prometheus Monitoring'],
  detectedSkills: ['React', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'PyTorch', 'PostgreSQL', 'Docker', 'REST APIs', 'ChromaDB', 'Git'],
  experienceLevel: 'Entry-Level / Pre-Graduate (Level 2)',
  targetRoleMatch: 92,
  recommendedRoles: ['AI Full-Stack Developer', 'Computer Vision Engineer', 'Frontend Systems Engineer', 'Cloud Software Trainee']
};

export const MOCK_SKILL_GAPS: SkillGapItem[] = [
  {
    id: 'GAP-01',
    skill: 'Microservices & Event Architecture (Kafka)',
    category: 'Backend & Distributed Systems',
    currentProficiency: 45,
    requiredProficiency: 85,
    importance: 'Critical',
    recommendedCourse: 'Building Event-Driven Systems with Kafka & Go',
    timeToLearn: '2 Weeks (12 Hours)'
  },
  {
    id: 'GAP-02',
    skill: 'CI/CD & Cloud Orchestration (Kubernetes)',
    category: 'DevOps & Cloud',
    currentProficiency: 55,
    requiredProficiency: 80,
    importance: 'Critical',
    recommendedCourse: 'Production Kubernetes for Developers',
    timeToLearn: '3 Weeks (18 Hours)'
  },
  {
    id: 'GAP-03',
    skill: 'LLM Evaluation & Agentic Workflows',
    category: 'AI & Machine Learning',
    currentProficiency: 72,
    requiredProficiency: 90,
    importance: 'High',
    recommendedCourse: 'Advanced Agentic Design Patterns & LangGraph',
    timeToLearn: '1.5 Weeks (10 Hours)'
  },
  {
    id: 'GAP-04',
    skill: 'GraphQL & Apollo Federation',
    category: 'API Design',
    currentProficiency: 60,
    requiredProficiency: 75,
    importance: 'Medium',
    recommendedCourse: 'Modern GraphQL Masterclass',
    timeToLearn: '1 Week (6 Hours)'
  }
];

export const MOCK_COURSES: Course[] = [
  {
    id: 'CRS-01',
    title: 'Modern Full-Stack Architecture with React 19 & Next.js',
    provider: 'YuvaSarthi Academy',
    instructor: 'Dr. Ramesh Kulkarni, IIT Madras',
    duration: '16 Hours',
    rating: 4.9,
    reviewsCount: 3840,
    level: 'Intermediate',
    category: 'Web Development',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&auto=format&fit=crop&q=80',
    isEnrolled: true,
    progress: 75,
    skills: ['React 19', 'Server Actions', 'Next.js', 'State Management']
  },
  {
    id: 'CRS-02',
    title: 'Deep Learning & Applied Computer Vision on Geospatial Data',
    provider: 'NPTEL / AICTE Sponsored',
    instructor: 'Prof. Ananya Sen, IISc Bengaluru',
    duration: '24 Hours',
    rating: 4.8,
    reviewsCount: 2150,
    level: 'Advanced',
    category: 'Artificial Intelligence',
    thumbnail: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=400&auto=format&fit=crop&q=80',
    isEnrolled: true,
    progress: 40,
    skills: ['PyTorch', 'OpenCV', 'Satellite Imagery', 'CNNs']
  },
  {
    id: 'CRS-03',
    title: 'Cloud-Native Container Orchestration with Docker & K8s',
    provider: 'Swayam Portal',
    instructor: 'Vikramaditya Rao, Cloud Architect',
    duration: '18 Hours',
    rating: 4.7,
    reviewsCount: 1890,
    level: 'Intermediate',
    category: 'Cloud & DevOps',
    thumbnail: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=400&auto=format&fit=crop&q=80',
    isEnrolled: false,
    progress: 0,
    skills: ['Docker', 'Kubernetes', 'Helm', 'CI/CD Pipelines']
  },
  {
    id: 'CRS-04',
    title: 'Prompt Engineering & Building Enterprise RAG Applications',
    provider: 'YuvaSarthi AI Labs',
    instructor: 'Pooja Verma, AI Scientist',
    duration: '10 Hours',
    rating: 4.95,
    reviewsCount: 5400,
    level: 'Beginner',
    category: 'Generative AI',
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&auto=format&fit=crop&q=80',
    isEnrolled: false,
    progress: 0,
    skills: ['Vector DB', 'LangChain', 'Embeddings', 'LLM Guardrails']
  }
];

export const MOCK_CAREER_PATHS: CareerPath[] = [
  {
    id: 'CP-01',
    title: 'AI Full-Stack Architect',
    demandIndex: 'Very High',
    averageSalary: '₹18 - ₹32 LPA',
    matchPercentage: 94,
    description: 'Lead end-to-end engineering of intelligent products, combining modern reactive frontend interfaces with scalable AI model inference backends.',
    milestones: [
      {
        level: 'Entry / Intern',
        role: 'AI Software Trainee',
        timeline: 'Months 0 - 6',
        skills: ['React', 'TypeScript', 'FastAPI', 'PyTorch'],
        description: 'Implement frontend views, integrate model APIs, and write test suites.'
      },
      {
        level: 'Junior / Associate',
        role: 'Full-Stack AI Developer',
        timeline: 'Years 1 - 2',
        skills: ['Vector DBs', 'RAG Pipelines', 'Docker', 'Tailwind CSS'],
        description: 'Design low-latency data pipelines, fine-tune models, and optimize responsive web applications.'
      },
      {
        level: 'Senior',
        role: 'Senior AI Platform Engineer',
        timeline: 'Years 3 - 5',
        skills: ['Kubernetes', 'MLOps', 'System Architecture', 'Distributed Systems'],
        description: 'Architect multi-tenant agent systems, oversee security compliance, and lead developer squads.'
      }
    ]
  },
  {
    id: 'CP-02',
    title: 'Computer Vision & Geospatial Engineer',
    demandIndex: 'High',
    averageSalary: '₹16 - ₹28 LPA',
    matchPercentage: 91,
    description: 'Develop vision algorithms for satellites, autonomous systems, defense sensors, and spatial intelligence mapping.',
    milestones: [
      {
        level: 'Intern',
        role: 'Geospatial ML Intern',
        timeline: 'Months 0 - 6',
        skills: ['OpenCV', 'PyTorch', 'GDAL', 'Python'],
        description: 'Process raw spatial datasets and train segmentation classifiers.'
      },
      {
        level: 'Engineer',
        role: 'Applied Vision Specialist',
        timeline: 'Years 1 - 3',
        skills: ['Edge AI', 'TensorRT', 'C++', '3D Point Clouds'],
        description: 'Deploy real-time inference on edge sensors and satellite hardware.'
      }
    ]
  }
];

export const MOCK_ALLOCATION: AllocationResultData = {
  allocationId: 'SIH-PM-ALLOC-2026-0984',
  scheme: 'National Smart India Hackathon & PM Internship Allotment Scheme',
  candidateName: 'Aarav Sharma',
  candidateId: 'STU-2026-9881',
  allocatedRole: 'AI Satellite Vision & Geospatial Research Trainee',
  companyName: 'ISRO - Indian Space Research Organisation',
  companyLogo: 'https://images.unsplash.com/photo-1517976487507-5b3b4b371f73?w=200&auto=format&fit=crop&q=80',
  department: 'Space Applications Centre (SAC) & Earth Observation Systems',
  workLocation: 'ISRO Telemetry & Tracking Command Facility, Bengaluru, India',
  stipend: '₹35,000 per month (Government Stipend + Research Allowance)',
  duration: '6 Months (1st April 2026 — 30th September 2026)',
  reportingDate: '01 April 2026, 09:00 AM IST',
  mentorName: 'Dr. K. Sivasubramanian',
  mentorDesignation: 'Scientist / Engineer-SG, Advanced Space Analytics Division',
  mentorEmail: 'k.siva@sac.isro.gov.in',
  verificationStatus: 'Verified & Confirmed',
  letterGeneratedDate: '19 February 2026',
  instructions: [
    'Report to Main Gate Security at ISRO SAC Campus with two physical copies of this Allotment Order and original Government ID (Aadhaar / Passport).',
    'Submit your signed College NOC (No Objection Certificate) and official consolidated transcript.',
    'Hostel accommodation on campus will be provisioned on single-occupancy basis starting March 31st, 2026.',
    'Complete the mandatory national digital cybersecurity oath on the YuvaSarthi portal before reporting.'
  ]
};

export const INITIAL_NOTIFICATIONS: NotificationItem[] = [
  {
    id: 'NOTIF-1',
    title: '🎉 Official Allotment Confirmed!',
    message: 'Congratulations! You have been officially allocated to ISRO as AI Satellite Vision Trainee.',
    time: '10 mins ago',
    read: false,
    type: 'success'
  },
  {
    id: 'NOTIF-2',
    title: 'Tata Digital Interview Scheduled',
    message: 'Your application for Full-Stack Intern was shortlisted. Recruiter scheduled a technical review.',
    time: '2 hours ago',
    read: false,
    type: 'info'
  },
  {
    id: 'NOTIF-3',
    title: 'Resume ATS Score Updated',
    message: 'Your updated resume score is 89/100 (+8% increase). 3 new matched opportunities unlocked.',
    time: '1 day ago',
    read: true,
    type: 'info'
  }
];

export const INITIAL_CHAT_MESSAGES = [
  {
    id: 'msg-1',
    sender: 'ai' as const,
    text: 'Namaste Aarav! 🙏 I am your **YuvaSarthi AI Career Assistant & Mentor**.\n\nI am equipped with a comprehensive knowledge base covering ATS resume optimization, top remote internships, government AICTE policies, skill gap roadmaps, interview preparation, and official allocation results.\n\nAsk me any question — or phrase your thoughts with keywords, and I will fetch the most relevant guidance for you!',
    timestamp: 'Just now',
    category: 'Welcome & Guidance',
    confidence: 'high' as const,
    suggestions: [
      'How do I improve my ATS score from 89 to 95+?',
      'What remote AI internships match my Python & React profile?',
      'Tell me about my ISRO satellite trainee allocation',
      'AICTE mandatory internship policy and credits',
      'Which certifications are most valued for Tier-1 placements?'
    ]
  }
];
