import React, { createContext, useContext, useState, useEffect } from 'react';

import {
  UserRole,
  AuthView,
  StudentProfile,
  EmployerProfile,
  Internship,
  Application,
  ResumeAnalysisResult,
  SkillGapItem,
  Course,
  CareerPath,
  AllocationResultData,
  NotificationItem,
  FeedbackItem
} from '../types';

import {
  INITIAL_STUDENT_PROFILE,
  INITIAL_EMPLOYER_PROFILE,
  MOCK_INTERNSHIPS,
  MOCK_APPLICATIONS,
  MOCK_RESUME_ANALYSIS,
  MOCK_SKILL_GAPS,
  MOCK_COURSES,
  MOCK_CAREER_PATHS,
  MOCK_ALLOCATION,
  INITIAL_NOTIFICATIONS
} from '../data/mockData';

export interface ToastNotification {
  id: string;
  title: string;
  message: string;
  type: 'success' | 'info' | 'error' | 'warning';
}

interface AppContextType {
  // ==========================================
  // AUTHENTICATION
  // ==========================================
  isAuthenticated: boolean;
  authView: AuthView;
  setAuthView: (view: AuthView) => void;
  login: (role: UserRole) => void;
  logout: () => void;

  // ==========================================
  // USER ROLE & NAVIGATION
  // ==========================================
  userRole: UserRole;
  setUserRole: (role: UserRole) => void;

  activeTab: string;
  setActiveTab: (tab: string) => void;

  // ==========================================
  // STUDENT PROFILE
  // ==========================================
  studentProfile: StudentProfile;
  updateStudentProfile: (updates: Partial<StudentProfile>) => void;

  // ==========================================
  // EMPLOYER PROFILE
  // ==========================================
  employerProfile: EmployerProfile;
  updateEmployerProfile: (updates: Partial<EmployerProfile>) => void;

  // ==========================================
  // INTERNSHIPS
  // ==========================================
  internships: Internship[];
  addInternship: (
    internship: Omit<Internship, 'id' | 'postedDate' | 'applicantsCount'>
  ) => void;

  savedInternshipIds: string[];
  toggleSaveInternship: (id: string) => void;

  // ==========================================
  // APPLICATIONS
  // ==========================================
  applications: Application[];
  applyToInternship: (
    internshipId: string,
    coverNote?: string
  ) => boolean;

  updateApplicationStatus: (
    appId: string,
    status: Application['status']
  ) => void;

  // ==========================================
  // RESUME
  // ==========================================
  resumeAnalysis: ResumeAnalysisResult;
  analyzeResumeText: (text: string) => void;

  // ==========================================
  // SKILLS & LEARNING
  // ==========================================
  skillGaps: SkillGapItem[];
  courses: Course[];
  enrollInCourse: (courseId: string) => void;

  // ==========================================
  // CAREER
  // ==========================================
  careerPaths: CareerPath[];

  // ==========================================
  // ALLOCATION
  // ==========================================
  allocation: AllocationResultData;

  // ==========================================
  // NOTIFICATIONS
  // ==========================================
  notifications: NotificationItem[];
  markNotificationAsRead: (id: string) => void;
  markAllNotificationsAsRead: () => void;

  // ==========================================
  // FEEDBACK
  // ==========================================
  feedbackList: FeedbackItem[];
  submitFeedback: (
    feedback: Omit<
      FeedbackItem,
      'id' | 'createdAt' | 'status'
    >
  ) => void;

  // ==========================================
  // TOASTS
  // ==========================================
  toasts: ToastNotification[];
  showToast: (
    title: string,
    message: string,
    type?: ToastNotification['type']
  ) => void;

  removeToast: (id: string) => void;

  // ==========================================
  // SEARCH
  // ==========================================
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(
  undefined
);

export const AppProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  // ==========================================
  // AUTHENTICATION STATE
  // ==========================================

  const [isAuthenticated, setIsAuthenticated] =
    useState<boolean>(() => {
      return (
        localStorage.getItem('yuvasarthi_authenticated') ===
        'true'
      );
    });

  const [authView, setAuthView] =
    useState<AuthView>('welcome');

  // ==========================================
  // USER ROLE
  // ==========================================

  const [userRole, setUserRoleState] =
    useState<UserRole>(() => {
      return (
        (localStorage.getItem(
          'yuvasarthi_role'
        ) as UserRole) || 'student'
      );
    });

  // ==========================================
  // ACTIVE TAB
  // ==========================================

  const [activeTab, setActiveTabState] =
    useState<string>(() => {
      return (
        localStorage.getItem('yuvasarthi_tab') ||
        'dashboard'
      );
    });

  // ==========================================
  // STUDENT PROFILE
  // ==========================================

  const [studentProfile, setStudentProfile] =
    useState<StudentProfile>(() => {
      const saved = localStorage.getItem(
        'yuvasarthi_student_profile'
      );

      return saved
        ? JSON.parse(saved)
        : INITIAL_STUDENT_PROFILE;
    });

  // ==========================================
  // EMPLOYER PROFILE
  // ==========================================

  const [employerProfile, setEmployerProfile] =
    useState<EmployerProfile>(() => {
      const saved = localStorage.getItem(
        'yuvasarthi_employer_profile'
      );

      return saved
        ? JSON.parse(saved)
        : INITIAL_EMPLOYER_PROFILE;
    });

  // ==========================================
  // INTERNSHIPS
  // ==========================================

  const [internships, setInternships] =
    useState<Internship[]>(() => {
      const saved = localStorage.getItem(
        'yuvasarthi_internships'
      );

      return saved
        ? JSON.parse(saved)
        : MOCK_INTERNSHIPS;
    });

  // ==========================================
  // SAVED INTERNSHIPS
  // ==========================================

  const [savedInternshipIds, setSavedInternshipIds] =
    useState<string[]>(() => {
      const saved = localStorage.getItem(
        'yuvasarthi_saved_internships'
      );

      return saved
        ? JSON.parse(saved)
        : ['INT-ISRO-2026'];
    });

  // ==========================================
  // APPLICATIONS
  // ==========================================

  const [applications, setApplications] =
    useState<Application[]>(() => {
      const saved = localStorage.getItem(
        'yuvasarthi_applications'
      );

      return saved
        ? JSON.parse(saved)
        : MOCK_APPLICATIONS;
    });

  // ==========================================
  // RESUME / SKILLS / COURSES / CAREER
  // ==========================================

  const [resumeAnalysis, setResumeAnalysis] =
    useState<ResumeAnalysisResult>(
      MOCK_RESUME_ANALYSIS
    );

  const [skillGaps] =
    useState<SkillGapItem[]>(MOCK_SKILL_GAPS);

  const [courses, setCourses] =
    useState<Course[]>(MOCK_COURSES);

  const [careerPaths] =
    useState<CareerPath[]>(MOCK_CAREER_PATHS);

  const [allocation] =
    useState<AllocationResultData>(
      MOCK_ALLOCATION
    );

  // ==========================================
  // NOTIFICATIONS
  // ==========================================

  const [notifications, setNotifications] =
    useState<NotificationItem[]>(
      INITIAL_NOTIFICATIONS
    );

  // ==========================================
  // FEEDBACK
  // ==========================================

  const [feedbackList, setFeedbackList] =
    useState<FeedbackItem[]>([]);

  // ==========================================
  // TOASTS
  // ==========================================

  const [toasts, setToasts] =
    useState<ToastNotification[]>([]);

  // ==========================================
  // SEARCH
  // ==========================================

  const [searchQuery, setSearchQuery] =
    useState('');

  // ==========================================
  // PERSIST AUTHENTICATION
  // ==========================================

  useEffect(() => {
    localStorage.setItem(
      'yuvasarthi_authenticated',
      String(isAuthenticated)
    );
  }, [isAuthenticated]);

  // ==========================================
  // PERSIST USER ROLE
  // ==========================================

  useEffect(() => {
    localStorage.setItem(
      'yuvasarthi_role',
      userRole
    );
  }, [userRole]);

  // ==========================================
  // PERSIST ACTIVE TAB
  // ==========================================

  useEffect(() => {
    localStorage.setItem(
      'yuvasarthi_tab',
      activeTab
    );
  }, [activeTab]);

  // ==========================================
  // PERSIST STUDENT PROFILE
  // ==========================================

  useEffect(() => {
    localStorage.setItem(
      'yuvasarthi_student_profile',
      JSON.stringify(studentProfile)
    );
  }, [studentProfile]);

  // ==========================================
  // PERSIST EMPLOYER PROFILE
  // ==========================================

  useEffect(() => {
    localStorage.setItem(
      'yuvasarthi_employer_profile',
      JSON.stringify(employerProfile)
    );
  }, [employerProfile]);

  // ==========================================
  // PERSIST INTERNSHIPS
  // ==========================================

  useEffect(() => {
    localStorage.setItem(
      'yuvasarthi_internships',
      JSON.stringify(internships)
    );
  }, [internships]);

  // ==========================================
  // PERSIST SAVED INTERNSHIPS
  // ==========================================

  useEffect(() => {
    localStorage.setItem(
      'yuvasarthi_saved_internships',
      JSON.stringify(savedInternshipIds)
    );
  }, [savedInternshipIds]);

  // ==========================================
  // PERSIST APPLICATIONS
  // ==========================================

  useEffect(() => {
    localStorage.setItem(
      'yuvasarthi_applications',
      JSON.stringify(applications)
    );
  }, [applications]);

  // ==========================================
  // LOGIN
  // ==========================================

  const login = (role: UserRole) => {
    setUserRoleState(role);
    setIsAuthenticated(true);

    if (role === 'student') {
      setActiveTabState('dashboard');
    } else {
      setActiveTabState('employer-dashboard');
    }

    showToast(
      'Welcome back!',
      `Signed in as ${
        role === 'student'
          ? 'Student'
          : 'Employer'
      }`,
      'success'
    );
  };

  // ==========================================
  // LOGOUT
  // ==========================================

  const logout = () => {
    setIsAuthenticated(false);
    setAuthView('welcome');

    localStorage.removeItem(
      'yuvasarthi_authenticated'
    );

    localStorage.removeItem(
      'yuvasarthi_role'
    );

    localStorage.removeItem(
      'yuvasarthi_tab'
    );
  };

  // ==========================================
  // AUTH VIEW
  // ==========================================

  const handleSetAuthView = (
    view: AuthView
  ) => {
    setAuthView(view);
  };

  // ==========================================
  // LEGACY ROLE SETTER
  // ==========================================
  // Keep this temporarily because existing
  // dashboard components still use it.
  // We will remove the role-switch UI later.

  const setUserRole = (role: UserRole) => {
    setUserRoleState(role);

    if (role === 'student') {
      setActiveTabState('dashboard');
    } else {
      setActiveTabState(
        'employer-dashboard'
      );
    }
  };

  // ==========================================
  // ACTIVE TAB
  // ==========================================

  const setActiveTab = (tab: string) => {
    setActiveTabState(tab);

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // ==========================================
  // TOAST
  // ==========================================

  const showToast = (
    title: string,
    message: string,
    type: ToastNotification['type'] = 'info'
  ) => {
    const id =
      Date.now().toString() +
      Math.random().toString();

    const newToast = {
      id,
      title,
      message,
      type
    };

    setToasts((prev) => [
      ...prev,
      newToast
    ]);

    setTimeout(() => {
      removeToast(id);
    }, 4500);
  };

  const removeToast = (id: string) => {
    setToasts((prev) =>
      prev.filter(
        (toast) => toast.id !== id
      )
    );
  };

  // ==========================================
  // STUDENT PROFILE
  // ==========================================

  const updateStudentProfile = (
    updates: Partial<StudentProfile>
  ) => {
    setStudentProfile((prev) => ({
      ...prev,
      ...updates
    }));

    showToast(
      'Profile Updated',
      'Your profile details were successfully saved',
      'success'
    );
  };

  // ==========================================
  // EMPLOYER PROFILE
  // ==========================================

  const updateEmployerProfile = (
    updates: Partial<EmployerProfile>
  ) => {
    setEmployerProfile((prev) => ({
      ...prev,
      ...updates
    }));

    showToast(
      'Company Profile Saved',
      'Recruiter organization details updated',
      'success'
    );
  };

  // ==========================================
  // ADD INTERNSHIP
  // ==========================================

  const addInternship = (
    data: Omit<
      Internship,
      'id' | 'postedDate' | 'applicantsCount'
    >
  ) => {
    const newId = `INT-${Date.now()
      .toString()
      .slice(-4)}`;

    const newInternship: Internship = {
      ...data,
      id: newId,
      postedDate: 'Just now',
      applicantsCount: 0,
      matchScore:
        Math.floor(Math.random() * 15) + 85
    };

    setInternships((prev) => [
      newInternship,
      ...prev
    ]);

    showToast(
      'Internship Posted',
      `"${data.title}" is now active and accepting student applications`,
      'success'
    );
  };

  // ==========================================
  // SAVE INTERNSHIP
  // ==========================================

  const toggleSaveInternship = (
    id: string
  ) => {
    setSavedInternshipIds((prev) => {
      const exists = prev.includes(id);

      if (exists) {
        showToast(
          'Removed from Saved',
          'Opportunity removed from bookmarks',
          'info'
        );

        return prev.filter(
          (item) => item !== id
        );
      }

      showToast(
        'Saved to Bookmarks',
        'Opportunity added to your shortlist',
        'success'
      );

      return [...prev, id];
    });
  };

  // ==========================================
  // APPLY TO INTERNSHIP
  // ==========================================

  const applyToInternship = (
    internshipId: string,
    coverNote?: string
  ): boolean => {
    const alreadyApplied =
      applications.some(
        (app) =>
          app.internshipId ===
            internshipId &&
          app.studentId ===
            studentProfile.id
      );

    if (alreadyApplied) {
      showToast(
        'Already Applied',
        'You have already submitted an application for this role',
        'warning'
      );

      return false;
    }

    const internship =
      internships.find(
        (item) =>
          item.id === internshipId
      );

    if (!internship) {
      return false;
    }

    const newApp: Application = {
      id: `APP-${Date.now()
        .toString()
        .slice(-4)}`,

      internshipId,

      internshipTitle:
        internship.title,

      company:
        internship.company,

      companyLogo:
        internship.companyLogo,

      studentId:
        studentProfile.id,

      studentName:
        studentProfile.name,

      studentEmail:
        studentProfile.email,

      studentCollege:
        studentProfile.college,

      studentCgpa:
        studentProfile.cgpa,

      appliedDate:
        'Just now',

      status:
        'Applied',

      aiMatchScore:
        internship.matchScore || 92,

      matchHighlights: [
        'Skills matching: ' +
          internship.skillsRequired
            .slice(0, 3)
            .join(', '),

        'CGPA meets required threshold',

        'Relevant project portfolio attached'
      ],

      coverNote
    };

    setApplications((prev) => [
      newApp,
      ...prev
    ]);

    setInternships((prev) =>
      prev.map((item) =>
        item.id === internshipId
          ? {
              ...item,
              applicantsCount:
                item.applicantsCount + 1
            }
          : item
      )
    );

    showToast(
      'Application Submitted! 🚀',
      `Applied to ${internship.title} at ${internship.company}`,
      'success'
    );

    return true;
  };

  // ==========================================
  // UPDATE APPLICATION STATUS
  // ==========================================

  const updateApplicationStatus = (
    appId: string,
    status: Application['status']
  ) => {
    setApplications((prev) =>
      prev.map((app) =>
        app.id === appId
          ? {
              ...app,
              status
            }
          : app
      )
    );

    showToast(
      'Candidate Status Updated',
      `Application ${appId} moved to "${status}"`,
      'info'
    );
  };

  // ==========================================
  // RESUME ANALYSIS
  // ==========================================

  const analyzeResumeText = (
    text: string
  ) => {
    const wordCount =
      text.split(/\s+/).length;

    const hasNumbers =
      /\d+%|\d+x|\d+\+/.test(text);

    const hasKeywords =
      /react|python|ai|machine learning|typescript|docker|sql|cloud/i.test(
        text
      );

    let score = 75;

    if (wordCount > 150) {
      score += 8;
    }

    if (hasNumbers) {
      score += 6;
    }

    if (hasKeywords) {
      score += 5;
    }

    score = Math.min(score, 98);

    setResumeAnalysis((prev) => ({
      ...prev,

      overallScore: score,

      impactScore:
        Math.min(score + 3, 99),

      brevityScore:
        Math.max(score - 4, 70),

      styleScore:
        Math.min(score + 5, 96),

      keywordsScore:
        Math.min(score + 1, 95),

      summary:
        `Analyzed resume with ${wordCount} words. High technical density detected with verified keyword alignment for modern software & AI development positions.`
    }));

    showToast(
      'AI Resume Analysis Complete',
      `Your ATS Readiness Score is ${score}/100`,
      'success'
    );
  };

  // ==========================================
  // COURSE ENROLLMENT
  // ==========================================

  const enrollInCourse = (
    courseId: string
  ) => {
    setCourses((prev) =>
      prev.map((course) =>
        course.id === courseId
          ? {
              ...course,
              isEnrolled: true,
              progress:
                course.progress || 10
            }
          : course
      )
    );

    showToast(
      'Course Enrolled',
      'You have been enrolled in this training module',
      'success'
    );
  };

  // ==========================================
  // NOTIFICATIONS
  // ==========================================

  const markNotificationAsRead = (
    id: string
  ) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id
          ? {
              ...notification,
              read: true
            }
          : notification
      )
    );
  };

  const markAllNotificationsAsRead =
    () => {
      setNotifications((prev) =>
        prev.map((notification) => ({
          ...notification,
          read: true
        }))
      );

      showToast(
        'Notifications Marked Read',
        'All notifications are now cleared',
        'info'
      );
    };

  // ==========================================
  // FEEDBACK
  // ==========================================

  const submitFeedback = (
    feedback: Omit<
      FeedbackItem,
      'id' | 'createdAt' | 'status'
    >
  ) => {
    const newItem: FeedbackItem = {
      ...feedback,

      id: `FB-${Date.now()
        .toString()
        .slice(-4)}`,

      createdAt: 'Just now',

      status: 'Received'
    };

    setFeedbackList((prev) => [
      newItem,
      ...prev
    ]);

    showToast(
      'Feedback Submitted',
      'Thank you for helping us improve YuvaSarthi!',
      'success'
    );
  };

  // ==========================================
  // CONTEXT PROVIDER
  // ==========================================

  return (
    <AppContext.Provider
      value={{
        // Authentication
        isAuthenticated,
        authView,
        setAuthView:
          handleSetAuthView,
        login,
        logout,

        // User role
        userRole,
        setUserRole,

        // Navigation
        activeTab,
        setActiveTab,

        // Student
        studentProfile,
        updateStudentProfile,

        // Employer
        employerProfile,
        updateEmployerProfile,

        // Internships
        internships,
        addInternship,
        savedInternshipIds,
        toggleSaveInternship,

        // Applications
        applications,
        applyToInternship,
        updateApplicationStatus,

        // Resume
        resumeAnalysis,
        analyzeResumeText,

        // Skills
        skillGaps,

        // Courses
        courses,
        enrollInCourse,

        // Career
        careerPaths,

        // Allocation
        allocation,

        // Notifications
        notifications,
        markNotificationAsRead,
        markAllNotificationsAsRead,

        // Feedback
        feedbackList,
        submitFeedback,

        // Toasts
        toasts,
        showToast,
        removeToast,

        // Search
        searchQuery,
        setSearchQuery
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// ==========================================
// useApp HOOK
// ==========================================

export const useApp = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error(
      'useApp must be used within an AppProvider'
    );
  }

  return context;
};
