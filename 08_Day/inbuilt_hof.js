let personInfo = [
  {
    name: "Sanjay",
    gender: "male",
  },
  {
    name: "Nishan",
    gender: "male",
  },
  {
    name: "Pujana",
    gender: "female",
  },
];

let malePersonList = personInfo.filter((pi) => pi.gender == "male");

// malePersonList;

// reduce.
let marks = [12, 13, 15];
// let marks = [0,12, 13, 15];
//
// let marks = [12, 13, 15];
// let marks = [25, 15];
// let marks = [40]

let sum = marks.reduce(function (prev, cur) {
  console.log(prev);
  console.log(cur);
  return prev + cur;
}, 0);

// sum;

// let data = [30, 1, 3, 100];
// // UTF-16.

// data.sort(function (a, b) {
//   // return -1
//   // 3 things..
//   // -ve : a becomes before b.
//   // +ve  :  b paxi, a
//   // 0 :

//   return b - a;
// });

// data;

let productList = [
  {
    name: "Statue",
    price: 100,
  },
  {
    name: "Cup",
    price: 150,
  },
  {
    name: "Sticky Notes",
    price: 10,
  },
];
// 10,100,150

productList.sort((a, b) => b.price - a.price);

console.log(productList);

// let coordinates = [
//   {
//     x: 10,
//     y: 1,
//   },
//   {
//     x: 4,
//     y: 1,
//   },
// ];
// console.log(coordinates.sort());

let data = [1, 10, "A", "b"];
console.log(data.sort());

data.sort(function defaultSorter(a, b) {
  return a.toString().localeCompare(b.toString());
});
