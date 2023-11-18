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


// ************************************************************


//  Types of memory in JavaScript : 
//Stack Memory (used by Primitive Datatypes) and Heap Memory (used by Non-Primitive Datatypes)

//Stack Memory

let myName = "AnantKrSharma" //Primitive Datatype
let name2 = myName //here, we get a Copy of myName.
name2 = "AditiTyagi"
console.log(myName);
console.log(name2);

//Heap Memory

let userOne={                //Non-Primitive Datatype
    email: "user@gmail.com",
    upi: "user@hdfc"
}
let userTwo = userOne;      //here, we get the actual Reference of userOne.
userTwo.email = "user@yahoo.com"
console.log(userOne.email);
console.log(userTwo.email);
