// Logical Operators


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
// PAN
// Card
// License
// Id
// Admission
// True False False I will not get the admission if I have the PAN Card but not
// License Id.
// False True False I will not get the admission if I have not the PAN Card but
// have License Id.
// False False False I will not get the admission if neither I have the PAN Card nor
// the License Id.
// True True True
// I will not get the admission if I have the PAN Card as well as
// License Id.
// Logical Operators 2
// Similarly, we can have multiple condition on which , the result is dependent.
// Our Boolean operators takes the input values as boolean and produce the result in
// boolean.
// In programming, we use to denote the AND operator like in this way &&.
// Input (Boolean Value) ——&&-—> Output (Boolean Value)
// // PIC of && Table
// Code 1 : AND Operator
// var a = true;
// var b = true;
// var c = a && b;
// console.log(c);
// a = true;
// b = false;
// console.log(a&&b);
// a = false;
// b = true;
// console.log(a&&b);
// a = false;
// b = false;
// console.log(a&&b);
// Code 2 : AND with numbers
// var a = 5>3;
// var b = 6>3;
// var c = a && b;
// console.log(c);
// Logical Operators 3
// Code 3 : if/else
// // Ist Part : Without AND
// if(5>3)
// {
// if(6>3)
// {
// console.log("Both are true");
// }
// }
// // IInd Part : With AND
// if(5>3 && 6>3)
// {
// console.log("Both are true");
// }
// Code 3 : Combination of multiple statements
// // Try out on Console
// (5<4) && (3>1) && (2>1) && (4<1)
// Code 4 : [Student Task] Check whether Rahul passed or not
// // For English Subject, Check whether Rahul passed or not
// var subject = "english";
// var passing_marks = 70;
// var rahul_marks = 75;
// var rahul_subject = "english";
// if((rahul_subject == subject) && (rahul_marks >= passing_marks))
// Logical Operators 4
// {
// console.log("Rahul Passed");
// }
// else
// {
// console.log("Rahul not passed");
// }
// Code 5 : [Student Task] Marriage Problem
// Gender is male and age ≥ 21 : He can marry
// Gender is female and age ≥ 18 : She can marry
// var gender = "male";
// var age = 21;
// if((gender == "male") && (age >= 21))
// {
// console.log("Male : Can Marry");
// }
// else if((gender == "female") && (age >= 18))
// {
// console.log("Female : Can Marry");
// }
// else
// {
// console.log(gender,"Can't get Marry");
// }
// Code 6 : Differentiate between ,(coma) and +
// var a = 2;
// var b = 3;
// var c = "hello";
// console.log(a,b,c);
// console.log(a+b+c);
// Logical Operators 5
// // Case 2 : Integers
// var a = 2;
// var b =. 3;
// console.log(a+b);
// console.log(a,b);
// // Case 3 : Strings
// var a = "Hello";
// var b = "World";
// console.log(a+b);
// // Case 4 : Integer with Strings
// var a = 2;
// var b = "hello";
// console.log(a,b);
// console.log(a+b);
// // Case 5 : "\n"
// var a = 2;
// var b = "hello";
// console.log(a,"\n",b);
// Code 7 : Mom wants to make Palak Paneer , So he send sunny to the shop to buy
// palak and paneer.
// Since , She asked for palak paneer . In this case, both items palak and paneer is
// required to make palak paneer, if any of the item is not available in the shop then it is
// not possible to make palak paneer dish.
// var palak_availaible = false;
// var paneer_availaible = false;
// if(paneer_availaible && palak_availaible)
// {
// console.log("Today, we will have a party");
// }
// else
// {
// Logical Operators 6
// console.log("No Party");
// }
// OR Operator ||
// If any of the statement is true , then the result will be true
// For Example : DriveZy is a Renting bike service Startup, If you want to rent a bike then
// you need to submit any of the Identity Document
// Aadhar Card or PAN Card or License or Voter id Card
// Aadhar Card PAN Card License Voter ID card Result
// True True True True True
// True True True False True
// True True False False True
// True False True True True
// False False False False False
// and many more cases are possible
// Observation :
// 1. If any of the case is true then the final result will be true.
// 2. If all the cases are false, then only the result will be false.
// For Example : Masai ask for documents After Msat in the documentation phase,
// either submit the 12th Mark Sheet or Diploma
// 12th Marksheet Diploma Admission Result
// Logical Operators 7
// True True True
// True False True
// False True True
// False False False
// Show in console
// Code 8 : OR Operator
// var a = true;
// var b = true;
// var c = a || b;
// console.log(c);
// a = true;
// b = false;
// console.log(a||b);
// a = false;
// b = true;
// console.log(a||b);
// a = false;
// b = false;
// console.log(a||b);
// Code 9 : [Student Task ] OR Operator
// 1. true || false || true
// 2. false || true || false
// 3. false || false || true
// Code 10 : Mom wants to prepare something for dinner, she decide that either the
// will make Potato or Paneer , So she send sunny to the shop to buy potato or
// paneer.
// Logical Operators 8
// Since , Either she will prepare potato or panner in the dinner . In this case, if any of the
// item is available in the shop then it is possible to prepare dinner.
// var potato_availaible = true;
// var paneer_availaible = false;
// if(potato_availaible || paneer_availaible)
// {
// console.log("Dinner : Possible");
// }
// else
// {
// console.log("Dinner : Not Possible");
// }
// Code 11 : Marriage Problem
// Male : age≥21
// Female : age≥18
// var gender = "female";
// var age = 18;
// if((gender == "male" && age>=21) || (gender == "female" && age>=18))
// {
// console.log(gender,": Can get Married");
// }
// else
// {
// console.log(gender,": Can't get married");
// }
// Switch Case
// Whenever we have multiple options and we have a choice .
// For Ex : ATM Machine , we have multiple options of Deposit, Withdraw, Change Pin ,
// others
// Logical Operators 9
// Every option is connected to some code
// Deposit ——————> Code 1 [ To deposit the money]
// Withdraw —————→ Code 2
// Change Pin —————> Code 3
// Default ———————> Code 4
// // pic
// In switch case, there are multiple cases, and with each case some code is connected.
// Code 12 : Day Schedule
// var option = 3;
// switch(option)
// {
// case 1 :
// console.log("Day 1 : Scrum + Coding");
// case 2 :
// console.log("Day 2 : Scrum + Coding + Skillathon");
// case 3 :
// console.log("Day 3 : Scrum + Skillathon + Standups");
// default :
// console.log("Holiday");
// }
// On choosing the option in above code, it will output the code present corresponding
// to the given option and also print all the output of all the cases which present below
// the chosen option.
// To avoid this, we will use break
// Logical Operators 10
// Code 13 : Day Schedule [ with Break ]
// var option = 3;
// switch(option)
// {
// case 1 :
// console.log("Day 1 : Scrum + Coding");
// break;
// case 2 :
// console.log("Day 2 : Scrum + Coding + Skillathon");
// break;
// case 3 :
// console.log("Day 3 : Scrum + Skillathon + Standups");
// break;
// default :
// console.log("Holiday");
// break;
// }





//  LOGICAL OPERATORS:-  CLASS NOTES

//  Ternary Operator:-  Condition ? true statement : false statement

var num = 10;
console.log(num==10 ? "Yes" : "No");

console.log(5>7 ? true : false);


//  Logical Operators:-  it can Perform one and more boolean values operations (true and false)

//  1.  And Operator (&&)
//  2.  Or operator (||)
//  3.  Not Operator (!)


//  And Operator (&&):-  if it is any one value are false then the all values will get false.
//  Or operator (||):-  if it is any one value are true then the all values will get true.
//  Not Operator (!):-  true = false  and  false = ture


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