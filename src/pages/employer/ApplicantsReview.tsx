import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Application } from '../../types';
import {
  Users,
  Search,
  Filter,
  Sparkles,
  CheckCircle2,
  XCircle,
  Clock,
  Calendar,
  Award,
  ChevronRight,
  ExternalLink,
  MessageSquare,
  X,
  FileText
} from 'lucide-react';

export const ApplicantsReview: React.FC = () => {
  const { applications, updateApplicationStatus, showToast } = useApp();
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [searchFilter, setSearchFilter] = useState('');
  const [selectedCandidate, setSelectedCandidate] = useState<Application | null>(null);

  const statuses = ['All', 'Applied', 'AI Shortlisted', 'Interview', 'Selected', 'Rejected'];

  const filtered = applications.filter((app) => {
    const matchesStatus = selectedStatus === 'All' || app.status === selectedStatus;
    const matchesSearch =
      app.studentName.toLowerCase().includes(searchFilter.toLowerCase()) ||
      app.studentCollege.toLowerCase().includes(searchFilter.toLowerCase()) ||
      app.internshipTitle.toLowerCase().includes(searchFilter.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const handleStatusChange = (appId: string, newStatus: Application['status']) => {
    updateApplicationStatus(appId, newStatus);
    if (selectedCandidate && selectedCandidate.id === appId) {
      setSelectedCandidate({ ...selectedCandidate, status: newStatus });
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header Banner */}
      <div className="bg-white p-6 rounded-3xl border border-outline-variant/60 shadow-soft flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-primary-fixed text-primary">
              <Users className="w-5 h-5" />
            </span>
            <h2 className="text-xl font-bold text-on-surface">Applicant Review & AI Screening Pipeline</h2>
          </div>
          <p className="text-xs text-on-surface-variant mt-1">
            Review AI ranked candidate profiles, inspect verified ATS match breakdown, and update hiring stages.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-bold text-primary bg-primary-fixed/50 px-3 py-1.5 rounded-xl">
          <Sparkles className="w-4 h-4" />
          <span>{applications.length} Total Applicants In Queue</span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Status Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
          {statuses.map((st) => (
            <button
              key={st}
              onClick={() => setSelectedStatus(st)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedStatus === st
                  ? 'bg-primary text-white shadow-xs'
                  : 'bg-white text-on-surface-variant hover:bg-surface-container border border-outline-variant/60'
              }`}
            >
              {st}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-outline absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
            placeholder="Search by student name, college..."
            className="w-full h-9 pl-9 pr-3 rounded-full bg-white border border-outline-variant text-xs text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
          />
        </div>
      </div>

      {/* Applicants List */}
      <div className="space-y-4">
        {filtered.length === 0 ? (
          <div className="bg-white p-12 rounded-3xl border border-outline-variant/60 text-center space-y-3">
            <Users className="w-10 h-10 text-outline mx-auto" />
            <h4 className="font-bold text-sm text-on-surface">No applicants match this filter</h4>
            <button
              onClick={() => {
                setSelectedStatus('All');
                setSearchFilter('');
              }}
              className="px-4 py-2 bg-primary text-white text-xs font-bold rounded-xl"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          filtered.map((app) => (
            <div
              key={app.id}
              className="bg-white p-6 rounded-3xl border border-outline-variant/60 shadow-soft hover:shadow-card transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-5 group"
            >
              <div className="space-y-2 flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-bold text-base text-on-surface group-hover:text-primary transition-colors">
                    {app.studentName}
                  </h3>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-emerald-600" />
                    {app.aiMatchScore}% AI Fit
                  </span>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      app.status === 'Selected'
                        ? 'bg-emerald-100 text-emerald-800'
                        : app.status === 'AI Shortlisted'
                        ? 'bg-primary-fixed text-on-primary-fixed'
                        : app.status === 'Rejected'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-amber-100 text-amber-800'
                    }`}
                  >
                    {app.status}
                  </span>
                </div>

                <p className="text-xs text-on-surface-variant flex flex-wrap items-center gap-2">
                  <span className="font-semibold text-on-surface">{app.studentCollege}</span>
                  <span>•</span>
                  <span>CGPA: <strong>{app.studentCgpa}</strong></span>
                  <span>•</span>
                  <span className="text-primary font-medium">Applied for: {app.internshipTitle}</span>
                  <span>•</span>
                  <span className="text-outline">Applied {app.appliedDate}</span>
                </p>

                {/* Match Highlights */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {app.matchHighlights.map((hl, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-surface-container text-on-surface-variant"
                    >
                      ✓ {hl}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2 shrink-0 pt-3 lg:pt-0 border-t lg:border-t-0 border-outline-variant/30">
                <button
                  onClick={() => setSelectedCandidate(app)}
                  className="px-3.5 py-2 bg-surface-container hover:bg-surface-container-high text-on-surface rounded-xl text-xs font-semibold border border-outline-variant/60 transition-all"
                >
                  View Profile
                </button>

                {app.status !== 'AI Shortlisted' && (
                  <button
                    onClick={() => handleStatusChange(app.id, 'AI Shortlisted')}
                    className="px-3.5 py-2 bg-primary-fixed hover:bg-primary-fixed-dim text-on-primary-fixed rounded-xl text-xs font-bold transition-all"
                  >
                    Shortlist
                  </button>
                )}

                {app.status !== 'Selected' && (
                  <button
                    onClick={() => handleStatusChange(app.id, 'Selected')}
                    className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-xs transition-all flex items-center gap-1"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Select Candidate</span>
                  </button>
                )}

                {app.status !== 'Rejected' && (
                  <button
                    onClick={() => handleStatusChange(app.id, 'Rejected')}
                    className="p-2 hover:bg-red-50 text-outline hover:text-red-600 rounded-xl transition-colors"
                    title="Reject Application"
                  >
                    <XCircle className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Candidate Drawer / Details Modal */}
      {selectedCandidate && (
        <div className="fixed inset-0 bg-on-surface/40 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-fadeIn">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-xl w-full border border-outline-variant shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between pb-3 border-b border-outline-variant/40">
              <div>
                <h3 className="text-lg font-bold text-on-surface">{selectedCandidate.studentName}</h3>
                <p className="text-xs text-on-surface-variant">
                  {selectedCandidate.studentCollege} • CGPA: {selectedCandidate.studentCgpa}
                </p>
                <p className="text-xs font-semibold text-primary mt-0.5">
                  Applied for: {selectedCandidate.internshipTitle}
                </p>
              </div>
              <button onClick={() => setSelectedCandidate(null)} className="text-outline hover:text-on-surface">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* AI Fit Radar Card */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-primary-fixed/30 to-secondary-fixed/30 border border-primary/20 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-primary flex items-center gap-1">
                  <Sparkles className="w-4 h-4" /> AI Candidate Match Score
                </span>
                <span className="text-lg font-black text-primary">{selectedCandidate.aiMatchScore}%</span>
              </div>
              <div className="space-y-1">
                {selectedCandidate.matchHighlights.map((hl, i) => (
                  <p key={i} className="text-xs text-on-surface flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                    <span>{hl}</span>
                  </p>
                ))}
              </div>
            </div>

            {/* Cover Note */}
            {selectedCandidate.coverNote && (
              <div className="space-y-1.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-on-surface">Applicant Cover Note</h4>
                <p className="text-xs text-on-surface-variant bg-surface-container-lowest p-3.5 rounded-2xl border border-outline-variant/40 leading-relaxed italic">
                  "{selectedCandidate.coverNote}"
                </p>
              </div>
            )}

            {/* Stage Actions */}
            <div className="pt-3 border-t border-outline-variant/30 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-outline">Current Status: <strong>{selectedCandidate.status}</strong></span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleStatusChange(selectedCandidate.id, 'Interview')}
                  className="px-3.5 py-2 bg-surface-container hover:bg-surface-container-high text-on-surface text-xs font-bold rounded-xl"
                >
                  Schedule Interview
                </button>
                <button
                  onClick={() => handleStatusChange(selectedCandidate.id, 'Selected')}
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-xs"
                >
                  Confirm Allotment Offer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
