// Javascript Basic DOM Manipulation

// What is JavaScript?
// JavaScript is a scripting or programming language that allows you to implement complex things on web pages —

// every time a web page does more than just sit there and display static information for you to look at
// displaying timely content updates
// interactive maps,
// animated 2D/3D graphics,
// scrolling video jukeboxes, etc.
// you can bet that JavaScript is probably involved.

// How to write Javascript

// <script type="text/javascript">
// function doSomething(){
//  // Your Code Goes Here
// }
// </script>
// HTML Events
// HTML events allow JavaScript to register different event handlers on elements in an HTML document.

// click

// Execute a JavaScript when the element is clicked:

// <button onclick="function1()">MASAI Button</button>
// alert()

// Display an alert box:

// alert("Hello! I am an alert box!!");
// https://codepen.io/nrupuld/pen/gNMKWm

// DOM
// The DOM is one of the most-used APIs on the Web because it allows code running in a browser to access and interact with every element in the document. Elements can be created, moved and changed. Event listeners can be added to elments and triggered on occurrence of a given event.
// Represented by a tree structure of all the elements created by the browser
// We can use javascript to manipulate/read/write the DOM
// https://i.imgur.com/OK78Vah.png

// Write the following out in any page and see what the response is

// // URL of a page
// document.URL
// // title of a page
// document.title
// // domain
// document.domain
// // doctype
// document.doctype
// // head
// document.head
// // body
// document.body
// // all elements
// document.all
// // forms
// document.forms
// // links
// document.links
// // images
// document.images

// // there are many more of these

// // Some of the responses will contain a list of all nodes
// // Even though this may look like an array
// // It is not
// // You can confirm this by doing Array.isArray( document.images )
// // But you can still use a for loop and access the elements via a bracket notation
// Selecting an Element
// getElementById()
// The Document method getElementById() returns an Element object representing the element whose id property matches the specified string. Since element IDs are required to be unique if specified, they're a useful way to get access to a specific element quickly.
// document.getElementById()

// Change the content inside a particular HTML ELEMENT

// Element.innerHTML
//     Element.innerHTML
//     Is a DOMString representing the markup of the element's content.
// document.getElementById("id").innerHTML = "New Value"
// https://codepen.io/nrupuld/pen/qzNyYP

// innerhtml

// Element.textContent
//     Element.textContent
// textContent

// document.getElementById("id").textContent = "New Value"
// value
// Get the value of an input element

// document.getElementById("id").value
// https://codepen.io/nrupuld/pen/zVBJaa

// Value of a select element
// https://codepen.io/nrupuld/pen/NZrOVL

// Values and Setting Values and HTML
// https://codepen.io/nrupuld/pen/pXbOee

// Styling Elements
// document.getElementById("id").style.color
// style

// https://codepen.io/nrupuld/pen/vqKzbY

// create, delete, insert, traverse, search
// Basic DOM manipulation

// <div id="id1">
//     <div id="id2">
//         <div id="id3">
//             <p id="id4">
//                 Some Text
//             </p>
//         </div>
//         <div id="id5">
//             Some Text
//         </div>
//     </div>
//     <div id="id6">
//         Some Text
//     </div>
// </div>
// Child node:

// A node directly inside another node id2 and id6 are child nodes of id1 also id3 is child node of id2 and id4 is child node of id3
// Descendant node:

// A node anywhere inside another node. id2 and id6 are child nodes of id1 and also descendants. id3 id4 id5 are not child nodes of id1 but descendants
// Sibling nodes:

// Nodes that sit on the same level. In the above example id2 and id6 are siblings and id3 and id5 are also siblings
// Check the following to how the structure is for a dom
// https://software.hixie.ch/utilities/js/live-dom-viewer/
// getElementsByClassName()
// The getElementsByClassName() method returns all the elements that matches the classname

// var elems = document.getElementsByClassName(class)

// for(var i=0; i<elems.length; i++){
//     console.log( elems[i].textContent )
// }
// The return type is an list of elements. Note: all array methods will not work

// https://codepen.io/albseb511/pen/PoqzgRr?editors=1011

// getElementsByTagName()
// The getElementsByTagName() method returns all the elements that matches the classname

// var elems = document.getElementsByTagName(tag)

// for(var i=0; i<elems.length; i++){
//     console.log( elems[i].textContent )
// }
// The return type is an list of elements. Note: all array methods will not work

// https://codepen.io/albseb511/pen/RwwYJwj?editors=1010

// querySelector
// The querySelector() method returns the first element that matches one or more CSS selectors. If no match is found, it returns null.

// The return type is an element.

// var ele = document.querySelector(selector);
// https://codepen.io/nrupuld/pen/BgdvQQ

// querySelectorAll
// The querySelectorAll() returns all elements that match the specified CSS selector.

// The return type is an list of elements. Note: all array methods will not work

// var elems = document.querySelectorAll(selector);

// for(var i=0; i<elems.length; i++){
//     console.log( elems[i].textContent )
// }
// Using Element Selector
// https://codepen.io/nrupuld/pen/QXMzOa

// Using Class Selectors
// https://codepen.io/nrupuld/pen/xoLmNx

// createElement
// The createElement() method creates a new HTML element

// document.createElement(tagName);
// https://codepen.io/nrupuld/pen/MMvLed

// appendChild
// The appendChild() method adds an element as the last child to the HTML element

// ele.appendChild(childEle);
// appendChild

// append
// The append() method adds elements as the last child to the HTML element

// ele.append(childEle);
// append

// Differences from Node.appendChild():

// ParentNode.append() allows you to also append DOMString objects, whereas Node.appendChild() only accepts Node objects.
// ParentNode.append() has no return value, whereas Node.appendChild() returns the appended Node object.
// ParentNode.append() can append several nodes and strings, whereas Node.appendChild() can only append one node.
// removeChild
// The removeChild() method removes a specified child element from the HTML element

// ele.removeChild(childEle);
// https://codepen.io/nrupuld/pen/ewExqz

// remove
// <div id="div-01">Here is div-01</div>
// <div id="div-02">Here is div-02</div>
// <div id="div-03">Here is div-03</div>
// var el = document.getElementById('div-02');
// el.remove(); // Removes the div with the 'div-02' id
// https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove

// insertBefore
// The insertBefore() method adds a specified child element before another child element.

// var insertedNode = parentNode.insertBefore(newElement, referenceElement);
// insertBefore

// https://codepen.io/nrupuld/pen/dBzLVy

// Different nodes:








// Day-9 : DOM-1
// What is DOM?
// Imagine this🤔 you are watching TV and you don't like the show that's being streamed, and you want to change it and you also want to increase its volume. To do that, there has to be a way for you to interact with your television. So how do you control your tv now? 
// By using remote

// The remote serves as the bridge which allows you interact with your television.
// In the same way, JavaScript helps you to interact with the HTML page via DOM.
// For example, say that you want a button to change colours when it gets clicked or you want text to be changed. First, you need to reference those elements from your JavaScript.
// The DOM is a tree-like representation of the web page that gets loaded into the browser.
// Whenever html document is loaded on browser, corresponding to that document another representation of document is created which is known as DOM.
// Let’s suppose you have this code 
// <!DOCTYPE html>
// <html>
//   <head>
//     <title>My Text</title>
//   </head>
//   <body>
//     <h1>My Header</h1>
//     <p>My Paragraph</p>
//   </body>
// </html>
// ​
// If you open this in browser the web browser creates a DOM of the webpage when the page is loaded. The DOM model is created as a tree of objects like this

//  HTML meets 🤝 JS 

// How to add JS inside HTML
// <html>
// <head>
//   <title>Connecting JS</title>
// </head>
// <body>
// </body>
// </html>

// <script>
// 	function doSomething(){
// 		 // Your Code Goes Here
// 	}
// </script>
// ​
// Inside script tag you can write your js code
// Console.log(): 
// console.log() in javascript is your best friend life long

// Where to find your best friend ?
// As you already know, you should use console inside your js code, so I am writing console.log() in script tag
// <!DOCTYPE html>
// <html>
//   <head>
//     <title>My Text</title>
//   </head>
//   <body>
//     <h1>My Header</h1>
//     <p>My Paragraph</p>
//   </body>
// </html>
// <script>
// 	console.log("Oh my Friend")
// </script>
// ​
// Now, where can I find my best friend
// Step-1: Run HTML file on browser.
// Step-2: Right click and click on inspect.
// Step-3: You can see console beside Elements

// Now with help of your friend let’s see what is hiding in our document 

// <!DOCTYPE html>
// <html>
//   <head>
//     <title>My Text</title>
//   </head>
//   <body>
//     <h1>My Header</h1>
//     <p>My Paragraph</p>
//   </body>
// </html>
// <script>
// 	console.log(document)
// </script>
// ​
// Output

// So console.log(document) returning entire document in object format
// Write the following out in any page and see what the response is
// // URL of a page
// console.log(document.URL)
// // title of a page
// console.log(document.title)
// // domain
// console.log(document.domain)
// // doctype
// console.log(document.doctype)
// // head
// console.log(document.head)
// // body
// console.log(document.body)
// // all elements
// console.log(document.all)
// // forms
// console.log(document.forms)
// // links
// console.log(document.links)
// // images
// console.log(document.images)

// ​
// onClick Event:

// The onclick event occurs when the user clicks on an element.
// The onclickevent executes a certain functionality when a button/element is clicked. 
// Basic onclick syntax:
// <element onclick="functionToExecute()">Click</element>
// ​
// Example:
// <html>
// <head>
//       <title>OnClick</title>
// </head>
// <body>
//       <button onClick="likeMe()">Like👍</button>
// </body>
// </html>
// ​
// Now we need to define this function in javascript to make it work
// <script>
//       function likeMe() {
//             console.log("Someone liked me")
//       }
// </script>
// ​
// Now when we click on “Like” button, we will get “Someone liked me” in console

// Let’s dry run it

// Alert():
// The alert() method in JavaScript is used to display a virtual alert box. 
// It is mostly used to give a warning message to the users. It displays an alert dialog box that consists of some specified message (which is optional) and an OK button. 
// When the dialog box pops up, we have to click "OK" to proceed.

// Syntax
// alert(message)
// ​
// In the above example instead of console, we will try to keep alert
// <html>
// <head>
//       <title>OnClick</title>
// </head>
// <body>
//       <button onClick="likeMe()">Like👍</button>
// </body>
// </html>

// <script>
//       function likeMe() {
//             alert("Someone liked me")
//       }
// </script>
// ​
// Output

// Document.getElementById()
// Syntax
// document.getElementById(id_Name)
// ​
// Parameters
// idThe ID of the element to locate. The ID is case-sensitive string which is unique within the document; only one element may have any given ID.
// Return value
// An Element object describing the DOM element object matching the specified ID, or null if no matching element was found in the document.
// The Document method getElementById() returns an Element object representing the element whose id property matches the specified string. 
// Example:
// <html lang="en">
//   <head>
//     <title>Document</title>
//   </head>
//   <body>
//       <p id="para">I am paragraph</p> 
//       <div id="box">I am box</div>
//       <h1 id="head-1">I am heading 1</h1> 
//   </body>
// </html>

// <script>
//       console.log(document.getElementById("para"))
//       console.log(document.getElementById("box"))
//       console.log(document.getElementById("head-1"))

// </script>
// ​
// Output:

// Read more : https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
// innerText (or) textContent:
// Did you remember in our first class we have discussed about HTML elements

// The content inside opening and closing tag is called as innerText also called as textContent
// The innerText property sets or returns the text content of an element.
// Syntax
// element.innerText
// ​
// Example:
// Let’s take previous example and try to get innerText of tags
// <html lang="en">
//   <head>
//     <title>Document</title>
//   </head>
//   <body>
//       <p id="para">I am paragraph</p> 
//       <div id="box">I am box</div>
//       <h1 id="head-1">I am heading 1</h1> 
//   </body>
// </html>

// <script>
//       console.log(document.getElementById("para").innerText)
//       console.log(document.getElementById("box").innerText)
//       console.log(document.getElementById("head-1").innerText)

// </script>
// ​
// Output:

// innerText vs innerHTML
// innerText
// innerHTML
// Retrieves and sets the content in plain text.
// Retrieves and sets the content in HTML format.
// It ignores the spaces.
// It considers the spaces.
// It returns text without an inner element tag.
// It returns a tag with an inner element tag.
// Example: 
// <i> tag is italic tag
// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <title>innerText vs innerHTML</title>
//   </head>
//   <body>
//     <div id="box">Welcome to <i> Masai School </i></div>
//   </body>
// </html>

// <script>
//       console.log(document.getElementById("box").innerText)

//       console.log(document.getElementById("box").innerHTML)

// </script>
// ​
// Output:

// From the above example you can clearly see that
// innerText is retreiving only text inside tags
// innerHTML is retreiving with HTML elements (<i> tag)
// Changing innerText of an element
// Javascript provides us with the innerText property that we can use to change the text inside an element.
// Syntax:
//  element.textContent = "new_value" or
//  element.innerText = "new_value" 
// ​
// Example:
// <html>
// <body>
//   <h1 id="head">Heading 1</h1>
// </body>
// <script>
//   // change the text content in the heading
//   document.getElementById("head").textContent = "H1";
// </script>
// </html>
// ​
// Example 2 : Codepen
// Value:
// Getting values from Input tags
// In HTML introduction we have seen so many input tags.
// We have also seen masai form

// To interact with user, we need to get the value of 
// Full name
// Email
// Password
// How to get those values?
// For getting those values we have an attribute in input tag known as value which is by default empty.
// <input type="text" value=""/>
// ​
// Try to type in some value and check the output
// <input type="text" value="Masai School"/>
// ​
// Output:

// So, whatever we type in that input box, we can capture that in value attribute.
// Example:
// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <title>Document</title>
//   </head>
//   <body>
//     <input id="name" type="text" value="" />
//     <button onClick="catchValue()">Submit</button>
//   </body>
// </html>

// <script>
//   function catchValue() {
//     var studentName = document.getElementById("name").value;
//     console.log(studentName);
//   }
// </script>
// ​
// Output:

// Live code : Codepen
// Example 2 : Codepen
// Displaying data on Browser
// Untill now we just got the value and displayed in console, but in real-world apps, we need to show data to users also
// Let’s take above example of taking input value of name from the user, instead of consoling the name , let’s try to print name on browser.
// For that let’s create <h1> tag in the body and we will try to fill in innerText
// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <title>Document</title>
//   </head>
//   <body>
//     <input id="name" type="text" value="" />
//     <button onClick="catchValue()">Submit</button>
//     <!-- Show output here -->
//     <h1 id="output"></h1>
//   </body>
// </html>

// <script>
//   function catchValue() {
//     var studentName = document.getElementById("name").value;
//     document.getElementById("output").innerText = studentName;
//   }
// </script>
// ​
// Output:

// Live code : Codepen
// Getting values from Select tags
// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Document</title>
//   </head>
//   <body>
//     <select id="gender">
//       <option value="">Select gender</option>
//       <option value="MALE">Male</option>
//       <option value="FEMALE">Female</option>
//     </select>
//     <button onClick="getGender()">Submit</button>
//   </body>
// </html>

// <script>
//   function getGender() {
//     var gen = document.getElementById("gender").value;
//     console.log(gen);
//   }
// </script>