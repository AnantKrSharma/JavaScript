//                    ---- if statement ----


// if(condition){
// }
const isUserLoggedIn = true

// difference b/w == and ===
if(2 == "2"){
    console.log("Executed ==");
}

if(2 === "2"){                    // ===
    console.log("Executed ===");
}

if(2 != "2"){
    console.log("Executed !=");
}

if(2 !== "2"){                    // !==
    console.log("Executed !==");
}


// const score = 200 
// if(score > 100){
//     let power = "fly"
//     console.log(`User Power: ${power}`);
// }
// console.log(`User Power: ${power}`);
/* if we declared 'power using var, then it won't have a problem of scope. 
   And thus, this console.log would've worked fine. */


// Shorthand Notation -- Implicit Scope
// const balance = 1000
// if(balance > 500) console.log("Enough Balance");

// if(balance < 500){
//     console.log("Less than 500.");
// }
// else if(balance < 750){
//     console.log("Less than 750.");
// }
// else if(balance < 900){
//     console.log("Less than 900.");
// }
// else{
//     console.log("Less than 1200.");
// }


const userLoggedIn = true 
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

// Logical Operators (&&, ||)

if(userLoggedIn && debitCard){
    console.log("Allow to buy courses.");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in.");
}

