// ! Task: Customer Data Management for an Online Store

// const customers = [
//   {
//     id: 1,
//     name: "Alice",
//     email: "alice@example.com",
//     location: { city: "New York", country: "USA" },
//   },
//   {
//     id: 2,
//     name: "Bob",
//     email: "bob@example.com",
//     location: { city: "Paris", country: "France" },
//   },
//   {
//     id: 3,
//     name: "Pro",
//     email: "Pro@example.com",
//     location: { city: "London", country: "En" },
//   },
//   {
//     id: 4,
//     name: "Bot",
//     email: "Bot@example.com",
//     location: { city: "Baku", country: "Aze" },
//   },
// ];

// const orders = [
//   { orderId: 101, customerId: 1, product: "Laptop", quantity: 1, price: 1200 },
//   {
//     orderId: 102,
//     customerId: 2,
//     product: "Smartphone",
//     quantity: 2,
//     price: 800,
//   },
//   { orderId: 103, customerId: 3, product: "PC", quantity: 3, price: 600 },
//   { orderId: 104, customerId: 4, product: "Headset", quantity: 4, price: 300 },
// ];

// // Customer Email List:

// customers.map((user) => {
//   console.log(user.email);
// });

// // High-Value Orders:

// orders.filter((order) => {
//   result = order.quantity * order.price;
//   result > 1000 ? console.log(result) : null;
// });

// // Find Customer by Name:

// customers.find((indexByName) => {
//   indexByName.name === "Alice" ? console.log(indexByName) : null;
// });

// // Index of a Specific Order:

// orders.findIndex((index) => {
//   index.orderId === 102 ? console.log(index) : null;
// });

// // Check for Orders in a Specific Country:

// customers.findIndex((indexByCountry) => {
//   indexByCountry.location.country === "USA"
//     ? console.log(indexByCountry.location.country)
//     : null;
// });

// // Print Order Summaries:

// orders.forEach((order) => {
//   const customerName = customers.find(
//     (customer) => customer.id === order.customerId
//   ).name;
//   console.log(
//     `Order ${order.orderId} by ${customerName}: ${order.quantity} x ${order.product} for $${order.price} each.`
//   );
// });

// // Sort Customers by Name:

// const resultName = customers.sort((a, b) => {
//   if (a.name < b.name) {
//     return -1;
//   }
//   if (a.name > b.name) {
//     return 1;
//   }
//   return 0;
// });

// console.log(resultName);

// alternative

// const resultName=customers.sort((a, b) => {
//   return a.name.localeCompare(b.name);
// });

// let word = "Ata";
// function checkStr(word) {
//     word.toLowerCase() === word.toLowerCase().split("").reverse().join("")
//     ? console.log("dogrudur")
//     : console.log("yanlisdir");
// }
// console.log(checkStr(word));

// function isTrue(str) {
//   console.log(str.split("").reverse().join(""));
//   const reversed = str.split('').reverse("").join('')

//   if(str === reversed){
//     console.log(true);
//     }
//     else{
//       console.log(false);
//     }
// }

//* VERILEN SOZUN PALINDROME OLUB OLMAMASINI YOXLAYAN BIR FUNKSIYA YAZIN
// !

//* VERILEN ARRAY ICERİSİNDE TEKRARLANAN STRINGI ARRAY OLARAQ QAYATARAN BİR FUNKSİYA YAZİN.
//  ['ant', 'bison', 'camel', 'duck', 'bison']
//! OUTPUT: ['bison']

// function findDuplicate(arr) {
//   return arr.filter((item, index) => arr.indexOf(item) !== index)
// }
// console.log(findDuplicate(['ant', 'bison', 'camel', 'duck', 'bison']));

//* ARRAY ICERISINDEKI EN BOYUK IKI SAYINI TAP
//* [12, 23, 2, 53, 25, 87]

// arr = [12, 23, 2, 53, 25, 87];

// function findBig(arr) {
//   const sortedArr= arr.sort((a,b)=>b-a)
//   console.log(sortedArr);
//   return sortedArr= slice(0,2)
// }
// console.log(findBig())

//* Verilen Cumleni Elifba Sirasina Gore Siralayin
//* javascript is a programming language
//! OUTPUT: a is javascript language programming

const stepMy = "javascript is a programming language";
const resultMy = stepMy.split(" ").sort().join(" ");
console.log(resultMy);


//* Istifadeci melumatlarini tesdiqleyen bir funksiya yazin.
//* Size Username ve Password gonderilir ve Duzgun Username ve Password gonderilibse hemin melumatlar bir obyekt olaraq terminalda gosterilir.
//* Eger Username ve Password yanlisdirsa terminalda username veya sifre yanlisdir mesaji gosterilir..
// [
//     { username: 'user1', password: 'user12345' },
//     { username: 'user2', password: 'user123' },
//     { username: 'user3', password: 'user123' }
// ]