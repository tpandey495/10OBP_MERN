// unary operator -> works on single operand
// given a variable a increment it by 1
// using assignment
// let a =10;
// a=a+1;
// console.log(a); //11

// using compound assignment
// let a =10;
// a+=1;
// console.log(a);

// using post increment
// let a =10;
// a++;
// console.log(a); //11

// let  b=10;
// console.log(b++); //10


// let a = 10;
// console.log(a+a++); // 20

// let b = 10;
// b++;
// console.log(b++); //11
// console.log(b);  //12

// o/p->
// let  a;
// a++;
// console.log(a); //NaN

// let a;
// a++;
// a=0;
// console.log(a); //0

// decrement a number by 1
// let b =10;
// b=b-1;
// console.log(b); //9

// let b=10;
// b-=1;
// console.log(b);

// post decrement
// let b=10;
// console.log(b--); //10
// console.log(b); //9

// let b =9;
// b--;
// console.log(b++); //8
// console.log(b); //9

// let a =5,b=9;
// console.log(a+++b+b--); // 23


// let a = 2 ,b= 4;
// a++;
// console.log(a+b); //7


// pre increment and pre decrement
// let a =10;
// console.log(++a); //11

// let b =9;
// console.log(--b); //8

// let a = 8;
// let b = 2; 
// console.log(++a+b--) // 11

// loop
// print hello world 5 times
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");

// for loop
// while loop
// do while loop

// for(let i =1; i<= 5;i++){
//     console.log("Hello world");
// }


// intialization
// condition
// code 
// update 


// question print 1 to 5
// for(let i=1;i<=5;i++){
//     console.log(i);
// }

// print * 10 times
// *********

//printing stars in new line

// for(let i=1;i<=10;i++){
//     console.log("*");
// }

// printing in the same line

// let str = "";
// for(let i=1;i<=10;i++){
//     str+="*";
// }

// console.log(str);


// while loop


// while(condition){
//     // code
// }


// let i =0;
// while(i<5){
//     console.log(i);
//     i++;
// }

//  find the sum of the numbers from 1 to n using for and while loop both;
// let n =5;

// for 
// let sum = 0;
// for(let i= 1;i<=n;i++){
//     sum+=i;
// }
// console.log("for",sum);

// while loop
// let res =0,i=1;
// while(i<=n){
//     res+=i;
//     i++;
// }

// console.log("while",res)
// 

// let ans=(n*(n+1))/2;
// console.log("formula",ans);


// print all the even numbers from 1 to 10 using for and while loop


// for(let i=1;i<=10;i++){
//    if(i%2==0)
//      console.log(i);
// }

// print 3 table
// 3*1=3
// 3*2=6



// 3*10=30


// for(let i=1;i<=10;i++){
//     console.log(3*i);
// }

//o/p-

// i=2;
// while(i>1){
//     console.log(i);
//     i++;
// }

// o/p 2->

// for(;;){
//     console.log("hello");
// }


// find the sum of all the digit of a number
// let n = 451;
// sum-> 10
// let sum=0;
// while(n!=0){
//     let last_digit=n%10;
//     sum+=last_digit;
//     n=Math.floor(n/10);
// }
// console.log(sum);

//H.W
// q.1
//. given a number count digit 
// let n = 1002;
// count = 4;

// q.2
// given a number find the product of it's digit
// let n= 123;
// product = 6

// q.3
// reverse a number
// let n = 421;
// reverse = 124


// o/p-

for(let i=0;i<3;){
    console.log(i++); //0 1 2
}

for(let i=0;i<3;){
    console.log(++i);  // 1 2 3
}
