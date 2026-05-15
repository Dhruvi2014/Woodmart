const db = require("../config/db");

const User = {
  create: (name, email, password, callback) => {
    db.query(
      "CALL CreateUser(?, ?, ?)",
      [name, email, password],
      (err, results) => {
        if (err) return callback(err, null);
        callback(null, results);
      }
    );
  },

  findByEmail: (email, callback) => {
    db.query("CALL GetUserByEmail(?)", [email], (err, results) => {
      if (err) return callback(err, null);
      callback(null, results[0][0]);
    });
  },
};

module.exports = User;
