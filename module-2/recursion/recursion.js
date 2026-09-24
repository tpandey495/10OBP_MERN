// let arr1 = [1, 2, 3, 4];
// let arr2 = [5, 6, 7];


// function containsDuplicate(arr1,arr2) {
//     let st = new Set();
//     for (let item of arr2) {
//         st.add(item);
//     }

//     for (let i = 0; i < arr1.length; i++) {
//         if (st.has(arr1[i])) {
//             return true;
//         }
//     }

//     return false;
// }

// console.log(containsDuplicate(arr1,arr2));

// Time Complexity-> O(n+m)



// Recursion - function call itself.

// tail recursion 
// head recursion 
// tree recursion


// tail recursion- 


// print 1 to n using recursion 

// function print(n){
//     if(n==0)
//       return;
//     console.log(n);
//     print(n-1);
// }

// print(5);


// head recursion
// function print(n){
//     if(n==0)
//       return;
//     print(n-1);
//     console.log(n);
// }

// print(5);



// find the sum of 1 to n using recursion

// function total(n, sum) {
//     if (n == 0) {
//         console.log(sum);
//         return;
//     }
//     //    console.log(n);
//     sum += n;
//     total(n - 1, sum);

// }

// total(5, 0);


// find the factorial of a number using recursion 
// let n=5;
// approach 1
// function factorial(fact,n){
//     if(n==1){
//         console.log(fact);
//         return;
//     }
    
//     fact*=n;
//     factorial(fact,n-1);
// }

// factorial(1,5);

// approach 2

function factorial(n){
    if(n==1){
        return 1;
    }
    
    return n*factorial(n-1);
}

console.log(factorial(5));


// sum of digit 
// let n = 121;

// approach 1 
// function sumOfDigit(n,sum){
//   if(n==0){
//     console.log(sum);
//     return;
//   }
//   sum+=n%10;
//   sumOfDigit(Math.floor(n/10),sum)
// }

// sumOfDigit(n,0);

// approach 2
// function sumOfDigit(n){
//   if(n==0){
//     return 0;
//   }
 
//   return n%10+sumOfDigit(Math.floor(n/10))
// }

// console.log(sumOfDigit(n));

