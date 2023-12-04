// -- for of loop --

const arr = [1, 2 ,3 ,4, 5]
for (const i of arr) {
    console.log(i);
}

const greeting = "Hello World!"
for (const greet of greeting) {
    console.log(`Each char is: ${greet}`);
}


// -- Maps --
/* A Map holds key-value pairs where the keys can be any datatype.
   A Map remembers the original insertion order of the keys */ 

const myMap = new Map()
myMap.set('IN', "India")
myMap.set('USA', "United States of America")
myMap.set('FR', "France")

console.log(myMap);


for (const key of myMap) {
    console.log(key);
}

for(const [key, value] of myMap){
    console.log(key, ':-', value);
}

// const myObj = {
//     "Game1": "GTA",
//     "Game2": "NFS",
//     "Game3": "SpiderMan"
// }

// for (const [key,value] of myObj) {
//     console.log(key, ':-', value);
// }

