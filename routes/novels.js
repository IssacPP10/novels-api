const express = require("express");
const { getAllNovels, getNovelById } = require("../controllers/novelController");

const router = express.Router();

router.get("/", getAllNovels);
router.get("/:id", getNovelById);

module.exports = router;
