import { AI_KNOWLEDGE_BASE } from '../data/aiKnowledgeBase';
import { KBEntry, StudentProfile, ResumeAnalysisResult, AllocationResultData } from '../types';

export interface AIContext {
  studentProfile?: Partial<StudentProfile>;
  resumeAnalysis?: Partial<ResumeAnalysisResult>;
  allocation?: Partial<AllocationResultData>;
}

export interface AIProcessedResult {
  matchedEntry?: KBEntry;
  response: string;
  categoryLabel?: string;
  category?: string;
  extractedKeywords: string[];
  confidence: 'high' | 'keyword_matched' | 'low';
  suggestions: string[];
  actionRoute?: string;
  actionLabel?: string;
}

const STOP_WORDS = new Set([
  'a', 'about', 'above', 'after', 'again', 'against', 'all', 'am', 'an', 'and', 'any', 'are',
  'aren', 'arent', 'as', 'at', 'be', 'because', 'been', 'before', 'being', 'below', 'between',
  'both', 'but', 'by', 'can', 'cannot', 'could', 'couldnt', 'did', 'didnt', 'do', 'does',
  'doesnt', 'doing', 'dont', 'down', 'during', 'each', 'few', 'for', 'from', 'further',
  'had', 'hadnt', 'has', 'hasnt', 'have', 'havent', 'having', 'he', 'hed', 'hell', 'hes',
  'her', 'here', 'heres', 'hers', 'herself', 'him', 'himself', 'his', 'how', 'hows', 'i',
  'id', 'ill', 'im', 'ive', 'if', 'in', 'into', 'is', 'isnt', 'it', 'its', 'itself', 'lets',
  'me', 'more', 'most', 'mustnt', 'my', 'myself', 'no', 'nor', 'not', 'of', 'off', 'on',
  'once', 'only', 'or', 'other', 'ought', 'our', 'ours', 'ourselves', 'out', 'over', 'own',
  'same', 'shant', 'she', 'shed', 'shell', 'shes', 'should', 'shouldnt', 'so', 'some',
  'such', 'than', 'that', 'thats', 'the', 'their', 'theirs', 'them', 'themselves', 'then',
  'there', 'theres', 'these', 'they', 'theyd', 'theyll', 'theyre', 'theyve', 'this', 'those',
  'through', 'to', 'too', 'under', 'until', 'up', 'very', 'was', 'wasnt', 'we', 'wed',
  'well', 'were', 'werent', 'weve', 'what', 'whats', 'when', 'whens', 'where', 'wheres',
  'which', 'while', 'who', 'whos', 'whom', 'why', 'whys', 'with', 'wont', 'would', 'wouldnt',
  'you', 'youd', 'youll', 'youre', 'youve', 'your', 'yours', 'yourself', 'yourselves',
  'please', 'pls', 'tell', 'want', 'give', 'help', 'need', 'know', 'sir', 'mam', 'madam',
  'hi', 'hello', 'hey', 'ok', 'okay', 'thx', 'thanks', 'thank', 'bro', 'also', 'like',
  'can', 'explain', 'show', 'find', 'get', 'make', 'fetch', 'tellme', 'showme', 'giveme',
  'completely', 'based', 'on', 'in', 'regarding', 'regarding'
]);

const SYNONYM_MAP: Record<string, string[]> = {
  aiml: ['ai', 'ml', 'machine learning', 'artificial intelligence', 'deep learning'],
  ai: ['aiml', 'machine learning', 'artificial intelligence', 'deep learning', 'llm'],
  ml: ['aiml', 'machine learning', 'ai', 'deep learning'],
  learn: ['learning', 'study', 'roadmap', 'skills', 'course', 'curriculum'],
  learning: ['learn', 'study', 'roadmap', 'skills', 'course', 'curriculum'],
  skills: ['skill', 'learn', 'learning', 'roadmap', 'proficiency'],
  skill: ['skills', 'learn', 'learning', 'roadmap', 'proficiency'],
  domain: ['field', 'sector', 'branch', 'technology', 'area'],

  // Cybersecurity & Ethical Hacking
  cybersecurity: ['cyber', 'security', 'ethical hacking', 'infosec', 'penetration testing', 'pentest', 'soc analyst'],
  cyber: ['cybersecurity', 'security', 'infosec', 'ethical hacking'],
  security: ['cybersecurity', 'infosec', 'cyber', 'ethical hacking'],
  hacking: ['ethical hacking', 'cybersecurity', 'penetration testing', 'pentest'],
  pentest: ['penetration testing', 'cybersecurity', 'ethical hacking'],

  // Data Science & Analytics
  datascience: ['data science', 'analytics', 'data analyst', 'statistics', 'eda', 'tableau', 'powerbi'],
  analytics: ['data science', 'datascience', 'data analyst', 'statistics', 'tableau', 'powerbi'],
  sql: ['database', 'queries', 'postgres', 'data science', 'analytics'],

  // Data Engineering
  dataengineering: ['data engineering', 'etl', 'spark', 'kafka', 'airflow', 'snowflake', 'data lake'],
  etl: ['data engineering', 'airflow', 'spark', 'data pipelines'],
  spark: ['data engineering', 'pyspark', 'big data', 'distributed'],
  kafka: ['data engineering', 'event streaming', 'messaging', 'backend'],

  // Mobile App Development
  mobile: ['app development', 'flutter', 'react native', 'android', 'ios', 'kotlin', 'swift'],
  flutter: ['mobile', 'dart', 'cross-platform', 'app development'],
  android: ['mobile', 'kotlin', 'jetpack compose', 'app development'],
  ios: ['mobile', 'swift', 'swiftui', 'app development'],

  // Backend Systems
  backend: ['systems engineering', 'golang', 'go', 'node', 'fastapi', 'microservices', 'distributed systems', 'spring boot'],
  golang: ['backend', 'go', 'systems engineering', 'concurrency'],
  microservices: ['backend', 'distributed systems', 'docker', 'grpc'],

  // Frontend & UI/UX
  frontend: ['react', 'typescript', 'nextjs', 'css', 'tailwind', 'javascript', 'web development'],
  uiux: ['ui', 'ux', 'design', 'figma', 'product design', 'wireframing'],
  design: ['uiux', 'figma', 'product design', 'ui', 'ux'],
  figma: ['uiux', 'design', 'product design', 'prototyping'],

  // Embedded, IoT & Robotics
  embedded: ['iot', 'robotics', 'firmware', 'microcontroller', 'arduino', 'esp32', 'stm32', 'rtos'],
  iot: ['embedded', 'robotics', 'firmware', 'esp32', 'mqtt'],
  robotics: ['embedded', 'iot', 'ros', 'microcontroller'],

  // Blockchain & Web3
  blockchain: ['web3', 'solidity', 'smart contracts', 'ethereum', 'evm', 'crypto', 'defi'],
  web3: ['blockchain', 'solidity', 'smart contracts', 'ethereum', 'dapp'],
  solidity: ['blockchain', 'web3', 'smart contracts', 'ethereum'],

  // QA & Testing
  qa: ['testing', 'software testing', 'automation', 'test automation', 'sdet', 'playwright', 'selenium'],
  testing: ['qa', 'test automation', 'sdet', 'playwright', 'cypress', 'selenium'],

  // Game Dev
  gamedev: ['game development', 'unity', 'unreal engine', 'c#', 'c++', 'shaders', '3d graphics'],
  game: ['gamedev', 'game development', 'unity', 'unreal engine'],

  // Core Platform Terms
  cv: ['resume', 'ats'],
  resume: ['cv', 'ats', 'score'],
  ats: ['resume', 'scanner', 'score'],
  job: ['internship', 'placement', 'openings', 'hiring'],
  jobs: ['internship', 'placement', 'openings', 'hiring'],
  intern: ['internship', 'trainee'],
  interns: ['internship'],
  work: ['internship', 'job'],
  placement: ['internship', 'allocation', 'job'],
  placements: ['internship', 'allocation', 'job'],
  stipend: ['salary', 'pay', 'money', 'allowance', 'dbt'],
  stipends: ['salary', 'pay', 'money', 'allowance', 'dbt'],
  salary: ['stipend', 'pay', 'ctc', 'lpa'],
  pay: ['stipend', 'salary', 'money'],
  money: ['stipend', 'salary', 'pay'],
  dbt: ['stipend', 'payment', 'disbursement'],
  isro: ['satellite', 'sac', 'ursc', 'space', 'allocation'],
  tata: ['digital', 'neu', 'fullstack'],
  microsoft: ['ai', 'llm', 'generative'],
  gap: ['skill', 'readiness', 'missing'],
  readiness: ['skill', 'gap', 'score'],
  aicte: ['policy', 'mandatory', 'credits', 'nep'],
  nep: ['aicte', 'credits', 'academic'],
  swayam: ['nptel', 'free', 'course', 'courses', 'credits'],
  nptel: ['swayam', 'course', 'credits', 'certification'],
  course: ['learning', 'certification', 'study'],
  courses: ['learning', 'certification', 'study'],
  cert: ['certification', 'certificate', 'credential'],
  certs: ['certification', 'certificate', 'credential'],
  certificate: ['certification', 'credential'],
  certificates: ['certification', 'credential'],
  certification: ['certificate', 'course', 'credential'],
  certifications: ['certificate', 'course', 'credential'],
  sop: ['cover', 'letter', 'statement'],
  cover: ['letter', 'statement', 'note'],
  letter: ['cover', 'allocation', 'offer'],
  dsa: ['coding', 'leetcode', 'algorithm', 'technical', 'interview'],
  coding: ['dsa', 'technical', 'interview'],
  algorithm: ['dsa', 'interview', 'coding'],
  wfh: ['remote', 'work from home'],
  remote: ['wfh', 'work from home', 'online'],
  ppo: ['conversion', 'full time', 'return offer']
};

/**
 * Levenshtein distance for typo resilience
 */
function levenshtein(a: string, b: string): number {
  if (a === b) return 0;
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;

  const matrix: number[][] = [];

  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }

  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }

  return matrix[b.length][a.length];
}

/**
 * Tokenize and normalize input text
 */
export function extractKeywords(text: string): { cleanTokens: string[]; expandedKeywords: string[] } {
  const normalized = text
    .toLowerCase()
    .replace(/[^a-z0-9\s-+]/g, ' ')
    .trim();

  const rawTokens = normalized.split(/\s+/).filter(Boolean);

  const cleanTokens = rawTokens.filter((t) => {
    if (STOP_WORDS.has(t)) return false;
    if (t.length <= 1 && !/\d/.test(t)) return false;
    return true;
  });

  const expandedSet = new Set<string>(cleanTokens);

  cleanTokens.forEach((token) => {
    if (SYNONYM_MAP[token]) {
      SYNONYM_MAP[token].forEach((syn) => expandedSet.add(syn));
    }
  });

  return {
    cleanTokens,
    expandedKeywords: Array.from(expandedSet)
  };
}

/**
 * Classify user intent from query text
 */
function detectQueryIntent(normalizedQuery: string, tokens: string[]): string {
  const hasToken = (...words: string[]) => words.some((w) => tokens.includes(w) || normalizedQuery.includes(w));

  // Resume intent (must specifically mention resume/cv/ats/score/format)
  if (hasToken('resume', 'cv', 'ats', 'scanner', 'score', 'bullet', 'bullets', 'quantify', 'latex')) {
    return 'resume';
  }

  // Cover Letter intent
  if (hasToken('cover letter', 'cover note', 'sop', 'statement of purpose', 'cover statement')) {
    return 'cover-letter';
  }

  // Allocation & Joining intent
  if (hasToken('allocated', 'allocation', 'allotted', 'offer letter', 'joining date', 'mentor email', 'mentor name', 'isro offer')) {
    return 'allocation';
  }

  // Interview Prep intent
  if (hasToken('interview', 'dsa', 'coding round', 'leetcode', 'hr question', 'behavioral', 'star method', 'technical round')) {
    return 'interview';
  }

  // AICTE & Policy intent
  if (hasToken('aicte', 'nep', 'credit', 'credits', 'mandatory', 'guideline', 'guidelines', 'policy', 'pmkvy', 'swayam')) {
    return 'schemes';
  }

  // Portfolio / Projects intent
  if (hasToken('portfolio', 'github', 'readme', 'project ideas', 'projects for resume', 'major project')) {
    return 'portfolio';
  }

  // Certifications intent
  if (hasToken('certification', 'certifications', 'certificate', 'credentials', 'aws exam', 'tier 1 certifications')) {
    return 'certifications';
  }

  // Stipend / PPO intent
  if (hasToken('stipend', 'salary', 'ppo', 'convert', 'compensation', 'package', 'lpa')) {
    return 'stipend';
  }

  // Internship / Jobs intent
  if (hasToken('internship', 'internships', 'remote', 'wfh', 'apply', 'openings', 'hiring', 'vacancy', 'vacancies', 'jobs')) {
    return 'internships';
  }

  // Skills / Learning / Roadmap intent across all engineering domains
  if (hasToken(
    'learn', 'learning', 'skills', 'skill', 'roadmap', 'curriculum', 'study', 'domain',
    'aiml', 'ai', 'ml', 'machine learning', 'cybersecurity', 'cyber', 'ethical hacking',
    'datascience', 'data science', 'data analytics', 'data engineering', 'etl', 'spark',
    'mobile', 'flutter', 'react native', 'android', 'ios', 'swift', 'kotlin',
    'backend', 'golang', 'microservices', 'frontend', 'react', 'embedded', 'iot',
    'robotics', 'blockchain', 'web3', 'solidity', 'uiux', 'figma', 'design',
    'qa', 'testing', 'automation', 'gamedev', 'unity', 'unreal'
  )) {
    return 'skills';
  }

  return 'general';
}

/**
 * Interpolate dynamic profile variables into response template
 */
function interpolateVariables(template: string, ctx?: AIContext): string {
  const student = ctx?.studentProfile;
  const resume = ctx?.resumeAnalysis;
  const alloc = ctx?.allocation;

  const name = student?.name || 'Aarav Sharma';
  const atsScore = resume?.overallScore?.toString() || '89';
  const cgpa = student?.cgpa?.toFixed(2) || '8.92';
  const targetRole = student?.targetRole || 'AI Full-Stack Engineer';
  const degree = student?.degree || 'Bachelor of Technology';
  const branch = student?.branch || 'Computer Science and Engineering';
  const college = student?.college || 'National Institute of Technology, Delhi';
  const readinessScore = student?.readinessScore?.toString() || '88';
  const allocatedRole = alloc?.allocatedRole || 'AI Satellite Vision Trainee';
  const allocatedCompany = alloc?.companyName || 'ISRO Space Applications Centre (SAC)';
  const allottedStipend = alloc?.stipend || '₹35,000 / month';

  return template
    .replace(/{studentName}/g, name)
    .replace(/{atsScore}/g, atsScore)
    .replace(/{cgpa}/g, cgpa)
    .replace(/{targetRole}/g, targetRole)
    .replace(/{degree}/g, degree)
    .replace(/{branch}/g, branch)
    .replace(/{college}/g, college)
    .replace(/{readinessScore}/g, readinessScore)
    .replace(/{allocatedRole}/g, allocatedRole)
    .replace(/{allocatedCompany}/g, allocatedCompany)
    .replace(/{allottedStipend}/g, allottedStipend);
}

/**
 * Main query processor with semantic intent matching and clean conversational delivery
 */
export function processAIQuery(query: string, context?: AIContext): AIProcessedResult {
  const trimmed = query.trim();
  if (!trimmed) {
    return {
      response: "Please ask any question about your career, internships, learning roadmaps, resume score, or interview preparation!",
      extractedKeywords: [],
      confidence: 'low',
      suggestions: [
        'How do I improve my ATS score to 95+?',
        'I want to learn new skills based on AIML domain',
        'Find top remote Python & React internships',
        'Tell me about my ISRO allocation result'
      ]
    };
  }

  const { cleanTokens, expandedKeywords } = extractKeywords(trimmed);
  const normalizedQuery = trimmed.toLowerCase();
  const detectedIntent = detectQueryIntent(normalizedQuery, cleanTokens);

  let bestEntry: KBEntry | null = null;
  let highestScore = -999;

  for (const entry of AI_KNOWLEDGE_BASE) {
    let score = 0;

    // 1. Direct Sample Question Match (Exact or high substring similarity)
    for (const sample of entry.sampleQuestions) {
      const sampleLower = sample.toLowerCase();
      if (normalizedQuery === sampleLower) {
        score += 100;
        break;
      }
      if (normalizedQuery.includes(sampleLower) || sampleLower.includes(normalizedQuery)) {
        score += 45;
      }
    }

    // 2. Primary Keyword Matching (Weight: 8 pts each)
    for (const pkw of entry.primaryKeywords) {
      const pkwLower = pkw.toLowerCase();
      if (cleanTokens.includes(pkwLower) || expandedKeywords.includes(pkwLower)) {
        score += 8;
      } else if (normalizedQuery.includes(pkwLower)) {
        score += 6;
      } else {
        // Fuzzy check for typos (length >= 4)
        for (const token of cleanTokens) {
          if (token.length >= 4 && pkwLower.length >= 4) {
            const dist = levenshtein(token, pkwLower);
            if (dist === 1) {
              score += 4;
            }
          }
        }
      }
    }

    // 3. Secondary Keyword Matching (Weight: 2.5 pts each)
    for (const skw of entry.secondaryKeywords) {
      const skwLower = skw.toLowerCase();
      if (cleanTokens.includes(skwLower) || expandedKeywords.includes(skwLower)) {
        score += 2.5;
      } else if (normalizedQuery.includes(skwLower)) {
        score += 2;
      }
    }

    // 4. Title Token Overlap
    const titleTokens = entry.title.toLowerCase().split(/\s+/);
    for (const token of cleanTokens) {
      if (titleTokens.includes(token)) {
        score += 4;
      }
    }

    // 5. Intent Alignment & Category Isolation
    if (detectedIntent !== 'general') {
      if (entry.category === detectedIntent) {
        score += 25; // Intent Boost
      } else {
        // Penalize mismatched categories when a specific intent was detected
        if (entry.category === 'resume' && detectedIntent !== 'resume') {
          score -= 35; // Strongly prevent ATS resume guides from hijacking skill queries
        }
        if (entry.category === 'cover-letter' && detectedIntent !== 'cover-letter') {
          score -= 20;
        }
        if (entry.category === 'allocation' && detectedIntent !== 'allocation') {
          score -= 15;
        }
      }
    }

    if (score > highestScore) {
      highestScore = score;
      bestEntry = entry;
    }
  }

  // Clean, natural response synthesis (No raw keyword meta-text)
  if (bestEntry && highestScore >= 12) {
    const responseText = interpolateVariables(bestEntry.responseTemplate, context);
    return {
      matchedEntry: bestEntry,
      response: responseText,
      categoryLabel: bestEntry.categoryLabel,
      category: bestEntry.category,
      extractedKeywords: cleanTokens,
      confidence: 'high',
      suggestions: bestEntry.suggestions,
      actionRoute: bestEntry.actionRoute,
      actionLabel: bestEntry.actionLabel
    };
  } else if (bestEntry && highestScore >= 4) {
    // Return clean natural response directly without mentioning keywords
    const responseText = interpolateVariables(bestEntry.responseTemplate, context);
    return {
      matchedEntry: bestEntry,
      response: responseText,
      categoryLabel: bestEntry.categoryLabel,
      category: bestEntry.category,
      extractedKeywords: cleanTokens,
      confidence: 'keyword_matched',
      suggestions: bestEntry.suggestions,
      actionRoute: bestEntry.actionRoute,
      actionLabel: bestEntry.actionLabel
    };
  } else {
    // Low Confidence Fallback - Natural & conversational guidance
    const fallbackText = `I'd be glad to assist you with your career goals and preparation! Here are the core areas I can help you with:

1. **🧠 AI & Engineering Roadmaps**: Learning paths for AI/ML, Full-Stack, Cloud & DevOps.
2. **🎯 ATS Resume & Optimization**: Improving your ATS score to 95+ with metric bullet points.
3. **💼 National & Remote Internships**: Openings at ISRO, Tata Digital, Microsoft, and high-stipend startups.
4. **🚀 AICTE & Govt Schemes**: Mandatory NEP 2020 internship credits, Swayam courses, and stipend policies.
5. **⚡ Interview Mastery**: Technical coding (DSA patterns), React 19 questions, and HR STAR methodology.

Feel free to ask about any of these topics or click a suggested prompt below!`;

    return {
      response: fallbackText,
      extractedKeywords: cleanTokens,
      confidence: 'low',
      suggestions: [
        'I want to learn new skills based on AIML domain',
        'How do I improve my ATS score to 95+?',
        'What remote AI internships match my profile?',
        'AICTE mandatory internship policy guidelines'
      ]
    };
  }
}
