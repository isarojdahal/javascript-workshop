// Normal function
function add(a, b) {
  return a + b;
}
console.log(add(2, 3));

// Expression function
const square = function (a) {
  return a * a;
};
console.log(square(2));

// Arrow function
// Arrow function is a shorter syntax for a function expression.
const cube = (a) => {
  return a * a * a;
};
console.log(cube(3));

// IIEF (Immediately Invoked Function Expression)
// It is a function that is executed right after it is created.
(function () {
  console.log("I am IIEF");
})();

// Recursive function
// A function that calls itself is called a recursive function.
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log(factorial(4));

// Function as a blueprint for creating objects
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.getInfo = function () {
    return `Name: ${this.name}, Age: ${this.age}`;
  };
}

const person1 = new Person("Harry", 20);
console.log(person1.getInfo());

// Usage of spread operator in function
const nums = [1, 2, 3, 4, 5];

function addNums(...nums) {
  let sum = 0;
  nums.forEach((num) => (sum += num));
  return sum;
}
console.log(addNums(...nums));

// Usage of destructuring in function
const person = {
  name: "Ramesh",
  age: 22,
};

function getPersonInfo({ name, age }) {
  return `Name: ${name}, Age: ${age}`;
}
console.log(getPersonInfo(person));
