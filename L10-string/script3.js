
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


// replace(searchValue,replaceWith) ->
// return new string after replace first 
// occureance of the search value with replacewith

// let str = "validate";
// console.log(str.replace('l','e'));

// let str = "Hello world!";
// console.log(str.replace("Hello","world"));

// replaceAll 
// let str = "Hello world! Hello";
// console.log(str.replaceAll("Hello","world"));

// let str = "Hello";
// console.log(str.replaceAll("l","g"));

//  given a string split the string in to array of words 
// let str = "this world is so much polluted";
// res = ["this","world","is","so","much","polluted"];


//split(seperator,limit) -> limit-> 
// Split a string into substrings using the 
// specified separator and return them as an array.

// let str="check";
// let result = str.split('');
// console.log(result); //


//split(seperator,limit) -> 
// Split a string into substrings using the 
// specified separator and return them as an array.

//limit-> limit the no of element return in the array

// let str="check";
// let result = str.split('');
// console.log(result); [ 'c', 'h', 'e', 'c', 'k' ]

// let str = "this world is so much polluted";
// // res = ["this","world","is","so","much","polluted"];
// let res=str.split(" ");
// console.log(res);

// given a string find no of space 
// let str = "this world is so much polluted ";

// function countSpace(str){
//     let count=0;
//     let res=str.split("");
//     for(let i =0;i<res.length;i++){
//         if(res[i]==' ')
//             count++;
//     }
//     return count;
// }


// console.log(countSpace(str));


// print first two words of the string 
// let str = "this world is so much polluted ";
// console.log(str.split(" ",2));

// reverse the string 
// let str = "this world is so much polluted ";
//     // polluted much so is world this
//  let words = str.split(" ");

//  let rev = words[words.length-1];
//  for(let i=words.length-2;i>=0;i--){
//     rev += " "+words[i];
//  }

// console.log(rev);


// join(separator)  -> converted array in to string 
// and joined based on seperator
// default seperattor  is comma

// let res= ["Hello","is","this","Abhishek"];
// console.log(res.join());

// let res= ["Hello","is","this","Abhishek"];
// console.log(res.join(" "));


// reverse the string 
// let str = "this world is so much polluted";
// // polluted much so is world this
// let words = str.split(" ");
// words.reverse();
// console.log(words.join(" "));


// trim -> trim the space from beginning and end from a string 

// let str = " check ";
// console.log(str.trim());

// trimStart() -> remove the space from start of the string 
// let str =" check "
// console.log(str.trimStart());

// trimEnd() -> remove the space from the last 

// let str = " check ";
// console.log(str.trimEnd()); 

// padStart(targetLength,padString) -> 
// add pad string in the start of  string untill
// it is  equal to target length
// let str = "check";
// console.log(str.padStart(8,"a")); // aaacheck

// let str = "check";
// console.log(str.padStart(10,"aa")); //aaaaacheck 


// padEnd(tartgetLength,padString) ->
//  if the targetlength is smaller than the string length no character is added. 
// let str = "eck";
// console.log(str.padEnd(1,"ing")); //eck

// console.log(str.padEnd(5,"ing")); //eckin


// ASCII code -> American code for information interchange (0-127)
// digit(0,9) -> 48 - 57
// alphabets(A-Z) -> 65 - 90
// alphabets(a-z) -> 97 - 122
// symbols() -> 
// control() ->

// a- 97
// b- 98
// d- 100

// A- `65`
// B- 66
// C- 67

// a-97
// b-98
// c-99
// d-100
// e-101
// f-102
// g-103
// - charCodeAt() , fromCharCode()
// console.log("A".charCodeAt()); // 65
// console.log("g".charCodeAt()); //103



































