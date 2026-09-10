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
// clear -> to clear - o(n)
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

// map is implemented hash table.

// Time Complexity-> 
// Best -> o(1)
// Average -> o(1)
// Worst -> o(n)

// store the data of class in which there are n students  
// name and marks  of the student is given.  
// Design a efficient search functionality 
// to search the marks of the student by their name 

// n=5;
// let mp = new Map();
// mp.set("Abhishek",30);
// mp.set("Brijesh",40);
// mp.set("Ramesh",45);
// mp.set("Mahesh",35);
// mp.set("Akash",70);
// console.log(mp.get("Abhishek"));->o(1)


// iterating a map 

// for(let property of mp){
//     // console.log(property[0],property[1]);
//     console.log(property[0],property[1])
// }

// 

// for(let [key,value] of mp){
//   console.log(typeof(key),typeof(value));
// }

// let arr = [1,2,3,4,4,5,5];
// //  find frequency of each item '

// let mp = new Map();

// for(let item of arr){
//     if(mp.has(item)==false){
//         mp.set(item,1);
//     }
//     else{
//         let prevFreq=mp.get(item);
//         mp.set(item,prevFreq+1);
//     }
// }

// for(let [key,value] of mp){
//     console.log(key+" - ",value);
// }


// Time Complexity-> o(n)
// Space Complexity-> o(n)


// size-> o(1)
// console.log(mp.size)

// creating a map from array 

// let mp = new Map([
//     [1,2],
//     [2,3],
//     [4,5]
// ])

// for(let [key,value] of mp){
//     console.log(key,value);
// }

// key of the map can be anything 
// - Object 
// - Array 
// - String 
// - Number
// - Symbol


// Set -> store only keys
// key can'nt be duplicate 

// let st = new Set();

// add -> insert item  -> O(1)
// has -> check for the existnace of eky-> o(1)
// delete -> delete a key and return true if deleted successfuly-> o(1)
// size -> return size -> O(1)
// clear -> clear the set  ->O(n)

// Time Complexity -
// B.C-> o(1)
// A.C -> o(1)
// W.C -> o(n)

// st.add(1);
// st.add(2);
// st.add(3);
// st.add(4);


// // console.log(st);
// // console.log(st.size);

// // console.log(st.has(1)) 

// console.log(st.delete(3))
// st.clear();
// console.log(st);

// convert array in to set 
// let st = new Set([1,2,3,4])
// console.log(st);


// for(let item of st){
//     console.log(item);
// }

// print unique item of an array 

// let arr =[8,8,2,3,4,5,5,5];
// BruteForce

// let unique=[];

// for(let item of arr){
//     let isDuplicate = false;
//     // searching 
//     for(let i=0;i<unique.length;i++){
//         if(unique[i]==item){
//            isDuplicate=true;
//         }
//     }
//    if(isDuplicate==false)
//     unique.push(item);
// }

// console.log(unique);

// T.c -> o(n^2)
// s.c -> o(n)

// Optimized Approach
// set 


// let unique=new Set();

// for(let item of arr){
//     if(unique.has(item)==false){
//         unique.add(item);
//     }
// }

// // console.log(unique);

// for(let item of unique){
//     console.log(item);
// }

// T.c -> o(n)
// S.c->  o(n)


// given an array check if array contains duplicate.
// let arr = [1,2,2,4,5];

// BruteForce 


// function containDuplicates(arr){
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//               if(arr[i]==arr[j])
//                   return true;
//         }
//     }
//     return false;

// }

// console.log(containDuplicates(arr));

// T.c -> o(n^2)
// S.c-> O(1)

// Using Set 

// function containDuplicates(arr){
//     let st = new Set();
//     for(let i=0;i<arr.length;i++){
//         if(st.has(arr[i])){
//             return true;
//         }
//         st.add(arr[i]);
//     }
//     return false;
// }

// console.log(containDuplicates(arr));

// T.c -> o(n)
// S.c -> O(n)


// question 
let arr = [
    {
        name:"Akash",
        city:"Pune"
    },
    {
        name:"Prem",
        city:"Pune"
    },{
        name:"Mangal",
        city:"Delhi"
    },{
        name:"Ankit",
        city:"Lucknow"
    }
]

// group by city

// {
//     Pune:["Akash","Prem"],
//     Delhi:["Mangal"],
//     Lucknow:["Ankit"]
// }

let mp = new Map();

for(let p of arr){
    if(mp.has(p.city)==false){
         mp.set(p.city,[p.name]);
    }
    else{
       let names=mp.get(p.city);
       names.push(p.name);
       mp.set(p.city,names);
    }
}

console.log(mp);


// let arr1=[2,3,4,5];
// let arr2=[5,6,7,8];

// given two array print true if there is common item 
// otherwise false.


















