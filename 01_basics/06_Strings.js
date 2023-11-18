const name = "Anant"
const age = "20"
// other way to declare String :
const name2 = new String('Anant-Kr')

//String Interpolation  
// `` => backticks
console.log(`Hello my name is ${name} and my age is ${age}`);

console.log(name2[0]); // Key-Value Pairs
console.log(name2.__proto__);
console.log(name2.toUpperCase());
console.log(name2.length);
console.log(name2.charAt(2));
console.log(name2.indexOf('a'));

const name3 = name2.substring(0, 4); //we cant give negative values in this
console.log(name3);

const name4 = name2.slice(-8,4); //we can give negative values in this
console.log(name4);

const newString = "     Hello     ";
console.log(newString);
console.log(newString.trim()); //It removes spaces from start and end. trimStart and trimEnd are two seperate methods.

const url = "https://anant.com/anant%20sharma"
console.log(url.replace('%20', '-'));

console.log(url.includes('anant'));
console.log(url.includes('sex'));

console.log(name2.split('-'));