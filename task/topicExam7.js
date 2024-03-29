// Functions and loops practice
// Part 1
function calculateSum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
}
calculateSum([2,3,4]);

// Part 2
var counter = 0;
while (counter < 5) {
  counter++;
  console.log(counter);
}

// Part 3
var countDown = 5;
do {
  console.log(countDown);
  countDown--;
} while (countDown >= 0);

// Part 4
function evaluateGrade(grade) {
  if (grade >= 60) {
    return console.log("Pass");
  } else return console.log("Fail");
}
evaluateGrade(68);
