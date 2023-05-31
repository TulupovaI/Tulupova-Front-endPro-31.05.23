// Завдання №1
let name = prompt('What is your name?', 'John');
alert(`Hello, ${name}! How are you?`); 


// Завдання №2
let a = 20;
let b = 10;

let resSum = a + b;
console.log(resSum);

let resMinus = a - b;
console.log(resMinus);

let resMult = a * b;
console.log(resMult);

let resDivide = a / b;
console.log(resDivide); 

// Завдання №3
let age1 = 65;
let age2 = 67;

if (age1 === age2){
  console.log(true)
} else {
  console.log(false)
}; 


// Завдання №4
let c = 24;
let average = (a + b + c) / 3;
console.log(average); 

// Завдання №5
let num = 12345;

let num1 = Math.floor(num / 10000);
let num2 = Math.floor(num % 10000 / 1000);
let num3 = Math.floor(num % 1000 / 100);
let num4 = Math.floor(num % 100 / 10);
let num5 = Math.floor(num % 10);
console.log(num1, num2, num3, num4, num5);

