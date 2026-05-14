CREATE DATABASE IF NOT EXISTS woodmart;

USE woodmart;

CREATE TABLE products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    category VARCHAR(255),
    price DECIMAL(10,2),
    rating DECIMAL(2,1),
    image VARCHAR(255),
    color1 VARCHAR(50),
    color2 VARCHAR(50),
    color3 VARCHAR(50),
    color4 VARCHAR(50),
    storage1 VARCHAR(100),
    storage2 VARCHAR(100)
);

INSERT INTO products
(name, category, price, rating, image, color1, color2, color3, color4, storage1, storage2)
VALUES
(
'Apple iPhone 15',
'Smartphones',
799,
5.0,
'phone1.webp',
'#4b4f56',
'#dfe8e6',
'#f2e3de',
'#e5db1b',
'1 TB SSD',
'256GB SSD'
),

(
'Apple iPhone 15 Plus',
'Smartphones',
899,
5.0,
'phone2.webp',
'#727b8b',
'#dfe8e6',
'#f2e3de',
'#e5db1b',
'',
''
),

(
'Apple iPhone 15 Pro',
'Smartphones',
999,
5.0,
'phone3.webp',
'#7f8798',
'#7f8798',
'#e6ddcc',
'#ffffff',
'',
''
),

(
'Apple iPhone 15 Pro Max',
'Smartphones',
1199,
5.0,
'phone4.jpg',
'#7f8798',
'#7f8798',
'#e6ddcc',
'#ffffff',
'',
''
),

(
'Apple iPhone 17',
'Smartphones',
999,
5.0,
'phone5.webp',
'#70767f',
'#dfe8e6',
'#f2e3de',
'#ffffff',
'',
''
),

(
'Apple iPhone 17 Pro',
'Smartphones',
1099,
5.0,
'phone6.webp',
'#70767f',
'#ffffff',
'#e5db1b',
'#ffffff',
'',
''
);

INSERT INTO products
(name, category, price, rating, image, color1, color2, color3, color4, storage1, storage2)
VALUES
(
'Apple iPhone Air',
'Smartphones',
799,
5.0,
'phone7.webp',
'#4b4f56',
'#dfe8e6',
'#f2e3de',
'#e5db1b',
'1 TB SSD',
'256GB SSD'
),

(
'Google Pixel 8',
'Smartphones',
899,
5.0,
'phone8.webp',
'#727b8b',
'#dfe8e6',
'#f2e3de',
'#e5db1b',
'',
''
),

(
'Apple iPhone 15 Pro',
'Smartphones',
999,
5.0,
'phone3.webp',
'#7f8798',
'#7f8798',
'#e6ddcc',
'#ffffff',
'',
''
),

(
'Apple iPhone 15 Pro Max',
'Smartphones',
1199,
5.0,
'phone9.webp',
'#7f8798',
'#7f8798',
'#e6ddcc',
'#ffffff',
'',
''
),

(
'Apple iPhone 17',
'Smartphones',
999,
5.0,
'phone10.webp',
'#70767f',
'#dfe8e6',
'#f2e3de',
'#ffffff',
'',
''
),

(
'Apple iPhone 17 Pro',
'Smartphones',
1099,
5.0,
'phone11.jpg',
'#70767f',
'#ffffff',
'#e5db1b',
'#ffffff',
'',
''
);

INSERT INTO products
(name, category, price, rating, image, color1, color2, color3, color4, storage1, storage2)
VALUES
(
'Acer SA100 SATAIII',
'PC & Components',
30.00,
5.0,
'pc1.jpg',
'',
'',
'',
'',
'',
''
),
(
'AMD Radeon Pro W5500',
'PC & Components',
480.00,
4.0,
'pc2.jpg',
'',
'',
'',
'',
'',
''
),
(
'AMD Ryzen 5 5600X',
'PC & Components',
250.00,
4.0,
'pc3.jpg',
'',
'',
'',
'',
'',
''
),
(
'AMD Ryzen 5 7600X',
'PC & Components',
299.00,
5.0,
'pc4.jpg',
'',
'',
'',
'',
'',
''
),
(
'AMD Ryzen 7 5800X',
'PC & Components',
370.00,
4.0,
'pc5.jpg',
'',
'',
'',
'',
'',
''
),
(
'AMD Ryzen 9 7950X',
'PC & Components',
699.00,
4.0,
'pc6.jpg',
'',
'',
'',
'',
'',
''
);

INSERT INTO products
(name, category, price, rating, image, color1, color2, color3, color4, storage1, storage2)
VALUES
(
'ARIETE 0979',
'Appliances',
110.00,
5.0,
'appliance1.jpg',
'',
'',
'',
'',
'',
''
),
(
'ARIETE 986',
'Appliances',
150.00,
4.0,
'appliance2.jpg',
'',
'',
'',
'',
'',
''
),
(
'Bamix DeLuxe M200',
'Appliances',
230.00,
4.0,
'appliance3.jpg',
'',
'',
'',
'',
'',
''
),
(
'Bamix Luxurylin M200',
'Appliances',
605.00,
5.0,
'appliance4.jpg',
'',
'',
'',
'',
'',
''
),
(
'Bosch KUW20VHF0G',
'Appliances',
745.00,
4.0,
'appliance5.jpg',
'',
'',
'',
'',
'',
''
),
(
'Bosch MMB6141B',
'Appliances',
90.00,
4.0,
'appliance6.jpg',
'',
'',
'',
'',
'',
''
);

DELIMITER $$

CREATE PROCEDURE GetAllProducts()
BEGIN
   SELECT * FROM products;
END $$

DELIMITER ;