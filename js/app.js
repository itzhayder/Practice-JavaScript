
// // array.forEach(callback(currentValue [, index [, array]])[, thisArg])
// // array.filter(element, index, array)
// // array.find()
// // array.every()

// const inventory = [
//     {name: "Banana", quantity: 4},
//     {name: "Apple", quantity: 2},
//     {name: "Jack Fruit", quantity: 1}
// ];

// const person = [
//     {name: "Hayder", role: "Student"},
//     {name: "Nafisa", role: "Student"},
//     {name: "Atiqur", role:"VC"},
//     {name: "Adnan", role: "Teacher"},
//     {name: "SMU1", role: "Teacher"}
// ];

// function getUser(userType) {
//     const users = person.filter( el => el.role === userType);
//     return users;
// }

// const students = getUser("Teacher");
// console.log(students);

// //  Promise Practice

// const count = 0;
// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (count) {
//             resolve({
//                 name: "Hayder",
//                 id: "1521231642",
//                 department: "ECE",
//                 major: "CSE"
//             });
//         }
//         else {
//             reject("I broke the promise.");
//         }
//     }, 2000);
// });

// promise1
// .then(res => {
//     console.log(res);
// })
// .catch(err => {
//     console.log(err);
// })

// console.log(promise1);
// async function prom() {
//     try {
//         const result = await promise1;
//         console.log(result);
//     }
//     catch (err) {
//         console.log(err);
//     }
// }

// prom();


// const doctor = name => {
//     console.log(name);
// }

// doctor("Dr. Tousif Rahman");

// const hero = ['Lina', 'Ursa', 'Witch Doctor', 'Lina', 'Phantom Assassin'];
// const take = 'Ursa';

// const selected = hero.filter(el => el === 'Lina');

// console.log(selected);

// // ==== Local and Session Storage ====

// localStorage.setItem('name', 'Hayder');
// localStorage.clear();


// ==== Object ====

// const cat = {
//     age: 2,
//     name: 'Bailey',
//     meow: function () {
//         console.log('Meow!');
//     },
//     greet: function (name) {
//         console.log(`Hello ${name}`);
//     }
// }

// cat.age++;

// const printer = {};

// printer.on = true;
// printer.mode = 'black and white';
// printer.print = function () {
//     console.log('The printer is printing');
// }

// delete printer.mode;

// function changeToEight (n) {
//     n = 8;
// }
// let n = 7;
// changeToEight(n);

// let originalObject = {
//     favoriteColor:'red'
// }

// function setToBlue (object) {
//     object.favoriteColor = 'blue';
// }

// setToBlue(originalObject);

// const dictionary = {
//     car: 'automobile',
//     cat: 'fluffy animal',
//     number: 8,
//     print: function () {
//         console.log(`I'm in the dictonary`);
//     }
// };

// function alertThenReturn () {
//     console.log('Message 1');
//     return function () {
//         console.log('Message 2');
//     }
// }

// function callAndAdd (n, getSecondValue) {
//     return n + getSecondValue();
// }

// function secondValue () {
//     return 5;
// }

// callAndAdd(2, secondValue);

// // array.forEach(callbackfunction(currentvalue, index, array)) ==>> it doesn't return anything
// // array.map ==>> it return an array
// function each(array) {
//     positiveNumber = array.filter( el => el > 0);
//     console.log(positiveNumber);
// }

// numbers = [-2, 5, -10, 0, -1, 8, 1, -9, 6];
// each(numbers);

// const positive = numbers.map(el => {

// });

// // === Function Scoped ====

// const num1 = 5;

// function functionOne() {
//   const num2 = 10;

//   function functionTwo(num3) {
//     const num4 = 35;

//     return num1 + num2 + num3 + num4;
//   }

//   return functionTwo(0);
// }

// console.log(functionOne());

// const symbol = '¥';

// function displayPrice(price) {
//   const symbol = '$';
//   console.log(symbol + price);
// }

// displayPrice('80');
// console.log(symbol);



// ***** Quiz Practice - Lecture 6, 7 & 8 *****

// function greetings() {
//     name2 = 'hayder';
// }

// let a = new Array(1, 2, 3);
// let b = new Array(10);
// let c = ['Banana', 'Orange', 'Apple', 'Mango'];

// console.log(c.join(' => '));
// console.log(c.pop());
// console.log(c);
// console.log(c.push('Jack Fruit'));

// var fruits = ["Banana", "Orange", "Apple", "Mango"];

// let e = fruits.slice(2);
// console.log(fruits);
// fruits.sort();
// console.log(fruits);
// fruits.reverse();
// console.log(fruits);
// console.log(e);

// let digits = [40, 100, 1, 5, 25, 10];

// let fd = digits.find(el => el > 10);

// console.log(fd);

// let start = Date.now();

// function addSomeNumber1(num1, num2){
//     return num1 + num2;
// }
// function addSomeNumber2(num1) {
//     return num1 + arguments[1];
// }
// var result1 = addSomeNumber1(100,200);
// var result2 = addSomeNumber2(100,200);

// let stop = Date.now();

// console.log(stop + ' ' + start);

// let d = new Date();
// console.log(d);

// // ***** Function Overloading *****
// function func() {
//     switch(arguments.length) {
//         case 0:
//             console.log('no arguments');
//             break;
//         case 1:
//             console.log('one arguments');
//             break;
//         case 2:
//             console.log('two arguments');
//             break;
//         default:
//             console.log('Default');
//             break;
//     }
// }

// func();

// let mobile = {};
// Object.defineProperty(mobile, 'name', {
//     writable: true,
//     value: 'Nokia'
// });
// mobile.name = 'Samsung';
// console.log(mobile.name);

// let persona = {};
// Object.defineProperty(persona, 'taste', {
//   configurable: false,
//   value: 'Nicholas'
// });

// let z = (JSON.stringify(fruits));


// ***** JavaScript DOM *****

// let firstBox = document.getElementById('box1');
// let content = firstBox.innerHTML;
// let style = firstBox.id;

// let secondBox = document.querySelector('#box2');
// secondBox.innerHTML = content;
// secondBox.id = style;

// let list = document.querySelectorAll('.collection-item , h2');

// let node = document.querySelector('#box1').children;
// let parentNode = document.querySelector('#box1');
// parentNode.insertBefore(node[2], node[1]);


// ******* Closure ********

// function remember() {
//     count = 0;
//     return function() {
//         count++;
//         return count;
//     }
// }

// const countIt = remember();
// console.log(countIt());
// console.log(countIt());


// ***** IIFE ******

// (function sayHi() {
//     console.log('Hello');
// })();

// (function (name) {
//     console.log(`My name is ${name}`);
// })('Hayder');

// const myFunction = (
//     function () {
//         let msg = 'Local variable msg';
//         return function() {
//             console.log(msg);
//         }
//     }
// )();

// const button = document.querySelector('#button');

// button.addEventListener('click', (function () {
//     let count = 0;
//     return function() {
//         if(++count === 2) {
//             alert(`It's ${count}`);
//             count = 0;
//         }
//         return count;
//     }
// })());



// ****** Classes & Objects *******

// function SoftwareDeveloper(name) {
//     this.favoriteLanguage = 'JavaScript';
//     this.name = name;
//     this.activity = function () {
//         return `Hi, this is ${this.name} here. My favorite language is ${this.favoriteLanguage}`;
//     }
// }

// let devHayder = new SoftwareDeveloper('Hayder');
// let devNafisa = new SoftwareDeveloper('Nafisa');

// console.log(devHayder.activity());

// let person = {
//     fullName: function(city, country) {
//         switch(arguments.length) {
//             case 0: 
//                 return `${this.firstName} ${this.lastName}`;
//             case 2: {
//                 return `${this.firstName} ${this.lastName}, ${city}, ${country}`;
//             }
//         }
//     }
// }

// let person1 = {
//     firstName: 'Hayder',
//     lastName: 'Ali'
// }
// let person2 = {
//     firstName: 'Nafisa',
//     lastName: 'Piiyal'
// }

// let x = person.fullName.call(person1, 'Dhaka', 'Bangladesh');

// console.log(x);

// **** BIND() ******

// - bind() is a method that is called on a function
// - Bind returns a new function that, when called, has "this" set to the provided object

// call() invokes the function and has arguments passed in individually, separated by commas.
// apply() is similar to call(); it invokes the function just the same, but arguments are passed in as an array.
// bind() returns a new function with this bound to a specific object, allowing us to call it as a regular function.

// let dog = {
//     age: 5,
//     grow: function() {
//         console.log('Here is the DOG');
//         return ++this.age;
//     }
// };

// function invokeTwice(cb) {
//     console.log(cb());
// }

// let bindGrow = dog.grow.bind(dog);
// invokeTwice(bindGrow);



// let cat = {
//     age: 20
// }

// invokeTwice(dog.grow.bind(cat));




// **** PROTOTYPE ******


// function Ball() {
//     this.ball = 'Football Ball';
// }

// let tennis = new Ball();
// console.log(tennis.bat);

// Ball.prototype.bat = 'cricket bat';

// let football = new Ball();
// let cricket = new Ball();

// cricket.ball = 'Cricket Ball';
// cricket.bat = 'Puma';


// console.log(football.ball);
// console.log(cricket.ball);

// console.log(cricket.bat);



// ***** Module Patern *****


function instantiateDeveloper() {
    return {
        name: 'Veronika',
        getName: function() {
            return this.name;
        }
    }
}

let developer = instantiateDeveloper();

console.log(developer);