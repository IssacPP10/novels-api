const mongoose = require("mongoose");
const Novel = require("../models/Novel");

// Obtener todas las novelas
const getAllNovels = async (req, res, next) => {
  try {
    const novels = await Novel.find().populate("chapters");
    res.json({ success: true, data: novels });
  } catch (error) {
    next(error);
  }
};

// Obtener una novela específica por ID
const getNovelById = async (req, res, next) => {
  try {
    const { id } = req.params;

    // Validar si el ID es un ObjectId válido
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({
        success: false,
        message: "ID inválido. Proporcione un ID válido.",
      });
    }

    const novel = await Novel.findById(id).populate("chapters");
    if (!novel) {
      return res.status(404).json({
        success: false,
        message: "Novela no encontrada",
      });
    }

    res.json({ success: true, data: novel });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllNovels,
  getNovelById,
};
