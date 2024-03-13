// code without promises: 

const fs = require('fs')

// function anantReadFile(cb){
//     fs.readFile("hi.txt", "utf-8", function(err, data){
//         cb(data);
//     })
// }

// function onDone(data){
//     console.log(data);
// }

// anantReadFile(onDone);


// -----------------------------------------------------------


// code with promises:

function anantReadFile2(){
    return new Promise(function(resolve){
        fs.readFile("hi.txt", "utf-8", function(err, data){
            resolve(data);
        });
    })
}

function onDone(data){ // callback Function to call
    console.log(data);
}

anantReadFile2().then(onDone);


// ---------------- PLAYING ---------------- 

function myOwnSetTimeout(duration){
    return new Promise(function(resolve){
        setTimeout(resolve, duration);
    })
}

function whenResolved(){
    console.log("YO Babe, am I late ?");
}

myOwnSetTimeout(3000).then(whenResolved);