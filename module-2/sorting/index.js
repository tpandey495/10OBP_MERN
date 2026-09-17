// Sorting 

// let arr = [5,4,3,2];

// function comp(a,b){
//     return b-a;
// }

// arr.sort(comp);

// console.log(arr);


// Sorting alogrithms - comparison based 
// selection sort 
// bubble sort 
// insertion sort 
// merge sort 
// quick sort


// Selection Sort -> pick minimum from 
// unsorted part and start placing it from the start.

// let arr = [5,4,1,2];


// for(let i=0;i<arr.length-1;i++){
//     let minIndex = i;
//     let minItem = arr[i];
//     for(let j=i+1;j<arr.length;j++){
//          if(arr[j]<minItem){
//             minIndex=j;
//             minItem=arr[j];
//          }
//     }
    
//     // swap 
//     let temp=arr[i];
//     arr[i]=arr[minIndex];
//     arr[minIndex]=temp;
// }

// console.log(arr);


// Time Complexity-> o(n^2)-> in all the cases 
// Space Complexity -> o(1)
// stable -> 


// Bubble Sort -> 
// let arr = [1,2,3,4,5];

// for(let i=0;i<arr.length-1;i++){
//     let isSwapped = false;
//     for(let j=0;j<arr.length-i-1;j++){
//         if(arr[j+1]<arr[j]){
//             isSwapped = true;
//             let temp = arr[j];
//             arr[j]=arr[j+1];
//             arr[j+1]=temp;
//         }
//    }
//    if(isSwapped==false){
//     break;
//    }
// }

// console.log(arr);


// T.c-> 
// Best Case ->  o(n)(when array is already sorted)
// Average Case-> o(n^2)
// Worst Case -> o(n^2)
// Bubble Sort -> o(1)
// stable-



// sort the array in descending order using bubble sort and 
// selection sort 


// selction sort 
// let arr = [5,4,1,2];


// for(let i=0;i<arr.length-1;i++){
//     let minIndex = i;
//     let minItem = arr[i];
//     for(let j=i+1;j<arr.length;j++){
//          if(arr[j]>minItem){
//             minIndex=j;
//             minItem=arr[j];
//          }
//     }

//     // swap
//    [arr[i],arr[minIndex]]=[arr[minIndex],arr[i]] 
// }

// console.log(arr);

// insertion sort ->
let arr =[4,3,1,6,7];
// [7,6,4,3,1]


for(let i=1;i<arr.length;i++){
    let key = arr[i];
    let j=i-1;
    while(j>=0 && key>arr[j]){
        arr[j+1]=arr[j];
        j--;
    }
    arr[j+1]=key;
}

console.log(arr);

// T.c -> 
// Best Case -> o(n) //when array is already sorted 
// Average Case-> o(n^2)
// Worst Case -> o(n^2)

// Space Complexity-> O(1)
// stable 














