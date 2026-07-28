// slice 

// splice 

// indexOf(searchElement,fromIndex?)
// return the index of first 
// occurance  of searchElement in the array
// if not present return -1

//fromIndex-> starts searching from fromIndex

// let arr = [1,2,3,4,5];

// console.log(arr.indexOf(2)); //1 

// let arr = [1,2,2,2,3,1,2];
// console.log(arr.indexOf(2)); // 1

// let arr = [1,5,9,8,7];
// console.log(arr.indexOf(3)); // -1


// let arr = [2,2,4,4,4,4,4,5];
// console.log(arr.indexOf(4,3)); //3

// let arr = [5,2,4,4,4,4,4,5];
// console.log(arr.indexOf(5,3)); // 7

// practice:-
// given an array  distinct items and two number s
// find the number of items bw given two values in the array

// let arr = [1,3,4,6,9,10];
// let a = 3;
// let b = 10;


// // approach 1

// // first search for item a

// let firstIndex = -1;
// for(let i =0;i<arr.length;i++){
//     if(arr[i] == a){
//         firstIndex =i;
//         break;
//     }
// }

// // search for second item 

// let secondIndex = -1;
// for(let i = 0;i<arr.length;i++){
//      if(arr[i]==b){
//         secondIndex = i;
//         break;
//      }
// } 

// console.log(secondIndex-firstIndex-1);


// approach 2
// let arr = [1,3,4,6,9,10];
// let a = 4;
// let b = 10;

// let firstIndex = arr.indexOf(a);
// let lastIndex = arr.indexOf(b);
// console.log(lastIndex-firstIndex-1);


// lastIndexOf()-> 
// return index of last occurance of the search item


// includes(searchElement,fromIndex?:) -> return true if searchElement 
// is present
// otherwise false
// let arr = [1,2,3,4,5];
// console.log(arr.includes(3));

// console.log(arr.includes(6)); 

// let arr = [1,2,3,5,3,4];
// console.log(arr.indexOf(3,2)) // 2

// concat -> it can be used for merging two arrays
// return new array of merged items

// let arr1 = [1,2,3,4];
// let arr2 = [4,5,6,7];
// console.log(arr1.concat(arr2)); //[1, 2, 3, 4,4, 5, 6, 7]

// // with items
// console.log(arr1.concat(2,3));

// reverse-> reverse the item of an array inplace and returns 
// the reference of same array.
// let arr = [1,2,3,4]; 
// arr.reverse();
// console.log(arr);

// H.w
// given an array check if it is palindrome or not
// let arr = [1,2,1]; true
// let arr =[1,2,3]; false


// // array comparson

// // o/p1
// let arr1 = [1,2,3,4];
// let arr2 = [1,2,3,4];

// if(arr1===arr2){
//     console.log(true);
// }
// else{
//     console.log(false);
// }

// // o/p 2

// let arr1 = [1,2,3,4];
// let arr2 = arr1;
// arr2.push(2);

// if(arr1===arr2){
//     console.log(true);
// }else{
//     console.log(false);
// }


// arrays with const 

const arr = [1,2,3,4];
// arr = [3,4,5]; // error can'nt assign to const
// console.log(arr); 

arr.push(3);
console.log(arr);



