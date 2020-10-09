function log(value) {
  console.log(value);
}

// Add two Numbers
function add(num, num2) {
  return num + num2;
}

// Subtract two numbers
function sub(num, num2) {
  return num - num2;
}

// Multiple two numbers
function mult(num, num2) {
  return num * num2;
}

// Divide two numbers
function div(num, num2) {
  return num / num2;
}

// Mod two numbers
function mod(num, num2) {
  return num % num2;
}

function isEven(value) {
  return mod(value, 2) == 0;
}

function unEven(value) {
  return !isEven(value);
}

// ==  equal
// ||  or
// !   not
// !=  not equal
