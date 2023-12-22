// Callback functions
// A callback function is a function that is passed as an argument to another function, to be “called back” at a later time.

// Lets take a look at an example to see what this means in more detail.

// Example:

// function sum(x, y, callBack){
//     var total = x + y
//     callBack(total)
// }

// var print = function(toPrint){
//     console.log(toPrint)
// }

// sum(4, 5, print)
// Output:

// 9
// As you can see we passed the print function as an argument to the sum function. First the sum function calculated the sum of x and y and then the print function was called after the sum was calculated to print the sum to the console.

// Higher Order Functions
// Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions.

// Here are some commonly used inbuilt methods for arrays.

// array.forEach()
// array.map()
// array.filter()
// array.reduce()
// each of these takes an argument.

// forEach:

// The forEach() method executes a provided function once for each array element.

// Syntax

// array.forEach(function(element){
//     console.log(element)
// })
// array.forEach(function(currentElement, currentIndex, array){...})
// // It takes a function as an argument
// // currentElement
// //     The current element being processed in the array.
// // currentIndex || optional
// //     The index of the current element being processed in the array.
// // array || optional
// // The original array forEach() was called upon.
// var names = ['Nrupul', 'Albert', 'Sid', 'Aman']

// names.forEach(function(element){
//     console.log(element)
// })
// // Nrupul
// // Albert
// // Sid
// // Aman
// map:

// The map() method creates a new array with the results of calling a provided function on every element in the calling array.

// Syntax

// array.map(function(element){
//     console.log(element)
// })
// array.map(function(currentElement, currentIndex, array){...})
// // It takes a function as an argument
// // currentElement
// //     The current element being processed in the array.
// // currentIndex || optional
// //     The index of the current element being processed in the array.
// // array || optional
// // The original array map() was called upon.

// Arguments:

// var names = ['Nrupul', 'Albert', 'Sid', 'Aman']

// newNames = names.map(function(element, index){
//     return [element ,index]
// })
// console.log(newNames)
// // [ ["Nrupul", 0], ["Albert", 1], ["Sid", 2], ["Aman", 3] ]
// The main difference between .forEach and .map() is that .map() returns a new array. If you need the result, but do not wish to mutate the original array, .map() is the clear choice. If you simply need to iterate over an array, forEach is a fine choice.
// filter:

// The filter() method creates a new array with all elements that pass the test implemented by the provided function.

// Syntax

// array.filter(function(element){
//     return condition to check
// })
// var newArray = array.filter(function(currentElement, currentIndex, array){})
// // It takes a function as an argument
// // currentElement
// //     The current element being processed in the array.
// // currentIndex || optional
// //     The index of the current element being processed in the array.
// // array || optional
// // The original array forEach() was called upon.
// A new array with the elements that pass the test. If no elements pass the test, an empty array will be returned.

// Arguments:

// var names = ['Nrupul', 'Albert', 'Sid', 'Aman']

// newNames = names.filter(function(element, index){
//     return element.length>4
// })
// console.log(newNames)
// // [ "Nrupul", "Albert" ]
// reduce:

// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

// Syntax

// array.reduce(function(accumulator,element){
//     return condition for accumulator
// })
// array.reduce(function(accumulator, currentValue, currentIndex, array){},0)
// // It takes a function as an argument
// // accumulator
// //     The accumulating value which will be accumulated over time to be the final output
// // currentValue || optional
// //     The current element being processed in the array.
// // currentIndex || optional
// //     The index of the current Index being processed in the array.
// // array || optional
// // The original array forEach() was called upon.
// // the value 0 after the function, is the initial value of the accumulator.

// // What is accumulation?
// // the acquisition or gradual gathering of something.
// Arguments:

// array = [1, 2, 3, 4, 5]

// array.reduce(function(a,c){
//     return a + c
// })
// // 15













// # Day-8 : Higher Order Functions

// # Basics of Functions:

// ### **Function Statement:**

// - The function statement declares a function. A declared function is “saved for later use”, and will be executed later, when it is invoked (called).

// ```jsx
// function javascript(){
// 		console.log("Welcome to JS")
// }

// javascript()
// ```

// ### **Function expression:**

// - functions are like heart to JavaScript, beautiful feature of a function is that you can assign it to a variable.

// ```jsx
// var b = function(){
// 		console.log("Welcome to JS")
// }

// b()
// ```

// ### **Anonymous function :**

// - A function without a name is called anonymous function
// - Anonymous functions are used as values , i.e. you can use it to assign it to some variables. In the above snippet the function which we assign to variable b is an anonymous function

// **Difference Between Parameters and Arguments :**

// - *Parameters* are variables listed as a part of the function definition.
// - *Arguments* are values passed to the function when it is invoked.
    
//     ```jsx
//     function sum( a, b, c ) {}; // a, b, and c are the parameters
    
//     sum( 1, 2, 3 ); // 1, 2, and 3 are the arguments
//     ```
    

// ## Think of vaccination scenario

// ![GettyImages-1288435633_1350.webp](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/49269c57-3b5a-4e24-b2d8-caa7859b1ca4/GettyImages-1288435633_1350.webp)

// - Many People are queued up and as a doctor what would you tell your staff to do:
//     1. Everyone has a token of their number in the line. You go with a token 0 and match it with the first person and vaccinate him, then you scratch the 0 on your token and make it 1, then go to next person and vaccinate, and so on.
//     2. Go and vaccinate everyone in the line one by one.
// - Lets take array of persons

// ```jsx
// var persons = ['Chandra', 'Varun', 'Nrupul', 'Prateek', 'Aman'];
// ```

// - Let’s write a function for vaccination

// ```jsx
// function vaccinate(person) { 
//     console.log(person + 'has been vaccinated.')
// }
// ```

// - Instead of going to each and every person, lets use for loop

// ```jsx
// for (var i = 0; i < persons.length; i++) {  
// vaccinate(persons[i]);  
// }
// ```

// - You can also use `map` function instead of `for` loop

// ```jsx
// persons.map(vaccinate)
// ```

// - **The surprising thing that happened is we passed a function name as an argument!**
// - What is `vaccinate` here ? it’s a callback function

// ## Callback functions:

// ![did-you-brush-5c9ab8.jpeg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bb131e32-6463-40d6-b471-32b17cc5a156/did-you-brush-5c9ab8.jpeg)

// - let’s write a  function for eatBreakfast

// ```jsx
// function eatBreakfast(item){
// 	console.log("I will eat"+" "+item +" "+ "as my breakfast")
// }

// eatBreakfast("idly")

// Output : I will eat idly as my breakfast
// ```

// - Now let’s to pass number as argument along with string

// ```jsx
// function eatBreakfast(item,time){
// 	console.log("I will eat"+" "+item +" "+ "as my breakfast"+"at"+" "+time)
// }

// eatBreakfast("idly",9)

// Output : I will eat idly as my breakfast at 9
// ```

// - Now let’s try to pass functions as argument along with strings and numbers

// ```jsx
// function eatBreakfast(item,time){

// 	console.log("I will eat"+" "+item +" "+ "as my breakfast"+"at"+" "+time)
// }

// function doBrush(){
// 	console.log("First brush your teeth")
// }

// eatBreakfast("idly",9,doBrush)

// Output : I will eat idly as my breakfast at 9
// ```

// - We have passed function as argument but how to access callback function

// ```jsx
// function eatBreakfast(item,time,doBrush){
// 	doBrush()
// 	console.log("I will eat"+" "+item +" "+ "as my breakfast"+"at"+" "+time)
// }

// function doBrush(){
// 	console.log("First brush your teeth")
// }

// eatBreakfast("idly",9,doBrush)

// Output : 
// First brush your teeth
// I will eat idly as my breakfast at 9
// ```

// # HOF - Sweets Analogy

// - Suppose you go to a sweet shop to buy some sweets

// ![sweetshop-thumb.jpeg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b0f68f82-3af1-486b-9680-0f4b34e5b4e6/sweetshop-thumb.jpeg)

// - Sweetshop has so many variety of sweets

// ![sweets.jpeg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6627be42-1f1e-47c7-a713-1c49da0a7714/sweets.jpeg)

// - You will be doing one kind among these
//     - One sweet from all varieties available for eg: 1 kova, 1 laddu, 1 gulabjamun, etc.
    
//     ![mix-mithai-sweets-blue-plate-600w-1337715272.webp](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bedee162-4dac-4c6d-ac6e-66db590d0f07/mix-mithai-sweets-blue-plate-600w-1337715272.webp)
    
//     - Only one kind of sweet eg: kova
        
//         ![kova-sweets-500x500.jpeg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c399c474-b22f-4404-991f-9447beceb728/kova-sweets-500x500.jpeg)
        
//     - Mixing all kinds of sweets in shop itself and your stomach will be like this 😀
    
//     ![gettyimages-959161602-2048x2048.jpeg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cd88f5c2-1210-4b28-a559-81c686c9f53c/gettyimages-959161602-2048x2048.jpeg)
    

// # forEach:

// ### Instructor Task:

// - Lets take example of this sweets menu

// ```jsx
// var sweets = ["kova","gulabjamun","laddu","mysorepak","badshaw"]
// ```

// - As a foodie, I wanted all of these items in my plate, so I will go to each and every dish and pick it up, and also I can use for loop for this

// ```jsx
// var sweets = ["kova","gulabjamun","laddu","mysorepak","badshaw"]

// for (var i = 0; i < sweets.length; i++){
//   console.log(food_menu[i])
// }
// ```

// ![morpheus-forloop.jpeg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e8168f9c-9f9a-4112-9573-c8b746054d6c/morpheus-forloop.jpeg)

// - Syntax of `forEach`

// ```jsx
// var sweets = ["kova","gulabjamun","laddu","mysorepak","badshaw"]

// sweets.forEach(function (elem,index) {
//     console.log(elem)
// })

// Output : 
// kova
// gulabjamun
// laddu
// mysorepak
// badshaw
// ```

// - here elem is each sweet individually
// - index is index number.

// ## Warning :

// - forEach has extra charges

// ![extra-charges.jpeg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1fc22c83-9e63-4db9-8007-1d396caa5a6d/extra-charges.jpeg)

// - To pack those sweets in a box, we need to pay extra charges

// ![download.jpeg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/122b01de-c1a1-4342-8f36-fabc94a0f9f7/download.jpeg)

// ```jsx
// var sweets = ["kova","gulabjamun","laddu","mysorepak","badshaw"]
// var box = []
// sweets.forEach(function (elem,index) {
//     box.push(elem)
// })

// console.log(box) //[ 'kova', 'gulabjamun', 'laddu', 'mysorepak', 'badshaw' ]
// ```

// - Here creating extra array is extra charge.

// # map:

// - map is similar to forEach, only difference is map doesnt have any additional charges

// ![no-additional-cost-say-it.jpeg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5654ac2a-edb0-4ca7-83c6-d1de79cdd4fa/no-additional-cost-say-it.jpeg)

// ```jsx
// var sweets = ["kova","gulabjamun","laddu","mysorepak","badshaw"]
// var output= sweets.map(function (elem,index) {
//     return elem
// })

// console.log(output)// [ 'kova', 'gulabjamun', 'laddu', 'mysorepak', 'badshaw' ]
// ```

// - map method will return you a box(array) along with sweets

// ![Screenshot 2022-04-19 at 10.42.15 AM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1965b8c9-30e4-4d02-a69a-067a21e47580/Screenshot_2022-04-19_at_10.42.15_AM.png)

// | forEach | map |
// | --- | --- |
// | Return value: undefined | Return value: newArray will be created |
// | Original Array: not modified | Original Array: not modified |
// | forEach method is Not chainable | map method is chainable |

// # filter:

// ![kova-sweets-500x500.jpeg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bf620ebc-8c82-46cc-ae50-fc8be0e388f4/kova-sweets-500x500.jpeg)

// - If you want only one sweet for eg:kova, then we will use filter
// - Filter also doesnt have any additional charges
// - if will return you a box(array) along with sweets

// ```jsx
// var sweets = ["kova","gulabjamun","laddu","mysorepak","badshaw"]
// var output= sweets.filter(function (elem,index) {
//     return elem=="kova"
// })

// console.log(output) // ["kova"]
// ```

// ## reduce:

// - The `.reduce()` method iterates through an array and returns a single value.
// - There are two scenearios
//     - Without inital value
//     - With inital value
// - **How reduce() works without an initial value**
// - The code below shows what happens if we call `reduce()` with an array and no initial value.

// ```jsx
// const array = [15, 16, 17, 18, 19];

// array.reduce(function (acc, el) {
//   return acc+el;
// });
// ```

// | callback iteration | acc | current value(el) | acc+el (stores in acc) |
// | --- | --- | --- | --- |
// | first call | 15 | 16 | 31 |
// | second call | 31 | 17 | 48 |
// | third call | 48 | 18 | 66 |
// | fourth call | 66 | 19 | 85 |

// - **How reduce() works with an initial value**
// - Here we reduce the same array using the same algorithm, but with an *initialValue*
//  of `10`passed the second argument to `reduce()`

// ```jsx
// let array = [10, 16, 17, 18, 19];

// let addNums=function (acc, cv) {
//   return acc+cv;
// }

// array.reduce(addNums,10);
// ```

// | callback iteration | acc | current value(cv) | acc+cv (stores in acc) |
// | --- | --- | --- | --- |
// | first call | 10 | 15 | 25 |
// | second call | 25 | 16 | 41 |
// | third call | 41 | 17 | 58 |
// | fourth call | 58 | 18 | 76 |
// | fifth call | 76 | 19 | 95 |

// ## Chaining