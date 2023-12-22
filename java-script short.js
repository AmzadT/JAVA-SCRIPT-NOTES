// # Javascript Sort

// By default, the `sort()` method sorts the array elements in ascending order with the smallest value first and largest value last.

// The `sort()` method casts elements to strings and compares the strings to determine the orders.

// Consider the following example:

// ```jsx
// let numbers = [0, 1 , 2, 3, 10, 20, 30 ];
// numbers.sort();
// console.log(numbers);

// ```

// The output is:

// ```
// [ 0, 1, 10, 2, 20, 3, 30 ]
// ```

// In this example, the `sort()` method places 10 before 2 because the string “10” comes before “2” when doing a string comparison.

// To fix this, you need to pass a compare function to the `sort()` method. The `sort(`) method will use the compare function to determine the orders of elements.

// The following illustrates the syntax of the `sort()` method:

// ```jsx
// array.sort(comparefunction)
// Code language: CSS (css)
// ```

// The `sort()` method accepts an optional argument which is a compare function that compares two elements of the array.

// If you omit the compare function, the `sort()` method sorts the elements with the sort order based on the Unicode code point values of elements as mentioned earlier.

// The compare function of the `sort()` method accepts two arguments and returns a value that determines the sort order. The following illustrates the syntax of the compare function:

// ```jsx
// function compare(a,b) {
// // ...
// }
// ```

// The `compare()` function accepts two arguments `a` and `b`. The `sort()` method will sort elements based on the return value of the `compare()` function with the following rules:

// 1. If `compare(a,b)` is less than zero, the `sort()` method sorts `a` to a lower index than `b`. In other words, `a` will come first.
// 2. If `compare(a,b)` is greater than zero, the `sort()` method sort `b` to a lower index than `a`, i.e., b will come first.
// 3. If `compare(a,b)` returns zero, the `sort()` method considers a equals b and leaves their positions unchanged.

// To fix the issue of sorting the number, you can use the following syntax:

// ```jsx
// let numbers = [0, 1 , 2, 3, 10, 20, 30 ];
// numbers.sort( function( a , b){
//     if(a > b) return 1;
//     if(a < b) return -1;
//     return 0;
// });

// console.log(numbers);
// ```

// Output:

// ```jsx
// [ 0,  1,  2, 3, 10, 20, 30 ]
// ```

// And the following is the simplest since the elements of the array are numbers:

// ```jsx
// var numbers = [0, 1, 2, 3, 10, 20, 30];
// var out = numbers.sort(function(a,b){
// return a-b
// };

// console.log(out);
// ```

// ## Sorting an array of strings

// Suppose you have an array of string named `animals` as follows:

// ```jsx
// let animals = [
//     'cat', 'dog', 'elephant', 'bee', 'ant'
// ];
// Code language: JavaScript (javascript)
// ```

// To sort the elements of the `animals` array in ascending order alphabetically, you use the `sort()` method without passing the compare function as shown in the following example:

// ```jsx
// let animals = [
//     'cat', 'dog', 'elephant', 'bee', 'ant'
// ];
// animals.sort();

// console.log(animals);
// Code language: JavaScript (javascript)
// ```

// Output:

// ```jsx
// [ 'ant', 'bee', 'cat', 'dog', 'elephant' ]
// ```

// To sort the `animals` array in descending order, you need to change the logic of the compare function and pass it to the `sort()` method as the following example.

// ```jsx
// let animals = [
//     'cat', 'dog', 'elephant', 'bee', 'ant'
// ];

// animals.sort((a, b) => {
//     if (a > b)
//         return -1;
//     if (a < b)
//         return 1;
//     return 0;
// });

// console.log(animals);
// ```

// Output:

// ```jsx
// [ 'elephant', 'dog', 'cat', 'bee', 'ant' ]
// ```

// ## Sorting an array of numbers

// Suppose you have an array of numbers named `scores` as in the following example.

// ```jsx
// let scores = [9, 80, 10, 20, 5, 70];
// ```

// To sort an array of numbers numerically, you need to pass into a custom comparison function that compares two numbers.

// The following example sorts the `scores` array numerically in ascending order.

// ```jsx
// let scores = [9, 80, 10, 20, 5, 70];
// // sort numbers in ascending order
// var out = numbers.sort(function(a,b){
// 		return a-b
// };

// console.log(out);
// ```

// Output:

// ```jsx
// [ 5, 9, 10, 20, 70, 80 ]
// ```

// To sort an array of numbers numerically in descending order, you just need to reverse the logic in the compare function as shown in the following example:

// ```jsx
// let scores = [9, 80, 10, 20, 5, 7];
// // descending order
// var out = numbers.sort(function(a,b){
// return b-a
// };

// console.log(out);
// ```

// Output:

// ```jsx
// [80, 70, 20, 10, 9, 5]
// ```

// ## Sorting an array of objects by a specified property

// The following is an array of `employee` objects, where each object contains three properties: `name`,`salary` and `hireDate`.

// ```java
// let employees = [
// 		{name: 'john', salary: 90000, hireDate: "July 1, 2010"},
//     {name: 'david', salary: 75000, hireDate: "August 15, 2009"},
//     {name: 'ana', salary: 80000, hireDate: "December 12, 2011"}
// ];
// ```

// ### Sorting objects by a numeric property

// The following example shows how to sort the employees by `salary` in ascending order.

// ```java
// // sort by salary
// employees.sort(function (x, y) {
//     return x.salary - y.salary;
// });

// console.table(employees);
// ```

// ### Sorting objects by a string property

// To sort the `employees` array by `name` property case-insensitively, you pass the compare function that compares two strings case-insensitively as follows:

// ```jsx
// employees.sort( function( a , b){
//     if(a > b) return 1;
//     if(a < b) return -1;
//     return 0;
// });

// console.table(employees);
// ```