// Advanced js functions practice
// Part 1
const greet = ({ name, age, count }) =>
  console.log(`My name is ${name}. Im ${age} and live in ${count}`);
greet({ name: "Sam", age: 22, count: "Balakhani" });

// Part 2
function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(3));

// Part 3
const sumAll = (...rest) => {
  var sum = 0;
  for (let index = 0; index < rest.length; index++) {
    sum += rest[index];
  }
  console.log(rest, sum);
};
sumAll(1, 2, 3);

// part 4
const first = () => {
  console.log("Hello");
  second();
};
const second = () => {
  console.log("my");
};
const third = () => {
  first();
  console.log("bro");
};

third();
