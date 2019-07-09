
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

const cat = {
    age: 2,
    name: 'Bailey',
    meow: function () {
        console.log('Meow!');
    },
    greet: function (name) {
        console.log(`Hello ${name}`);
    }
}

cat.age++;

const printer = {};

printer.on = true;
printer.mode = 'black and white';
printer.print = function () {
    console.log('The printer is printing');
}

delete printer.mode;

function changeToEight (n) {
    n = 8;
}
let n = 7;
changeToEight(n);

let originalObject = {
    favoriteColor:'red'
}

function setToBlue (object) {
    object.favoriteColor = 'blue';
}

setToBlue(originalObject);

const dictionary = {
    car: 'automobile',
    cat: 'fluffy animal',
    number: 8,
    print: function () {
        console.log(`I'm in the dictonary`);
    }
};

function alertThenReturn () {
    console.log('Message 1');
    return function () {
        console.log('Message 2');
    }
}

function callAndAdd (n, getSecondValue) {
    return n + getSecondValue();
}

function secondValue () {
    return 5;
}

callAndAdd(2, secondValue);

// array.forEach(callbackfunction(currentvalue, index, array)) ==>> it doesn't return anything
// array.map ==>> it return an array
function each(array) {
    positiveNumber = array.filter( el => el > 0);
    console.log(positiveNumber);
}

numbers = [-2, 5, -10, 0, -1, 8, 1, -9, 6];
each(numbers);

const positive = numbers.map(el => {

});

// === Function Scoped ====

const num1 = 5;

function functionOne() {
  const num2 = 10;

  function functionTwo(num3) {
    const num4 = 35;

    return num1 + num2 + num3 + num4;
  }

  return functionTwo(0);
}

console.log(functionOne());

const symbol = '¥';

function displayPrice(price) {
  const symbol = '$';
  console.log(symbol + price);
}

displayPrice('80');
console.log(symbol);



// ***** Quiz Practice - Lecture 6, 7 & 8 *****

function greetings() {
    name2 = 'hayder';
}

let a = new Array(1, 2, 3);
let b = new Array(10);
let c = ['Banana', 'Orange', 'Apple', 'Mango'];

console.log(c.join(' => '));
console.log(c.pop());
console.log(c);
console.log(c.push('Jack Fruit'));

var fruits = ["Banana", "Orange", "Apple", "Mango"];

let e = fruits.slice(2);
console.log(fruits);
fruits.sort();
console.log(fruits);
fruits.reverse();
console.log(fruits);
console.log(e);

let digits = [40, 100, 1, 5, 25, 10];

let fd = digits.find(el => el > 10);

console.log(fd);

let start = Date.now();

function addSomeNumber1(num1, num2){
    return num1 + num2;
}
function addSomeNumber2(num1) {
    return num1 + arguments[1];
}
var result1 = addSomeNumber1(100,200);
var result2 = addSomeNumber2(100,200);

let stop = Date.now();

console.log(stop + ' ' + start);

let d = new Date();
console.log(d);

// ***** Function Overloading *****
function func() {
    switch(arguments.length) {
        case 0:
            console.log('no arguments');
            break;
        case 1:
            console.log('one arguments');
            break;
        case 2:
            console.log('two arguments');
            break;
        default:
            console.log('Default');
            break;
    }
}

func();

let mobile = {};
Object.defineProperty(mobile, 'name', {
    writable: true,
    value: 'Nokia'
});
mobile.name = 'Samsung';
console.log(mobile.name);

let persona = {};
Object.defineProperty(persona, 'taste', {
  configurable: false,
  value: 'Nicholas'
});

let z = (JSON.stringify(fruits));
  