import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Internship } from '../../types';
import {
  Briefcase,
  Search,
  Filter,
  MapPin,
  Clock,
  Zap,
  CheckCircle2,
  Sparkles,
  Building,
  DollarSign,
  X,
  Share2,
  ExternalLink,
  Send
} from 'lucide-react';

export const InternshipsPortal: React.FC = () => {
  const {
    internships,
    applications,
    applyToInternship,
    savedInternshipIds,
    toggleSaveInternship,
    searchQuery,
    setSearchQuery,
    showToast
  } = useApp();

  const [selectedMode, setSelectedMode] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalInternship, setActiveModalInternship] = useState<Internship | null>(null);
  const [coverNote, setCoverNote] = useState('');

  const modes = ['All', 'Remote', 'Hybrid', 'Onsite'];
  const categories = ['All', 'Software Engineering', 'AI & Space Tech', 'Cybersecurity', 'Public Policy & Analytics', 'AI & Data Science'];

  const filteredInternships = internships.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.skillsRequired.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesMode = selectedMode === 'All' || item.workMode === selectedMode;
    const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;

    return matchesSearch && matchesMode && matchesCat;
  });

  const handleApply = (internshipId: string) => {
    const success = applyToInternship(internshipId, coverNote);
    if (success) {
      setActiveModalInternship(null);
      setCoverNote('');
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header Banner */}
      <div className="bg-white p-6 rounded-3xl border border-outline-variant/60 shadow-soft flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-primary-fixed text-primary">
              <Briefcase className="w-5 h-5" />
            </span>
            <h2 className="text-xl font-bold text-on-surface">Explore National & Corporate Internships</h2>
          </div>
          <p className="text-xs text-on-surface-variant mt-1">
            Government of India, research establishments, and enterprise opportunities with verified stipends and PPO tracks.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-bold text-primary bg-primary-fixed/50 px-3 py-1.5 rounded-xl">
          <Sparkles className="w-4 h-4" />
          <span>{internships.length} Live Openings</span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 rounded-3xl border border-outline-variant/60 shadow-soft space-y-3">
        <div className="flex flex-col md:flex-row items-center gap-3">
          {/* Search Input */}
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-outline absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by job title, company name, or specific skill..."
              className="w-full h-10 pl-10 pr-4 rounded-2xl bg-surface-container-lowest border border-outline-variant text-xs text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
            />
          </div>

          {/* Work Mode Filter */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
            {modes.map((mode) => (
              <button
                key={mode}
                onClick={() => setSelectedMode(mode)}
                className={`px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedMode === mode
                    ? 'bg-primary text-white shadow-xs'
                    : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
                }`}
              >
                {mode}
              </button>
            ))}
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pt-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-[11px] font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-secondary text-white'
                  : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Internships List */}
      <div className="space-y-4">
        {filteredInternships.length === 0 ? (
          <div className="bg-white p-12 rounded-3xl border border-outline-variant/60 text-center space-y-3">
            <Briefcase className="w-10 h-10 text-outline mx-auto" />
            <h4 className="font-bold text-sm text-on-surface">No internships match your current filters</h4>
            <p className="text-xs text-on-surface-variant max-w-sm mx-auto">
              Try adjusting your search terms or clearing work mode filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedMode('All');
                setSelectedCategory('All');
              }}
              className="px-4 py-2 bg-primary text-white text-xs font-bold rounded-xl"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          filteredInternships.map((internship) => {
            const isApplied = applications.some((a) => a.internshipId === internship.id);
            const isSaved = savedInternshipIds.includes(internship.id);

            return (
              <div
                key={internship.id}
                className="bg-white p-6 rounded-3xl border border-outline-variant/60 shadow-soft hover:shadow-card hover:border-primary/40 transition-all flex flex-col md:flex-row md:items-center justify-between gap-5 group"
              >
                <div className="flex items-start gap-4 flex-1">
                  <img
                    src={internship.companyLogo}
                    alt={internship.company}
                    className="w-14 h-14 rounded-2xl object-cover border border-outline-variant/40 shrink-0"
                  />
                  <div className="space-y-1.5 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-bold text-base text-on-surface group-hover:text-primary transition-colors">
                        {internship.title}
                      </h3>
                      {internship.matchScore && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-emerald-600" />
                          {internship.matchScore}% Match Fit
                        </span>
                      )}
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant">
                        {internship.workMode}
                      </span>
                    </div>

                    <p className="text-xs text-on-surface-variant flex flex-wrap items-center gap-2.5">
                      <span className="font-semibold text-on-surface">{internship.company}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-outline" /> {internship.location}
                      </span>
                      <span>•</span>
                      <span className="font-bold text-primary">{internship.stipend}</span>
                      <span>•</span>
                      <span className="text-outline">{internship.duration}</span>
                    </p>

                    <p className="text-xs text-on-surface-variant line-clamp-2 leading-relaxed pt-1">
                      {internship.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {internship.skillsRequired.map((skill) => (
                        <span
                          key={skill}
                          className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-surface-container text-on-surface-variant"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Action Stack */}
                <div className="flex md:flex-col items-center md:items-end justify-between md:justify-center gap-2.5 shrink-0 pt-3 md:pt-0 border-t md:border-t-0 border-outline-variant/30">
                  <div className="text-[11px] text-outline text-right">
                    <p className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> Apply by {internship.deadline}
                    </p>
                    <p className="text-[10px] text-on-surface-variant mt-0.5">
                      {internship.applicantsCount} students applied
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => toggleSaveInternship(internship.id)}
                      className={`p-2.5 rounded-xl border text-xs transition-colors ${
                        isSaved
                          ? 'bg-primary-fixed border-primary text-on-primary-fixed'
                          : 'border-outline-variant hover:bg-surface-container text-on-surface-variant'
                      }`}
                      title={isSaved ? 'Saved' : 'Save opportunity'}
                    >
                      <Zap className={`w-4 h-4 ${isSaved ? 'fill-primary' : ''}`} />
                    </button>

                    <button
                      onClick={() => setActiveModalInternship(internship)}
                      className="px-4 py-2.5 bg-surface-container hover:bg-surface-container-high text-on-surface font-semibold text-xs rounded-xl border border-outline-variant/60 transition-all"
                    >
                      View Details
                    </button>

                    <button
                      disabled={isApplied}
                      onClick={() => handleApply(internship.id)}
                      className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all shadow-xs ${
                        isApplied
                          ? 'bg-surface-container text-on-surface-variant cursor-not-allowed'
                          : 'bg-primary hover:bg-primary-container text-white hover:shadow-md hover:scale-[1.02] active:scale-[0.98]'
                      }`}
                    >
                      {isApplied ? 'Applied ✓' : '1-Click Apply'}
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Full Detail & Application Modal */}
      {activeModalInternship && (
        <div className="fixed inset-0 bg-on-surface/40 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-fadeIn">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-2xl w-full border border-outline-variant shadow-2xl space-y-5 max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-outline-variant/40">
              <div className="flex items-start gap-4">
                <img
                  src={activeModalInternship.companyLogo}
                  alt={activeModalInternship.company}
                  className="w-14 h-14 rounded-2xl object-cover border border-outline-variant/40 shrink-0"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-on-surface">{activeModalInternship.title}</h3>
                  </div>
                  <p className="text-xs text-on-surface-variant font-medium mt-0.5">
                    {activeModalInternship.company} • {activeModalInternship.location} • {activeModalInternship.workMode}
                  </p>
                  <p className="text-xs font-bold text-primary mt-1">
                    {activeModalInternship.stipend} ({activeModalInternship.duration})
                  </p>
                </div>
              </div>
              <button
                onClick={() => setActiveModalInternship(null)}
                className="text-outline hover:text-on-surface p-1 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-on-surface">Opportunity Overview</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                {activeModalInternship.description}
              </p>
            </div>

            {/* Responsibilities */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-on-surface">Key Responsibilities</h4>
              <ul className="space-y-1.5">
                {activeModalInternship.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-on-surface leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-on-surface">Eligibility & Requirements</h4>
              <ul className="space-y-1.5">
                {activeModalInternship.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-on-surface leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0 mt-1.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Perks */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-on-surface">Perks & Benefits</h4>
              <div className="flex flex-wrap gap-2">
                {activeModalInternship.perks.map((perk, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-semibold px-3 py-1 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200"
                  >
                    ✓ {perk}
                  </span>
                ))}
              </div>
            </div>

            {/* Cover Note Input */}
            <div className="space-y-2 pt-2 border-t border-outline-variant/30">
              <label className="block text-xs font-bold text-on-surface">
                Personalized Cover Note / Statement of Purpose (Optional)
              </label>
              <textarea
                rows={3}
                value={coverNote}
                onChange={(e) => setCoverNote(e.target.value)}
                placeholder="Share why you're passionate about this role and highlight your relevant project experience..."
                className="w-full p-3 rounded-xl bg-surface-container-lowest border border-outline-variant text-xs text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
              />
            </div>

            {/* Action Footer */}
            <div className="flex items-center justify-between pt-3 border-t border-outline-variant/40">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  showToast('Link Copied', 'Opportunity URL copied to clipboard', 'info');
                }}
                className="text-xs font-semibold text-on-surface-variant hover:text-primary flex items-center gap-1.5"
              >
                <Share2 className="w-4 h-4" />
                <span>Share Role</span>
              </button>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setActiveModalInternship(null)}
                  className="px-4 py-2.5 rounded-xl border border-outline-variant text-xs font-semibold text-on-surface-variant hover:bg-surface-container"
                >
                  Close
                </button>
                <button
                  onClick={() => handleApply(activeModalInternship.id)}
                  className="px-6 py-2.5 bg-primary hover:bg-primary-container text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Application</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
