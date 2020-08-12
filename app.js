let myName = "Jason"
const numStates= 50
let sumOf5and4= 4+5
//does stuff

function hello(){
    console.log('hello world')
}

hello()

function checkAge(name,age){
    if (age<21){
        console.log("sorry " + name + ", you aren't old enough to view this page")
    }
}

checkAge('Charles',21)
checkAge('Abby',27)
checkAge('James',18)
checkAge('John',17)

let favVeg = ['broc', 'cauli', 'corn']

for (x of favVeg){
    console.log(x)
}

let pet = {
    name: "pupster",
    breed: "mini-aussie-shepard"
}

console.log(pet)

let objArray = [
    {
        name: "Jason",
        age: 37
    },
    {
        name: "Dil",
        age: 7
    },
    {
        name: "Jay",
        age: 33
    },
    {
        name: "John",
        age: 17
    },
    {
        name: "nancy",
        age: 57
    },
]

for (x of objArray){
    checkAge(x.name, x.age)
}

function getLength(word){
    return word.length
}

let answer = getLength('hello world')

if (answer%2 ===0){
    console.log('The World is nice and even!')
} else if (answer%2 ===1){
    console.log('the world is an odd place')
} else {
    console.log ('the world is fucked')
}