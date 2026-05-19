const express = require("express");
const router = express.Router();
const { addToCompare, getCompare, removeFromCompare } = require("../controllers/compareController");

router.post("/", addToCompare);
router.get("/", getCompare);
router.delete("/:productId", removeFromCompare);

module.exports = router;
