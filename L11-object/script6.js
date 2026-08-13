// // q1

// let persons=[
//     {
//        name:"Abhishek",
//        city:"Pune"
//     },
//     {
//        name:"Pavan",
//        city:"Pune"
//     },
//     {
//       name:"Hemant",
//       city:"Lucknow"
//     }
// ]

// // group by city 

// let res = {};
// for(let person of persons){
//   if( person.city in res){
//     res[person.city].push(person.name);
//   }else{
//     res[person.city]=[person.name];
//   }
// }

// console.log(res);


// question 2

// let persons=[
//     {
//        name:"Abhishek",
//        address:{
//         city:"Pune"
//        }  
//     },
//     {
//        name:"Pavan",
//        address:{
//         city:"Pune"
//       }
//     },
//     {
//       name:"Hemant",
//       address:{
//        city:"Lucknow"
//       }
//     }
// ]

// let res = {};
// for(let person of persons){
//   if( person.address.city in res){
//     res[person.address.city].push(person.name);
//   }else{
//     res[person.address.city]=[person.name];
//   }
// }

// console.log(res);


// Object Destructuring 

// let person = {
//     name:"Abhishek",
//     age:20,
//     city:"Pune"
// }
// extract name and age
// let {name,age} = person;
// console.log(name,age);

// renaming variable 
// let {name:firstName,age} = person;
// console.log(firstName,age);

// default value 
// let {name,age,gender="M"} =person;
// console.log(name,age,gender);

// rest operator 
// group multiple properties of the object 

// let {name,...rest} = person;
// console.log(name,rest);

//  function parameter 
// let user = {
//     name:"Abhishek",
//     age:20,
//     city:"Pune"
// }

// function print(user){
//     console.log(user.name,user.city)
// }

// print(user)

// function print({name,city}){
//     console.log(name,city)
// }

// print(user)

// copy one object to another 
// let person = {
//     name:"Abhishek",
//     city:"Pune"
// }

// let user = person; // asignment operator share the reference
// console.log(person,user);
// user.age =10;
// console.log(person);
// console.log(user==person); // comparison operator 
// // compare the reference 


// predict the output 2

// let person = {
//     name:"Abhishek",
//     city:"Pune"
// }

// let user = person;
// user.age =10;

// console.log(person.age);


//  spread operator -> 
// expand properties of one object to another.

// copy 
// let person = {
//     name:"Abhishek",
//     city:"Pune"
// }

// let user = {...person};
// user.age =10;

// console.log("user",user);

// console.log("person",person);

// 
// let person = {
//   name:"Abhishek",
//   age:10,
//   address:{
//     city:"Pune"
//   }
// }

// let user = {...person};

// user.gender ='M';

// user.address.pincode ='410413';
// console.log(person);


// spread operator creates shallow copy 
// Shallow copy-> copy the items of first level and share the 
// nested level

// user case of spread 

// copy 


// update 
// let person = {
//     name:"Abhishek",
//     age:20
// }

// let user = {...person,age:30};

// console.log(user);

// Add 

// let person = {
//     name:"Abhishek",
//     age:20
// }

// let user = {...person,gender:'M'};

// console.log(user);


// Deep Copy:- recursively copy all the item of one object 
// to another.No shared refernce.

// structuredClone

// let person ={
//     name:"Abhishek",
//     age:20,
//     address:{
//         city:"Pune",
//         pincode:"410413"
//     }
// }

// let user = structuredClone(person);

// console.log(user);

// predict the output

// let person ={
//     name:"Abhishek",
//     age:20,
//     address:{
//         city:"Pune",
//         pincode:"410413"
//     }
// }

// let user = structuredClone(person);

// user.address.state = "U.K";

// console.log(person);


// Linear Search 
let arr  = [4,5,6,9,8];
let target = 9;

function search(arr,target){
  for(let i=0;i<arr.length;i++){
    if(arr[i] == target)
       return true;
  }  
   return false;
}

console.log(search(arr,target));


// linear search 
let student = [
   {
      name:"Abhishek",
      class:9
   },
   {
      name:"Aakrit",
      class:10
   },
   {
     name:"Sandeep",
     class:12 
   }
];

target = "Aakrit"
