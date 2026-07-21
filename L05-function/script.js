//Check number is prime or not

// let n = 6;

// let flag = false;
// for(let i =2 ;i<=n-1;i++){
//     if(n%i==0){
//         flag = true;
//         console.log("No is not prime");
//         break;
//     }
// }

// if(flag == false)
// console.log("no is prime");

// break -> stop the excution of loop further
// continue -> skip the excution code that is wriiten after continue for that iteration

// do{

// }while(condition){

// }

// while 
// for 

// function
// function is reusable  piece of code.

// given two number a and b find the sum of it 

// approach 1
// let a = 10, b =20;
// console.log(a+b);

// approach 2
// function sum(a,b){
//    console.log(a+b);
// }

// sum(10,20);
// sum(30,40);

// function declaration

// function sum(// parameter){

// }
// sum(//argument)

//print
// function print(){
//   console.log("Hello World");
// }

// print();
// print();


// 

// function print(){
//     console.log("Hello I am Tarun");
// }

// print();

// better way
// given a user name print the message 
// "Hello i am ${username}"
// argument-> argument passed at time of function call
// parameter-> parameter are defined at the time of function decalartion

// function print(username){
//     console.log("Hello i am");
//     console.log(username);
// }

// print("Abhishek");
// print("Sooraj");

// multiple parameters

// function print(name,age){
//    console.log("My name is ",name);
//    console.log("My age is ",age);
// }

// print("Abhishek",25);

// predict output

// q1:-
// function print(name,age){
//    console.log(name); // Abhishek
//    console.log(age);  // undefined
// }

// print("Abhishek");  


//q2:-
// function print(name,age){
//    console.log(name); // 25
//    console.log(age);  // undefined
// }

// print(25);  

//  default parameter
// function print(name,age = 20){
//    console.log(name);  // Abhishek
//    console.log(age);   // 20
// }

// print("Abhishek");  

// predict the output

// q1:-
// function print(name,age = 20){
//    console.log(name);  // Abhishek
//    console.log(age);   // 30
// }

// print("Abhishek",30);  

// q2
// function print(name,age = 20){
//    console.log(name);  // Abhishek
//    console.log(age);   // 30
// }

// print("Abhishek",30,40);  

// create isEligible and return true if the 
// age is greater than 18 otherwise false

// approach 1
// let age = 20;
// function isEligible(){
//    if(age>18)
//      return true;
//    else 
//      return false;
// }

// console.log(isEligible());

// let ans = isEligible();
// console.log(ans);

// approach 2

// function isEligible(age){
//    if(age>18)
//      return true;
//    else 
//      return false;
// }

// console.log(isEligible(20));

// let ans = isEligible(30);
// console.log(ans);

//predict the output
// function differnece(a,b){
//     a-b;
// }

// console.log(differnece(1,2)) // undefined


// create a factorial and return the 
// facotrial of the given number from the
// function

// function fact(n){
//    let prod = 1;
//   for(let i=1;i<=n;i++){
//      prod*=i;
//   }
//   return prod;
// }


// console.log(fact(4));
// console.log(fact(6));


// create a function printEven and print all 
// the even numbers from 1 to n

// function printEven(n){
//     for(let i=1;i<=n;i++){
//         if(i%2==0)
//         console.log(i);
//     }
// }

// printEven(10);
// printEven(15)


// create a fucntion primeSum and that should 
// sum of the prime number in between 1 and  n

// return true if no is prime else false 
function isPrime(i){

}

function primeSum(n){
    let sum =0;
    for(let i=2;i<n;i++){
        if(isPrime(i)){
          sum += i;
        }
    }
    return sum;
}

console.log(primsSum(10));






