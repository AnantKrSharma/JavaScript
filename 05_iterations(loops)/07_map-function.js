// --- map function ---

/* The JavaScript Array map() function allows you to iterate over an array 
   and modify its elements using a callback function. The callback function
   will then be executed on each of the array's elements. It automatically
   returns the value. */

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const Nums = myNumbers.map( (num) => num + 10 )
console.log(Nums);


// - chaining -

/* const Nums2 = myNumbers
                         .map( (num) => num*10 )
                         .map( (num2) => num2 + 1)
                         .filter( (num3) => num3 >= 40 ) */
const Nums2 = myNumbers.map( (num) => num*10 ).map( (num2) => num2 + 1).filter( (num3) => num3 >= 40 )

console.log(Nums2);