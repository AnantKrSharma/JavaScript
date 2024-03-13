function findSum(n){
    let ans = 0;
    for(let i=0; i<n; i++){
        ans+=i;
    }
    return ans;
}

function findSumTill100(){
    console.log(findSum(100));;
}

setTimeout(findSumTill100, 2000) // Asynchronous Fn.
console.log("Yo");


// Asynchronous code to read a file from the file system.

const fs = require("fs");

/* used to include the "fs" module, which stands for File System. This
module provides functionality to work with the file system in a Node.js 
environment. Once included, we can use methods from the "fs" module to 
read, write, and manipulate files on the computer. The const keyword is 
used to declare a constant variable. */

fs.readFile("hi.txt", "utf-8", function(err, data){
    console.log(data);
})

console.log("YOYO");