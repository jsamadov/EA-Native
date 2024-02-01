// let a = 1;
// function showName() {
//   const sum = a * 2;
//   return sum;
// }
// console.log(showName());

// const mult = 2;
// function double(x) {
//   return x * mult;
// }
// console.log(double(2));

// Local scope
// GLobal scope
// Block scope
// Func scope

// Temporal dead zone TDZ
function myFun() {
  var myName = "my name";
  console.log(myName);
}
myFun(); //output => "my name"
// console.log(myName); //output=> ReferenceError: myName is not defined

// console.log(
//   `'foo' name ${
//     "foo" in globalThis ? "is" : "is not"
//   } global.foo is ${typeof foo}`
// );
// if (false) {
//   function foo() {
//     return 1;
//   }
// }

// notHoisted(); // TypeError: notHoisted is not a function

// var notHoisted = function () {
//   console.log("bar");
// };

// function countDown(number) {
//   console.log(number);

//   const newNumber = number - 1;

//   if (newNumber > 0) {
//     countDown(newNumber);
//   }
// }

// countDown(4);

function multiply(a, b = 2) {
  return a * b;
}
console.log(multiply(5, 2));
console.log(multiply(5));

//------------------------------

function multiply(a, b) {
  b = typeof b !== "undefined" ? b : 3;
  return a * b;
}

multiply(5, 2); // 10
multiply(5); // 5
