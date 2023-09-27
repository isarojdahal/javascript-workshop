// let numbers = [1, 2, 3];

// const doSquare = (v) => Math.pow(v, 2);
// const doCube = (v) => Math.pow(v, 3);
// const doSquareRoot = (v) => Math.sqrt(v);

// const calculate = function (logic) {
//   let results = [];
//   for (let v of numbers) {
//     results.push(logic(v));
//   }
//   return results;
// };

// console.log(calculate(doSquare));

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// ..

// Example 2 :
function Employee(name, age, department) {
  this.name = name;
  this.age = age;
  this.department = department;
}

let employees = [
  new Employee("John", 22, "Core"),
  new Employee("Martin", 21, "DevOps"),
  new Employee("Jason", 22, "Core"),
  new Employee("Jim", 27, "Admin"),
  new Employee("John", 32, "Admin"),
];

const filterByAge = (e) => (e.age == 27 ? true : false);
const filterByDepartment = (e) => (e.department == "Admin" ? true : false);
// DRY ->

function filter(emps, fn) {
  let result = [];
  for (let i = 0; i < emps.length; i++) {
    if (fn(emps[i])) {
      result.push(emps[i]);
    }
  }
  return result;
}

console.log(filter(employees, filterByAge));
console.log(filter(employees, filterByDepartment));

// function filterByAge(emps, age) {
//   let result = [];
//   for (let i = 0; i < emps.length; i++) {
//     if (emps[i].age == age) {
//       result.push(emps[i]);
//     }
//   }
//   return result;
// }

// function filterByDept(emps, dept) {
//   let result = [];
//   for (let i = 0; i < emps.length; i++) {
//     if (emps[i].department == dept) {
//       result.push(emps[i]);
//     }
//   }
//   return result;
// }

// console.log(filterByDept(employees, "Admin"));
