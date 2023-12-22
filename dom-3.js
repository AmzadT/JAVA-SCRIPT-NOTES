// Day-11:DOM-III
// Forms in Javascript:
// Forms will generally contain input tags.
// Take an example of any application form online, it consists of many input tags.
// So, whenever you are using some kind of input tags, where you want to take input from user, use forms.
// There are certain steps need to be followed while using forms
// Steps:
// Wrap your input tags inside form tag.
// Instead of button tag you should use <input type="submit"/>
// Add eventListener to form tag.
// Event name should be submit 
// addEventListener("submit", myFunction)
// ​
// Forms by default tries to send data to backend when you click on submit, to stop default behaviour use event.preventDefault()
// Let’s see the difference between onClick and addEventListener by looking into following example
// Without using form tag
// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <title>Document</title>
//   </head>
//   <body>
//     <input id="name" type="text" placeholder="enter name" />
//     <input id="mail" type="email" placeholder="Enter email address" />
//     <button onClick="getData()">Submit</button>
//     <h1 id="nameDisplay">display name here</h1>
//     <h2 id="emailDisplay">display email here</h2>
//   </body>
// </html>

// <script>
//   function getData() {
//     var username = document.getElementById("name").value;
//     var email = document.getElementById("mail").value;
//     document.getElementById("nameDisplay").innerText = username;
//     document.getElementById("emailDisplay").innerText = email;
//   }
// </script>
// ​
// Live code : Codepen
// With Form tag
// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <title>Document</title>
//   </head>
//   <body>
//     <form>
//       <input id="name" type="text" placeholder="enter name" />
//       <input id="mail" type="email" placeholder="Enter email address" />
//       <input type="submit" />
//     </form>
//     <h1 id="nameDisplay">display name here</h1>
//     <h2 id="emailDisplay">display email here</h2>
//   </body>
// </html>

// <script>
//   document.querySelector("form").addEventListener("submit", getData);
//   function getData() {
//     event.preventDefault();
//     var username = document.getElementById("name").value;
//     var email = document.getElementById("mail").value;
//     document.getElementById("nameDisplay").innerText = username;
//     document.getElementById("emailDisplay").innerText = email;
//   }
// </script>
// ​
// Live code : Codepen
// preventDefault()
// The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
// For example, this can be useful when:
// Clicking on a "Submit" button, prevent it from submitting a form.
// Clicking on a link, prevent the link from following the URL.
// Document createElement()
// The createElement() function in JavaScript is used to programatically add elements to the DOM.
// Syntax
// document.createElement(type)
// ​
// It has one required argument, the type of element to create, like 'div' or 'img'.
// Let’s see how we generally create an element using HTML.
// For Example I want to create a <h1> tag with innertext of Masai School
// <html lang="en">
// <head>
//   <title>Document</title>
// </head>
// <body>
//   <h1>Masai School</h1>
// </body>
// </html>
// ​
// What are the steps we followed here?
// We have created <h1> tag - <h1> </h1>
// We have added innerText to it - <h1>Masai School</h1>
// We have added(appended) h1 tag to body tag in order to display it on browser.
// Now let’s try to create same h1 tag using javascript by following same steps
// <html lang="en">
// <head>
//   <title>Document</title>
// </head>
// <body>
// </body>
// </html>

// <script>
//   // Step1: Creating h1 tag
//   let heading = document.createElement("h1");
//   // Step2: Adding innerText 
//   heading.innerText = "Masai School";
//   // Step3: Appending to body
//   document.querySelector("body").append(heading)
// </script>
// ​
// Live code : Codepen
// Example
// In the following example, initially the div section consists of only one p tag. But later on, one more p tag is created and added to the div section as shown below.
// <html>
//   <body>
//     <div id="new">
//       <p>Masai School</p>
//     </div>
//   </body>
// </html>
// <script></script>
// ​
// <html>
//   <body>
//     <div id="new">
//       <p>Masai School</p>
//     </div>
//   </body>
// </html>
// <script>
//       var newPara = document.createElement("p");
//       newPara.innerText = "The Coding School that cares about you";
//       document.getElementById("new").append(newPara);
// </script>
// ​
// Live code : Codepen
// Now if you want to add a class/id to <p>Masai School</p>, we can use setAttribute property
// Element setAttribute()
// The setAttribute() method sets a new value to an attribute.
// Here attributes can be any of the following
// id
// class
// href
// src, etc
// Syntax
// element.setAttribute(attributeName, attributeValue)
// ​
// Example:
// <html>
//   <body>
//     <div id="new">
//       <p>Masai School</p>
//     </div>
//   </body>
// </html>
// <script>
//       var newPara = document.createElement("p");
//       newPara.innerText = "The Coding School that cares about you";
// 			// Setting class of "para" to p tag
// 			newPara.setAttribute("class","para")
// 			// Setting id of "container" to p tag
// 			newPara.setAttribute("id","container")
//       document.getElementById("new").append(newPara);
// </script>
// ​
// Now whatever styles we write for that class “para” or id “container” will be applied to that <p> tag
// <html>
// <style>
// .para {
// 	font-size:40px
// }
// </style>
//   <body>
//     <div id="new">
//       <p>Masai School</p>
//     </div>
//   </body>
// </html>
// <script>
//       var newPara = document.createElement("p");
//       newPara.innerText = "The Coding School that cares about you";

// 			// Setting class of "para" to p tag
// 			newPara.setAttribute("class","para")

// 			// Setting id of "container" to p tag
// 			newPara.setAttribute("id","container")

//       document.getElementById("new").append(newPara);
// </script>
// ​
// Live code : Codepen
// Add a href attribute to an <a> element:
// myAnchor.setAttribute("href", "https://www.google.com");
// ​
// Element getAttribute()
// The getAttribute() method returns the value of an element's attribute.
// Syntax
// element.getAttribute(name)
// ​
// Example:
// <html>
//   <body>
//     <h2>The getAttribute() Method</h2>
//     <button id="myButton">BUTTON</button>
//     <p>The value of the "id" attribute of the button is:</p>
//     <p id="demo"></p>
//   </body>
// </html>

// <script>
//   const myButton = document.getElementById("myButton");
//   let out = myButton.getAttribute("id");
//   document.getElementById("demo").innerText = out;
// </script>
// ​
// Live code: Codepen
// WE:
// Deployed Link : https://fluffy-souffle-6e0105.netlify.app/
// https://course.masaischool.com/problems/26355
// <script>
//       document.querySelector("form").addEventListener("submit", myTodo);
// let total=0
// function myTodo() {
//   event.preventDefault();
//   var priority = document.querySelector("#priority").value;

//   var taskObj = {
//     taskName: document.querySelector("#task").value,
//     priority: priority,
//   };


//   displayTable(taskObj);
//   total++
//   console.log(total)
//   document.querySelector("#total-todos").innerText=total
// }

// function displayTable(taskObj) {

//     var tr = document.createElement("tr");
//     var td1 = document.createElement("td");
//     td1.innerText = taskObj.taskName;

//     var td2 = document.createElement("td");
//     td2.innerText = taskObj.priority;

//     if (taskObj.priority == "High") {
//       td2.style.backgroundColor = "red";
//     } else {
//       td2.style.backgroundColor = "green";
//     }

//     var td3 = document.createElement("td");
//     td3.innerText = "Delete";
//     td3.addEventListener("click", deleteRow);
//     td3.style.color = "red";
//     tr.append(td1, td2, td3);
//     document.querySelector("tbody").append(tr);
//   ;
// }

// function deleteRow() {
//   event.target.parentNode.remove();
//   total--
//   console.log(total)
//   document.querySelector("#total-todos").innerText=total

// }
// </script>
// ​
// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Inventory Management</title>
//     <style>
//       /* Write all the necessery style here */
//       /* Focus on functionality first then only do the styling part  */
//     </style>
//   </head>
//   <body>
//     <div id="create">
//       <h1>Add Products in Inventory</h1>
//       <form>
//         <input placeholder="Product Name" id="name" type="text" />
//         <select id="catagory">
//           <option value="">Product Catagory</option>
//           <option value="Grocery">Grocery</option>
//           <option value="Electronics">Electronics</option>
//           <option value="Fashion">Fashion</option>
//           <option value="Home Appliances">Home Appliances</option>
//         </select>
//         <input type="text" id="brand" placeholder="Brand" />
//         <input placeholder="Product Price" id="price" type="number" />
//         <select id="deliveredBy">
//           <option value="">Delivered By</option>
//           <option value="Plane">Plane</option>
//           <option value="Ship">Ship</option>
//           <option value="Delivery Van">Delivery Van</option>
//         </select>
//         <input type="submit" value="Add Inventory" />
//       </form>
//     </div>
//     <!-- This is the h1 tag for showing the total price  -->
//     <h1 id="total-price">Total Price:- 0</h1>
//     <table>
//       <thead>
//         <tr>
//           <th>Product Name</th>
//           <th>Catagory</th>
//           <th>Brand</th>
//           <th>Price</th>
//           <th>Delivered By</th>
//           <th>Price Segment</th>
//           <th>Delete</th>
//         </tr>
//       </thead>
//       <tbody>
//         <!-- Here you will append the data as tr-td when the form gets submitted  -->
//       </tbody>
//     </table>
//   </body>
//   <script>
//     document.querySelector("form").addEventListener("submit", myFunction);
//     var totalPrice = 0;
//     var dataArr = [];
//     function myFunction() {
//       event.preventDefault();
//       var dataObj = {
//         pName: document.querySelector("#name").value,
//         pCategory: document.querySelector("#catagory").value,
//         pBrand: document.querySelector("#brand").value,
//         pPrice: document.querySelector("#price").value,
//         pDeliveredBy: document.querySelector("#deliveredBy").value,
//       };
//       dataArr.push(dataObj);
//       //console.log(dataArr)
//       displayTable(dataArr);
//       totalPrice = totalPrice + Number(dataObj.pPrice);
//       document.querySelector("#total-price").innerText = totalPrice;
//     }

//     function displayTable(dataArr) {
//       document.querySelector("tbody").innerHTML = "";
//       dataArr.map(function (elem) {
//         var tr = document.createElement("tr");
//         var td1 = document.createElement("td");
//         td1.innerText = elem.pName;
//         var td2 = document.createElement("td");
//         td2.innerText = elem.pCategory;
//         var td3 = document.createElement("td");
//         td3.innerText = elem.pBrand;
//         var td4 = document.createElement("td");
//         td4.innerText = elem.pPrice;
//         var td5 = document.createElement("td");
//         td5.innerText = elem.pDeliveredBy;
//         var td6 = document.createElement("td");
//         if (elem.pPrice > 100) {
//           td6.innerText = "Expensive";
//         } else {
//           td6.innerText = "Not-Expensive";
//         }
//         var td7 = document.createElement("td");
//         td7.innerText = "Delete";
//         td7.addEventListener("click", function () {
//           event.target.parentNode.remove();
//           totalPrice = totalPrice - Number(elem.pPrice);
//           document.querySelector("#total-price").innerText = totalPrice;
//         });
//         tr.append(td1, td2, td3, td4, td5, td6, td7);
//         document.querySelector("tbody").append(tr);
//       });
//     }

//   </script>
// </html>
// ​
// document.querySelector("form").addEventListener("submit", myTodo);

// let todoArr = [];
// function myTodo() {
//   event.preventDefault();
//   var task = document.querySelector("#task").value;
//   var priority = document.querySelector("#priority").value;

//   let todoObj = {
//     task,
//     priority,
//   };
//   todoArr.push(todoObj);
//   displayTable(todoArr);
// }

// function displayTable(todoArr) {
//   document.querySelector("tbody").innerHTML = "";
//   todoArr.map(function (elem) {
//     var tr = document.createElement("tr");
//     var td1 = document.createElement("td");
//     td1.innerText = elem.task;

//     var td2 = document.createElement("td");
//     td2.innerText = elem.priority;

//     if (elem.priority == "High") {
//       td2.style.backgroundColor = "red";
//     } else {
//       td2.style.backgroundColor = "green";
//     }

//     var td3 = document.createElement("td");
//     td3.innerText = "Add";
//     td3.style.color = "red";
//     tr.append(td1, td2, td3);
//     document.querySelector("tbody").append(tr);
//   });
// }