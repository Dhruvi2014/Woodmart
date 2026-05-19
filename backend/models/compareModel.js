const db = require("../config/db");

const addToCompare = (productId, callback) => {
  db.query("CALL AddToCompare(?)", [productId], (err, results) => {
    if (err && err.message && err.message.includes("AddToCompare")) {
      db.query(
        "INSERT IGNORE INTO compare_items (product_id) VALUES (?)",
        [productId],
        callback
      );
      return;
    }
    callback(err, results);
  });
};

const getCompare = (callback) => {
  db.query("CALL GetCompare()", (err, results) => {
    if (err && err.message && err.message.includes("GetCompare")) {
      db.query(
        "SELECT p.* FROM compare_items c JOIN products p ON p.id = c.product_id ORDER BY c.created_at DESC",
        callback
      );
      return;
    }
    // Stored procedures with SELECT return results as [rows, ...]
    callback(err, Array.isArray(results) ? results[0] : results);
  });
};

const removeFromCompare = (productId, callback) => {
  db.query("CALL RemoveFromCompare(?)", [productId], (err, results) => {
    if (err && err.message && err.message.includes("RemoveFromCompare")) {
      db.query("DELETE FROM compare_items WHERE product_id = ?", [productId], callback);
      return;
    }
    callback(err, results);
  });
};

module.exports = {
  addToCompare,
  getCompare,
  removeFromCompare,
};
