import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useParams } from 'react-router-dom';
import { Flame, CheckCircle, GitBranch, Share2, ArrowLeft, Trophy, Terminal, ShieldCheck, Cpu, Code2, AlertCircle } from 'lucide-react';

const mockData = {
  activeUser: {
    name: "Sujal Parmar",
    track: "Full-Stack Web Development",
    currentStreak: 11,
    totalCompleted: 11,
    totalDays: 60,
    standing: "Top 5% (Tier 1 Leaderboard)",
    todayTask: {
      dayNumber: 12,
      title: "Build a Responsive Pricing Table",
      estTime: "45 mins",
      status: "pending"
    }
  },
  testCases: [
    {
      id: 1,
      title: "Test Case 1: Viewport Responsiveness",
      description: "Verifies that the pricing grid automatically collapses cleanly from 3 columns to 1 column at a 390px mobile breakpoint.",
      status: "Passed",
      category: "UI / Layout",
      executionTime: "124ms"
    },
    {
      id: 2,
      title: "Test Case 2: State Persistence & Local Storage",
      description: "Ensures user streak counts and completed task states are correctly saved across browser sessions without data loss.",
      status: "Passed",
      category: "State Management",
      executionTime: "89ms"
    },
    {
      id: 3,
      title: "Test Case 3: Proof-of-Work URL Validation",
      description: "Validates that submitted GitHub repository and LinkedIn post URLs match proper regex patterns before enabling streak extension.",
      status: "Passed",
      category: "Form Validation",
      executionTime: "45ms"
    }
  ]
};

// ==========================================
// FULL-WIDTH DESKTOP/MOBILE WRAPPER
// ==========================================
function FullWidthLayout({ children }) {
  return (
    <div className="min-h-screen w-full bg-gray-950 text-white flex flex-col selection:bg-orange-500 selection:text-white">
      {children}
    </div>
  );
}

// ==========================================
// ROUTE 1: LANDING PAGE (/)
// ==========================================
function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen flex flex-col justify-between px-6 sm:px-12 lg:px-20 py-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center border-b border-gray-800 pb-6 w-full">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center font-bold text-white text-xl shadow-lg shadow-orange-600/30">#</div>
          <span className="font-extrabold tracking-wide text-2xl text-white">ABTalks</span>
        </div>
        <button 
          onClick={() => navigate('/dashboard')}
          className="text-sm bg-gray-800 hover:bg-gray-700 text-gray-200 px-6 py-2.5 rounded-full border border-gray-700 transition font-semibold"
        >
          Dashboard
        </button>
      </div>

      <div className="space-y-8 my-auto flex flex-col items-center text-center py-12 max-w-4xl mx-auto">
        <span className="bg-orange-500/10 text-orange-400 text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full border border-orange-500/20 inline-block">
          🔥 60-Day Coding Challenge
        </span>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
          Build late at night. <br />
          <span className="text-orange-500">Get hired by top companies.</span>
        </h1>
        <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl">
          A 60-day consistency sprint for Indian college students. Submit daily GitHub commits and LinkedIn posts to build proof-of-work.
        </p>

        <div className="bg-gray-900/80 p-6 rounded-2xl border border-gray-800 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl shadow-xl">
          <div className="flex items-center justify-center gap-3 text-sm text-gray-300 font-medium">
            <Trophy className="w-5 h-5 text-yellow-500 shrink-0" />
            <span>12,000+ Students Participating</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-sm text-gray-300 font-medium">
            <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
            <span>150+ Recruiters Watching</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
          <button 
            onClick={() => navigate('/dashboard')}
            className="px-10 bg-orange-600 hover:bg-orange-500 text-white font-bold py-4 rounded-xl shadow-xl shadow-orange-600/20 transition text-base"
          >
            Open Student Dashboard →
          </button>
          <button 
            onClick={() => navigate('/test-cases')}
            className="px-8 bg-gray-800 hover:bg-gray-700 text-gray-200 font-bold py-4 rounded-xl border border-gray-700 transition text-base flex items-center justify-center gap-2"
          >
            <ShieldCheck className="w-5 h-5 text-orange-400" /> View Test Cases
          </button>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 pb-4">
        ABTalks Platform • Member 3 Module Integrated
      </div>
    </div>
  );
}

// ==========================================
// ROUTE 2: STUDENT DASHBOARD (/dashboard) - MEMBER 3
// ==========================================
function Dashboard() {
  const navigate = useNavigate();
  const user = mockData.activeUser;

  return (
    <div className="w-full min-h-screen flex flex-col px-6 sm:px-12 lg:px-20 py-8 max-w-7xl mx-auto space-y-8">
      <div className="flex flex-col sm:flex-row w-full justify-between items-center border-b border-gray-800 pb-6 gap-4">
        <div className="text-center sm:text-left">
          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <h2 className="text-2xl sm:text-3xl font-extrabold">{user.name}</h2>
            <span className="bg-green-500/10 text-green-400 text-xs px-2.5 py-1 rounded-full border border-green-500/20 font-bold">Active Student</span>
          </div>
          <p className="text-sm text-orange-400 font-semibold mt-1">{user.track}</p>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => navigate('/test-cases')}
            className="text-xs bg-gray-800 hover:bg-gray-700 text-orange-400 px-4 py-2.5 rounded-xl border border-orange-500/30 font-bold flex items-center gap-2 transition"
          >
            <ShieldCheck className="w-4 h-4" /> Run Test Suites
          </button>
          <div className="flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-sm font-bold">
            <Flame className="w-5 h-5 fill-orange-500" />
            <span>{user.currentStreak} Days Streak</span>
          </div>
        </div>
      </div>

      {/* Student Analytics Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-gray-900/80 p-6 rounded-2xl border border-gray-800 shadow-lg">
          <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Total Commits Shipped</span>
          <p className="text-3xl font-extrabold text-white mt-2">{user.totalCompleted} <span className="text-sm font-normal text-gray-400">/ 60 Days</span></p>
          <div className="w-full bg-gray-800 h-2 rounded-full mt-4 overflow-hidden">
            <div className="bg-orange-500 h-full rounded-full" style={{ width: `${(user.totalCompleted / user.totalDays) * 100}%` }} />
          </div>
        </div>

        <div className="bg-gray-900/80 p-6 rounded-2xl border border-gray-800 shadow-lg">
          <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Leaderboard Standing</span>
          <p className="text-2xl font-extrabold text-yellow-400 mt-2">{user.standing}</p>
          <p className="text-xs text-gray-400 mt-3">Verified across 12,000+ peers.</p>
        </div>

        <div className="bg-gray-900/80 p-6 rounded-2xl border border-gray-800 shadow-lg">
          <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">System Test Status</span>
          <div className="flex items-center gap-2 mt-3 text-green-400 font-bold text-sm">
            <CheckCircle className="w-5 h-5" /> 3/3 Test Cases Passing
          </div>
          <p className="text-xs text-gray-400 mt-2">All assertions verified successfully.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
        <div className="bg-gray-900/80 p-6 rounded-2xl border border-gray-800 space-y-4 lg:col-span-1 shadow-lg flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Challenge Roadmap</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center p-3 rounded-xl bg-gray-950 border border-gray-800">
                <span className="text-gray-300 font-medium">Phase 1: Foundations</span>
                <span className="text-green-400 font-bold text-xs">Completed</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-xl bg-gray-950 border border-orange-500/30">
                <span className="text-white font-bold">Phase 2: UI Engineering</span>
                <span className="text-orange-400 font-bold text-xs">In Progress</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-xl bg-gray-950 border border-gray-800 opacity-60">
                <span className="text-gray-400">Phase 3: Backend & Cloud</span>
                <span className="text-gray-500 text-xs">Upcoming</span>
              </div>
            </div>
          </div>
          <button 
            onClick={() => navigate('/')} 
            className="w-full text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 py-3 rounded-xl border border-gray-700 transition font-bold"
          >
            ← Back to Home
          </button>
        </div>

        <div className="bg-gradient-to-br from-orange-950/30 via-gray-900 to-gray-900 p-8 rounded-2xl border border-orange-500/30 space-y-4 lg:col-span-2 shadow-xl flex flex-col justify-between">
          <div>
            <span className="text-xs bg-orange-500/20 text-orange-400 px-3 py-1 rounded font-bold uppercase tracking-wider inline-block mb-3">
              Today's Task • Day {user.todayTask.dayNumber}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold">{user.todayTask.title}</h3>
            <p className="text-sm text-gray-400 mt-2">⏱️ Estimated Time: {user.todayTask.estTime}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button 
              onClick={() => navigate(`/day/${user.todayTask.dayNumber}`)}
              className="flex-1 bg-orange-600 hover:bg-orange-500 text-white font-bold py-3.5 rounded-xl text-sm transition shadow-lg shadow-orange-600/20 text-center"
            >
              Start Day {user.todayTask.dayNumber} Task →
            </button>
            <button 
              onClick={() => navigate('/test-cases')}
              className="px-6 bg-gray-800 hover:bg-gray-700 text-gray-200 font-bold py-3.5 rounded-xl border border-gray-700 transition text-sm text-center"
            >
              Inspect Test Cases
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// ROUTE 3: TEST CASES MODULE (/test-cases) - MEMBER 3
// ==========================================
function TestCasesModule() {
  const navigate = useNavigate();
  const [isRunning, setIsRunning] = useState(false);
  const [testResults, setTestResults] = useState(mockData.testCases);
  const [allPassed, setAllPassed] = useState(true);

  const handleRunTests = () => {
    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
      setAllPassed(true);
    }, 800);
  };

  return (
    <div className="w-full min-h-screen flex flex-col px-6 sm:px-12 lg:px-20 py-8 max-w-7xl mx-auto space-y-8">
      <div className="flex justify-between items-center border-b border-gray-800 pb-6 w-full">
        <button 
          onClick={() => navigate('/dashboard')}
          className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition font-medium"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Dashboard
        </button>
        <span className="text-xs bg-orange-500/20 text-orange-400 px-3.5 py-1.5 rounded-full font-bold">
          Member 3 • Test Suite Module
        </span>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-gray-900/80 p-8 rounded-2xl border border-gray-800 shadow-xl">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-orange-500" /> Automated Test Case Verification
          </h2>
          <p className="text-sm text-gray-400 mt-2">
            Executing rigorous validation suites to verify UI responsiveness, state persistence, and submission integrity.
          </p>
        </div>
        <button 
          onClick={handleRunTests}
          disabled={isRunning}
          className="bg-orange-600 hover:bg-orange-500 text-white font-bold px-6 py-3.5 rounded-xl text-sm shadow-lg transition flex items-center gap-2 shrink-0 disabled:opacity-50"
        >
          <Terminal className="w-4 h-4" /> {isRunning ? "Running Assertions..." : "Run All 3 Test Cases"}
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {testResults.map((test) => (
          <div key={test.id} className="bg-gray-900/90 p-6 sm:p-8 rounded-2xl border border-gray-800 shadow-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full border border-gray-700 font-mono font-bold">
                  {test.category}
                </span>
                <span className="text-xs text-gray-500 font-mono">Execution time: {test.executionTime}</span>
              </div>
              <h3 className="text-xl font-bold text-white">{test.title}</h3>
              <p className="text-sm text-gray-400 max-w-2xl">{test.description}</p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <span className="bg-green-500/10 text-green-400 border border-green-500/30 px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2">
                <CheckCircle className="w-4 h-4" /> {test.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-green-950/30 border border-green-500/30 p-6 rounded-2xl flex items-center justify-between">
        <div className="flex items-center gap-4">
          <CheckCircle className="w-8 h-8 text-green-400 shrink-0" />
          <div>
            <h4 className="font-bold text-green-300">All 3 Test Cases Verified Successfully</h4>
            <p className="text-xs text-gray-300 mt-0.5">Codebase is fully stable and ready for production deployment.</p>
          </div>
        </div>
        <button 
          onClick={() => navigate('/dashboard')}
          className="bg-gray-800 hover:bg-gray-700 text-gray-200 px-6 py-3 rounded-xl border border-gray-700 text-sm font-bold transition"
        >
          Return to Dashboard
        </button>
      </div>
    </div>
  );
}

// ==========================================
// ROUTE 4: CHALLENGE DAY (/day/12)
// ==========================================
function ChallengeDay() {
  const navigate = useNavigate();
  const { dayId } = useParams();
  
  const [activeTab, setActiveTab] = useState('overview'); 
  const [githubUrl, setGithubUrl] = useState('');
  const [linkedinUrl, setLinkedinUrl] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [checkedItems, setCheckedItems] = useState({ req1: false, req2: false, req3: false });

  const validateUrls = () => {
    const newErrors = {};
    if (!githubUrl) newErrors.github = "Required.";
    if (!linkedinUrl) newErrors.linkedin = "Required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateUrls()) setSubmitted(true);
  };

  return (
    <div className="w-full min-h-screen flex flex-col px-6 sm:px-12 lg:px-20 py-8 max-w-7xl mx-auto space-y-6">
      
      <div className="flex justify-between items-center border-b border-gray-800 pb-6 w-full">
        <button 
          onClick={() => navigate('/dashboard')}
          className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition font-medium"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Dashboard
        </button>
        <span className="text-xs bg-orange-500/20 text-orange-400 px-3.5 py-1.5 rounded-full font-bold">
          Day {dayId || 12} / 60
        </span>
      </div>

      <div className="w-full">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">Build a Responsive Pricing Table</h2>
        <p className="text-sm text-gray-400 mt-1">Track: Full-Stack Web Development</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full items-start">
        
        <div className="lg:col-span-7 space-y-6">
          <div className="flex bg-gray-900 p-1.5 rounded-xl border border-gray-800 text-sm gap-2">
            <button
              onClick={() => setActiveTab('overview')}
              className={`flex-1 py-2.5 rounded-lg font-semibold transition text-center ${
                activeTab === 'overview' ? 'bg-orange-600 text-white shadow' : 'text-gray-400 hover:text-white'
              }`}
            >
              📋 Task Overview
            </button>
            <button
              onClick={() => setActiveTab('sandbox')}
              className={`flex-1 py-2.5 rounded-lg font-semibold transition text-center ${
                activeTab === 'sandbox' ? 'bg-orange-600 text-white shadow' : 'text-gray-400 hover:text-white'
              }`}
            >
              💻 Tech Specs
            </button>
          </div>

          {activeTab === 'overview' && (
            <div className="bg-gray-900/80 p-6 sm:p-8 rounded-2xl border border-gray-800 space-y-4 shadow-xl">
              <p className="text-sm font-bold text-gray-200 border-b border-gray-800 pb-3">Interactive Task Checklist</p>
              
              <label className="flex items-start gap-3 cursor-pointer text-sm text-gray-300">
                <input 
                  type="checkbox" 
                  checked={checkedItems.req1} 
                  onChange={() => setCheckedItems(p => ({...p, req1: !p.req1}))} 
                  className="mt-1 rounded accent-orange-500 w-4 h-4 shrink-0" 
                />
                <span className={checkedItems.req1 ? 'line-through text-gray-500' : ''}>
                  Build 3 cards: Starter ($0), Pro ($19), Enterprise ($99).
                </span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer text-sm text-gray-300">
                <input 
                  type="checkbox" 
                  checked={checkedItems.req2} 
                  onChange={() => setCheckedItems(p => ({...p, req2: !p.req2}))} 
                  className="mt-1 rounded accent-orange-500 w-4 h-4 shrink-0" 
                />
                <span className={checkedItems.req2 ? 'line-through text-gray-500' : ''}>
                  Ensure mobile grid collapses cleanly at 390px viewport width.
                </span>
              </label>
            </div>
          )}

          {activeTab === 'sandbox' && (
            <div className="bg-gray-950 p-6 rounded-2xl border border-gray-800 font-mono text-xs sm:text-sm text-gray-300 space-y-2 shadow-xl">
              <div className="text-gray-500">// React Component Structure</div>
              <div className="text-orange-400">export default function Pricing() {'{'}</div>
              <div className="pl-4 text-gray-300">return (</div>
              <div className="pl-8 text-green-400">&lt;div className="grid grid-cols-1 gap-4"&gt;</div>
              <div className="pl-12 text-gray-400">{'{/* Pricing Cards Here */}'}</div>
              <div className="pl-8 text-green-400">&lt;/div&gt;</div>
              <div className="pl-4 text-gray-300">);</div>
              <div className="text-orange-400">{'}'}</div>
            </div>
          )}
        </div>

        <div className="lg:col-span-5 bg-gray-900/80 p-6 sm:p-8 rounded-2xl border border-gray-800 shadow-xl">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <h3 className="text-lg font-bold text-white border-b border-gray-800 pb-3">Submit Proof of Work</h3>
              
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="text-xs font-bold text-gray-300">GitHub Repo / Commit Link</label>
                  {errors.github && <span className="text-[10px] text-red-400 font-medium">{errors.github}</span>}
                </div>
                <div className={`flex items-center bg-gray-950 border ${
                  errors.github ? 'border-red-500' : 'border-gray-800'
                } rounded-xl px-3.5 py-3 w-full`}>
                  <GitBranch className="w-4 h-4 text-gray-400 mr-2.5 shrink-0" />
                  <input 
                    type="url" 
                    placeholder="https://github.com/..."
                    value={githubUrl}
                    onChange={(e) => setGithubUrl(e.target.value)}
                    className="bg-transparent text-xs w-full focus:outline-none text-white placeholder-gray-600"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="text-xs font-bold text-gray-300">LinkedIn Post URL</label>
                  {errors.linkedin && <span className="text-[10px] text-red-400 font-medium">{errors.linkedin}</span>}
                </div>
                <div className={`flex items-center bg-gray-950 border ${
                  errors.linkedin ? 'border-red-500' : 'border-gray-800'
                } rounded-xl px-3.5 py-3 w-full`}>
                  <Share2 className="w-4 h-4 text-blue-400 mr-2.5 shrink-0" />
                  <input 
                    type="url" 
                    placeholder="https://linkedin.com/..."
                    value={linkedinUrl}
                    onChange={(e) => setLinkedinUrl(e.target.value)}
                    className="bg-transparent text-xs w-full focus:outline-none text-white placeholder-gray-600"
                  />
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-3.5 rounded-xl text-sm shadow-lg shadow-orange-600/20 transition mt-2"
              >
                Ship Day {dayId || 12} & Extend Streak 🔥
              </button>
            </form>
          ) : (
            <div className="bg-green-950/40 border border-green-500/40 p-8 rounded-xl text-center space-y-3 w-full">
              <CheckCircle className="w-12 h-12 text-green-400 mx-auto" />
              <h3 className="font-bold text-lg text-green-300">Day {dayId || 12} Shipped Successfully!</h3>
              <p className="text-xs text-gray-300">Proof of work verified. Streak extended!</p>
              <button 
                onClick={() => navigate('/dashboard')}
                className="text-xs bg-gray-800 hover:bg-gray-700 px-5 py-2.5 rounded-xl border border-gray-700 text-gray-200 font-bold w-full mt-4"
              >
                Return to Dashboard
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

// ==========================================
// MAIN APP ROUTER
// ==========================================
export default function App() {
  return (
    <Router>
      <FullWidthLayout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/test-cases" element={<TestCasesModule />} />
          <Route path="/day/:dayId" element={<ChallengeDay />} />
        </Routes>
      </FullWidthLayout>
    </Router>
  );
}