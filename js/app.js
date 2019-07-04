
// array.forEach(callback(currentValue [, index [, array]])[, thisArg])
// array.filter(element, index, array)
// array.find()
// array.every()

const inventory = [
    {name: "Banana", quantity: 4},
    {name: "Apple", quantity: 2},
    {name: "Jack Fruit", quantity: 1}
];

const person = [
    {name: "Hayder", role: "Student"},
    {name: "Nafisa", role: "Student"},
    {name: "Atiqur", role:"VC"},
    {name: "Adnan", role: "Teacher"},
    {name: "SMU1", role: "Teacher"}
];

function getUser(userType) {
    const users = person.filter( el => el.role === userType);
    return users;
}

const students = getUser("Teacher");
console.log(students);

//  Promise Practice

const count = 0;
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (count) {
            resolve({
                name: "Hayder",
                id: "1521231642",
                department: "ECE",
                major: "CSE"
            });
        }
        else {
            reject("I broke the promise.");
        }
    }, 2000);
});

promise1
.then(res => {
    console.log(res);
})
.catch(err => {
    console.log(err);
})

console.log(promise1);
async function prom() {
    try {
        const result = await promise1;
        console.log(result);
    }
    catch (err) {
        console.log(err);
    }
}

prom();


const doctor = name => {
    console.log(name);
}

doctor("Dr. Tousif Rahman");

const hero = ['Lina', 'Ursa', 'Witch Doctor', 'Lina', 'Phantom Assassin'];
const take = 'Ursa';

const selected = hero.filter(el => el === 'Lina');

console.log(selected);

// ==== Local and Session Storage ====

localStorage.setItem('name', 'Hayder');
localStorage.clear();
