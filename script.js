const input = document.getElementById("inputbox");
const length = 8;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "	abcdefghijklmnopqrstuvwxyz";
const num = "0123456789";
const symbol = "!@#$%^&*()_+}{|:?><|";
const allChar = upperCase + lowerCase + num + symbol;

// function for genrating random password

function createPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += num[Math.floor(Math.random() * num.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];
  while (length > password.length) {
    password += allChar[Math.floor(Math.random() * allChar.length)];
  }
  input.value = password;
}

// function for copy password
function copyPassword() {
  input.select();
  document.execCommand("copy");
}
