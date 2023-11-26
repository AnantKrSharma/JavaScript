// --------- Singleton ---------

// Object.create => creating an object using constructor (here, singleton is made).


// --------- Object Literals ---------

const mySym = Symbol("key1") //this Symbol is created to add it in the object as a key.

const JsUser = {
    name: "Anant",
    age: 20,
    location: "Delhi",
    email: "dixienormus@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    "Full Name": "Anant Kumar Sharma",
    [mySym]: "myKey1" //Syntax to create a key from a Symbol. 
} 

console.log(JsUser.location);
console.log(JsUser["location"]); // keys are treated as String in Objects.
console.log(JsUser["Full Name"]);
console.log(JsUser[mySym]);      //Syntax to access a key from a Symbol.

JsUser.email = "anant@chatgpt.com"
// Object.freeze(JsUser);           //Now we can't change the value of this property.
JsUser.email = "anant@xhamster.com"
console.log(JsUser);

// Adding a new property using dot notation
JsUser.newProperty = "I am a new property";

// Adding a new property using square bracket notation (useful when the property name contains special characters or spaces)
JsUser['anotherNewProperty'] = "I am another new property";

// Adding a new method (function) to the object
JsUser.sayHello = function() {
    console.log(`Hello JS User ${this.name}`);
};

// Accessing the new properties and calling the new method
console.log(JsUser.newProperty); // Output: I am a new property
console.log(JsUser.anotherNewProperty); // Output: I am another new property
JsUser.sayHello(); // Output: Hello JS User Anant

console.log(JsUser);