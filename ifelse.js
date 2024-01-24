let email; //false , null , undefined , NaN
if (!email) {
  email = "mac@icoud.com";
}
console.log(email);

email = !email ? "mac@icloud.com" : email;

let age = 12;

age = age < 20 ? "it is a child" : "is is adult";

// if (age < 20) {
//   age = "it is child";
// } else {
//   age = "it is adult";
// }
console.log(age);
