import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  Building2,
  Users,
  Briefcase,
  CheckCircle2,
  TrendingUp,
  Plus,
  ArrowRight,
  Sparkles,
  Clock,
  MapPin,
  ChevronRight,
  Filter,
  BarChart3
} from 'lucide-react';

export const CompanyDashboard: React.FC = () => {
  const {
    employerProfile,
    internships,
    applications,
    setActiveTab,
    updateApplicationStatus
  } = useApp();

  const totalApplicants = applications.length;
  const aiShortlisted = applications.filter((a) => a.status === 'AI Shortlisted').length;
  const selectedCandidates = applications.filter((a) => a.status === 'Selected').length;

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Top Welcome Banner */}
      <div className="bg-gradient-to-br from-primary via-primary-container to-secondary text-white p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-xs font-semibold">
            <Building2 className="w-3.5 h-3.5 text-yellow-300" />
            <span>Enterprise Recruiter Console</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            {employerProfile.name} 🏢
          </h2>
          <p className="text-xs sm:text-sm text-primary-fixed leading-relaxed">
            {employerProfile.tagline}. You have <strong className="text-white">{internships.length} active internship listings</strong> receiving real-time AI ranked applications.
          </p>
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={() => setActiveTab('manage-internships')}
              className="px-4 py-2 bg-white text-primary font-bold text-xs rounded-xl shadow-md hover:bg-surface-container transition-all flex items-center gap-2"
            >
              <Plus className="w-4 h-4 text-primary" />
              <span>Post New Role</span>
            </button>
            <button
              onClick={() => setActiveTab('applicants-review')}
              className="px-4 py-2 bg-white/15 hover:bg-white/25 text-white font-semibold text-xs rounded-xl backdrop-blur-md border border-white/20 transition-all flex items-center gap-2"
            >
              <Users className="w-4 h-4" />
              <span>Review Candidates ({applications.length})</span>
            </button>
          </div>
        </div>

        {/* Quick Funnel Mini-Card */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 shrink-0 space-y-2 min-w-[240px]">
          <span className="text-xs font-bold text-white uppercase tracking-wider">Recruitment Pace</span>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-black text-emerald-300">92%</span>
            <span className="text-xs text-white/80">AI Fit Accuracy</span>
          </div>
          <p className="text-[11px] text-white/70">Average response time: <strong>1.4 Days</strong></p>
        </div>
      </div>

      {/* 4 Recruiter KPI Counters */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div
          onClick={() => setActiveTab('manage-internships')}
          className="bg-white p-5 rounded-2xl border border-outline-variant/60 shadow-soft hover:shadow-card transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-on-surface-variant">Active Postings</span>
            <div className="w-9 h-9 rounded-xl bg-primary-fixed text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
              <Briefcase className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-2xl font-black text-on-surface">{internships.length}</span>
            <span className="text-xs font-semibold text-emerald-600">Open</span>
          </div>
          <p className="text-[11px] text-on-surface-variant mt-1">Across 4 technology tracks</p>
        </div>

        <div
          onClick={() => setActiveTab('applicants-review')}
          className="bg-white p-5 rounded-2xl border border-outline-variant/60 shadow-soft hover:shadow-card transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-on-surface-variant">Total Applications</span>
            <div className="w-9 h-9 rounded-xl bg-secondary-fixed text-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-2xl font-black text-on-surface">{totalApplicants}</span>
            <span className="text-xs font-semibold text-primary">+3 New Today</span>
          </div>
          <p className="text-[11px] text-on-surface-variant mt-1">From NITs, IITs & premier colleges</p>
        </div>

        <div
          onClick={() => setActiveTab('applicants-review')}
          className="bg-white p-5 rounded-2xl border border-outline-variant/60 shadow-soft hover:shadow-card transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-on-surface-variant">AI Shortlisted</span>
            <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Sparkles className="w-4 h-4 text-amber-600" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-2xl font-black text-on-surface">{aiShortlisted}</span>
            <span className="text-xs font-semibold text-amber-700">Top 10%</span>
          </div>
          <p className="text-[11px] text-on-surface-variant mt-1">ATS match score &gt; 90%</p>
        </div>

        <div
          onClick={() => setActiveTab('selections')}
          className="bg-white p-5 rounded-2xl border border-outline-variant/60 shadow-soft hover:shadow-card transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-on-surface-variant">Selected / Allotted</span>
            <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center group-hover:scale-110 transition-transform">
              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-2xl font-black text-emerald-700">{selectedCandidates}</span>
            <span className="text-xs font-semibold text-emerald-700">Offers Out</span>
          </div>
          <p className="text-[11px] text-on-surface-variant mt-1">Ready for verification</p>
        </div>
      </div>

      {/* Main Grid: Active Postings & Candidate Pipeline */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Active Postings */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-base text-on-surface flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-primary" />
              <span>Active Internship Opportunities</span>
            </h3>
            <button
              onClick={() => setActiveTab('manage-internships')}
              className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
            >
              <span>Manage Listings</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-3">
            {internships.map((job) => (
              <div
                key={job.id}
                className="bg-white p-5 rounded-2xl border border-outline-variant/60 shadow-soft hover:shadow-card transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-sm text-on-surface">{job.title}</h4>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                      {job.status}
                    </span>
                  </div>
                  <p className="text-xs text-on-surface-variant">
                    {job.category} • {job.workMode} • <strong className="text-primary">{job.stipend}</strong>
                  </p>
                  <p className="text-[11px] text-outline">
                    {job.openings} Openings • {job.applicantsCount} Total Applicants • Deadline: {job.deadline}
                  </p>
                </div>

                <button
                  onClick={() => setActiveTab('applicants-review')}
                  className="px-4 py-2 bg-surface-container hover:bg-surface-container-high text-on-surface rounded-xl text-xs font-bold border border-outline-variant/60 transition-all shrink-0"
                >
                  View Applicants
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Right Col: Recent Candidate Pipeline Activity */}
        <div className="space-y-6">
          <div className="bg-white p-5 rounded-3xl border border-outline-variant/60 shadow-soft space-y-4">
            <h3 className="font-bold text-sm text-on-surface flex items-center gap-2 border-b border-outline-variant/30 pb-3">
              <Users className="w-4 h-4 text-primary" />
              <span>Recent Applicant Stream</span>
            </h3>

            <div className="space-y-3">
              {applications.map((app) => (
                <div
                  key={app.id}
                  className="p-3 rounded-2xl bg-surface-container-lowest border border-outline-variant/40 space-y-2"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h5 className="text-xs font-bold text-on-surface">{app.studentName}</h5>
                      <p className="text-[11px] text-on-surface-variant">{app.studentCollege} (CGPA: {app.studentCgpa})</p>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                      {app.aiMatchScore}% Fit
                    </span>
                  </div>

                  <p className="text-[11px] text-outline line-clamp-1">{app.internshipTitle}</p>

                  <div className="flex items-center justify-between pt-1 border-t border-outline-variant/20">
                    <span className="text-[10px] font-semibold text-primary">{app.status}</span>
                    <button
                      onClick={() => setActiveTab('applicants-review')}
                      className="text-[10px] font-bold text-primary hover:underline"
                    >
                      Review Profile →
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setActiveTab('matched-students')}
              className="w-full py-2 bg-primary hover:bg-primary-container text-white text-xs font-bold rounded-xl shadow-xs transition-all text-center block"
            >
              Discover More Students (AI Matrix)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
