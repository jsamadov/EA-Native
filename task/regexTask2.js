// Validation function
function phoneValid() {
  const number = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g;
  const myNumber = "+9942222222";
  if (number.test(myNumber)) {
    return "valid";
  } else return "invalid";
}
console.log(phoneValid());

// email
function emailValid() {
  const email = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/g;
  const myEmail = "my.email@icloud.com";
  return email.test(myEmail) ? "valid" : "invalid";
}
console.log(emailValid());

// password
function passwordValid() {
  const password =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
  const myPassword = "Taskregex@24";
  if (password.test(myPassword)) {
    return "valid";
  } else return "invalid";
}
console.log(passwordValid());

// age
function ageValid() {
  const age = /^\S[0-9]{0,3}$/;
  const myAge = 28;
  if (age.test(myAge)) {
    return "valid";
  } else return "invalid";
}
console.log(ageValid());

// username
function nameValid() {
  const userName = /^[a-z0-9_-]{3,15}$/;
  const myUserNamer = "parib1s";
  return userName.test(myUserNamer) ? "valid" : "invalid";
}
console.log(nameValid());
