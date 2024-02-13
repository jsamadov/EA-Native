// const arr = ["xeyyam", 2, 3, 4, 5, 6, {}, []];

// const evolute = (arr) => {
//   let newArr = [];
//   for (index = 0; index < arr.length; index++) {
//     if (typeof arr[index] === "number") {
//       newArr = [...newArr, arr[index]];
//     }
//   }
//   console.log(newArr);
//   return newArr;
// };
// evolute(arr)

// ? map,filter,forEach,find,findIndex

const mix = [3, 4, "wererw", NaN, false];

// const result = mix.map((item)=> {
//   return item + 1;
// });
// console.log(result);

// function add100(parm) {
//   return parm + 100;
// }
// console.log(mix.map(add100));

//Map=>
// console.log(mix.map((element)=>{
//     if(typeof element ==="number"){
//         return element
//     }
//     return "x"
// }));

// filter =>
// console.log(mix.filter((element)=>{
//     if(typeof element ==="number"){
//         return element
//     }
//     return "x"
// }));
// filtered = mix.filter(element => typeof element === "number")
// console.log(filtered);

// or
// const filtered = mix.filter((element) => {
//   if (typeof element === "number" && !isNaN(element)) {
//     return element;
//   } else {
//     return 0;
//   }
// });
// console.log(filtered);

// console.log(mix.find((e) => e % 2 === 0));

// ! fnHigh 2
// ? some , reduce , sort , forEach
