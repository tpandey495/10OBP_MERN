// let arr = [1,2,3,4,5,6];

// function paritionIndex(arr,l,high){
//     let i=l,j=l;
//     let pivot = high;

//     while(j<high){
//         if(arr[j]<=arr[pivot]){
//             [arr[i],arr[j]]=[arr[j],arr[i]];
//             i++;
//         }
//          j++;
//     }

//     [arr[i],arr[pivot]]=[arr[pivot],arr[i]];
   
//     return i;
// }

// function quickSort(l,r,arr){
//     if(l>=r)
//       return;
//     let index= paritionIndex(arr,l,r);
//     quickSort(l,index-1,arr);
//     quickSort(index+1,r,arr);
// }

// quickSort(0,arr.length-1,arr);


// console.log(arr);


// Time Complexity ->
// Best Case-> o(nlog2(n))
// Average Case -> o(nlog2(n))
// worst case -> o(n^2)

// Space COmplexity-> 
// best and average -> o(nlog2(n))
// worst case-> o(n)

// arrow function-> shorter way of writing function in javascript

// function add(a,b){
//     console.log(a+b);
// }


// add(1,2);

// const add = (a,b) =>{
//     console.log(a+b);
// }

// add(1,2);


// 
// function add(a,b){
//     return a+b;
// }


// console.log(add(1,2));

// using arrow function 

// const add=(a,b)=>{
//     return a+b;
// }

// console.log(add(1,2));

// const add = (a,b) =>a+b;

// console.log(add(1,2));



// writing a function that return  multiplication of two numbers 

// const mul = (a,b) => a*b;
// console.log(mul(1,2));

// Note -> functions in javascript is first class citizen. it means function  can be stored variable 
// can be passed in another as arugment and function can returned from a fucntion.


// callback function - function that is passed to another function as an argument is known as 
// callback function.


// function delivery(){
//     console.log("item is sent for the delivery");
// }


// function placeOrder(callback){
//     if(status = "succesfful")
//       callback();
// }


// placeOrder(delivery);



// Arrow function as callback


// const  delivery=()=>{
//     console.log("item is sent for the delivery");
// }


// function placeOrder(callback){
//     if(status = "succesfful")
//       callback();
// }


// placeOrder(delivery);


// 2nd approachd
// function placeOrder(callback){
//       callback();
// }


// placeOrder(delivery=()=>{
//     console.log("item is sent for the delivery");
// });




// callback with parameter -> add sub and mul
// const multiply =(a,b)=>{
//    return a*b;
// }


// const add=(a,b)=>{
//     return a+b;
// }

// const sub=(a,b) => a-b;



// function calculate(a,b,operation){
//      console.log(operation(a,b))
// }


// calculate(1,2,multiply);

// calculate(3,2,add);

// calculate(5,2,sub);

// calculate(5,8,div = (a,b) => a/b);



// function can be returned from another function
// function buy(){
//     return function payment(){
//        console.log("payment is being processed");
//     }
// }

// console.log(buy());

// const process = buy();
// process();


// buy()();



// 

// function buy(){
//     return function payment(){
//         return function delivery(){
//             console.log("item is being delivered");
//         }
//     }
// }

// console.log(buy()); //[Function: payment]

// console.log(buy()()); //[Function: delivery]

// buy()()();



// Higher Order function - function that takes  another  function as an argument or 
// return a function is higher order function.

function delivery(){
    console.log("item is sent for the delivery");
}


function placeOrder(callback){
    if(status = "succesfful")
      callback();
}


placeOrder(delivery);



// placeOrder -> higher order function
// delviery -> callback function


// Example 2:- 

function buy(){
    return function payment(){
       console.log("payment is being processed");
    }
}

buy()();


// Higher order function-> buy


// Example 3:-
const multiply =(a,b)=>{
   return a*b;
}


const add=(a,b)=>{
    return a+b;
}

const sub=(a,b) => a-b;



function calculate(a,b,operation){
     console.log(operation(a,b))
}


calculate(1,2,multiply);










