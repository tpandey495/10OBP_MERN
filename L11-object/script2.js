//
// objects 

// let person = {
//    name:"Abhishek",
//    age:10,
//    printName(){
//      console.log("name of the person is",name)
//    }
// }

// console.log(person.name); // Abhishek

// console.log(person.age); // 10

// console.log(person.gender); // undefined

// console.log(person.printName());

// let person = {
//    name:"Abhishek",
//    age:10,
//    printName(){
//      console.log("name of the person is",name)
//    }
// }


// let key = "name";

// console.log(person.key);// undefined 

// console.log(person[key]);


// Dyanmic Key -> use [] bracket for dyanmic key
// given key and value as variable create a object of it.
// let key1 = "name";
// let key2 = "age";
// let value1 = "Abhsihek";
// let value2 = 10;


// let person = {
//     [key1] : value1,
//    [ key2] : value2
// }

// console.log(person);


// // Adding property 

// let person = {
//     name : "Abhishek",
//     age : 10,
// }

// // gender male 

// // add peroperty using dot notation
// person.gender = "male";

// // add proeprty using [] bracket 
// person["city"] = "Pune";

// // 
// let key = "pincode";

// person[key] = 140413;

// console.log(person);

//update
// let person = {
//     name : "Abhishek",
//     age : 10,
// }

// person.age = 20;
// person["age"] = 20;
// console.log(person);

// delete
// let person = {
//     name : "Abhishek",
//     age : 10,
// }

// delete person.age;
// console.log(person);



// let person = {
//     firstName:"Abhishek",
//     lastName:"Mahajan",
//     age:10,
//     city:"Pune",
// }

// //  delete lastName proeprty 
// // update age to 30 
// // add one property hometown with value mysore
// delete person.lastName;
// person.age = 30;
// person["hometown"] = 'mysore';
// console.log(person);

// key can'nt be duplicate.

// for in loop

// let person = {
//     name: "Abhishek",
//     city: "Delhi",
//     age: 10,
//     gender:"male"
// }

// for(let key in person){
//     console.log(key); // name city age
// }

// //  predict the output
// for(let value in person){
//     console.log(value); // name city age 
// }

// print all the value of object along with key 
// name Abhishek 
// city Delhi 
// age  10
// for(let key in person){
//     console.log(key,person[key]);
// }


// q.1 
// count no of key in an object

// let person ={
//     name:"Abhishek",
//     age:20,
//     designation: "SDET",
//     salary: 25000,
//     city: "Pune"
// }

// let count = 0;
// for(let key in person){
//       count++;
// }

// console.log(count);


// q2 
// let person ={
//     name:"Abhishek",
//     age:null,
//     designation: null,
//     salary: 25000,
//     city: null
// }


// no of keys which have some value 
// let count =0;
// for(let key in person){
//     if(person[key] != null)
//      count++;
// }

// console.log(count);


// check if a key exist in object or not 
let person = {
    name: "Abhishek",
    age: 10,
    gender: "Male",
    salary:0 
}

let check = "salary";

//approach 1 -> not good approach fails when the value of key is falsy
// if(person[check]){
//     console.log("key exist");
// }else{
//     console.log("not exist");
// }

// approach 2
// function hasKey(){
//     for(let key in person){
//         if(key == check){
//             console.log("Key exist in the object");
//             return;
//         }
//     }
//     console.log("Key bdoes'nt exist");
// }

// hasKey();

// approach 3
// in 
console.log(check in person);


// approach 4-> hasOwn
console.log(Object.hasOwn(person,check));



// approach 5

console.log(person.hasOwnProperty(check));















