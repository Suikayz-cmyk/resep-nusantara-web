const express = require("express");
const router = express.Router();

const {
  getAllResep,
  addResep,
} = require("../controllers/resepController");

const validateRecipe = require("../middlewares/validateRecipe");

router.get("/", getAllResep);
router.post("/", validateRecipe, addResep);

module.exports = router;