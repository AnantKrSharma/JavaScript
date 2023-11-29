const user = {
    username: "Anant",
    price: 999,
    WelcomeMessage: function(){
        console.log(`${this.username}, welcome to website.`);
        console.log(this);
    }
}
/*In JavaScript, the 'this' keyword is used to refer to the object that the function
  is a method of. When 'WelcomeMessage' is called, this refers to the 'user' object, 
  allowing you to access the 'username' property of that object.*/
user.WelcomeMessage()
user.username = "Aditi"
user.price = 420
user.WelcomeMessage()

console.log(this); // empty object in the Node environment.



// function coffee(){
//     let name = "AKS"
//     console.log(this); // it will refer to the object that this function is a method of.
//     console.log(this.name);
// }

// coffee()

// const chai = function(){
//     let name = "ADITI"
//     console.log(this.name);
// }

// chai()


// ------- Arrow Function -------
// () => {}

const chai = () => {
    let username = "AKS"
    console.log(this);
}
chai()
// Arrow functions have different rules for handling the this keyword compared to regular functions.

/*Arrow functions do not have their own this context. Instead, they inherit the this value from the 
enclosing context. In the case of your arrow function chai, it is being executed in the global context 
or some other context where this is an empty object. */


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// Arrow function with Implicit Return.
// const addTwo = (num1, num2) => num1 + num2

// when using paranthesis, we don't have to write 'return'.
const addTwo = (num1, num2) => (num1 + num2)
console.log(addTwo(3, 4));

const returnObject = (parameter) => ({ name: "Anant"})
console.log(returnObject(1));



