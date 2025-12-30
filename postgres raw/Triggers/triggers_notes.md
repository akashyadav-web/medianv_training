# PostgreSQL Triggers, Functions, and Audit Logs - Notes

This document explains **PostgreSQL triggers, functions, and audit logs** in detail.

---

## 1. Functions in PostgreSQL

- **Definition:** Functions (or stored procedures) are reusable blocks of SQL/PLpgSQL code.
- **Purpose:**
  - Automate repetitive tasks
  - Encapsulate business logic
  - Return results or perform operations without returning a value
- **Key points:**
  - Use `RETURNS` to define the output type.
  - Functions can be called directly in SQL or via triggers.

---

## 2. Triggers in PostgreSQL

- **Definition:** Triggers are special database objects that execute automatically when an event occurs on a table.
- **Trigger events:** `INSERT`, `UPDATE`, `DELETE`
- **Types:**
  - `BEFORE` – executes before the event; useful for validation
  - `AFTER` – executes after the event; useful for logging or cascading updates
  - `INSTEAD OF` – executes instead of an operation (used mostly on views)
- **Trigger components:**
  - Triggered table
  - Event type
  - Timing (`BEFORE` / `AFTER`)
  - Function to execute

---

## 3. Audit Logs

- **Definition:** Audit logs track changes to database tables to maintain history and accountability.
- **Common audit log fields:**
  - `operation` – type of action (`INSERT`, `UPDATE`, `DELETE`)
  - `old` values – data before the change
  - `new` values – data after the change
  - `timestamp` – when the change occurred
  - `user` – who performed the change (optional)
- **Use cases:**
  - Security and compliance
  - Debugging data changes
  - Maintaining historical records

---

## 4. Combining Functions and Triggers for Audit

- **Workflow:**
  1. Create an **audit table** to store logs.
  2. Write a **trigger function** in PL/pgSQL to insert logs.
  3. Attach a **trigger** to the main table to call the function automatically on `INSERT`, `UPDATE`, or `DELETE`.
- **Benefits:**
  - Automatic logging of all changes
  - Centralized logic
  - Supports multiple tables with similar triggers

---

## 5. Best Practices

- Keep trigger logic **lightweight** to avoid performance impact.
- Include **timestamps** and optionally **user information** in audit logs.
- Test triggers thoroughly in a development environment.
- Consider **separate audit tables** for high-volume or sensitive tables.
- Document triggers and functions clearly for maintainability.

---

