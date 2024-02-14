// ! Task: Customer Data Management for an Online Store

const customers = [
  {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
    location: { city: "New York", country: "USA" },
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@example.com",
    location: { city: "Paris", country: "France" },
  },
  {
    id: 3,
    name: "Pro",
    email: "Pro@example.com",
    location: { city: "London", country: "En" },
  },
  {
    id: 4,
    name: "Bot",
    email: "Bot@example.com",
    location: { city: "Baku", country: "Aze" },
  },
];

const orders = [
  { orderId: 101, customerId: 1, product: "Laptop", quantity: 1, price: 1200 },
  {
    orderId: 102,
    customerId: 2,
    product: "Smartphone",
    quantity: 2,
    price: 800,
  },
  { orderId: 103, customerId: 3, product: "PC", quantity: 3, price: 600 },
  { orderId: 104, customerId: 4, product: "Headset", quantity: 4, price: 300 },
];

// Customer Email List:

customers.map((user) => {
  console.log(user.email);
});

// High-Value Orders:

orders.filter((order) => {
  result = order.quantity * order.price;
  result > 1000 ? console.log(result) : null;
});

// Find Customer by Name:

customers.find((indexByName) => {
  indexByName.name === "Alice" ? console.log(indexByName) : null;
});

// Index of a Specific Order:

orders.findIndex((index) => {
  index.orderId === 102 ? console.log(index) : null;
});

// Check for Orders in a Specific Country:

customers.findIndex((indexByCountry) => {
  indexByCountry.location.country === "USA"
    ? console.log(indexByCountry.location.country)
    : null;
});

// Print Order Summaries:

orders.forEach((order) => {
  const customerName = customers.find(
    (customer) => customer.id === order.customerId
  ).name;
  console.log(
    `Order ${order.orderId} by ${customerName}: ${order.quantity} x ${order.product} for $${order.price} each.`
  );
});

// Sort Customers by Name:

const resultName = customers.sort((a, b) => {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
});

console.log(resultName);

// alternative

// const resultName=customers.sort((a, b) => {
//   return a.name.localeCompare(b.name);
// });