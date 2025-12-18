// The Call Stack executes synchronous code line by line

function first() {
  // first() is pushed to the call stack
  second();
  // second() finishes and is popped
}

function second() {
  // second() is pushed to the call stack
  console.log("Inside second function");
  // console.log is executed and popped
}

// Execution starts here
first();

/*
CALL STACK FLOW:
1. first() pushed
2. second() pushed
3. console.log executed
4. second() popped
5. first() popped
*/
