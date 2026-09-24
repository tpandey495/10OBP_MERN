

// map and filter is higher order function 

// map()-> transformation
// return a new array after applying callback function to each item of the array.

// let arr = [4,5,2,8,9];

// function callback(item,index,arr){
//     console.log(item,index);
// }

// let newarr = arr.map(callback);



// // filter() -> used for filter 
// // return a new array consiting of items for which callback function return true.

// let arr = [4,5,2,8,9];

// function callback(item,index,arr){


// }

// let filteredarr= arr.filter(callback);







// const employees = [
//     {
//         employeeId: "EMP001",
//         name: "Aarav Sharma",
//         gender: "Male",
//         department: "IT",
//         jobTitle: "Software Engineer",
//         location: "Pune",
//         salary: 850000,
//         joiningDate: "2022-06-15",
//         experience: 4,
//         status: "Active"
//     },
//     {
//         employeeId: "EMP002",
//         name: "Ananya Patel",
//         gender: "Female",
//         department: "HR",
//         jobTitle: "HR Executive",
//         location: "Mumbai",
//         salary: 650000,
//         joiningDate: "2023-01-10",
//         experience: 3,
//         status: "Active"
//     },
//     {
//         employeeId: "EMP003",
//         name: "Rohan Mehta",
//         gender: "Male",
//         department: "Finance",
//         jobTitle: "Financial Analyst",
//         location: "Pune",
//         salary: 780000,
//         joiningDate: "2021-08-22",
//         experience: 5,
//         status: "Active"
//     },
//     {
//         employeeId: "EMP004",
//         name: "Priya Singh",
//         gender: "Female",
//         department: "IT",
//         jobTitle: "Senior Software Engineer",
//         location: "Bangalore",
//         salary: 1250000,
//         joiningDate: "2020-03-18",
//         experience: 6,
//         status: "Active"
//     },
//     {
//         employeeId: "EMP005",
//         name: "Kabir Joshi",
//         gender: "Male",
//         department: "Sales",
//         jobTitle: "Sales Executive",
//         location: "Delhi",
//         salary: 50000,
//         joiningDate: "2023-07-05",
//         experience: 3,
//         status: "Active"
//     },
// ];



// return a new array consiting of employee detials whose salary is greater 100000
// let filtereddata = employees.filter((employee)=>employee.salary>100000)
// console.log(filtereddata);


// return a new array consiting of employee names whose salary is greater 100000

// let filtereddata = employees.filter((employee) => employee.salary > 100000)

// let names = filtereddata.map((employee) => employee.name);
// console.log(names);


// method chaining
// let names = employees.filter((employee) =>
//     employee.salary > 100000)
//     .map((employee) => employee.name);


// console.log(names);



// reduce -> reduce is used to process the element of an array and reduce them 
// in to a single value.



// syntax of reduce 


// function callback(accum,curr){
     
// }

// let finalValue = arr.reduce(callback,intialValue);


// sum of all the items
// let arr = [4,5,6];

// function callback(accum,curr){
//     console.log(accum,curr);
//     return curr+accum;
// }

// let finalValue = arr.reduce(callback,0);

// console.log(finalValue);



// product of all the items


// function product(accum,curr){
//    return accum*curr;
// }


// let mul = arr.reduce(product,1);
// console.log(mul);


// const employees = [
//     {
//         employeeId: "EMP001",
//         name: "Aarav Sharma",
//         gender: "Male",
//         department: "IT",
//         jobTitle: "Software Engineer",
//         location: "Pune",
//         salary: 850000,
//         joiningDate: "2022-06-15",
//         experience: 4,
//         status: "Active"
//     },
//     {
//         employeeId: "EMP002",
//         name: "Ananya Patel",
//         gender: "Female",
//         department: "HR",
//         jobTitle: "HR Executive",
//         location: "Mumbai",
//         salary: 650000,
//         joiningDate: "2023-01-10",
//         experience: 3,
//         status: "Active"
//     },
//     {
//         employeeId: "EMP003",
//         name: "Rohan Mehta",
//         gender: "Male",
//         department: "Finance",
//         jobTitle: "Financial Analyst",
//         location: "Pune",
//         salary: 780000,
//         joiningDate: "2021-08-22",
//         experience: 5,
//         status: "Active"
//     },
//     {
//         employeeId: "EMP004",
//         name: "Priya Singh",
//         gender: "Female",
//         department: "IT",
//         jobTitle: "Senior Software Engineer",
//         location: "Bangalore",
//         salary: 1250000,
//         joiningDate: "2020-03-18",
//         experience: 6,
//         status: "Active"
//     },
//     {
//         employeeId: "EMP005",
//         name: "Kabir Joshi",
//         gender: "Male",
//         department: "IT",
//         jobTitle: "Developer",
//         location: "Delhi",
//         salary: 50000,
//         joiningDate: "2023-07-05",
//         experience: 3,
//         status: "Active"
//     },
// ];

// find total salary of the employees



// function findTotalSalary(accum,curr){
//     return accum+curr.salary
// }

// let totalSalary=employees.reduce(findTotalSalary,0);
// console.log(totalSalary);



// using arrow function 
// let totalSalary=employees.reduce((accum,curr)=>accum+curr.salary,0);
// console.log(totalSalary);


// // find no of employee in IT deparment 

// function employeesInIt(count,curr){
//     if(curr.department=="IT")
//       count++;
//     return count;
// }

// let total = employees.reduce(employeesInIt,0);
// console.log(total);


// find no of employees working in pune



 const employees = [
    {
        employeeId: "EMP001",
        name: "Aarav Sharma",
        gender: "Male",
        department: "IT",
        jobTitle: "Software Engineer",
        location: "Pune",
        salary: 850000,
        joiningDate: "2022-06-15",
        experience: 4,
        status: "Active"
    },
    {
        employeeId: "EMP002",
        name: "Ananya Patel",
        gender: "Female",
        department: "HR",
        jobTitle: "HR Executive",
        location: "Mumbai",
        salary: 650000,
        joiningDate: "2023-01-10",
        experience: 3,
        status: "Active"
    },
    {
        employeeId: "EMP003",
        name: "Rohan Mehta",
        gender: "Male",
        department: "Finance",
        jobTitle: "Financial Analyst",
        location: "Pune",
        salary: 780000,
        joiningDate: "2021-08-22",
        experience: 5,
        status: "Active"
    },
    {
        employeeId: "EMP004",
        name: "Priya Singh",
        gender: "Female",
        department: "IT",
        jobTitle: "Senior Software Engineer",
        location: "Bangalore",
        salary: 1250000,
        joiningDate: "2020-03-18",
        experience: 6,
        status: "Active"
    },
    {
        employeeId: "EMP005",
        name: "Kabir Joshi",
        gender: "Male",
        department: "IT",
        jobTitle: "Developer",
        location: "Delhi",
        salary: 50000,
        joiningDate: "2023-07-05",
        experience: 3,
        status: "Active"
    },
];


// find name of all the employee who is working in Delhi








