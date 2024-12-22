const mongoose = require('mongoose');

// Esquema para Capítulos
const ChapterSchema = new mongoose.Schema({
  novel: { type: mongoose.Schema.Types.ObjectId, ref: 'Novel', required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  number: { type: Number, required: true }
});

module.exports = mongoose.model('Chapter', ChapterSchema);
