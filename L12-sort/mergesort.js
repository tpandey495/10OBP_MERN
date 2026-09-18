

let arr = [5,4,3,6,8];

function merge(l,mid,r,arr){
    let arr1 = arr.slice(l,mid+1);
    let arr2 = arr.slice(mid+1,r+1);

    let i=0,j=0;
    let n=arr1.length,m=arr2.length;
    let res=[];

    while(i<n && j<m){
        if(arr1[i]<=arr2[j]){
           res.push(arr1[i]);
           i++;
        }else{
            res.push(arr2[j]);
            j++;
        }
    }

    while(i<n){
        res.push(arr1[i]);
        i++;
    }
    while(j<m){
        res.push(arr2[j]);
        j++;
    }

   for(let k=0;k<res.length;k++){
      arr[l+k]=res[k];
   }
}

function mergeSort(l,r,arr){
      if(l>=r){
       return;
      }
      let mid = Math.floor((l+r)/2);
      mergeSort(l,mid,arr);
      mergeSort(mid+1,r,arr);
      merge(l,mid,r,arr);
}

mergeSort(0, arr.length-1, arr);


console.log(arr);

// Time Complexity-> o(nlog2(n)) in all cases 
// Space complexity -> o(n);