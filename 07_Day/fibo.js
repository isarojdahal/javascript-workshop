// function factorial(n) {
//   if (n === 0) {
//     // Base case: The factorial of 0 is 1.
//     return 1;
//   } else {
//     // Recursive case: Multiply n by the factorial of (n-1).
//     return n * factorial(n - 1);
//     // 5* 4* 3* 2 * 1 *1  ; call stack
//   }
// }

// // Calculate the factorial of 5.
// const result = factorial(5);
// console.log(result); // Output: 120 (5! = 5 * 4 * 3 * 2 * 1 = 120)

// // Recursion function.
// // 1. stopping condition.
// // 2. self + task (problem) solve

// function deepFreeze(object) {
//   // internal: {
//   //   a: null,
//   // },

//   // {a: null}

//   const propNames = Object.keys(object);
//   // console.log(propNames)
//   // [internal]
//   // [a]

//   for (const name of propNames) {
//     const value = object[name];

//       // {
//       //   a: null,
//       // },

//     if ((value && typeof value === "object") || typeof value === "function") {
//       deepFreeze(value);
//     }
//   }

//   return Object.freeze(object);
// }

// const obj2 = {
//   internal: {
//     a: null,
//   },
// };

// deepFreeze(obj2);


