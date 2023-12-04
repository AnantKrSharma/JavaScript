// --- reduce function ---

/* The reduce() method in JavaScript is a higher-order function that reduces an array
   to a single value. It takes a callback function and an initial value as arguments, 
   and executes the callback function on each element of the array, passing in the 
   accumulator value and the current element as arguments. The accumulator value is 
   the accumulated result of the callback function executions, and the initial value 
   is the initial value of the accumulator. The reduce() method returns the final 
   accumulator value. */

const myNums = [1, 2, 3]

const myTotal = myNums.reduce( function (Acc, curVal) {
    console.log(`Accumulator - ${Acc} and Current Value - ${curVal}`);
    return Acc + curVal
}, 0 )   // the '0' after ',' in the function is the initial value for the accumulator.

console.log(myTotal);


const myNums2 = [1, 2, 3, 4, 5]

const myTotal2 = myNums2.reduce( (acc, curValue) => acc+curValue,0)
console.log(myTotal2);


const shoppingCart = [
    {
        itemName: "JS Course",
        price: 2999
    },
    {
        itemName: "Python Course",
        price: 1999
    },
    {
        itemName: "WebDev Course",
        price: 6200
    },
    {
        itemName: "CN Course",
        price: 16000
    },
    {
        itemName: "DSA Course",
        price: 3500
    },
]

const cartTotal = shoppingCart.reduce( (acc, item) => (acc + item.price),0)
console.log(cartTotal);