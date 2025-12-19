# Day 05 – TypeScript Basics

## Topics Covered
- Types
- Variables
- Arrays
- Objects

## What is TypeScript?
TypeScript is a superset of JavaScript that adds static typing.
It helps catch errors at compile time instead of runtime.

## Why TypeScript?
- Prevents runtime errors
- Improves code readability
- Better tooling and IntelliSense
- Widely used in backend frameworks like NestJS

---

## Types & Variables

TypeScript allows defining the type of a variable.

Examples:
- string
- number
- boolean

Type inference allows TypeScript to automatically detect types.

---

## Arrays

Arrays can be typed to allow only specific data types.

Examples:
- number[]
- string[]
- Array<object>

This prevents invalid values from being added.

---

## Objects

Objects in TypeScript must follow a defined structure.

Properties can be:
- required
- optional (using `?`)

This ensures consistency in API responses and data models.

---

## `any` vs `unknown`

- `any` disables type checking (not recommended)
- `unknown` is safer and requires validation before use

---

## Real-World Use Case
TypeScript basics are used to:
- Define API response shapes
- Validate data structures
- Build DTOs in NestJS
- Ensure type-safe services and database interactions

---

## Key Takeaways
- TypeScript adds safety to JavaScript
- Arrays and objects must follow defined types
- Avoid `any` whenever possible
- Strong typing is essential for scalable applications
