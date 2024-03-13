// https://api.chucknorris.io/jokes/random
// https://simple-grocery-store-api.glitch.me
// https://www.boredapi.com/api/
// https://api.thecatapi.com/
// http://www.omdbapi.com/?apikey=[yourkey]&
// https://restcountries.com/v3.1/all?fields=name,flags
// https://pokeapi.co/api/v2/ability/7/
// https://api.nasa.gov/planetary/
// https://jsonplaceholder.typicode.com/posts/1

const norrisAPI = async () => {
  const response = await fetch("https://api.chucknorris.io/jokes/random");
  const random = await response.json();
  console.log("Joke:", random.value);
};

norrisAPI()

const myAPI = async () => {
  const response = await fetch("https://simple-grocery-store-api.glitch.me");
  const result = await response.json();
  console.log(result);
};
// myAPI();

const callAPI = () => {
  fetch("https://www.boredapi.com/api/")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log("error message:", error));
};

// callAPI()

const alphaAPI = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const result = await response.json();
  console.log(result);
};
// alphaAPI();

const newAPI = () => {
  fetch("https://pokeapi.co/api/v2/ability/7/")
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log("error:", error));
};

// newAPI()
