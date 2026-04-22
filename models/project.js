const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    emoji: String,
    tags: String,
    liveLink: String
});

module.exports = mongoose.model('Project', ProjectSchema);