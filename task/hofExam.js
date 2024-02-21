// Automated Stock Alert System
// ! Part 1
const stocks = [{ symbol: "Arial", price: 12, sector: "dev" }];
// ! Part 2
// setInterval(() => {
//   stocks.filter((set) => {
//     set.price += 1;
//     console.log("update price: ", set.price);
//     console.log("percentage ", set.price * 0.1);
//   });
// }, 1000);

// ! Part 3

const newStock = stocks.filter((item)=>{
  console.log(item.sector);  
})
// ! Part 4


// const mix = [1,2,3,4]
// const result= mix.map((item)=>{
//   return item +1
// })
// console.log(result);
// !task 1
// const numbers = [2, 4, 65, 1, 56, 7, 123, 68, 234, 52, 12, 3, 4, 6];

// console.log(
//   numbers.map((number) => {
//     return number * 2;
//   })
// );

// ! Task 2
// const users = [
//   {
//     name: "Alice",
//     age: 30,
//     interests: ["coding", "hiking"],
//     email: "alice@example.com",
//   },
//   {
//     name: "Bob",
//     age: 25,
//     interests: ["gaming", "reading"],
//     email: "bob@example.com",
//   },
//   {
//     name: "Charlie",
//     age: 35,
//     interests: ["coding", "cooking", "reading"],
//     email: "charlie@example.com",
//   },
//   {
//     name: "Diana",
//     age: 28,
//     interests: ["yoga", "reading", "gardening"],
//     email: "diana@example.com",
//   },
//   {
//     name: "Ethan",
//     age: 40,
//     interests: ["hiking", "photography"],
//     email: "ethan@example.com",
//   },
//   {
//     name: "Fiona",
//     age: 22,
//     interests: ["music", "gaming"],
//     email: "fiona@example.com",
//   },
//   {
//     name: "George",
//     age: 32,
//     interests: ["coding", "gaming", "reading"],
//     email: "george@example.com",
//   },
//   {
//     name: "Hannah",
//     age: 27,
//     interests: ["writing", "yoga"],
//     email: "hannah@example.com",
//   },
//   {
//     name: "Ian",
//     age: 30,
//     interests: ["photography", "cooking"],
//     email: "ian@example.com",
//   },
//   {
//     name: "Julia",
//     age: 24,
//     interests: ["coding", "yoga"],
//     email: "julia@example.com",
//   },
// ];

// const my = users.map((e) => {
//   console.log(e.name);
// });

// !task 3
const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Book", price: 20 },
  { id: 3, name: "Smartphone", price: 500 },
  { id: 4, name: "Tablet", price: 300 },
  { id: 5, name: "Headphones", price: 150 },
  { id: 6, name: "Keyboard", price: 50 },
  { id: 7, name: "Mouse", price: 25 },
  { id: 8, name: "Monitor", price: 200 },
  { id: 9, name: "Camera", price: 400 },
  { id: 10, name: "Charger", price: 30 },
];

const fIndex = products.map(products => ({
...products,
tax:(products.price *10)/100
}));
console.log(fIndex);

// // ! task 4
// const users = [
//   {
//     name: "Alice",
//     age: 30,
//     interests: ["coding", "hiking"],
//     email: "alice@example.com",
//   },
//   {
//     name: "Bob",
//     age: 25,
//     interests: ["gaming", "reading"],
//     email: "bob@example.com",
//   },
//   {
//     name: "Charlie",
//     age: 35,
//     interests: ["coding", "cooking", "reading"],
//     email: "charlie@example.com",
//   },
//   {
//     name: "Diana",
//     age: 28,
//     interests: ["yoga", "reading", "gardening"],
//     email: "diana@example.com",
//   },
//   {
//     name: "Ethan",
//     age: 40,
//     interests: ["hiking", "photography"],
//     email: "ethan@example.com",
//   },
//   {
//     name: "Fiona",
//     age: 22,
//     interests: ["music", "gaming"],
//     email: "fiona@example.com",
//   },
//   {
//     name: "George",
//     age: 32,
//     interests: ["coding", "gaming", "reading"],
//     email: "george@example.com",
//   },
//   {
//     name: "Hannah",
//     age: 27,
//     interests: ["writing", "yoga"],
//     email: "hannah@example.com",
//   },
//   {
//     name: "Ian",
//     age: 30,
//     interests: ["photography", "cooking"],
//     email: "ian@example.com",
//   },
//   {
//     name: "Julia",
//     age: 24,
//     interests: ["coding", "yoga"],
//     email: "julia@example.com",
//   },
// ];

// const filtered = users.filter((user) => user.age>=30)
// console.log(filtered)

// ! task 5
// const products = [
//   { id: 1, name: "Laptop", price: 1000 },
//   { id: 2, name: "Book", price: 20 },
//   { id: 3, name: "Smartphone", price: 500 },
//   { id: 4, name: "Tablet", price: 300 },
//   { id: 5, name: "Headphones", price: 150 },
//   { id: 6, name: "Keyboard", price: 50 },
//   { id: 7, name: "Mouse", price: 25 },
//   { id: 8, name: "Monitor", price: 200 },
//   { id: 9, name: "Camera", price: 400 },
//   { id: 10, name: "Charger", price: 30 },
// ];

// const filtered = products.filter((products) => {
//   if (products.price >= 50 && products.price < 300) {
//     return products.price;
//   }
// });
// console.log(filtered);

// !task 6

// const users = [
//     { name: "Alice", age: 30, interests: ["coding", "hiking"], email: "alice@example.com" },
//     { name: "Bob", age: 25, interests: ["gaming", "reading"], email: "bob@example.com" },
//     { name: "Charlie", age: 35, interests: ["coding", "cooking", "reading"], email: "charlie@example.com" },
//     { name: "Diana", age: 28, interests: ["yoga", "reading", "gardening"], email: "diana@example.com" },
//     { name: "Ethan", age: 40, interests: ["hiking", "photography"], email: "ethan@example.com" },
//     { name: "Fiona", age: 22, interests: ["music", "gaming"], email: "fiona@example.com" },
//     { name: "George", age: 32, interests: ["coding", "gaming", "reading"], email: "george@example.com" },
//     { name: "Hannah", age: 27, interests: ["writing", "yoga"], email: "hannah@example.com" },
//     { name: "Ian", age: 30, interests: ["photography", "cooking"], email: "ian@example.com" },
//     { name: "Julia", age: 24, interests: ["coding", "yoga"], email: "julia@example.com" },
// ];

// let total = 0, count = 1;
// while (count <= 10) {
//   total += count;
//   count += 1;
// }
// console.log(total);
