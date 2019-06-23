
// array.forEach()
// array.filter()
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
