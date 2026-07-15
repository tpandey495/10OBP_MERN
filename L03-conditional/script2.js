// 12 months 
// month 1-> jan 
// month 2-> Feb

// if(day==1){
//     console.log("January");
// }
// else if(day==2){
//     console.log("Febuary");
// }

// else if (){

// }


// else{
//     console.log("not valid month");
// }

// switch and ternary
// switch

// let day =2;
// switch(day){
//  case 1:
//     console.log("Jan");
//     break;
//  case 2:
//     console.log("Feb");
//     break;
//  case 3:
//     console.log("March");
//     break;
//  case 4:
//     console.log("April");
//     break;
//  default:
//     console.log("Not a valid month");
// }

// switch case without break keyword
// let check=1;
// switch(check){
//     case 1:
//         console.log("1");
//     case 2:
//         console.log("2");
//     case 3:
//         console.log("3");
//     default:
//         console.log("default");
// }

// o/p->  1 2 3 default


// let check=2;
// switch(check){
//     case 1:
//         console.log("1");
//     case 2:
//         console.log("2");
//     case 3:
//         console.log("3");
//     default:
//         console.log("default");
// }

// disclaimer-> don't use switch condition without break keyword

//task 1:-
// if no is 1 or 2 then print no is either 1 or 2
// if no is 3 or 4 then print no is either 3 or 4

// let no =1;
// switch(no){
//     case 1:
//         console.log("no is either 1 or 2");
//         break;
//     case 2:
//         console.log("no is either 1 or 2");
//         break;
//     case 3:
//         console.log("no is either 3 or 4");
//         break;
//     case 4:
//          console.log("no is either 3 or 4");
//         break;
//     default:
//         console.log("invalid number");
// }



// when  need to perform same action on different values
// let no =4;
// switch(no){
//     case 1:
//     case 2:
//         console.log("no is either 1 or 2");
//         break;
//     case 3:
//     case 4:
//         console.log("no is either 3 or 4");
//         break;
//     default:
//         console.log("invalid number");
// }


// output question

//  strict equality-> condition are checked using strict equality
// let day ="2";
// switch(day){
//  case 1:
//     console.log("Jan");
//     break;
//  case 2:
//     console.log("Feb");
//     break;
//  case 3:
//     console.log("March");
//     break;
//  case 4:
//     console.log("April");
//     break;
//  default:
//     console.log("Not a valid month");
// }


// o/p 
// let day ="2";
// switch(day){
//  case "1":
//     console.log("Jan");
//     break;
//  case "2":
//     console.log("Feb");
//     break;
//  case "3":
//     console.log("March");
//     break;
//  case "4":
//     console.log("April");
//     break;
//  default:
//     console.log("Not a valid month");
// }
// o/p- feb


// let a =2;
// let b=1;
// switch(a+b){
//  case 1:
//     console.log("Jan");
//     break;
//  case 2:
//     console.log("Feb");
//     break;
//  case 3:
//     console.log("March");
//     break;
//  case 4:
//     console.log("April");
//     break;
//  default:
//     console.log("Not a valid month");
// }

// o/p-> march


// ternary 
// simplified version if else
//  given age if age is greate than 18 print eligible otherwise not eligible

// let age = 10;
// if(age>18){
//     console.log("eligible");
// }
// else{
//     console.log("not eligible");
// }

// approach 1
// let isEligible = age>=18?"Eligible":"Not Eligible";
// console.log(isEligible);

// // approach 2
// console.log(age>=18?"Eligible":"Not Eligible");


/// check no is even or odd
// let no = 5;
// console.log(no%2==0?"even":"odd");

// o/p based question

// let no = 5;
// console.log(no%2==0?console.log("even"):console.log("odd"));
// // odd undefined

// nested turnary condition
// if age is greate 18 and if person is hoolding dl then 
// print eligible to drive
// otherwise not eligible to drive


// if(age>18){
//     if(dl==true){
//         console.log("eligible to drive");
//     }
//     else{
//         console.log("not elieble to drive");
//     }
// }
// else{
//     console.log("not eligible to drive");
// }

// nested ternary
// let age = 19,dl=true;
// console.log(age>18?(dl==true?"Eligible to drive":
// "Not Eligible to drive"):
// "Not Eligible to drive")

// let age = 19,dl=true;
// console.log(age>18 && dl==true?"Eligible to drive":"Not Eligible to drive")

// o/p->

// string comparision-> strings compared lexicographically
// console.log("apple">"banana"); //false

// start comparing both the string from the first character to the last
// if at any point characters are not same then what ever the character comes
// later in  alphabets that string will be lexicographically larger
// if all the characters are same it means strings are same then lexicographically equal

// a

// console.log("apple">"able"); //true

// console.log("a"<"b") // true
// console.log("abbbbbcccccccccccc">"b")// false

// console.log("sun"==sun); // sun is not defined

// console.log("sun"=="sun"); //true

// let temp = "top";
// console.log(top>"tap"); // top is not defined

// let temp = "top";
// console.log(temp>"tap"); 


// given three variable storing number compare them and print the largest one 
let a =1,b=2,c=3;
// if else
// ternary 

console.log("A">"a");