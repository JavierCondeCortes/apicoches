CREATE DATABASE IF NOT EXISTS coches_db;
USE coches_db;

CREATE TABLE IF NOT EXISTS cars (
  id INT AUTO_INCREMENT PRIMARY KEY,
  brand VARCHAR(100),
  model VARCHAR(100),
  year INT,
  price DECIMAL(10,2)
);

INSERT INTO cars (brand, model, year, price) VALUES
('Toyota', 'Corolla', 2020, 18000),
('Ford', 'Focus', 2018, 15000);
