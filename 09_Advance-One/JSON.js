const user1 = '{ "name": "Anant", "Age": 21 }'
// console.log(user[0]);

// JSON.parse
// JSON.stringify

const user2 = JSON.parse(user1);  // JSON string -> Object
console.log(user2);
console.log(user2["Age"]);



const ObjUser1 = {
    name: "Aditi",
    age: 22
}

const ObjUser2 = JSON.stringify(ObjUser1); // Object -> JSON string
console.log(ObjUser2);