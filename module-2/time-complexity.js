//spiral order traversal 
// let mat=[
//     [1,4,7],
//     [2,5,8],
//     [3,6,9]
// ]

//  // 1 4 7 1 0 5 9 6 3 2
// let left=0,right=mat[0].length-1,
// top=0,bottom=mat.length-1;

// while(top<=bottom || left<=right){
//     // left to right for top rows
//     for(let k=left;k<=right;k++){
//         console.log(mat[top][k]);
//     }
//     top++;

//     // top to bottom for right column
//     for(let k=top;k<=bottom;k++){
//         console.log(mat[k][right]);
//     }
//     right--;

//     // right to left for bottom row 
//     for(let k=right;k>=left&& top<=bottom;k--){
//         console.log(mat[bottom][k]);
//     }
//     bottom--;
//     // bottom to top for left column
//     for(let k=bottom;k>=top && left<=right ;k--){
//         console.log(mat[k][left]);
//     }
//     left++;
// }

// Time Complexity->
//  Time complexity describe how no of operation changes 
//  as input size changes.

// let n=7; //input 
// for(let i=0;i<n;i++){
//     console.log("Hello");
// }

// no of iteration-> 5
// no of iteration-> 7

// Time Complexity->o(n)

// let n=4;

// for(let i=0;i<n;i++){
//     for(let j=0;j<n;j++){
//         console.log("Hello");
//     }
// }

// no of iterationn n=2 -> 2^2
// no of iteration n=3-> 3^2
// no of iteration n=4-> 4^2


// no of iteration n=n-> n^2
// Time Complexity-> o(n^2)



// T.c
for(let i=0;i<n;i++){
    for(let j=0;j<i;j++){

    }
}

// T.c -> o(n^2)



for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
        for(let k=0;k<n;k++){

        }
    }
}

// T.c -> o(n^3)


for(let i=0;i*i<=n;i++){

}


// t.c-> (sqrt(n))


while(n!=1){
    n=n/2;
}

// T.c-> o(log2(n))

while(n!=1){
    n=n/10;
}

// T.c->log10(n)


// T.C 
for(let i=0;i<10000;i++){

}

// total no of iterations-> 10000
// T.c-> o(1)








