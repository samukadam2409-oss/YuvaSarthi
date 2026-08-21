import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  GraduationCap,
  Sparkles,
  BookOpen,
  Clock,
  Star,
  CheckCircle2,
  PlayCircle,
  Filter,
  Search
} from 'lucide-react';

export const LearningHub: React.FC = () => {
  const { courses, enrollInCourse, showToast } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Web Development', 'Artificial Intelligence', 'Cloud & DevOps', 'Generative AI'];

  const filteredCourses = courses.filter((c) => {
    const matchesCat = selectedCategory === 'All' || c.category === selectedCategory;
    const matchesSearch =
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
      c.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const enrolledCourses = courses.filter((c) => c.isEnrolled);

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header Banner */}
      <div className="bg-white p-6 rounded-3xl border border-outline-variant/60 shadow-soft flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-primary-fixed text-primary">
              <GraduationCap className="w-5 h-5" />
            </span>
            <h2 className="text-xl font-bold text-on-surface">Learning Hub & National Micro-Credentials</h2>
          </div>
          <p className="text-xs text-on-surface-variant mt-1">
            Free and sponsored training tracks curated by IITs, IISc, NPTEL, and industry partners to bridge your skill gaps.
          </p>
        </div>

        <div className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center gap-2 shrink-0">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>{enrolledCourses.length} Active Courses in Progress</span>
        </div>
      </div>

      {/* Continue Learning Section if any enrolled */}
      {enrolledCourses.length > 0 && (
        <div className="bg-gradient-to-br from-surface-container-low to-surface-container p-6 rounded-3xl border border-primary/20 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-sm text-on-surface flex items-center gap-2">
              <PlayCircle className="w-4 h-4 text-primary" />
              <span>Continue Learning</span>
            </h3>
            <span className="text-xs font-bold text-primary">Your Progress</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {enrolledCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white p-4 rounded-2xl border border-outline-variant/50 shadow-soft flex items-center gap-4"
              >
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-16 h-16 rounded-xl object-cover shrink-0"
                />
                <div className="flex-1 min-w-0 space-y-1.5">
                  <h4 className="text-xs font-bold text-on-surface line-clamp-1">{course.title}</h4>
                  <div className="flex items-center justify-between text-[11px] text-on-surface-variant">
                    <span>{course.provider}</span>
                    <span className="font-bold text-primary">{course.progress}% Completed</span>
                  </div>
                  <div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: `${course.progress}%` }} />
                  </div>
                </div>
                <button
                  onClick={() => showToast('Resuming Lecture', `Opening lesson for "${course.title}"`, 'info')}
                  className="p-2.5 rounded-xl bg-primary text-white hover:bg-primary-container shrink-0 shadow-xs"
                >
                  <PlayCircle className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Categories */}
        <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1">
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

        {/* Search */}
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-outline absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search courses or skills..."
            className="w-full h-9 pl-9 pr-3 rounded-full bg-white border border-outline-variant text-xs text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
          />
        </div>
      </div>

      {/* Course Catalog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-3xl border border-outline-variant/60 shadow-soft hover:shadow-card transition-all overflow-hidden flex flex-col justify-between group"
          >
            <div>
              {/* Course Banner */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-lg text-[10px] font-bold text-primary">
                  {course.provider}
                </div>
                <div className="absolute top-3 right-3 bg-on-surface/80 backdrop-blur-md px-2.5 py-1 rounded-lg text-[10px] font-bold text-white flex items-center gap-1">
                  <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                  <span>{course.rating}</span>
                </div>
              </div>

              {/* Course Info */}
              <div className="p-5 space-y-3">
                <div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant uppercase tracking-wider">
                    {course.level} • {course.category}
                  </span>
                  <h4 className="text-base font-bold text-on-surface mt-1.5 group-hover:text-primary transition-colors">
                    {course.title}
                  </h4>
                  <p className="text-xs text-on-surface-variant mt-1">{course.instructor}</p>
                </div>

                <div className="flex items-center gap-4 text-xs text-outline">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {course.duration}
                  </span>
                  <span>•</span>
                  <span>{course.reviewsCount} learners enrolled</span>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {course.skills.map((skill) => (
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

            {/* CTA */}
            <div className="p-5 pt-0 border-t border-outline-variant/30 mt-3">
              <button
                onClick={() => enrollInCourse(course.id)}
                className={`w-full py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                  course.isEnrolled
                    ? 'bg-surface-container text-primary hover:bg-surface-container-high'
                    : 'bg-primary hover:bg-primary-container text-white shadow-xs hover:shadow-md'
                }`}
              >
                {course.isEnrolled ? (
                  <>
                    <PlayCircle className="w-4 h-4" />
                    <span>Continue Course ({course.progress}%)</span>
                  </>
                ) : (
                  <>
                    <BookOpen className="w-4 h-4" />
                    <span>Enroll for Free (AICTE Sponsored)</span>
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
