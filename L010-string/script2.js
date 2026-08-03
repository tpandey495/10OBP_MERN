// given a string check palindrome or not

// function revString(str){
//     let rev = "";
//     for(let i= str.length-1;i>=0;i--){
//         rev += str[i];
//     }
//     return rev;
// }

// let str = "rard";
// let rev = revString(str);

// if(rev== str){
//     console.log("Given String is palindrome");
// }else{
//     console.log("String is not palindrome");
// }


// for of
// let str = "check";
// for(let ch of str){
//     console.log(ch);
// }


// escape character and escape sequence

// escape character 

// console.log("Hello");
// "Hello"
// console.log(""Hello"");

// string literal -> '' "" ``
// console.log('"Hello"');
// console.log(`"Hello"`);

// console.log("He'llo")
// console.log(`He`llo`);



// escape character \
// console.log("hel\`lo")
// console.log(`Hlloe\``)

// // console.log("He`l"l'o")
// console.log(`He\`l\"l\'o`);

// escape sequence 
// Escape sequence is backslash followed by characer.

// \n -> new line
// \t -> tab 
// \r -> carriage 

// \n -> new line
// console.log("Hello\nworld");
// // \t -> tab 
// console.log("Hello\tworld");
// \r -> carriage 
// console.log("Helo\rcheck")
// console.log("check");

// store a multiline string 
// Hello 
// Abhishek

// let str = "Hello\nAbishek";
// console.log(str);

// let str =`Hello
// Abhishek
// `;
// console.log(str);


// string searching and manipulation 
// indexOf(searchChar,fromIndex?)
// Returns the position of the first 
// occurrence of a substring.
// let str = "check";
// console.log(str.indexOf('e'));


// let str = "Hello world";
// // return the index of first space 
// console.log(str.indexOf(" "));


//lastIndexOf(searchChar,index) - return the index of last occurrence
// let str = "Hello world";
// console.log(str.lastIndexOf('o'));

// includes()
// let str = "Check";
// console.log(str.includes('e'));

// let str = "check";
// console.log(str.includes('p'));

// startsWith(matchSequnce,position?) // default value of position =0

// let str = "Hello";
// console.log(str.startsWith("He"));
// console.log(str.startsWith("Hl"));


// console.log(str.startsWith("el",1));

//endsWith(matchSequnce,endposition)-> string end with given substring then return true
// otherwise false;

// let str = "hello";
// console.log(str.endsWith("lo"));
// console.log(str.endsWith("el",1));
// console.log(str.endsWith("he",1));
// console.log(str.endsWith("eh",1));


// slice ( start,end) -> return the part of the string from start to end(excluded);
// default end-> str.length
// strt -> 0
// let str = "check";
// console.log(str.slice(0,2));
// console.log(str.slice(0));

// slice -> supports negative index 
// let str = "check";
// console.log(str.slice(-2));

// let str = "check";
// console.log(str.slice(-3,-1));

// let str = "check";
// console.log(str.slice(2,1)); // start> end 

// substring(start?,end?)-return the part of the string from start to end(excluded);
// default end-> str.length

// let str = "check";
// console.log(str.substring(0,2));

// substring does'nt support negative indices 

//  start>end -> it automatically swaps them
// let str = "check";
// console.log(str.substring(2,1));


// toUpperCase() and toLowerCase()

// toUpperCase()-> return new string after 
//converting all the characters to to UpperCase
// toLowerCase -> return new string after
// converting all the characters to lower case 

// let str = "Check";
// // convert all the chracters to uppercase 
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// 
//abhishek
// convert first character 
// to Uperrcase and all the character smaller case
let str = "abhishek";
let newStr = str[0].toUpperCase()+str.slice(1).toLowerCase();
console.log(newStr);















