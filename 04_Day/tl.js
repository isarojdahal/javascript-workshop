// Nested Template Literal.

const firstName = "John";
const lastName = "Doe";
const age = 30;

// const greeting = `Hello, ${firstName} ${lastName}!

// You are ${age} years old.

// Your full name in uppercase is ${`${firstName} ${lastName}`.toUpperCase()}`;

// console.log(greeting);

let data = js` My first name is ${firstName} and last name is : ${lastName} `;

function js(strings, exp, exp2) {
  console.log(strings);
  console.log(exp);
  console.log(exp2);
  return exp + exp2;
}

console.log("data", data);
