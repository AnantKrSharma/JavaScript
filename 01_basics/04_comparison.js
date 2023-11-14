console.log(1 > 2);
console.log(2 >= 1);
console.log(1 <= 2);
console.log(2 != 1);

console.log("2" > 1);
console.log("02" > 1);

// xxxxxxxxxx  WE AVOID SUCH KIND OF COMPARISONS  xxxxxxxxxx 
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
/* The reason is that an equality check == and comparisons > < >= <= work differently.
Comparisons convert null to a number, treating it as 0.
That's why (3) (null >= 0) is true and (1)&(2) are false. */

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// === (Strict Check) 
console.log("2" === 2);