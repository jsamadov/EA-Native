// ! TASK 1
//* Kitabları verilen yazıçı adına uyğun console.log`da göstərən funksiya yazın. Funksiyanın ilk parameteri kitablar olan arrayı, ikinci parametri isə
//* yazıçının adını qəbul etməlidir.

// const books = [
//   { name: "Harry Potter", author: "J.K. Rowling" },
//   { name: "1984", author: "George Orwell" },
//   { name: "Sefiller", author: "Victor Hugo" },
//   { name: "New Harry Potter", author: "J.K. Rowling" },
// ];

// const findBook = (books, bookName) => {
//     return books.filter(e => e.author === bookName);
//   };
//   console.log(findBook(books, "Victor Hugo"));

// ! TASK 2
//* Toplama, çıxma, vurma ve bölmə əməliyyatlari edən bir funksiya yazın. Funksiyanın ilk parametri operatorun növünü ikinci ve üçüncü parametri
//* isə əməliyyat aparılacaq rəqəmləri qəbul etməlidi. Operator yanlis verildikde console.log`da xeta gosterilmelidir.
// function switchCalc(key, numberFirst, numberSecond) {
//   switch (key) {
//     case "+":
//       console.log(numberFirst + numberSecond);
//       break;
//     case "-":
//       console.log(numberFirst - numberSecond);
//       break;
//     case "/":
//       console.log(numberFirst / numberSecond);
//       break;
//     case "*":
//       console.log(numberFirst * numberSecond);
//       break;
//     default:
//       break;
//   }
// }

// console.log(switchCalc("/",6,3));

// ! TASK 3
//* Verilen obyektde yasi 30`dan yuxari ve cinsiyyeti kisi olan sexsi tapan bir funksiya yazin.
const persons = [
  { name: "Eli", age: 25, gender: "male" },
  { name: "Aygun", age: 30, gender: "female" },
  { name: "Nurlan", age: 35, gender: "male" },
  { name: "Aysel", age: 40, gender: "female" },
];

// function findPerson(persons) {
//     return persons.find(ageGender=>ageGender.gender === "male" && ageGender.age >30)
//     }
// console.log(findPerson(persons));

// ? or
// const oldpersons = (user) => {
//   return user.find((user) => {
//     if (user.age >= 30) {
//       if (user.gender === "male") {
//         return user;
//       }
//     }
//   });
// };
// console.log(oldpersons(persons));

// ! Task 4
//* Verilen users arrayinde user ve onun rolunu yoxlayaraq log`da mesaj çıxarın.
// const users = [
//   { username: "admin", password: "admin123", role: "admin" },
//   { username: "user", password: "1234", role: "user" },
//   { username: "owner", password: "12345", role: "owner" },
// ];

// function checkValidate(username,pasword) {
//     const user = users.find((user) => user.username === username && user.password === pasword)
//         if(user){
//             showUserRole(user.role)
//         }else{
//             console.log("wrong username and password");
//         }
//     }

//     function showUserRole(role) {
//         switch (role) {
//             case "admin":
//                 console.log(("You are admin"));
//                 break;
//                 case "user":
//                     console.log("You are user");
//                 break;
//                 case "owner":
//                     console.log("You are owner");
//                 break
//                 default:
//                 console.log("Invalid role");
//                 }
//     }

// checkValidate("user", "1234")

// ! Task 5
//* Verilen array`de 'good' stringi 1`den azdirsa 'fail', 3`den azdirsa 'Publish', 3`den çoxdursa 'I smell a series' yazısı çıxarılmalıdır.
const arr = ["good", "bad", "bad", "bad", "bad"];

// function indexOfArray(good) {
//   const newArr = arr.filter((e) => e === good);
//   if (newArr.length < 1) {
//     console.log("fail");
//   } else if (newArr.length < 3) {
//     console.log("Publish");
//   } else if (newArr.length > 3) {
//     console.log("I smell a series");
//   }
// }
// indexOfArray("good");

// ? or
// function indexOfArray() {
//   const newArr = arr.filter((word) => word === "good").length;
//   //const goodLength = newArr.length
//   return newArr < 1 ? "Fail" : newArr < 3 ? "Publish" : "I smell a series";
// }
// console.log(indexOfArray(arr));
