// Lesson-4 Joys of JS

// task-exam => 15/01/2024

// const personalProfile = {
//   firstName: "Paribus",
//   lastName: "Le Files",
//   age: 28,
//   favoriteLanguage: "kotlin",
//   contactInfo: {
//     email: "qwerty@zxc",
//     phone: "0123456",
//   },
// };

// personalProfile["occupation"] = "esport";
// personalProfile["contactInfo"]["address"] = "Balakhani";

// console.log(personalProfile);
// console.log(personalProfile.lastName);
// console.log(personalProfile.contactInfo.address);
// console.log(personalProfile.contactInfo["phone"]);
// console.log(personalProfile["occupation"]);

//Lesson-5 Jumping for JS

// const user = {
//   name: "asd",
//   surname: "dsa",
//   tax: {
//     numberTax: "123",
//   },
// };

// dest
// const { name, surname } = user;
// const { numberTax } = user.tax;

// (... obyektin daxilinde olan prop'lari copy edir)
// const { name, ...rest } = user;

// console.log(rest);


//Lesson 6 part#3

// const myName = "Ibra";
// const age = 944;
// const isActive = true

// const x = null
// const arr = []
// const obj = {}

// console.log(typeof myName)
// console.log(typeof age)
// console.log(typeof isActive)
// console.log(typeof arr)
// console.log(typeof obj)
// console.log(typeof x)

// const newArr = ["bir","iki","uc", "dord"]
// var i = newArr.length-1;
// console.log(i)
// console.log(newArr[newArr.length-1])

//destructuring 
const arr = [
    "bir",
    "iki",
    12
]

const [first]= arr
console.log(first)