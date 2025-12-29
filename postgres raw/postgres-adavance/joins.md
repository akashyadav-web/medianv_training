# JOINS

Joins combine rows from multiple tables using a related column.

Tables:
- users(id, name, email)
- orders(id, user_id, product, amount)

## INNER JOIN
Returns only matching rows.

Use when:
- You want users who have orders

## LEFT JOIN
Returns all rows from left table.

Use when:
- You want all users, even without orders

## RIGHT JOIN
Returns all rows from right table.

Use when:
- You want all orders, even without users

## FULL OUTER JOIN
Returns all rows from both tables.

Use when:
- You want complete data from both sides
