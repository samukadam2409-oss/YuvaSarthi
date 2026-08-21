import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Brain,
  Plus,
  CheckCircle2,
  Award,
  TrendingUp,
  Sparkles,
  ShieldCheck,
  Code2,
  Database,
  Layers,
  Cpu,
  X
} from 'lucide-react';

export const SkillsProfile: React.FC = () => {
  const { studentProfile, updateStudentProfile, showToast, setActiveTab } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [showAddModal, setShowAddModal] = useState(false);
  const [newSkillName, setNewSkillName] = useState('');
  const [newSkillLevel, setNewSkillLevel] = useState(80);
  const [newSkillCategory, setNewSkillCategory] = useState('Frontend');

  const categories = ['All', 'Frontend', 'Backend', 'AI/ML', 'DevOps', 'Design', 'Database'];

  const filteredSkills =
    selectedCategory === 'All'
      ? studentProfile.skills
      : studentProfile.skills.filter((s) => s.category === selectedCategory);

  const handleAddSkill = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSkillName.trim()) return;

    const exists = studentProfile.skills.some(
      (s) => s.name.toLowerCase() === newSkillName.trim().toLowerCase()
    );
    if (exists) {
      showToast('Skill Exists', 'This skill is already on your profile', 'warning');
      return;
    }

    const updated = [
      ...studentProfile.skills,
      { name: newSkillName.trim(), level: newSkillLevel, category: newSkillCategory }
    ];

    updateStudentProfile({ skills: updated });
    setNewSkillName('');
    setShowAddModal(false);
    showToast('Skill Added', `Added ${newSkillName} with ${newSkillLevel}% proficiency`, 'success');
  };

  const handleRemoveSkill = (skillName: string) => {
    const updated = studentProfile.skills.filter((s) => s.name !== skillName);
    updateStudentProfile({ skills: updated });
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header Banner */}
      <div className="bg-white p-6 rounded-3xl border border-outline-variant/60 shadow-soft flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-primary-fixed text-primary">
              <Brain className="w-5 h-5" />
            </span>
            <h2 className="text-xl font-bold text-on-surface">My Skills & Technical Competencies</h2>
          </div>
          <p className="text-xs text-on-surface-variant mt-1">
            Verified skill credentials, algorithmic assessments, and practical proficiency metrics.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setActiveTab('skill-gap')}
            className="px-4 py-2 bg-surface-container hover:bg-surface-container-high text-on-surface rounded-xl text-xs font-semibold border border-outline-variant/60 flex items-center gap-1.5 transition-all"
          >
            <TrendingUp className="w-4 h-4 text-primary" />
            <span>Target Role Gap</span>
          </button>

          <button
            onClick={() => setShowAddModal(true)}
            className="px-4 py-2 bg-primary hover:bg-primary-container text-white rounded-xl text-xs font-bold shadow-md flex items-center gap-1.5 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Plus className="w-4 h-4" />
            <span>Add Skill</span>
          </button>
        </div>
      </div>

      {/* Category Pills Filter */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
              selectedCategory === cat
                ? 'bg-primary text-white shadow-sm'
                : 'bg-white text-on-surface-variant hover:bg-surface-container border border-outline-variant/60'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Matrix Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredSkills.map((skill) => (
          <div
            key={skill.name}
            className="bg-white p-5 rounded-2xl border border-outline-variant/60 shadow-soft hover:shadow-card transition-all space-y-3 group"
          >
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant uppercase tracking-wider">
                  {skill.category}
                </span>
                <h4 className="text-sm font-bold text-on-surface mt-1 group-hover:text-primary transition-colors">
                  {skill.name}
                </h4>
              </div>
              <button
                onClick={() => handleRemoveSkill(skill.name)}
                className="text-outline hover:text-red-600 p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                title="Remove skill"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="text-on-surface-variant">Proficiency</span>
                <span className="font-bold text-primary">{skill.level}%</span>
              </div>
              <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-outline-variant/30 text-[11px]">
              <span className="text-emerald-700 font-semibold flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Verified
              </span>
              <span className="text-outline">
                {skill.level >= 85 ? 'Advanced Master' : skill.level >= 70 ? 'Intermediate' : 'Foundational'}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Verified Certifications Section */}
      <div className="bg-white p-6 rounded-3xl border border-outline-variant/60 shadow-soft space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-outline-variant/30">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-primary" />
            <h3 className="font-bold text-sm text-on-surface">Verified Credentials & Hackathon Badges</h3>
          </div>
          <span className="text-xs font-semibold text-emerald-700">3 Verified Badges</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {studentProfile.certifications.map((cert, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-surface-container-lowest border border-outline-variant/50 flex flex-col justify-between gap-3"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-primary-fixed text-primary shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-on-surface leading-snug">{cert.title}</h5>
                  <p className="text-[11px] text-on-surface-variant mt-0.5">{cert.issuer}</p>
                </div>
              </div>
              <div className="flex items-center justify-between text-[11px] pt-2 border-t border-outline-variant/20 text-outline">
                <span>Issued {cert.date}</span>
                <span className="text-emerald-700 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Credential ID
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Skill Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-on-surface/40 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-fadeIn">
          <div className="bg-white rounded-3xl p-6 max-w-md w-full border border-outline-variant shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-outline-variant/40">
              <h3 className="font-bold text-base text-on-surface">Add New Technical Skill</h3>
              <button onClick={() => setShowAddModal(false)} className="text-outline hover:text-on-surface">
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleAddSkill} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-on-surface mb-1">Skill Name</label>
                <input
                  type="text"
                  required
                  value={newSkillName}
                  onChange={(e) => setNewSkillName(e.target.value)}
                  placeholder="e.g. Next.js, Go, Kubernetes, Kafka"
                  className="w-full h-10 px-3 rounded-xl bg-surface-container-lowest border border-outline-variant text-xs text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-on-surface mb-1">Category</label>
                <select
                  value={newSkillCategory}
                  onChange={(e) => setNewSkillCategory(e.target.value)}
                  className="w-full h-10 px-3 rounded-xl bg-surface-container-lowest border border-outline-variant text-xs text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
                >
                  <option value="Frontend">Frontend</option>
                  <option value="Backend">Backend</option>
                  <option value="AI/ML">AI / Machine Learning</option>
                  <option value="DevOps">DevOps & Cloud</option>
                  <option value="Database">Database & Storage</option>
                  <option value="Design">UI / UX Design</option>
                </select>
              </div>

              <div>
                <div className="flex items-center justify-between text-xs font-bold text-on-surface mb-1">
                  <span>Self-Assessed Proficiency</span>
                  <span className="text-primary">{newSkillLevel}%</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="100"
                  value={newSkillLevel}
                  onChange={(e) => setNewSkillLevel(Number(e.target.value))}
                  className="w-full accent-primary"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 rounded-xl border border-outline-variant text-xs font-semibold text-on-surface-variant hover:bg-surface-container"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-primary hover:bg-primary-container text-white text-xs font-bold shadow-md transition-all"
                >
                  Add Skill
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
