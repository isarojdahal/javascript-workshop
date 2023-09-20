# Day 3 - Variables, DataTypes, Template Literals

## _1. Variables in JavaScript (var, let and const)_

### _"var" keyword_

- Only use "var" to create variables to support old browsers.
  "var" allows redeclaration of same variable (It should be avoided).

  ```JS
  var myName = "Everyday";
  var myName = "Everyday Karma";
  ```

- Variables created using var can be referenced even before its declaration.

  ```JS
  console.log("My age is " + myAge); // Prints "My age is undefined"
  var myAge = 20;
  console.log("My age is " + myAge); // Prints "My age is 20"
  ```

  **_Output_**

  ```console
  $ node variables.js
  My age is undefined
  My age is 20
  ```

- "var" creates a variable with global scope.

  ```JS
  for (var i = 0; i < 5; i++) {
    console.log("Hello! " + i);
  }

  console.log("i =", i);
  // The variable "i" can be accessed outside the for loop
  ```

  **_Output_**

  ```console
  $ node variables.js
  Hello! 0
  Hello! 1
  Hello! 2
  Hello! 3
  Hello! 4
  i = 5
  ```

### _"let" and "const" keyword_

"let" and "const" are added in ES2015 (ES6), We use "let" and "const" keywords to declare variables in Mordern JavaScript.

- "let" prevents redeclaration of the same variable.

  ```JS
  let myVariable = 1;
  let myVariable = 2;
  // We cannot redeclare same variable in same block with "let"
  ```

- "let" creates a block-scoped variable.

  ```JS
  let myVariable = 123;

  for (let j = 0; j < 5; j++) {
    let myVariable = j + 5;
    // Notice we can declare variables of same name (myVariable) in different blocks

    console.log("Hello again! " + myVariable);
  }

  console.log("j =", j);
  // We cannot access "j" outside the for loop it was declared in
  ```

  **_Output_**

  ```console
  $ node variables.js
  Hello again! 5
  Hello again! 6
  Hello again! 7
  Hello again! 8
  Hello again! 9
  E:\everydayKarma-js-workshop\Day3\variables.js:37
  console.log("j =", j);
                     ^
  ReferenceError: j is not defined
  ```

- "const" works simillar to "let" the only difference is that a variable created using "const" cannot be reassigned a value after initialization.

  ```JS
  const myConstVar = 3.1415;
  myConstVar = 3.210;
  ```

  **_Output_**

  ```console
  $ node variables.js
  E:\everydayKarma-js-workshop\Day3\variables.js:42
  myConstVar = 3.210;
             ^

  TypeError: Assignment to constant variable.
  ```

- **_NOTE: Variable declartion, initialization and reassigning values are different things._**

  ```JS
  let myNum;
  // Variable declaration
  // (Default value for any new variable in JS is undefined)

  myNum = 1234; // Variable initialization
  myNum = 4321; // Reassigning the new value
  ```

## _2. DataTypes in JavaScript_
