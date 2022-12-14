// Addition
// function addition() {
//     console.log(2 + 2);
// }
// Subtraction
// function subtraction() {
//     console.log(5 - 2);
// }
//Multiplication
// function multiplication() {
//     console.log(5 * 2);
// }
//Division
// function division() {
//     console.log(5 / 2);
// }
//Exponent
// function exponent() {
//     console.log(2 ** 2);
// }
//Modulus
// function modulus() {
//     console.log(5 % 2);
// }
// Arithmetic Operators
// Call all functions
// addition();
// subtraction();
// multiplication();
// division();
// exponent();
// modulus();

// Assignment Operators
//let numb1 = 3;
// numb = numb1 + 2;
//result /= 2;
//console.log(numb1);

// Comparison Operator
// let numb1 = 6;
// let numb2 = "6";
// console.log(numb1 < numb2);
// console.log(numb1 <= numb2);
// console.log(numb1 >= numb2);
// console.log(numb1 != numb2);
// console.log(numb1 == numb2);
// console.log(numb1 === numb2);

//Logical Operators
// let salary = parseFloat(prompt("Enter your salary: "));
// let age = parseInt(prompt("Enter your age: "));
// let qualified = (salary >= 5000) &&(age > 17);
// let qualified = (salary >= 5000) ||(age > 17);
// let qualified = !(salary >= 5000);
// document.write(qualified);

// Relational Operators: in
// let numbers = [9, 7, 4 ,3 ,15];
// let person = {
//     name: 'User Name',
//     surname: 'User Surname'
// }
// let search = 'age';
// console.log(search in person);
// console.log(7 in numbers);

// Increment and Decrement
// let numb1 = 8;
// console.log(numb1++);
// console.log(numb1--);
// number1++;
// console.log(numb1);

// Ternary Operator
// ? :
// let age = 18;
// console.log(
//     age >17 ? "You are qualified" :
//     "You are not qualified");

// let userName = prompt("Please enter your name: ");
// let userSalary = prompt("Please enter your salary: ");
// console.log(
//     (userSalary >5000) ? "You are qualified" :
//     "You are not qualified");

// Factory function
// it's a function that returns a object, and there is no need to use a new keyword when attempting to create an instance from a function.
// display name and surname

// function userDetails(firstName, surName) {
//     return {
//         firstName: firstName,
//         surName: surName,
//         display: function() {
//             console.log(`Name: ${firstName}\Surname: ${surName}`);
//         }
//     }
// }

// Create an instance
// let person1 = userDetails('Lionel', 'Messi');
// person1.firstName = 'Neymar';
// person1.display();
// console.log("==================");
// const person2 = userDetails('Meezaan', 'Brogan');
// person2.display();

// Contructor Function
// is a functions that allows us to create and initialize an instance of a class.

// Example 1
// function personDetails(name, surname) {
//     this.name = name;
//     this.surname = surname;
// }
// let person1 = new personDetails('Kai', 'Havertz');
//
// console.log(`Name: ${person1.name}\nSurname: $`)

// Example 2
// function Details(firstName, surname, email) {
//      this.firstName = firstName;
//      this.surname = surname;
//      this.email = email;
//      this.coding = ()=>{
//         console.log("Busy coding");
//      }
// }
// let person1 = new Details('Kai', 'Havertz', 'kaihavertz@gmail.com');
// Details.prototype.display = ()=>{
//     console.log("Hello There");
// }
// console.table(person1);
// person1.display();
// person1.coding();

// Two contructor function
// function Person(firstName, surname) {
//     this.name = firstName;
//     this.surname = surname;
// }

// function Dog(name) {
//     this.name = name;
// }

// Create objects
// let person1 = new Person("David", "Henk");
// let dog1 = new Dog("Leo");

// Check if a person is a person
// function testing(obj) {
//     if(obj.constructor === Person){
//         console.log("You are a person");
//         console.log(`Name: ${obj.name}\n Surname: ${obj.surname}`);
//     }else {
//         console.log("You are not a person");
//         console.log(`Name: ${obj.name}`);
//     }
//     if(obj.constructor !== Person)
//         return "You are not a person";
//     return "You are a person";
// }
// Calling function
// testing(dog1);
// testing(person1);
// console.log(testing(dog1));

// Make use of instanceof
// console.log(person1 instanceof Person ? "You are a person" : "You are not a person");

// Challenge

// function Person (firstName, quirk) {
//     this.name = firstName;
//     this.quirk = quirk;
// }
// function Quirkless (name) {
//     this.name = name;
// }
// let superhero = new Person("Allmight", "One For All");
// let human = new Quirkless("Brogan");
// function testing(obj){
//     if(obj.constructor === Person){
//         console.log(`Name: ${obj.name}\n Quirk: ${obj.quirk}`)
//         console.log("You have a quirk");
//     }else {
//         console.log(`Name: ${obj.name}`)
//         console.log ("You do not have a quirk")
//     }
// }
// calling it out
// testing(human);
// testing(superhero)

/*
Function are objects
====================
Please keep in mind that everything in JavaScript is an object. Expect a primitive data type.
on the console interface
========================
- call a function
- call a function without a parameter
- To see a function as an object please make use 
of console.dir(yourFunctionName);
Check the below example
*/
// function addition(numb1, numb2) {
//     console.log(numb1 + numb2);
// }
// console.dir(addition);
/*
addition.length
addition.name
======
addition.division = function(numb1, numb2) 
{return numb1 / numb2};
addition.developerName = 'Joel Mukanya';
*/

