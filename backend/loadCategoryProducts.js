const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.message);
    process.exit(1);
  }

  const categories = ['PC & Components', 'Appliances'];
  db.query(
    'SELECT category, COUNT(*) AS count FROM products WHERE category IN (?, ?) GROUP BY category',
    categories,
    (err, results) => {
      if (err) {
        console.error('Count query failed:', err.message);
        db.end();
        return;
      }

      const existing = results.reduce((acc, row) => {
        acc[row.category] = row.count;
        return acc;
      }, {});

      const rows = [];
      if (!existing['PC & Components']) {
        rows.push(
          ['Acer SA100 SATAIII', 'PC & Components', 30.0, 5.0, 'pc1.jpg', '', '', '', '', '', ''],
          ['AMD Radeon Pro W5500', 'PC & Components', 480.0, 4.0, 'pc2.jpg', '', '', '', '', '', ''],
          ['AMD Ryzen 5 5600X', 'PC & Components', 250.0, 4.0, 'pc3.jpg', '', '', '', '', '', ''],
          ['AMD Ryzen 5 7600X', 'PC & Components', 299.0, 5.0, 'pc4.jpg', '', '', '', '', '', ''],
          ['AMD Ryzen 7 5800X', 'PC & Components', 370.0, 4.0, 'pc5.jpg', '', '', '', '', '', ''],
          ['AMD Ryzen 9 7950X', 'PC & Components', 699.0, 4.0, 'pc6.jpg', '', '', '', '', '', '']
        );
      }
      if (!existing['Appliances']) {
        rows.push(
          ['ARIETE 0979', 'Appliances', 110.0, 5.0, 'appliance1.jpg', '', '', '', '', '', ''],
          ['ARIETE 986', 'Appliances', 150.0, 4.0, 'appliance2.jpg', '', '', '', '', '', ''],
          ['Bamix DeLuxe M200', 'Appliances', 230.0, 4.0, 'appliance3.jpg', '', '', '', '', '', ''],
          ['Bamix Luxurylin M200', 'Appliances', 605.0, 5.0, 'appliance4.jpg', '', '', '', '', '', ''],
          ['Bosch KUW20VHF0G', 'Appliances', 745.0, 4.0, 'appliance5.jpg', '', '', '', '', '', ''],
          ['Bosch MMB6141B', 'Appliances', 90.0, 4.0, 'appliance6.jpg', '', '', '', '', '', '']
        );
      }

      if (rows.length === 0) {
        console.log('Category data already exists. No insert needed.');
        db.end();
        return;
      }

      const placeholders = rows.map(() => '(?,?,?,?,?,?,?,?,?,?,?)').join(',');
      const values = rows.flat();

      db.query(
        `INSERT INTO products (name, category, price, rating, image, color1, color2, color3, color4, storage1, storage2) VALUES ${placeholders}`,
        values,
        (err) => {
          if (err) {
            console.error('Insert failed:', err.message);
          } else {
            console.log('Missing category rows inserted successfully.');
          }
          db.end();
        }
      );
    }
  );
});
