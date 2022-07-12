DROP USER IF EXISTS 'capstone'@'localhost';
CREATE USER 'capstone'@'localhost' IDENTIFIED BY 'capstone';

DROP DATABASE IF EXISTS capstone;
CREATE DATABASE IF NOT EXISTS capstone;

GRANT ALL PRIVILEGES ON capstone.* TO 'capstone'@'localhost';
GRANT EXECUTE ON capstone.* TO 'capstone'@'localhost';

USE capstone;

CREATE TABLE users (
  user_id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL UNIQUE,
  username VARCHAR(25) NOT NULL UNIQUE,
  password VARCHAR(100) NOT NULL,
  datecreated DATETIME
    DEFAULT current_timestamp,
  dateupdate TIMESTAMP
    DEFAULT current_timestamp
    ON UPDATE current_timestamp
);

CREATE TABLE admins (
  admin_id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL UNIQUE,
  datecreated DATETIME
    DEFAULT current_timestamp,
  dateupdate TIMESTAMP
    DEFAULT current_timestamp
    ON UPDATE current_timestamp,
  FOREIGN KEY admin(user_id)
    REFERENCES users(user_id)
    ON DELETE restrict
    ON UPDATE cascade
);

CREATE TABLE posts (
  status_id INT AUTO_INCREMENT PRIMARY KEY,
  content varchar(140) NOT NULL,
  user_id INT NOT NULL,
  reply_id INT,
  datecreated DATETIME
    DEFAULT current_timestamp,
  dateupdate TIMESTAMP
    DEFAULT current_timestamp
    ON UPDATE current_timestamp,
  CONSTRAINT FK_replyId    
    FOREIGN KEY posts(reply_id)
    REFERENCES posts(status_id)
    ON DELETE restrict
    ON UPDATE cascade,
  CONSTRAINT FK_userId
    FOREIGN KEY posts(user_id)
    REFERENCES users(user_id)
    ON DELETE restrict
    ON UPDATE cascade
);

CREATE TABLE chats  (
  chat_id INT AUTO_INCREMENT PRIMARY KEY,
  user1 INT NOT NULL,
  user2 INT NOT NULL,
  datecreated DATETIME
    DEFAULT current_timestamp,
  dateupdate TIMESTAMP
    DEFAULT current_timestamp
    ON UPDATE current_timestamp,
  CONSTRAINT FK_userid1
    FOREIGN KEY chats(user1)
    REFERENCES users(user_id)
    ON DELETE restrict
    ON UPDATE cascade,
  CONSTRAINT FK_userid2
    FOREIGN KEY chats(user2)
    REFERENCES users(user_id)
    ON DELETE restrict
    ON UPDATE cascade
);

CREATE TABLE chatMessages (
  message_id INT AUTO_INCREMENT PRIMARY KEY,
  content varchar(140) NOT NULL,
  chat_id INT NOT NULL,
  datecreated DATETIME
    DEFAULT current_timestamp,
  dateupdate TIMESTAMP
    DEFAULT current_timestamp
    ON UPDATE current_timestamp,
  FOREIGN KEY chatMessages(chat_id)
    REFERENCES chats(chat_id)
    ON DELETE restrict
    ON UPDATE cascade
);

INSERT INTO users (first_name, last_name, email, username, password) VALUES ('Henson', 'Lao', 'henson.lao@gmail.com', 'henson.lao', 'password');
INSERT INTO users (first_name, last_name, email, username, password) VALUES ('Adonis', 'Suico', 'adonis.suico@gmail.com', 'adonis.suico', 'password');
INSERT INTO users (first_name, last_name, email, username, password) VALUES ('Miguel', 'Galvez', 'miguel.galvez@gmail.com', 'miguel.galvez', 'password');

INSERT INTO admins (user_id) VALUES (1), (2), (3);