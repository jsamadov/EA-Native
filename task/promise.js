// ! Task:
// ? Part 1: Creating a Promise:
// Promise qaytaracaq bir function yaziriq setTimeout ile və parametr olaraq resolve(fullfiled) olduğu halda mesajımız logda görünəcəkdir.
let createDelay = new Promise((resolve) => {
  setTimeout(() => {
    const message = "Delay completed";
    return resolve(message);
  }, 1000);
});

// ? Using Promise
// Settimeout ilə millisecond dəyərimizi qeyd etdikdən sonra və promise uğurlu olarsa(fullfilled) .then methodu ilə log'da mesajımızı görəcəyik.
createDelay.then((message) => {
  return console.log(message);
});
console.log(createDelay);

// ? Chaining Promises:
//  createDelay dəyişkənimizi yenidən adlandırıb fərqli ms dəyəri veririk.
let createDelaySecond = new Promise((resolve) => {
  setTimeout(() => {
    const message = "Delay completed for second";
    return resolve(message);
  }, 500);
});

console.log(createDelaySecond);

createDelaySecond.then((message) => console.log(message));

let createDelayThird = new Promise((resolve) => {
  setTimeout(() => {
    const message = "Delay completed for third";
    return resolve(message);
  }, 1500);
});
console.log(createDelayThird);
createDelayThird.then((message) => console.log(message));

//? Error handling
//  Promisimizin parametri olan reject'i istifadə etməklə error mesajımızı giririk.
// let createDelay = new Promise((reject) => {
//   const message = "Delay failed";
//   return reject(message);
// });

// console.log(createDelay);
// Dəyişkənimizi log'da çağırıb catch methodundan istifadə edirik.
// Funksiyamız uğurlu olduğu təqdirdə error mesajımızı görəcəyik.
// createDelay.catch(message=>console.log(`Error:${message}`))

//? Using promise all
// Promislərin hər birini array formatında mesajlarını görmək üçün all methodundan istifadə edirik. 
Promise.all([createDelay, createDelaySecond, createDelayThird]).then(
  (message) => console.log(message)
);
