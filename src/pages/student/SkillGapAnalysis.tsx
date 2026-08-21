import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  SearchCode,
  Sparkles,
  TrendingUp,
  AlertTriangle,
  BookOpen,
  ArrowRight,
  CheckCircle2,
  Clock,
  Target,
  BarChart2
} from 'lucide-react';

export const SkillGapAnalysis: React.FC = () => {
  const { skillGaps, enrollInCourse, courses, setActiveTab, showToast } = useApp();
  const [selectedTargetRole, setSelectedTargetRole] = useState('AI Full-Stack Architect');

  const roles = [
    'AI Full-Stack Architect',
    'Computer Vision Trainee',
    'Cloud Systems & DevOps Engineer',
    'Generative AI Specialist'
  ];

  const handleBridgeGap = (courseTitle: string) => {
    const course = courses.find((c) => c.title.toLowerCase().includes(courseTitle.toLowerCase().slice(0, 10)));
    if (course) {
      enrollInCourse(course.id);
      setActiveTab('learning');
    } else {
      showToast('Course Enrolled', `Enrolled in module: ${courseTitle}`, 'success');
      setActiveTab('learning');
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header Banner */}
      <div className="bg-white p-6 rounded-3xl border border-outline-variant/60 shadow-soft flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-primary-fixed text-primary">
              <SearchCode className="w-5 h-5" />
            </span>
            <h2 className="text-xl font-bold text-on-surface">Target Role Skill Gap Analysis</h2>
          </div>
          <p className="text-xs text-on-surface-variant mt-1">
            Compare your current skill profile against real-time industry and national internship role requirements.
          </p>
        </div>

        {/* Target Role Selector */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-on-surface whitespace-nowrap">Benchmark Role:</span>
          <select
            value={selectedTargetRole}
            onChange={(e) => setSelectedTargetRole(e.target.value)}
            className="h-10 px-3 rounded-xl bg-surface-container-lowest border border-outline-variant text-xs font-bold text-primary focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 shadow-xs"
          >
            {roles.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Target Role Overview Hero */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-gradient-to-br from-primary via-primary-container to-secondary text-white p-6 rounded-3xl shadow-xl flex flex-col justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-primary-fixed">Target Profile</span>
            <h3 className="text-2xl font-extrabold">{selectedTargetRole}</h3>
            <p className="text-xs text-primary-fixed leading-relaxed">
              Based on active listings from ISRO, Tata Digital, and Microsoft India. You currently meet <strong>76%</strong> of core prerequisites for Tier-1 placement.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 pt-3 border-t border-white/20">
            <div>
              <span className="text-[11px] text-white/80">Benchmark Match</span>
              <p className="text-lg font-black text-white">76%</p>
            </div>
            <div>
              <span className="text-[11px] text-white/80">Missing Skills</span>
              <p className="text-lg font-black text-amber-300">4 Core</p>
            </div>
            <div>
              <span className="text-[11px] text-white/80">Est. Upskill Time</span>
              <p className="text-lg font-black text-emerald-300">4.5 Weeks</p>
            </div>
          </div>
        </div>

        {/* AI Recommendation Summary */}
        <div className="bg-white p-6 rounded-3xl border border-outline-variant/60 shadow-soft flex flex-col justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-1.5 text-primary font-bold text-xs">
              <Sparkles className="w-4 h-4" />
              <span>AI Fast-Track Strategy</span>
            </div>
            <h4 className="font-bold text-sm text-on-surface">Prioritize Event Streaming & Docker</h4>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Closing your Kafka and Kubernetes gaps will increase your top recruiter shortlist likelihood by +38%.
            </p>
          </div>

          <button
            onClick={() => setActiveTab('learning')}
            className="w-full py-2.5 bg-primary hover:bg-primary-container text-white text-xs font-bold rounded-xl shadow-sm transition-all flex items-center justify-center gap-2"
          >
            <span>Explore Learning Modules</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Identified Skill Gaps List */}
      <div className="bg-white p-6 rounded-3xl border border-outline-variant/60 shadow-soft space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-outline-variant/30">
          <div className="flex items-center gap-2">
            <BarChart2 className="w-4 h-4 text-primary" />
            <h3 className="font-bold text-sm text-on-surface">Detailed Competency Gap Matrix</h3>
          </div>
          <span className="text-xs font-semibold text-primary">{skillGaps.length} Gaps Analyzed</span>
        </div>

        <div className="space-y-3">
          {skillGaps.map((gap) => (
            <div
              key={gap.id}
              className="p-5 rounded-2xl bg-surface-container-lowest border border-outline-variant/50 hover:border-primary/40 transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-4"
            >
              <div className="space-y-2 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h4 className="font-bold text-sm text-on-surface">{gap.skill}</h4>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      gap.importance === 'Critical'
                        ? 'bg-red-100 text-red-800'
                        : gap.importance === 'High'
                        ? 'bg-amber-100 text-amber-800'
                        : 'bg-primary-fixed text-on-primary-fixed'
                    }`}
                  >
                    {gap.importance} Priority
                  </span>
                  <span className="text-[10px] text-outline">• {gap.category}</span>
                </div>

                {/* Progress Comparison */}
                <div className="space-y-1 max-w-lg">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-on-surface-variant">Current: {gap.currentProficiency}%</span>
                    <span className="font-bold text-primary">Required: {gap.requiredProficiency}%</span>
                  </div>
                  <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden relative">
                    <div
                      className="absolute top-0 left-0 h-full bg-primary rounded-full"
                      style={{ width: `${gap.currentProficiency}%` }}
                    />
                    <div
                      className="absolute top-0 left-0 h-full bg-primary/20 rounded-full"
                      style={{ width: `${gap.requiredProficiency}%` }}
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-on-surface-variant pt-1">
                  <BookOpen className="w-3.5 h-3.5 text-primary" />
                  <span className="font-medium text-on-surface">Curated Course:</span>
                  <span className="text-primary font-semibold">{gap.recommendedCourse}</span>
                </div>
              </div>

              <div className="flex sm:flex-col items-center lg:items-end justify-between lg:justify-center gap-2 shrink-0 pt-3 lg:pt-0 border-t lg:border-t-0 border-outline-variant/30">
                <span className="text-[11px] text-outline flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {gap.timeToLearn}
                </span>
                <button
                  onClick={() => handleBridgeGap(gap.recommendedCourse)}
                  className="px-4 py-2 bg-primary hover:bg-primary-container text-white text-xs font-bold rounded-xl shadow-xs transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center gap-1.5"
                >
                  <span>Bridge Gap Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
