// // Hoisting
// sayGreetings();

// // function expression
// const sayHello = function () {
// 	console.log('Hello');
// };
// sayHello();

// // function declaration
// function sayGreetings() {
// 	console.log('Hi Ali Murtaza');
// }

// calling a function
// executing a function
// invoking a function

// returning functions
// const sayMyName = function () {
// 	return 'Ali Murtaza';
// };
// const myName = sayMyName();
// console.log(myName);

// Functions with parameters
// const calcAge = function (birthYear) {
// 	return 2021 - birthYear;
// };
// const asadAge = calcAge(1996);
// console.log(asadAge);

// const hassanAge = calcAge(2000);
// console.log(hassanAge);

// this without arrow functions
// const checkThis = function () {
// 	return this;
// };
// console.log(checkThis());

// Arrow functions
// const caclAge = birthYear => 2021 - birthYear;
// console.log(caclAge(1993));

// Functions into functions
// const currentYear = () => {
// 	return 2021;
// };
// const cYear = currentYear();

// const calcMyAge = (year, birthYear) => {
// 	return year - birthYear;
// };
// const alisAge = calcMyAge(cYear, 1993);
// console.log(alisAge);

// Check birth year
// const checkBirthYear = (age, currentYear) => {
// 	return currentYear - age;
// };
// const myBirthYear = checkBirthYear(28, 2021);
// console.log(myBirthYear);
