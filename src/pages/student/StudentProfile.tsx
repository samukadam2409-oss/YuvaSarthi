import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  User,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Building,
  Award,
  Sparkles,
  Save,
  CheckCircle2,
  ExternalLink,
  Code2,
  Plus
} from 'lucide-react';

export const StudentProfile: React.FC = () => {
  const { studentProfile, updateStudentProfile, showToast } = useApp();
  const [formData, setFormData] = useState(studentProfile);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'cgpa' ? parseFloat(value) || 0 : value
    }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateStudentProfile(formData);
    setIsEditing(false);
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header Banner */}
      <div className="bg-white p-6 rounded-3xl border border-outline-variant/60 shadow-soft flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <img
            src={studentProfile.avatar}
            alt={studentProfile.name}
            className="w-16 h-16 rounded-2xl object-cover ring-2 ring-primary/20"
          />
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-on-surface">{studentProfile.name}</h2>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                Verified Student
              </span>
            </div>
            <p className="text-xs text-on-surface-variant font-medium mt-0.5">
              {studentProfile.college} • {studentProfile.branch} (Class of {studentProfile.graduationYear})
            </p>
          </div>
        </div>

        <button
          onClick={() => setIsEditing(!isEditing)}
          className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
            isEditing
              ? 'bg-surface-container text-on-surface border border-outline-variant'
              : 'bg-primary hover:bg-primary-container text-white shadow-md'
          }`}
        >
          {isEditing ? 'Cancel Editing' : 'Edit Profile'}
        </button>
      </div>

      {/* Main Profile Form / View */}
      <form onSubmit={handleSave} className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left 2 Cols: Academic & Contact Details */}
          <div className="lg:col-span-2 bg-white p-6 rounded-3xl border border-outline-variant/60 shadow-soft space-y-5">
            <h3 className="font-bold text-sm text-on-surface flex items-center gap-2 border-b border-outline-variant/30 pb-3">
              <User className="w-4 h-4 text-primary" />
              <span>Personal & Academic Details</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-on-surface mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  disabled={!isEditing}
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full h-10 px-3 rounded-xl bg-surface-container-lowest border border-outline-variant text-xs text-on-surface disabled:opacity-75 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-on-surface mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  disabled={!isEditing}
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full h-10 px-3 rounded-xl bg-surface-container-lowest border border-outline-variant text-xs text-on-surface disabled:opacity-75 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-on-surface mb-1">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  disabled={!isEditing}
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full h-10 px-3 rounded-xl bg-surface-container-lowest border border-outline-variant text-xs text-on-surface disabled:opacity-75 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-on-surface mb-1">Location</label>
                <input
                  type="text"
                  name="location"
                  disabled={!isEditing}
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full h-10 px-3 rounded-xl bg-surface-container-lowest border border-outline-variant text-xs text-on-surface disabled:opacity-75 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-on-surface mb-1">College / University</label>
                <input
                  type="text"
                  name="college"
                  disabled={!isEditing}
                  value={formData.college}
                  onChange={handleChange}
                  className="w-full h-10 px-3 rounded-xl bg-surface-container-lowest border border-outline-variant text-xs text-on-surface disabled:opacity-75 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-on-surface mb-1">Degree & Branch</label>
                <input
                  type="text"
                  name="branch"
                  disabled={!isEditing}
                  value={formData.branch}
                  onChange={handleChange}
                  className="w-full h-10 px-3 rounded-xl bg-surface-container-lowest border border-outline-variant text-xs text-on-surface disabled:opacity-75 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-on-surface mb-1">Cumulative CGPA</label>
                <input
                  type="number"
                  step="0.01"
                  name="cgpa"
                  disabled={!isEditing}
                  value={formData.cgpa}
                  onChange={handleChange}
                  className="w-full h-10 px-3 rounded-xl bg-surface-container-lowest border border-outline-variant text-xs text-on-surface font-bold text-primary disabled:opacity-75 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-on-surface mb-1">Professional Bio</label>
                <textarea
                  rows={3}
                  name="bio"
                  disabled={!isEditing}
                  value={formData.bio}
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl bg-surface-container-lowest border border-outline-variant text-xs text-on-surface disabled:opacity-75 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
                />
              </div>
            </div>

            {isEditing && (
              <div className="flex justify-end pt-3 border-t border-outline-variant/30">
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-primary hover:bg-primary-container text-white text-xs font-bold rounded-xl shadow-md flex items-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Profile Changes</span>
                </button>
              </div>
            )}
          </div>

          {/* Right Col: Target Role & Readiness Stats */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-3xl border border-outline-variant/60 shadow-soft space-y-4">
              <h3 className="font-bold text-sm text-on-surface flex items-center gap-2 border-b border-outline-variant/30 pb-3">
                <Sparkles className="w-4 h-4 text-primary" />
                <span>Placement Readiness Score</span>
              </h3>

              <div className="p-4 rounded-2xl bg-surface-container-lowest border border-outline-variant/40 text-center space-y-2">
                <div className="text-3xl font-black text-primary">{studentProfile.readinessScore}%</div>
                <p className="text-xs text-on-surface-variant font-medium">National Benchmark Rating</p>
                <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-600 rounded-full" style={{ width: `${studentProfile.readinessScore}%` }} />
                </div>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-surface-container-low">
                  <span className="text-on-surface-variant">Profile Verification</span>
                  <span className="font-bold text-emerald-700 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Complete
                  </span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-surface-container-low">
                  <span className="text-on-surface-variant">College NOC Status</span>
                  <span className="font-bold text-emerald-700">Uploaded & Approved</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-surface-container-low">
                  <span className="text-on-surface-variant">Target Career Path</span>
                  <span className="font-bold text-primary">{studentProfile.targetRole}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>

      {/* Featured Projects Portfolio */}
      <div className="bg-white p-6 rounded-3xl border border-outline-variant/60 shadow-soft space-y-4">
        <div className="flex items-center justify-between border-b border-outline-variant/30 pb-3">
          <div className="flex items-center gap-2">
            <Code2 className="w-4 h-4 text-primary" />
            <h3 className="font-bold text-sm text-on-surface">Verified Academic & Hackathon Projects</h3>
          </div>
          <span className="text-xs font-semibold text-primary">{studentProfile.projects.length} Showcased</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {studentProfile.projects.map((proj, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-surface-container-lowest border border-outline-variant/50 space-y-2.5"
            >
              <div className="flex items-start justify-between">
                <h4 className="font-bold text-sm text-on-surface">{proj.title}</h4>
                {proj.link && (
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-primary font-semibold hover:underline flex items-center gap-1"
                  >
                    <span>Code</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
              <p className="text-xs text-on-surface-variant leading-relaxed">{proj.description}</p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {proj.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-surface-container text-on-surface-variant"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
