// const obj = {}
// console.log(obj);

// -- creating Object using constructor --
const tinderUser = new Object()
console.log(tinderUser);

tinderUser.id  = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com" ,
    fullName: {              // -- Nesting -- 
        userFullName: {
            firstName: "Anant",
            lastName: "Sharma"
        }
    }
}
console.log(regularUser.fullName);
console.log(regularUser.fullName.userFullName.firstName);

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }
const obj3 = { 5: "e", 6: "f" }

// const obj4 = { obj1, obj2, obj3 }
// console.log(obj4);


/* The Object.assign() static method copies all enumerable own properties 
from one or more source objects to a target object. It returns the modified target object. */

// const obj4 = Object.assign({}, obj1, obj2, obj3) 

/* {} will act as a target and all the other objects will act as a source. 
If we don't write {}, then obj1 will act as a target, and all the other objects will act 
as a source. */


const obj4 ={ ...obj1, ...obj2, ...obj3 } // Spreading (easy and best syntax)
console.log(obj4);

// Getting values from the database (array of objects)
const users = [
    {
        id: 1,
        email: "A@gmail.com"
    },
    {
        id: 2,
        email: "B@gmail.com"
    },
    {
        id: 3,
        email: "C@gmail.com"
    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser)); //it will return an Array of all the Keys of the mentioned Object.
console.log(Object.values(tinderUser)); //it will return an Array of all the Values of the mentioned Object.
console.log(Object.entries(tinderUser )); //it will create Arrays inside an Array, with the Key-Value pairs.


console.log(tinderUser.hasOwnProperty('isLoggedIn'));  //to check whether the Object as a particular property or not.
console.log(tinderUser.hasOwnProperty('fuck')); 


const course = {
    courseName: "JS",
    coursePrice: "299",
    courseInstructor: "Hitesh"
}

// console.log(course.courseInstructor);
const {courseInstructor} = course  // --- Destructuring of Object ---
const {courseInstructor: instructor} = course
const {coursePrice: price} = course
console.log(courseInstructor); 
console.log(instructor);
console.log(price);



// ******  APIs  ******

/* -- these are some examples of how we get data in JSON(JavaScript Object Notation) Format form APIs. -- 

Format 1 =>
{                     
    "name": "Anant",
    "courseName": "JS",
    "price": "free"
} 

Format 2 => 
[
    {},
    {},
    {}
]
*/

