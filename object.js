
//  ** CLASS-NOTES **



// The Object type represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities. Objects can be created using the Object() constructor or the object initializer / literal syntax.

//  Object nothing just a Key-Value Pairs.


// Undefined : variable has been declared but not assigned any value then output will be show (Undefined)


//  Ex:-  let x ;
// console.log(x);


// Null : It is assignment value and It is intentionally assigned to a variable as a representation of no value.

//  Ex:-  let x = null;
// console.log(x)


//  Left side = (Key)  and Right side = (Value)

// object --> key - value pair
// keys -- > keys are unique



//  2 way we can print any value in the Object

//  1.  Dot Notaion (.)  Ex:- Object.name
//  2.  Bracket Notaion (["Write Here"])  Ex:- Object["name"]


//  How we can Change/Update any value in the Object
//  if any key value present already in the object then it will updated, but not present then it will added a new key value pair inside the object.

//  Ex:-  Object.name = "Amzad";    |    Object["name"] = "Amzad"  (This method Also work for Uptade and change our value in the object)


//  How we can delete any key-value in the object ?
//  Keyword (delete)

//  Ex:-  delete Object.name;    |      delete Object["name"];


//  How we can acces array inside the object ?

//  Object["address"][2]


//  (for in loop)  always work for Object



var arr = ["Amzad", "Bihar",8298101008,23];

var details = {
  name : "Amzad",
  age : 23,
  address : "Bihar",
  MobileNo : 8298101008,
  FatherName : "Salim Ansari",
  hobbies : ["Carrom","Coding","Singing"],

  Location : {
    city : "Siwan",
    state : "Bihar",
    pincode : 841227,
    landmark: "Chowk Mohalla"
  }
}

console.log(details);

//  cahnge array values.
arr[1] = "Banglore";

// 2 ways

// 1. Dot Notation
console.log(details.name)

// 2. Bracket Notation
console.log(details["age"])


// Add a new key-value to the object
details["hobby"] = "Coding";
details["job"] = "FullStack Web Developer";


// console.log(details);

// Update the existing value in object
details["age"] = 25;

// console.log(details)

//  Delete any Key-Value in the Object using (delete keyword).
delete details["address"];

// console.log(details)

console.log(details["hobbies"][1])
console.log(details["hobbies"][2])

// how to access Location inside details
console.log(details["Location"]);

// how to access state inside the location which is inside details, and change any value.
console.log(details["Location"]["state"]);

//  Change
details["Location"]["landmark"] = "Near Masjid";
console.log(details["Location"]["landmark"]);


// for object we have a loop  --->  (for in) Loop.

var bag = "";
for(var key in details )
  {
    bag += key + " ";
    
  }
console.log(bag);



// Given an array find the unique item in the array.

var arr = ["Red","Blue","Green","Blue","Red","Green","White"]
// output -- > Red,Blue,Green,White

var obj = {};

for(var i = 0; i < arr.length; i++)
  {
    obj[arr[i]] = 1;
  }
console.log(obj);



//Given a string the number print the number of time character are repeating

var str = "Apple";
// {A : 1, p : 2,l : 1, e : 1} frequency of character in a string;
// Output
// A - 1
// p - 2
// l - 1
// e - 1

var obj = {};

for(var i = 0; i < str.length; i++)
  {
     if(obj[str[i]] == undefined)
     {
       obj[str[i]] = 1;
     }
    else
     {
       obj[str[i]]++;
     }
}
console.log(obj)



var Person = {
    firstName : "Amzad",
    lastName : "Hussain",
    age : 23,  
}

var store = "firstName";
// console.log(person[store]); //bracket notation
// console.log(person.store); // we cannot use variable for dot notation --> object.key

// undefined to check if a key is present or not
console.log(Person["MobileNo"] == undefined);  // true



var str = "Apple";
// a p l e 

// keys are unique
var obj = {};
// obj["A"] = 1;
// obj["p"] = 1;


for(var i = 0;  i < str.length; i++)
  {
     obj[str[i]] = 1;
  }
console.log(obj);



var arr = [5,3,4,1,2,1,2];
// {1 : 2 , 2 : 2}

// step we can follow
// 1. empty object
// 2. use a for loop
// 3. logic--> if -- else  using (undefined)

var obj = {};

for(var i = 0;  i < arr.length; i++)
  {
     if(obj[arr[i]] == undefined)
     {
       obj[arr[i]] = 1;
     }
    else
     {
       obj[arr[i]]++
     }
  }

console.log(obj)




var arr = [5,3,4,1,2,1,2];
// print all the element whose frequency is (2).
// { '1': 2, '2': 2};

var obj = {};

for(let i = 0; i < arr.length; i++)
  {
    if(obj[arr[i]] == undefined)
    {
      obj[arr[i]] = 1;
    }
    else
    {
      obj[arr[i]]++
    }
  }
// console.log(obj)

for(var key in obj)
{
    if(obj[key] == 2)
    {
        console.log(key + " " + obj[key]);
    }
}




var arr = [5,3,4,1,2,1,2];
// find the sum of the numbers whose frequency is (1).
// output 3 + 4 + 5 = 12

var obj = {};

for(var i = 0; i < arr.length; i++)
  {
    if(obj[arr[i]] == undefined)
    {
      obj[arr[i]] = 1;
    }
    else
    {
      obj[arr[i]]++
    }
  }
// console.log(obj)

// check whose frequency is (1).

var sum = 0;

for(var key in obj)
  {
    if(obj[key] == 1)
    {
      sum +=  Number(key);
    }
  }
console.log(sum);




var student1 = {name : "salman",age : 20, location : "hyd"};
var student2 = {name : "shahrukh",age : 22, location : "Blr"};
var student3 = {name : "amir",age : 24, location : "delhi"};

var arr = [
{name : "salman",age : 20, location : "hyd"},
  {name : "shahrukh",age : 22, location : "Blr"},
  {name : "amir",age : 24, location : "delhi"} 
];

for(var i = 0;  i < arr.length; i++)
{
    // console.log(arr[i])
    if(arr[i].name == "salman")
    {
      console.log(arr[i]);
    }
}




var amazon = [
  
{type : "monitor", brand : "Msi", price: 600},
{type : "cmera", brand : "canon", price: 1000},
{type : "printer", brand : "hp", price: 1600},
{type : "monitor", brand : "zebronic", price: 600},

];

var query = "monitor";

for(var i = 0 ; i <  amazon.length; i++)
{
    if(amazon[i].type == "monitor")
    {
        console.log(amazon[i].price)
    }
}  




var student = ["salman","shahrukh","amir","akshay","amitabh"];
var age = [20,22,24,26,28];

// convert this into array of object
// output
// [
//   {name : "salman",age : 20},
//   {name : "shahrukh", age : 22},
//   {name : "amir", age : 24},
//   {name : "akshay", age :26}
// ]

var result = [];

for(var i = 0 ; i < student.length; i++)
  {
    var obj = {};
    obj.Name  = student[i];  // key name will be created in obj
    obj.Age = age[i];  // key age will be created in obj
    
    result.push(obj);
  }

console.log(result)


// keys are Unique, always a string

