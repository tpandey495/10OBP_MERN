// Arrays of Objects 
// let libraries = [
//     {
//         name: "Accio",
//         location: "Baner",
//         books: [
//             {
//                 name: "Math",
//                 author: "R.D sharma"
//             },
//             {
//                 name: "Atomic Habit",
//                 author: "Robin Sharma"
//             },
//             {
//                 name: "Physics",
//                 author: "H.c verma"
//             },
//             {
//                 name: "Math",
//                 author: "R.D sharma"
//             },
//             {
//                 name: "English",
//                 author: "R.D sharma"
//             },
//         ]
//     },
//     {
//         name: "Accio",
//         location: "Delhi",
//         books: [
//             {
//                 name: "Math",
//                 author: "R.D sharma"
//             },
//             {
//                 name: "Atomic Habit",
//                 author: "Robin Sharma"
//             },
//             {
//                 name: "Physics",
//                 author: "H.c verma"
//             },
//             {
//                 name: "Math",
//                 author: "R.D sharma"
//             },
//             {
//                 name: "English",
//                 author: "R.D sharma"
//             },
//         ]
//     }
// ]


// print name of  the libraries

// for(let library of libraries){
//     console.log(library.name+" "+library.location);
// }


// 
// let arr = [1,2,2,3,3,3,4,5];

// // 1 -> 1
// // 2 -> 2
// // 3 -> 3 
// // 4 -> 1
// // 5 -> 1

// let freq = {};
// for(let elem of arr){
//   if(elem in freq){
//      freq[elem]=freq[elem]+1;
//   }else{
//      freq[elem] =1;
//   }
// }

// console.log(freq);


//
// let students = [
//     {name:"Abhishek",grade:"A"},
//     {name:"Rakhi",grade:"B"},
//     {name:"Naman",grade:"A"},
//     {name:"Raman",grade:"C"},
//     {name:"Chaman",grade:"B"}
// ]

// // group by grade
// let res = {}

// for(let student of students){
//     if(student.grade in res){
//          res[student.grade].push(student.name);
//     }else{
//         res[student.grade]=[student.name];
//     }
// }

// console.log(res);


// Object Destructuring
// extract the value of the object in to variables.


// let person = {
//     name:"Namn",
//     age:20
// }

// let {name,age} = person;

// console.log(name,age);

//rename the variable 

// let person = {
//     name:"Namn",
//     age:20
// }

// let {name:firstName,age:currAge} = person;

// console.log(firstName,currAge);

// default value 

// let person = {
//     name:"Namn",
//     age:20,
//     gender:"M"
// }

// let {name,age,gender="F"} = person;

// console.log(name,age,gender);

// rest operator-> group multiple value inside an object
// let person = {
//     name:"Naman",
//     age:20,
//     gender:"M"
// }

// let {name,...obj} = person;

// console.log(name,obj);


// predict the output

let person = {
    name:"Naman",
    age:20,
    gender:"M",
    city:"Pune"
}

let {name,age,...obj} = person;

console.log(name,age,obj);




