const myAPI = {
  joke: "https://api.chucknorris.io/jokes/random",
  grocery: "https://simple-grocery-store-api.glitch.me",
  grocery: "https://simple-grocery-store-api.glitch.me",
  bored: "https://www.boredapi.com/api/",
  alpha: "https://jsonplaceholder.typicode.com/posts",
  poke: "https://pokeapi.co/api/v2/ability/7/",
  user: "https://randomuser.me/api/",
  flag: "https://restcountries.com/v3.1/all?fields=name,flags",
};

const norrisAPI = async (endpoint) => {
  const response = await fetch(endpoint);
  const random = await response.json();
  console.log("Joke:", random.value);
};

// norrisAPI(myAPI.joke);

const groceryAPI = async (endpoint) => {
  const response = await fetch(endpoint);
  const result = await response.json();
  console.log(result);
};
// groceryAPI(myAPI.grocery);

const boredAPI = (endpoint) => {
  fetch(endpoint)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log("error message:", error));
};

// boredAPI(myAPI.bored);

const alphaAPI = async (endpoint) => {
  const response = await fetch(endpoint);
  const result = await response.json();
  console.log(result);
};
// alphaAPI(myAPI.alpha);

const pokeAPI = (endpoint) => {
  fetch(endpoint)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log("error:", error));
};

// pokeAPI(myAPI.poke)

const randomAPI = async (key) => {
  const response = await fetch(key, {
    method: "GET",
  });
  const result = await response.json();
  console.log(result);
};
// randomAPI(myAPI.user)

// Method:GET

const flagAPI = async (endpoint) => {
  const response = await fetch(endpoint, {
    method: "GET",
  });
  const result = await response.json();
  console.log(result);
};
// flagAPI(myAPI.flag +"/name")

// ? Method:POST

const postRequest = async (endpoint) => {
  const requests = await fetch(endpoint, {
    method: "POST",
    body: JSON.stringify({
      id: 101,
      country: "Italy",
      division: "Liga:A",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json",
    },
  });
  const result = await requests.json();
  console.log(result);
};
postRequest(myAPI.alpha);
