// Primitive

// 7 types(all are call by value) : STRING, NUMBER, BOOLEAN, NULL(empty), UNDEFINED, SYMBOL, BIGINT(scientific values) 

// Refrence Type (Non primitive):-  Arrays, Objects, Functions

// In js we do not define the datatype like it will be int or string

const score = 100;
const scorevalue = 100.3;
const isloggedin = true;
const outsideTemp =  null;
let username; //undefined

//symbols

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id == anotherid); //symbols use to define uniqueness

const bigNumber = 2394050699940355n; //BigInt

//arrays

const heroes = ["shaktiman", "hero", "doga"];

let obj = { //anything in curly braces are known as object
    name: "Neelesh",
    age: 18,
}
//function
const myfunction = function(){
    console.log("hello world");
}

console.log(typeof bigNumber);
console.log(myfunction);