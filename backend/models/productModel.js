const db = require("../config/db");

const getProducts = (category, callback) => {
  if (category) {
    console.log('Running category query for:', category);
    db.query("SELECT * FROM products WHERE category = ?", [category], callback);
    return;
  }

  db.query("CALL GetAllProducts()", callback);
};

module.exports = {
  getProducts,
};