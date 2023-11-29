const userEmail = "anant@yahoo.com"

if(userEmail){                          // truthy (the values which are considered as true) 
    console.log("Got user Email");
}
else{
    console.log("Don't have user Email");
}


const user = ""

if(user){                               // falsy (the values which are considered as false)
    console.log("User is present");
}
else{
    console.log("No user");
}

/* ---  Falsy Values ---
 
    false ; 0 ; -0 ; BigInt 0n ; "" (empty string) ; null ; undefined ; NaN


    --- Truthy Values ---

    [] (empty array) ; "0" (zero inside string) ; 'false' (false inside string) ;
    " " (space inside string) ; {} (empty object) ; function() (empty function) 
*/

const arr = []
if(arr.length === 0){
    console.log("Array is empty");
}

const obj = {}
if(Object.keys(obj).length === 0){
    console.log("Object is empty");
}


/* -- Nullish Coalescing Operator (??) -- 
   it only returns the right-hand side operand if the left-hand side operand 
   is null or undefined, not any other falsy value. */

let boy = null;
let greeting = boy ?? "Hello, stranger!";
console.log(greeting);

boy = null ?? 10 ?? 20
console.log(boy);


/* -- Terniary Operator --
   condition ? true : false */

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("More than 80") : console.log("Less than 80");