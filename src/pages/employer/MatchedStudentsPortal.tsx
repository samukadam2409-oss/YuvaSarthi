import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Compass,
  Search,
  Filter,
  Sparkles,
  Award,
  CheckCircle2,
  Send,
  MapPin,
  GraduationCap,
  Star
} from 'lucide-react';

export const MatchedStudentsPortal: React.FC = () => {
  const { showToast } = useApp();
  const [searchSkill, setSearchSkill] = useState('');
  const [minCgpa, setMinCgpa] = useState<number>(8.0);

  const discoveredStudents = [
    {
      id: 'DISC-01',
      name: 'Aarav Sharma',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80',
      college: 'National Institute of Technology, Delhi',
      branch: 'Computer Science & AI',
      cgpa: 8.92,
      aiMatchScore: 96,
      skills: ['React 19', 'FastAPI', 'PyTorch', 'Docker', 'ChromaDB'],
      achievements: 'SIH Finalist • Google DeepLearning Certified'
    },
    {
      id: 'DISC-02',
      name: 'Priya Sundaram',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&auto=format&fit=crop&q=80',
      college: 'Indian Institute of Technology, Madras',
      branch: 'Data Science & Engineering',
      cgpa: 9.14,
      aiMatchScore: 94,
      skills: ['Python', 'Transformer LLMs', 'Kafka', 'PostgreSQL'],
      achievements: 'National Merit Scholar • 3 Research Papers'
    },
    {
      id: 'DISC-03',
      name: 'Rohan Deshmukh',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80',
      college: 'BITS Pilani',
      branch: 'Electrical & Computer Engineering',
      cgpa: 8.65,
      aiMatchScore: 90,
      skills: ['Go', 'Kubernetes', 'Cloud Infrastructure', 'React'],
      achievements: 'Open Source Contributor (CNCF)'
    }
  ];

  const handleInvite = (studentName: string) => {
    showToast('Interview Invitation Sent', `Sent direct interview pass to ${studentName}`, 'success');
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header Banner */}
      <div className="bg-white p-6 rounded-3xl border border-outline-variant/60 shadow-soft flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-primary-fixed text-primary">
              <Compass className="w-5 h-5" />
            </span>
            <h2 className="text-xl font-bold text-on-surface">AI Talent Discovery Matrix</h2>
          </div>
          <p className="text-xs text-on-surface-variant mt-1">
            Proactively search verified national student talent from premier institutes matching your technology stack.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200">
          <Sparkles className="w-4 h-4 text-emerald-600" />
          <span>Top 5% National Verified Cohort</span>
        </div>
      </div>

      {/* Discovery Filters */}
      <div className="bg-white p-5 rounded-3xl border border-outline-variant/60 shadow-soft flex flex-col sm:flex-row items-center gap-4">
        <div className="relative flex-1 w-full">
          <Search className="w-4 h-4 text-outline absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchSkill}
            onChange={(e) => setSearchSkill(e.target.value)}
            placeholder="Search by required skill (e.g. PyTorch, React, Kafka, Docker)..."
            className="w-full h-10 pl-10 pr-4 rounded-2xl bg-surface-container-lowest border border-outline-variant text-xs text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <span className="text-xs font-bold text-on-surface whitespace-nowrap">Min CGPA:</span>
          <select
            value={minCgpa}
            onChange={(e) => setMinCgpa(parseFloat(e.target.value))}
            className="h-10 px-3 rounded-xl bg-surface-container-lowest border border-outline-variant text-xs font-bold text-primary focus:outline-none focus:border-primary"
          >
            <option value="7.5">7.5+</option>
            <option value="8.0">8.0+</option>
            <option value="8.5">8.5+</option>
            <option value="9.0">9.0+</option>
          </select>
        </div>
      </div>

      {/* Discovered Students Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {discoveredStudents.map((student) => (
          <div
            key={student.id}
            className="bg-white p-6 rounded-3xl border border-outline-variant/60 shadow-soft hover:shadow-card transition-all flex flex-col justify-between gap-4 group"
          >
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <img
                    src={student.avatar}
                    alt={student.name}
                    className="w-12 h-12 rounded-2xl object-cover ring-2 ring-primary/20 shrink-0"
                  />
                  <div>
                    <h3 className="font-bold text-sm text-on-surface group-hover:text-primary transition-colors">
                      {student.name}
                    </h3>
                    <p className="text-[11px] text-on-surface-variant font-medium">{student.college}</p>
                  </div>
                </div>
                <span className="text-[11px] font-black px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 shrink-0">
                  {student.aiMatchScore}% Fit
                </span>
              </div>

              <div className="flex items-center justify-between text-xs pt-2 border-t border-outline-variant/20">
                <span className="text-on-surface-variant">{student.branch}</span>
                <span className="font-bold text-primary">CGPA: {student.cgpa}</span>
              </div>

              <p className="text-[11px] text-emerald-700 font-semibold bg-emerald-50/60 p-2 rounded-xl border border-emerald-100">
                🏆 {student.achievements}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {student.skills.map((sk) => (
                  <span
                    key={sk}
                    className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-surface-container text-on-surface-variant"
                  >
                    {sk}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={() => handleInvite(student.name)}
              className="w-full py-2.5 bg-primary hover:bg-primary-container text-white text-xs font-bold rounded-xl shadow-xs transition-all flex items-center justify-center gap-2 mt-2"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Invite to Interview</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
