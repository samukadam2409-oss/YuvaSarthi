export type UserRole = 'student' | 'employer';

export type AuthView =
  | 'welcome'
  | 'role-selection'
  | 'student-login'
  | 'student-register'
  | 'employer-login'
  | 'employer-register'
  | 'forgot-password';

export interface StudentProfile {
  id: string;
  name: string;
  avatar: string;
  title: string;
  email: string;
  phone: string;
  college: string;
  degree: string;
  branch: string;
  cgpa: number;
  graduationYear: number;
  location: string;
  bio: string;
  targetRole: string;
  readinessScore: number;
  matchScore: number;
  skills: { name: string; level: number; category: string }[];
  certifications: { title: string; issuer: string; date: string; verified: boolean }[];
  projects: { title: string; tech: string[]; link?: string; description: string }[];
}

export interface EmployerProfile {
  id: string;
  name: string;
  logo: string;
  industry: string;
  size: string;
  location: string;
  website: string;
  about: string;
  tagline: string;
  verified: boolean;
  totalHired: number;
  activeOpenings: number;
}

export interface Internship {
  id: string;
  title: string;
  company: string;
  companyLogo: string;
  location: string;
  workMode: 'Remote' | 'Hybrid' | 'Onsite';
  duration: string;
  stipend: string;
  category: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  skillsRequired: string[];
  perks: string[];
  openings: number;
  applicantsCount: number;
  deadline: string;
  postedDate: string;
  matchScore?: number;
  status: 'Open' | 'Closed' | 'Drafting';
}

export interface Application {
  id: string;
  internshipId: string;
  internshipTitle: string;
  company: string;
  companyLogo: string;
  studentId: string;
  studentName: string;
  studentEmail: string;
  studentCollege: string;
  studentCgpa: number;
  appliedDate: string;
  status: 'Applied' | 'Under Review' | 'AI Shortlisted' | 'Interview' | 'Selected' | 'Rejected';
  aiMatchScore: number;
  matchHighlights: string[];
  coverNote?: string;
}

export interface ResumeAnalysisResult {
  overallScore: number;
  impactScore: number;
  brevityScore: number;
  styleScore: number;
  keywordsScore: number;
  summary: string;
  strengths: string[];
  improvements: string[];
  missingKeywords: string[];
  detectedSkills: string[];
  experienceLevel: string;
  targetRoleMatch: number;
  recommendedRoles: string[];
}

export interface SkillGapItem {
  id: string;
  skill: string;
  category: string;
  currentProficiency: number; // 0 - 100
  requiredProficiency: number; // 0 - 100
  importance: 'Critical' | 'High' | 'Medium' | 'Good to Have';
  recommendedCourse: string;
  timeToLearn: string;
}

export interface Course {
  id: string;
  title: string;
  provider: string;
  providerLogo?: string;
  instructor: string;
  duration: string;
  rating: number;
  reviewsCount: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
  thumbnail: string;
  isEnrolled: boolean;
  progress: number;
  skills: string[];
}

export interface CareerPath {
  id: string;
  title: string;
  demandIndex: 'Very High' | 'High' | 'Moderate';
  averageSalary: string;
  matchPercentage: number;
  description: string;
  milestones: {
    level: string;
    role: string;
    timeline: string;
    skills: string[];
    description: string;
  }[];
}

export interface AllocationResultData {
  allocationId: string;
  scheme: string;
  candidateName: string;
  candidateId: string;
  allocatedRole: string;
  companyName: string;
  companyLogo: string;
  department: string;
  workLocation: string;
  stipend: string;
  duration: string;
  reportingDate: string;
  mentorName: string;
  mentorDesignation: string;
  mentorEmail: string;
  verificationStatus: 'Verified & Confirmed' | 'Pending Verification';
  letterGeneratedDate: string;
  instructions: string[];
}

export type KBCategory =
  | 'resume'
  | 'internships'
  | 'skills'
  | 'interview'
  | 'schemes'
  | 'cover-letter'
  | 'certifications'
  | 'allocation'
  | 'portfolio'
  | 'stipend'
  | 'general';

export interface KBEntry {
  id: string;
  category: KBCategory;
  categoryLabel: string;
  title: string;
  sampleQuestions: string[];
  primaryKeywords: string[];
  secondaryKeywords: string[];
  responseTemplate: string;
  suggestions: string[];
  actionRoute?: string;
  actionLabel?: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
  category?: string;
  extractedKeywords?: string[];
  confidence?: 'high' | 'keyword_matched' | 'low';
  suggestions?: string[];
  actionRoute?: string;
  actionLabel?: string;
}

export interface FeedbackItem {
  id: string;
  category: 'Platform Bug' | 'Internship Grievance' | 'Mentor Feedback' | 'Feature Suggestion' | 'Allocation Help';
  subject: string;
  message: string;
  rating: number;
  userRole: UserRole;
  createdAt: string;
  status: 'Received' | 'In Investigation' | 'Resolved';
}

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
  type: 'success' | 'info' | 'warning' | 'alert';
}
