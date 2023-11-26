const marvel_Heroes = ["IronMan", "Thor", "SpiderMan"]
const DC_Heroes = ["BatMan", "SuperMan", "Flash"]

const Heroes = marvel_Heroes.concat(DC_Heroes); /* Combines two or more arrays. This method returns 
                                                   a new array without modifying any existing arrays. */ 
console.log(Heroes);

const all_new_heroes = [...marvel_Heroes, ...DC_Heroes] //SPREAD Operator- turns all values to individual values.
console.log(all_new_heroes);

marvel_Heroes.push(DC_Heroes);
console.log(marvel_Heroes);
console.log(marvel_Heroes[3]);
console.log(marvel_Heroes[3][1]);

const another_Array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_Array = another_Array.flat(Infinity);
console.log(real_another_Array);


console.log(Array.isArray("Anant")); //to check whether this is an array or not.
console.log(Array.from("Anant"));
console.log(Array.from({name: "Anant"})) // Interesting Case.

//to create an Array from multiple variables :
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));