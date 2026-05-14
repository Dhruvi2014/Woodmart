const productModel = require("../models/productModel");

const getAllProducts = (req, res) => {
  productModel.getProducts((err, results) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }

    res.status(200).json({
      success: true,
      products: results[0],
    });
  });
};

module.exports = {
  getAllProducts,
};