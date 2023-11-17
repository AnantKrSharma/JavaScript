//--------- Primitive Datatypes ---------
// 7 Types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 200
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null 
let userEmail;
console.log(typeof outsideTemp);

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId); //Symbols are unique.

const bigNumber = 3455436266565n //BigInt.
console.log(typeof bigNumber);



//--------- Non-Primitive or Reference Datatypes ---------
// 3 Types:  Array, Objects, Functions

const heroes = ["shaktiman", "naagraj", "doga"]; //Array

let myObj = {    //Object
    name: "anant",
    age: "20"
}

const myFunction = function(){  //Function
    console.log("Hello world");
}

console.log(typeof heroes);
console.log(typeof myObj);
console.log(typeof myFunction);
