//  ** NESTED-LOOPS-NOTES **


// A nested loop is a loop within a loop.

// Suppose you went to a Gol Gappa Shop and you ate 10 gol-gappas in a
// sequence. You can consider this as a loop where you have eaten 10 gol gappas
// in a sequence.

// In another scenario, Suppose you went to a Gol Gappas Shop with the 5 other
// family members. Each Member of the family ate 10 gol-gappas. You can
// consider this as a loop of 10 gol-gappas which run 5 times because of the 5
// family members.


// Code 1 : print Hello in vertical order using nested loop.
for(var i=0;i<=2;i++)
{
    for(var j=0; j<=3; j++)
    {
       console.log("Hello");
    }
}


// Code 2 : print Hello in horizontal order using nested loop
for(var i=1;i<=2;i++)
{
    var bag="";
    for(var j=1; j<=3; j++)
    {
       bag = bag + "Hello ";
    }
    console.log(bag);
}


// Father-Son Marathon There was a father who trains his son for next olympics for running competition. Every day Father use to give some target’s to his son.

// Code 3 : Father gave the son a target , of completing 10 sets . Each set contains 10 Rounds of a field.
for(var father=1; father<=10; father++)
{
    for(var son = 1; son<=10; son++)
    {
       console.log("Father count",father,",Son completed ",son);
    }
}


// Father-Son planting trees. Once upon time, There was a farther and son who were farmers. They once decided that they do plantation of trees in their field. Since Father is very old, he unable to do that much work whereas son is pro-active, that’s why father responsibility is to make sure how many fields are done whereas son has the responsibility of putting the seeds in the field.

// Code 4 : Father has 5 fields . Each fields son needs to put 10 seeds
// // * * * * *
// // * * * * *
// // * * * * *
// // * * * * *
// // * * * * *
for(var father=1; father<=5; father++)
{
    var bag = "";
    for(var son=1; son<=10; son++)
    {
       bag = bag + "*";
    }
    console.log("Field",father,bag);
}


// Code 5 : Father has 5 fields. Son needs to put the seeds in increasing order.
// Field 1 → 1 seed
// Field 2 → 2 seed
// Field 3 → 3 seed
// Field 4 → 4 seed
// Field 5 → 5 seed
// *
// * *
// * * *
// * * * *
// * * * * *
for(var father=1; father<=5; father++)
{
    var bag = "";
    for(var son=1; son<=father; son++)
    {
       bag = bag + "* ";
    }
    console.log(bag);
}


// Code 6 : Print the below pattern
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
for(var father = 1; father<=5; father++)
{
    var bag = "";
    for(var son = 1; son<=father; son++)
    {
       bag = bag + son+" ";
    }
    console.log(bag);
}


// Code 7 : Father has 5 fields. Son needs to put the seeds in decreasing order.
// Field 1 → 5 seed
// Field 2 → 4 seed
// Field 3 → 3 seed
// Field 4 → 2 seed
// Field 5 → 1 seed
// * * * * *
// * * * *
// * * *
// * *
// *
for(var father=5; father>=1; father--)
{
    var bag = "";
    for(var son=1; son<=father; son++)
    {
       bag = bag +"* ";
    }
    console.log(bag);
}


// Code 8 : Print the below reverse pattern
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1
for(var father=5; father>=1; father--)
{
    var bag = "";
    for(var son=1; son<=father; son++)
    {
       bag = bag + son+" ";
    }
    console.log(bag);
}


// Code 9 : Combining Code 6 and Code 8 form a pyramid.
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1
for(var father = 1; father<=5; father++)
{
    var bag = "";
    for(var son = 1; son<=father; son++)
    {
       bag = bag + son+" ";
    }
    console.log(bag);
}

for(var father=4; father>=1; father--)
{
    var bag = "";
    for(var son=1; son<=father; son++)
    {
       bag = bag + son+" ";
    }
    console.log(bag);
}


// Nested Loop with While.

// Code 10 : Use While Loop. Print the below pattern
// **********
// **********
// **********
// **********
// **********
// **********
var father=1;
while(father<=6)
{
    var son=1;
    var bag = "";
    while(son<=10)
    {
      bag=bag+"*";
      son++;
    }
    console.log(bag);
    father++;
}


// Break and Continue
// Break :-

// Sultan and Bahubali were the good friends , but Sultan was the king whereas Bahubali does n’t have any kingdom. Later Sultan gave one part of his empire to Bahubali with a condition that Bahubali will never try to cross the status of Sultan and if he tries that then he will attack on the Prithviraj clan.

// Code 11 : Using Break
for(var sultan=1; sultan<=10; sultan++)
{
    for(var bahuballi=1; bahuballi<=10; bahuballi++)
    {
        if(bahuballi>sultan)
        {
           break;
        }
    console.log("sultan=",sultan," bahuballi=",bahuballi);
    }
}


// In the above code, whenever the value of Bahubali become greater than Sultan, At that point the inner loop of bahuballi will break [ It means sultan attacked on his clan because Bahubali betray him, by not following his conditions].

// Continue :-

// The below code gives the same output as the above code but the only difference is on break is that the execution will stop completely but in case of continue the process will keep on skipping the step and execution will end only once the loop will done.

// Code 12 : Using Continue
for(var sultan=1; sultan<=10; sultan++)
{
    for(var bahuballi=1; bahuballi<=10; bahuballi++)
    {
        if(bahuballi>sultan)
        {
           continue;
        }
    console.log("sultan=",sultan," bahuballi=",bahuballi);
    }
}


// Code 13 : Break vs Continue . Predict the Output.

// **BREAK**
for(var sultan=1; sultan<=10; sultan++)
{
    for(var bahuballi=1; bahuballi<=10; bahuballi++)
    {
        if(bahuballi == sultan)
        {
           break;
        }
    console.log("sultan=",sultan," bahuballi=",bahuballi);
    }
}


// **CONTINUE**
for(var sultan=1; sultan<=10; sultan++)
{
    for(var bahuballi=1; bahuballi<=10; bahuballi++)
    {
        if(bahuballi == sultan)
        {
           continue;
        }
    console.log("sultan=",sultan," bahuballi=",bahuballi);
    }
}










//  LOOPS:-  CLASS NOTES


//  Outer Loop controling the inner loop

//  First loop/outer loop depending on (Horizontal row/Line)
//  second loop/inner loop depending on (verticle column/Line)


for(var hour =1; hour<=5; hour++)
{
    for(var minute=1; minute<=60; minute++)
    {
        console.log("Minute :",minute);
    }

    console.log("Hour :",hour);
}




//  1 2 3 4 5
//  1 2 3 4 5
//  1 2 3 4 5
//  1 2 3 4 5
//  1 2 3 4 5

for(var i=0; i<=5; i++)
{
    var str = "";

    for(var j=1; j<=5; j++)
    {
        str += j+" ";
    }
    console.log(str);
}




//  Box-Model Printing

// * * * * *
// *       *
// *       *
// *       *
// * * * * *

for(var i=1; i<=5; i++)
{
    var str ="";

    for(var j=1; j<=5; j++)
    {
        if(i==1 || i==5 || j==1 || j==5)
        {
            str += "*" +" ";
        }
        else
        {
            str += "  ";
        }
    }
    console.log(str);
}




//  Conditions --> if(i==1 || i==5 || j==1)
// * * * * *
// *      
// *       
// *       
// * * * * *



//  Conditions --> if(i==5 || j==1)
// * 
// *      
// *       
// *       
// * * * * *



//  (N) Model Printing
//  Conditions --> if(j==1 || j==5 || i==j)


//  Opposite (N) Model Printing
//  Conditions --> if(j==1 || j==5 || j==i)




// 5 4 3 2 1
// 5 4 3 2 1
// 5 4 3 2 1
// 5 4 3 2 1
// 5 4 3 2 1

for(var i=1; i<=5; i++)
{
    var bag = "";

    for(var j=5; j>=1; j--)
    {
        bag += j +" ";
    }
    console.log(bag);
}




// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

for(var i=1; i<=5; i++)
{
    var bag = "";

    for(var j=1; j<=i; j++)
    {
        bag += j +" ";
    }
    console.log(bag);
}




// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

for(var i=1; i<=5; i++)
  {
    var bag = "";
    
    for(var j=1; j<=i; j++)
      {
        bag += i+" ";
      }
    console.log(bag)
}