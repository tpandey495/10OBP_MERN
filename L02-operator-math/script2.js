// let ans = 5%2+3**2+(6+5**2/5);
// console.log(ans);  //21


//// compound assignments (+=, -=, *=, /=)
//  shorthand operator that perform an operation and 
// assign the final value back to the veraible

// task 1: given a varaible res with value 10 and
// add five in this variable.
// let a = 10;
//  a= a+5;
// console.log(a); // 15

// +=

// let a = 10;
// a += 5;
// console.log(a);

// - =
// given a variable with some value subtract 
// half of the value from it and assign back the final to the variable

// let a =4;
// a=a-2;
// console.log(a);

// let a = 4;
// a-=2;
// console.log(a);

// let a = 6;
// a -= a/2;
// console.log(a);

// *=
// let a = 5;
// a = a*2;
// console.log(a);

// let a = 5;
// a*=2;
// console.log(a);


// /=
// let a = 10;
// a/=2;  //a=a/2
// console.log(a);


// write the same code using compound assignment
// let a =10;
// a=a+5;
// a=a/3;
// console.log(a);

// let a =10;
// a+=5;
// a/=3;
// console.log(a);

// predict the output
// q1
// let a=0;
// a+=10+3**2;
// console.log(a);  //19

// //q2
// let a=0;
// a+=5/3*2;
// a/=2;
// console.log(a); //1.667

// q3
// let a;
// a=5/3*2;
// a/=2;
// console.log(a); //1.667


//Math object
// Math object basics (Math.round, Math.floor, Math.ceil, 
// toFixed, parseInt(basics), parseFloat, NaN, Infinity


// round function -> decimal number it will round up it to nearest integer
// deciaml part >=0.5 -> round up
// decimal part<0.5 -> round down

// console.log(Math.round(4.6)); // 5

// console.log(Math.round(4.4)); // 4

// // Line 0
// console.log(Math.round(2.5));  //3 

// // Line 1
// console.log(Math.round(2.3)); // 2

// // Line 2
// console.log(Math.round(3.6)); // 4

// // Line 3
// console.log(Math.round(0.5)); // 1

// // Line 4
// console.log(Math.round(0.6)); //1

// // Line 5
// console.log(Math.round(0.3)); //0

// Line 6
// console.log(Math.round(-2.3)); // -2

// console.log(Math.round(-4.7)); // -5 

// console.log(Math.round(-0.7)); // -1

// console.log(Math.round(-0.5)); // -0

// console.log(Math.round(-0.2)); // -0


// Math.floor -> round down to nearest integer
// console.log(Math.floor(2.3)); // 2

// console.log(Math.floor(2.8)); //  2

// console.log(Math.floor(-2.8)); // -3


// console.log(Math.floor(-0.5));  // -1


// Math.ceil() -> round up to nearest integer

// task 1 -> given a float numer 3.5 and round up to nearest integer
// console.log(Math.ceil(3.5)); //4

// console.log(Math.ceil(-4.2));  //4 
// console.log(Math.ceil(-0.5)); // -0

// q1 -> there are 28 students and 5 students can sit on a chair
// minimum how many chairs are  required so that all students can sit
// console.log(Math.ceil(28/5));


// toFixed()-> format the number to specified digit after decimal
// let a = 8/3;
// // format it to 2 place after decimal
// console.log(a.toFixed(2));
// console.log(a.toFixed(3));

// let b = 3.45555567;
// console.log(b.toFixed(2));


// parseInt() -> convert the number from other format like string to integer.
// console.log(parseInt("123")); // 123 
// console.log(parseInt(3.23)); //3

// console.log(parseInt("123a")); // 123 
// console.log(parseInt("abc123")) //NAN