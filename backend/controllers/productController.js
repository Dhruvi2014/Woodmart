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

    res.status(200).json({
      success: true,
      products: category ? results : results[0],
    });
  });
};

module.exports = {
  getAllProducts,
};