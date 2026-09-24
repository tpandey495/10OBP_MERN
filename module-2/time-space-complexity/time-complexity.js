// Time complexity -> describe how the no of operation changes when input 
// size change Time.


// Example 1:-
// for(let i=0;i<n;i++){

// }

// no of iteration -> n
// time complexity-> o(n)


// Example 2:

// for(let i=0;i<n;i++){
//     for(let j=0;j<n;j++){

//     }
// }

// no of iteration -> o(n^2)
// time complexity-> o(n^2)


// Example 3:-

// for(let i=0;i*i<n;i++){

// }

// T.c-> sqrt(n)



// for(let i=0;i<n;i++){
//     for(let j=0;j<i;j++){

//     }
// }


// T.C -> o(n^2)


// for(let i=0;i<100000;i++){

// }

// T.c-> o(1)


// while(n!=1){
//     n=n/2;
// }

// T.c -> o(log2(n))



// Asymptotic Notation ->

// Omega() -> Best Case
// Theta() -> Average 
// Big Oh -> worst case


// given an array  find if the target exist or not.

// let arr = [4,1,8,2,3,6];
// let target=3;


// function linearSearch(arr,target){
//     for(let item of arr){
//         if(item == target)
//           return true;
//     }
//    return false;
// }

// console.log(linearSearch(arr,target));

// Best Case ->o(1) (when item is at first Index)
// Average Case-> O(n)
// Worst Case-> O(n) (when item is at last Index)




// space complexity-
// extra memory required by an algorithm when input size changes.


// let k=1;
// let k1=2;
// let k2=3;

// 100 variables 

// s.c-> o(1)


// 
// function reverse(input){
//     let arr=[];
//     for(let i=input.length-1;i>=0;i--){
//         arr.push(input[i]);
//     }
//     return arr;
// }

// T.c -> o(n) n-> input size 
// s.c-> o(n) n-> input size 

//


// o(1)<o(logn)<o(sqrt(n))<o(n)<o(n^2)<o(n^3) 


// Binary Search -> 
//   -> searching 
//   -> moslty work on sorted array 

// let arr = [1, 2, 10, 11, 13];
// let target =11 ;

// function binarySearch(arr,target){
//     let l=0,r=arr.length-1;
//     while (l <= r) {
//         let mid = Math.floor((l + r) / 2);
//         if (arr[mid] == target)
//             return true;
//         else if (arr[mid] > target) {
//             r = mid - 1;
//         }
//         else {
//             l = mid + 1;
//         }
//     }
//     return false;
// }

// console.log(binarySearch(arr,target));

// T.c->
// Best Case-> o(1) // when the item is middle one
// Average case-> o(log2(n))
// worst case-> o(log2(n))

// S.c-> o(1)


// Akash and Prem and is working for a big ecommerce company and 
// company have inventory of 10^16 prodcuts and asked prem and Akash 
// to design a search functionality.Akash  come with a 
// seaching alogrithm that takes o(n) while Prem have designed in o(log2(n))
// Calculate time  taken by both alogirthm in worst case. 
// if 10^8 operation can be performed in one second.

n=10^16
// alogirthm 1 -> o(n)
// no of operation=10^16 
//  1sec = 10^8 operation
1 op = 1/10^8 sec
10^16 op= 10^16/10^8
   = 10^8 sec
   = 3 year

// alogirthm 2 -> o(log2(n))
// no of operation = log2(10^16)
op of operation = 53
1 sec = 10^8 op
1op = 1/10^8 sec 
53 op = 53/10^8 sec 
= 53*10^-8 sec 
=0.53*10-6sec
=0.53 microsecond 




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








