let score = "33"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

/*Conversion into Number:
 "33" => 33
 "33abc" => NaN
 true => 1 ; false => 0 */


 let isLoggedIn = 1;
 let booleanIsLoggedIn = Boolean(isLoggedIn)
 console.log(booleanIsLoggedIn);

/*Conversion into Boolean:
 1 => true ; 0 => false
 "anant" => true ; "" => false */

let someNumber = 15
let stringNumber = String(someNumber)
console.log(typeof stringNumber);
console.log(stringNumber);

// --------------- Operations ---------------

let value = 3
let negValue = -value
console.log(negValue);
console.log(-value);

let str1 = "Hello"
let str2 = "AKS"
let str3 = str1+str2
console.log(str3);
console.log(str1 + str2);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

let counter = 100;
++counter;
console.log(counter);