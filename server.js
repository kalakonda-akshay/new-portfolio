const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Project = require('./models/project'); 

const app = express();

// 1. MIDDLEWARE
app.use(cors()); 
app.use(express.json());

// 2. MONGODB ATLAS CONNECTION
const dbURI = "mongodb+srv://akshaykalakonda9_db_user:oTgyEsrMdcWEUsZG@cluster0.6iodlhu.mongodb.net/portfolio_db?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(dbURI)
    .then(() => console.log("✅ Cloud MongoDB Connected!"))
    .catch(err => console.log("❌ MongoDB Connection Error:", err));

// 3. ROUTES
app.get('/', (req, res) => {
    res.send("<h1>Backend is Live on Port 5001!</h1><p>Visit /api/seed to load data.</p>");
});

// IKKADA MOTHAM 7 PROJECTS DATA UNDHI
app.get('/api/seed', async (req, res) => {
    try {
        const myProjects = [
            { 
                title: "GrameenTrack", 
                description: "AI platform for tracking rural housing construction using ML.", 
                emoji: "🛣️", 
                tags: "Python, ML, AI", 
                liveLink: "https://grameen-build-track.base44.app" 
            },
            { 
                title: "AKS Cyber", 
                description: "Automated SQL Injection detection framework for penetration testing.", 
                emoji: "🔒", 
                tags: "Python, Cybersecurity", 
                liveLink: "#" 
            },
            { 
                title: "e-Pathshala", 
                description: "AI integrated EdTech platform featuring study schedulers and quiz arena.", 
                emoji: "📚", 
                tags: "MERN, AI, UID", 
                liveLink: "#" 
            },
            { 
                title: "AI Notes Summarizer", 
                description: "NLP application to summarize long academic lectures into concise notes.", 
                emoji: "📝", 
                tags: "Python, NLP, AI", 
                liveLink: "#" 
            },
            { 
                title: "Smart City Portal", 
                description: "Civic tool for grievance reporting and community food donation tracking.", 
                emoji: "🏙️", 
                tags: "Full-Stack, CivicTech", 
                liveLink: "https://tu63991.softr.app" 
            },
            { 
                title: "IKS AgriWisdom", 
                description: "Digital hub preserving sustainable farming practices and Vedic agriculture.", 
                emoji: "🌱", 
                tags: "AgriTech, IKS", 
                liveLink: "#" 
            },
            { 
                title: "Traffic Analyser", 
                description: "Data science project predicting accident-prone hotspots using historical data.", 
                emoji: "🚦", 
                tags: "Data Science, Python", 
                liveLink: "#" 
            }
        ];

        await Project.deleteMany({}); // Clears old data
        await Project.insertMany(myProjects); // Adds all 7 projects
        res.send("<h1>🚀 All 7 Projects Seeded to MongoDB!</h1><p>Now refresh your portfolio site.</p>");
    } catch (err) {
        res.status(500).send("Error: " + err.message);
    }
});

// THIS GETS DATA FOR YOUR WEBSITE
app.get('/api/projects', async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

const PORT = 5001;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});