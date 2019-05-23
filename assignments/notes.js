//===== Closure =====
// These will probably be included in job interviews - reference this before going!!!

// The combination of a function, and the lexical environment within which that function was declared
// When a function is declared, a new scope is created - a functional scope
// The variables or functions delcared within that function havce the ability to reach outward for context, but never inward
// This paradigm remains true no matter how deep you nest functions

const foo = "bar";
function returnFoo() {
  return foo;
}
returnFoo();

//The code inside returnFoo has access to the outside scope (code outside of returnFoo)

const lastName = "Bond";
function greet() {
  const firstName = "James";
  alert(`The name's ${lastName}, ${firstName} ${lastName}`);
}

// greet() has access to lastName, but anything outside of greet() does not have access to firstName

const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  // Example: const newCounter = counter();
  // newCounter(); // 1
  // newCounter(); // 2
  let count = 0;
  return function() {
    // count = count + 1;
    return ++count; // is the same as count = count + 1
  };
};

// const newCounter = counter();
// console.log(newCounter()); // 1
// console.log(newCounter()); // 2

//===== Callback Functions =====

// Stem from the programming paradigm called functional programming
// In JS, all functions are first class citizens - i.e. store a function as a variable, then pass that variable around
// Functions can be passed as a parameter to another function
// A set of instructions to complete a task
// Functions are a Type in JS like any other - bool, string, number, etc.

const functionFeeder = function(callback) {
  callback("Hello from the inside of Function Feeder");
};

functionFeeder(function(greeting) {
  // console.log(greeting);
});

function sayHellow(name) {
  console.log(`Hello, ${name}`);
}

function callSayHelloWithLars(callback) {
  const innerName = "Lars";
  callback(innerName);
}

// callSayHelloWithLars(sayHellow);

const elements = ["earth", "wind", "fire", "water"];

const newForEach = (list, callBack) => {
  for (let i = 0; i < elements.length; i++) {
    callBack(list[i], i);
  }
};

newForEach(elements, function(item, index) {
  // console.log(item, index);
});

function showFirst(array, callBack) {
  callBack(array[0]);
}

function showLength(list, cb) {
  cb(list.length);
}

showFirst(elements, firstItem => {
  // console.log(firstItem);
});

// So, elements and firstItem are arguments passed into function showFirst(array, callBack) when invoked

showLength(elements, lengthOfList => {
  // console.log(lengthOfList);
});

elements.forEach((element, index) => {
  //alert(element, index);
});

// elements.map((element, index) => console.log(element + index));

//===== Array Methods =====

// JSON as a standard forces us to ensure that our knowledge of the array methods runs deep
// Arrays have many benefits and are built into the JS ecosystem as a special type of object
// Arrays are very easy to work with
// There are dozens of array methods to tap into to simplify how we work with our data
// Functional programming, immutability, and making data work your way

//=== JSON
// Everything is double quoted
// Data is separated by commas - no trailing comma
// Array of objects
// Name/Value pairs

//=== .map()
// Returns a new array of elements
// Calls back each element, index, and returns each in turn
// Used for manipulating or reshaping data without effecting the original array

//=== .filter()
// Returns a new array of elements
// Calls back each element, index, and returns each in turn
// Takes a callback that runs a 'truth' test. If true, returns the elements; else, ignores
// Used for filtering out an array of elements by a specific condition

//=== .reduce()
// Returns a new array of elements
// Takes a callback which is a reducer function
// Reducer function takes a previous value, and a next value - known as accumulator - and current value
// Used for manipulating or reshaping data into a single value

const data = [
  { city: "seattle", state: "WA", population: 652405, land_area: 83.9 },
  { city: "new york", state: "NY", population: 8405837, land_area: 302.6 },
  { city: "boston", state: "MA", population: 645966, land_area: 48.3 },
  { city: "kansas city", state: "MO", population: 467007, land_area: 315 }
];

const arrayOfPops = data.map(state => state.population);
// console.log(arrayOfPops);

const largeLandAreas = data.filter(state => state.land_area >= 50);
// console.log(largeLandAreas);

const states = data.length;
let population = data.reduce((acc, currentValue) => (acc += currentValue.population), 0);
// console.log(population / 4);
