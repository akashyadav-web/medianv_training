-- =====================================
-- TRANSACTIONS PRACTICE
-- =====================================
-- A transaction ensures that
-- multiple queries succeed or fail together

-- -------------------------------------
-- START TRANSACTION
-- -------------------------------------
BEGIN;

-- Insert a new user
INSERT INTO users (name, email)
VALUES ('David', 'david@example.com');

-- Insert an order for that user
INSERT INTO orders (user_id, product, amount)
VALUES (5, 'Headphones', 150.00);

-- -------------------------------------
-- COMMIT saves all changes permanently
-- -------------------------------------
COMMIT;

-- -------------------------------------
-- TRANSACTION WITH ROLLBACK
-- -------------------------------------
BEGIN;

-- Insert test data
INSERT INTO users (name, email)
VALUES ('TestUser', 'test@example.com');

-- Something went wrong!
-- Rollback cancels all changes
ROLLBACK;
