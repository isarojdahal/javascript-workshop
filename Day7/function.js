// function add(a, b, c, d) {
//   //   let a = 1;
//   //   let b = 2;

//   return 10.2;
// }

// add(1, 20);

// function call, and arg pass.

// Old  / alternative.
// let add = new Function(
//   "a",
//   "b",
//   "c",
//   "d",
//   `

// let num = 10;
// console.log(num);
// return a+b;

// `
// );

// console.log(add(1, 2));

// calling technique

// function add(a, b) {
//   console.log(a + b);
// }

// add.call(add, 1, 2);

//

// function add(...rest) {
//   console.log(rest);
// }

// add(1, 20, 30, 40);

// let printer = {
//   log(...data) {
//     for (const d of data) {
//       console.log(d);
//     }
//   },
// };

// printer.log("saroj", "23", "live", "chat","`11");

// function student(a, { name:Name, ...other }) {
//   console.log(other);
// }

// let s = {
//   name: "A",
//   address: "B",
//   def: "def",
// };

// student("A", s);

// Recursive Function.

// Complex;
// 1*2*3*4*5
// Fibonacci.
// Factorial
// Tower of Hannoi
// Data structure.

// function add(a, b) {
//   return a + b;
// }
// console.log(typeof add);

// let add = (a, b) => a + b;

// console.log(addingFunction(1, 2));

// function outer(d, e) {
//   return function inner(a, b) {
//     console.log(a, b);
//   };
// }

// outer()(1, 2);

//  function inner(a, b) {
// console.log(a, b);
// }

// IIFE

// let d = (function dot() {
//   console.log("dot");
// })();

// logic.
// let logic = (() => {
//   let a = 10;
//   let b = 1;
// })();

// let add = (a, b) => a + b;

// add.others = "others property";

// console.log(add.others);

function Student(firstName) {
  let f = "";
  this.fn = firstName;
  this.info = function () {};
}

let s = new Student("Harry");
console.log(s.fn);

let s2 = new Student("Sam");
console.log(s2.fn)
