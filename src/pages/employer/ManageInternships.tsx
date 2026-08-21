import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Internship } from '../../types';
import {
  Briefcase,
  Plus,
  Search,
  MapPin,
  Clock,
  CheckCircle2,
  Trash2,
  Edit,
  X,
  Send,
  Sparkles
} from 'lucide-react';

export const ManageInternships: React.FC = () => {
  const { internships, addInternship, employerProfile, showToast, setActiveTab } = useApp();
  const [showPostModal, setShowPostModal] = useState(false);
  const [searchFilter, setSearchFilter] = useState('');

  // Form State
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Software Engineering');
  const [workMode, setWorkMode] = useState<'Remote' | 'Hybrid' | 'Onsite'>('Remote');
  const [location, setLocation] = useState('Bengaluru / Remote');
  const [duration, setDuration] = useState('6 Months');
  const [stipend, setStipend] = useState('₹40,000 / month');
  const [openings, setOpenings] = useState(5);
  const [deadline, setDeadline] = useState('30 March 2026');
  const [description, setDescription] = useState('');
  const [skillsText, setSkillsText] = useState('React, TypeScript, Python, FastAPI, Docker');
  const [requirementsText, setRequirementsText] = useState(
    'Strong knowledge of algorithms, Hands-on experience with modern web stacks, Good communication skills'
  );
  const [perksText, setPerksText] = useState(
    'Pre-Placement Offer (PPO) Track, Remote Work Setup, Mentorship'
  );

  const handleCreateInternship = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    addInternship({
      title: title.trim(),
      company: employerProfile.name,
      companyLogo: employerProfile.logo,
      location,
      workMode,
      duration,
      stipend,
      category,
      description: description.trim(),
      responsibilities: [
        'Collaborate with core platform engineers on micro-frontend systems',
        'Write robust backend services and integration test suites',
        'Participate in architecture review and agile planning'
      ],
      requirements: requirementsText.split(',').map((r) => r.trim()).filter(Boolean),
      skillsRequired: skillsText.split(',').map((s) => s.trim()).filter(Boolean),
      perks: perksText.split(',').map((p) => p.trim()).filter(Boolean),
      openings: Number(openings) || 1,
      deadline,
      status: 'Open'
    });

    setShowPostModal(false);
    setTitle('');
    setDescription('');
  };

  const filtered = internships.filter(
    (i) =>
      i.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
      i.category.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header Banner */}
      <div className="bg-white p-6 rounded-3xl border border-outline-variant/60 shadow-soft flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-primary-fixed text-primary">
              <Briefcase className="w-5 h-5" />
            </span>
            <h2 className="text-xl font-bold text-on-surface">Manage & Post Internship Openings</h2>
          </div>
          <p className="text-xs text-on-surface-variant mt-1">
            Create national internship postings, configure AI screening parameters, and monitor live applicant inflows.
          </p>
        </div>

        <button
          onClick={() => setShowPostModal(true)}
          className="px-5 py-2.5 bg-primary hover:bg-primary-container text-white rounded-xl text-xs font-bold shadow-md flex items-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          <Plus className="w-4 h-4" />
          <span>Post New Opportunity</span>
        </button>
      </div>

      {/* Filter and Stats Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-outline absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
            placeholder="Filter postings by title or domain..."
            className="w-full h-9 pl-9 pr-3 rounded-full bg-white border border-outline-variant text-xs text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
          />
        </div>

        <span className="text-xs font-bold text-on-surface-variant">
          Showing {filtered.length} Active Listings
        </span>
      </div>

      {/* Internships List */}
      <div className="space-y-4">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-3xl border border-outline-variant/60 shadow-soft hover:shadow-card transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
          >
            <div className="space-y-2 flex-1">
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-base text-on-surface">{item.title}</h3>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  {item.status}
                </span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant">
                  {item.workMode}
                </span>
              </div>

              <p className="text-xs text-on-surface-variant flex flex-wrap items-center gap-2">
                <span>{item.category}</span>
                <span>•</span>
                <span>{item.location}</span>
                <span>•</span>
                <span className="font-bold text-primary">{item.stipend}</span>
                <span>•</span>
                <span className="text-outline">{item.duration}</span>
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {item.skillsRequired.map((skill) => (
                  <span
                    key={skill}
                    className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-surface-container text-on-surface-variant"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex md:flex-col items-center md:items-end justify-between md:justify-center gap-3 shrink-0 pt-3 md:pt-0 border-t md:border-t-0 border-outline-variant/30">
              <div className="text-right text-xs">
                <span className="font-bold text-primary">{item.applicantsCount} Applicants</span>
                <p className="text-[11px] text-outline">Deadline: {item.deadline}</p>
              </div>

              <button
                onClick={() => setActiveTab('applicants-review')}
                className="px-4 py-2 bg-primary hover:bg-primary-container text-white text-xs font-bold rounded-xl shadow-xs transition-all"
              >
                Review Applicants →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Post Internship Wizard Modal */}
      {showPostModal && (
        <div className="fixed inset-0 bg-on-surface/40 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-fadeIn">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-2xl w-full border border-outline-variant shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-outline-variant/40">
              <div className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-primary" />
                <h3 className="font-bold text-base text-on-surface">Post New Internship Role</h3>
              </div>
              <button onClick={() => setShowPostModal(false)} className="text-outline hover:text-on-surface">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateInternship} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-on-surface mb-1">Opportunity Title</label>
                  <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g. AI Systems & Computer Vision Intern"
                    className="w-full h-10 px-3 rounded-xl bg-surface-container-lowest border border-outline-variant text-xs text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-on-surface mb-1">Domain / Track</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full h-10 px-3 rounded-xl bg-surface-container-lowest border border-outline-variant text-xs text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
                  >
                    <option value="Software Engineering">Software Engineering</option>
                    <option value="AI & Space Tech">AI & Space Tech</option>
                    <option value="Cybersecurity">Cybersecurity</option>
                    <option value="AI & Data Science">AI & Data Science</option>
                    <option value="Public Policy & Analytics">Public Policy & Analytics</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-on-surface mb-1">Work Mode</label>
                  <select
                    value={workMode}
                    onChange={(e) => setWorkMode(e.target.value as any)}
                    className="w-full h-10 px-3 rounded-xl bg-surface-container-lowest border border-outline-variant text-xs text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
                  >
                    <option value="Remote">Remote</option>
                    <option value="Hybrid">Hybrid</option>
                    <option value="Onsite">Onsite</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-on-surface mb-1">Monthly Stipend</label>
                  <input
                    type="text"
                    required
                    value={stipend}
                    onChange={(e) => setStipend(e.target.value)}
                    placeholder="e.g. ₹40,000 / month"
                    className="w-full h-10 px-3 rounded-xl bg-surface-container-lowest border border-outline-variant text-xs text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-on-surface mb-1">Duration</label>
                  <input
                    type="text"
                    required
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    placeholder="e.g. 6 Months"
                    className="w-full h-10 px-3 rounded-xl bg-surface-container-lowest border border-outline-variant text-xs text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-on-surface mb-1">Openings</label>
                  <input
                    type="number"
                    min="1"
                    required
                    value={openings}
                    onChange={(e) => setOpenings(Number(e.target.value))}
                    className="w-full h-10 px-3 rounded-xl bg-surface-container-lowest border border-outline-variant text-xs text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-on-surface mb-1">Application Deadline</label>
                  <input
                    type="text"
                    required
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                    placeholder="e.g. 30 March 2026"
                    className="w-full h-10 px-3 rounded-xl bg-surface-container-lowest border border-outline-variant text-xs text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-on-surface mb-1">Role Description</label>
                  <textarea
                    rows={3}
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Describe the opportunity and team scope..."
                    className="w-full p-3 rounded-xl bg-surface-container-lowest border border-outline-variant text-xs text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-on-surface mb-1">
                    Required Skills (Comma separated)
                  </label>
                  <input
                    type="text"
                    value={skillsText}
                    onChange={(e) => setSkillsText(e.target.value)}
                    placeholder="e.g. React, Python, PyTorch, Docker"
                    className="w-full h-10 px-3 rounded-xl bg-surface-container-lowest border border-outline-variant text-xs text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-3 border-t border-outline-variant/30">
                <button
                  type="button"
                  onClick={() => setShowPostModal(false)}
                  className="px-4 py-2.5 rounded-xl border border-outline-variant text-xs font-semibold text-on-surface-variant hover:bg-surface-container"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-primary hover:bg-primary-container text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Publish Opportunity</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
