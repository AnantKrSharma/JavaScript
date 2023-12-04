const languages = ["js", "ruby", "java", "python", "cpp"]

/* this function will take every element of the Array 'languages' as a parameter,
   through forEach loop. As the function is callback, so it won't be having a name. 
   a function passed as an argument to another function and executed when that 
   function completes or some event happens. */

languages.forEach( function (item) {
    console.log(item);
} ) 


languages.forEach( (value) => {
    console.log(value);
} )


function printMe(item){
    console.log(item);
}

languages.forEach(printMe);

//1st parameter is for value, 2nd is for index, 3rd is for complete array
languages.forEach( (val, index, arr) => {
    console.log(val, index, arr);
})

// accessing the values of objects inside an array using forEach loop.
const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "js"
    },
    {
        languageName: "JAVA",
        languageFileName: "java"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
    console.log(item.languageFileName);
} )