"use strict";
const book = {
  name: "Becoming Supernatural",
  author: "Dr. Joe Dispenza",
  address: {
    lat: "1",
  },
};

console.log(Object.isFrozen(book));

// function deepFreeze(object) {
//   // Retrieve the property names defined on object
//   const propNames = Reflect.ownKeys(object);

//   // Freeze properties before freezing self
//   for (const name of propNames) {
//     const value = object[name];

//     if ((value && typeof value === "object") || typeof value === "function") {
//       deepFreeze(value);
//     }
//   }

//   return Object.freeze(object);
// }

// deepFreeze(book);

// book.address.lat = "2";

// book.address.lat = "2";
// console.log(book);
// Deep Freeze

// book.name = "ABC";
// book.author = "DEF";
// console.log(book.name);

// console.log(Object.entries(book));

// console.log(book.description());

// Deletion.
// console.log(book);
// delete book.name;
// console.log(book);

// keyword

// New Property add.
// console.log(book);
// book.address = "Kathmandu";
// book.others = function () {
//   return "others";
// };
// console.log(book);

// Modify.
// console.log(book);
// book.name = "ABC";
// book.author = "DEF";
// console.log(book);

// Access.

// console.log(book["name"]);
// console.log(book["author"]);
// console.log(book["description"]());
