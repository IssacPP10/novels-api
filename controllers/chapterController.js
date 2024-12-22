const mongoose = require("mongoose");
const Chapter = require("../models/Chapter");

// Obtener los capítulos de una novela específica
const getChaptersByNovelId = async (req, res, next) => {
  try {
    const { id } = req.params;

    // Validar si el ID de la novela es un ObjectId válido
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({
        success: false,
        message: "ID de novela inválido. Proporcione un ID válido.",
      });
    }

    const chapters = await Chapter.find({ novel: id });
    res.json({ success: true, data: chapters });
  } catch (error) {
    next(error);
  }
};

// Obtener un capítulo específico por ID
const getChapterById = async (req, res, next) => {
  try {
    const { id } = req.params;

    // Validar si el ID del capítulo es un ObjectId válido
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({
        success: false,
        message: "ID de capítulo inválido. Proporcione un ID válido.",
      });
    }

    const chapter = await Chapter.findById(id);
    if (!chapter) {
      return res.status(404).json({
        success: false,
        message: "Capítulo no encontrado",
      });
    }

    res.json({ success: true, data: chapter });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getChaptersByNovelId,
  getChapterById,
};
