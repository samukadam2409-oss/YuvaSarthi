import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  Sparkles,
  TrendingUp,
  Award,
  Briefcase,
  FileCheck2,
  Calendar,
  ArrowRight,
  CheckCircle2,
  Clock,
  ChevronRight,
  Zap,
  Building,
  MapPin,
  Flame
} from 'lucide-react';

export const StudentDashboard: React.FC = () => {
  const {
    studentProfile,
    internships,
    applications,
    setActiveTab,
    applyToInternship,
    savedInternshipIds,
    toggleSaveInternship,
    allocation
  } = useApp();

  const topMatches = internships.slice(0, 3);
  const activeApplications = applications.slice(0, 3);

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Top Welcome Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary-container to-secondary text-white p-6 sm:p-8 shadow-xl shadow-primary/10">
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 -mb-12 w-48 h-48 bg-secondary-container/20 rounded-full blur-xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
              <span>Smart India Career Allocation 2026</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Welcome back, {studentProfile.name}! 👋
            </h2>
            <p className="text-sm text-primary-fixed leading-relaxed">
              Your profile is <strong className="text-white">88% career ready</strong>. You have 1 verified allotment offer from ISRO and 2 active internship reviews in progress.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => setActiveTab('allocation')}
                className="px-4 py-2 bg-white text-primary font-bold text-xs rounded-xl shadow-md hover:bg-surface-container transition-all flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Award className="w-4 h-4 text-primary" />
                <span>View Allotment Letter</span>
              </button>
              <button
                onClick={() => setActiveTab('resume-analyzer')}
                className="px-4 py-2 bg-white/15 hover:bg-white/25 text-white font-semibold text-xs rounded-xl backdrop-blur-md border border-white/20 transition-all flex items-center gap-2"
              >
                <FileCheck2 className="w-4 h-4" />
                <span>Optimize Resume (ATS: 89)</span>
              </button>
            </div>
          </div>

          {/* Readiness Score Widget */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 shrink-0 flex items-center gap-5">
            <div className="relative w-20 h-20 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                <path
                  className="text-white/20"
                  strokeWidth="3.5"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="text-emerald-300"
                  strokeDasharray="88, 100"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="text-xl font-black text-white">88%</span>
                <span className="text-[9px] uppercase tracking-wider text-white/80">Ready</span>
              </div>
            </div>
            <div className="space-y-1">
              <span className="text-xs font-semibold text-white/90">AI Readiness Level</span>
              <div className="text-[11px] text-white/70">Top 5% in {studentProfile.branch}</div>
              <button
                onClick={() => setActiveTab('skill-gap')}
                className="text-[11px] font-bold text-white underline hover:text-yellow-200 block pt-1"
              >
                View Skill Gaps →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Metric KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div
          onClick={() => setActiveTab('matches')}
          className="bg-white p-5 rounded-2xl border border-outline-variant/60 shadow-soft hover:shadow-card transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-on-surface-variant">Top Match Fit</span>
            <div className="w-9 h-9 rounded-xl bg-primary-fixed text-on-primary-fixed flex items-center justify-center group-hover:scale-110 transition-transform">
              <Sparkles className="w-4 h-4 text-primary" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-2xl font-black text-on-surface">94%</span>
            <span className="text-xs font-semibold text-emerald-600 flex items-center">
              <TrendingUp className="w-3.5 h-3.5 mr-0.5" /> High Affinity
            </span>
          </div>
          <p className="text-[11px] text-on-surface-variant mt-1">ISRO & Tata Digital matching</p>
        </div>

        <div
          onClick={() => setActiveTab('internships')}
          className="bg-white p-5 rounded-2xl border border-outline-variant/60 shadow-soft hover:shadow-card transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-on-surface-variant">Active Applications</span>
            <div className="w-9 h-9 rounded-xl bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center group-hover:scale-110 transition-transform">
              <Briefcase className="w-4 h-4 text-secondary" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-2xl font-black text-on-surface">{applications.length}</span>
            <span className="text-xs font-semibold text-primary">In Pipeline</span>
          </div>
          <p className="text-[11px] text-on-surface-variant mt-1">1 selected, 1 shortlisted</p>
        </div>

        <div
          onClick={() => setActiveTab('skills')}
          className="bg-white p-5 rounded-2xl border border-outline-variant/60 shadow-soft hover:shadow-card transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-on-surface-variant">Verified Skills</span>
            <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center group-hover:scale-110 transition-transform">
              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-2xl font-black text-on-surface">{studentProfile.skills.length}</span>
            <span className="text-xs font-semibold text-emerald-600">3 Badges</span>
          </div>
          <p className="text-[11px] text-on-surface-variant mt-1">React, Python, PyTorch verified</p>
        </div>

        <div
          onClick={() => setActiveTab('allocation')}
          className="bg-white p-5 rounded-2xl border border-outline-variant/60 shadow-soft hover:shadow-card transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-on-surface-variant">National Allocation</span>
            <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Award className="w-4 h-4 text-amber-700" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-2xl font-black text-emerald-700">ISRO Allotted</span>
          </div>
          <p className="text-[11px] text-on-surface-variant mt-1">Reporting on 01 Apr 2026</p>
        </div>
      </div>

      {/* Main Grid: Recommended Internships & Application Tracker */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: AI Recommended Internships */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-on-surface tracking-tight flex items-center gap-2">
                <Flame className="w-4 h-4 text-amber-500" />
                <span>AI Recommended Opportunities</span>
              </h3>
              <p className="text-xs text-on-surface-variant">Matched automatically with your skills and CGPA</p>
            </div>
            <button
              onClick={() => setActiveTab('internships')}
              className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
            >
              <span>View All ({internships.length})</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-3">
            {topMatches.map((internship) => {
              const isApplied = applications.some((a) => a.internshipId === internship.id);
              const isSaved = savedInternshipIds.includes(internship.id);

              return (
                <div
                  key={internship.id}
                  className="bg-white p-5 rounded-2xl border border-outline-variant/60 shadow-soft hover:shadow-card hover:border-primary/30 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
                >
                  <div className="flex items-start gap-4">
                    <img
                      src={internship.companyLogo}
                      alt={internship.company}
                      className="w-12 h-12 rounded-xl object-cover border border-outline-variant/40 shrink-0"
                    />
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="font-bold text-sm text-on-surface group-hover:text-primary transition-colors">
                          {internship.title}
                        </h4>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                          {internship.matchScore}% Match
                        </span>
                      </div>
                      <p className="text-xs text-on-surface-variant flex items-center gap-3">
                        <span className="font-medium text-on-surface">{internship.company}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-outline" /> {internship.location}
                        </span>
                        <span>•</span>
                        <span className="font-semibold text-primary">{internship.stipend}</span>
                      </p>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {internship.skillsRequired.slice(0, 4).map((skill) => (
                          <span
                            key={skill}
                            className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-surface-container text-on-surface-variant"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-2 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-outline-variant/30">
                    <span className="text-[11px] text-outline flex items-center gap-1">
                      <Clock className="w-3 h-3" /> Due {internship.deadline}
                    </span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => toggleSaveInternship(internship.id)}
                        className={`p-2 rounded-xl border text-xs transition-colors ${
                          isSaved
                            ? 'bg-primary-fixed border-primary text-on-primary-fixed'
                            : 'border-outline-variant hover:bg-surface-container text-on-surface-variant'
                        }`}
                        title={isSaved ? 'Saved' : 'Save opportunity'}
                      >
                        <Zap className={`w-3.5 h-3.5 ${isSaved ? 'fill-primary' : ''}`} />
                      </button>
                      <button
                        disabled={isApplied}
                        onClick={() => applyToInternship(internship.id)}
                        className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-xs ${
                          isApplied
                            ? 'bg-surface-container text-on-surface-variant cursor-not-allowed'
                            : 'bg-primary hover:bg-primary-container text-white hover:shadow-md hover:scale-[1.02]'
                        }`}
                      >
                        {isApplied ? 'Applied' : '1-Click Apply'}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Col: Applications Timeline & Quick AI Tools */}
        <div className="space-y-6">
          {/* Applications Tracker */}
          <div className="bg-white p-5 rounded-2xl border border-outline-variant/60 shadow-soft space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-outline-variant/30">
              <h3 className="font-bold text-sm text-on-surface flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-primary" />
                <span>Application Tracker</span>
              </h3>
              <span className="text-xs font-semibold text-primary">{applications.length} Active</span>
            </div>

            <div className="space-y-3">
              {activeApplications.map((app) => (
                <div
                  key={app.id}
                  className="p-3 rounded-xl bg-surface-container-lowest border border-outline-variant/40 space-y-2"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h5 className="text-xs font-bold text-on-surface line-clamp-1">{app.internshipTitle}</h5>
                      <p className="text-[11px] text-on-surface-variant">{app.company}</p>
                    </div>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 ${
                        app.status === 'Selected'
                          ? 'bg-emerald-100 text-emerald-800'
                          : app.status === 'AI Shortlisted'
                          ? 'bg-primary-fixed text-on-primary-fixed'
                          : 'bg-amber-100 text-amber-800'
                      }`}
                    >
                      {app.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-outline pt-1 border-t border-outline-variant/20">
                    <span>Applied on {app.appliedDate}</span>
                    <span className="font-semibold text-primary">{app.aiMatchScore}% Score</span>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setActiveTab('internships')}
              className="w-full py-2 bg-surface-container hover:bg-surface-container-high text-on-surface font-semibold text-xs rounded-xl transition-colors text-center block"
            >
              Explore More Internships
            </button>
          </div>

          {/* Quick AI Career Assistant Card */}
          <div className="bg-gradient-to-br from-surface-container-low to-surface-container p-5 rounded-2xl border border-primary/20 space-y-3">
            <div className="flex items-center gap-2 text-primary font-bold text-sm">
              <Sparkles className="w-4 h-4" />
              <span>AI Career Assistant</span>
            </div>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Have doubts about interview preparation, resume formatting, or selecting career domains? Chat with our national career AI.
            </p>
            <button
              onClick={() => setActiveTab('ai-assistant')}
              className="w-full py-2.5 bg-primary hover:bg-primary-container text-white text-xs font-bold rounded-xl shadow-sm transition-all flex items-center justify-center gap-2"
            >
              <span>Launch AI Assistant</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
