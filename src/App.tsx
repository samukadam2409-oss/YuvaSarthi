import React from 'react';
import { AppProvider, useApp } from './context/AppContext';

// Authentication
import { AuthPage } from './pages/auth/AuthPage';

// Main application layout
import { AppLayout } from './components/layout/AppLayout';

// Student Pages
import { StudentDashboard } from './pages/student/StudentDashboard';
import { ResumeAnalyzer } from './pages/student/ResumeAnalyzer';
import { SkillsProfile } from './pages/student/SkillsProfile';
import { SkillGapAnalysis } from './pages/student/SkillGapAnalysis';
import { CareerPaths } from './pages/student/CareerPaths';
import { LearningHub } from './pages/student/LearningHub';
import { InternshipsPortal } from './pages/student/InternshipsPortal';
import { MyMatches } from './pages/student/MyMatches';
import { AllocationResult } from './pages/student/AllocationResult';
import { AICareerAssistant } from './pages/student/AICareerAssistant';
import { StudentProfile } from './pages/student/StudentProfile';
import { FeedbackPortal } from './pages/student/FeedbackPortal';

// Employer Pages
import { CompanyDashboard } from './pages/employer/CompanyDashboard';
import { ManageInternships } from './pages/employer/ManageInternships';
import { ApplicantsReview } from './pages/employer/ApplicantsReview';
import { SelectionsPortal } from './pages/employer/SelectionsPortal';
import { MatchedStudentsPortal } from './pages/employer/MatchedStudentsPortal';
import { CompanyProfile } from './pages/employer/CompanyProfile';

const AppContent: React.FC = () => {
  const {
    isAuthenticated,
    userRole,
    activeTab,
  } = useApp();

  /*
   * ----------------------------------------
   * AUTHENTICATION GATE
   * ----------------------------------------
   *
   * If the user is not authenticated,
   * don't show the dashboard.
   *
   * Show the authentication experience
   * instead.
   */

  if (!isAuthenticated) {
    return <AuthPage />;
  }

  /*
   * ----------------------------------------
   * AUTHENTICATED APPLICATION
   * ----------------------------------------
   */

  const renderActiveView = () => {
    if (userRole === 'student') {
      switch (activeTab) {
        case 'dashboard':
          return <StudentDashboard />;

        case 'profile':
          return <StudentProfile />;

        case 'resume-analyzer':
          return <ResumeAnalyzer />;

        case 'skills':
          return <SkillsProfile />;

        case 'skill-gap':
          return <SkillGapAnalysis />;

        case 'career-paths':
          return <CareerPaths />;

        case 'learning':
          return <LearningHub />;

        case 'internships':
          return <InternshipsPortal />;

        case 'matches':
          return <MyMatches />;

        case 'allocation':
          return <AllocationResult />;

        case 'ai-assistant':
          return <AICareerAssistant />;

        case 'feedback':
          return <FeedbackPortal />;

        default:
          return <StudentDashboard />;
      }
    }

    switch (activeTab) {
      case 'employer-dashboard':
        return <CompanyDashboard />;

      case 'manage-internships':
        return <ManageInternships />;

      case 'applicants-review':
        return <ApplicantsReview />;

      case 'selections':
        return <SelectionsPortal />;

      case 'matched-students':
        return <MatchedStudentsPortal />;

      case 'company-profile':
        return <CompanyProfile />;

      case 'feedback':
        return <FeedbackPortal />;

      default:
        return <CompanyDashboard />;
    }
  };

  return (
    <AppLayout>
      {renderActiveView()}
    </AppLayout>
  );
};

export function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;
