// palindrome

// approach 1
// let arr = [1,2,1];

// let newArr = [];

// for(let i= arr.length-1;i>=0;i--){
//     newArr.push(arr[i]);
// }

// let isPalindrome = true;
// for(let i =0;i<arr.length;i++){
//     if(arr[i]!=newArr[i]){
//       isPalindrome=false;
//       break;
//     }
// }
// console.log(isPalindrome);

//  approach 2


//  nested array
// let arr = [1,2,3,4];

// let arr = [
//   [1,2,3,4],
//   [4,5],
//   [6,7]
// ];

// console.log(arr[0]);

// console.log(arr[1]);
// console.log(arr[2]);

//  Shallow and Deep Copy

//  Shallow Copy :-
// In shallow copy all the items of the 
// first level is copied and 
// nested level reference is shared.

// let arr = [1,2,3,[4,5]];

// slice return shallow copy of an array

// let newArr = arr.slice();

// newArr.push(6);
// console.log(arr); // //[1,2,3,[4,5]]
// console.log(newArr); // [1,2,3,[4,5,5]]

// let arr = [1,2,3,[4,5]];
// let newArr = arr.slice();
// newArr[3].push(5);
// console.log(arr); //[1,2,3,[4,5,5]]
// console.log(newArr);// [1,2,3,[4,5,5]]

// let arr = [1,2,[5,8,6]];

// let newArr = arr.slice(1);
// newArr.push(6);
// arr[2].push(9);
// console.log(arr);
// console.log(newArr);

//Deep Copy:- 
// In deep copy items are copied  recursively
// there is no shared reference;
// - structuredClone();

// let arr = [1,2,[5,8,6]]
// let newArr = structuredClone(arr);
// console.log(newArr);

// example
// let arr = [1,2,[5,8,6]]
// let newArr = structuredClone(arr);
// newArr[2].push(9);
// console.log(arr); //[1,2,[5,8,6]]
// console.log(newArr); //[1,2,[5,8,6,9]]


// Spread Operator ->
//  spread operator expand an 
// iteratable(arra,object) to individual item.

// ...

// printing individual items
// let arr = [1,2,3,4];
// console.log(...arr);

// copy -> Shallow Copy 
// let arr = [1,2,3,4];
// let newArr = [...arr];
// console.log(newArr);

// merge 
// let arr1 = [1,2,3,4];
// let arr2 = [5,6,7,8];
// let merged = [...arr1,...arr2];
// console.log(merged);

// Add Element
// let arr1 = [1,2,3,4];
// let arr2 = [...arr1,8];
// console.log(arr2);

// start
// let arr1 = [1,2,3,4];
// let arr2 = [8,...arr1];
// console.log(arr2);

// function argument

// function sum(a,b,c){
//     return a+b+c;
// }
// let arr = [1,2,3];
// console.log(sum(arr[0],arr[1],arr[2]));
// console.log(sum(...arr));


// Array Destructuring
// let arr = [1,2,3];
// let a= arr[0],b=arr[1],c=arr[2];
// console.log(a,b,c);

// let [a,b,c] = arr;
// console.log(a,b,c);

// destrcuture only first value
// let arr = [1,2,3,4];
// let [a] = arr;
// console.log(a);

// skip Element
// let arr =[1,2,3];
// let [a,,c] =arr;
// console.log(a,c);

// extra
// let arr = [1,2,3];
// let [a,b,c,d] = arr;
// console.log(a,b,c,d);

// default value 
// let arr = [1,2];
// let [a,b,c=10] = arr;
// console.log(a,b,c);

// prdict the output
// let arr = [1,2,3];
// let [a,b,c=10] = arr;
// console.log(a,b,c);

// rest operator ->
// rest pack multiple values inside an array.
let [a,b,...arr] = [1,2,3,4,5];
console.log(a,b,arr);







