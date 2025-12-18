# Day 3 – JavaScript Event Loop

## Topics Covered
- Call Stack
- Web APIs
- Callback Queue
- Microtask Queue
- Event Loop

## Call Stack
The call stack executes synchronous JavaScript code.
Functions are pushed to the stack when called and popped after execution.

## Web APIs
Provided by the browser to handle async tasks like:
- setTimeout
- fetch
- DOM events

## Callback Queue
Stores callbacks from setTimeout, setInterval, and DOM events.

## Microtask Queue
Stores promise callbacks (.then, .catch).
Microtasks have higher priority than callbacks.

## Event Loop
The event loop checks:
1. Is the call stack empty?
2. Execute microtasks
3. Execute callback tasks

## Key Rule
Microtask Queue executes before Callback Queue.
