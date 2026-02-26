CREATE TABLE IF NOT EXISTS cars (
  id INT AUTO_INCREMENT PRIMARY KEY,
  marca VARCHAR(255) NOT NULL,
  modelo VARCHAR(255) NOT NULL,
  year INT NOT NULL
);

INSERT INTO cars (marca, modelo, year) VALUES
('Volkswagen', 'Golf', 2021),
('Volkswagen', 'Polo', 2017),
('Volkswagen', 'Passat', 2019),

('BMW', 'Serie 3', 2020),
('BMW', 'Serie 1', 2018),
('BMW', 'X5', 2022),

('Mercedes-Benz', 'Clase A', 2019),
('Mercedes-Benz', 'Clase C', 2021),
('Mercedes-Benz', 'GLA', 2020),

('Audi', 'A3', 2018),
('Audi', 'A4', 2020),
('Audi', 'Q5', 2021),

('Renault', 'Clio', 2017),
('Renault', 'Megane', 2019),
('Renault', 'Captur', 2020),

('Peugeot', '208', 2018),
('Peugeot', '308', 2021),
('Peugeot', '3008', 2020),

('Hyundai', 'i30', 2019),
('Hyundai', 'Tucson', 2021),
('Hyundai', 'Kona', 2020),

('Kia', 'Ceed', 2018),
('Kia', 'Sportage', 2021),
('Kia', 'Rio', 2017),

('Nissan', 'Qashqai', 2020),
('Nissan', 'Micra', 2018),
('Nissan', 'Juke', 2019),

('Honda', 'Civic', 2020),
('Honda', 'CR-V', 2021),
('Honda', 'Jazz', 2018),

('Mazda', 'Mazda3', 2019),
('Mazda', 'CX-5', 2021),
('Mazda', 'Mazda6', 2018);

