// binary search-> mostly works on sorted array 
// Best Case-> o(1)
// Average Case-> o(log2(n))
// Worst Case-> o(log2(n))


// let arr = [1,3,4,5,6]; 
// length -> 10^16

// linear search -> o(n)
// binary search -> o(log2(n))

// o(n) -> 10^8 seconds -> 10^16 comparison
// o(log2(n)) -> 0.5 microseconds -> 53 comparison


// let arr = [1,2,3,4,4,4,5,5]
// target=5 
// // find the first occuranc of target -> 3

// function binarySearch(arr,target){
//     let l=0,r=arr.length-1;
//     let ans=-1;

//     while(l<=r){
//         let mid = Math.floor((l+r)/2);
//         if(arr[mid]==target){
//             ans=mid;
//             r=mid-1;
//         }
//         else if(arr[mid]>target){
//             r=mid-1;
//         }
//         else{
//             l=mid+1;
//         }    
//     }

//     return ans;
// }

// console.log(binarySearch(arr,target));


// last occurance 


// function binarySearch(arr,target){
//     let l=0,r=arr.length-1;
//     let ans=-1;

//     while(l<=r){
//         let mid = Math.floor((l+r)/2);
//         if(arr[mid]==target){
//             ans=mid;
//             l=mid+1;
//         }
//         else if(arr[mid]>target){
//             r=mid-1;
//         }
//         else{
//             l=mid+1;
//         }    
//     }
//     return ans;
// }

// console.log(binarySearch(arr,target));

//  Lower Bound and Upper Bound - H.W 




