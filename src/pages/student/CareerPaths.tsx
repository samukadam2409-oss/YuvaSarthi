import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  GitFork,
  Sparkles,
  TrendingUp,
  Award,
  ArrowRight,
  Briefcase,
  Layers,
  ChevronRight,
  CheckCircle2,
  DollarSign
} from 'lucide-react';

export const CareerPaths: React.FC = () => {
  const { careerPaths, setActiveTab } = useApp();
  const [selectedPathId, setSelectedPathId] = useState(careerPaths[0]?.id || 'CP-01');

  const activePath = careerPaths.find((p) => p.id === selectedPathId) || careerPaths[0];

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header Banner */}
      <div className="bg-white p-6 rounded-3xl border border-outline-variant/60 shadow-soft flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-primary-fixed text-primary">
              <GitFork className="w-5 h-5" />
            </span>
            <h2 className="text-xl font-bold text-on-surface">AI Career Paths & Roadmaps</h2>
          </div>
          <p className="text-xs text-on-surface-variant mt-1">
            Data-driven career projections mapped to your degree, coding profile, and national economic trends.
          </p>
        </div>

        <button
          onClick={() => setActiveTab('internships')}
          className="px-4 py-2 bg-primary hover:bg-primary-container text-white rounded-xl text-xs font-bold shadow-md flex items-center gap-1.5 transition-all"
        >
          <Briefcase className="w-4 h-4" />
          <span>Browse Matching Internships</span>
        </button>
      </div>

      {/* Path Selector Tabs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {careerPaths.map((path) => {
          const isSelected = path.id === selectedPathId;
          return (
            <div
              key={path.id}
              onClick={() => setSelectedPathId(path.id)}
              className={`p-5 rounded-3xl border cursor-pointer transition-all ${
                isSelected
                  ? 'bg-white border-primary shadow-card ring-2 ring-primary/20'
                  : 'bg-surface-container-lowest border-outline-variant/60 hover:bg-white hover:border-primary/40'
              }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                    {path.matchPercentage}% Profile Fit
                  </span>
                  <h3 className="text-base font-bold text-on-surface mt-2">{path.title}</h3>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-surface-container text-primary font-mono">
                  {path.averageSalary}
                </span>
              </div>
              <p className="text-xs text-on-surface-variant mt-2 line-clamp-2 leading-relaxed">
                {path.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Selected Career Path Deep Dive */}
      {activePath && (
        <div className="bg-white p-6 rounded-3xl border border-outline-variant/60 shadow-soft space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-outline-variant/30 gap-3">
            <div>
              <span className="text-xs font-bold text-primary uppercase tracking-wider">Career Trajectory Breakdown</span>
              <h3 className="text-lg font-bold text-on-surface">{activePath.title} Progression Ladder</h3>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Industry Demand: {activePath.demandIndex}
              </span>
              <span className="text-xs font-semibold text-primary bg-primary-fixed px-3 py-1 rounded-full">
                Est. Comp: {activePath.averageSalary}
              </span>
            </div>
          </div>

          {/* Timeline Milestones */}
          <div className="relative pl-6 sm:pl-8 space-y-6 before:absolute before:left-3 sm:before:left-4 before:top-3 before:bottom-3 before:w-0.5 before:bg-primary/20">
            {activePath.milestones.map((ms, idx) => (
              <div key={idx} className="relative group">
                {/* Node Bullet */}
                <div className="absolute -left-6 sm:-left-8 top-1.5 w-6 h-6 rounded-full bg-white border-2 border-primary flex items-center justify-center shadow-xs">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>

                <div className="p-5 rounded-2xl bg-surface-container-lowest border border-outline-variant/50 group-hover:border-primary/40 transition-all space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-primary text-white">
                        {ms.level}
                      </span>
                      <h4 className="text-sm font-bold text-on-surface">{ms.role}</h4>
                    </div>
                    <span className="text-xs text-outline font-semibold">{ms.timeline}</span>
                  </div>

                  <p className="text-xs text-on-surface-variant leading-relaxed">{ms.description}</p>

                  <div className="pt-2 border-t border-outline-variant/20 flex flex-wrap items-center gap-1.5">
                    <span className="text-[11px] font-semibold text-on-surface">Target Competencies:</span>
                    {ms.skills.map((sk) => (
                      <span
                        key={sk}
                        className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-surface-container text-on-surface-variant"
                      >
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-2 flex justify-end">
            <button
              onClick={() => setActiveTab('internships')}
              className="px-5 py-2.5 bg-primary hover:bg-primary-container text-white text-xs font-bold rounded-xl shadow-sm transition-all flex items-center gap-2"
            >
              <span>Explore Roles Matching {activePath.title}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
