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
    NOT NULL
    DEFAULT current_timestamp,
  dateupdated TIMESTAMP
    NOT NULL
    DEFAULT current_timestamp
    ON UPDATE current_timestamp
);

CREATE TABLE admins (
  admin_id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL UNIQUE,
  datecreated DATETIME
    NOT NULL
    DEFAULT current_timestamp,
  dateupdated TIMESTAMP
    NOT NULL
    DEFAULT current_timestamp
    ON UPDATE current_timestamp,
  FOREIGN KEY admin(user_id)
    REFERENCES users(user_id)
    ON DELETE restrict
    ON UPDATE cascade
);

CREATE TABLE posts (
  post_id INT AUTO_INCREMENT PRIMARY KEY,
  content varchar(140) NOT NULL,
  user_id INT NOT NULL,
  reply_id INT,
  datecreated DATETIME
    NOT NULL
    DEFAULT current_timestamp,
  dateupdated TIMESTAMP
    NOT NULL
    DEFAULT current_timestamp
    ON UPDATE current_timestamp,
  CONSTRAINT FK_reply_id
    FOREIGN KEY posts(reply_id)
    REFERENCES posts(post_id)
    ON DELETE restrict
    ON UPDATE cascade,
  CONSTRAINT FK_post_user_id
    FOREIGN KEY posts(user_id)
    REFERENCES users(user_id)
    ON DELETE restrict
    ON UPDATE cascade
);

CREATE TABLE USER_FOLLOWS_USER (
  follow_id INT AUTO_INCREMENT PRIMARY KEY,
  user1 INT NOT NULL,
  user2 INT NOT NULL,
  datecreated DATETIME
    NOT NULL
    DEFAULT current_timestamp,
  dateupdated TIMESTAMP
    NOT NULL
    DEFAULT current_timestamp
    ON UPDATE current_timestamp,
  CONSTRAINT FK_follow_user_id1
    FOREIGN KEY chats(user1)
    REFERENCES users(user_id)
    ON DELETE restrict
    ON UPDATE cascade,
  CONSTRAINT FK_follow_user_id2
    FOREIGN KEY chats(user2)
    REFERENCES users(user_id)
    ON DELETE restrict
    ON UPDATE cascade
);

CREATE TABLE USER_CHATS_USER (
  chat_id INT AUTO_INCREMENT PRIMARY KEY,
  user1 INT NOT NULL,
  user2 INT NOT NULL,
  datecreated DATETIME
    NOT NULL
    DEFAULT current_timestamp,
  dateupdated TIMESTAMP
    NOT NULL
    DEFAULT current_timestamp
    ON UPDATE current_timestamp,
  CONSTRAINT FK_chat_user_id1
    FOREIGN KEY chats(user1)
    REFERENCES users(user_id)
    ON DELETE restrict
    ON UPDATE cascade,
  CONSTRAINT FK_chat_user_id2
    FOREIGN KEY chats(user2)
    REFERENCES users(user_id)
    ON DELETE restrict
    ON UPDATE cascade
);

CREATE TABLE chat_messages (
  message_id INT AUTO_INCREMENT PRIMARY KEY,
  content varchar(140) NOT NULL,
  chat_id INT NOT NULL,
  datecreated DATETIME
    NOT NULL
    DEFAULT current_timestamp,
  dateupdated TIMESTAMP
    NOT NULL
    DEFAULT current_timestamp
    ON UPDATE current_timestamp,
  FOREIGN KEY chatMessages(chat_id)
    REFERENCES chats(chat_id)
    ON DELETE restrict
    ON UPDATE cascade
);

CREATE TABLE USER_LIKES_POST {
  like_id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  post_id INT NOT NULL,
  datecreated DATETIME
    NOT NULL
    DEFAULT current_timestamp,
  CONSTRAINT FK_likes_user_id
    REFERENCES users(user_id)
    ON DELETE restrict
    ON UPDATE cascade,
  CONSTRAINT FK_likes_post_id
    REFERENCES posts(post_id)
    ON DELETE restrict
    ON UPDATE cascade
};