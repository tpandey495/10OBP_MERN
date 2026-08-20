// let students = [
//   {
//     name:"Brijesh",
//     age:20,
//     address:{
//         city:"Pune"
//     }
//   },
//   {
//     name:"Akash",
//     age:20,
//     address:{
//         city:"Delhi"
//     }
//   },
//   {
//     name:"Mahesh",
//     age:30,
//     address:{
//         city:"Pune"
//     }
//   }
// ]

// // group by city 
// // let obj ={
// //   "Pune":["Brijesh","Mahesh"],
// //   "Delhi":["City"]
// // }

// let res={};
// for(let student of students){
//      let city= student.address.city;
//      let name = student.name;
//      if(city in res){
//           res[city].push(name);
//      }else{
//         res[city]=[name];
//      }
// }


// console.log(res);


// find the largest and second largest number 
// let arr = [1,5,4,5,3];

// -1000<=arr[i]<=1000

// let largest  = -Infinity;
// let secondLargest = -Infinity;

// for(let i=0;i<arr.length;i++){
//     if(arr[i]>secondLargest){
//         if(arr[i]>largest){
//             secondLargest=largest;
//             largest=arr[i];
//         }else{
//             secondLargest=arr[i];
//         }
//     }
// }

// console.log(largest,secondLargest);


 
let arr = [1,1,1,1,2,4,4,5,3,3,3];
// find the second most frequent item in the array 
let freq = {};

for(let i=0;i<arr.length;i++){
    if(arr[i] in freq){
      freq[arr[i]]=freq[arr[i]]+1;
    }else{
        freq[arr[i]]=1;
    }

}

let largestVal=0;
let secondLargestVal = 0;

let freqKey = 0;
let secondFreqKey =0;

for(let key in freq){
    let value = freq[key];
    if(secondLargestVal<value){
        if(largestVal<value){
            secondLargestVal =largestVal;
            largestVal=value;
            secondFreqKey = freqKey;
            freqKey = key;
        }else{
            secondLargestVal = value;
            secondFreqKey = key;
        }
    }
}

console.log(secondFreqKey);





