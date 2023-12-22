// Syntax

//  declaration of a function:-

// function name (Parameter/Variable)
// {
//   Write logic here.....
// }

// name(Argument/Value)// calling the function






// argument and parameter
// name = "Amzad"

// name is parameter 
// it represent the value that the function expect to recieve when it declared

// no. of argument == no. of parameter


function call(name,name2)
{
  console.log("please call", name,",", name2);
}

call("Amzad","Tanu")  // calling the function

// Amzad is an argument 
// value that is passed to a function when it is called Argument


//return will send the value back to the caller after return no code will run inside function



// NOTE: It must consist of two functions 1. To find the difference 2. To find the absolute value
function print(a,b)
{
  let sub = a - b;
  let result = absDiff(sub);
  console.log(result);
}



 function absDiff(diff)
 {
    if(diff < 0)
    {
    return -diff;
    }
    else
    {
    return diff;
    }
}

print(4,12)





//global scope

let globalVar = 10;

function myFunction()
{
  // console.log(globalVar);
}
myFunction()

// local scope

function myFunction2()
{
  let localVar = 5; // local scope
  console.log(localVar);
}

myFunction2()
console.log(localVar)