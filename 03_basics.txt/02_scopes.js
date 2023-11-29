/* We don't declare variables using var because it creates a problem with the Block Scope,
as you can see: */

var a = 100    // Global Scope (outside if) -- any value which lies in global scope is accessible in block scope.
let x = 200

if(true){     // Block Scope (inside if) -- but, any value which lies in block scope should not be accessible outside it.
    let x = 1000
    a = 500
    let b = 300
    const c = 400
    var z = 600
    console.log(`x(let) inside if ${x}`);
}
// console.log(b);
// console.log(c);
console.log(a);
console.log(z);
console.log(`x(let) outside if ${x}`);


// -- Nested Scope --

function one(){
    const username = "Anant"
    function two(){
        const website = "YouTube"
        console.log(username);
    }
    two()
    // console.log(website);
}
one()

if(true) {
    const username = "Anant"
    if(username == "Anant"){
        const website = " YouTube"
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


// ******** interesting ********

console.log(addOne(5)); /* it won't show an error, because addOne function is just declared
                           and it isn't being held inside a variable. */ 
function addOne(num){
    return num + 1
}

/* it will show an error, because addTwo function is not just declared
   but it is also being held inside a variable. */
//console.log(addTwo(5)); 
const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5));
