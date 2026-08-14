// let users = [
//    {
//      name:"Abhishek",
//      age:20,
//      address:{
//         city:"Pune"
//      }
//    },
//    {
//      name:"Rakesh",
//      age:20,
//      address:{
//         city:"Lucknow"
//      }
//    },
//    {
//      name:"Mahesh",
//      age:20,
//      address:{
//         city:"Pune"
//      }
//    }
// ];

//  find all the users who is staying in pune.

// for(let user of users){
//     if(user.address.city=="Pune")
//        console.log(user.name);
// }


// function ->

// function sum(a,b){
//     let c=a+b;
//     console.log(c);
//  }

// let a =1,b=2;
// sum(a,b);

// function sum(a,b){
//     let c=a+b;
//     return c;
// }

// let a =1,b=2;
// console.log(sum(a,b));


// default value 


// function sum(a,b=2){
//    console.log(a,b);
// }

// sum(1);
// sum(1,3);


// find the factorial of a number (design factorial function)

// function factorial(n){
//     let fact =1; 
//     for(let i=n;i>=1;i--){
//        fact*=i;
//     }
//     return fact;
// }

// console.log(factorial(4));


// Hoisting -> Hoisting is process of processing declaration before intilization.

// let const var 

//  var
// console.log(a); 
// var a =20;



// let -> let is hoisted but can'nt be accessed before intilization.
// console.log(a); // Cannot access 'a' before initialization
// let a =20;


// const 
// console.log(a); //ReferenceError: Cannot access 'a' before initialization
// const a = 20; //Const  is hoisted but can'nt be accessed before intilization.


// function is hoisted.
// console.log(sum(1,2)); //3

// function sum(a,b){
//     return a+b;
// }


// function expression 
// let add = function sum(a,b){
//     return a+b;
// }

// console.log(add(1,2)); //3

// function expression is hoisted or not ->
// function expression is not hoisted.

// console.log(add(1,2));//ReferenceError: Cannot access 'add' before initialization

// let add = function sum(a,b){
//     return a+b;
// }



// predict the ouput

// q1
// product();

// function product(){
//   let a=2;
//   console.log(a+b);
//   let b;
// }

// q2

// product();
// function product(){
//   let a=2;
//   console.log(a+b);
//   var b;
// }


// q3 
// ReferenceError: Cannot access 'mul' before initialization
// mul();

// let mul=function product(){
//   let a=2;
//   console.log(a+b);
//   var b;
// }


// TDZ->
// phase in which variable declare with let and const can'nt be access that is known 
// temporal dead zone 

// console.log(a);
// let a =20;

// // with out using any inbuilt function reverse a string 
// let str = "apple";
// let rev = "";

// for(let i=str.length-1;i>=0;i--){
//     rev+=str[i];
// }

// console.log(rev);

// arrys (slice,splice)


// slice(start?:,end?:) -> return the subarray from start to end (excluded);
// default start -> 0
//  default end -> length of array 


// let arr = [4,2,6,8];
// console.log(arr.slice(1,2));

// console.log(arr.slice(1,3))

// console.log(arr.slice());


// splice(start,deleteCount?,...items)
//  - return an array of deleted items and insertion and deletion happen in the same array.

// let arr = [4,3,5,7,8];

// delete
// console.log(arr.splice(1,1));
// console.log(arr);

// insert 
// insert 3 and 7 after 5 
// console.log(arr.splice(3,0,3,7));

// console.log(arr);

// insert and deletion both 
// delete 3 5 7 and insert 2 and 3 
// [4,2,3,8]

// arr.splice(1,3,2,3);
// console.log(arr);


// after 7 insert 1 to n in the array 
let n=6
let arr = [4,3,5,7,8]

// appproach 1

// for(let i=1;i<=n;i++){
//     arr.splice(4+i-1,0,i);
// }
// console.log(arr);


// approach 2

let newArr = [];

for(let i=1;i<=n;i++){
    newArr.push(i);
}

arr.splice(4,0,...newArr);

console.log(arr);






