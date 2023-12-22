// Relational operators, also known as comparison operato, they are
// used to comapare value and determine the relationship between
// them.
// it always return boolean value
// 1. greater than (>)
// 2. greater than or equal to (>=)
// 3. less than (<)
// 4. less than or equal to (<=)
// 5. Equality (==)
// 6. Inequality(!=)
// 7. Strict Equality(===)
// 8. Strict Inequality(!==)







// Relational operators, also known as comparison operators, are used to compare values and determine the relationship between them. In JavaScript, relational operators are
// used to perform comparisons and return boolean values (true or false) based on the
// comparison result. Here are the commonly used relational operators in JavaScript:

// 1. Equality (==): Checks if two values are equal, performing type coercion if necessary.

// 2. Inequality (!=): Checks if two values are not equal, performing type coercion if necessary.

// 3. Strict Equality (===): Checks if two values are equal, without performing type
// coercion. The types of the operands must also match.

// 4. Strict Inequality (!==): Checks if two values are not equal, without performing type
// coercion. The types of the operands must also match.

// 5. Greater than (>): Checks if the value on the left is greater than the value on the
// right.

// 6. Less than (<): Checks if the value on the left is less than the value on the right.

// 7. Greater than or equal to (>=): Checks if the value on the left is greater than or equal
// to the value on the right.

// 8. Less than or equal to (<=): Checks if the value on the left is less than or equal to the
// value on the right.






// Mathematical operators in JavaScript
// Common Operators
// Javascript supports all the commonly used mathematical operators. Namely + - * / .
// Example:
// var a = 2
// var b = 3
// var c = a + b
// var d = a * b
// var e = a / b
// var f = a - b
// Output:
// c = 5
// d = 6
// e = 0.6666666666666666
// f = -1
// Modulo or Remainder Operator:
// Many programming languages including JavaScript have a modulo operator % . This
// operator returns the remainder when one variable is divided by another.
// Example:
// var a = 10 % 7
// Output:
// a = 3
// This operator is often useful when you want to check if a number is odd or even.
// Example:
// var a = 10 % 2
// var b = 11 % 2
// Output:
// a = 0
// b = 1
// Try this out for yourself, any even number %2 returns 0 while any odd number %2
// returns 1.
// Exponentiation operator:
// This operator is represented by ** . This returns the value of the first operand
// raised to the power of the second operand. For example 24 = 16.
// Example:
// var a = 2 ** 4
// var b = 3 ** 2
// var c = 10 ** 1.5
// Output:
// a = 16
// b = 9
// c = 31.622776601683793
// String concatenation
// A special property of Strings is that they can be combined or concatenated with one
// another.
// Example:
// var word1 = "Welcome"
// var word2 = "Masai"
// var word3 = word1 + " to " + word2 + " school!"
// console.log(word3)
// Output:
// Welcome to Masai school!
// Strings can also be combined with other types like numbers .
// Example:
// var num1 = 1
// var num2 = 2
// var output = "1 + 2 = " + (num1 + num2)
// console.log(output)
// Output:
// 1 + 2 = 3
// Note: Notice the circular brackets between num1 + num2 this tells javascript that we
// want to add the two numbers mathematically. Without the brackets the output would be
// 1 + 2 = 12 .
// Booleans :
// The last data type we are going to learn about is a Boolean . This data type has only
// two values true and false .
// Example:
// var x = true
// var y = false











//  MATHEMATICAL OPERATORS :- (CLASS NOTES)



//  1.  Addition (+)
//  2.  Substraction (-)
//  3.  Multiplication (*)
//  4.  Division (/)
//  5.  Modulas (%) (it show also Reminder)
//  6.  Exponent (**)  ( (Square)  Ex:- (2**3 = 8) (8**2 = 64) (3**2 = 9) )
//  ((Square Root)  Ex:-  (25**0.5) (20**1/2))
//  ( (Qube Root)  Ex:- (20**1/3) )


//  Conacatination:-  Whenever a Number Added to another Number it Will Always (Addition)
//  Ex:-  Console.log(5+10);

//  Conacatination:-  Whenever a String Added to a Number it Will Always (Concatinate)
//  Ex:-  Console.log(5+"Hello" / "5"+10);

//  Conacatination:-  Whenever a String Added to another String it Will Always (Concatinate)
//  Ex:-  Console.log("Amzad"+"Hello");


//  DataType:-

//  String / Number / Boolean

//  Boolean:- (It Represent a Logical value that can be represented as (true / false))



//  Relational Operators Also Known as Comparision Operators, They are use to compare any value and determine the Relationship between them.

//  It Always return boolean value

//  1.  Greater Than (>)
//  2.  Greater Than or Equal-To (>=)
//  3.  Less Than (<)
//  4.  Less Than or Equal-To (<=)
//  5.  Equality / Double Equal-To (==)
//  6.  In-Equality (!=)
//  7.  Strict Equality (===)
//  8.  Strict In-Equality (!==)


//  Greater Than (>)
//  If it is left side values are bigger than the right side then it will be (true)


//   Less Than (<)
//  If it is Right side values are Smaller than the Left side then it will be (true)


//  Equality / Double Equal-To (==)
//  It is check if it is Two Vlaues are Equal or Not,  (It will check only values his does not check/Care any DataType)
//  Ex:- (10=="10") (5==5)  Both are true, because it will check only value.


//  In-Equality (!=)
//  If it is Both Values Are Not Equal, then Output will be (true)
//  Ex:-  (3!=3) (0!=false) (1!=true)  Both are (false)    
//  (1!=false)true


//  (0==false) O/P = true
//  (1==true)  O/P = true
//  true=1
//  false=0


//  Strict Equality (===)
//  It will check the values and DataType Both,  (DataType should be same)
//  Ex:-  (5===5)ture  (8==="8")false  (2===true)false


//  Strict In-Equality (!==)
//  it also check DataType
//  Ex:-  (8!==8)false   (10!=="10")true