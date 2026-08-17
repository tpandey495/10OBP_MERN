// let students = [
//    {
//      name:"Shravan",
//      attendence:"50%",
//      makrs:35,
//      totalMarks:70
//    },
//    {
//      name:"Himanshu",
//      makrs:40,
//      attendence:"70%",
//      totalMarks:90,
//    },
//    {
//      name:"Manak",
//      marks: 50,
//      attendence:"60%",
//      totalMarks:100
//    }
// ];

// student should have more than 55% attendence and scored at least
// 50% makrs are passed. print an array consisting of the names of the 
// passed student.


// let passed = [];
// for(let student of students){
//     let percentageMakrs = student.marks/student.totalMarks*100;
//     if(percentageMakrs>=50 && student.attendence>"55%"){
//        passed.push(student.name);
//     }
// }

// console.log(passed);

// string comparison -> strings are compared lexicographically(ASCII);

// let str1 = "125";
// let str2 = "50";

// console.log(str1>str2) // false

// let str1 = "Apple";
// let str2 = "Apble";
// console.log(str1>str2);


// let str1 = "Check";
// let str2 = "Chuck";
// console.log(str1>str2); //false


// let str1 = "Check";
// let str2 = "check";
// console.log(str2>str1); //true 

// console.log("A">"5"); // true 

// console.log("@">"B");


// sort() -> sort method is used for sorting  array.
// -> sort method sort the items in lexicographical order 
// comparator function with help comparator function we can customize the 
// the sort function


// let arr = [5,4,8,1,0];
// arr.sort();
// console.log(arr); //[0,1,4,5,8]

// let arr = ["Raman","Shayam","Abhishek"];
// arr.sort(); 
// console.log(arr); //[ 'Abhishek', 'Raman', 'Shayam' ]


// predict the output 
// let arr = [12,5,4,0,11];
// arr.sort();
// console.log(arr); // [0,11,12,4,5]


// - now we don't to sort the number in lexicographically and we want to sort 
// in acending order

//  a-b for ascending order 
//  b-a for descending order 

// function comp(a,b){
//    return a-b; // ascending  order 
// };

// let arr = [12,5,4,0,11];
// arr.sort(comp);
// console.log(arr); // [0,11,12,4,5]


// given an array sort in descending order
// let arr = [12,5,4,0,11];

// function comp(a,b){
//    return b-a;
// }

// arr.sort(comp);
//  console.log(arr); // [ 12, 11, 5, 4, 0 ]


// understanding parameter of comp function

// sort the array by marks
// let arr = [{marks:12},{marks:5},{marks:4},{marks:0},{marks:11}];

// function comp(a,b){
//     return a.marks-b.marks;
// }

// arr.sort(comp);
//  console.log(arr);


// sort the array by descending order of their age 

// let persons = [
//       {
//         name:"Abhishek",
//         age:20
//       },
//       {
//         name:"Naman",
//         age:21
//       },
//       {
//         name:"Shravan",
//         age:19
//       },
//        {
//         name:"John",
//         age:19
//       }
// ]

// function comp(a,b){
//     return b.age-a.age;
// }
// persons.sort(comp);

// console.log(persons);

// // sort the array by descending order of their age  and if age is 
// equal sort it based on lexicographical order of their name;


// let persons = [
//       {
//         name:"Abhishek",
//         age:20
//       },
//       {
//         name:"Naman",
//         age:21
//       },
//       {
//         name:"Shravan",
//         age:19
//       },
//        {
//         name:"John",
//         age:19
//       }
// ]

// function comp(a,b){
//     if(a.age== b.age){
//         // sort in lexicographical order of their nmae 
//         // return a.name>b.name;
//     }else{
//         return b.age-a.age;
//     }
// }

// personns.sort(comp);


// toLocaleCompare 


let students = [
      {
        name:"Abhishek",
        marks:30,
        age:20
      },
      {
        name:"Naman",
        marks:40,
        age:21
      },
      {
        name:"Shravan",
        marks:40,
        age:19
      },
       {
        name:"John",
        marks:20,
        age:19
      }
]

// sort students array based on marks and 
// if marks are  equal sort it based 
// on age  in ascending order 

function comp(a,b){
    if(a.marks == b.marks)
       return a.age-b.age;
    else
       return a.marks-b.marks;
}

students.sort(comp);

console.log(students)
