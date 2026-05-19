const compareModel = require("../models/compareModel");

const addToCompare = (req, res) => {
  const { productId } = req.body;
  if (!productId) return res.status(400).json({ success: false, message: "Missing productId" });

  compareModel.addToCompare(productId, (err) => {
    if (err) return res.status(500).json({ success: false, message: err.message });
    res.status(201).json({ success: true, message: "Added to compare" });
  });
};

const getCompare = (req, res) => {
  compareModel.getCompare((err, results) => {
    if (err) return res.status(500).json({ success: false, message: err.message });
    const products = Array.isArray(results) ? results : [];
    res.status(200).json({ success: true, products });
  });
};

const removeFromCompare = (req, res) => {
  const productId = req.params.productId;
  compareModel.removeFromCompare(productId, (err) => {
    if (err) return res.status(500).json({ success: false, message: err.message });
    res.status(200).json({ success: true, message: "Removed from compare" });
  });
};

module.exports = {
  addToCompare,
  getCompare,
  removeFromCompare,
};
