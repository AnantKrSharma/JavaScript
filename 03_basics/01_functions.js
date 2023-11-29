//  console.log("A");
//  console.log("N");
//  console.log("A");
//  console.log("N");
//  console.log("T");

function sayMyName(){
    console.log("A");
    console.log("N");
    console.log("A");
    console.log("N");
    console.log("T");
}
sayMyName();

//in JavaScript, it is not necessary to give the type of function parameters.
function sayMyName2(a){
    console.log(a);
}
sayMyName2("A");
sayMyName2("N");
sayMyName2("A");
sayMyName2("N");
sayMyName2("T");

function addTwoNumbers(num1, num2){
    console.log(num1+num2);
}
addTwoNumbers(3, 4); //here, we haven't set any kind of datatype conditions on function arguments.
addTwoNumbers(3, "4");

function addTwoNumbers(num1, num2){
    // let result = num1 + num2;
    console.log("AKS");
    // return result
    return num1 + num2
}

const result = addTwoNumbers(3,6)
console.log(`Result: ${result}`);


function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username.");
        return
    }
    return `${username} just logged in.`
}
console.log(loginUserMessage());
console.log(loginUserMessage("AKS"));


/* ... is a Rest Operator, and it is used when more than one arguments are being
passed in the calling of a function. It combines them all in an array. */
function calculateCartPrice(...num){
    return num
}
console.log(calculateCartPrice(200, 400, 500, 2000));

// passing an object in a function:
const user = {
    username: "Anant",
    price: 199
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and Price is ${anyObject.price}.`);
}

handleObject(user);

handleObject({
    username: "Aditi",
    price: 420
})

//passing an Array in a function:
const myNewArray = [200, 300, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100, 200, 150, 250]));