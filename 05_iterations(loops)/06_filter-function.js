// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item
// })

// console.log(values);


// --- filter function ---

/* the filter() method takes an arrow function as a callback function. 
   The arrow function returns true if the number is even, and false otherwise.
   The filter() method then returns a new array containing all the numbers that
   passed the test. */

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter( (num) => num > 4)
console.log(newNums);
 
const newNums2 = myNums.filter( (num) => {
    return num % 2==0  // we have used a return keyword here because we have opened a scope by using curly braces.
})
console.log(newNums2);


const myNums2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20] 
const newNums3 = []

myNums2.forEach( (num) => {
    if(num > 14){
        newNums3.push(num)
    }
} )
console.log(newNums3);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// let userBooks = books.filter( (item) => item.genre === 'History')
// userBooks = books.filter( (item) => { return item.publish >= 1990 } )

let userBooks = books.filter( (item) => item.genre === 'History' && item.publish >= 1990 )

console.log(userBooks);