const express = require("express");
const {
  getChaptersByNovelId,
  getChapterById,
} = require("../controllers/chapterController");

const router = express.Router();

router.get("/:id/chapters", getChaptersByNovelId);
router.get("/chapter/:id", getChapterById);

module.exports = router;
