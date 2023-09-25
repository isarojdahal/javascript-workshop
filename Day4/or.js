// Boolean OR || operator
let isUser = true;
let isNepali = true;

if (isUser || isNepali) {
  console.log("Euta ta pakkai ho");
} else {
  console.log("Duitai haina");
}

console.log(isUser || isNepali ? "Euta ta pakkai ho" : "Duitai haina");

// For giving default value to a variable
let age;
let data = age || "Age is not provided";

console.log(data);

// Can use Nullish ?? operator also
let age2 = null;
let data2 = age2 ?? "Age is not provided again";

console.log(data2);
