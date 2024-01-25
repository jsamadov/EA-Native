// Task 1 / Control Flow and Iteration Practice
// Part 1
const dayOfWeek = "Monday";
switch (dayOfWeek) {
  case "Monday":
    console.log("Monday Study javaScript");
    break;
  case "Sunday":
    console.log("Sunday Study javaScript");
  case "Friday":
    console.log("Friday Study javaScript");
    break;
  default:
    console.log("JavaScript not for you");
    break;
}
// Part 2
const numbers = [2, 4, 6, 8, 10];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum = sum + numbers[i];
}
console.log(sum);

// Part 3
const fruits = ["apple", "orange", "banana", "strawberry"];
for (let index = 0; index < fruits.length; index++) {
  console.log(fruits[index].length, fruits[index]);
}

// Part 4
const student = {
  name: "John Wick",
  grade: 68,
};
const { grade, name } = student;

if (grade > 60) {
  console.log("Pass");
} else console.log("Fail");
// alternative
const value = grade > 60 ? console.log("Pass") : console.log("Fail");


// // Task 2 Control Flow and Data Structures Practice
// // Part 1

// const color = "Red";
// switch (color) {
//   case "Red":
//     console.log("Red-Stop");
//     break;
//   case "Green":
//     console.log("Green-Go");
//     break;
//   case "Yellow":
//     console.log("Yellow-Caution");
//     break;
//   default:
//     console.log("unknown colors");
// }

// // Part 2 --> Nester `for` Loop
// const matrix = [
//   [1, 2],
//   [3, 4],
// ];

// for (let index = 0; index <= matrix.length - 1; index++) {
//   for (let v = 0; v <= matrix.length - 1; v++) {
//     console.log(matrix[index][v]);
//   }
// }

// //Part 3 --> Iterating Over an Object
// const product = {
//   name: "John",
//   price: 18,
//   inStock: true,
// };

// for (const gg in product) {
//   console.log(product[gg]);
// }

// const { name, price, inStock } = product;

// if (price < 50 && inStock === true) {
//   console.log("Available");
// } else {
//   console.log("Unavailable");
// }
// // // Alternative
// const gg =
//   price < 50 && inStock === true
//     ? console.log("Available")
//     : console.log("Unavailable");

