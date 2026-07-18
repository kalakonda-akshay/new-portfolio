const Project = require("../models/Project");

const fallbackProjects = [
  {
    title: "Real-Time Chat Application",
    description: "Built a real-time chat application using MERN Stack and Socket.IO featuring authentication, instant messaging, typing indicators and responsive UI.",
    emoji: "Chat",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Socket.IO"],
    features: ["Authentication", "Instant messaging", "Typing indicators", "Responsive UI"],
    liveLink: "https://chat-app-chi-pink.vercel.app",
    githubLink: "https://github.com/kalakonda-akshay/chat-app",
    featured: true,
  },
  {
    title: "Social Media Platform",
    description: "Built a MERN social platform with responsive feed UI, user-centric flows, API-driven data and deployment-ready frontend.",
    emoji: "Social",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    features: ["Responsive feed", "Profile flows", "REST API structure"],
    liveLink: "https://you-are-an-expert-full-stack-2-bx86debtd.vercel.app/",
    githubLink: "https://github.com/kalakonda-akshay/social-media-platform",
    featured: true,
  },
  {
    title: "Internship Projects",
    description: "Curated recent deployed work including Secure Auth, Employee, AuraMart, BlogFlow and TaskFlow with GitHub source references.",
    emoji: "Work",
    techStack: ["React", "TypeScript", "JavaScript", "Vercel"],
    features: ["Secure Auth", "Employee dashboard", "AuraMart app"],
    liveLink: "https://frontend-ruddy-chi-23.vercel.app/",
    githubLink: "https://github.com/kalakonda-akshay",
  },
  {
    title: "GrameenTrack",
    description: "AI platform for tracking rural housing construction using location-tagged data and machine learning.",
    emoji: "AI",
    techStack: ["Python", "ML", "AI"],
    features: ["84% ML accuracy", "Progress verification", "Live deployment"],
    liveLink: "https://grameen-build-track.base44.app",
    githubLink: "https://github.com/kalakonda-akshay",
  },
  {
    title: "TruthLens AI",
    description: "Digital forensics and cyber verification platform for detecting deepfakes, AI-generated media, voice clones, phishing URLs and scam emails with explainable risk reports.",
    emoji: "AI",
    techStack: ["Python", "AI", "Cybersecurity", "Forensics"],
    features: ["Deepfake and AI-media checks", "Phishing and scam analysis", "Risk scoring with evidence previews"],
    liveLink: "https://akshaykalakonda.qzz.io/projects/truthlens-ai",
    githubLink: "https://github.com/kalakonda-akshay/truth_lens",
  },
  {
    title: "Akshar AI",
    description: "AI-powered education platform for B.Tech students with structured learning flows, academic support resources and a clean student-focused interface.",
    emoji: "Edu",
    techStack: ["HTML", "AI", "Education", "Vercel"],
    features: ["B.Tech learning support", "Student-friendly resources", "Responsive educational UI"],
    liveLink: "https://akshar-ai-rho.vercel.app",
    githubLink: "https://github.com/kalakonda-akshay/akshar-ai.io",
  },
  {
    title: "Grievance Mithra",
    description: "Student grievance-management platform concept for submitting, tracking and resolving complaints through a clear workflow and admin-ready issue handling experience.",
    emoji: "Gov",
    techStack: ["React", "Node.js", "Workflow", "Dashboard"],
    features: ["Complaint submission flow", "Status tracking", "Admin resolution workflow"],
    liveLink: "",
    githubLink: "https://github.com/kalakonda-akshay",
  },
];

function normalizeProjectTitle(title = "") {
  return title === "TruthLens" ? "TruthLens AI" : title;
}

function mergeProjects(projects = []) {
  const fallbackTitles = new Set(fallbackProjects.map((project) => normalizeProjectTitle(project.title)));
  const customProjects = projects.filter((project) => !fallbackTitles.has(normalizeProjectTitle(project.title)));
  return [...fallbackProjects, ...customProjects];
}

const seedProjects = async (req, res, next) => {
  try {
    const projects = [
      {
        title: "Real-Time Chat Application",
        description: "Built a real-time chat application using MERN Stack and Socket.IO featuring authentication, instant messaging, typing indicators and responsive UI.",
        emoji: "💬",
        techStack: ["React", "Node.js", "Express", "MongoDB", "Socket.IO"],
        features: ["Authentication", "Instant messaging", "Typing indicators", "Responsive UI"],
        liveLink: "https://chat-app-chi-pink.vercel.app",
        githubLink: "https://github.com/kalakonda-akshay/chat-app",
        featured: true,
      },
      {
        title: "Social Media Platform",
        description: "Built a MERN social platform with responsive feed UI, user-centric flows, API-driven data and deployment-ready frontend.",
        emoji: "👥",
        techStack: ["React", "Node.js", "Express", "MongoDB"],
        features: ["Responsive feed", "Profile flows", "REST API structure"],
        liveLink: "https://you-are-an-expert-full-stack-2-bx86debtd.vercel.app/",
        githubLink: "https://github.com/kalakonda-akshay/social-media-platform",
        featured: true,
      },
      {
        title: "Internship Projects",
        description: "Curated recent deployed work including Secure Auth, Employee, AuraMart, BlogFlow and TaskFlow with GitHub source references.",
        emoji: "🚀",
        techStack: ["React", "TypeScript", "JavaScript", "Vercel"],
        features: ["Secure Auth", "Employee dashboard", "AuraMart app"],
        liveLink: "https://frontend-ruddy-chi-23.vercel.app/",
        githubLink: "https://github.com/kalakonda-akshay",
      },
      {
        title: "GrameenTrack",
        description: "AI platform for tracking rural housing construction using ML.",
        emoji: "🛣",
        techStack: ["Python", "ML", "AI"],
        features: ["Progress roadmap", "Stakeholder visibility", "Live deployment"],
        liveLink: "https://grameen-build-track.base44.app",
        githubLink: "https://github.com/kalakonda-akshay",
      },
      {
        title: "TruthLens AI",
        description: "Digital forensics and cyber verification platform for detecting deepfakes, AI-generated media, voice clones, phishing URLs and scam emails with explainable risk reports.",
        emoji: "AI",
        techStack: ["Python", "AI", "Cybersecurity", "Forensics"],
        features: ["Deepfake and AI-media checks", "Phishing and scam analysis", "Risk scoring with evidence previews"],
        liveLink: "https://akshaykalakonda.qzz.io/projects/truthlens-ai",
        githubLink: "https://github.com/kalakonda-akshay/truth_lens",
      },
      {
        title: "Akshar AI",
        description: "AI-powered education platform for B.Tech students with structured learning flows, academic support resources and a clean student-focused interface.",
        emoji: "Edu",
        techStack: ["HTML", "AI", "Education", "Vercel"],
        features: ["B.Tech learning support", "Student-friendly resources", "Responsive educational UI"],
        liveLink: "https://akshar-ai-rho.vercel.app",
        githubLink: "https://github.com/kalakonda-akshay/akshar-ai.io",
      },
      {
        title: "Grievance Mithra",
        description: "Student grievance-management platform concept for submitting, tracking and resolving complaints through a clear workflow and admin-ready issue handling experience.",
        emoji: "Gov",
        techStack: ["React", "Node.js", "Workflow", "Dashboard"],
        features: ["Complaint submission flow", "Status tracking", "Admin resolution workflow"],
        liveLink: "",
        githubLink: "https://github.com/kalakonda-akshay",
      },
    ];

    await Project.deleteMany({});
    await Project.insertMany(projects);
    res.status(201).json({ message: "Projects seeded", count: projects.length });
  } catch (error) {
    next(error);
  }
};

const getProjects = async (req, res, next) => {
  try {
    if (!req.app.locals.dbConnected) {
      return res.json(fallbackProjects);
    }

    const projects = await Project.find().sort({ featured: -1, createdAt: -1 }).lean();
    res.json(mergeProjects(projects));
  } catch (error) {
    next(error);
  }
};

module.exports = { getProjects, seedProjects };
