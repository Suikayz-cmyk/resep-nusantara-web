const express = require("express");
const router = express.Router();

const {
  getAllResep,
  addResep,
  deleteResep
} = require("../controllers/resepController");

const validateRecipe = require("../middlewares/validateRecipe");

router.get("/", getAllResep);
router.post("/", validateRecipe, addResep);
router.delete("/:id", deleteResep);

module.exports = router;