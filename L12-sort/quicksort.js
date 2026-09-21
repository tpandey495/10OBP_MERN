

// let arr = [5,4,3,6,8];

// function merge(l,mid,r,arr){
//     let arr1 = arr.slice(l,mid+1);
//     let arr2 = arr.slice(mid+1,r+1);

//     let i=0,j=0;
//     let n=arr1.length,m=arr2.length;
//     let res=[];

//     while(i<n && j<m){
//         if(arr1[i]<=arr2[j]){
//            res.push(arr1[i]);
//            i++;
//         }else{
//             res.push(arr2[j]);
//             j++;
//         }
//     }

//     while(i<n){
//         res.push(arr1[i]);
//         i++;
//     }
//     while(j<m){
//         res.push(arr2[j]);
//         j++;
//     }

//    for(let k=0;k<res.length;k++){
//       arr[l+k]=res[k];
//    }
// }

// function mergeSort(l,r,arr){
//       if(l>=r){
//        return;
//       }
//       let mid = Math.floor((l+r)/2);
//       mergeSort(l,mid,arr);
//       mergeSort(mid+1,r,arr);
//       merge(l,mid,r,arr);
// }

// mergeSort(0, arr.length-1, arr);


// console.log(arr);

// Time Complexity -> Best Case -> o(nlog2n)
// Average Case -> o(nlog2n)
// Worst Case -> o(nlog2n)

// S.C-> o(n) 


// quick sort -> 

let arr = [5,4,6,7,1,2];

function paritionIndex(arr,l,high){
    let i=l,j=l;
    let pivot = high;

    while(j<high){
        if(arr[j]<=arr[pivot]){
            [arr[i],arr[j]]=[arr[j],arr[i]];
            i++;
        }
         j++;
    }

    [arr[i],arr[pivot]]=[arr[pivot],arr[i]];
   
    return i;
}

function quickSort(l,r,arr){
    if(l>=r)
      return;
    let index= paritionIndex(arr,l,r);
    quickSort(l,index-1,arr);
    quickSort(index+1,r,arr);
}

quickSort(0,arr.length-1,arr);



console.log(arr);

// Time Complexity-> 
// Best Case -> o(nlogn)
// Average Caee -> O(nlogn)
// Worst Case->   when array is already sorted 

// Space Complexity-> 
// worst case -> o(n)




























