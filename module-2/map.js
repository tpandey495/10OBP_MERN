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

// Map and Set 

// Map -> 
// map stores key and value pair.
// key is unique 
// preserver insertion order 


// creating map 
//  let mp  = new Map();

//  set get size clear remove
// set-> insertion and updation 
// get -> to access item 
// has-> key existance 
// clear -> to clear 
// delete -> remove the proeprty 

// maintain name and marks of a class
// let mp  = new Map();
// mp.set("Abhishek",30);
// mp.set("prem",35);
// mp.set("akash",32);


// // key can'nt duplicate

// mp.set("akash",40);
// console.log(mp);

// // mp.get(key) -> return the value 
// console.log(mp.get("akash"));

// // mp.has(key) -> return true if key present or false.
// console.log(mp.has("prem"));

// mp.delete(key)-> delete the key and return true 
// if key is deleted otherwise false

// console.log(mp.delete("prem"));
// console.log(mp);

// console.log(mp.delete("tarun"));

// mp.clear()
// mp.clear();
// console.log(mp);



















