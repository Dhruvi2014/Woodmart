const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();

const db = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "root",
  database: process.env.DB_NAME || "woodmart",
  multipleStatements: true
});

db.connect((err) => {
  if (err) {
    console.error("Database Connection Failed", err);
    process.exit(1);
  }
  
  const query = `
    CREATE TABLE IF NOT EXISTS users (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL
    );

    DROP PROCEDURE IF EXISTS CreateUser;
    CREATE PROCEDURE CreateUser(IN p_name VARCHAR(255), IN p_email VARCHAR(255), IN p_password VARCHAR(255))
    BEGIN
        INSERT INTO users (name, email, password) VALUES (p_name, p_email, p_password);
    END;

    DROP PROCEDURE IF EXISTS GetUserByEmail;
    CREATE PROCEDURE GetUserByEmail(IN p_email VARCHAR(255))
    BEGIN
        SELECT * FROM users WHERE email = p_email;
    END;
  `;
  
  db.query(query, (err, results) => {
    if (err) {
      console.error("Query failed", err);
    } else {
      console.log("Database updated successfully");
    }
    db.end();
  });
});
