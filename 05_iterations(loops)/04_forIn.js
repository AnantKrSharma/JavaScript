// -- iteration in Objects --

const myObject = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(key);
    // console.log(myObject[key]);
    console.log(`${key} is for ${myObject[key]}`);
}


// -- iteration in Arrays --

const programming = ["js", "cpp", "rb", "java", "python"]
for (const key in programming) {
    // console.log(key);
    // console.log(programming[key]);
    console.log(`${key} is for ${programming[key]}`);
}

// -- iteration in Maps --

// ** map is not iterable **

// const myMap = new Map()
// myMap.set('IN', "India")
// myMap.set('USA', "United States of America")
// myMap.set('FR', "France")

// for (const key in myMap) {
//     console.log(key);
// }

