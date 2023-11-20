// ***************  Numbers  ***************

const score = 100
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(typeof balance.toString())
console.log(balance.toString().length);
console.log(balance.toFixed(2)); //used for precision in E-commerce websites.


const otherNumber = 123.5944
console.log(otherNumber.toPrecision(3)); //it converts the Number into String.
console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
console.log(hundreds.toLocaleString());  //US Standard
console.log(hundreds.toLocaleString('en-IN')); //Indian Standard


// ***************  Maths Object ***************
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.2));
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));
console.log(Math.random()); // always shows result between 0 and 1, inclusive. 
console.log((Math.random()*10) + 1); //to get a value >=1 and <=9.

const min = 10 //suppose we want random values between 10 and 20.
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min) /* Formula to get random values 
                                                                  between the range min and max. */