// Part 1 (create array name of randoms )

const randoms = ["sports", 77, true, "app"];

// Part 2destructuring first 3 element

const [sport, seven, done] = randoms;
console.log(typeof sport, typeof seven, typeof done);

// Part 3 use if else statement (find only boolean element)

if (typeof sport == "boolean") {
  console.log("it is string:", sport);
}
if (typeof seven == "boolean") {
  console.log("it is number:", seven);
}
if (typeof done == "boolean") {
  console.log("it is boolean:", done);
}
