-- =====================================
-- CONSTRAINTS PRACTICE
-- =====================================

-- -------------------------------------
-- PRIMARY KEY constraint
-- Ensures each row is uniquely identified
-- -------------------------------------
CREATE TABLE sample (
    id SERIAL PRIMARY KEY
);

-- -------------------------------------
-- UNIQUE constraint
-- Prevents duplicate email addresses
-- -------------------------------------
ALTER TABLE users
ADD CONSTRAINT unique_email
UNIQUE (email);

-- -------------------------------------
-- CHECK constraint
-- Ensures order amount is always positive
-- -------------------------------------
ALTER TABLE orders
ADD CONSTRAINT check_amount_positive
CHECK (amount > 0);

-- -------------------------------------
-- FOREIGN KEY constraint
-- Ensures orders belong to valid users
-- -------------------------------------
ALTER TABLE orders
ADD CONSTRAINT fk_user
FOREIGN KEY (user_id)
REFERENCES users(id);
