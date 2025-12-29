-- =====================================
-- 1️⃣ CREATE TABLES
-- =====================================

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS orders (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    product VARCHAR(50) NOT NULL,
    amount NUMERIC(10,2) NOT NULL,
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id)
);

-- =====================================
-- 2️⃣ INSERT SAMPLE DATA
-- =====================================

INSERT INTO users (name, email) VALUES
('Alice', 'alice@example.com'),
('Bob', 'bob@example.com'),
('Charlie', 'charlie@example.com');

INSERT INTO orders (user_id, product, amount) VALUES
(1, 'Laptop', 1200.00),
(1, 'Mouse', 25.00),
(2, 'Keyboard', 75.00),
(3, 'Monitor', 300.00);

-- =====================================
-- JOINS PRACTICE
-- =====================================
-- We are joining two tables:
-- users (id, name, email)
-- orders (id, user_id, product, amount)

-- -------------------------------------
-- INNER JOIN
-- Returns only records where a user
-- has at least one matching order
-- -------------------------------------
SELECT
    u.id AS user_id,
    u.name,
    u.email,
    o.product,
    o.amount
FROM users u
INNER JOIN orders o
ON u.id = o.user_id;

-- -------------------------------------
-- LEFT JOIN
-- Returns ALL users
-- Even users without orders
-- -------------------------------------
SELECT
    u.id AS user_id,
    u.name,
    u.email,
    o.product,
    o.amount
FROM users u
LEFT JOIN orders o
ON u.id = o.user_id;

-- -------------------------------------
-- RIGHT JOIN
-- Returns ALL orders
-- Even if the user record is missing
-- -------------------------------------
SELECT
    u.id AS user_id,
    u.name,
    u.email,
    o.product,
    o.amount
FROM users u
RIGHT JOIN orders o
ON u.id = o.user_id;

-- -------------------------------------
-- FULL OUTER JOIN
-- Returns:
-- - All users
-- - All orders
-- Matching where possible
-- -------------------------------------
SELECT
    u.id AS user_id,
    u.name,
    u.email,
    o.product,
    o.amount
FROM users u
FULL OUTER JOIN orders o
ON u.id = o.user_id;
