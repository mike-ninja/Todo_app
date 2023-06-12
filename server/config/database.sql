CREATE DATABASE todo_db;

CREATE TABLE todo(
  id SERIAL PRIMARY KEY,
  task text,
  status BOOLEAN,
  createdAt timestamp DEFAULT current_timestamp,
  updatedAt timestamp DEFAULT current_timestamp
);
