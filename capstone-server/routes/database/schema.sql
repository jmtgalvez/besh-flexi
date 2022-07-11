DROP USER IF EXISTS 'capstone'@'localhost';
CREATE USER 'capstone'@'localhost' IDENTIFIED BY 'capstone';

DROP DATABASE IF EXISTS capstone;
CREATE DATABASE IF NOT EXISTS capstone;

GRANT ALL PRIVILEGES ON capstone.* TO 'capstone'@'localhost';
GRANT EXECUTE ON capstone.* TO 'capstone'@'localhost';

USE capstone;

CREATE TABLE users (
  user_id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(25) NOT NULL UNIQUE,
  username VARCHAR(25) NOT NULL UNIQUE,
  password VARCHAR(100) NOT NULL
);

INSERT INTO users (email, username, password) VALUES ('henson.lao@gmail.com', 'henson.lao', 'password');
INSERT INTO users (email, username, password) VALUES ('adonis.suico@gmail.com', 'adonis.suico', 'password');
INSERT INTO users (email, username, password) VALUES ('miguel.galvez@gmail.com', 'miguel.galvez', 'password');