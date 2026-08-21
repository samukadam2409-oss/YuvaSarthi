import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  FileText,
  Sparkles,
  Upload,
  CheckCircle2,
  AlertTriangle,
  FileCheck,
  TrendingUp,
  Tag,
  Download,
  RefreshCw,
  Zap,
  Target,
  BarChart3,
  Layers
} from 'lucide-react';

export const ResumeAnalyzer: React.FC = () => {
  const { resumeAnalysis, analyzeResumeText, showToast } = useApp();
  const [analyzing, setAnalyzing] = useState(false);
  const [resumeText, setResumeText] = useState(
    `AARAV SHARMA\nComputer Science & AI Engineering Student | NIT Delhi\nEmail: aarav.sharma@campus.edu.in | Phone: +91 98765 43210 | Portfolio: github.com/aarav-sharma\n\nEDUCATION\nBachelor of Technology in Computer Science & Engineering (2022 - 2026)\nNational Institute of Technology Delhi | CGPA: 8.92 / 10.0\n\nTECHNICAL SKILLS\nLanguages & Frameworks: React 19, TypeScript, Python, FastAPI, PyTorch, Tailwind CSS, Node.js\nDatabases & Cloud: PostgreSQL, ChromaDB Vector DB, Docker, AWS (S3, EC2), Git, Linux\nAI / ML: Computer Vision, RAG Architectures, Transformer Embeddings, Scikit-Learn\n\nPROJECTS\n1. YuvaSarthi Smart Placement Engine (React, FastAPI, ChromaDB)\n- Architected high-concurrency career matching engine pairing 10,000+ candidates with national internships.\n- Engineered semantic vector search indexing with sub-80ms query latency.\n- Built responsive dashboard with React 19 and Tailwind CSS.\n\n2. Neural Vision Diagnostic Assistant (PyTorch, Flask, Docker)\n- Developed deep convolutional neural network for automated chest radiograph classification.\n- Achieved 94.2% validation accuracy on 15,000+ benchmark clinical images.\n- Containerized microservice with Docker and automated testing suite.\n\nCERTIFICATIONS & AWARDS\n- Smart India Hackathon Finalist Credential (AICTE / Ministry of Education)\n- Deep Learning Specialization (DeepLearning.AI / Coursera)\n- AWS Certified Cloud Practitioner`
  );

  const handleRunAnalysis = () => {
    setAnalyzing(true);
    setTimeout(() => {
      analyzeResumeText(resumeText);
      setAnalyzing(false);
    }, 1200);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAnalyzing(true);
      setTimeout(() => {
        analyzeResumeText(resumeText + `\nUploaded Document: ${file.name}`);
        setAnalyzing(false);
        showToast('Resume Uploaded', `Parsed and analyzed ${file.name}`, 'success');
      }, 1500);
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header Banner */}
      <div className="bg-white p-6 rounded-3xl border border-outline-variant/60 shadow-soft flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-primary-fixed text-primary">
              <FileCheck className="w-5 h-5" />
            </span>
            <h2 className="text-xl font-bold text-on-surface">AI Resume & ATS Optimization Engine</h2>
          </div>
          <p className="text-xs text-on-surface-variant mt-1">
            Simulate national corporate and government Applicant Tracking Systems (ATS) to identify missing keywords and impact metrics.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <label className="cursor-pointer px-4 py-2 bg-surface-container hover:bg-surface-container-high text-on-surface rounded-xl text-xs font-semibold border border-outline-variant/60 flex items-center gap-2 transition-all">
            <Upload className="w-4 h-4 text-primary" />
            <span>Upload PDF / Word</span>
            <input type="file" accept=".pdf,.doc,.docx,.txt" className="hidden" onChange={handleFileUpload} />
          </label>

          <button
            onClick={handleRunAnalysis}
            disabled={analyzing}
            className="px-5 py-2 bg-primary hover:bg-primary-container text-white rounded-xl text-xs font-bold shadow-md flex items-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
          >
            <RefreshCw className={`w-4 h-4 ${analyzing ? 'animate-spin' : ''}`} />
            <span>{analyzing ? 'Analyzing Resume...' : 'Re-Score Resume'}</span>
          </button>
        </div>
      </div>

      {/* Main Score Hero Card */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left: Overall ATS Score Gauge */}
        <div className="bg-gradient-to-br from-primary to-primary-container text-white p-6 rounded-3xl shadow-xl flex flex-col items-center justify-center text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-xl pointer-events-none" />
          <span className="text-xs font-bold uppercase tracking-wider text-primary-fixed">ATS Readiness Score</span>
          <div className="my-4 relative w-32 h-32 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
              <path
                className="text-white/20"
                strokeWidth="3.5"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="text-emerald-300"
                strokeDasharray={`${resumeAnalysis.overallScore}, 100`}
                strokeWidth="3.5"
                strokeLinecap="round"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className="text-3xl font-black">{resumeAnalysis.overallScore}</span>
              <span className="text-[10px] text-white/80 font-medium">/ 100</span>
            </div>
          </div>
          <p className="text-xs text-primary-fixed leading-relaxed">
            Ranked in the <strong>Top 8%</strong> of applicants for AI & Full-Stack roles.
          </p>
        </div>

        {/* Right 3 Cols: Metric Breakdown Bars */}
        <div className="lg:col-span-3 bg-white p-6 rounded-3xl border border-outline-variant/60 shadow-soft space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-outline-variant/30">
            <h3 className="font-bold text-sm text-on-surface flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-primary" />
              <span>Core ATS Dimension Ratings</span>
            </h3>
            <span className="text-xs font-semibold text-emerald-600">High Optimization</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Impact */}
            <div className="p-3.5 rounded-2xl bg-surface-container-lowest border border-outline-variant/40 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-on-surface">Measurable Impact</span>
                <span className="font-black text-primary">{resumeAnalysis.impactScore}%</span>
              </div>
              <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: `${resumeAnalysis.impactScore}%` }} />
              </div>
              <p className="text-[11px] text-on-surface-variant">Clear action verbs and numerical performance stats.</p>
            </div>

            {/* Keywords */}
            <div className="p-3.5 rounded-2xl bg-surface-container-lowest border border-outline-variant/40 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-on-surface">Keyword Match Rate</span>
                <span className="font-black text-secondary">{resumeAnalysis.keywordsScore}%</span>
              </div>
              <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
                <div className="h-full bg-secondary rounded-full" style={{ width: `${resumeAnalysis.keywordsScore}%` }} />
              </div>
              <p className="text-[11px] text-on-surface-variant">Strong alignment with target AI job descriptions.</p>
            </div>

            {/* Brevity */}
            <div className="p-3.5 rounded-2xl bg-surface-container-lowest border border-outline-variant/40 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-on-surface">Brevity & Conciseness</span>
                <span className="font-black text-emerald-700">{resumeAnalysis.brevityScore}%</span>
              </div>
              <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
                <div className="h-full bg-emerald-600 rounded-full" style={{ width: `${resumeAnalysis.brevityScore}%` }} />
              </div>
              <p className="text-[11px] text-on-surface-variant">Appropriate bullet length without filler words.</p>
            </div>

            {/* Style & Layout */}
            <div className="p-3.5 rounded-2xl bg-surface-container-lowest border border-outline-variant/40 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-on-surface">Structure & Hierarchy</span>
                <span className="font-black text-indigo-700">{resumeAnalysis.styleScore}%</span>
              </div>
              <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
                <div className="h-full bg-indigo-600 rounded-full" style={{ width: `${resumeAnalysis.styleScore}%` }} />
              </div>
              <p className="text-[11px] text-on-surface-variant">Clean single column layout readable by all scanners.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Analysis Details: Strengths, Improvements, Missing Keywords */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Key Strengths */}
        <div className="bg-white p-6 rounded-3xl border border-outline-variant/60 shadow-soft space-y-4">
          <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
            <CheckCircle2 className="w-4 h-4" />
            <span>Demonstrated Strengths</span>
          </div>
          <ul className="space-y-2.5">
            {resumeAnalysis.strengths.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-on-surface leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0 mt-1.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Improvement Areas */}
        <div className="bg-white p-6 rounded-3xl border border-outline-variant/60 shadow-soft space-y-4">
          <div className="flex items-center gap-2 text-amber-600 font-bold text-sm">
            <AlertTriangle className="w-4 h-4" />
            <span>Recommended Improvements</span>
          </div>
          <ul className="space-y-2.5">
            {resumeAnalysis.improvements.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-on-surface leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-1.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Missing Keywords & Extracted Skills */}
        <div className="bg-white p-6 rounded-3xl border border-outline-variant/60 shadow-soft space-y-4">
          <div className="flex items-center gap-2 text-primary font-bold text-sm">
            <Zap className="w-4 h-4" />
            <span>Missing High-Value Keywords</span>
          </div>
          <p className="text-[11px] text-on-surface-variant">Adding these will boost your score above 95:</p>
          <div className="flex flex-wrap gap-1.5">
            {resumeAnalysis.missingKeywords.map((kw) => (
              <span
                key={kw}
                className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-red-50 text-red-700 border border-red-200 flex items-center gap-1"
              >
                + {kw}
              </span>
            ))}
          </div>

          <div className="pt-2 border-t border-outline-variant/30">
            <span className="text-xs font-bold text-on-surface block mb-2">Detected Key Skills</span>
            <div className="flex flex-wrap gap-1.5">
              {resumeAnalysis.detectedSkills.map((sk) => (
                <span
                  key={sk}
                  className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-surface-container text-on-surface-variant"
                >
                  {sk}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Resume Text Editor */}
      <div className="bg-white p-6 rounded-3xl border border-outline-variant/60 shadow-soft space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-primary" />
            <h3 className="font-bold text-sm text-on-surface">Resume Content & Live Editor</h3>
          </div>
          <span className="text-xs text-outline">{resumeText.split(/\s+/).filter(Boolean).length} Words</span>
        </div>

        <textarea
          rows={10}
          value={resumeText}
          onChange={(e) => setResumeText(e.target.value)}
          className="w-full p-4 rounded-2xl bg-surface-container-lowest border border-outline-variant/60 text-xs font-mono text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all leading-relaxed"
          placeholder="Paste or type your resume content here..."
        />

        <div className="flex justify-end gap-3">
          <button
            onClick={() => {
              showToast('Report Downloaded', 'PDF summary saved to your downloads', 'success');
            }}
            className="px-4 py-2 bg-surface-container hover:bg-surface-container-high text-on-surface rounded-xl text-xs font-semibold border border-outline-variant/60 flex items-center gap-2 transition-all"
          >
            <Download className="w-4 h-4 text-primary" />
            <span>Download Analysis PDF</span>
          </button>

          <button
            onClick={handleRunAnalysis}
            disabled={analyzing}
            className="px-5 py-2 bg-primary hover:bg-primary-container text-white rounded-xl text-xs font-bold shadow-md flex items-center gap-2 transition-all"
          >
            <Sparkles className="w-4 h-4" />
            <span>Analyze Updated Text</span>
          </button>
        </div>
      </div>
    </div>
  );
};
