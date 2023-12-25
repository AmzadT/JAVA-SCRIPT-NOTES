//  LOOPS:- CLASS NOTES

//  1.  Starting Point (Initialization)
//  2.  Ending Point (Conditions)
//  3.  Write Our Code
//  4.  Increment/Decrement


//  while loop :-

var num = 1;

while(num<=10){
    console.log("Amzad Hussain");
    num++;
}



// break-->  it will absolutely stop the Loops.

//  continue-->  skip the below code and it will start/move to the next inc/dec step.


//  for loop :-

// print masai 5 times using for loop

for(var i = 1; i <= 5; i++)
{
console.log("Amzad");
}



// print the number which are divisible by 2 and 5 in between 1 to 10

for(var i = 1; i<= 20; i++)
{
    if( i % 2 == 0  && i % 5 == 0)
    {
      console.log(i);
    }
}




var num = 5;
while(num > 0 )
{
  console.log(num);
  num--;
}




// find the even number in limit 0 - 6 both included

var i = 0;

while( i <= 6)
  {
    i++
    if( i % 2 == 0)
    {
      console.log(i);
 
    }
}



// sum of number from 1 to 5 

var sum = 0;
var i = 1;

while( i <= 5 )
  {
    sum = sum + i;
    // console.log(sum);
    i++
  }
console.log(sum);




// print the average of odd number from 1 to 5 (both included)

// find the odd number 
// calc. the sum of odd
// calculate average = sum of odd number/count of odd number

var i = 1;
var sum = 0;
var count = 0;

while( i <= 5)
  {
    if( i % 2 == 1)
    {
      sum = sum + i;
      // sum += i
      count++
      
    }
    i++
  }

console.log(sum/count);




// print numbers in horizontal line  1 - 5

var str = "";

for(var i = 5; i >=1; i--)
  {
    str += i + " ";
  }
console.log(str)




// break

for(let i = 1; i <= 5; i++)
  {
   
   console.log(i)

     if(i == 4)
    {
     continue;
    }

  }

// find the product of number  1 to 5

var product = 1;

for(var i = 1; i <= 5; i++)
  {
    product *= i;
  }
console.log(product);