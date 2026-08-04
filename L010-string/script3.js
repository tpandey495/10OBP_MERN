
// startsWith(subString,position) -> 
// return true if string starts with given 
// substring starting from the position otherwise false

// let str = "Hello";
// console.log(str.startsWith("He")); // true


// let str = "Check";
// console.log(str.startsWith("ec")); // false 

//
// let str = "check";
// console.log(str.startsWith("ec",2));

// given a string count no of substring starting with ec 

// let str = "ecoecaec";

// let count =0;
// for(let i=0;i<str.length;i++){
//     if(str.startsWith("ec",i)){
//         count++;
//     }
// }

// console.log(count);



//  endsWith(substring,length) -> 
// return true if string ends with given substring otherwise false.
// length ->  

// let str = "Check";
// console.log(str.endsWith("eck"));

// let str = "manoi";
// console.log(str.endsWith("io"));

// given a filename with extension check if it is a  pdf format 
// let str = "info.pdf";
// console.log(str.endsWith(".pdf"));

// let str = "checking";
// console.log(str.endsWith("eck",5));

// let str = "nano";
// console.log(str.endsWith("no",3)); //false
// console.log(str.endsWith("an",3)); //true


// slice and substring 

// slice(starts,end) -> return the substring starting from start to end(excluded);
// default starts-> 0
// default end-> length 

// let str= "validate"; 
// console.log(str.slice(3)); // idate 
// console.log(str.slice(0)); // validate 

// slice supports negative index 

// let str = "check";
// console.log(-2); // ck

// find all the substring of length 2
// let str = "validate";

// function findSubstring(){
//     for(let i =0;i<str.length-1;i++){
//        console.log(str.slice(i,i+2));
//     }
// }

// findSubstring();


// o/p 

// let str = "check";
// console.log(str.slice(2,0));

// substring(start,end) -> return substring from start to end (excluded);
// start default-> 0
// end default-> length 

// let str = "Hello";
// console.log(0,2); //He 

// differnce bw slice and substring 

// slice _> supports negative index 
// substring -> does'nt support negative index 
// slice -> start>end return nothing 
// substring -> start>end it swaps them 

// let str = "Hello";
// console.log(str.substring(2,0));//He


// toUpperCase -> converts all the chracter in uppercase return new string.
// toUpperCase -> converts all the chracter in lowercase return new string.

// capitalize first letter of a string 

// let str = "abhishek";
// console.log(str.slice(0,1).toUpperCase()+str.slice(1));

//  convert the middle character in uppercase
// let str = "chec";
// let mid = Math.floor(str.length/2);
// console.log(str.slice(0,mid)+str[mid].toUpperCase()+str.slice(mid+1));

// in case of even length string -> 
// convert  first middle in to uppercase 
// and incase of odd convert the middle one 

let str = "check";

let mid = (str.length%2==0)?str.length/2-1:Math.floor(str.length/2);

console.log(str.slice(0,mid)+str[mid].toUpperCase()+str.slice(mid+1));
































