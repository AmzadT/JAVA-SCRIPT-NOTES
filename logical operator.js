// Logical Operators:-


// What is Logical Operators ?

// Whenever we need to connect two statements.

// In the Last class we learn about conditional statements, that says that if one condition is
// true then do X otherwise do Y.

// For Example: In traffic lights , If the lights are green then Move and if the lights are red
// then Stop.

// But In real, there might be multiple condition on which some result depends.

// For Example: Suppose I need to submit some documents in Masai, and the documents
// are pan card and License Id then only I will get the admission.
// here, you can observe that I will only get the admission only when I have the PAN Card
// and License Id (Both are important).


// 1. AND Operator

// In programming, we use to denote the AND operator like in this way --> (&&).

// Input (Boolean Value) ——&&-—> Output (Boolean Value)



// 1. PAN Card
// 2. License Id

// Admission :-

// True False = False--> I will not get the admission if I have the PAN Card but not License Id.

// False True = False--> I will not get the admission if I have not the PAN Card but have License Id.

// False False = False--> I will not get the admission if neither I have the PAN Card nor the License Id.

// True True = True--> I will get the admission if I have the PAN Card as well as License Id.



// AND Operator

a = true;
b = false;
console.log(a&&b);


// AND with numbers

var a = 5>3;
var b = 6>3;
var c = a && b;
console.log(c);


// if/else : Without AND

if(5>3)
    {
    if(6>3)
    {
    console.log("Both are true");
    }
}


// With AND

if(5>3 && 6>3)
{
console.log("Both are true");
}


// Combination of multiple statements

(5<4) && (3>1) && (2>1) && (4<1)

// [Student Task] Check whether Rahul passed or not For English Subject, Check whether Rahul passed or not.

var subject = "english";
var passing_marks = 70;
var Amzad_marks = 75;
var Amzad_subject = "english";

if((Amzad_subject == subject) && (Amzad_marks >= passing_marks))
{
console.log("Amzad Passed");
}
else
{
console.log("Amzad not passed");
}


// [Student Task] Marriage Problem Gender is male and age ≥ 21 : He can marry Gender is female and age ≥ 18 : She can marry.

var gender = "male";
var age = 21;

if((gender == "male") && (age >= 21))
{
console.log("Male : Can Marry");
}
else if((gender == "female") && (age >= 18))
{
console.log("Female : Can Marry");
}
else
{
console.log(gender,"Can't get Marry");
}


// Differentiate between ,(coma) and +

var a = 2;
var b = 3;
var c = "hello";
console.log(a,b,c);
console.log(a+b+c);


// Integers

var a = 2;
var b = 3;
console.log(a+b);
console.log(a,b);


// Strings

var a = "Hello";
var b = "World";
console.log(a+b);


// Integer with Strings

var a = 2;
var b = "hello";
console.log(a,b);
console.log(a+b);

// Case 5 : "\n"

var a = 2;
var b = "hello";
console.log(a,"\n",b);


// Code 7 : Mom wants to make Palak Paneer , So he send sunny to the shop to buy palak and paneer. Since , She asked for palak paneer . In this case, both items palak and paneer is required to make palak paneer, if any of the item is not available in the shop then it is not possible to make palak paneer dish.

var palak_availaible = false;
var paneer_availaible = false;

if(paneer_availaible && palak_availaible)
{
console.log("Today, we will have a party");
}
else
{
console.log("No Party");
}



// OR Operator ||


// If any of the statement is true , then the result will be true

// For Example : DriveZy is a Renting bike service Startup, If you want to rent a bike then you need to submit any of the Identity Document Aadhar Card or PAN Card or License or Voter id Card.

// True True True True = True
// True True True False = True
// True True False False = True
// True False True True  = True
// False False False False = False


// Observation :
// 1. If any of the case is true then the final result will be true.
// 2. If all the cases are false, then only the result will be false.


// For Example : Masai ask for documents After Msat in the documentation phase, either submit the 12th Mark Sheet or Diploma.

// True True = True
// True False = True
// False True = True
// False False = False


// OR Operator

var a = true;
var b = true;
var c = a || b;
console.log(c);

a = true;
b = false;
console.log(a||b);

a = false;
b = true;
console.log(a||b);

a = false;
b = false;
console.log(a||b);

// [Student Task ] OR Operator

// 1. true || false || true
// 2. false || true || false
// 3. false || false || true


// Mom wants to prepare something for dinner, she decide that either the will make Potato or Paneer , So she send sunny to the shop to buy potato or paneer.

// Since , Either she will prepare potato or panner in the dinner. In this case, if any of the item is available in the shop then it is possible to prepare dinner.

var potato_availaible = true;
var paneer_availaible = false;

if(potato_availaible || paneer_availaible)
{
console.log("Dinner : Possible");
}
else
{
console.log("Dinner : Not Possible");
}


//  [Marriage Problem]

var gender = "female";
var age = 18;
if((gender == "male" && age>=21) || (gender == "female" && age>=18))
{
console.log(gender,": Can get Married");
}
else
{
console.log(gender,": Can't get married");
}




// Switch Case :-


// Whenever we have multiple options and we have a choice .

// In switch case, there are multiple cases, and with each case some code is connected.

// Day Schedule [Without Break] -->  (it is like if...if conditions)

var option = 3;

switch(option)
{
    case 1 : console.log("Day 1 : Scrum + Coding");
    
    case 2 : console.log("Day 2 : Scrum + Coding + Skillathon");
    
    case 3 : console.log("Day 3 : Scrum + Skillathon + Standups");
    
    default : console.log("Holiday");
    
}


// On choosing the option in above code, it will output the code present corresponding to the given option and also print all the output of all the cases which present below the chosen option. To avoid this, we will use break.


// Day Schedule [ with Break ] -->  (it is like if...else-if conditions)

var option = 3;

switch(option)
{
    case 1 :  console.log("Day 1 : Scrum + Coding");
              break;
    case 2 :  console.log("Day 2 : Scrum + Coding + Skillathon");
              break;
    case 3 :  console.log("Day 3 : Scrum + Skillathon + Standups");
              break;
    default : console.log("Holiday");
              break;
}





//  ** LOGICAL OPERATORS:-  CLASS-NOTES **



//  Ternary Operator:-  Condition ? true statement : false statement

var num = 10;
console.log(num==10 ? "Yes" : "No");

console.log(5>7 ? true : false);


//  Logical Operators:-  it can Perform one and more boolean values operations (true and false)

//  1.  And Operator (&&)
//  2.  Or operator (||)
//  3.  Not Operator (!)


//  AND Operator (&&):-  if it is any one conditions/statements are false then all the condition/statement will get false.

//  OR operator (||):-  if it is any one conditions/statements are true then all the condition/statement will get true.

//  NOT Operator (!):-  true = false  and  false = ture


//  Switch Case:-

// switch(Here conditions)
// {
//     case 1 / "A" : console.log("Write Code Here");
//     break;

//     default : console.log("......");
// }



//  Increment and Decrement:-

//  1.  post-increment (num++)
//  2.  pre-increment (++num)


//  post-increment (num++):-  It means that the current value of this variable is used first and then it will get Incremented.

//  pre-increment (++num):-  It means that the current value of this variable is first Incremented and then it will used.







var dream_mobile = "iphone";

var electronic_store = "onePlus";

if(electronic_store == dream_mobile)
{
  console.log("I will shop");
}
else
{
  console.log("I will not shop");
}


// Ternary Operator
// condition ? true statement : false statement

console.log(electronic_store == dream_mobile ? "I will shop" : "I will not shop");

console.log( 5 > 7 ? "correct" : "not correct")


var num = 3;
num = num + 7;
num += 7   
console.log(num)
var x = 5;
x = x + 1; 
// increament only 1

// x++  post increament value is used then incremented
// ++x  pre increament firt incremented then used


console.log(x)

var myNumber = 42;
var sum1 = myNumber++  +  50; // myNumber is 42
console.log(myNumber)
console.log(sum1);

var sum2 = ++myNumber + 50; // myNUmber 43
console.log(sum2)


// Decrement 

x = x - 1;
x --;
--x 

var x = "a";
x++;
console.log(x)



// Problem 1: Given the year of birth, if the age is between 13 and 19 (both included) print Teenage and in between 20 and 29 (both included) print Twenties

var dob = 1999;
var age = 2023 - 1999;

if( age >= 13 && age <= 19)
{
  console.log("Teenage");
}
else if(age >= 20 && age <= 29)
{
  console.log("Twenties");
}



// Problem 2 : Given any character, if it is a vowel print "Vowel"
// a e i o u

var str = "i";
if( str == "a" || str == "e" || str == "i" || str == "o" || str == "u")
{
  console.log("Vowel")
}



// Problem 4: Given 3 numbers (all different values), print which is greatest

var a = 40;
var b = 90;
var c = 70;

if( a > b  && a > c)
{
  console.log("A is the greatest");
}
else if(b > a && b > c)
{
  console.log("B is the greatest");
}
else
{
  console.log("C is the greatest")
}

// Ternary Operator use:-
console.log(a > b && a > c ? "A" : b > a && b > c ? "B" : "C")




var FanOn = false;

if (FanOn) {
  FanOn = !FanOn;
  console.log("Turning off the fan.");
} else {
  FanOn = !FanOn;
  console.log("Turning on the fan.");
}

// Ternary Operator use:-
console.log("The fan is now " + (FanOn ? "on." : "off."));



console.log( 5 > 7 && 4 > 3)

console.log(!true)



// Swtich Case :-

var day  = 3;

switch (day)
{
    case 1 : console.log("Monday");
             break;

    case 2 : console.log("Tuesday");
             break;

    case 3 : console.log("Wednesday");
             break;

    case 4 : console.log("Thursday");
             break;

    case 5 : console.log("Friday");
              break;
      
    case 6 : console.log("Saturday");
             break;

    case 7 : console.log("Sunday");
             break;
             
    default : console.log("Invalid No.")
      
}