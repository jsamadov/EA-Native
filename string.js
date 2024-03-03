// String  methodları: at() , charAt(), charCodeAt(), concat(), endsWith(), includes(),
// indexOf(), lastIndexOf(), padEnd(), padStart(), repeat(), slice(), .split(), startsWith() ,
// substring(), .toLocaleLowerCase(), .toLocaleUpperCase(), .toLowerCase(), .toString(),
// .toUpperCase(), .trim(), .trimEnd(), .trimStart()

// at()
// const fullName = 'own'
// const arr = [1,2,3, "dfsdf"]
// console.log(arr.at(2));
// console.log(fullName[fullName.length - 1]);
// console.log(fullName.at(-1));

// charAt (string)
// const sentence = "Dog"
// const arr = [1,2,3,4,5]
// console.log(typeof arr.at(6));
// console.log(typeof arr.charAt(6));
// console.log(typeof sentence.at(4));
// console.log(typeof sentence.charAt(4)); // menfi desteklemir ve elementin ozu qeder destekleyir.

// concat
// const str1 = "hello";
// const srt2 = "world";

// console.log(str1.concat(" ",srt2));
// console.log(`${str1} ${srt2}`);

// const concatFactory = ({name,elements})=>{
//     // const updated=elements.map(element => " " + element )
//     // console.log(name.concat(...updated));
//     const updated = elements.map(element =>{
//         return " " + element
//     })
//     return{
//         name,
//         elements,
//         coactedName: name.concat(' ', ...updated)
//     }
// }
// const res = concatFactory({
//     name:"Own",
//     elements:["My","Mine"]
// })
// console.log(res);

// endsWith
// const str1 ="cats are the best!"
// console.log(str1.endsWith("best!"));
// console.log(str1.startsWith("cats "));

// const obj = {
//     name: "my",
//     age: 12
// }

// console.log(obj?.name);

// includes
// const str1 ="cats are the best!"
// console.log(str1.includes("cats"));

// indexOf
// const str1 ="cats are the best!"
// console.log(str1.indexOf("cats"));

// const indexOfInCaseSens = (letter, searchChar) =>
//   letter.toUpperCase().indexOf(searchChar.toUpperCase());

// const str1 = "Cats are the best!";
// console.log(str1.indexOf("c"));
// console.log(indexOfInCaseSens(str1, "c"));

// test(arr,"x","lower")

// lastIndexOF
// const paragraph =  "I think than your g!"
// console.log(paragraph.lastIndexOf("g!"));

// padEnd & padStart
// repeat

// slice
const str = "The quick brown fox jumps over the lazy dog.";

// console.log(str.slice(31));
// // Expected output: "the lazy dog."

// console.log(str.slice(4, 19));
// // Expected output: "quick brown fox"

// console.log(str.slice(-4));
// // Expected output: "dog."

// console.log(str.slice(-9, -5));
// // Expected output: "lazy"
