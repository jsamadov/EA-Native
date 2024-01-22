// Task js data types,operators and logical expressions practice

// Part 1
const numbers = [10, 20, 30, 40, 50];
const [firstNumbers, secondNumbers] = numbers;
console.log(numbers);
console.log(firstNumbers, secondNumbers);
// Part 2
let myString = "Javascript";
let myNumber = 6;
let myBoolean = true;
console.log(typeof myString, typeof myNumber, typeof myBoolean);
// Part 3
const sum = firstNumbers + secondNumbers;
console.log(sum);
const diff = firstNumbers - secondNumbers;
console.log(diff);
const prod = firstNumbers * secondNumbers;
console.log(prod);
const quot = firstNumbers / secondNumbers;
console.log(quot);
const remain = firstNumbers % secondNumbers;
console.log(remain);
console.log(firstNumbers == secondNumbers); //false
console.log(firstNumbers === secondNumbers); //false
console.log(firstNumbers != secondNumbers); //true
console.log(firstNumbers !== secondNumbers); //true
console.log(firstNumbers < secondNumbers); //true
console.log(firstNumbers > secondNumbers); //false
console.log(firstNumbers <= secondNumbers); //true
console.log(firstNumbers >= secondNumbers); //false

// Part 4
console.log(firstNumbers % 2);
console.log(firstNumbers % 3)
console.log(firstNumbers % 0)


// // Task 2
// // Part 1
// const scores = [10, 11, 12, 13, 14, 15, 16, 17];
// const [firstScore, secondScore] = scores;
// console.log(firstScore, secondScore);
// const student = {
//   name: "Pirlo",
//   age: 55,
//   isEnrolled: false,
// };

// const { name, age } = student;
// console.log(name, age);

// // Part 2
// console.log(typeof scores);
// let arr = scores.length;
// console.log(arr);

// // Part 3
// let sum = firstScore + secondScore;
// let diff = firstScore - secondScore;
// let b = firstScore > secondScore;
// let k = firstScore < secondScore;
// console.log(sum, diff, b, k);

// console.log(firstScore < secondScore && student.age > firstScore);
// console.log(student.age > secondScore || secondScore > firstScore);
// console.log(!student.isEnrolled);
