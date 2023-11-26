// ---------- Array ----------

const arr1 = [1, 2, 3, 4, 5]
const heroes = ["IronMan", "Captain", "Thor", "Hulk"]
const arr2 = new Array(1,2,3,4)
console.log(arr1[0]);


// ---------- Array Methods ---------- 

arr1.push(6) //used to add values.
arr1.push(7);
console.log(arr1);

arr1.pop(7)
console.log(arr1);

arr1.unshift(8)
console.log(arr1);

arr1.shift();
arr1.shift();
console.log(arr1);

console.log(arr1.includes(9));
console.log(arr1.indexOf(4));

const newArr = arr1.join(); //it will join and convert it into string.
console.log(newArr);
console.log(typeof newArr);


// --- slice AND splice ---

console.log("A ", arr1);
console.log(arr1.slice(1,3));
console.log("B ", arr1);

console.log(arr1.splice(1,3));
console.log("C ", arr1);




