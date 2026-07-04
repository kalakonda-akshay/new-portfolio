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
    title: "TruthLens",
    description: "AI-powered credibility analysis project built to help users evaluate digital content, detect misinformation signals and review source trust indicators through a clean interface.",
    emoji: "AI",
    techStack: ["React", "AI", "JavaScript", "Content Analysis"],
    features: ["Credibility scoring", "Misinformation signal review", "Source trust indicators"],
    liveLink: "",
    githubLink: "https://github.com/kalakonda-akshay/truthlens",
  },
];

function mergeProjects(projects = []) {
  const seen = new Set(projects.map((project) => project.title));
  const missingFallbacks = fallbackProjects.filter((project) => !seen.has(project.title));
  return [...projects, ...missingFallbacks];
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
        title: "TruthLens",
        description: "AI-powered credibility analysis project built to help users evaluate digital content, detect misinformation signals and review source trust indicators through a clean interface.",
        emoji: "AI",
        techStack: ["React", "AI", "JavaScript", "Content Analysis"],
        features: ["Credibility scoring", "Misinformation signal review", "Source trust indicators"],
        liveLink: "",
        githubLink: "https://github.com/kalakonda-akshay/truthlens",
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
