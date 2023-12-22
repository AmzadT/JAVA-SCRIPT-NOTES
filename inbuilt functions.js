//  ** INBUILT FUNCTIONS - CLASS NOTES **


//  Inbuilt functions are also known as built-in functions or native functions, these functions are already defined. and always available for use.

//  without requiring the programmer to the write their own implementation.



//  The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

//  converting Array to String:-  join();
//  Ex:-
var elements = ['Fire', 'Air', 'Water'];

console.log(elements.join('-'));
// Expected output: "Fire-Air-Water"




//  The concat() method of Array instances is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

//  Ex:-
var array1 = ['a', 'b', 'c'];
var array2 = ['d', 'e', 'f'];
var array3 = array1.concat(array2);

console.log(array3);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]




//  The entries() method of Array instances returns a new array iterator object that contains the key/value pairs for each index in the array.

//  Ex:-
var array1 = ['a', 'b', 'c'];

var iterator1 = array1.entries();

console.log(iterator1.next().value);
// Expected output: Array [0, "a"]

console.log(iterator1.next().value);
// Expected output: Array [1, "b"]




