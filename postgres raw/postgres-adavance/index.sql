
CREATE INDEX idx_users_email ON users(email);


SELECT * FROM users WHERE email = 'alice@example.com';


DROP INDEX idx_users_email;
