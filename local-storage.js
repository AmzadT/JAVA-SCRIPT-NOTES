// # Class Notes

// 1. **Frontend and Backend**:
//     - The **frontend** is what you see and interact with on the web. It's all about the user experience, from the layout to the colors and fonts used.
//     - The **backend** is like the engine of a car—it's under the hood. You don't see it, but it's what makes the website work. It deals with the server, applications, and databases.
// 2. **Frontend**:
// a. **HTML & CSS - Flex and Grid**:
//     - HTML (HyperText Markup Language) is like the skeleton of a web page. It gives structure by defining elements like headings, paragraphs, and images.
//     - CSS (Cascading Style Sheets) is like the clothing for the HTML skeleton. It styles the web page with colors, fonts, and layouts.
//     - Flex and Grid are tools in CSS that allow you to layout and align elements on your page efficiently.
//         - **Flex** is for one-dimensional layouts. Imagine it like a string of beads—flex lets you align these beads in a line and space them out nicely.
//         - **Grid** is for two-dimensional layouts. Think of it like a chessboard, where you can control the placement of items both vertically and horizontally.
        
//         Please note that it’s more of a general pattern and helps built things easily and there is no strict rule/recommendation that flex should only be used of 1D and grid for  2D
        
    
//     b. **JavaScript and DOM**:
    
//     - JavaScript is the programming language that makes web pages interactive. If HTML/CSS is the body, JavaScript is the nervous system that reacts to what you do, like clicking a button or submitting a form.
//     - DOM (Document Object Model) is a representation of the HTML structure that JavaScript uses to manipulate the content, structure, and style of the website.
// 3. **Backend**:
// a. **Server**:
//     - A server is a computer that serves up your website. When you visit a website, you're actually connecting to a server that sends you the files needed to display the site.
    
//     b. **Database**:
    
//     - This is where all the data of your website is stored. Think of it as a huge filing cabinet with all the information that your website needs to function.
    
//     c. **Request-Response Cycle**:
    
//     - This is the process that happens when you ask (or request) to see a website. Your browser sends a request to the server, which finds the right data in the database, puts it together in a web page, and sends it back (or responds) to you.
// 4. **JSON**
    
//     JSON stands for JavaScript Object Notation, and it's a way to store and transport data. Let's simplify this:
    
//     Imagine you have a bunch of postcards with different bits of information on them—someone's name, an address, or a little note. Each postcard represents a piece of data. Now, if you wanted to send a bunch of these postcards to a friend, you'd put them all in a box and mail them. In the world of web development, JSON is like that box of postcards.
    
//     JSON is favoured because it's easy for humans to read and write, and also easy for machines to parse and generate. Here's what makes JSON special:
    
//     1. **Text-based and Lightweight**:
//         - JSON is just text, which means we can quickly send it across the internet. It's like sending an email instead of a heavy package.
//     2. **Structured Data**:
//         - JSON is organized. Think of it like a closet with different shelves. Each shelf has a label, and you put the right items on the right shelf. In JSON, these labels are called keys, and the items you put on the shelves are called values. Together, they make a key-value pair, which looks like this: `"key": "value"`.
//     3. **Arrays and Objects**:
//         - JSON can hold two things: objects and arrays. An object is like a box with labeled compartments. Each piece of data has its own spot. In coding terms, this is written with curly braces `{}`.
//         - An array is a list where the order matters, like a shopping list. This is written with square brackets `[]`.
    
//     **Example 1** : Here's an example JSON that represents an array of objects. Each object could represent a product in an online store:
    
//     ```json
//     [
//       {
//         "productId": 101,
//         "productName": "Super Widget",
//         "price": 25.99,
//         "stock": 50,
//         "categories": ["gadgets", "widgets", "electronics"]
//       },
//       {
//         "productId": 102,
//         "productName": "Mega Widget",
//         "price": 29.99,
//         "stock": 35,
//         "categories": ["gadgets", "widgets", "home"]
//       },
//       {
//         "productId": 103,
//         "productName": "Hyper Widget",
//         "price": 39.99,
//         "stock": 20,
//         "categories": ["gadgets", "widgets", "office"]
//       }
//     ]
//     // An array in JSON is a collection of items, which can be numbers, strings, booleans, objects, or even other arrays. An array of objects would be a list where each item is a "box" of associated key-value pairs.
//     ```
    
//     In this JSON array:
    
//     - Each set of `{}` is an individual object, each representing a product.
//     - The square brackets `[]` indicate the start and end of the array.
//     - Each object has the same structure but with different data, making it easy to process them in the same way, like displaying them on a webpage or storing them in a database.
//     - `"productId"`, `"productName"`, `"price"`, `"stock"`, and `"categories"` are keys common to all objects.
//     - The values for `"categories"` themselves are arrays, showing that JSON can nest arrays within objects for complex data structures.
    
//     This structure is very common when you're dealing with multiple items that need to be processed in the same manner, like displaying a list of products on a website, which might be fetched from a server's database in this JSON format.
    
//     **Example 2** : Here's an example JSON that represents an object. Each object could represent one entity
    
//     ```json
//     {
//       "name": "John Doe",
//       "age": 30,
//       "isStudent": false,
//       "courses": ["Web Development", "Design Basics"],
//       "address": {
//         "street": "123 Main St",
//         "city": "Anytown"
//       }
//     }
    
//     ```
    
//     In this JSON:
    
//     - `"name"`, `"age"`, `"isStudent"`, `"courses"`, and `"address"` are all keys.
//     - Each key has a value: a string like `"John Doe"`, a number like `30`, a Boolean like `false`, a list like `["Web Development", "Design Basics"]`, and an object like `{"street": "123 Main St", "city": "Anytown"}`.
    
//     Why use JSON in web development? 
    
//     Because it's a standard format that allows you to exchange data between a server and a client (like your browser), and it's supported in pretty much all programming languages, not just JavaScript. It's especially handy when you fetch data from a server to display on a webpage or send a user's information back to the server.









// # Session 2

// # Local Storage :

// 1. **What is Local Storage?**
//     - Think of Local Storage like a small notebook that your web browser has. Each website can write, read, and store its own notes in this notebook, but it can't see or change the notes from other websites.
//     - It's part of the Web Storage API, which provides a way for web pages to store data locally within the user's browser.
// 2. **Characteristics of Local Storage**:
//     - **Persistent Storage**: Unlike cookies, which can expire, Local Storage data remains saved even after you close and reopen the browser. It's like writing something in pen—it stays until you erase it.
//     - **Capacity**: Local Storage can hold a lot more data than cookies. Typically, it can store up to 5MB of data, which is like going from a small sticky note to a full notebook.
//     - **Per Domain**: Each website has its own separate Local Storage. This means that Website A can't look at or change the Local Storage of Website B.
// 3. **How It's Used**:
//     - **Storing User Preferences**: Say you choose a dark mode on a website. The site can save this preference in Local Storage, so next time you visit, it remembers your choice.
//         - Open https://chakra-ui.com/ and see for yourself
//     - **Saving Application State**: If you're using a web application and you've made some changes, the app can save these changes to Local Storage. This way, if you accidentally close the tab, your changes aren't lost.
//     - **Caching Data**: Websites can store some data locally to load faster. For example, a website could save a list of your most recently viewed items.
// 4. **How to Use It in JavaScript**:
//     - **Setting an Item**: You can store data using `localStorage.setItem('key', 'value');`. This is like writing a note with a label (key) and a message (value).
        
//         ```jsx
//         localStorage.setItem("name", "Bruce Wayne");
//         ```
        
//     - **Getting an Item**: To read the data, you use `localStorage.getItem('key');`. This is like reading the note you've written earlier.
        
//         ```jsx
//         localStorage.getItem("name");
//         ```
        
//     - **Removing an Item**: If you want to erase a note, you use `localStorage.removeItem('key');`.
        
//         ```jsx
//         localStorage.removeItem("name");
//         ```
        
// 5. **Limitations and Considerations**:
//     - It's only for small amounts of data. You wouldn't use it to store large files.
//     - It’s not secure for sensitive data, as anyone with access to the browser can potentially read it.
//     - All data is stored as strings, so you'll need to convert it if you're working with other data types (like numbers or objects).
//         - Numbers
            
//             ```jsx
//             localStorage.setItem("age", 23);
            
//             console.log(typeof localStorage.getItem("age")); // string
//             ```
            
//             Convert it to number
            
//             ```jsx
//             let age = Number(localStorage.getItem("age"));
//             console.log(typeof age); // number
//             ```
            
//         - Objects
            
//             ```jsx
//             let profile1 = {
//               name: "John",
//               age: 30,
//               city: "New York",
//             };
            
//             // storing it into localStorage
//             localStorage.setItem("profile1", JSON.stringify(profile1));
            
//             // getting it back from localStorage
//             let profile1Obj = JSON.parse(localStorage.getItem("profile1"));
//             console.log(profile1Obj);
//             ```
            
//         - Arrays
            
//             ```jsx
//             let students = [
//               {
//                 id: 1,
//                 name: "John",
//                 age: 30,
//                 city: "New York",
//               },
//               {
//                 id: 2,
//                 name: "Bruce",
//                 age: 28,
//                 city: "New Delhi",
//               },
//             ];
            
//             // Store students in local storage
//             localStorage.setItem("students", JSON.stringify(students));
            
//             // Retrieve students from local storage
//             let studentsArray = JSON.parse(localStorage.getItem("students"));
//             console.log(studentsArray);
//             ```
            

// Local Storage is a handy tool for enhancing user experience by remembering user settings and speeding up website performance through local data caching. However, its use should be tailored to the nature of the data and the requirements of the web application.











// # Day-12 Local Storage

// ## **What is localStorage in JavaScript?**

// - `localStorage` is a property that allows JavaScript sites and apps to save key-value pairs in a web browser with no expiration date.
// - This means the data stored in the browser will persist even after the browser window is closed.

// ## **How does localStorage work?**

// To use `localStorage` in your web applications, there are five methods to choose from:

// 1. `setItem()`: Add key and value to `localStorage`
// 2. `getItem()`: This is how you get items from `localStorage`
// 3. `removeItem()`: Remove an item by key from `localStorage`
// 4. `clear()`: Clear all `localStorage`

// ## **setItem():**

// - Just as the name implies, this method allows you to store values in the `localStorage`
// - It takes two parameters:
//     - a key and
//     - a value.
// - The key can be referenced later to fetch the value attached to it.
// - Using `setItem()`we can store **strings**, **numbers**, **booleans**, **arrays** and **objects**.

// ****How to store the JavaScript string in `localStorage`**

// ```jsx
// let name = "Masai"
// localStorage.setItem("school",name)
// ```

// ****How to store the JavaScript number in `localStorage`**

// ```jsx
// let mobile = 981918191
// localStorage.setItem("mbl",mobile)
// ```

// ****How to store the JavaScript array in `localStorage`**

// - In order to use local storage with our array, we'll need to convert our array into a string.
// - The way convert an array into a string is by using the `JSON stringify` function.

// ## Now what is JSON? 🤔🤔

// According to Mozilla - "JavaScript Object Notation (JSON) is a standard text-based format for representing structured data based on JavaScript object syntax." [1]

// - It is a data interchange format
// - It is based on Javascript object literals
// - used with network requests (AJAX etc.)
// - It can be parsed with almost any language with parsers if not natively

// ### **`Why should we use JSON?`**

// - JSON is one of the most commonly used data formats to transmit data in web applications. Moreover, its not just JavaScript that supports JSON, many commonly used languages on the Web including PHP, Python, C/C++, Java etc., also support JSON.
// - Thus, JSON can be used to send data from the front-end to the back-end, and vice-versa. Many popular databases like MongoDB, CouchDB, MySQL, Oracle and PostgreSQL also have extensive support for JSON.
// - Think of JSON as an almost universal data format on the Internet.
// - What Does JSON look like ?A JSON string’s format is very similar to a regular JavaScript Object literal which we have studied before.
// - It also consists of key - value pairs.
// - It supports the 6 common data types in JavaScript, String Number Array Boolean Null Object.

// Lets look at an example of a JSON object below:

// ```jsx
// var emp=
// {
// "Employees" : [
// {
// "userId":"sqwert",
// "jobTitleName":"Developer",
// "firstName":"Sam",
// "lastName":"Pat",

//     },
//     {
//     "userId":"amir1337",
//     "jobTitleName":"Front-end Developer",
//     "firstName":"Amir",
//     "lastName":"Khan",        }
// ],
// "count": 2

// }
// ```

// - In the above example, the JSON contains a key called Employees which is an array. It contains 2 objects with several fields.
// - Any data from the above object can be accessed in the same way as a regular JavaScript object literal as you can see from the example.

// ### **However, notice that in the JSON format all the keys are surrounded by quotes!**

// - To convert from a JavaScript Object to a JSON string we can use the JSON.stringify method.
// - To convert from a JSON string to a JavaScript Object we can use the JSON.parse method.

// Example:

// ```jsx
// var person = {
// name : "Sidharth",
// age : 100,
// height: "6 Ft 12 In",
// gender : "Female",
// hobbies: ["Coding", "Weight Lifting", "Running", "Eating"]
// }

// var json = JSON.stringify(person)

// console.log(json)

// var regularObject = JSON.parse(json)

// console.log(regularObject)
// Output:

// {"name":"Sidharth","age":100,"height":"6 Ft 12 In","gender":"Female","hobbies":["Coding","Weight Lifting","Running","Eating"]}

// {
// name : "Sidharth",
// age : 100,
// height: "6 Ft 12 In",
// gender : "Female",
// hobbies: ["Coding", "Weight Lifting", "Running", "Eating"]}

// ```

// - JSON will become more relevant when we learn about API’s and retrieving data from them.

// ## **`localStorage`**

// ## **Syntax**

// The following snippet accesses the current domain’s local Storage object and adds a data item to it using Storage.setItem().

// ```
// localStorage.setItem('myCat', 'Tom');

// ```

// The syntax for reading the localStorage item is as follows:

// ```
// var cat = localStorage.getItem('myCat');

// ```

// The syntax for removing the localStorage item is as follows:

// ```
// localStorage.removeItem('myCat');

// ```

// Clear all items

// ```
// localStorage.clear();

// ```

// use JSON.parse() to convert the string to an object

// ```
// var loadVal = JSON.Parse(localStorage.getItem('name'))

// ```

// use JSON.stringify() to convert an object to a string.

// ```
// localStorage.setItem('name',JSON.Stringify(users))
// ```

// ## WE:

// ```jsx
// document.querySelector("form").addEventListener("submit", todoApp);
// let taskArr = JSON.parse(localStorage.getItem("todoList")) || [];
// window.addEventListener("load", function () {
//   displayTable(taskArr);
// });
// function todoApp(event) {
//   event.preventDefault();
//   let taskName = document.querySelector("#task").value;
//   let priority = document.querySelector("#priority").value;
//   //console.log(taskName, priority);
//   let taskObj = {
//     task: taskName,
//     prior: priority,
//   };
//   taskArr.push(taskObj);
//   displayTable(taskArr);
//   localStorage.setItem("todoList", JSON.stringify(taskArr));
// }

// function displayTable(taskArr) {
//   document.querySelector("tbody").innerHTML = "";
//   taskArr.forEach(function (elem, index) {
//     let row = document.createElement("tr");
//     let col1 = document.createElement("td");
//     col1.innerText = elem.task;
//     let col2 = document.createElement("td");
//     col2.innerText = elem.prior;
//     if (elem.prior == "High") {
//       col2.style.backgroundColor = "red";
//     } else {
//       col2.style.backgroundColor = "green";
//     }
//     let col3 = document.createElement("td");
//     col3.innerText = "Delete";
//     col3.addEventListener("click", function () {
//       //event.target.parentNode.remove();
//       deleteRow(elem, index);
//     });
//     col3.style.color = "red";
//     row.append(col1, col2, col3);
//     document.querySelector("tbody").append(row);
//   });
// }

// function deleteRow(elem, index) {
//   //console.log(elem, index)
//   taskArr.splice(index, 1);
//   console.log(taskArr);
//   localStorage.setItem("todoList", JSON.stringify(taskArr));
//   displayTable(taskArr);
// }
// ```

// Feedback form

// https://forms.gle/864qJFe5KbpRUiWz9