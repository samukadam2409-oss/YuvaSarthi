import React, { useEffect, useState } from 'react';
import { useApp } from '../../context/AppContext';
import confetti from 'canvas-confetti';
import {
  Award,
  Sparkles,
  CheckCircle2,
  Download,
  Printer,
  Calendar,
  MapPin,
  Building,
  UserCheck,
  Mail,
  ShieldCheck,
  FileText,
  AlertCircle
} from 'lucide-react';

export const AllocationResult: React.FC = () => {
  const { allocation, studentProfile, showToast } = useApp();
  const [accepted, setAccepted] = useState(true);

  useEffect(() => {
    // Fire confetti on load
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore in environments without canvas
    }
  }, []);

  const fireConfetti = () => {
    confetti({
      particleCount: 120,
      spread: 100,
      origin: { y: 0.5 }
    });
    showToast('Congratulations!', 'Celebration confetti fired 🎉', 'success');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Top Banner with Confetti Trigger */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-primary text-white p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold text-yellow-300">
            <Sparkles className="w-4 h-4" />
            <span>Official National Allotment Result 2026</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
            Congratulations, {studentProfile.name}! 🎉
          </h2>
          <p className="text-xs sm:text-sm text-emerald-100 max-w-xl leading-relaxed">
            You have been officially matched and allocated to <strong>{allocation.companyName}</strong> under the {allocation.scheme}.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={fireConfetti}
            className="px-4 py-2.5 bg-yellow-400 hover:bg-yellow-300 text-on-surface font-extrabold text-xs rounded-xl shadow-lg transition-all hover:scale-105 active:scale-95 flex items-center gap-1.5"
          >
            <span>Celebrate 🎉</span>
          </button>

          <button
            onClick={handlePrint}
            className="px-4 py-2.5 bg-white/20 hover:bg-white/30 text-white font-bold text-xs rounded-xl backdrop-blur-md border border-white/30 transition-all flex items-center gap-1.5"
          >
            <Printer className="w-4 h-4" />
            <span>Print Allotment</span>
          </button>
        </div>
      </div>

      {/* Official Allotment Letter Document Card */}
      <div className="bg-white rounded-3xl border border-outline-variant/60 shadow-xl overflow-hidden p-6 sm:p-10 space-y-8 print:p-0 print:border-none print:shadow-none">
        {/* Document Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between pb-6 border-b-2 border-outline-variant/40 gap-4 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <img
              src={allocation.companyLogo}
              alt={allocation.companyName}
              className="w-16 h-16 rounded-2xl object-cover border border-outline-variant/40"
            />
            <div>
              <span className="text-[11px] font-bold text-primary tracking-widest uppercase">
                GOVERNMENT OF INDIA • NATIONAL CAREER PORTAL
              </span>
              <h3 className="text-lg sm:text-xl font-black text-on-surface">
                OFFICIAL INTERNSHIP ALLOTMENT ORDER
              </h3>
              <p className="text-xs text-on-surface-variant font-mono">
                Order ID: {allocation.allocationId} • Date: {allocation.letterGeneratedDate}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-300">
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            <span>{allocation.verificationStatus}</span>
          </div>
        </div>

        {/* Candidate & Allotment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/40">
          {/* Candidate Details */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-primary border-b pb-1 border-outline-variant/30">
              Candidate Information
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <span className="text-on-surface-variant">Full Name:</span>
              <span className="font-bold text-on-surface">{studentProfile.name}</span>

              <span className="text-on-surface-variant">Candidate ID:</span>
              <span className="font-mono text-on-surface">{allocation.candidateId}</span>

              <span className="text-on-surface-variant">Institution:</span>
              <span className="font-medium text-on-surface">{studentProfile.college}</span>

              <span className="text-on-surface-variant">Degree & Branch:</span>
              <span className="font-medium text-on-surface">{studentProfile.degree} ({studentProfile.branch})</span>

              <span className="text-on-surface-variant">Cumulative CGPA:</span>
              <span className="font-bold text-primary">{studentProfile.cgpa} / 10.0</span>
            </div>
          </div>

          {/* Allocation Details */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-primary border-b pb-1 border-outline-variant/30">
              Host Organization & Assignment
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <span className="text-on-surface-variant">Assigned Role:</span>
              <span className="font-bold text-emerald-700">{allocation.allocatedRole}</span>

              <span className="text-on-surface-variant">Host Institution:</span>
              <span className="font-bold text-on-surface">{allocation.companyName}</span>

              <span className="text-on-surface-variant">Department:</span>
              <span className="text-on-surface">{allocation.department}</span>

              <span className="text-on-surface-variant">Monthly Stipend:</span>
              <span className="font-bold text-primary">{allocation.stipend}</span>

              <span className="text-on-surface-variant">Tenure:</span>
              <span className="font-medium text-on-surface">{allocation.duration}</span>
            </div>
          </div>
        </div>

        {/* Reporting & Supervisor Coordinates */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-2xl bg-white border border-outline-variant/60 space-y-2">
            <div className="flex items-center gap-2 text-primary font-bold text-xs">
              <Calendar className="w-4 h-4" />
              <span>Reporting Schedule & Location</span>
            </div>
            <p className="text-xs text-on-surface font-semibold">{allocation.reportingDate}</p>
            <p className="text-xs text-on-surface-variant flex items-start gap-1.5 pt-1">
              <MapPin className="w-4 h-4 text-outline shrink-0 mt-0.5" />
              <span>{allocation.workLocation}</span>
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-outline-variant/60 space-y-2">
            <div className="flex items-center gap-2 text-primary font-bold text-xs">
              <UserCheck className="w-4 h-4" />
              <span>Assigned Research Mentor</span>
            </div>
            <p className="text-xs text-on-surface font-bold">{allocation.mentorName}</p>
            <p className="text-xs text-on-surface-variant">{allocation.mentorDesignation}</p>
            <p className="text-xs text-primary font-mono flex items-center gap-1.5 pt-1">
              <Mail className="w-3.5 h-3.5" /> {allocation.mentorEmail}
            </p>
          </div>
        </div>

        {/* Instructions */}
        <div className="space-y-3 pt-2 border-t border-outline-variant/30">
          <h4 className="text-xs font-bold uppercase tracking-wider text-on-surface flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-primary" />
            <span>Mandatory Onboarding Instructions</span>
          </h4>
          <ol className="space-y-2 list-decimal list-inside text-xs text-on-surface-variant leading-relaxed">
            {allocation.instructions.map((inst, idx) => (
              <li key={idx} className="pl-1">
                {inst}
              </li>
            ))}
          </ol>
        </div>

        {/* Document Footer & Signoff */}
        <div className="pt-6 border-t-2 border-outline-variant/40 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-primary-fixed text-primary flex items-center justify-center font-bold text-sm">
              AICTE
            </div>
            <div className="text-[11px] text-outline">
              <p className="font-bold text-on-surface">Digitally Signed & Validated</p>
              <p>National Career Allocation Authority of India</p>
            </div>
          </div>

          <button
            onClick={() => {
              showToast('Letter Downloaded', 'PDF Allotment Order saved to your device', 'success');
            }}
            className="px-6 py-2.5 bg-primary hover:bg-primary-container text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            <span>Download Certified Allotment PDF</span>
          </button>
        </div>
      </div>
    </div>
  );
};
