// function:- A function is block of code that perform the specific tasks.

// functions in JavaScript are reusable blocks of code that can be called from anywhere in your program.

// function Declaration:-

// function MyFunction()
// {
//     console.log("Amzad Hussain");
// }
// MyFunction();



// Parameters and Arguments

// Parameters are the variables that are declare in the function definition, while Arguments are the values that are passed to the function when it is called.

// function MyFunction(FirstName,LastName)  //  Parameters
// {
//     console.log("Hello "+FirstName+" "+LastName);
// }
// MyFunction("Amzad","Hussain");  //  Arguments


// Default Parameters:- default Parameters in JavaScript Parameters that have a default value. (this means that, if the Arguments is not passed to the function the default value will be UserActivation. )


// function MyFunction(x,y)
// {
//     console.log(x+y);  //  10 + Undefined
// }
// MyFunction(10); --> Output = NaN (Not a Number)


// function MyFunction(x,y=0)
// {
//     console.log(x+y);  //  10 + 0
// }
// MyFunction(10); --> Output = 10



// Function return:- The return statement can be used to return the value when the function is called. (The return statement denotes that the function has ended any code after return is not executed.)

// function Add(a,b)
// {
//     return a+b;
// }
// var result = Add(10,15);
// console.log("The sum is",result);



// function Fn1(x)
// {
//     function Fn2(y)
//     {
//         return x*y;
//     }
//     return Fn2;
// }

// var result = Fn1(5);
// console.log(result);
// console.log(result(2));