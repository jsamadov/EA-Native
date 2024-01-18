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

//task level 2 : Advance
//part 1
const employeeDetails = {
  fullName: "John Wick",
  position: "Actor",
  yearsOfExperience: "4",
  skills: ["pen", "gun", "knife"],
  contact: {
    email: "johnwick@gun.az",
    phone: "012345",
  },
  department: "Constantine",
};

delete employeeDetails.contact.email;
console.log(employeeDetails);

// Part 2
const { fullName: employeeName, position, contact, ...rest } = employeeDetails;
console.log(employeeName, position, contact, rest);
