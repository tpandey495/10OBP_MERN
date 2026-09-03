// let mat = [
//     [1,2,3,4],
//     [5,6,7,8],
//     [9,10,11,12],
//     [13,14,15,16]
// ]


// //print the items of the matrix column wise 

// // 1 5 9 13 2 6 10 14 ---------

// for(let col=0;col<mat[0].length;col++){
//     for(let row=0;row<mat.length;row++){
//         console.log(mat[row][col]);
//     }
// }


// H.W. 

// let arr = [
//     [1,2,3,4],
//     [5,6,7,8],
//     [9,10,11,12,13],
//     [13,14,15,16]
// ]



// for(let col=0;col<mat[0].length;col++){
//     for(let row=0;row<mat.length;row++){
//         console.log(mat[row][col]);
//     }
// }


// print the boundry items of the matrix 
// let mat = [
//     [1,2,3,4],
//     [5,6,7,8],
//     [9,10,11,12],
//     [13,14,15,16]
// ]


// for(let row=0;row<mat.length;row++){
//     for(let col=0;col<mat[row].length;col++){
//         if(row==0 || row==mat.length-1 || col==0 || col==mat[row].length-1){
//              console.log(mat[row][col]);
//         }
//     }
// }


// find maxium element from matrix
// let mat = [
//     [1,2,3,4],
//     [5,6,14,8],
//     [9,10,11,12],
//     [13,13,0,9]
// ]


// let maxElem=-Infinity;
// for(let row=0;row<mat.length;row++){
//     for(let col=0;col<mat[row].length;col++){
//          if(maxElem<mat[row][col]){
//             maxElem=mat[row][col];
//          }
//     }
// }

// console.log(maxElem);


// find secondary diagonal 

//  given square matrix print the items of seconday diagonal
// let mat = [
//     [1,2],
//     [5,6]
// ]

// for(let row=0;row<mat.length;row++){
//     for(let col=0;col<mat[row].length;col++){
//         if(row+col==mat.length-1)
//           console.log(mat[row][col]);
//     }
// }

// print the items of the secondary diagonal from bottom to top 

// let mat = [
//     [1,2,3],
//     [5,6,9],
//     [8,10,9]
// ]

// for(let row=mat.length-1;row>=0;row--){
//     for(let col=0;col<mat[row].length;col++){
//         if(row+col==mat.length-1)
//           console.log(mat[row][col]);
//     }
// }


// transpost matrix 

// square matrix 

let mat = [
    [1, 2, 3],
    [5, 6, 9],
    [8, 10, 9]
]


// transpose=[
//     [1,5,8],
//     [2,6,10],
//     [3,9,9]
// ]


for (let row = 0; row < mat.length; row++) {
    for (let col = 0; col < mat[row].length; col++) {
        //  mat[row][col] mat[col][row]
        if (row < col) {
            let temp = mat[row][col];
            mat[row][col] = mat[col][row];
            mat[col][row] = temp;
        }

    }
}

console.log(mat);












