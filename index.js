const personalProfile = {
  firstName: "Paribus",
  lastName: "Le Files",
  age: 28,
  favoriteLanguage: "kotlin",
  contactInfo: {
    email: "qwerty@zxc",
    phone: "0123456",
  },
};

personalProfile["occupation"] = "esport";
personalProfile["contactInfo"]["address"] = "Balakhani";

console.log(personalProfile);
console.log(personalProfile.lastName);
console.log(personalProfile.contactInfo.address);
console.log(personalProfile.contactInfo["phone"]);
console.log(personalProfile["occupation"]);
