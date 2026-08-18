
// arr.sort()->
//By default sort in lexicographical order 
//for custom order we can use comparator function

// let arr = [4,8,5,6,6,7];

// function comp(a,b){
//     return a-b;
// }

// arr.sort(comp);

// console.log(arr);


// question 1 

// let arr  = ["raman","ram","atul"];
// // sort it in acending order based on length of the words

// // ["ram","atul","raman"]
// function comp(a,b){
//     return a.length-b.length;
// }

// arr.sort(comp);

// console.log(arr);



// localeCompare()
// console.log(a.localeCompare(b)); 
// a is lexigraphically greater -> 1
// b is lexigraphicallly greater -> -1
// same string then -> 0



// let a = "apple";
// let b = "apble";

// console.log(a.localeCompare(b));

// predict the output
// let a = "fruits";
// let b = "fruit";

// console.log(a.localeCompare(b));
// console.log("ball".localeCompare("doll"));


// question 1 

// given an array of words sort it in reverse lexicographical order.
// let arr  = ["raman","ram","atul"];

// function comp(a,b){
//     return b.localeCompare(a);
// }

// arr.sort(comp);

// console.log(arr);

// sort it based on age and if age is equal sort it based on 
// lexicographical order of name 

// let students = [
//   {
//     name:"Abhishek",
//     age:30
//   },{
//     name:"akrit",
//     age:45,
//   },
//   {
//     name:"aansh",
//     age:45,
//   }
// ];


// function comp(a,b){
//   if(a.age==b.age)
//      return a.name.localeCompare(b.name);
//   else
//      return a.age-b.age;
// }

// students.sort(comp);

// console.log(students);

// short circuit -> stop the evaulation as soon as answer evaulated.


// or (||) -> return the first truthy value and if there is no 
// truthy value return the last falsy value.
// let a = 1 || 2 || 0;
// console.log(a);

// let a =  0 || false;
// console.log(a); // false

// && -> returns the first falsy value and if no falsy value is present 
// return the last truthy value .

// let a = 1 && 2 && 7;
// console.log(a); //7

 
//  console.log(Boolean("")); //false

// console.log(Boolean({})); //true
// console.log(Boolean([])); // true

// !

// console.log(!true);

// given a number of find no of digit in it 

// let n = 321;
// // -> 3

// let count=0;
// while(n>0){
//     n=n/10;
//     n=Math.floor(n);
//     count++;
// }

// console.log(count);


// 
// let n = 321

// let rev=0;
// while(n>0){
//     last_digit = n%10;
//     rev= rev*10+last_digit;
//     n=Math.floor(n/10);
// }

// console.log(rev);


// select random 5 words

// console.log(Math.random());

//generate number from 0 to 10 

// console.log(Math.floor(Math.random()*10))


// Intersting question 
let words = `Take the LiveChat 
tour and discover new ways to grow your business and 
increase customer satisfaction.Last digit
rev rev last digit
`;

let wordsArr=words.split(" ");


for(let i=0;i<5;i++){
   console.log(wordsArr[Math.floor(Math.random()*(wordsArr.length-1))]);
}



