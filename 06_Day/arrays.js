// A list of students
const studentList = ["Tom", "Tyson", "Spidy", "Jack", "Smith"];

// slice(start, end) method
const firstTwoStudent = studentList.slice(0, 2);
const lastTwoStudent = studentList.slice(studentList.length - 2);
// NOTE: If we give only one argument, The slice() method will implicitly set end value to end of the array
console.log(firstTwoStudent);
console.log(lastTwoStudent);

// push(newElement) method
// Adding a student named "John" at the end
studentList.push("John");
console.log(studentList);

// pop() method
// Removing "John" from the list
const removedStudent = studentList.pop();
console.log(studentList);
console.log("Removed student is", removedStudent);

// unshift(newElement) method
// Adding "Aaron" at the start
studentList.unshift("Aaron");
console.log(studentList);

// shift() method
// Removing "Aaron" from the list
const anotherRemovedStudent = studentList.shift();
console.log(studentList);
console.log("Another removed student is", anotherRemovedStudent);

// fill(value, start, end) method
// Filling last two elements of list by "rocket"
console.log(studentList.fill("rocket", studentList.length - 2));

console.log(studentList);
