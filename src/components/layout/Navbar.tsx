import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Menu,
  Search,
  Bell,
  Sparkles,
  Bot,
  ArrowLeftRight,
  CheckCircle,
  ExternalLink,
  X
} from 'lucide-react';

interface NavbarProps {
  onOpenMobile: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenMobile }) => {
  const {
    userRole,
    setUserRole,
    activeTab,
    setActiveTab,
    notifications,
    markNotificationAsRead,
    markAllNotificationsAsRead,
    searchQuery,
    setSearchQuery,
    studentProfile,
    employerProfile
  } = useApp();

  const [showNotifications, setShowNotifications] = useState(false);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const getPageTitle = () => {
    switch (activeTab) {
      case 'dashboard': return 'Student Career Dashboard';
      case 'profile': return 'My Academic & Skills Profile';
      case 'resume-analyzer': return 'AI Resume & ATS Analyzer';
      case 'skills': return 'My Skills & Competencies';
      case 'skill-gap': return 'Target Role Skill Gap Analysis';
      case 'career-paths': return 'AI Career Path Recommendations';
      case 'learning': return 'Learning Hub & Courses';
      case 'internships': return 'Explore National Internships';
      case 'matches': return 'AI Smart Career Matches';
      case 'allocation': return 'Official Internship Allocation';
      case 'ai-assistant': return 'YuvaSarthi AI Career Assistant';
      case 'feedback': return 'Feedback & Support Desk';
      case 'employer-dashboard': return 'Enterprise Recruiter Console';
      case 'manage-internships': return 'Post & Manage Opportunities';
      case 'applicants-review': return 'Applicant Pipeline & AI Screening';
      case 'selections': return 'Candidate Selections & Allotments';
      case 'matched-students': return 'AI Talent Discovery Matrix';
      case 'company-profile': return 'Company Organization Profile';
      default: return 'YuvaSarthi Platform';
    }
  };

  return (
    <header className="sticky top-0 right-0 z-30 bg-surface/90 backdrop-blur-md border-b border-outline-variant/40 h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8">
      {/* Left: Mobile Toggle & Page Title */}
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenMobile}
          className="lg:hidden p-2 rounded-xl text-on-surface-variant hover:bg-surface-container transition-colors"
          aria-label="Open menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div>
          <h1 className="text-base sm:text-lg font-bold text-on-surface tracking-tight flex items-center gap-2">
            <span>{getPageTitle()}</span>
            <span className="hidden sm:inline-block text-[11px] font-semibold px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant border border-outline-variant/50">
              {userRole === 'student' ? 'Student Portal' : 'Employer Portal'}
            </span>
          </h1>
        </div>
      </div>

      {/* Right: Search, AI Quick Trigger, Notifications & Profile */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Search Bar */}
        <div className="relative hidden md:block">
          <Search className="w-4 h-4 text-on-surface-variant absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={userRole === 'student' ? 'Search internships, skills, courses...' : 'Search applicants, roles, skills...'}
            className="w-56 lg:w-72 h-9 pl-9 pr-3 rounded-full bg-surface-container-lowest border border-outline-variant/60 text-xs text-on-surface placeholder:text-outline focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* AI Quick Button */}
        {userRole === 'student' && (
          <button
            onClick={() => setActiveTab('ai-assistant')}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-primary to-secondary text-white rounded-full text-xs font-semibold shadow-xs hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Ask AI</span>
          </button>
        )}

        {/* Quick Role Switcher Button */}
        <button
          onClick={() => setUserRole(userRole === 'student' ? 'employer' : 'student')}
          className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-surface-container-lowest hover:bg-surface-container border border-outline-variant/60 text-on-surface-variant hover:text-primary rounded-full text-xs font-semibold transition-all"
          title="Switch User Role"
        >
          <ArrowLeftRight className="w-3.5 h-3.5 text-primary" />
          <span className="text-[11px]">
            {userRole === 'student' ? 'Switch to Employer' : 'Switch to Student'}
          </span>
        </button>

        {/* Notifications Trigger */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative w-9 h-9 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container transition-colors"
            aria-label="Notifications"
          >
            <Bell className="w-4 h-4" />
            {unreadCount > 0 && (
              <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 rounded-full ring-2 ring-surface" />
            )}
          </button>

          {/* Notifications Dropdown Panel */}
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-2xl border border-outline-variant shadow-xl p-4 z-50">
              <div className="flex items-center justify-between pb-3 border-b border-outline-variant/40">
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-sm text-on-surface">Notifications</h3>
                  {unreadCount > 0 && (
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed">
                      {unreadCount} new
                    </span>
                  )}
                </div>
                {unreadCount > 0 && (
                  <button
                    onClick={markAllNotificationsAsRead}
                    className="text-xs text-primary font-semibold hover:underline"
                  >
                    Mark all read
                  </button>
                )}
              </div>

              <div className="mt-3 space-y-2.5 max-h-72 overflow-y-auto">
                {notifications.length === 0 ? (
                  <p className="text-xs text-on-surface-variant text-center py-4">No notifications yet.</p>
                ) : (
                  notifications.map((n) => (
                    <div
                      key={n.id}
                      onClick={() => markNotificationAsRead(n.id)}
                      className={`p-3 rounded-xl border text-xs cursor-pointer transition-all ${
                        n.read
                          ? 'bg-surface-container-lowest border-outline-variant/30 text-on-surface-variant opacity-75'
                          : 'bg-primary-fixed/20 border-primary/20 text-on-surface'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-semibold text-xs text-on-surface">{n.title}</h4>
                        <span className="text-[10px] text-outline shrink-0">{n.time}</span>
                      </div>
                      <p className="text-[11px] text-on-surface-variant mt-1 leading-relaxed">
                        {n.message}
                      </p>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>

        {/* User Profile Avatar */}
        <div
          onClick={() => setActiveTab(userRole === 'student' ? 'profile' : 'company-profile')}
          className="flex items-center gap-2 pl-2 cursor-pointer group"
        >
          <img
            src={userRole === 'student' ? studentProfile.avatar : employerProfile.logo}
            alt="Profile Avatar"
            className="w-8 h-8 rounded-full object-cover ring-2 ring-primary/20 group-hover:ring-primary transition-all"
          />
        </div>
      </div>
    </header>
  );
};
