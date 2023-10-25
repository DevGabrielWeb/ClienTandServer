CREATE DATABASE sistema_solar; -- Crie um banco de dados
USE sistema_solar; -- Use o banco de dados

-- Crie uma tabela para armazenar informações dos planetas
CREATE TABLE planetas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    atmosfera VARCHAR(50),
    orbita VARCHAR(50),
    temperatura FLOAT,
    gravidade FLOAT,
    raio FLOAT
);

-- Insira dados para todos os planetas
INSERT INTO planetas (nome, atmosfera, orbita, temperatura, gravidade, raio) VALUES
    ('Mercúrio', 'Muito fina', 'Próxima ao Sol', 167, 3.7, 2439.7),
    ('Vênus', 'Espessa', 'Próxima ao Sol', 464, 8.87, 6051.8),
    ('Terra', 'Respirável', 'Próxima ao Sol', 15, 9.81, 6371),
    ('Marte', 'Fina', 'Média distância ao Sol', -80, 3.721, 3389.5),
    ('Júpiter', 'Gasosa', 'Longe do Sol', -145, 24.79, 69911),
    ('Saturno', 'Gasosa', 'Longe do Sol', -178, 10.44, 58232),
    ('Urano', 'Gasosa', 'Muito longe do Sol', -224, 8.69, 25362),
    ('Netuno', 'Gasosa', 'Muito longe do Sol', -225, 11.15, 24622);
-- Insira mais planetas conforme necessário

