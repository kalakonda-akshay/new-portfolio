const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const projectRoutes = require("./routes/projectRoutes");
const suggestionRoutes = require("./routes/suggestionRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const app = express();
const PORT = process.env.PORT || 5000;
const staticRoot = path.join(__dirname, "..");

app.locals.dbConnected = false;

app.use(cors({
  origin: process.env.CLIENT_URL ? process.env.CLIENT_URL.split(",") : "*",
  methods: ["GET", "POST", "OPTIONS"],
}));
app.use(express.json({ limit: "1mb" }));

app.get("/api/health", (req, res) => {
  res.json({
    status: "healthy",
    service: "Akshay portfolio",
    database: app.locals.dbConnected ? "connected" : "degraded",
    time: new Date().toISOString(),
  });
});

app.use("/api/projects", projectRoutes);
app.use("/api/suggestions", suggestionRoutes);

app.use(express.static(staticRoot, {
  extensions: ["html"],
  setHeaders: (res, filePath) => {
    if (filePath.endsWith(".html")) {
      res.setHeader("Cache-Control", "no-cache");
    }
  },
}));

app.get("/", (req, res) => {
  res.sendFile(path.join(staticRoot, "index.html"));
});

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Portfolio site running on http://localhost:${PORT}`);

  connectDB()
    .then(() => {
      app.locals.dbConnected = true;
    })
    .catch((error) => {
      app.locals.dbConnected = false;
      console.warn("MongoDB unavailable. Running local site without database:", error.message);
    });
  });

