import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  LayoutDashboard,
  User,
  FileText,
  Brain,
  SearchCode,
  GitFork,
  GraduationCap,
  Briefcase,
  Sparkles,
  Award,
  Bot,
  MessageSquare,
  Building2,
  Users,
  CheckCircle2,
  Compass,
  ArrowLeftRight,
  ShieldCheck
} from 'lucide-react';

interface SidebarProps {
  isOpenMobile: boolean;
  onCloseMobile: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpenMobile, onCloseMobile }) => {
  const { userRole, setUserRole, activeTab, setActiveTab, studentProfile, employerProfile } = useApp();

  const studentNavItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'profile', label: 'My Profile', icon: User },
    { id: 'resume-analyzer', label: 'Resume Analyzer', icon: FileText, badge: 'AI ATS' },
    { id: 'skills', label: 'My Skills', icon: Brain },
    { id: 'skill-gap', label: 'Skill Gap', icon: SearchCode },
    { id: 'career-paths', label: 'Career Paths', icon: GitFork },
    { id: 'learning', label: 'Learning Hub', icon: GraduationCap },
    { id: 'internships', label: 'Internships', icon: Briefcase },
    { id: 'matches', label: 'My Matches', icon: Sparkles, badge: '94%' },
    { id: 'allocation', label: 'Allocation Result', icon: Award, badge: 'Offer' },
    { id: 'ai-assistant', label: 'AI Assistant', icon: Bot, badge: 'Live' },
    { id: 'feedback', label: 'Feedback & Support', icon: MessageSquare }
  ];

  const employerNavItems = [
    { id: 'employer-dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'manage-internships', label: 'Post & Manage Roles', icon: Briefcase },
    { id: 'applicants-review', label: 'Applicants Review', icon: Users, badge: 'AI Scored' },
    { id: 'selections', label: 'Selections & Offers', icon: CheckCircle2 },
    { id: 'matched-students', label: 'Talent Discovery', icon: Compass },
    { id: 'company-profile', label: 'Company Profile', icon: Building2 },
    { id: 'feedback', label: 'Feedback & Helpdesk', icon: MessageSquare }
  ];

  const navItems = userRole === 'student' ? studentNavItems : employerNavItems;

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    onCloseMobile();
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpenMobile && (
        <div
          className="fixed inset-0 bg-on-surface/40 backdrop-blur-xs z-40 lg:hidden"
          onClick={onCloseMobile}
        />
      )}

      <aside
        className={`fixed top-0 left-0 bottom-0 w-64 bg-surface border-r border-outline-variant/60 flex flex-col z-50 transition-transform duration-300 lg:translate-x-0 ${
          isOpenMobile ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Brand Logo Header */}
        <div className="p-5 flex items-center justify-between border-b border-outline-variant/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-md shadow-primary/20">
              <span className="font-extrabold text-xl tracking-tight">YS</span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-lg text-primary tracking-tight">YuvaSarthi</span>
                <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-primary-fixed text-on-primary-fixed">
                  AI
                </span>
              </div>
              <p className="text-[11px] text-on-surface-variant font-medium">National Career Portal</p>
            </div>
          </div>
        </div>

        {/* Role Toggle Banner */}
        <div className="px-4 pt-3 pb-1">
          <div className="bg-surface-container-low p-2 rounded-xl border border-outline-variant/50">
            <div className="flex items-center justify-between mb-1.5 px-1">
              <span className="text-[11px] font-semibold text-on-surface-variant uppercase tracking-wider">
                Current View
              </span>
              <span className="text-[10px] font-bold px-1.5 py-0.2 rounded-full bg-emerald-100 text-emerald-800 flex items-center gap-1">
                <ShieldCheck className="w-3 h-3" /> Live
              </span>
            </div>
            <button
              onClick={() => setUserRole(userRole === 'student' ? 'employer' : 'student')}
              className="w-full flex items-center justify-center gap-2 py-2 px-3 bg-white hover:bg-surface-container rounded-lg border border-outline-variant/60 text-xs font-semibold text-primary shadow-xs transition-all hover:scale-[1.01] active:scale-[0.99]"
            >
              <ArrowLeftRight className="w-3.5 h-3.5 text-primary" />
              <span>Switch to {userRole === 'student' ? 'Employer' : 'Student'}</span>
            </button>
          </div>
        </div>

        {/* Navigation Items List */}
        <div className="flex-1 overflow-y-auto px-3 py-3 space-y-1">
          <div className="px-3 pb-1 text-[11px] font-bold text-outline uppercase tracking-wider">
            {userRole === 'student' ? 'Student Portal' : 'Employer Console'}
          </div>

          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;

            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all group ${
                  isActive
                    ? 'bg-primary-container text-white font-semibold shadow-sm shadow-primary/25'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon
                    className={`w-4 h-4 transition-colors ${
                      isActive ? 'text-white' : 'text-on-surface-variant group-hover:text-primary'
                    }`}
                  />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : 'bg-primary-fixed text-on-primary-fixed group-hover:bg-primary-container group-hover:text-white'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* User Card at Bottom */}
        <div className="p-3 border-t border-outline-variant/40 bg-surface-container-lowest">
          <div
            onClick={() => handleNavClick(userRole === 'student' ? 'profile' : 'company-profile')}
            className="flex items-center gap-3 p-2 rounded-xl hover:bg-surface-container transition-colors cursor-pointer"
          >
            <img
              src={userRole === 'student' ? studentProfile.avatar : employerProfile.logo}
              alt={userRole === 'student' ? studentProfile.name : employerProfile.name}
              className="w-9 h-9 rounded-full object-cover border border-outline-variant"
            />
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold text-on-surface truncate">
                {userRole === 'student' ? studentProfile.name : employerProfile.name}
              </p>
              <p className="text-[11px] text-on-surface-variant truncate">
                {userRole === 'student' ? studentProfile.title : employerProfile.industry}
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
