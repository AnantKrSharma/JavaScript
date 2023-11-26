let myDate = new Date() //It is an instance of the Date Object.
console.log(myDate);
console.log(myDate.toString()); //Includes DateString and TimeString.
console.log(myDate.toDateString());
console.log(myDate.toTimeString());
console.log(myDate.toLocaleString()); //both locale date and time.
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());

// ** FORMAT 1 **
let myCreatedDate = new Date(2023, 0, 23) //To create a date of our choice - (YYYY, M, D)
                                           //Months start from zero in JS.
console.log(myCreatedDate.toDateString());

// ** FORMAT 2 **
let myCreatedDate2 = new Date(2023, 0, 23, 15, 3) //To create a date with time.
console.log(myCreatedDate2.toLocaleString());

// ** FORMAT 3 **
let myCreatedDate3 = new Date("2023-01-21") // YYYY-MM-DD
console.log(myCreatedDate3.toLocaleString())

// ** FORMAT 4 **
let myCreatedDate4 = new Date("01-21-2023") // MM-DD-YYYY
console.log(myCreatedDate4.toLocaleString());


let myTimeStamp = Date.now()
console.log(myTimeStamp); //it gives output in MilliSeconds till today's date.
console.log(Math.floor(Date.now()/1000)); //to get output in Seconds.

console.log(myCreatedDate.getTime()); //output in Milliseconds till the given date.


//-------------------------------------------
let newDate = new Date();
console.log(newDate);
console.log(newDate.getDate()); //to just get the Date specifically.
console.log(newDate.getMonth() + 1); //to just get the Month specifically (starts from zero).

console.log(`The date is ${newDate.getDay()}, the month is ${newDate.getMonth()} and the year is ${newDate.getFullYear()}`);

console.log(newDate.toLocaleString('default',{
    weekday: "long",
}));