
// print array in reverse order
// let arr = [1,2,3,4,5,6];

// for(let i = arr.length-1;i>=0;i--){
//     console.log(arr[i]);
// }

//  print array in reverse order using while loop

// let arr = [1,2,3,4,5,6];
// let i = arr.length-1;
// while(i>=0){
//     console.log(arr[i]);
//     i--;
// }

//  print index of all the items of the array 

// let arr = [1,2,3,4,5];

// let i = 0;
// while(i<arr.length){
//     console.log(i);
//     i++;
// }

//  approach 2  using for loops 


// approach 3
// for(let index in arr){
//     console.log(index);
// }

// print items using for in loop
// for(let index in arr){
//     console.log(arr[index]);
// }


//  print items
// for(let elem of arr){
//     console.log(elem);
// }

// get items
// let arr = [3,4,5,6];
// console.log(arr[2]);

// update items
// arr[2] = 10;
// console.log(arr);

// insert a item at the end of the array

// push(item) -> append the item at the end of the array 
// and return new length of the array
// let arr = [3,4,5,6];
// console.log(arr.push(8));
// console.log(arr);
// pop()->

// let arr = [1,2,3,4];

// console.log(arr.pop());

// console.log(arr);

// let arr = [];

// console.log(arr.pop());  // undefined

// console.log(arr); // []


// unshift -> insert an item at the start;

// let arr = [4,3,2,1];

// console.log(arr.unshift(5));

// console.log(arr);

// shift  -> remove the first item from the array and return it.

// let arr = [2,1,4,6];

// console.log(arr.shift());

// console.log(arr);


// o/p 1-

// let arr = [2,4,5,6];

// arr.shift();
// arr.unshift(6);

// arr[3]=9;

// arr.push(7);

// console.log(arr);

//  o/p 2-

// let arr = [2,4];

// arr.shift();
// arr.push(5);
// arr.pop();
// console.log(arr.pop());

// console.log(arr.push(8));

// console.log(arr);


// rotate an array by k place
// let arr = [4,5,2,1];
// let k =3;

// 1st rotation ->
//      [1,4,5,2]
// 2nd rotation->
//      [2,1,4,5]
// 3rd opeation
//    [5,2,1,4]

// one rotation 
// for(let i =0;i<k;i++){
//     let last_elem = arr.pop();
//     arr.unshift(last_elem);
// }

// console.log(arr);


// slice(start?:,end?:) 
// it return the part of the array  
// from start index to end index (excluded)


// let arr = [1,2,3,4,5];
// console.log(arr.slice(0,3));


// let arr = [1,2,3,4,5];

//  console.log(arr.slice(1,3));  [2,3]

// end is not passed
// defualt end = arr.length 
// console.log(arr.slice(2));  // [3,4,5]

// // start is not passed

// // default start = 0
// console.log(arr.slice()); // [1,2,3,4,5]


// splice

// splice(start,deleteCount?,...items)
// Removes elements from an array and, if necessary,
//  inserts new elements in their place, returning 
//  the deleted elements.


// let arr = [1,2,3,4];
// arr.splice(1,2);

// console.log(arr); [1,4]

// delete two items from the start
// let arr = [1,2,3,4,5];
// arr.splice(0,2);
// console.log(arr); // [3,4,5]




// remove two 2 and 3 from the start and insert 8 and 9
// let arr = [2,3,4,5,4];
// arr.splice(0,2,8,9);
// console.log(arr);

//  delete 3 from the array and insert 10 in the place of 3
// let arr = [9,7,3,4,2];

// arr.splice(2,1,10);
// console.log(arr);


// insert two items 3 and 4 after 9
let arr = [9,7,3,4,2];

arr.splice(1,0,4,3);

console.log(arr);
