// array destructuring

// let [a,b,c] =[1,2,3,4];
// console.log(a,b,c);


// rest operator -> Group multiple values in an array
// let [a,...arr]= [1,2,3,4,5];
// console.log(arr);


// function parameter


// function findSum(...arr){
//     let sum =0;
//     for(let i =0;i<arr.length;i++){
//         sum += arr[i];
//     }
//     return sum;
// }

// console.log(findSum(1,2,3,4));
// console.log(findSum(1,2,3));



// arr.flat()
// Returns a new array with all sub-array 
// elements concatenated into it 
// recursively up to the specified depth.

// let arr = [1,2,2,3,[1,2,3,4]];
// console.log(arr.flat(1));


// let arr = [1,2,3,[4,5,[6,7]]]
// console.log(arr.flat(1));

// console.log(arr.flat(2));

// let arr = [1,2,3,[4,5,[6,7,[8,9]]]]

// console.log(arr.flat(3));

// string -> sequence of character
// string literal-> ('',"",``)
// string is primitive data types.


// let str = "Tech";
// console.log(str);

// let str1 = 'Teach';
// console.log(str1);

// let str2 = `Teaching`;
// console.log(str2);

// Number letter, Symbol  special character  and space.

//  let str = " ";
// console.log(str);

// let str = " check";
// console.log(str);

// empty string 
// let str = "";
// console.log(str);

// let a = "123";
// console.log(a);

// access character from string 
// let str = "check";
// console.log(str[0]);
// console.log(str[2]);

// // charAt 

// console.log(str.charAt(2));

// predict the output
// console.log(str[5]);


// length of the string
//length

// console.log(str.length);

// template literal -> 
// string that is create using backtics instead of  
// double quote and single quote is template literal.
// let s = `His name is Akrit`;
// console.log(s);

// use cases
// string iterpolation 
// let age = 20;
// let str = `Average age of the class is ${age}`;
// console.log(str);

// q1
// given a string str print the value 
//of the variable marks inside the string

// let marks = 90;
// let str = `MY score is ${marks}.`;
// console.log(str);


// immutability 
// let arr = [1,2,2,3];
// arr[2] =5;
// console.log(arr);
// string 

// let str = "Check";

// str[2] ='t';

// console.log(str);

// string concatenation
// let str = "abc";
// let str1 = "12";
// console.log(str+str1);

// predict the output
// let str1 = "123";
// let str2 = "546";
// console.log(str1+str2); 

// let str1 = "abc";
// let str2 ="";
// console.log(str1+str2);

// concatenate space 
// let str1 = "abc";
// let str2 =" ";
// console.log(str1+str2);


//  Type Coercion:- 
// manaual Tyep Coercion 
// Automatic Type Coercion-> 
// one data type is converted to another  
// automatically by compiler

// string + Number -> Number is converted to string 
// let a ="123";
// let b =12;
// console.log(a+b); 12312

// predict the output
// let a = 12;
// let b ='12345';
// console.log(a+b); // 1212345-> 


// string - Number -> String is converted to number

// let a = 123;
// let b = "11";
// console.log(a-b); // 112

//predict the output
// let a = "abc";
// let c = "12";
// console.log(Number(a)); //Nan
// console.log(a-c); //Nan

// console.log(a+c); // abc12


// Number * string -> string is converted to number
// let a = 12;
// let b = "5";
// console.log(a*b); //60

// predict the output
// let a = "12";
// let b = "5";
// console.log(a*b); //60
// console.log(a-b); //7

// Number/string -> string is converted to number
// let a = 10;
// let b = "5";
// console.log(a/b); //2

// // string with boolean
// console.log("abc"+true);  //abctrue 

// console.log("123"+true); //123true


// console.log("123"-true); //122

// console.log("123"-"ab"); //NAN

//  string with undefined
// console.log(d+"abnc");
// var d;
 
// let str ="check";
// for(let i =0;i<str.length;i++){
//     console.log(str[i]);
// }

// let str = "checka";

// function reverseString(str){
//     let rev='';
//     for(let i = str.length-1;i>=0;i--){
//         rev+=str[i];
//     }
//    return rev;
// }

// console.log(reverseString(str));


// str1 = man 
// str2 = ual 
function equalHalf(str){
    let n = str.length;
    let str1 = "";
    let str2 = "";
    let firstHalf=(n%2==0)?n/2:n/2-1;
    let secondHalf = Math.floor(n/2);
    // first half
    for(let i=0;i<firstHalf;i++){
        str1 += str[i];
    }
    // second half
    for(let i=secondHalf;i<n;i++){
       str2 += str[i];
    }
    // console.log("first part",str1);
    // console.log("second part",str2);
    return str1+" "+str2;
}

console.log(equalHalf("Manual"));
console.log(equalHalf("Tunal"));







