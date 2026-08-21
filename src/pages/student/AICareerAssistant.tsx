import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { ChatMessage, KBEntry } from '../../types';
import { INITIAL_CHAT_MESSAGES } from '../../data/mockData';
import { AI_KNOWLEDGE_BASE } from '../../data/aiKnowledgeBase';
import { processAIQuery } from '../../utils/aiAssistantEngine';
import {
  Bot,
  Send,
  Sparkles,
  User,
  RefreshCw,
  Lightbulb,
  ArrowRight,
  FileCheck2,
  Briefcase,
  GraduationCap,
  Copy,
  Check,
  BookOpen,
  Search,
  Tag,
  Layers,
  ChevronRight,
  X,
  ExternalLink,
  Award
} from 'lucide-react';

export const AICareerAssistant: React.FC = () => {
  const { studentProfile, setActiveTab, resumeAnalysis, allocation } = useApp();
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_CHAT_MESSAGES);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [showKBModal, setShowKBModal] = useState(false);
  const [kbCategoryFilter, setKbCategoryFilter] = useState<string>('all');
  const [kbSearchQuery, setKbSearchQuery] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);

  const quickPrompts = [
    { label: 'Boost ATS to 95+', query: 'How do I improve my ATS score from 89 to 95+?' },
    { label: 'Remote AI Internships', query: 'What remote AI internships match my Python & React profile?' },
    { label: 'ISRO Allocation Offer', query: 'Tell me about my ISRO satellite trainee allocation and joining date' },
    { label: 'AICTE Policy & Credits', query: 'AICTE mandatory internship policy guidelines and academic credits' },
    { label: 'Tata Digital Cover Note', query: 'Draft a customized cover note for Tata Digital Full-Stack role' },
    { label: 'Top 2026 Certifications', query: 'Which certifications are most valued for Tier-1 placements?' },
    { label: 'Bridge Skill Gaps', query: 'How does skill gap analysis work and how do I bridge Docker gaps?' },
    { label: 'Technical Interview Prep', query: 'How to prepare for technical coding interview and DSA?' }
  ];

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleCopyText = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputMessage;
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: `msg-${Date.now()}`,
      sender: 'user',
      text: text.trim(),
      timestamp: 'Just now'
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputMessage('');
    setIsTyping(true);

    // Contextual intelligent processing via the AI Assistant Engine
    setTimeout(() => {
      const result = processAIQuery(text, {
        studentProfile,
        resumeAnalysis,
        allocation
      });

      const aiMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: result.response,
        timestamp: 'Just now',
        category: result.categoryLabel,
        extractedKeywords: result.extractedKeywords,
        confidence: result.confidence,
        suggestions: result.suggestions,
        actionRoute: result.actionRoute,
        actionLabel: result.actionLabel
      };

      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 650);
  };

  const categories = [
    { id: 'all', label: 'All Topics' },
    { id: 'resume', label: 'ATS & Resumes' },
    { id: 'internships', label: 'Internships' },
    { id: 'skills', label: 'Skill Gaps & Paths' },
    { id: 'schemes', label: 'AICTE & Govt Schemes' },
    { id: 'interview', label: 'Interview Prep' },
    { id: 'cover-letter', label: 'Cover Letters' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'allocation', label: 'Allocations' },
    { id: 'portfolio', label: 'Portfolio & GitHub' },
    { id: 'stipend', label: 'Stipends & PPO' }
  ];

  const filteredKB = AI_KNOWLEDGE_BASE.filter((entry) => {
    const matchesCat = kbCategoryFilter === 'all' || entry.category === kbCategoryFilter;
    const matchesSearch =
      !kbSearchQuery ||
      entry.title.toLowerCase().includes(kbSearchQuery.toLowerCase()) ||
      entry.primaryKeywords.some((k) => k.toLowerCase().includes(kbSearchQuery.toLowerCase())) ||
      entry.sampleQuestions.some((q) => q.toLowerCase().includes(kbSearchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  const handleSelectKBTopic = (entry: KBEntry) => {
    setShowKBModal(false);
    handleSendMessage(entry.sampleQuestions[0] || entry.title);
  };

  // Helper to render formatted text with basic bolding and bullet highlights
  const renderFormattedText = (text: string) => {
    const lines = text.split('\n');
    return (
      <div className="space-y-1.5">
        {lines.map((line, idx) => {
          if (!line.trim()) return <div key={idx} className="h-1.5" />;

          // Process markdown bold (**text**)
          const parts = line.split(/(\*\*.*?\*\*|\*.*?\*)/g);
          return (
            <div key={idx} className="leading-relaxed">
              {parts.map((part, pIdx) => {
                if (part.startsWith('**') && part.endsWith('**')) {
                  return (
                    <strong key={pIdx} className="font-bold text-on-surface">
                      {part.slice(2, -2)}
                    </strong>
                  );
                }
                if (part.startsWith('*') && part.endsWith('*')) {
                  return (
                    <em key={pIdx} className="italic text-on-surface-variant font-medium">
                      {part.slice(1, -1)}
                    </em>
                  );
                }
                return <span key={pIdx}>{part}</span>;
              })}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="space-y-6 animate-fadeIn pb-8">
      {/* Header Banner */}
      <div className="bg-white p-6 rounded-3xl border border-outline-variant/60 shadow-soft flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white shadow-md shadow-primary/20 shrink-0">
            <Bot className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-on-surface">YuvaSarthi AI Career Assistant</h2>
              <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Knowledge Base Active
              </span>
            </div>
            <p className="text-xs text-on-surface-variant mt-0.5">
              Intelligent keyword-driven mentor for ATS optimization, verified internships, AICTE schemes, and interview prep.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setShowKBModal(true)}
            className="px-3.5 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-xl text-xs font-bold border border-primary/20 flex items-center gap-1.5 transition-all shadow-xs"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Browse Topics (40+)</span>
          </button>
          <button
            onClick={() => setMessages(INITIAL_CHAT_MESSAGES)}
            className="px-3 py-2 bg-surface-container hover:bg-surface-container-high text-on-surface rounded-xl text-xs font-semibold border border-outline-variant/60 flex items-center gap-1.5 transition-all"
            title="Reset conversation"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Clear Chat</span>
          </button>
        </div>
      </div>

      {/* Main Chat Interface Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Chat Stream: Left 3 Cols */}
        <div className="lg:col-span-3 bg-white rounded-3xl border border-outline-variant/60 shadow-soft flex flex-col h-[650px] overflow-hidden">
          {/* Messages Scroll Area */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5">
            {messages.map((msg) => {
              const isUser = msg.sender === 'user';
              return (
                <div
                  key={msg.id}
                  className={`flex items-start gap-3 ${isUser ? 'flex-row-reverse' : ''}`}
                >
                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-xs font-bold ${
                      isUser
                        ? 'bg-primary text-white shadow-xs'
                        : 'bg-gradient-to-br from-secondary to-primary text-white shadow-xs'
                    }`}
                  >
                    {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                  </div>

                  <div className={`space-y-2 max-w-[88%] sm:max-w-[80%] ${isUser ? 'text-right' : ''}`}>
                    {/* Topic Badge for AI */}
                    {!isUser && msg.category && (
                      <div className="flex items-center gap-2 pb-0.5">
                        <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-surface-container text-primary border border-outline-variant/50 flex items-center gap-1">
                          <Sparkles className="w-2.5 h-2.5 text-primary" /> {msg.category}
                        </span>
                      </div>
                    )}

                    {/* Chat Bubble Container */}
                    <div
                      className={`p-4 sm:p-5 rounded-2xl text-xs text-left relative group ${
                        isUser
                          ? 'bg-primary text-white rounded-tr-none shadow-xs'
                          : 'bg-surface-container-lowest border border-outline-variant/70 text-on-surface rounded-tl-none shadow-xs'
                      }`}
                    >
                      {/* Copy Action Button */}
                      {!isUser && (
                        <button
                          onClick={() => handleCopyText(msg.text, msg.id)}
                          className="absolute top-3 right-3 p-1.5 rounded-lg bg-surface-container text-on-surface-variant hover:text-primary hover:bg-surface-container-high opacity-0 group-hover:opacity-100 transition-all"
                          title="Copy message"
                        >
                          {copiedId === msg.id ? (
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      )}

                      {/* Content Renderer */}
                      {renderFormattedText(msg.text)}

                      {/* Direct Navigation Action Button inside Bubble */}
                      {!isUser && msg.actionRoute && (
                        <div className="mt-4 pt-3 border-t border-outline-variant/40 flex items-center justify-between">
                          <span className="text-[11px] text-on-surface-variant font-medium">
                            Ready to take action on this?
                          </span>
                          <button
                            onClick={() => setActiveTab(msg.actionRoute!)}
                            className="px-3 py-1.5 bg-primary text-white hover:bg-primary-container rounded-xl text-[11px] font-bold flex items-center gap-1.5 transition-all shadow-xs hover:scale-105 active:scale-95"
                          >
                            <span>{msg.actionLabel || 'Open Section'}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Dynamic Follow-up Suggestions */}
                    {msg.suggestions && msg.suggestions.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {msg.suggestions.map((sug, idx) => (
                          <button
                            key={idx}
                            onClick={() => {
                              if (sug.toLowerCase().includes('open resume analyzer') || sug.toLowerCase().includes('scan missing keywords')) {
                                setActiveTab('resume-analyzer');
                              } else if (sug.toLowerCase().includes('go to internships portal') || sug.toLowerCase().includes('browse internships')) {
                                setActiveTab('internships');
                              } else if (sug.toLowerCase().includes('open learning hub') || sug.toLowerCase().includes('enroll in free modules')) {
                                setActiveTab('learning');
                              } else if (sug.toLowerCase().includes('view allocation') || sug.toLowerCase().includes('download offer letter')) {
                                setActiveTab('allocation');
                              } else if (sug.toLowerCase().includes('open skill gap analyzer')) {
                                setActiveTab('skill-gap');
                              } else if (sug.toLowerCase().includes('explore career paths') || sug.toLowerCase().includes('view career roadmaps')) {
                                setActiveTab('career-paths');
                              } else {
                                handleSendMessage(sug);
                              }
                            }}
                            className="text-[11px] font-semibold px-3 py-1 rounded-full bg-surface-container hover:bg-primary-fixed hover:text-on-primary-fixed text-primary border border-outline-variant/60 transition-all flex items-center gap-1 hover:scale-105 active:scale-95"
                          >
                            <span>⚡</span>
                            <span>{sug}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {isTyping && (
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-secondary to-primary text-white flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="p-3.5 rounded-2xl bg-surface-container-lowest border border-outline-variant/60 text-xs text-on-surface-variant flex items-center gap-2 shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-primary animate-bounce" />
                  <span className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:0.2s]" />
                  <span className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:0.4s]" />
                  <span className="text-[11px] ml-1 font-medium text-outline">
                    Scanning knowledge base & matching keywords...
                  </span>
                </div>
              </div>
            )}

            <div ref={chatEndRef} />
          </div>

          {/* Quick Prompts Bar */}
          <div className="p-2.5 border-t border-outline-variant/30 bg-surface-container-low/60 flex items-center gap-2 overflow-x-auto no-scrollbar">
            <span className="text-[11px] font-bold text-outline shrink-0 flex items-center gap-1 pl-1">
              <Lightbulb className="w-3.5 h-3.5 text-amber-500" /> Prompts:
            </span>
            {quickPrompts.map((p, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(p.query)}
                className="text-[11px] font-semibold px-3 py-1 rounded-full bg-white hover:bg-surface-container hover:text-primary border border-outline-variant/60 text-on-surface-variant whitespace-nowrap transition-all shrink-0 shadow-2xs hover:scale-105 active:scale-95"
              >
                {p.label}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <div className="p-4 border-t border-outline-variant/40 bg-white flex items-center gap-2">
            <div className="relative flex-1">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSendMessage();
                }}
                placeholder="Ask any question or type keywords (e.g., 'ats 95 boost', 'remote python jobs', 'isro letter date')..."
                className="w-full h-11 pl-4 pr-10 rounded-2xl bg-surface-container-lowest border border-outline-variant text-xs text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all placeholder:text-outline"
              />
              {inputMessage && (
                <button
                  onClick={() => setInputMessage('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <button
              onClick={() => handleSendMessage()}
              disabled={!inputMessage.trim() || isTyping}
              className="w-11 h-11 rounded-2xl bg-primary hover:bg-primary-container text-white flex items-center justify-center shadow-md shadow-primary/20 transition-all disabled:opacity-40 hover:scale-105 active:scale-95 shrink-0"
              title="Send Message"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Sidebar: Profile Context, Engine Status & Quick Navigation */}
        <div className="space-y-4">
          {/* Live Context Memory */}
          <div className="bg-white p-5 rounded-3xl border border-outline-variant/60 shadow-soft space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-primary font-bold text-xs">
                <Sparkles className="w-4 h-4" />
                <span>Live Assistant Context</span>
              </div>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                Synced
              </span>
            </div>

            <div className="space-y-2.5 text-xs">
              <div className="p-2.5 rounded-xl bg-surface-container-lowest border border-outline-variant/30">
                <span className="text-[10px] text-outline uppercase font-bold tracking-wider">Candidate</span>
                <p className="font-bold text-on-surface">{studentProfile.name}</p>
                <p className="text-[11px] text-on-surface-variant font-medium">
                  {studentProfile.degree} ({studentProfile.cgpa} CGPA)
                </p>
              </div>

              <div className="p-2.5 rounded-xl bg-surface-container-lowest border border-outline-variant/30">
                <span className="text-[10px] text-outline uppercase font-bold tracking-wider">Target Role</span>
                <p className="font-bold text-on-surface">{studentProfile.targetRole}</p>
              </div>

              <div className="p-2.5 rounded-xl bg-surface-container-lowest border border-outline-variant/30 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-outline uppercase font-bold tracking-wider">ATS Score</span>
                  <p className="font-bold text-primary">{resumeAnalysis.overallScore} / 100</p>
                </div>
                <div>
                  <span className="text-[10px] text-outline uppercase font-bold tracking-wider">Readiness</span>
                  <p className="font-bold text-secondary">{studentProfile.readinessScore}%</p>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-surface-container-lowest border border-outline-variant/30">
                <span className="text-[10px] text-outline uppercase font-bold tracking-wider">Allotted Placement</span>
                <p className="font-bold text-emerald-700">{allocation.allocatedRole}</p>
                <p className="text-[11px] text-on-surface-variant">{allocation.companyName}</p>
              </div>
            </div>
          </div>

          {/* Quick Shortcuts */}
          <div className="bg-white p-5 rounded-3xl border border-outline-variant/60 shadow-soft space-y-2.5">
            <h4 className="font-bold text-xs text-on-surface uppercase tracking-wider">Platform Hubs</h4>
            <button
              onClick={() => setActiveTab('resume-analyzer')}
              className="w-full py-2.5 px-3 rounded-xl bg-surface-container hover:bg-surface-container-high text-xs font-semibold text-on-surface flex items-center justify-between transition-all hover:translate-x-0.5"
            >
              <span className="flex items-center gap-2">
                <FileCheck2 className="w-4 h-4 text-primary" /> Resume Analyzer
              </span>
              <ChevronRight className="w-3.5 h-3.5 text-outline" />
            </button>
            <button
              onClick={() => setActiveTab('internships')}
              className="w-full py-2.5 px-3 rounded-xl bg-surface-container hover:bg-surface-container-high text-xs font-semibold text-on-surface flex items-center justify-between transition-all hover:translate-x-0.5"
            >
              <span className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-secondary" /> Internships Portal
              </span>
              <ChevronRight className="w-3.5 h-3.5 text-outline" />
            </button>
            <button
              onClick={() => setActiveTab('allocation')}
              className="w-full py-2.5 px-3 rounded-xl bg-surface-container hover:bg-surface-container-high text-xs font-semibold text-on-surface flex items-center justify-between transition-all hover:translate-x-0.5"
            >
              <span className="flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-600" /> ISRO Allocation
              </span>
              <ChevronRight className="w-3.5 h-3.5 text-outline" />
            </button>
            <button
              onClick={() => setActiveTab('learning')}
              className="w-full py-2.5 px-3 rounded-xl bg-surface-container hover:bg-surface-container-high text-xs font-semibold text-on-surface flex items-center justify-between transition-all hover:translate-x-0.5"
            >
              <span className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-emerald-700" /> Learning Hub
              </span>
              <ChevronRight className="w-3.5 h-3.5 text-outline" />
            </button>
          </div>
        </div>
      </div>

      {/* Knowledge Base Explorer Modal */}
      {showKBModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-on-surface/50 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white w-full max-w-4xl rounded-3xl border border-outline-variant shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
            {/* Modal Header */}
            <div className="p-6 border-b border-outline-variant/40 flex items-center justify-between bg-surface-container-lowest">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-xs">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-on-surface">Knowledge Base Directory</h3>
                  <p className="text-xs text-on-surface-variant">
                    Explore 40+ curated guidance topics or click any card to query the AI assistant immediately.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowKBModal(false)}
                className="p-2 rounded-xl text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Filters & Search */}
            <div className="p-4 border-b border-outline-variant/30 bg-surface-container-low/40 space-y-3">
              <div className="relative">
                <Search className="w-4 h-4 text-outline absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={kbSearchQuery}
                  onChange={(e) => setKbSearchQuery(e.target.value)}
                  placeholder="Search topics, keywords (e.g., 'ats', 'stipend', 'isro', 'dsa', 'aicte')..."
                  className="w-full h-10 pl-9 pr-4 rounded-xl bg-white border border-outline-variant text-xs text-on-surface focus:outline-none focus:border-primary"
                />
              </div>

              {/* Category Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setKbCategoryFilter(cat.id)}
                    className={`text-xs font-semibold px-3 py-1.5 rounded-xl whitespace-nowrap transition-all ${
                      kbCategoryFilter === cat.id
                        ? 'bg-primary text-white shadow-xs'
                        : 'bg-white text-on-surface-variant hover:bg-surface-container border border-outline-variant/60'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Topic Grid Content */}
            <div className="flex-1 overflow-y-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredKB.length > 0 ? (
                filteredKB.map((entry) => (
                  <div
                    key={entry.id}
                    onClick={() => handleSelectKBTopic(entry)}
                    className="p-4 rounded-2xl border border-outline-variant/60 bg-white hover:border-primary hover:shadow-soft transition-all cursor-pointer group flex flex-col justify-between space-y-3"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-surface-container text-primary border border-outline-variant/40">
                          {entry.categoryLabel}
                        </span>
                        <span className="text-[10px] font-semibold text-outline group-hover:text-primary flex items-center gap-0.5">
                          Ask AI <ChevronRight className="w-3 h-3" />
                        </span>
                      </div>
                      <h4 className="font-bold text-xs text-on-surface group-hover:text-primary transition-colors">
                        {entry.title}
                      </h4>
                      <p className="text-[11px] text-on-surface-variant line-clamp-2 leading-relaxed">
                        {entry.sampleQuestions[0]}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1 pt-1">
                      {entry.primaryKeywords.slice(0, 4).map((kw, kIdx) => (
                        <span
                          key={kIdx}
                          className="text-[9px] font-medium px-1.5 py-0.5 rounded bg-surface-container-low text-on-surface-variant"
                        >
                          #{kw}
                        </span>
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-2 text-center py-12 space-y-2">
                  <Layers className="w-8 h-8 text-outline mx-auto" />
                  <p className="text-xs font-semibold text-on-surface">No topics found matching your search.</p>
                  <p className="text-[11px] text-on-surface-variant">Try searching for other keywords like 'resume', 'internship', or 'allocation'.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
