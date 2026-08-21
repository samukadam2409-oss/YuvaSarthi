import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { FeedbackItem } from '../../types';
import {
  MessageSquare,
  Star,
  Send,
  CheckCircle2,
  Clock,
  AlertCircle,
  HelpCircle,
  ShieldCheck
} from 'lucide-react';

export const FeedbackPortal: React.FC = () => {
  const { userRole, feedbackList, submitFeedback, showToast } = useApp();
  const [category, setCategory] = useState<FeedbackItem['category']>('Platform Bug');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(5);

  const categories: FeedbackItem['category'][] = [
    'Platform Bug',
    'Internship Grievance',
    'Mentor Feedback',
    'Feature Suggestion',
    'Allocation Help'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!subject.trim() || !message.trim()) return;

    submitFeedback({
      category,
      subject: subject.trim(),
      message: message.trim(),
      rating,
      userRole
    });

    setSubject('');
    setMessage('');
    setRating(5);
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header Banner */}
      <div className="bg-white p-6 rounded-3xl border border-outline-variant/60 shadow-soft flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-primary-fixed text-primary">
              <MessageSquare className="w-5 h-5" />
            </span>
            <h2 className="text-xl font-bold text-on-surface">National Helpdesk & Grievance Redressal</h2>
          </div>
          <p className="text-xs text-on-surface-variant mt-1">
            Submit feedback, report internship onboarding issues, rate mentor guidance, or request assistance from the placement cell.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-xl bg-surface-container text-on-surface-variant">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>SLA: 24h Response Window</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Form: Left 2 Cols */}
        <div className="lg:col-span-2 bg-white p-6 sm:p-8 rounded-3xl border border-outline-variant/60 shadow-soft space-y-5">
          <h3 className="font-bold text-sm text-on-surface border-b border-outline-variant/30 pb-3">
            Submit Feedback or Grievance Ticket
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-on-surface mb-1.5">Category</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setCategory(cat)}
                    className={`p-2.5 rounded-xl text-xs font-semibold border text-center transition-all ${
                      category === cat
                        ? 'bg-primary text-white border-primary shadow-xs'
                        : 'bg-surface-container-lowest border-outline-variant text-on-surface-variant hover:bg-surface-container'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-on-surface mb-1.5">Rating / Experience Score</label>
              <div className="flex items-center gap-1.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className="p-1 text-outline hover:text-amber-400 transition-colors"
                  >
                    <Star
                      className={`w-6 h-6 ${
                        star <= rating ? 'text-amber-400 fill-amber-400' : 'text-outline-variant'
                      }`}
                    />
                  </button>
                ))}
                <span className="text-xs font-bold text-on-surface ml-2">{rating} of 5 Stars</span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-on-surface mb-1">Subject / Summary</label>
              <input
                type="text"
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="e.g. Need clarification regarding ISRO reporting date"
                className="w-full h-10 px-3 rounded-xl bg-surface-container-lowest border border-outline-variant text-xs text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-on-surface mb-1">Detailed Description</label>
              <textarea
                rows={4}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Describe your query, suggestion, or issue in detail..."
                className="w-full p-3 rounded-xl bg-surface-container-lowest border border-outline-variant text-xs text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
              />
            </div>

            <div className="flex justify-end pt-2">
              <button
                type="submit"
                className="px-6 py-2.5 bg-primary hover:bg-primary-container text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Ticket</span>
              </button>
            </div>
          </form>
        </div>

        {/* Right Col: Submitted Tickets History & FAQ */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-3xl border border-outline-variant/60 shadow-soft space-y-4">
            <h4 className="font-bold text-xs text-on-surface uppercase tracking-wider">Your Submitted Tickets</h4>

            {feedbackList.length === 0 ? (
              <p className="text-xs text-on-surface-variant text-center py-6">
                No tickets submitted yet. Your submitted grievances and feedback will appear here.
              </p>
            ) : (
              <div className="space-y-3">
                {feedbackList.map((item) => (
                  <div
                    key={item.id}
                    className="p-3.5 rounded-2xl bg-surface-container-lowest border border-outline-variant/40 space-y-1.5"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h5 className="font-bold text-xs text-on-surface line-clamp-1">{item.subject}</h5>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed shrink-0">
                        {item.status}
                      </span>
                    </div>
                    <p className="text-[11px] text-on-surface-variant line-clamp-2">{item.message}</p>
                    <div className="flex items-center justify-between text-[10px] text-outline pt-1 border-t border-outline-variant/20">
                      <span>{item.category}</span>
                      <span>{item.createdAt}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="bg-gradient-to-br from-surface-container-low to-surface-container p-5 rounded-3xl border border-primary/20 space-y-2">
            <h5 className="font-bold text-xs text-on-surface flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4 text-primary" />
              <span>Need Immediate Assistance?</span>
            </h5>
            <p className="text-[11px] text-on-surface-variant leading-relaxed">
              Toll-Free National Helpdesk: <strong>1800-11-2244</strong> (Mon–Sat, 09:00 AM – 06:00 PM IST) or email <strong>support@yuvasarthi.gov.in</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
