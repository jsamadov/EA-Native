// Processing text data with regular expressions.
// Task 1: match()
const text = "The rain in Spain stays mainly in the plain. In Spain, in April, the rain is a pain."
const methodMatch = text.match("Spain")
// console.log(methodMatch);

// Task 2: matchAll() "rain"
const methodMatchAll = text.matchAll("rain")
// console.log(...methodMatchAll);
// alternative
const methodArr = [...methodMatchAll].map(element => console.log(element));

// Task 3:Replace "Spain" with "France":
const methodReplace = text.replace("Spain", "France")
console.log(methodReplace);

// Task 4: Replace all "rain" with "sun":
const methodReplaceAll = text.replaceAll("rain", "sun")
console.log(methodReplaceAll);

// Task 5: Search for "plain":
const search = text.search("plain")
console.log(search);