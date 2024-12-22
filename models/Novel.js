const mongoose = require('mongoose');

// Esquema para Novelas
const NovelSchema = new mongoose.Schema({
  title: { type: String, required: true },  
  genre: { type: String, required: true },
  description: { type: String, default: '' },
  chapters: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Chapter' }]
});

module.exports = mongoose.model('Novel', NovelSchema);
