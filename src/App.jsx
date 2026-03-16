import React, { useState, useEffect } from 'react';
import { 
  Gamepad2, 
  BrainCircuit, 
  TrendingUp, 
  Mail, 
  Code, 
  ChevronRight,
  Award, 
  Zap, 
  Terminal,
  Layers,
  BarChart3,
  Bot,
  Search,
  Video,
  FileText,
  Target,
  Briefcase,
  ExternalLink,
  Database,
  Send,
  Phone,
  Cpu,
  Sparkles,
  Quote
} from 'lucide-react';

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Sets the title for the document
    document.title = "CV Yaroslav Shcherbak";
    setIsLoaded(true);
  }, []);

  const companies = [
    {
      name: "KLO (Gas Station Network)",
      period: "05.2025 — Present",
      logo_text: "KLO",
      roles: [
        {
          title: "Head of CRM",
          period: "05.2025 — Present",
          description: "Managing retention strategy and implementing innovative AI solutions into retail business processes.",
          achievements: [
            { text: "+14.8% profit growth through deep segmentation optimization and offer personalization.", icon: <TrendingUp className="w-4 h-4 text-emerald-400" /> },
            { text: "+10% Engagement Rate via implementation of game mechanics in the mobile app.", icon: <Gamepad2 className="w-4 h-4 text-cyan-400" /> },
            { text: "Gem-bots development: saving 40 mins daily on reporting and routine tasks.", icon: <Bot className="w-4 h-4 text-blue-400" /> },
            { text: "Department knowledge base in NotebookLM for instant access to internal guidelines.", icon: <BrainCircuit className="w-4 h-4 text-purple-400" /> },
            { text: "Photo/Video content generation using Suno, Veo, and Nano Banana models.", icon: <Video className="w-4 h-4 text-rose-400" /> },
            { text: "Market & Competitor analysis: regular audit of apps and loyalty programs.", icon: <Search className="w-4 h-4 text-slate-400" /> }
          ]
        }
      ]
    },
    {
      name: "River Mall",
      period: "09.2023 — 05.2025",
      logo_text: "RM",
      roles: [
        {
          title: "Product Manager",
          period: "04.2024 — 05.2025",
          description: "Leading the development of digital products, focusing on customer experience and innovation.",
          achievements: [
            { text: "'Digital Kiosks' project: full cycle from technical specs to installation and navigation launch.", icon: <Layers className="w-4 h-4 text-orange-400" /> },
            { text: "AI Stylist Concept: dataset preparation for the upcoming AI-driven fashion assistant implementation.", icon: <BrainCircuit className="w-4 h-4 text-cyan-400" /> },
            { text: "UX Optimization: mobile app user journey analysis and interface improvements.", icon: <Target className="w-4 h-4 text-red-400" /> },
            { text: "Stakeholder management: communication with vendors and internal development teams.", icon: <Code className="w-4 h-4 text-blue-400" /> }
          ]
        },
        {
          title: "CRM Manager",
          period: "09.2023 — 04.2024",
          description: "Building the foundation for direct communication with customers in a retail environment.",
          achievements: [
            { text: "CRM Launch: Email and Push channels setup from scratch, NeuCurrent integration.", icon: <Mail className="text-pink-400 w-4 h-4" /> },
            { text: "Proximity Marketing: geolocation-based push notifications implementation.", icon: <Zap className="text-amber-400 w-4 h-4" /> },
            { text: "Loyalty Analysis: weekly monitoring of the retail market and top players' loyalty programs.", icon: <Search className="text-slate-400 w-4 h-4" /> }
          ]
        }
      ]
    },
    {
      name: "Cashberry / Freelance",
      period: "04.2021 — 08.2023",
      logo_text: "CB",
      roles: [
        {
          title: "Direct Marketing / E-mail Specialist",
          period: "04.2021 — 08.2023",
          description: "Managing large databases in Fintech, focusing on customer reactivation and retention.",
          achievements: [
            { text: "Retention Loops: automated retention chains creation (E-Sputnik, SendGrid).", icon: <BarChart3 className="text-emerald-400 w-4 h-4" /> },
            { text: "Technical setup: responsive email layout (HTML/CSS), domain warm-up management.", icon: <Code className="text-blue-400 w-4 h-4" /> },
            { text: "Firebase & Analytics: using data to track campaign efficiency and user behavior.", icon: <Database className="text-orange-400 w-4 h-4" /> }
          ]
        }
      ]
    }
  ];

  const skillGroups = [
    {
      title: "AI & Automation",
      icon: <BrainCircuit className="text-purple-400" />,
      items: ["Custom Gem-bots creation", "NotebookLM Knowledge Bases", "Suno / Veo / Nano Banana", "Prompt Engineering", "AI Trends Monitoring"]
    },
    {
      title: "Product & GameDev",
      icon: <Gamepad2 className="text-cyan-400" />,
      items: ["Systemic Game Design (Skvot)", "Economic Balancing", "GDD / Technical Specs", "Mechanics Deconstruction", "Core Loop Analysis"]
    },
    {
      title: "CRM & Technology",
      icon: <Cpu className="text-emerald-400" />,
      items: ["Retention & LTV Strategies", "Firebase / NeuCurrent / E-Sputnik", "HTML/CSS Development", "Power BI / GA4", "A/B Testing"]
    }
  ];

  const telegramLink = "https://t.me/Yars0n";
  const emailAddress = "Yshcherback@gmail.com";
  const phoneNumber = "+380 98 179 91 59";
  const phoneTel = "tel:+380981799159";

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-white pb-20 overflow-x-hidden">
      {/* Background Decor */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-cyan-900/10 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-900/10 rounded-full blur-[140px]"></div>
      </div>

      <div className={`relative z-10 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Navigation */}
        <nav className="container mx-auto px-6 py-10 flex justify-end items-center">
          <div className="flex space-x-12 text-[10px] font-bold uppercase tracking-[0.4em] text-slate-500">
            <a href="#experience" className="hover:text-cyan-400 transition-colors underline-offset-8">Experience</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors underline-offset-8">Stack</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors underline-offset-8">Contact</a>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="container mx-auto px-6 pt-6 pb-32">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 lg:gap-24 items-center md:items-start">
            
            {/* Photo Column */}
            <div className="w-full md:w-[320px] lg:w-[380px] shrink-0">
              <div className="relative group mx-auto md:mx-0">
                <div className="absolute -inset-1.5 bg-gradient-to-tr from-cyan-500 via-blue-600 to-purple-600 rounded-[2.5rem] blur-lg opacity-30 group-hover:opacity-60 transition-all duration-700"></div>
                <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
                  <img 
                    src="photo_2025-04-22_15-43-44.jpg" 
                    alt="Yaroslav Shcherbak" 
                    className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                    style={{ objectPosition: 'center 20%' }}
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/600x800/0f172a/06b6d4?text=Yaroslav";
                    }}
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-slate-950 border border-slate-800 px-5 py-2.5 rounded-2xl shadow-xl flex items-center gap-2.5 z-10">
                   <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_#10b981]"></div>
                   <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-200">Open for Hire</span>
                </div>
              </div>
            </div>

            {/* Text Content Column */}
            <div className="flex-1 text-center md:text-left pt-4">
              <div className="mb-12 max-w-2xl border-l-2 border-cyan-500/50 pl-8 py-3 relative mx-auto md:mx-0">
                <Quote className="absolute -left-5 -top-8 text-cyan-500/10 w-16 h-16" />
                <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-medium italic">
                  "I believe that the future of digital products lies at the intersection of deep analytics and immersive experience. My background in CRM provides insights into numbers and behavior, AI offers tools for infinite productivity, and systemic game design is the key to creating products that people genuinely love."
                </p>
              </div>
              
              <div className="mb-12">
                <h1 className="text-6xl sm:text-7xl lg:text-[100px] font-black tracking-tighter leading-[0.85] uppercase inline-block pr-12 overflow-visible">
                  Yaroslav <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">Shcherbak</span>
                </h1>
              </div>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-8 items-center mt-4">
                <a 
                  href={telegramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-5 bg-white text-slate-950 font-black rounded-full hover:bg-cyan-400 transition-all transform hover:scale-105 active:scale-95 shadow-2xl flex items-center gap-3 text-lg"
                >
                  READY FOR NEW CHALLENGES <ChevronRight size={20} />
                </a>
                <div className="flex gap-12">
                  <div className="text-left">
                    <div className="text-[10px] text-slate-500 uppercase tracking-[0.2em] mb-1 font-bold">English</div>
                    <div className="font-black text-cyan-400 text-2xl tracking-tighter">B2-C1</div>
                  </div>
                  <div className="text-left border-l border-slate-800 pl-10">
                    <div className="text-[10px] text-slate-500 uppercase tracking-[0.2em] mb-1 font-bold">Location</div>
                    <div className="font-black text-slate-300 text-2xl uppercase tracking-tighter">Kyiv, UA</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Tech Arsenal Section */}
        <section id="skills" className="container mx-auto px-6 py-24 bg-slate-900/10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-[10px] font-black text-slate-600 uppercase tracking-[0.6em] mb-16 text-center">Technology Arsenal & Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {skillGroups.map((group, idx) => (
                <div key={idx} className="group p-10 rounded-[2.5rem] bg-slate-900/40 border border-slate-800/50 hover:border-cyan-500/30 transition-all shadow-xl">
                  <div className="mb-8 p-4 rounded-2xl bg-slate-950 border border-slate-800 w-fit group-hover:scale-110 transition-transform shadow-inner">
                    {group.icon}
                  </div>
                  <h3 className="text-2xl font-black text-white mb-6 tracking-tight">
                    {group.title}
                  </h3>
                  <ul className="space-y-4">
                    {group.items.map((item, iIdx) => (
                      <li key={iIdx} className="text-sm text-slate-400 flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-cyan-500 transition-colors"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="container mx-auto px-6 py-32">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-5 mb-24">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500 flex items-center justify-center text-slate-950 shadow-lg shadow-cyan-500/20">
                <Briefcase size={24} />
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">Experience & Projects</h2>
            </div>

            <div className="space-y-44">
              {companies.map((company, cIdx) => (
                <div key={cIdx} className="relative">
                  <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-slate-800 pb-10">
                    <div>
                      <h3 className="text-5xl font-black text-white mb-4 tracking-tight">{company.name}</h3>
                      <div className="text-cyan-400 font-mono text-sm tracking-[0.2em] font-bold">{company.period}</div>
                    </div>
                  </div>

                  <div className="space-y-28">
                    {company.roles.map((role, rIdx) => (
                      <div key={rIdx} className="group relative">
                        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-16">
                          <div className="lg:col-span-4">
                            <h4 className="text-2xl font-black text-slate-100 mb-4 tracking-tight group-hover:text-cyan-400 transition-colors">{role.title}</h4>
                            <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-8 italic font-bold">{role.period}</div>
                            <p className="text-slate-400 text-sm leading-relaxed bg-slate-900/30 p-8 rounded-3xl border border-slate-800/50 italic shadow-lg">
                              {role.description}
                            </p>
                          </div>
                          
                          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                            {role.achievements.map((ach, aIdx) => (
                              <div key={aIdx} className="flex items-start space-x-5 bg-slate-900/20 p-6 rounded-2xl border border-slate-800/40 hover:bg-slate-900/40 hover:border-slate-700 transition-all shadow-sm">
                                <div className="mt-1 shrink-0 bg-slate-950 p-2.5 rounded-xl border border-slate-800 group-hover:border-cyan-500/50 transition-colors">
                                  {ach.icon}
                                </div>
                                <p className="text-sm text-slate-300 leading-relaxed font-medium">{ach.text}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Game Deconstruction Section - Robust Layout */}
        <section className="container mx-auto px-6 py-24">
          <div className="max-w-6xl mx-auto">
            <div className="relative rounded-[4rem] bg-gradient-to-br from-indigo-950/40 via-slate-900/40 to-slate-950 border border-slate-800 p-12 md:p-20 overflow-hidden group shadow-2xl">
              <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[120%] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-cyan-500/10 transition-all duration-1000"></div>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center relative z-10">
                <div className="lg:col-span-7">
                  <h2 className="text-5xl md:text-7xl font-black mb-12 leading-tight uppercase tracking-tighter text-slate-100">
                    Game <br/>
                    <span className="text-cyan-400 italic">Deconstruction</span>
                  </h2>
                  <p className="text-slate-400 text-xl leading-relaxed mb-12 max-w-2xl">
                    My approach to game design is rooted in deep analytics. I break games down to atoms, analyzing economic balance and psychological engagement loops. This enables the creation of systems that retain players through calculated progress.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {["Core Loop Analysis", "Monetization Balance", "System Documentation", "GDD Development"].map((item, i) => (
                      <div key={i} className="flex items-center gap-5 text-sm font-bold text-slate-200 bg-slate-950/50 p-5 rounded-2xl border border-slate-800/80 hover:border-cyan-500/30 transition-colors">
                        <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.6)]"></div>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="lg:col-span-5 flex justify-center lg:justify-end">
                  <div className="bg-slate-950/90 backdrop-blur-xl rounded-[3.5rem] border border-slate-800 p-12 shadow-3xl w-full max-w-[420px] transform group-hover:rotate-1 transition-transform duration-700 shadow-cyan-500/5">
                    <div className="flex items-center justify-between mb-12 border-b border-slate-800/50 pb-6">
                      <div className="flex gap-3">
                        <div className="w-4 h-4 rounded-full bg-red-500/40 shadow-inner"></div>
                        <div className="w-4 h-4 rounded-full bg-yellow-500/40 shadow-inner"></div>
                        <div className="w-4 h-4 rounded-full bg-green-500/40 shadow-inner"></div>
                      </div>
                      <Terminal size={24} className="text-cyan-400" />
                    </div>
                    <div className="space-y-6 font-mono text-xs leading-relaxed text-slate-500">
                      <p className="text-cyan-500/80 font-bold uppercase tracking-widest">{`// Initializing Analyzer...`}</p>
                      <p className="text-slate-200">{`> CORE_LOOP: Detected (Social/Reward)`}</p>
                      <p>{`> USER_RETENTION: 14% increase target`}</p>
                      <p>{`> ECONOMY_FLOW: Balanced (Anti-inflation)`}</p>
                      <p className="text-purple-400">{`> AI_ADAPTIVE_DIFF: Integration ready`}</p>
                      <div className="mt-12 pt-8 border-t border-slate-800/50">
                        <div className="flex justify-between text-[10px] uppercase font-black text-slate-600 mb-4 tracking-widest">
                          <span>SYSTEM ANALYSIS</span>
                          <span>94%</span>
                        </div>
                        <div className="w-full bg-slate-900 h-3 rounded-full overflow-hidden p-0.5 border border-slate-800 shadow-inner">
                          <div className="bg-gradient-to-r from-cyan-500 to-purple-500 h-full w-[94%] rounded-full shadow-[0_0_18px_rgba(6,182,212,0.5)] transition-all duration-1000"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="container mx-auto px-6 pt-32 pb-24">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-6xl md:text-8xl lg:text-[100px] font-black mb-24 tracking-tighter uppercase text-white opacity-90 tracking-tight">Get In Touch</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-28">
              <a 
                href={telegramLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-6 p-10 rounded-[2.5rem] bg-cyan-600 text-slate-950 hover:bg-white transition-all transform hover:scale-105 active:scale-95 shadow-2xl shadow-cyan-500/20 group"
              >
                <Send size={36} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                <div className="text-left">
                  <div className="text-[10px] uppercase font-black opacity-80 tracking-widest mb-1">Telegram</div>
                  <div className="font-bold text-2xl tracking-tight">@Yars0n</div>
                </div>
              </a>
              
              <a href={`mailto:${emailAddress}`} className="flex items-center gap-6 p-10 rounded-[2.5rem] bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-all shadow-xl group">
                <Mail size={36} className="text-slate-600 group-hover:text-cyan-400 transition-colors" />
                <div className="text-left">
                  <div className="text-[10px] uppercase font-bold text-slate-600 tracking-widest mb-2">Email</div>
                  <div className="font-bold text-xl break-all tracking-tight text-slate-200">{emailAddress}</div>
                </div>
              </a>

              <a href={phoneTel} className="flex items-center gap-6 p-10 rounded-[2.5rem] bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all shadow-xl group">
                <Phone size={36} className="text-slate-600 group-hover:text-blue-400 transition-colors" />
                <div className="text-left text-slate-200">
                  <div className="text-[10px] uppercase font-bold text-slate-600 tracking-widest mb-2">Phone</div>
                  <div className="font-bold text-xl tracking-tight">{phoneNumber}</div>
                </div>
              </a>
            </div>

            <div className="h-px bg-slate-900/50 w-full mb-14"></div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
               <p className="text-slate-700 text-[10px] uppercase tracking-[0.6em] font-black">
                © 2025 • Yaroslav Shcherbak
              </p>
              <div className="flex gap-10 text-[10px] uppercase font-black tracking-[0.2em] text-slate-600">
                <span className="hover:text-cyan-400 cursor-default transition-colors">CRM RETENTION</span>
                <span className="hover:text-purple-400 cursor-default transition-colors">GEN AI</span>
                <span className="hover:text-blue-400 cursor-default transition-colors">GAME DESIGN</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;