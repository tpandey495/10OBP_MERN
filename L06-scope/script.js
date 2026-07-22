// function isPrime(num){
//     for(let i =2;i<num;i++){
//         if(num%i==0){
//             return false;
//         }
//     } 
//    return true;
// }

// function primeSum(n){
//     let sum =0;
//     for(let i=2;i<n;i++){
//         if(isPrime(i)){
//           sum += i;
//         }
//     }
//     return sum;
// }

// console.log(primeSum(15));

// scope 

// Global Scope
// variable that is declared outside of the function or block 
// can be accessed anywhere in the program.
// and this scope is known as global scope.

// global variable
// let a =20;

// function check(){
//   console.log("inside function",a);
// }

// check();

// {
//     console.log("inside block",a);
// }


// 



// ways to declare variable in javascript
// var
// let 
// const

// declaring variable with var keyword
// var c  = 20;
// console.log(c);

// decalre a variable with const 
// const c = 20;
// console.log(c);

// scope:-
// global scope
// function scope
// block scope

// function scope
// variable that is declared inside a function is only 
// accessible inside that function only

// let is function scope
// function sum(){
//     let a=20,b=30;
//     console.log(a,b);
// }

// // console.log(a,b); -> a is not defined
// sum();


// var is also function scope
// function sum(){
//     var a=20,b=30;
//     console.log(a,b);
// }

// console.log(a,b); //-> a is not defined
// sum();

// const is also function scope
// function sum(){
//     const a=20,b=30;
//     console.log(a,b);
// }

// console.log(a,b); //-> a is not defined
// sum();


// block scope:-
// let and const is block scope.

// {
//     let a =20;
   
// }
// // console.log(a); -> a is not defined

// {
//     const a =20;
   
// }
// console.log(a); -> a is not defined

// {
//     var a = 20;
// }
// console.log(a); -> a is 20


// scope chain -> in the scope chain  is the process of 
// checking variable decalaration 
// from it's scope to outer scope one by one

// let a = 20;
// function check(){
//     function validate(){
//         console.log(a); // 20
//     }
//     validate();
// }

// check();


// let a = 20;
// function check(){
//     a=30
//     function validate(){
//         console.log(a); // 30
//     }
//     validate();
// }

// check();



// cuurent scope
// then 
// parent scope
// then 
// global scope


// o/p 1
// let b =30;
// function modify(){
//     b = 50;
//     console.log("inside function",b); // 50
// }
// modify();
// console.log("global function",b); // 50

// // o/p 2-

// let c = 30;

// function check(){
//     console.log("first",c); //30 // it will be printed second
//     c = 40;
//     console.log("second",c);  //40 // it will be printed third

// }
// console.log("third",c); //30 // it will be printed first
// check();

// o/p 3:-

// {
//     let a =20;
//     {
//         {
//             console.log(a); // 20
//         }
//     }
// }


// {
    
//     {
//         let a =30;
//         {
//             console.log(a); // 30
//         }
//     }
// }


// o/p-5-
// {
    
//     {
//         let a = 20; // a is not defined
//     }
//      console.log(a);
// }


// {
 
//     {
//         var a = 20; // a is not defined
//     }
//        console.log(a);
// }



//note-> variable declare with let can'nt be redeclared

// let a =20;
// let a = 30;
// console.log(a);

// variable shadowing
// variable declared  with same name in the smaller 
// scope shadow the variable declared in bigger scope.

// let a = 20;
// {
//    let a = 30;
//    console.log(a); // 30
// }
// console.log(a); // 20


// {
//     let a = 20;
//   {
//    let a = 30;
//    console.log(a); 
//   } 
//   console.log(a); 
// }

// {
//     var a = 20;
    
//   {
//    var a = 30;
//    console.log(a);  // 30
//   } 
// console.log(a); // 30
// }


// {
//    const a = 20;
//   {
//    const a = 30;
//    console.log(a);  // 30
//   } 
//   console.log(a); // 20
// }


// {
//     let a = 30;
//   {
//     var a = 20;
//    console.log(a);  // 30
//   } 
//   console.log(a); // 20
// }

// Hoisting->
// Hoisitng is process of processing declaration before the exuction

// var is hoisted 
// console.log(a); // undefined 
// var a =20;

// var b =20;
// console.log(b);

//  let is hoisted 
// variable that is declared with 
// let can'nt be accessed before declaration
// console.log(a);
// let a =20;

// let a;
// console.log(a); // undefined 


// {
//     const a =30;
//     {
//       console.log(a);
//     }
// }









