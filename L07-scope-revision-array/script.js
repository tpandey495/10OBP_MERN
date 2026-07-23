// Hoisiting 
// hositing is processing process 
// declaration before excution

// var is hoisted with keyword undefined

// console.log(a);
// var a= 10;

// let and const is also hoisted with key word undefined
// but can'nt be access before intilization

// console.log(b);
// let b = 20;

// console.log(c);
// const c = 30;
// console.log(c);

//Temporal dead zone -> 
// Let and const is  hoisted with keyword undefiend but can'nt be accessed beofre 
// intilization till the time variable can'nt be accessed 
// variable is in tmeporal dead zone


// console.log(a);
// var a = 25;
// console.log(a);





// let a;
// console.log(a);
// a=25;
// console.log(a);



//Scope -> 
// Global Scope
// Function Scope
// Block Scope 



// Global Scope:- 
// let a = 20;
// console.log(a);

// function check(){
//     console.log(a);
// }
// check();

// {
//     console.log(a);
// }

// Function Scope:- 
// variable that is declared inside a function will only accessible in that function only.

// function check(){
//     let a =10;
//     console.log(a);
// }
// console.log(a);

// check();

// Block Scope:-
// variable that is with let and cnost declared inside 
// a block will be accessible to that block only.

// {
//     let a = 10;
// }

// console.log(a);

// {
//     var a =20;
// }
// console.log(a);


// {
//     const a =20;
// }
// console.log(a); // a is not defined


// scope chain:-
// declaration of variable is searched 
// from it's scope to outer scope one by one.

// {
//     let a =20
//     {
//         console.log(a);  // 20
//     }
// }


// function check(){
//     var a = 20;
//     function validate(){
//         console.log(a);
//     }
//     validate();
// }

// check();


// variable shadowing


// is redeclaration allowed in case of let -> no
// let a =20;
// let a = 20;

// is reassignment allowed in case of let -> yes
// let a = 20;
// a = 40;
// console.log(a); //40


// is redeclaration allowed in case of var-> yes

// var a =20;
// var a = 40;
// console.log(a);

// is reassignment allowed in case of var -> yes

// var a =20;
// a= 40;
// console.log(a); -> 40


// is redeclaration allowed in case of const -> no 
// const a = 20;
// const a = 40;
// console.log(a);

// is reassignment allowed in case of const -> no
// const a = 20;
// a=40;
// console.log(a);

// const > let > var


// {
//     let a =20;
//     {
//          a =40;
//         console.log(a)
//     }
//     console.log(a);
// }

// Variable Shadowing->
// if variable is declared with 
// same name in the inner scope. 
// it shadow the variable 
// in it's scope.

// redclared with let
// {
//     let a =20;
//     {
//         let  a =40;
//         console.log("inner scope",a) // 40
//     }
//     console.log("outer scope",a); // 20
// }

// redeclared with const
// {
//     const a =20;
//     {
//         const  a =40;
//         console.log("inner scope",a) // 40
//     }
//     console.log("outer scope",a); // 20
// }


// {
//     var a =20;
//     {
//         var  a =40;
//         console.log("inner scope",a) // 40
//     }
//     console.log("outer scope",a); // 40
// }

// Arrays:-
//   -> Arrays is collection of items

// let arr =[]; // array declaration

// let arr = [1,2,3,4];
// console.log(arr);

// // index 
// // 1(first item)->0(index)
// // 2(first item)->1(index)
// // 3(first item)->2(index)
// // 4(first item)->3(index)


// // print the item at index 0
// console.log("item at 0 index",arr[0]); //1

// // print the item at index 2
// console.log(arr[2]); //3

// // print the item at index 3
// console.log(arr[3]); //4

// // print the item at index 5
// console.log(arr[5]); // undefined

// //  length property
// console.log(arr.length) //4

//print last item of the array

// console.log(arr[arr.length-1]);

// print all the items of the array
// for(let i=0;i<=arr.length-1;i++){
//     console.log(arr[i]);
// }

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// In a class there is a 5 students. 
// Store their names and print it.
// let students = ["Abhishek","Diwakar","Ramesh","Suresh","Akash"];
// for(let i=0;i<students.length;i++){
//     console.log(students[i]);
// }

// given an array find the sum of all it's number.

let arr = [1,2,3,4,5];

let sum =0;
for(let i =0;i<arr.length;i++){
    sum += arr[i];
}

console.log(sum)

// h.w

// q1:
// print array in  reverse order

// q2:
// muliptly all the items of the array

// q3:
// given an array of items count no of 2
 // Example:- [1,1,1,2,3,2,3,2,4]

//q4:
// create a array of 5 names and then count 
// how many particular name is present






