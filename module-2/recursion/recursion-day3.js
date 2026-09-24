// // print prime number from 1 to n

// // return true when no is prime otherwise false.

// // Helper function
// // function isPrime(i,num){
// //     if(i==num)
// //       return true;

// //     if(num%i==0)
// //      return false;

// //     return isPrime(i+1,num);
// // }


// // function print(){
// //     let n=20;
// //     for(let num=2;num<=n;num++){
// //         if(isPrime(2,num)){
// //             console.log(num);
// //         }
// //     }
// // }

// // print();


// // array reverse using recursion 
// // let arr =[5,4,6,2,1];

// // function reverse(left,right,arr){
// //     if(left>=right)
// //      return;
// //     // swap;
// //     let temp=arr[left];
// //     arr[left]=arr[right];
// //     arr[right]=temp;
// //     reverse(left+1,right-1,arr);
// // }


// // reverse(0,arr.length-1,arr);

// // console.log(arr);

// // t.c-> O(n)
// // s.c-> o(n)

// //tail recursion -> 
// // head recursion -> 
// // Tree Recursion 

// // Tree Recursion 

// // 1 1 2 3 5 8

// function fibo(n){
//     if(n==1 || n==2)
//      return 1;
//     return fibo(n-1)+fibo(n-2);
// }

// console.log(fibo(5));


// T.c-> o(2^n)
// S.c -> o(n)

// 


let arr = [1,2,3];

// powerset 


function subset(i,arr,res){
    if(i==arr.length){
        console.log(res);
        return;
    }
    // take 
    res.push(arr[i]);
    subset(i+1,arr,res);
    // not take 
    // res.pop();
    subset(i+1,arr,res);

}


subset(0,arr,[]);

// T.C -> o(2^n)
// S.C -> o(n)





