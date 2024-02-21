interface customer {
  id: number;
  name: string;
  email: string;
  location: {
    city: string;
    country: string;
  };
}

interface order {
  orderId: number;
  customerId: number;
  product: string;
  quantity: number;
  price: number;
}

const customer: customer[] = [
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
];

const order: order[] = [
  { orderId: 101, customerId: 1, product: "Laptop", quantity: 1, price: 1200 },
  {
    orderId: 102,
    customerId: 2,
    product: "Smartphone",
    quantity: 2,
    price: 800,
  },
];

customer.map((user) => {
  console.log(user.email);
});

order.filter((order) => {
  const result = order.quantity * order.price;
  result > 1000 ? console.log(result) : null;
});

customer.find((indexByName) => {
  indexByName.name === "Alice" ? console.log(indexByName) : null;
});

order.findIndex((index) => {
  index.orderId === 102 ? console.log(index) : null;
});

customer.findIndex((indexByCountry) => {
  indexByCountry.location.country === "USA"
    ? console.log(indexByCountry.location.country)
    : null;
});

order.forEach((order) => {
  const customerName = customer.find(
    (customer) => customer.id === order.customerId
  )?.name;
  if (customerName) {
    console.log(
      `Order ${order.orderId} by ${customerName}: ${order.quantity} x ${order.product} for $${order.price} each.`
    );
  }
});

// const resultName = customers.sort((a, b) => {
//     if (a.name < b.name) {
//       return -1;
//     }
//     if (a.name > b.name) {
//       return 1;
//     }
//     return 0;
//   });

//   console.log(resultName);
