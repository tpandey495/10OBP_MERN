// object of object 

// let school = {
//     name:"D.P.S",
//     location:"R.K Puram Delhi",
//     class:{
//         name: "9th",
//         students:40,
//         avgMarks:50
//     }
// };

// // using dot notation
// console.log(school.class.name);

// // using square bracket 
// console.log(school.class["name"])

// // 
// console.log(school["class"]["name"]);


// let key = "name";
// // name of the class 
// console.log(school.class[key]);

//update the avgmakrs of class 9th to 60
// school.class.avgMarks =60;
// console.log(school);

// school.class["avgMarks"]=60;
// console.log(school);

// // delete 
// // delete students  property from the obejct
// delete school.class.students;

// console.log(school);
// delete school["class"]["students"];


// // add avgHeight  property in the class object 

// school.class.avgHeight =40;
// console.log(school);


// object of array 


// let school = {
//     name:"D.P.S",
//     location:"R.K puram",
//     class:[
//        {
//          name:"9th",
//          avgMarks:40
//        },
//        {
//         name:"10th",
//         avgMarks:60
//        },
//        {
//         name:"11th",
//         avgMarks:70
//        }
//     ]
// }



// library(accio) and book
let library = {
    name:"Accio",
    location:"Baner",
    books:[
         {
            name:"Math",
            author:"R.D sharma"
        },
        {
         name: "Atomic Habit",
         author: "Robin Sharma"
        },
        {
           name:  "Physics",
           author:"H.c verma"
        },
        {
            name:"Math",
            author:"R.D sharma"
        },
       {
            name:"English",
            author:"R.D sharma"
        },
    ]
}


// print all the books of library accio with their author 

// console.log(library.books);

// for(let book of  library.books){
//     console.log(book.name+" - "+book.author);
// }

// add  publisher property to each book in the library

// for(let book of library.books){
//     book.pubisher="Hachette";
// }

// console.log(library);

// print name of all the books written R.D sharma

// for(let book of library.books){
//     if(book.author == "R.D sharma"){
//         console.log(book.name);
//     }
// }


// count no of books in the library 
// console.log(library.books.length);

// remove all the books from the library that is written by R.D sharma 


for(let i=0;i<library.books.length;i++){
    if(library.books[i].author == "R.D sharma"){
        library.books.splice(i,1);
       i--;
    }    
}


console.log(library);

// using for in loop (H.W)



