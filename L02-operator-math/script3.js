// roundof() 
// ceil()
// floor()
// toFixed()
// parseInt()

//q1
// console.log(parseInt("abc12")) //Nan
// console.log(parseInt("hello")) //Nan
// console.log(parseInt("145abc")); //145

// parseFloat()
// console.log(parseFloat("1.25abc")) //1.25
// console.log(parseFloat(125)); // 125


// NaN, Infinity

// Infinity -> (bigger than max value js can store)
// let a = 2/0;
// console.log(a);  // infinity

// Number object ->
//Can be used to convert other data types to number;

// console.log(Number("123")); // 123
// console.log(Number("123abc")); //Nan
// console.log(Number("abc123")); //NaN

// largest number that can be stored in javascript
// console.log(Number.MAX_VALUE); //1.7976931348623157e+308 1.79*10^308
// console.log(Number.MIN_VALUE); //5e-324. 5*10^-324

// let ans = 2*Number.MAX_VALUE;
// console.log(ans); //infinity

// isNaN() -> it check given value is a number then return false otherwise true
// console.log(isNaN("abc"));
// console.log(isNaN(123));
// console.log(isNaN("123abc"));

//infinity
//Number object 
// Max Value

// Line 1
// console.log(3*Number.MAX_VALUE); //Infinity

// // Line 2
// console.log(isNaN("abc123")); //true

// // Line 3
// console.log(isNaN("123acb")); //true

// // Line 4
// console.log(parseInt("123abc")); //123

// // Line 5
// console.log(Number("123bac")); //Nan

// question 1 ->
// find the max number of student that can sit in  5 room 
// and a room have capacity of 25 student.
// let room = 5;
// let capacity = 25;
// let maxSeat = 5*25;
// console.log(maxSeat);

// now 120 student is seated . find the occupancy  in percentage.

// let occupied = 120;
// let percentage =  (120/maxSeat)*100;
// console.log(percentage);

//question 2 ->
// last year 125 students enrolled in a da course. 
// this year 15% more students enrolled in the da course compare to last year.
//print the total no of student in da course this year.
// let lastEnrollment = 125;
// let enrollment = lastEnrollment+lastEnrollment*15/100;
// console.log(enrollment);

//question 3 ->
// total no of van required to accomdate 39 students  if in a van total 5 student can sit.
// 35 -> 7
// 4 -> 8
// let capacity = 5;
// let students =39;
// console.log(Math.ceil(students/capacity));

// question 4
// a virus starts with infecting one person at h=1.
// and then after every hour a person infect two new person.
// then after h our how many person will be infected.
h = 3;

// 1 hour -> 1 new  person. = 3**0
// 2 hour -> 2 new person = 3 total infected =3**1
// 3 hour -> 6 new person = 9 total infected = 3**2
// 4 hour -> 18 new person =  27 total infected
// 5 hour ->  54 new person = 81 total infectd

console.log(3**(h-1));


// h.w
// question 5
// a virus starts with infecting one person at h=1.
// and then after every hour a infected person infect three new person.
// then after h our how many person will be infected.


// 

let a;
a=a+5;
console.log(a); // Nan

let a =0;
a = a+5;
console.log(a); //5


console.log(Number.MAX_VALUE); // maximum that javascript can store
