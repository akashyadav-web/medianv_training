// Synchronous code executes first in the Call Stack

console.log("Start"); 
// Printed immediately (Call Stack)

// setTimeout is handled by Web APIs
setTimeout(() => {
  console.log("setTimeout");
}, 0);

// This does NOT mean it runs immediately
// It goes to the Callback Queue after Web API finishes

console.log("End"); 
// Printed immediately

/*
EXECUTION FLOW:
1. "Start" → Call Stack
2. setTimeout → Web API
3. "End" → Call Stack
4. Call Stack empty
5. Event Loop moves callback from Callback Queue
6. "setTimeout" printed
*/
