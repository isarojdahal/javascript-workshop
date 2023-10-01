/*
 * Usage of loops in arrays
 */
// A list of students
const studentList = [
  "Sa Ma Ya",
  "Luna Sapkota",
  "Ashmin Bhujel",
  "Nishan Tolang",
  "Circus",
  "Ankit Bhusal",
  "Binayak Dangi",
];

// Normal for loop
for (let i = 0; i < studentList.length; i++) {
  console.log(studentList[i]);
}

// for in loop
for (let i in studentList) {
  // "i" is the index of the array elements
  console.log(studentList[i]);
}

// for of loop
for (let student of studentList) {
  // "student" is the value of the array elements
  console.log(student);
}

// forEach loop
studentList.forEach(function (student) {
  // "student" is the value of the array elements
  console.log(student);
});

/*
 * Usage of loops in objects
 */
const personInfo = {
  name: "Shyam",
  age: 20,
  address: "Kathmandu",
};

// for in loop
for (let i in personInfo) {
  // "i" is the key of the object
  console.log(i, personInfo[i]);
}

// for of loop
for (let key of Object.keys(personInfo)) {
  // "key" is the key of the object
  console.log(key, personInfo[key]);
} // Object.keys() returns an array of keys of the object passed as argument

// forEach loop
// Since Object.keys() returns an array, we can use forEach loop on it
Object.keys(personInfo).forEach(function (key) {
  // "key" is the key of the object
  console.log(key, personInfo[key]);
});

// Normal for loop
// Since Object.keys() returns an array, we can use normal for loop on it
const keys = Object.keys(personInfo);
for (let i = 0; i < keys.length; i++) {
  console.log(keys[i], personInfo[keys[i]]);
}
