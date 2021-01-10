"use strict";
var myName = "Jason";
var numStates = 50;
var sumOf5and4 = 4 + 5;
function hello() {
    console.log("hello world");
}
hello();
function checkAge(name, age) {
    if (age < 21) {
        console.log("sorry " + name + ", you aren't old enough to view this page");
    }
}
checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);
var favVeg = ["broc", "cauli", "corn"];
for (var _i = 0, favVeg_1 = favVeg; _i < favVeg_1.length; _i++) {
    var x = favVeg_1[_i];
    console.log(x);
}
var pet = {
    name: "pupster",
    breed: "mini-aussie-shepard",
};
console.log(pet);
var objArray = [
    {
        name: "Jason",
        age: 37,
    },
    {
        name: "Dil",
        age: 7,
    },
    {
        name: "Jay",
        age: 33,
    },
    {
        name: "John",
        age: 17,
    },
    {
        name: "nancy",
        age: 57,
    },
];
for (var _a = 0, objArray_1 = objArray; _a < objArray_1.length; _a++) {
    var x = objArray_1[_a];
    checkAge(x.name, x.age);
}
function getLength(word) {
    return word.length;
}
var answer = getLength("hello world");
if (answer % 2 === 0) {
    console.log("The World is nice and even!");
}
else if (answer % 2 === 1) {
    console.log("the world is an odd place");
}
else {
    console.log("the world is fucked");
}
