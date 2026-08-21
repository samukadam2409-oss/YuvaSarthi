import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  Sparkles,
  Zap,
  TrendingUp,
  Award,
  CheckCircle2,
  Building,
  MapPin,
  Clock,
  ArrowRight,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

export const MyMatches: React.FC = () => {
  const { internships, applications, applyToInternship, setActiveTab } = useApp();

  const sortedMatches = [...internships].sort((a, b) => (b.matchScore || 0) - (a.matchScore || 0));

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header Banner */}
      <div className="bg-white p-6 rounded-3xl border border-outline-variant/60 shadow-soft flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-gradient-to-br from-primary to-secondary text-white shadow-sm">
              <Sparkles className="w-5 h-5" />
            </span>
            <h2 className="text-xl font-bold text-on-surface">AI Smart Match Engine</h2>
          </div>
          <p className="text-xs text-on-surface-variant mt-1">
            Contextual semantic matching algorithm evaluating your skills, hackathon projects, and verified credentials.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab('allocation')}
            className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold shadow-md flex items-center gap-1.5 transition-all"
          >
            <Award className="w-4 h-4" />
            <span>Check Allotment Order</span>
          </button>
        </div>
      </div>

      {/* Top 1 Match Highlight Card */}
      {sortedMatches[0] && (
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary-container to-secondary text-white p-6 sm:p-8 shadow-xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-3 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-xs font-bold text-yellow-300">
                <Sparkles className="w-4 h-4" />
                <span>#1 Top AI Recommended Placement Match</span>
              </div>

              <div className="flex items-start gap-4">
                <img
                  src={sortedMatches[0].companyLogo}
                  alt={sortedMatches[0].company}
                  className="w-16 h-16 rounded-2xl object-cover border-2 border-white/40 shrink-0"
                />
                <div>
                  <h3 className="text-xl font-extrabold">{sortedMatches[0].title}</h3>
                  <p className="text-xs text-primary-fixed mt-0.5">
                    {sortedMatches[0].company} • {sortedMatches[0].location}
                  </p>
                  <p className="text-sm font-bold text-emerald-300 mt-1">
                    {sortedMatches[0].stipend} ({sortedMatches[0].duration})
                  </p>
                </div>
              </div>

              <p className="text-xs text-primary-fixed leading-relaxed">
                {sortedMatches[0].description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {sortedMatches[0].skillsRequired.map((s) => (
                  <span
                    key={s}
                    className="text-[10px] font-medium px-2.5 py-1 rounded-lg bg-white/15 text-white backdrop-blur-xs"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Match Breakdown Radar Simulation */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 shrink-0 space-y-3 min-w-[260px]">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white uppercase tracking-wider">Affinity Matrix</span>
                <span className="text-2xl font-black text-emerald-300">{sortedMatches[0].matchScore}%</span>
              </div>

              <div className="space-y-2 text-xs">
                <div>
                  <div className="flex justify-between text-[11px] text-white/80">
                    <span>Technical Skill Fit</span>
                    <span className="font-bold text-white">98%</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden mt-0.5">
                    <div className="h-full bg-emerald-300 rounded-full" style={{ width: '98%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] text-white/80">
                    <span>Project Domain Relevance</span>
                    <span className="font-bold text-white">94%</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden mt-0.5">
                    <div className="h-full bg-emerald-300 rounded-full" style={{ width: '94%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] text-white/80">
                    <span>Academic & CGPA Benchmarking</span>
                    <span className="font-bold text-white">92%</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden mt-0.5">
                    <div className="h-full bg-emerald-300 rounded-full" style={{ width: '92%' }} />
                  </div>
                </div>
              </div>

              <button
                onClick={() => applyToInternship(sortedMatches[0].id)}
                className="w-full py-2.5 bg-white text-primary font-bold text-xs rounded-xl shadow-md hover:bg-surface-container transition-all flex items-center justify-center gap-2"
              >
                <span>Apply to #1 Match</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Remaining Matches Grid */}
      <div className="space-y-4">
        <h3 className="text-sm font-bold text-on-surface uppercase tracking-wider">All Ranked Matches</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sortedMatches.slice(1).map((item, idx) => {
            const isApplied = applications.some((a) => a.internshipId === item.id);
            return (
              <div
                key={item.id}
                className="bg-white p-5 rounded-3xl border border-outline-variant/60 shadow-soft hover:shadow-card transition-all flex flex-col justify-between gap-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={item.companyLogo}
                        alt={item.company}
                        className="w-12 h-12 rounded-xl object-cover border border-outline-variant/40 shrink-0"
                      />
                      <div>
                        <span className="text-[10px] font-bold text-outline">Match Rank #{idx + 2}</span>
                        <h4 className="font-bold text-sm text-on-surface group-hover:text-primary transition-colors line-clamp-1">
                          {item.title}
                        </h4>
                        <p className="text-xs text-on-surface-variant">{item.company}</p>
                      </div>
                    </div>
                    <span className="text-xs font-black px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 shrink-0">
                      {item.matchScore}% Match
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs text-on-surface-variant pt-2 border-t border-outline-variant/20">
                    <span className="font-semibold text-primary">{item.stipend}</span>
                    <span>{item.workMode} • {item.location}</span>
                  </div>

                  <p className="text-xs text-on-surface-variant line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-outline-variant/30 flex items-center justify-between gap-2">
                  <span className="text-[11px] text-outline flex items-center gap-1">
                    <Clock className="w-3 h-3" /> Due {item.deadline}
                  </span>
                  <button
                    disabled={isApplied}
                    onClick={() => applyToInternship(item.id)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                      isApplied
                        ? 'bg-surface-container text-on-surface-variant cursor-not-allowed'
                        : 'bg-primary hover:bg-primary-container text-white shadow-xs'
                    }`}
                  >
                    {isApplied ? 'Applied ✓' : '1-Click Apply'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
