const productModel = require("../models/productModel");

const getAllProducts = (req, res) => {
  const category = req.query.category;
  console.log('Endpoint URL:', req.originalUrl);
  console.log('Requested category:', JSON.stringify(category));

  productModel.getProducts(category, (err, results) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }

    const products = Array.isArray(results)
      ? Array.isArray(results[0])
        ? results[0]
        : results
      : [];

    res.status(200).json({
      success: true,
      products,
    });
  });
};

const getProductById = (req, res) => {
  const id = req.params.id;
  productModel.getProductById(id, (err, product) => {
    if (err) return res.status(500).json({ success: false, message: err.message });
    if (!product) return res.status(404).json({ success: false, message: 'Product not found' });
    res.status(200).json({ success: true, product });
  });
};

module.exports = {
  getAllProducts,
  getProductById,
};