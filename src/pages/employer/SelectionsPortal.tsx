import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  CheckCircle2,
  Award,
  Download,
  Calendar,
  Mail,
  ShieldCheck,
  Building2,
  Users,
  Search
} from 'lucide-react';

export const SelectionsPortal: React.FC = () => {
  const { applications, showToast } = useApp();

  const selectedCandidates = applications.filter((a) => a.status === 'Selected');

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header Banner */}
      <div className="bg-white p-6 rounded-3xl border border-outline-variant/60 shadow-soft flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-emerald-100 text-emerald-800">
              <Award className="w-5 h-5" />
            </span>
            <h2 className="text-xl font-bold text-on-surface">Candidate Selections & Allotments</h2>
          </div>
          <p className="text-xs text-on-surface-variant mt-1">
            Confirmed candidate selections, verified national allotment orders, and joining onboarding tracking.
          </p>
        </div>

        <button
          onClick={() => showToast('Export Complete', 'Selections spreadsheet exported to CSV', 'success')}
          className="px-4 py-2 bg-surface-container hover:bg-surface-container-high text-on-surface rounded-xl text-xs font-bold border border-outline-variant/60 flex items-center gap-1.5 transition-all"
        >
          <Download className="w-4 h-4 text-primary" />
          <span>Export Allotment Roster</span>
        </button>
      </div>

      {/* Selected Roster */}
      <div className="bg-white p-6 rounded-3xl border border-outline-variant/60 shadow-soft space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-outline-variant/30">
          <h3 className="font-bold text-sm text-on-surface flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Official Selection Roster</span>
          </h3>
          <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            {selectedCandidates.length} Selected Candidates
          </span>
        </div>

        {selectedCandidates.length === 0 ? (
          <div className="py-12 text-center space-y-2">
            <Award className="w-10 h-10 text-outline mx-auto" />
            <h4 className="font-bold text-sm text-on-surface">No selected candidates yet</h4>
            <p className="text-xs text-on-surface-variant">
              Shortlist and select applicants from the Applicants Review pipeline.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-outline-variant/40 text-on-surface-variant uppercase text-[10px] tracking-wider">
                  <th className="pb-3 font-bold">Candidate Name</th>
                  <th className="pb-3 font-bold">College & Branch</th>
                  <th className="pb-3 font-bold">Assigned Role</th>
                  <th className="pb-3 font-bold">AI Fit Score</th>
                  <th className="pb-3 font-bold">Allotment Status</th>
                  <th className="pb-3 font-bold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/20">
                {selectedCandidates.map((c) => (
                  <tr key={c.id} className="hover:bg-surface-container-lowest transition-colors">
                    <td className="py-4 font-bold text-on-surface">{c.studentName}</td>
                    <td className="py-4 text-on-surface-variant">{c.studentCollege} (CGPA: {c.studentCgpa})</td>
                    <td className="py-4 font-medium text-primary">{c.internshipTitle}</td>
                    <td className="py-4">
                      <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        {c.aiMatchScore}% Fit
                      </span>
                    </td>
                    <td className="py-4">
                      <span className="inline-flex items-center gap-1 font-semibold text-emerald-700 text-[11px]">
                        <ShieldCheck className="w-3.5 h-3.5" /> Allotment Confirmed
                      </span>
                    </td>
                    <td className="py-4 text-right">
                      <button
                        onClick={() => showToast('Order Generated', `Downloaded allotment letter for ${c.studentName}`, 'success')}
                        className="px-3 py-1.5 bg-surface-container hover:bg-surface-container-high rounded-lg font-semibold text-primary"
                      >
                        Allotment Order
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};
