import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';
import { Flame, CheckCircle, GitBranch, Share2, ArrowLeft, Trophy, Calendar } from 'lucide-react';

// ==========================================
// MOCK DATA ENGINE (Shared across team)
// ==========================================
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
  }
};

// ==========================================
// GLOBAL 390px MOBILE SHELL WRAPPER
// ==========================================
function MobileShell({ children }) {
  return (
    <div className="min-h-screen w-full bg-gray-950 flex justify-center items-center py-0 sm:py-6 px-0 overflow-x-hidden">
      {/* Fixed 390px Mobile Viewport Container */}
      <div className="w-[390px] min-h-[844px] max-h-[844px] h-[844px] bg-gray-900 text-white font-sans overflow-y-auto border border-gray-800 sm:rounded-[36px] shadow-2xl relative flex flex-col justify-between mx-auto">
        {children}
      </div>
    </div>
  );
}

// ==========================================
// ROUTE 1: LANDING PAGE (/) — Lead: Member 1
// ==========================================
function LandingPage() {
  const navigate = useNavigate();

  return (
  <div className="min-h-full bg-gray-950 px-6 py-7 flex flex-col">

    {/* Top Header */}
    <div className="flex justify-between items-center">
      <span className="font-bold text-xl tracking-tight text-white">
        ABTalks
      </span>

        <button
          onClick={() => navigate('/dashboard')}
          className="text-sm font-medium text-gray-400 hover:text-white transition"
        >
          Login
        </button>
      </div>

      {/* Hero Content */}
      <div className="flex flex-col justify-center flex-1 space-y-5">
        {/* Challenge Badge */}
        <span className="self-start inline-block rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-orange-400">
          🔥 60-DAY CODING CHALLENGE
        </span>

        {/* Hero Heading */}
        <h1 className="text-5xl font-extrabold leading-[0.95] tracking-[-0.04em] text-white">
          BUILD.
          <br />
          SHIP.
          <br />
          <span className="text-orange-500">GET NOTICED.</span>
        </h1>

        {/* Supporting Text */}
        <p className="max-w-[330px] text-sm leading-relaxed text-gray-400">
          Turn 60 days of consistent work into proof employers can actually see.
        </p>

        {/* Stats Card */}
        <div className="grid grid-cols-2 rounded-2xl border border-gray-800 bg-gray-900/70 px-4 py-5">
          <div className="text-center border-r border-gray-800">
            <p className="text-2xl font-extrabold text-white">12K+</p>
            <p className="mt-1 text-[10px] font-semibold tracking-[0.15em] text-gray-500">
              STUDENTS
            </p>
          </div>

          <div className="text-center">
            <p className="text-2xl font-extrabold text-white">150+</p>
            <p className="mt-1 text-[10px] font-semibold tracking-[0.15em] text-gray-500">
              RECRUITERS
            </p>
          </div>
        </div>
      </div>

      {/* Primary CTA */}
<div className="pt-2">
  <button
    onClick={() => navigate('/dashboard')}
    className="w-full rounded-xl bg-orange-500 py-4 text-sm font-bold tracking-wide text-white shadow-[0_8px_30px_rgba(249,115,22,0.25)] transition hover:bg-orange-400"
  >
    START THE CHALLENGE →
  </button>

  <p className="mt-3 text-center text-xs text-gray-500">
    Already joined?{" "}
    <button
      onClick={() => navigate('/dashboard')}
      className="font-medium text-gray-300 hover:text-white transition"
    >
      Login
    </button>
  </p>
</div>
</div>
  );
}

// ==========================================
// ROUTE 2: DASHBOARD (/dashboard) — Lead: Member 3
// ==========================================
function Dashboard() {
  const navigate = useNavigate();
  const user = mockData.activeUser;

  return (
    <div className="p-5 space-y-5">
      {/* User Header */}
      <div className="flex justify-between items-center border-b border-gray-800 pb-3">
        <div>
          <h2 className="text-base font-bold">{user.name}</h2>
          <p className="text-xs text-orange-400 font-medium">{user.track}</p>
        </div>
        <div className="flex items-center gap-1 bg-orange-500/10 border border-orange-500/20 text-orange-400 px-2.5 py-1 rounded-full text-xs font-bold">
          <Flame className="w-4 h-4 fill-orange-500" />
          <span>{user.currentStreak} Days</span>
        </div>
      </div>

      {/* Progress Metric */}
      <div className="bg-gray-800/60 p-4 rounded-xl border border-gray-800 space-y-2">
        <div className="flex justify-between text-xs">
          <span className="text-gray-400">Challenge Progress</span>
          <span className="font-semibold text-gray-200">{user.totalCompleted} / {user.totalDays} Days</span>
        </div>
        <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
          <div 
            className="bg-orange-500 h-full rounded-full transition-all duration-500"
            style={{ width: `${(user.totalCompleted / user.totalDays) * 100}%` }}
          />
        </div>
        <p className="text-[10px] text-gray-400 pt-1">🏆 Standing: <span className="text-yellow-400">{user.standing}</span></p>
      </div>

      {/* Today's Task Card */}
      <div className="bg-gradient-to-br from-orange-950/40 to-gray-800 p-4 rounded-xl border border-orange-500/30 space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-[10px] bg-orange-500/20 text-orange-400 px-2 py-0.5 rounded font-bold uppercase tracking-wider">
            Today's Task • Day {user.todayTask.dayNumber}
          </span>
          <span className="text-xs text-gray-400">⏱️ {user.todayTask.estTime}</span>
        </div>
        <h3 className="text-sm font-bold">{user.todayTask.title}</h3>
        <button 
          onClick={() => navigate(`/day/${user.todayTask.dayNumber}`)}
          className="w-full bg-orange-600 hover:bg-orange-500 text-white font-semibold py-2.5 rounded-lg text-xs transition"
        >
          Start Day {user.todayTask.dayNumber} Task →
        </button>
      </div>
    </div>
  );
}

// ==========================================
// ROUTE 3: CHALLENGE DAY (/day/12) — Lead: Member 2
// ==========================================
function ChallengeDay() {
  const navigate = useNavigate();
  const { dayId } = useParams();
  const [githubUrl, setGithubUrl] = useState('');
  const [linkedinUrl, setLinkedinUrl] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (githubUrl && linkedinUrl) {
      setSubmitted(true);
    }
  };

  return (
    <div className="p-5 space-y-4">
      {/* Top Nav */}
      <button 
        onClick={() => navigate('/dashboard')}
        className="flex items-center gap-1 text-xs text-gray-400 hover:text-white transition"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Dashboard
      </button>

      {/* Header */}
      <div>
        <span className="text-xs text-orange-400 font-semibold">Day {dayId || 12} of 60</span>
        <h2 className="text-lg font-bold">Build a Responsive Pricing Table</h2>
      </div>

      {/* Problem Description */}
      <div className="bg-gray-800/50 p-3.5 rounded-xl border border-gray-800 text-xs text-gray-300 space-y-2">
        <p className="font-semibold text-white">Task Requirements:</p>
        <ul className="list-disc list-inside space-y-1 text-gray-400">
          <li>Create 3 pricing cards (Basic, Pro, Enterprise)</li>
          <li>Ensure mobile layout renders cleanly at 390px</li>
          <li>Add hover states and a toggle switch</li>
        </ul>
      </div>

      {/* Submission Form */}
      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-3 pt-2">
          <div>
            <label className="text-xs font-medium text-gray-300 block mb-1">GitHub Commit / Repo URL</label>
            <div className="flex items-center bg-gray-800 border border-gray-700 rounded-lg px-2.5 py-2">
              <GitBranch className="w-4 h-4 text-gray-400 mr-2"/>
              <input 
                type="url" 
                required
                placeholder="https://github.com/username/repo"
                value={githubUrl}
                onChange={(e) => setGithubUrl(e.target.value)}
                className="bg-transparent text-xs w-full focus:outline-none text-white placeholder-gray-500"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-medium text-gray-300 block mb-1">LinkedIn Post URL</label>
            <div className="flex items-center bg-gray-800 border border-gray-700 rounded-lg px-2.5 py-2">
              <Share2 className="w-4 h-4 text-blue-400 mr-2"/>
              <input 
                type="url" 
                required
                placeholder="https://linkedin.com/posts/activity-..."
                value={linkedinUrl}
                onChange={(e) => setLinkedinUrl(e.target.value)}
                className="bg-transparent text-xs w-full focus:outline-none text-white placeholder-gray-500"
              />
            </div>
          </div>

          <button 
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-3 rounded-lg text-xs shadow-lg transition mt-2"
          >
            Ship Day {dayId || 12} & Keep Streak 🔥
          </button>
        </form>
      ) : (
        <div className="bg-green-900/30 border border-green-500/40 p-4 rounded-xl text-center space-y-2">
          <CheckCircle className="w-8 h-8 text-green-400 mx-auto" />
          <h3 className="font-bold text-sm text-green-300">Day {dayId || 12} Shipped Successfully!</h3>
          <p className="text-xs text-gray-300">Your streak has been extended to 12 Days 🔥</p>
          <button 
            onClick={() => navigate('/dashboard')}
            className="text-xs bg-gray-800 hover:bg-gray-700 px-3 py-1.5 rounded-lg border border-gray-700 text-gray-200 transition mt-2"
          >
            Return to Dashboard
          </button>
        </div>
      )}
    </div>
  );
}

// ==========================================
// MAIN ROUTER APP
// ==========================================
export default function App() {
  return (
    <Router>
      <MobileShell>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/day/:dayId" element={<ChallengeDay />} />
        </Routes>
      </MobileShell>
    </Router>
  );
}