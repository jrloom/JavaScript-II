// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

let a = 10;
function myFunc() {
  let b = 20;
  function myOtherFunc() {
    let c = 30;
    return a + b + c;
  }
  return myOtherFunc();
}

console.log(myFunc());

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  return function() {
    return ++count;
  };
};

const newCounter = counter();
console.log(newCounter()); // 1
console.log(newCounter()); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;
  return {
    increment: function() {
      return ++count;
    },
    decrement: function() {
      return --count;
    }
  };
};

const counterNew = counterFactory();
console.log("Increment " + counterNew.increment());
console.log("Increment " + counterNew.increment());
console.log("Decrement " + counterNew.decrement());
console.log("Decrement " + counterNew.decrement());
