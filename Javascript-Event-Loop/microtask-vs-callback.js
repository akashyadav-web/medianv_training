console.log("Start");
// Call Stack

// Promise callbacks go to Microtask Queue
Promise.resolve().then(() => {
  console.log("Promise");
});

// setTimeout callback goes to Callback Queue
setTimeout(() => {
  console.log("Timeout");
}, 0);

console.log("End");

/*
EXECUTION ORDER:
1. Start  → Call Stack
2. End    → Call Stack
3. Promise → Microtask Queue
4. Timeout → Callback Queue

RULE:
Microtask Queue ALWAYS executes before Callback Queue

OUTPUT:
Start
End
Promise
Timeout
*/
