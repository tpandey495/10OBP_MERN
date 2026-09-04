// given  a square matrix 

// let mat = [
//            [1,2,3],
//            [4,5,6],
//            [7,8,9]
//          ]


// transpose=[
//     [1,4,7],
//     [2,5,8],
//     [3,6,9]
// ]


// for(let row=0;row<mat.length;row++){
//     for(let col=0;col<mat[0].length;col++){
//         // swap mat[row][col] mat[col][row]
//         if(row<col){
//             let temp=mat[row][col];
//             mat[row][col] = mat[col][row];
//             mat[col][row]=temp;
//         } 
//     }
// }

// console.log(mat);

// what if matrix is not square 
// let mat=[
//     [1,4,7,1],
//     [2,5,8,0],
//     [3,6,9,5]
// ]

// let transpose=[];

// for(let col=0;col<mat[0].length;col++){
//     let colsItems=[];
//     for(let row=0;row<mat.length;row++){
//          colsItems.push(mat[row][col]);
//     }
//     transpose.push(colsItems);
// }


// console.log(transpose);


// H.w rotate matrix clockwise by 90 degree
// rotate matrix 
//zig zag traversal(very easy)


//boundry traversal 
// let mat=[
//     [1,4,7,1],
//     [2,5,8,0],
//     [3,6,9,5]
// ]

// // 1 4 7 1 0 5 9 6 3 2


// let left=0,right=mat[0].length-1,
// top=0,bottom=mat.length-1;

// // left to right for top rows
// for(let k=left;k<=right;k++){
//     console.log(mat[top][k]);
// }
// top++;

// // top to bottom for right column
// for(let k=top;k<=bottom;k++){
//     console.log(mat[k][right]);
// }
// right--;

// // right to left for bottom row 
// for(let k=right;k>=left;k--){
//     console.log(mat[bottom][k]);
// }
// bottom--;
// // bottom to top for left column
// for(let k=bottom;k>=top;k--){
//     console.log(mat[k][left]);
// }
// left++;



// subarrays or substrings 
// let arr= [1,2,3,4];

// part of the array 
// item should be continuous(skip not allowed)
// order preserve

// find all the subarray of length 2 
// [1,2]
// [2,3]
// [3,4]


// let k=3;
// for(let i=0;i<arr.length-k+1;i++){
//     let subarray=[];
//     for(let j=i;j<i+k;j++){
//       subarray.push(arr[j]);
//     }
//     console.log(subarray);
// }


// given a string find all the substring of length k
// let str = "Akash";
// let k=2;


// find  total no of subarrays and print them 
let arr = [1,2,3];

let count=0;
for(let i=0;i<arr.length;i++){
    let subarray=[];
    for(let j=i;j<arr.length;j++){
       subarray.push(arr[j]);
       console.log(subarray);
       count++;
    }
}

console.log(count);



// total subarray count 











