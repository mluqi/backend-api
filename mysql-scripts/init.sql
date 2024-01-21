-- init.sql

-- Buat database jika belum ada
CREATE DATABASE IF NOT EXISTS my_db;

-- Gunakan database yang baru dibuat
USE my_db;

-- Buat tabel customers
CREATE TABLE IF NOT EXISTS customers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255)
);

-- Buat tabel transactions
CREATE TABLE IF NOT EXISTS transactions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  customer_id INT,
  menu VARCHAR(255),
  price INT(10),
  qty INT,
  payment VARCHAR(255),
  total INT(10),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (customer_id) REFERENCES customers(id)
);
