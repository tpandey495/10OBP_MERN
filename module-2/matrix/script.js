// * * * * *
// *       *
// *       *
// *       *
// * * * * *

// let n=8;
// for(let row=1;row<=n;row++){
//     let str="";
//     for(let col=1;col<=n;col++){
//         if(row==1 || row==n || col==1 || col==n){
//            str+="* ";
//         }else{
//            str+="  ";
//         }
//     }
//     console.log(str);
// }


// 2d arrays 

// let arr = [
//           [1,2,3,4],
//           [6,7,8,8],
//           [9,10,11,12]
//         ];


// console.log(arr[0]);

// console.log(arr[1]);
// console.log(arr[2]);

// accessing item from 2d arrays 

// arr[row][col]

// console.log(arr[0][2]);

// console.log(arr[1][3]);

// no of rows 
// console.log(arr.length);

// // no of cols 
// console.log(arr[0].length);


// irregular 2d arrays 
// let arr=[
//     [1,2,3,4],
//     [2,3,4,5,6],
//     [7,8,9,10,11]
// ]

// console.log(arr);

// console.log(arr[1][4]);

// print all the items of the arr
// let arr = [
//           [1,2,3,4],
//           [6,7,8,8],
//           [9,10,11,12]
//         ];

// for(let row=0;row<arr.length;row++){
//     for(let col=0;col<arr[0].length;col++){
//         // console.log(row," ",col)
//          console.log(arr[row][col]);
//     }
// }


// irregular 2d array
// let arr = [
//           [1,2,3,4],
//           [6,7,8,8,9],
//           [9,10,11,12]
//         ];


// for(let row=0;row<arr.length;row++){
//     for(let col=0;col<arr[row].length;col++){
//          console.log(arr[row][col]);
//     }
// }


// find no of items in the 1st row 
// console.log(arr[0].length);

// // 2nd row items 

// console.log(arr[1].length);


// print the 2d array rowwise right to left 
// let arr = [
//     [1,2,3,4],
//     [5,6,7,8],
//     [9,10,11,12]
// ]

// for(let row =0;row<arr.length;row++){
//      for(let col=arr[row].length-1;col>=0;col--){
//          console.log(arr[row][col]);
//      }
// }


// 2d array 
// print the matrix rowwise(last to first) from left to right 
// let arr = [
//     [1,2,3,4],
//     [5,6,7,8,9],
//     [9,10,11,12]
// ];

// for(let row=arr.length-1;row>=0;row--){
//     for(let col=0;col<arr[row].length;col++){
//         console.log(arr[row][col]);
//     }
// }


//matrix 
// givan a sqaure matrix print the diagonal items 

let matrix = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [5,4,6,9]
];

// 1st approach
// for(let row=0;row<matrix.length;row++){
//     for(let col=0;col<matrix[0].length;col++){
//         if(row==col)
//           console.log(matrix[row][col]);
//     }
// }

// 2nd approach 
for(let row=0;row<matrix.length;row++){
    console.log(matrix[row][row]);
}








