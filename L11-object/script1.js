//charCodeAt(),fromCharCode()

//charCodeAt(index?;)  -> reuturn unicode value fo a character
// for space charCode is 32
// default Index is zero

// console.log('A'.charCodeAt());

// console.log(" ".charCodeAt());

// console.log("ABC".charCodeAt());
// console.log("ABC".charCodeAt(1));
// digit(0 to 9) -> 48- 57
// alphabets(a-z) -> 97 - 122
// alphabets(A-Z) -> 65-90
// control statment->


// fromCharCode() -> return character from its unicode value.
// 65 -> A
// console.log(String.fromCharCode(65));
// console.log(String.fromCharCode(98));


//practice problem 
// print the alphabets from b to f
//bcdef
// console.log("bcdef");

// let start = 98;
// let end = 103;
// let str ="";
// for(let i=98;i<103;i++){
//     str+=String.fromCharCode(i);
// }
// console.log(str);

// from the chracter in reverse order 
// from G to A

// let end  = 65;
// ABCDEFG
// let start = 71;
// let str = "";
// for(let i=start;i>=end;i--){
//     str+=String.fromCharCode(i);
// }
// console.log(str);


// // 
// str = "tiger is running";
// gninnur si regit

//Approach 1
// let rev = "";
// for(let i=str.length-1;i>=0;i--){
//     rev+=str[i];
// }
// console.log(rev);

// Approach 2
// let res = str.split('');
// let revArr = res.reverse();
// console.log(revArr.join(""));

// let res = str.split('');
// console.log(res.reverse().join(""));
// console.log(str.split('').reverse().join(""));



//
// let str = "tiger is running";
//         //  "regit  si gninnur"
// let words = str.split(" ");

// for(let i =0;i<words.length;i++){
//    words[i]=words[i].split("").reverse().join("");
// }

// console.log(words.join(" "));


// objects-> 
//  object is collection of properties and method of related data.

// let  student = {
//     "key":value,
//  }

// let student ={
//     name:"Akash",
//     class:"Btech 1s sem",
//     age:20,
//     branch:"cse"
// }


// let student = {
//     name:"Akash",
//     class:"Btech 1s sem",
//     age:20,
//     branch:"cse",
//     findAge(){
//         console.log(age);
//     }
// }

// create a object chair and store important properties of it.

// object literal
// let chair ={
//     type : "office char",
//     price: "5000",
//     color: "grey",
//     manufacturer: "comfort chair"
// }

// console.log(chair);

// student 
// method inside object 
// let student = {
//     name:"Abhishek",
//     batch:"10OBP",
//     printName(){
//         console.log(student.name);
//     }
// }

// console.log(student);


// key of object 
// let student = {
//     name:"Abhishek",
//     batch:"10OBP",
//     printName(){
//         console.log("student name is ",student.name);
//     }
// }

// // accessing key 
// // dot notation 

// // console.log(student.name);

// // // batch 
// // console.log(student.batch);
// // student.printName();

// // Bracket notation 
// // console.log(student.name);
// console.log(student["name"]);
// console.log(student["batch"]);
// student["printName"](); // function invocation using bracket notation


//key is given as variable
// let person = {
//     person1:"Abhishek",
//     person2:"Dinesh",
//     person3:"karthik"
// }

// let p = "person1";
// console.log(person.p);
// // console.log(person["p"]);
// console.log(person[p]); //"Abhishek"

// predict the output

// let person = {
//     name:"Abhishek",
//     age:10
// }

// console.log(person.gender); //undefined


// 
// let person ={
//     name:"Abhishek",
//     age:19,
// }

// //if person is greater than 18  
// //print eligible otherwise person is not eligible 
// console.log(person.age>18?"eligible":"not eligible");


// create a function inside object and if age is greate than 18 print eligible
// otherwise not eligible
let person = {
    name:"Abhishek",
    age: 17,
    isEligible(){
        console.log(person.age>18?"eligible":"not eligible");
    }
}

person.isEligible();




