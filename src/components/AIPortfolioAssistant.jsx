import { useState } from "react";

const quickQuestions = [
  {
    id: "stack",
    label: "Tech stack?",
    question: "What is Akshay's tech stack?",
    answer:
      "Akshay specializes in the MERN Stack: MongoDB, Express, React, and Node.js. He also works with Python, Java, and local LLM integrations using Ollama.",
  },
  {
    id: "grameen",
    label: "GrameenTrack",
    question: "Tell me about GrameenTrack",
    answer:
      "GrameenTrack is an AI-powered system built to verify rural housing construction milestones using location-tagged data and machine learning. The model achieved 84% ML accuracy.",
  },
  {
    id: "internships",
    label: "Internships",
    question: "Is he open to internships?",
    answer:
      "Yes. Akshay completed a Full-Stack Web Development internship at Prodigy InfoTech and accepted upcoming developer roles at Pridology Infotech and Thiranex.",
  },
  {
    id: "fit",
    label: "Recruiter fit",
    question: "Why should recruiters notice Akshay?",
    answer:
      "He combines live deployments, backend integration, MongoDB data modeling, AI projects, and polished frontend execution. His portfolio shows shipping discipline, not just static UI work.",
  },
];

function BrainIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M9 4.5A3.5 3.5 0 0 0 5.5 8v.3A3.7 3.7 0 0 0 3 11.8 3.7 3.7 0 0 0 6.7 15.5H9V4.5Z" />
      <path d="M15 4.5A3.5 3.5 0 0 1 18.5 8v.3a3.7 3.7 0 0 1 2.5 3.5 3.7 3.7 0 0 1-3.7 3.7H15V4.5Z" />
      <path d="M9 15.5V20M15 15.5V20M9 8h2M13 8h2M9 12h6" />
    </svg>
  );
}

export default function AIPortfolioAssistant() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hi, I am Akshay's AI portfolio assistant. Ask me about his stack, projects, internships, or recruiter fit.",
    },
  ]);

  const ask = (item) => {
    setMessages((current) => [...current, { role: "user", text: item.question }]);
    setLoading(true);
    window.setTimeout(() => {
      setMessages((current) => [...current, { role: "assistant", text: item.answer }]);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open && (
        <section className="mb-4 w-[calc(100vw-2rem)] max-w-sm overflow-hidden rounded-3xl border border-white/10 bg-slate-950/90 text-white shadow-2xl shadow-blue-950/40 backdrop-blur-xl">
          <header className="border-b border-white/10 bg-gradient-to-r from-blue-500/20 to-indigo-600/20 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-blue-300">AI Assistant</p>
                <h3 className="text-lg font-black">Ask about Akshay</h3>
              </div>
              <button onClick={() => setOpen(false)} className="rounded-full border border-white/10 px-3 py-1 text-sm text-slate-300 transition hover:bg-white/10">
                Close
              </button>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {quickQuestions.map((item) => (
                <button
                  key={item.id}
                  onClick={() => ask(item)}
                  disabled={loading}
                  className="rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1.5 text-xs font-bold text-blue-100 transition hover:border-blue-300 hover:bg-blue-400/20 disabled:opacity-50"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </header>
          <div className="max-h-80 space-y-3 overflow-y-auto p-4">
            {messages.map((message, index) => (
              <div key={`${message.role}-${index}`} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[82%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                    message.role === "user"
                      ? "bg-blue-500 text-white"
                      : "border border-white/10 bg-white/10 text-slate-200"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="inline-flex rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-slate-300">
                <span className="animate-pulse">...</span>
              </div>
            )}
          </div>
        </section>
      )}
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="ml-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-2xl shadow-blue-500/30 ring-4 ring-blue-400/20 transition-all duration-300 hover:scale-105"
        aria-label="Open AI portfolio assistant"
      >
        <span className="absolute h-16 w-16 animate-ping rounded-full bg-blue-400/20" />
        <span className="relative">
          <BrainIcon />
        </span>
      </button>
    </div>
  );
}
