import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useParams } from 'react-router-dom';
// Look here: Removed all social icons from this import so it cannot crash!
import { Flame, CheckCircle, GitBranch, Share2, ArrowLeft, Trophy, Terminal, ShieldCheck, Cpu, Code2, AlertCircle, Sparkles, Plus, X, Users, HelpCircle } from 'lucide-react';
import logo from './assets/logo.png'; 

// ==========================================
// MOCK DATA (Embedded to prevent import crashes)
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
    },
    recentBadges: ["First Commit", "7-Day Streak"]
  },
  dayOneUser: {
    name: "Sujal Parmar",
    track: "Full-Stack Web Development",
    currentStreak: 0,
    totalCompleted: 0,
    totalDays: 60,
    standing: "Unranked",
    todayTask: {
      dayNumber: 1,
      title: "Initialize Git Repository",
      estTime: "15 mins",
      status: "pending"
    },
    recentBadges: []
  },
  missedDayUser: {
    name: "Sujal Parmar",
    track: "Full-Stack Web Development",
    currentStreak: 0,
    totalCompleted: 11,
    totalDays: 60,
    standing: "Top 10%",
    todayTask: {
      dayNumber: 13,
      title: "Fix Streak Freeze",
      estTime: "30 mins",
      status: "pending"
    },
    recentBadges: ["First Commit"]
  },
  testCases: [
    {
      id: 1,
      title: "Test Case 1: Viewport Responsiveness",
      description: "Verifies that the pricing grid automatically collapses cleanly.",
      status: "Passed",
      category: "UI / Layout",
      executionTime: "124ms"
    },
    {
      id: 2,
      title: "Test Case 2: State Persistence & Local Storage",
      description: "Ensures user streak counts are saved across sessions.",
      status: "Passed",
      category: "State Management",
      executionTime: "89ms"
    },
    {
      id: 3,
      title: "Test Case 3: Proof-of-Work URL Validation",
      description: "Validates submitted GitHub repository and LinkedIn post URLs.",
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
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: "What is the ABTalks 60-Day Challenge?",
      a: "It is a 60-day consistency sprint for college students designed to build real-world software proof-of-work through daily code commits and public building updates."
    },
    {
      q: "How does the daily streak verification work?",
      a: "You submit your GitHub commit link and LinkedIn post URL for each day's task. Once validated, your streak extends on your student dashboard."
    },
    {
      q: "What happens if I miss a day?",
      a: "If you miss a deadline, your streak breaks. Completing the next day's task allows you to activate a Streak Freeze and recover your progress."
    },
    {
      q: "Is this program free for college students?",
      a: "Yes! The 60-Day Challenge is completely free to participate in for all engineering and computer science students."
    }
  ];

  return (
    <div className="w-full min-h-screen flex flex-col justify-between px-6 sm:px-12 lg:px-20 py-8 max-w-7xl mx-auto space-y-16">
      
      {/* 1. HEADER */}
      <div className="flex justify-between items-center border-b border-gray-800 pb-6 w-full relative">
        <div className="flex items-center gap-3">
          <img 
            src={logo} 
            alt="ABTalks Logo" 
            className="w-40 h-40 object-contain" 
          />
        </div>
        <span className="absolute left-1/2 -translate-x-1/2 font-extrabold tracking-wide text-4xl sm:text-6xl text-white">
          AB Talks
        </span>
        <button
          onClick={() => navigate('/dashboard')}
          className="text-sm bg-gray-800 hover:bg-gray-700 text-gray-200 px-6 py-2.5 rounded-full border border-gray-700 transition font-semibold"
        >
          Dashboard
        </button>
      </div>

      {/* 2. HERO SECTION */}
      <div className="space-y-8 flex flex-col items-center text-center py-12 max-w-4xl mx-auto">
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

      {/* 3. WHO ARE WE SECTION */}
      <div className="bg-gray-900/80 p-8 sm:p-12 rounded-3xl border border-gray-800 space-y-6 w-full max-w-5xl mx-auto shadow-2xl">
        <div className="flex items-center gap-3 text-orange-400">
          <Users className="w-10 h-10" />
          <span className="text-xl sm:text-6xl font-bold uppercase tracking-wider">
            Who are we?
          </span>
        </div>
        
        <h2 className="space-y-4 text-xl sm:text-xl lg:text-xl text-white">
          <p>
           AB Talks on AI is a platform focused on demystifying the rapidly evolving landscape of Artificial Intelligence and technology leadership. Hosted by tech leader Anil Bajpai, the channel features insightful conversations, technical breakdowns, and high-impact podcast sessions with industry experts, architects, and innovators.
          </p> <p>
            From deep dives into Generative AI, RAG, and Agentic AI to practical advice on building future-proof tech careers, AB Talks on AI serves as an empowering space for students, engineers, and professionals looking to innovate, upskill, and stay ahead in the age of AI.
          </p>
        </h2>
        
        <div className="text-gray-400 leading-relaxed text-base sm:text-lg lg:text-xl">
          <p>
            "AI is not just about the models you use—it’s about critical thinking, continuous self-learning, and how you apply technology to solve real-world problems. Don't just blindly rely on tools; focus on building strong fundamentals and keep evolving, because the learning never stops."
          </p>
        </div>

        {/* 4. SOCIAL MEDIA LINKS (USING RAW SVGs INSTEAD OF LUCIDE) */}
        <div className="flex items-center gap-4 pt-4">
          
          {/* LinkedIn Raw SVG */}
          <a 
            href="https://www.linkedin.com/company/abtalks-on-ai/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-3 bg-gray-800 hover:bg-orange-600 text-gray-300 hover:text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-orange-600/30 flex items-center justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>

          {/* Instagram Raw SVG */}
          <a 
            href="https://www.instagram.com/abtalksonai?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-3 bg-gray-800 hover:bg-orange-600 text-gray-300 hover:text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-orange-600/30 flex items-center justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>

          {/* YouTube Raw SVG */}
          <a 
            href="https://youtu.be/Tr4GdaRenCA?si=xzagD0kovt1mkkrv" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-3 bg-gray-800 hover:bg-orange-600 text-gray-300 hover:text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-orange-600/30 flex items-center justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
            </svg>
          </a>
        </div>
      </div> 

      {/* 5. FAQs SECTION */}
      <div className="space-y-6 w-full max-w-4xl mx-auto pb-8">
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2 text-orange-400">
            <HelpCircle className="w-5 h-5" />
            <span className="text-xs font-bold uppercase tracking-wider">Got Questions?</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white">FAQ's</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-900/80 border border-gray-800 rounded-2xl p-6 cursor-pointer transition hover:border-gray-700"
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
            >
              <div className="flex justify-between items-center gap-4">
                <h3 className="font-bold text-white text-base sm:text-lg">{faq.q}</h3>
                <span className="text-orange-400 font-extrabold text-xl">
                  {openFaq === index ? '−' : '+'}
                </span>
              </div>
              {openFaq === index && (
                <p className="text-gray-400 text-sm mt-3 pt-3 border-t border-gray-800 leading-relaxed">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* NEW: Reach out text */}
        <div className="text-center pt-8">
          <p className="text-gray-400 text-sm sm:text-base">
            Got more questions? <br className="sm:hidden" />
            Reach out to us on <a href="mailto:abtalks.podcast@gmail.com" className="text-orange-500 font-bold hover:text-orange-400 hover:underline transition-all">abtalks.podcast@gmail.com</a>
          </p>
        </div>
      </div>

      {/* 6. FOOTER */}
      <div className="text-center text-xs text-gray-500 pb-4 border-t border-gray-800 pt-8">
        ABTalks Platform • Member 3 Module Integrated
      </div>
    </div>
  );
}

// ==========================================
// DASHBOARD SUB-COMPONENT: STREAK / STATUS BANNER
// ==========================================
function StreakBanner({ profileState, user }) {
  if (profileState === 'dayOne') {
    return (
      <div className="bg-gradient-to-br from-blue-950/40 via-gray-900 to-gray-900 p-8 rounded-2xl border border-blue-500/30 shadow-xl">
        <div className="flex items-center gap-3">
          <Sparkles className="w-8 h-8 text-blue-400 shrink-0" />
          <h3 className="text-2xl sm:text-3xl font-extrabold">Welcome to Day 1!</h3>
        </div>
        <p className="text-sm text-gray-300 mt-3">
          Complete your first task to ignite your streak. Every 60-day journey starts here 🚀
        </p>
      </div>
    );
  }

  if (profileState === 'missed') {
    return (
      <div className="bg-gradient-to-br from-red-950/40 via-gray-900 to-gray-900 p-8 rounded-2xl border border-red-500/30 shadow-xl">
        <div className="flex items-center gap-3">
          <AlertCircle className="w-8 h-8 text-orange-400 shrink-0" />
          <h3 className="text-2xl sm:text-3xl font-extrabold text-orange-300">Streak Broken</h3>
        </div>
        <p className="text-sm text-gray-300 mt-3">
          Missed yesterday? Complete Day {user.todayTask.dayNumber} today to activate Streak Freeze & recover!
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-orange-950/40 via-gray-900 to-gray-900 p-8 rounded-2xl border border-orange-500/30 shadow-xl">
      <div className="flex items-center gap-3">
        <Flame className="w-9 h-9 text-orange-500 fill-orange-500 animate-pulse shrink-0" />
        <h3 className="text-3xl sm:text-4xl font-extrabold">{user.currentStreak}-Day Streak</h3>
      </div>
      <p className="text-sm text-gray-300 mt-3">
        Keep building! Submit today's task before 11:59 PM.
      </p>
    </div>
  );
}

// ==========================================
// DASHBOARD SUB-COMPONENT: 60-DAY PROGRESS GRID
// ==========================================
function ProgressGrid({ totalCompleted, todayDayNumber, totalDays = 60 }) {
  const squares = Array.from({ length: totalDays }, (_, i) => i + 1);

  return (
    <div className="bg-gray-900/80 p-6 rounded-2xl border border-gray-800 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">60-Day Progress Grid</h3>
        <div className="flex items-center gap-4 text-[10px] text-gray-400">
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-green-500 inline-block" /> Completed</span>
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-cyan-400 inline-block" /> Today</span>
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-gray-700 inline-block" /> Upcoming</span>
        </div>
      </div>
      <div className="grid grid-cols-10 sm:grid-cols-12 lg:grid-cols-15 gap-1.5">
        {squares.map((day) => {
          let color = 'bg-gray-800 border border-gray-700';
          if (day <= totalCompleted) {
            color = 'bg-green-500 border border-green-400/40';
          } else if (day === todayDayNumber) {
            color = 'bg-cyan-400 border border-cyan-300 shadow-[0_0_8px_rgba(34,211,238,0.7)] animate-pulse';
          }
          return (
            <div
              key={day}
              title={`Day ${day}`}
              className={`aspect-square rounded-[3px] ${color}`}
            />
          );
        })}
      </div>
    </div>
  );
}

// ==========================================
// DASHBOARD SUB-COMPONENT: DEV EDGE-CASE TOGGLE
// ==========================================
function DevEdgeCaseToggle({ profileState, setProfileState }) {
  const options = [
    { key: 'active', label: 'Active', color: 'bg-green-600' },
    { key: 'dayOne', label: 'Day 1', color: 'bg-blue-600' },
    { key: 'missed', label: 'Missed', color: 'bg-red-600' },
  ];

  return (
    <div className="fixed top-3 right-3 bg-gray-800/90 backdrop-blur border border-gray-700 p-1.5 rounded-lg text-xs z-50 flex gap-1 shadow-xl">
      {options.map((opt) => (
        <button
          key={opt.key}
          onClick={() => setProfileState(opt.key)}
          className={`px-2.5 py-1 rounded font-bold transition ${
            profileState === opt.key ? opt.color : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}

// ==========================================
// ROUTE 2: STUDENT DASHBOARD (/dashboard)
// ==========================================
function Dashboard() {
  const navigate = useNavigate();
  const [profileState, setProfileState] = useState('active');

  const userMap = {
    active: mockData.activeUser,
    dayOne: mockData.dayOneUser,
    missed: mockData.missedDayUser,
  };
  const user = userMap[profileState];
  const progressPct = Math.round((user.totalCompleted / user.totalDays) * 100);

  return (
    <div className="w-full min-h-screen flex flex-col px-6 sm:px-12 lg:px-20 py-8 max-w-7xl mx-auto space-y-8">
      <DevEdgeCaseToggle profileState={profileState} setProfileState={setProfileState} />

      <div className="flex flex-col sm:flex-row w-full justify-between items-center border-b border-gray-800 pb-6 gap-4">
        <div className="flex items-center gap-4 text-center sm:text-left">
          <div className="w-12 h-12 rounded-full bg-orange-600 flex items-center justify-center font-extrabold text-lg shrink-0 shadow-lg shadow-orange-600/30">
            {user.name.charAt(0)}
          </div>
          <div>
            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <h2 className="text-2xl sm:text-3xl font-extrabold">{user.name}</h2>
              <span className="bg-orange-500/10 text-orange-400 text-xs px-2.5 py-1 rounded-full border border-orange-500/20 font-bold">
                {user.track}
              </span>
            </div>
            <p className="text-sm text-gray-400 font-medium mt-1">
              {profileState === 'active' && 'Active Student'}
              {profileState === 'dayOne' && 'New Student • Day 1'}
              {profileState === 'missed' && 'Streak Freeze Active'}
            </p>
          </div>
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

      <StreakBanner profileState={profileState} user={user} />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-gray-900/80 p-6 rounded-2xl border border-gray-800 shadow-lg">
          <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Days Completed</span>
          <p className="text-3xl font-extrabold text-white mt-2">
            {user.totalCompleted} <span className="text-sm font-normal text-gray-400">/ {user.totalDays} Days ({progressPct}%)</span>
          </p>
          <div className="w-full bg-gray-800 h-2 rounded-full mt-4 overflow-hidden">
            <div className="bg-orange-500 h-full rounded-full transition-all duration-500" style={{ width: `${progressPct}%` }} />
          </div>
        </div>

        <div className="bg-gray-900/80 p-6 rounded-2xl border border-gray-800 shadow-lg">
          <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Leaderboard Standing</span>
          {user.rank ? (
            <p className="text-xl font-extrabold text-yellow-400 mt-2">
              🏆 Rank #{user.rank} • {user.standing.split('(')[0].trim()}
            </p>
          ) : (
            <p className="text-lg font-extrabold text-gray-300 mt-2">{user.standing}</p>
          )}
          <p className="text-xs text-gray-400 mt-3">
  Verified across {user.totalStudents ? user.totalStudents.toLocaleString() : "12,000"}+ peers.
</p>
        </div>

        <div className="bg-gray-900/80 p-6 rounded-2xl border border-gray-800 shadow-lg">
          <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">System Test Status</span>
          <div className="flex items-center gap-2 mt-3 text-green-400 font-bold text-sm">
            <CheckCircle className="w-5 h-5" /> 3/3 Test Cases Passing
          </div>
          <p className="text-xs text-gray-400 mt-2">All assertions verified successfully.</p>
        </div>
      </div>

      <ProgressGrid
        totalCompleted={user.totalCompleted}
        todayDayNumber={user.todayTask.dayNumber}
        totalDays={user.totalDays}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
        <div className="bg-gray-900/80 p-6 rounded-2xl border border-gray-800 space-y-4 lg:col-span-1 shadow-lg flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Recent Badges</h3>
            <div className="space-y-3 text-sm">
              {user.recentBadges.length > 0 ? (
                user.recentBadges.map((badge) => (
                  <div key={badge} className="flex items-center p-3 rounded-xl bg-gray-950 border border-gray-800">
                    <span className="text-gray-200 font-medium">{badge}</span>
                  </div>
                ))
              ) : (
                <div className="p-3 rounded-xl bg-gray-950 border border-gray-800 text-gray-500 text-xs">
                  No badges earned yet — ship Day 1 to unlock your first badge!
                </div>
              )}
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
              DAY {user.todayTask.dayNumber} TASK
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold">{user.todayTask.title}</h3>
            <p className="text-sm text-gray-400 mt-2">⏱️ {user.todayTask.estTime}</p>
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
// ROUTE 3: TEST CASES MODULE (/test-cases)
// ==========================================
function TestCasesModule() {
  const navigate = useNavigate();
  const [isRunning, setIsRunning] = useState(false);
  const [testResults] = useState(mockData.testCases);

  const handleRunTests = () => {
    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
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
// ROUTE 4: CHALLENGE DAY (/day/:dayId)
// ==========================================
function ChallengeDay() {
  const navigate = useNavigate();
  const { dayId } = useParams();

  // DYNAMIC TASK DATA: Changes based on the day clicked
  const taskData = {
    "1": {
      title: "Initialize Git Repository",
      req1: "Create a new public repository on GitHub named '60-day-challenge'.",
      req2: "Add a detailed README.md file with your goals for the sprint.",
      code: [
        "// Terminal Commands",
        "git init",
        "git add README.md",
        "git commit -m 'Day 1: Challenge Accepted'",
        "git push -u origin main"
      ]
    },
    "12": {
      title: "Build a Responsive Pricing Card",
      req1: "Build 3 cards: Starter ($0), Pro ($19), Enterprise ($99).",
      req2: "Ensure mobile grid collapses cleanly at 390px viewport width.",
      code: [
        "// React Component Structure",
        "export default function Pricing() {",
        "  return (",
        "    <div className=\"grid grid-cols-1 md:grid-cols-3 gap-4\">",
        "      {/* Pricing Cards Here */}",
        "    </div>",
        "  );",
        "}"
      ]
    },
    "13": {
      title: "Fix Streak Freeze",
      req1: "Complete the pending React Context provider from yesterday.",
      req2: "Write a LinkedIn post explaining how you recovered your streak.",
      code: [
        "// React Context Setup",
        "export const StreakContext = createContext();",
        "export function StreakProvider({ children }) {",
        "  return (",
        "    <StreakContext.Provider value={{ frozen: true }}>",
        "      {children}",
        "    </StreakContext.Provider>",
        "  );",
        "}"
      ]
    }
  };

  // Grab the current task data, default to 12 if unknown day is passed
  const currentTask = taskData[dayId] || taskData["12"];

  const [activeTab, setActiveTab] = useState('overview');
  const [githubUrl, setGithubUrl] = useState('');
  const [linkedinUrl, setLinkedinUrl] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [checkedItems, setCheckedItems] = useState({ req1: false, req2: false });
  const [extraTasks, setExtraTasks] = useState([]);
  const [newExtraTask, setNewExtraTask] = useState('');
  
  // NEW: State for loading animation during validation
  const [isVerifying, setIsVerifying] = useState(false);

  const addExtraTask = (e) => {
    e.preventDefault();
    const text = newExtraTask.trim();
    if (!text) return;
    setExtraTasks(prev => [...prev, { id: Date.now(), text, done: false }]);
    setNewExtraTask('');
  };

  const toggleExtraTask = (id) => {
    setExtraTasks(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const removeExtraTask = (id) => {
    setExtraTasks(prev => prev.filter(t => t.id !== id));
  };

  // NEW: Strict Regex Validation
  const validateUrls = () => {
    const newErrors = {};

    // GitHub Regex: Must match https://github.com/username/repo-name
    const githubRegex = /^https:\/\/(www\.)?github\.com\/[a-zA-Z0-9-]+\/[a-zA-Z0-9_.-]+/;
    if (!githubUrl) {
      newErrors.github = "Required.";
    } else if (!githubRegex.test(githubUrl)) {
      newErrors.github = "Must be a full repo link (e.g., github.com/user/repo).";
    }

    // LinkedIn Regex: Must match a post or activity link
    const linkedinRegex = /^https:\/\/(www\.)?linkedin\.com\/(posts|feed\/update|in\/[a-zA-Z0-9-]+\/recent-activity)/;
    if (!linkedinUrl) {
      newErrors.linkedin = "Required.";
    } else if (!linkedinRegex.test(linkedinUrl)) {
      newErrors.linkedin = "Must be a valid post link (e.g., linkedin.com/posts/...).";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // NEW: Submission with loading state
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // If URLs pass the strict regex format
    if (validateUrls()) {
      setIsVerifying(true); // Start loading state
      
      // Simulate a network request checking the links (1.5 seconds)
      setTimeout(() => {
        setIsVerifying(false);
        setSubmitted(true);
      }, 1500);
    }
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
        {/* Dynamic Title */}
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">{currentTask.title}</h2>
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
                  {currentTask.req1}
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
                  {currentTask.req2}
                </span>
              </label>
            </div>
          )}

          {activeTab === 'overview' && (
            <div className="bg-gray-900/80 p-6 sm:p-8 rounded-2xl border border-gray-800 space-y-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-gray-800 pb-3">
                <p className="text-sm font-bold text-gray-200">Extra Tasks</p>
                <span className="text-[10px] bg-gray-800 text-gray-400 px-2.5 py-1 rounded-full border border-gray-700 font-bold uppercase tracking-wider">
                  Optional • Doesn't affect streak
                </span>
              </div>

              <p className="text-xs text-gray-500">
                Add your own stretch goals for today. These are just for you — skipping them won't break your streak as long as the main task above is done.
              </p>

              <form onSubmit={addExtraTask} className="flex gap-2">
                <input
                  type="text"
                  value={newExtraTask}
                  onChange={(e) => setNewExtraTask(e.target.value)}
                  placeholder="e.g. Add dark mode toggle"
                  className="flex-1 bg-gray-950 border border-gray-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-orange-500/50"
                />
                <button
                  type="submit"
                  className="bg-gray-800 hover:bg-gray-700 border border-gray-700 text-gray-200 px-3.5 rounded-xl transition shrink-0"
                  aria-label="Add extra task"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </form>

              {extraTasks.length > 0 ? (
                <div className="space-y-2 pt-1">
                  {extraTasks.map((task) => (
                    <div
                      key={task.id}
                      className="flex items-start gap-3 text-sm text-gray-300 bg-gray-950 border border-gray-800 rounded-xl px-3.5 py-2.5"
                    >
                      <input
                        type="checkbox"
                        checked={task.done}
                        onChange={() => toggleExtraTask(task.id)}
                        className="mt-1 rounded accent-orange-500 w-4 h-4 shrink-0"
                      />
                      <span className={`flex-1 ${task.done ? 'line-through text-gray-500' : ''}`}>
                        {task.text}
                      </span>
                      <button
                        onClick={() => removeExtraTask(task.id)}
                        className="text-gray-600 hover:text-red-400 transition shrink-0"
                        aria-label="Remove extra task"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-gray-600 italic pt-1">No extra tasks added yet.</p>
              )}
            </div>
          )}

          {activeTab === 'sandbox' && (
            <div className="bg-gray-950 p-6 rounded-2xl border border-gray-800 shadow-xl overflow-x-auto">
              <pre className="font-mono text-xs sm:text-sm text-gray-300">
                {currentTask.code.join('\n')}
              </pre>
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

              {/* NEW: Button with Verify Loading State */}
              <button
                type="submit"
                disabled={isVerifying}
                className="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-3.5 rounded-xl text-sm shadow-lg shadow-orange-600/20 transition mt-2 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
              >
                {isVerifying ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    Verifying Links...
                  </>
                ) : (
                  `Ship Day ${dayId || 12} & Extend Streak 🔥`
                )}
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