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
DELIMITER $$

CREATE PROCEDURE GetAllProducts()
BEGIN
   SELECT * FROM products;
END $$

DELIMITER ;