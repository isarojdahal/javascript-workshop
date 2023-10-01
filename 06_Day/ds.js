/*
 * Destructuring array and usage of spread operator on array
 */
// List of Students
const studentList = ["Ram", "Shyam", "Hari", "Sita"];

// Destructuring array
const [student1, student2, student3, student4] = studentList;
console.log(student1, student2, student3, student4);

// Usage of spread operator
const [s1, s2, ...otherStudents] = studentList;
console.log("Student1", s1);
console.log("Student2", s2);
console.log("Remaining Students are", otherStudents);
// Here all the remaining students are returned to the new array "otherStudents"

// Copying one array to another using spread operator
const nums = [0, 1, 1, 2, 3, 5];
const fibbonaci = [...nums]; // Copying elements of nums to fibbonaci
console.log(fibbonaci);

// For nested array
const anotherList = [[1, 2], [3, 4], 5];
const [[one, two], [three]] = anotherList;
console.log(one, two, three);

/*
 * Destructuring obejct and usage of spread operator on objects
 */
// A persons info
const personInfo = {
  name: "John Smith",
  age: 42,
  address: "Upstate, New York",
};

// Destructuring an object
const { name, age, ...otherInfo } = personInfo;
console.log(`Name: ${name} and Age: ${age}`);
console.log(otherInfo);

// Copying an object
const copiedInfo = { ...personInfo };
console.log(copiedInfo);

// For nested object
const personInfo2 = {
  name: "Hari",
  age: 36,
  address: {
    district: "Kathmandu",
    country: "Nepal",
  },
};

// We can give alias to the value returned using "originalKey : aliasKey"
const { name: person2Name, age: person2Age } = personInfo2;
console.log(person2Name, person2Age);

// For nested object address inside personInfo2
const {
  address: { district, country },
} = personInfo2;
console.log(district, country);
