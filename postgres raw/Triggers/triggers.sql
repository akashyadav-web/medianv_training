-- ============================================
-- PostgreSQL Triggers, Functions, and Audit Logs
-- ============================================

-- 1. Create Main Table
CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    position VARCHAR(50),
    salary NUMERIC(10, 2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Create Audit Table
CREATE TABLE employee_audit (
    audit_id SERIAL PRIMARY KEY,
    employee_id INT,
    operation VARCHAR(10),
    old_name VARCHAR(100),
    old_position VARCHAR(50),
    old_salary NUMERIC(10,2),
    new_name VARCHAR(100),
    new_position VARCHAR(50),
    new_salary NUMERIC(10,2),
    changed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 3. Create Trigger Function
CREATE OR REPLACE FUNCTION log_employee_changes()
RETURNS TRIGGER AS $$
BEGIN
    IF TG_OP = 'INSERT' THEN
        INSERT INTO employee_audit(employee_id, operation, new_name, new_position, new_salary)
        VALUES (NEW.id, 'INSERT', NEW.name, NEW.position, NEW.salary);
        RETURN NEW;
    ELSIF TG_OP = 'UPDATE' THEN
        INSERT INTO employee_audit(employee_id, operation, old_name, old_position, old_salary,
                                   new_name, new_position, new_salary)
        VALUES (OLD.id, 'UPDATE', OLD.name, OLD.position, OLD.salary,
                NEW.name, NEW.position, NEW.salary);
        RETURN NEW;
    ELSIF TG_OP = 'DELETE' THEN
        INSERT INTO employee_audit(employee_id, operation, old_name, old_position, old_salary)
        VALUES (OLD.id, 'DELETE', OLD.name, OLD.position, OLD.salary);
        RETURN OLD;
    END IF;
END;
$$ LANGUAGE plpgsql;

-- 4. Create Trigger
CREATE TRIGGER employee_audit_trigger
AFTER INSERT OR UPDATE OR DELETE
ON employees
FOR EACH ROW
EXECUTE FUNCTION log_employee_changes();

-- 5. Test the Trigger
-- Insert example
INSERT INTO employees(name, position, salary) VALUES ('John Doe', 'Developer', 60000);

-- Update example
UPDATE employees SET salary = 65000 WHERE name = 'John Doe';

-- Delete example
DELETE FROM employees WHERE name = 'John Doe';

-- Check audit logs
SELECT * FROM employee_audit;
