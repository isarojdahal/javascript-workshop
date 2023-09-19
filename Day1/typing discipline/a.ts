// @ts-ignore
function adder(a: number, b: number) {
  return a + b;
}

//   @ts-ignore
let sum: number = 0;
sum = adder(1, 2);

// TypeScript is an extension language for JavaScript
// It helps to find type errors during development
// It helps us to mention types in advance just like in statically typed languages.

// Note: All TypeScript code is converted into JavaScript code at the end, Because
// Web browsers does not understand TypeScript directly.
