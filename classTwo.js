// String
// Number
// Boolean
// object
// undefined
// null
// symbol

// let firstName = 'Asad';
// let lastName = 'Ali';
// let age = 24;
// let isStudent = false;
// let isJobHolder = true;

// const asad = ['Asad', 'Ali', 32, false, true];
// console.log(asad);
// console.log(asad[0]);

// Operators
// not sign = !
// assign =
// equal ==
// not eual !=
// strict equal / identical ===
// not strict equal / not identical !==
// logical operators
// greater than >
// less than <
// greather than and equal to >=
// less than and equal to <=
// &&
// ||

// if else statement
// if (firstName == 'Ali') {
// 	console.log('Your first name is Ali');
// } else if (firstName == 'Intzar') {
// 	console.log("You're Intzar, Welcome to JS");
// } else {
// 	console.log('Who are you?');
// }

// Ternary operator
// firstName == 'Ali' ? console.log('your first name is Ali') : console.log(`You're not Ali`);

// age >= 20 ? console.log(`You should be holding a job by now`) : console.log('Learn very well');
// console.log(`${firstName} ${lastName} is ${age} years old.`);

// console.log(
// 	`${firstName} ${lastName} is ${age} years old, ${
// 		isStudent == true ? 'And he is a student' : ''
// 	} ${isJobHolder == true ? 'And he is a Web Developer' : ''}`
// );
// console.log(
// 	`${asad[0]} ${asad[1]} is ${asad[2]} years old, ${asad[3] == true ? 'And he is a student' : ''} ${
// 		asad[4] == true ? 'And he is a Web Developer' : ''
// 	}`
// );

// Facebook application
// database
let dbUsername = 'asadminhas';
let dbPassword = 'asad123';

let userUsername = prompt('What is your username?');
if (userUsername == dbUsername) {
	console.log('Your username matched, please type your password in prompt');
	let userPassword = prompt('Type your password?');
	if (userPassword == dbPassword) {
		alert(`Welcome ${userUsername} 🔥 🔥`);
	} else {
		console.error('Your password is incorrent');
		alert('Your password is incorrent');
		userPassword = prompt('Type your password?');
		if (userPassword == dbPassword) {
			alert(`Welcome ${userUsername} 🔥 🔥`);
		}
	}
} else {
	alert('Please create a new account first!');
}
