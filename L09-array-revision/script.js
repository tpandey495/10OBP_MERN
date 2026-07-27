// push -> used for inserting an item at the end 
// pop -> delete the last  item
// shift -> delete firs item
// unshift ->  add element at the start
// slice  -> return the specified(start to end(excluded)) part of the array
// splice -> can be used for insertion and deletion
// return array of  the deleted items


//
// let arr = [1,2,3,4];
// console.log(arr.slice(0,2));// 1 2 
// console.log(arr) //  1 2 3 4


// splice
// let arr = [1,2,3,4];
// console.log(arr.splice(1,1)); [2]
// console.log(arr); // [1 3 4] 


// let arr = [4,5,9,8,7];
// arr.splice(2,2,11,12);
// console.log(arr); //[4,5,11,12,7]

// for( let index in arr){

// }

// for(let item of arr){

// }


// reverse an array
let arr = [1,2,3,4];
// [5,4,3,2,1]

let n = arr.length;
for(let i =0;i<arr.length/2;i++){
    // swap arr[i]  arr[n-i-1]
    let temp = arr[i];
    arr[i] = arr[n-i-1];
    arr[n-i-1] = temp;
}

console.log(arr);








