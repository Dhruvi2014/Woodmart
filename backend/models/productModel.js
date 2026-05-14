const db = require("../config/db");

const getProducts = (callback) => {
  db.query("CALL GetAllProducts()", callback);
};

module.exports = {
  getProducts,
};