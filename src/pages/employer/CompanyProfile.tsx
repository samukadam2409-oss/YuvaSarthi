import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Building2,
  Globe,
  MapPin,
  Users,
  ShieldCheck,
  Briefcase,
  Save,
  Edit,
  ExternalLink,
  Award,
  Sparkles
} from 'lucide-react';

export const CompanyProfile: React.FC = () => {
  const { employerProfile, updateEmployerProfile, internships, showToast } = useApp();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(employerProfile);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateEmployerProfile(formData);
    setIsEditing(false);
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header Banner */}
      <div className="bg-white p-6 rounded-3xl border border-outline-variant/60 shadow-soft flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <img
            src={employerProfile.logo}
            alt={employerProfile.name}
            className="w-16 h-16 rounded-2xl object-cover ring-2 ring-primary/20"
          />
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-on-surface">{employerProfile.name}</h2>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> Verified Enterprise Partner
              </span>
            </div>
            <p className="text-xs text-on-surface-variant font-medium mt-0.5">
              {employerProfile.industry} • {employerProfile.location} • {employerProfile.size}
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
          {isEditing ? 'Cancel Editing' : 'Edit Company Details'}
        </button>
      </div>

      {/* Main Profile Editor / View */}
      <form onSubmit={handleSave} className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left 2 Cols: Form Info */}
          <div className="lg:col-span-2 bg-white p-6 rounded-3xl border border-outline-variant/60 shadow-soft space-y-4">
            <h3 className="font-bold text-sm text-on-surface flex items-center gap-2 border-b border-outline-variant/30 pb-3">
              <Building2 className="w-4 h-4 text-primary" />
              <span>Enterprise Organization Profile</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-on-surface mb-1">Company Name</label>
                <input
                  type="text"
                  name="name"
                  disabled={!isEditing}
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full h-10 px-3 rounded-xl bg-surface-container-lowest border border-outline-variant text-xs text-on-surface disabled:opacity-75 focus:outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-on-surface mb-1">Industry Domain</label>
                <input
                  type="text"
                  name="industry"
                  disabled={!isEditing}
                  value={formData.industry}
                  onChange={handleChange}
                  className="w-full h-10 px-3 rounded-xl bg-surface-container-lowest border border-outline-variant text-xs text-on-surface disabled:opacity-75 focus:outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-on-surface mb-1">Official Website</label>
                <input
                  type="text"
                  name="website"
                  disabled={!isEditing}
                  value={formData.website}
                  onChange={handleChange}
                  className="w-full h-10 px-3 rounded-xl bg-surface-container-lowest border border-outline-variant text-xs text-on-surface disabled:opacity-75 focus:outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-on-surface mb-1">HQ / Work Locations</label>
                <input
                  type="text"
                  name="location"
                  disabled={!isEditing}
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full h-10 px-3 rounded-xl bg-surface-container-lowest border border-outline-variant text-xs text-on-surface disabled:opacity-75 focus:outline-none focus:border-primary"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-on-surface mb-1">Company Tagline</label>
                <input
                  type="text"
                  name="tagline"
                  disabled={!isEditing}
                  value={formData.tagline}
                  onChange={handleChange}
                  className="w-full h-10 px-3 rounded-xl bg-surface-container-lowest border border-outline-variant text-xs text-on-surface disabled:opacity-75 focus:outline-none focus:border-primary"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-on-surface mb-1">About Organization</label>
                <textarea
                  rows={4}
                  name="about"
                  disabled={!isEditing}
                  value={formData.about}
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl bg-surface-container-lowest border border-outline-variant text-xs text-on-surface disabled:opacity-75 focus:outline-none focus:border-primary leading-relaxed"
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
                  <span>Save Organization Details</span>
                </button>
              </div>
            )}
          </div>

          {/* Right Col: Hiring Stats & Culture */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-3xl border border-outline-variant/60 shadow-soft space-y-4">
              <h3 className="font-bold text-sm text-on-surface border-b border-outline-variant/30 pb-3">
                National Hiring Track Record
              </h3>

              <div className="space-y-3">
                <div className="p-4 rounded-2xl bg-surface-container-lowest border border-outline-variant/40 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-on-surface-variant">Total Interns Hired</span>
                    <p className="text-2xl font-black text-primary">{employerProfile.totalHired}+</p>
                  </div>
                  <Users className="w-8 h-8 text-primary-fixed-dim" />
                </div>

                <div className="p-4 rounded-2xl bg-surface-container-lowest border border-outline-variant/40 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-on-surface-variant">Active Roles Posted</span>
                    <p className="text-2xl font-black text-emerald-700">{internships.length}</p>
                  </div>
                  <Briefcase className="w-8 h-8 text-emerald-200" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
