// Boolean AND && operator
let isUser = true;
let isNepali = true;

if (isUser && isNepali) {
  console.log("Both ho");
} else {
  console.log("Haina");
}

console.log(isUser && isNepali ? "Both ho" : "Haina");

// Shorthand for executing only when both conditions are ture
isUser && isNepali && console.log("Both Ho");
