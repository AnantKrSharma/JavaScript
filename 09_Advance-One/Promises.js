
// -- Promise 1 --

const myPromise = new Promise(function(resolve, reject){
    const result = "Operation Succesful, first Promise!"
    resolve(result);
})

myPromise.then(function(value){
    console.log(value);
})



// -- Promise 2 --

const promise2 = new Promise(function(resolve, reject){
    //Do an async task
    // DataBase calls, cryptography tasks, network calls, etc
    
    setTimeout(function(){
        console.log("Promise is produced.");
        resolve();
}, 5000)
})

promise2.then(function(){
    console.log("Promise is consumed.")
})



// -- Promise 3 --

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async Task 2");
        resolve()
    } ,3000)
})

.then(function(){
    console.log("Async 2 resolved");
})



// -- Promise 4 --

const Promise4 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "AKS", email:"xxx69420@code.com"})
    }, 1000)
})

Promise4.then(function(UserData){
    console.log(UserData);
})



// -- Promise 5 --

const Promise5 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false     // it will show an erorr message for 'true', and execute for 'false'.
        if(!error){
            resolve({username: "Anant", password: "123"})
        }
        else{
            reject("ERROR: Something went wrong.")
        }
    }, 7000)
})

Promise5.then((User) => {                   
    console.log(User);
    return User.username
})
.then((Name) => {      // chaining
    console.log(Name);
})
.catch((errorMessage) => {
    console.log(errorMessage);
})
.finally( () => {  // it will execute for sure.
    console.log("The promise is either resolved or rejected.");
})



// -- Promise 6 --

Promise6 = new Promise(function(resolve, reject){
    setTimeout(function(){
        const error = false
        if(!error){
            resolve({username: "javascript", password: "123"})
        }
        else{
            reject("ERROR: JS went wrong.")
        }
    }, 9000)
})


// async - await 

async function consumePromiseSix(){
    try {
        const response = await Promise6
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseSix()


// async function getAllUsers(){
//     try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     // console.log(typeof users);
//     const data = await response.json()
//     console.log(data);
//     } catch (error) {
//      console.log("E: ", error);   
//     }
// }

// getAllUsers()


fetch('https://api.github.com/users/anantkrsharma')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error)) 
