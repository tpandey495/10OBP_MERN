//

// object literal 

// let person = {
//   firstName : "Abhishek",
//   lastname : "kumar",
//   printName(){
//     console.log("Name is Abhishek");
//   }
// }

// console.log(person.firstName);

// person.printName();

// let key = "firstName";

// console.log(person[key]);

//update 

// person.firstName = "Gagan";
// person["firstName"] = "Gagan";
// console.log(person);


// delete 
// delete person.firstName;
// console.log(person);
// delete person["firstName"];
// console.log(person);

// person.gender = "male";
// console.log(person);


// dynamic key 

// let key1 = "firstName";
// let key2 = "lastName";
// let value1 = "Abhishek";
// let value2 = "Patil";

// let obj = {
//    [key1]:value1,
//    [key2]:value2
// }
// console.log(obj);


// 

// let obj ={
//     person1:"Abhishek",
//     person2:"Yash",
//     person3:"Manak",
//     greet(){
//         cnsole.log("hello there")
//     }
// }

// for(let key in obj){
//     console.log(key);
// }


// print value
// for(let key in obj){
//     console.log(obj[key]);
// }

// Note1: internally key of oject is converted to string.
//Number can be the key 

// types of key 
// let obj = {
//     1:"person1",
//     2:"person2"
// }

// console.log(obj);

// console.log(typeof(obj[1]));


// expression can be the key of the object.
// let obj = {
//     [1+2]:"person3",
//     [1+3]:"person4"
// }

// console.log(obj);


// obj as key 

// let key = {};
// let obj = {
//     [key]:2
// }
// console.log(obj);


// predict the output

// let obj = {
//     firstName:"Abhishek",
//     firstName:"Suresh"
// }

// console.log(obj);

// example 2
// let key = {};
// let key2 = {firstName:"abhishek"};

// let obj = {
//     [key]:2,
//     [key2]:3
// }

// console.log(obj);

// It is not recommened to use object as key of obj.

// let key = [];
// let key2 = [1,2];

// let obj = {
//     [key]:2,
//     [key2]:3
// }

// console.log(obj);
//  array is converted to string.


//

// find frequency of each item in the array
// 1-> 1
// 2->1
// 3->1
// 4->1
// 5-> 2

// let target=5,count=0;
// for(let i=0;i<arr.length;i++){
//     if(arr[i] == target)
//      count++;
// }
// console.log(count);

//
// let arr=[1,2,3,4,4,5,5,5];
// let freq = {};
// for(let i=0;i<arr.length;i++){
//     if(arr[i] in freq == false){
//         freq[arr[i]] = 1;
//     }
//     else{
//         freq[arr[i]] = freq[arr[i]]+1;
//     }
// }

// console.log(freq);


// Object.keys(obj) -> it return keys of the 
//  as an array

// let obj = {
//     name:"Abhishek",
//     gender:"Male",
//     city:"New Delhi"
// }

// console.log(Object.keys(obj));


// /// find no of keys in an object
// let obj = {
//     name:"Abhishek",
//     gender:"Male",
//     city:"New Delhi"
// }

// let arr = Object.keys(obj);

// console.log(arr.length);


//Object.values() -> returns an array of values .
// let obj = {
//     name:"Abhishek",
//     gender:"Male",
//     city:"New Delhi"
// }

// console.log(Object.values(obj));

//H.w 
// Object.entries()

//Object of Object 

let person = {
    firstName:"Akash",
    lastName:"Pathadiya",
    address:{
        city:"Pune",
        state:"Maharashtra",
        pincode:404131
    }
};

// access 
// console.log(person.firstName+" "+person.address.city);

//update 
// update the pincode to 410413
// person.address.pincode = 410413;
// person.address["pincode"] = 410413;
// console.log(person);

// delete 
// delete person.address.state;
// console.log(person);


// add 
// addd houseNo proerpty inside address
person.address.houseNo = "43";
console.log(person);



