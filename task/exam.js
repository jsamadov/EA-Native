// task => exam level 1: Simple
// part 1
// const studentProfile = {
//   name: "John",
//   age: "15",
//   course: "life hack",
//   hobbies: ["origami", "gaming"],
// };

// delete studentProfile.course;
// console.log(studentProfile);

// // part 2
// const { name: studentName, age, ...rest } = studentProfile;

// console.log(studentName, age, rest);

// // part 3
// const grades = [85, 95, 78, 95];
// console.log(grades[0], grades[1]);

// // part 4
// const additionalInfo = {
//   address: "Balakhani",
//   phoneNumber: "012345",
// };

// const completeProfile = {
//   ...studentProfile,
//   ...additionalInfo,
// };
// console.log(completeProfile);

//------------------------------------>

// //task level 2 : Advance
// //part 1
// const employeeDetails = {
//   fullName: "John Wick",
//   position: "Actor",
//   yearsOfExperience: "4",
//   skills: ["pen", "gun", "knife"],
//   contact: {
//     email: "johnwick@gun.az",
//     phone: "012345",
//   },
//   department: "Constantine",
// };

// delete employeeDetails.contact.email;
// console.log(employeeDetails);

// // Part 2
// const { fullName: employeeName, position, contact, ...rest } = employeeDetails;
// console.log(employeeName, position, contact, rest);

// // Part 3
// const projectScores = {
//   projectId: [1, 2, 3, 4, 5, 6],
//   score: [10, 11, 12, 13],
// };

// console.log(projectScores.projectId[0], projectScores.score[0]);

// //part 4
// const personalInfo = {
//   homeAddess: "Balakhani",
//   emergencyContact: "Whatsapp",
//   maritaStatus: "Single",
// };

// const completeEmployeeProfile = {
//   ...employeeDetails,
//   ...personalInfo,
// };
// console.log(completeEmployeeProfile);
