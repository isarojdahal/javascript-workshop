# Day 3 - Variables, DataTypes, Template Literals

## _Topics of the day_

[_Variables in JavaScript_](#1-variables-in-javascript-var-let-and-const)

[_DataType is JavaScript_](#2-datatypes-in-javascript)

[_Template Literals_](#3-template-literals)

## _1. Variables in JavaScript (var, let and const)_

### _`var` keyword_

- Only use `var` to create variables to support old browsers.
  `var` allows redeclaration of same variable (It should be avoided).

  ```JS
  var myName = "Everyday";
  var myName = "Everyday Karma";
  ```

- Variables created using `var` can be referenced even before its declaration.

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

- `var` creates a variable with global scope.

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

### _`let` and `const` keyword_

`let` and `const` are added in ES2015 (ES6), We use `let` and `const` keywords to declare variables in Mordern JavaScript.

- `let` prevents redeclaration of the same variable.

  ```JS
  let myVariable = 1;
  let myVariable = 2;
  // We cannot redeclare same variable in same block with `let`
  ```

- `let` creates a block-scoped variable.

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

- `const` works simillar to `let` the only difference is that a variable created using `const` cannot be reassigned a value after initialization.

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

All the variables in JavaScript has one these DataTypes.

- [Number](#number)
- [String](#string)
- [Boolean](#boolean)
- [Undefined](#undefined)
- [Null](#null)
- [BigInt](#bigint)
- [Symbol](#symbol)
- [Object](#object)

**_NOTE: In JavaScript we don't need to mention DataType to a variable explicitly due to its dynamic nature. Also, we can use `typeof` operator to check type of any variable._**

### _Number_

An integer or floating point number.

```JS
let myAge = 20; // Integer number
const PI = 3.1415; // Floating point number

console.log(typeof myAge);
console.log(typeof PI);
```

**_Output_**

```console
$ node dataTypes.js
number
number
```

### _String_

A sequence of characters that represent a text value.

```JS
let myName = "Everyday Karma";

console.log(typeof myName);
```

**_Output_**

```console
$ node dataTypes.js
string
```

### _Boolean_

A `true` or `false` value.

```JS
let isJavaScriptAwesome = true;
let isEmpty = false;

console.log(typeof isJavaScriptAwesome, typeof isEmpty);
// We can give multiple comma seperated values in console.log()
```

**_Output_**

```console
$ node dataTypes.js
boolean boolean
```

### _Undefined_

A variable whose value is not defined. Default value of any new uninitialized variable in JS is `undefined`. We can also explicitly assign `undefined` as value to a variable.

```JS
let notDefined;
let alsoNotDefined = undefined;

console.log(typeof notDefined);
console.log(typeof alsoNotDefined);
```

**_Output_**

```console
$ node dataTypes.js
undefined
undefined
```

### _Null_

A special keyword denoting a `null` (empty) value. (Because JavaScript is case-sensitive, `null` is not the same as `Null`, `NULL`, or any other variant.)

```JS
let empty = null;

console.log(typeof empty);
```

**_Output_**

```console
$ node dataTypes.js
object
```

**_NOTE: Noticed the `typeof` operator returned `object` as the type for the above variable whereas we have assigned `null` as the value. This is considered a bug (One of the famous bug in JS), but one which cannot be fixed because it will break too many scripts._**

### _BigInt_

An integer with arbitrary precision. For example: `123456789098765n`. We write `n` at the end of the number to represent BigInt.

```JS
let anInteger = 1234567890987654321;

let bigNumber = 1234567890987654321n;

console.log(anInteger, typeof anInteger);
console.log(bigNumber, typeof bigNumber);
```

**_Output_**

```console
$ node dataTypes.js
1234567890987654400 number
1234567890987654321n bigint
```

**_NOTE: Noticed the `integer` one has zeros at the end whereas the `bigint` one is returning the correct number as assigned value. This is beacause numeric literals with absolute values equal to 2^53 or greater are too large to be represented accurately as integers. But we can represent larger number using `bigint` type._**

### _Symbol_

A data type whose instances are unique and immutable. Symbols are often used to add unique property keys to an object that won't collide with keys any other code might add to the object, and which are hidden from any mechanisms other code will typically use to access the object.

**_We will discuss about `symbol` datatype in more detail in future classes._**

### _Object_

In JavaScript, objects can be seen as a collection of properties. With the object literal syntax, a limited set of properties are initialized; then properties can be added and removed.

Property values can be values of any type, including other objects, which enables building complex data structures. Properties are identified using key values. A key value is either a String value or a Symbol value.

```JS
let person = {
  name: "Ramesh Thapa", // Here, "name" is key and "Ramesh Thapa" is value
  age: 26,
  isEligibleForVoting: true,
  address: {
    district: "Kathmandu",
    country: "Nepal",
  }, // An object can also nest another object
}

console.log("DataType of person:", typeof person);

console.log("Name:", person.name);
// console.log("Name:", person[name]);
// We use "." or "[]" notation to access the values

console.log("Age:", person.age);
console.log("Can Vote:", person.isEligibleForVoting);
console.log("Address:", person.address.district, person.address.country);
```

**_Output_**

```console
$ node dataTypes.js
DataType of person: object
Name: Ramesh Thapa
Age: 26
Address: Kathmandu Nepal
Can Vote: true
```

**_NOTE: Don't worry if you can't understand JS objects right away, you will get comfortable with using JS objects as we progress._**

## _3. Template Literals_

Template literals are enclosed with backtick (`) character instead of double or single quotes, allowing for multi-line strings, string interpolation with embedded expressions.

Along with having normal strings, template literals can also contain other parts called placeholders, which are embedded expressions delimited by a dollar sign and curly braces: `${expression}`.

```JS
let myName = "Everyday Karma";

let greeting = `Hello ${myName}!`; // ${myName} works as a placeholder

console.log(greeting);
```

**_*Output*_**

```console
$ node templateLiterals.js
Hello Everyday Karma!
```

**_We can also invoke a function inside the `${expression}`_**

```JS
function isEligibleToVote(age) {
  if (age < 18)
    return "No";
  else
    return "Yes";
}

let myAge = 20;

console.log(`Can I Vote? => ${isEligibleToVote(myAge)}`);
```

**_Output_**

```console
$ node templateLiterals.js
Can I Vote? => Yes
```

**_NOTE: Template/String literals are very useful feature, we will explore about template literals even more in future sessions._**
