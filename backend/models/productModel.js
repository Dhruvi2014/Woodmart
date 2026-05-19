const db = require("../config/db");

const getProducts = (category, callback) => {
  if (category) {
    console.log('Running category procedure for:', category);
    db.query("CALL GetProductsByCategory(?)", [category], (err, results) => {
      if (err && err.message && err.message.includes("GetProductsByCategory")) {
        console.warn("Stored procedure GetProductsByCategory not found, falling back to direct query.");
        db.query("SELECT * FROM products WHERE category = ?", [category], callback);
        return;
      }
      callback(err, results);
    });
    return;
  }

  db.query("CALL GetAllProducts()", (err, results) => {
    if (err && err.message && err.message.includes("GetAllProducts")) {
      console.warn("Stored procedure GetAllProducts not found, falling back to direct query.");
      db.query("SELECT * FROM products", callback);
      return;
    }
    callback(err, results);
  });
};

module.exports = {
  getProducts,
};

const getProductById = (id, callback) => {
  db.query("SELECT * FROM products WHERE id = ?", [id], (err, results) => {
    if (err) return callback(err);
    callback(null, results && results[0] ? results[0] : null);
  });
};

module.exports.getProductById = getProductById;