// comparison operator (==, ===, !=, !==, <, >, <=, >=)

// == (Loose equality)
// compare only value 
// datatype is not compared

// type coercion-> when two values of different data datatypes are compared 
// one is automatically converted another.

// console.log(2 == 2); //true

// // string with number -> string is converted to number
// console.log(2=="2"); // true

// // Line 1
// console.log(1234 == "1234"); //true

// //Line 2
// console.log(0==""); // true

// boolean with some other type
// boolean converted to number

// console.log(true == 1); // true

// console.log(true == 2); //false

// console.log(0==false); //true

// console.log("1"==false); // false

// console.log("1"==true); //true


//Line 1
// console.log(a==a) 

//line 2
// console.log("sk"=="sk"); // true

// console.log(534==534.0); //true


// strict equality ===
// it checks data type and value both
// console.log("1"===1); // false
// console.log(true === 1); // false

// console.log(true == true) // true

// != loose not equal to 
// -> only checks value if they are equal then true otherwise false

// console.log(1!=1); //false

// console.log(1!="1"); //false

// console.log(1!=2); //true

// console.log(true != 0); //true

// console.log(false != 1); // true


// !== strict not equal to
// data type and value both

// console.log(1!==2); //true

// console.log(1!==true); //true

// console.log("1"==true); //true


// qustion 1:-

// let ans = 2!=="2";
// console.log(ans); // true

// less than <
// console.log(3<2); // false

// console.log(5<7); //true

// console.log(5<true); //false

// console.log(5<"45"); //true

// // greater than 

// console.log(4>2);  //true
// console.log(6>"8") // false

// less than or equal to(<=)

// console.log(2<=5) //true

// console.log(5<=5); // true

// console.log(3<=1); //false

// greater than or equal to(>=)
// console.log(5>=2); // true
// console.log(5>="6") // false

// console.log(5>=true); //true

// ouput 
// let a = 1>=2;
// console.log(a); // false

// truthy falsy value
// in javascript every value can be converted in to truth or false(Boolean Types);

// falsy type
//0
// false
// ""
// undefined 
// null
// Nan

// console.log(Boolean(0)); //false
// console.log(Boolean(null)); //false
// console.log(Boolean("")); // false
// console.log(Boolean(-0)); //false
// console.log(Boolean(false)); //false

//truthy type
/ / / true

//Logical Operators  (&&, || , !)
// And operator (&&)

//  a&&b-  only true if both a and b is of type true.

// And opeator return first false value if no false present returns the last truth value

// console.log(2&&3); //3
// console.log(0&&2); //0

// console.log([]&&{}); //{}

// console.log(6 && 5 && undefined ); //undefined 

// console.log(3 && 2 && 8); //8


// console.log(3 && 5 && null && 9); // null

// or operator
// returns the first truth value and if there is no truth value so it return last false value

// console.log(2 || 0 ) // 2

// console.log(0 || 2) // 2

// console.log({} || 0 || false); //{}

// console.log(false || 0 || undefined); // undefined


// ! operator
// true -> false
// false -> true

// console.log(!false); // true

// console.log(!true); //false

// console.log(!{}); //false

// console.log(!1) //false

// //Line 1 

// console.log(!(2 && 3)) //false

// //Line 2
// console.log({} && ![]); // false

// //Line3
// console.log(2 && 3 || 4); // 3


// short circuit-> when a expression contain logical opeator like &&,|| then we stop the evaluating the 
// expression once result is known.


// let ans = 2 && 0 && 3 && 4;
// console.log(ans);  //0


// let ans = 2 || 0 || 3 && 4;
// console.log(ans); //


//conditional Statement(if else statement)
// if(//condition){
// // write  code here

// }
// else{
//   // write code here
// }

//given a age variable if age is greater than 18 print 
// eligible other wise print not eligible
// let age = 17;
// if(age>18){
//     console.log("Eligible");
// }else{
//     console.log("Not Eligible");
// }

// given a  variable n if it's even then print even otherwise odd

// let n = 18;
// if (n % 2 == 0) {
//     console.log("even");
//     console.log("Even");
// }
// else
//     console.log("odd");

// given a number if it's negative print negative number
//  and if it's is postive number print positive number
// and if it is zero print zero

// approach 1
// let a = 0;
//  if(a>0){
//     console.log("number is positive");
//  }
//  if(a==0){
//     console.log("number is zero");
//  }
//  if(a<0){
//     console.log("number is negative");
//  }

// approach 2
// if(// condition 1){
//    // excuted when condition 1 is true
// }
// else if(//condition 2){
//    // excuted when condition 2 is true && condition is false
// }
// else{

// }

// let a =0;
// if(a>0){
//     console.log("no is positive");
// }
// else if(a<0){
//     console.log("no is negative")
// }
// else{
//     console.log("no is zero");
// }

//  give marks of the student 
// marks > 90-> grade A+
// 80<= marks < 90->grade A
// 70<=marks<80->grade B+
// 60<=marks<70->grade B
// marks<60 ->  fail
// let marks = 70;
// if(marks>90){
//     console.log("grade A+")
// }
// else if(80<=marks && marks<90){
//   console.log("grade A");
// }
// else if(70<=marks && marks <80){
//     console.log("grade B+");
// }
// else if(60<=marks && marks<70){
//     console.log("grade is B");
// }
// else{
//     console.log("fail");
// }

// // print name of day's for 
// // 1st day -> sunday
// // 2nd day -> Monday 
// // so on
// // given a variable day having value from 1 to 7 and show the name of the day

// // if(day==1){
// //     console.log("sunday");
// // }
// // else if(day==2){
// //     console.log("monday");

// // }
// // else if(day == 3){
// //     console.log("tuesday");
// // }



// // else{
// //     console.log("saturday");
// // }

// // nested if 
// // so if a person is only eligible to drive if he is greater 
// // 18 year old having valid driving licesce.
// // so print eligible to drive if is eligible otherwise not eligible drive

// let age=20 , dl =false;
// // approach 1
// if(age>18){
//     if(dl==true){
//         console.log("elegible to drive");
//     }else{
//         console.log("not eligible to drive");
//     }
// }else{
//     console.log("not eligible to drive");
// }

// // approach 2
// if(age>18 && dl){
//     console.log("eligible to drive");
// }else{
//     console.log("not eligible to drive");
// }


// prdict the output
// let a =0 ,b=5;
// if(a || b){
//     console.log("works");
// }else{
//     console.log("not works");
// }

// if(a && b){
//     console.log("works");
// }else{
//     console.log("not works");
// }

// let marks =3;
// if(2< marks && marks<5){
//     console.log("marks is bw 2 and 5");
// }else{
//     console.log("marks is not bw 2 and 5");
// }

let marks =3;
if({} && ![] && "check" && marks){
    console.log("marks is bw 2 and 5");
}else{
    console.log("marks is not bw 2 and 5");
}