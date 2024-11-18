USE moviesdb;

CREATE TABLE IF NOT EXISTS theaters (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    location VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS movies (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    genre VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS sales (
    id INT AUTO_INCREMENT PRIMARY KEY,
    movie_id INT,
    theater_id INT,
    sale_date DATE NOT NULL,
    amount INT UNSIGNED NOT NULL,
    FOREIGN KEY (movie_id) REFERENCES movies(id) ON DELETE CASCADE,
    FOREIGN KEY (theater_id) REFERENCES theaters(id) ON DELETE CASCADE,
    UNIQUE KEY `ix_sales_unique_sale` (`theater_id`,`movie_id`,`sold_at`),
    INDEX `ix_sale_date` (sale_date)
);

INSERT INTO theaters (name, location) VALUES ('Cinema One', 'Downtown'),('Movie Palace', 'Uptown'), ('Grand Cinema', 'Midtown');

INSERT INTO movies (title, genre) VALUES ('The Great Adventure', 'Action'), ('Romantic Escape', 'Romance'), ('Mystery Island', 'Thriller');

INSERT INTO sales (movie_id, theater_id, sale_date, amount) VALUES (1, 1, '2024-05-09', 1000),(1, 2, '2024-05-09', 1500),(1, 3, '2024-05-09', 1400),(2, 1, '2024-05-09', 800),(2, 2, '2024-05-09', 1200),(2, 3, '2024-05-09', 1100),(3, 1, '2024-05-09', 900),(3, 2, '2024-05-09', 1300),(3, 3, '2024-05-09', 1000),
(1, 1, '2024-05-10', 1100),(1, 2, '2024-05-10', 1600),(1, 3, '2024-05-10', 1500),(2, 1, '2024-05-10', 900),(2, 2, '2024-05-10', 1300),(2, 3, '2024-05-10', 1200),(3, 1, '2024-05-10', 950),(3, 2, '2024-05-10', 1350),(3, 3, '2024-05-10', 1050);
