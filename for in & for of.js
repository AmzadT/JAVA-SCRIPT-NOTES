// for...in

// The for...in statement iterates over all enumerable string properties of an object (ignoring properties keyed by symbols), including inherited enumerable properties.

var object = { a: 1, b: 2, c: 3 };

for (var key in object) {
  console.log(`${key}: ${object[key]}`);  // hare template literal use.
}

// Expected output:
// "a: 1"
// "b: 2"
// "c: 3"



// for...of

// The for...of statement executes a loop that operates on a sequence of values sourced from an iterable object. Iterable objects include instances of built-ins such as Array, String, TypedArray, Map, Set, NodeList (and other DOM collections), as well as the arguments object, generators produced by generator functions, and user-defined iterables.

var array = ['a', 'b', 'c'];

for (var element of array) {
  console.log(element);
}

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"



// for await...of

// The for await...of statement creates a loop iterating over async iterable objects as well as sync iterables. This statement can only be used in contexts where await can be used, which includes inside an async function body and in a module.

async function* foo() {
    yield 1;
    yield 2;
  }
  
  (async function () {
    for await (var num of foo()) {
      console.log(num);
      // Expected output: 1
  
      break; // Closes iterator, triggers return
    }
})();
  



// The class declaration creates a binding of a new class to a given name.

class Polygon {
    constructor(height, width) {
      this.area = height * width;
    }
  }
  
console.log(new Polygon(4, 3).area);
// Expected output: 12




//   The async function declaration creates a binding of a new async function to a given name. The await keyword is permitted within the function body, enabling asynchronous, promise-based behavior to be written in a cleaner style and avoiding the need to explicitly configure promise chains.

function resolveAfter2Seconds() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    var result = await resolveAfter2Seconds();
    console.log(result);
    // Expected output: "resolved"
}
  
asyncCall();




// The async function* declaration creates a binding of a new async generator function to a given name.

async function* foo() {

    yield await Promise.resolve('a');
    yield await Promise.resolve('b');
    yield await Promise.resolve('c');
  }
  
  var str = '';
  
  async function generate() {
    for await (var val of foo()) {
      str = str + val;
    }
    console.log(str);
}
  
generate();
// Expected output: "abc"




// A block statement is used to group zero or more statements. The block is delimited by a pair of braces ("curly braces") and contains a list of zero or more statements and declarations.

var x = 1;
let y = 1;

if (true) {
  var x = 2;
  let y = 2;
}

console.log(x);
// Expected output: 2

console.log(y);
// Expected output: 1





// The break statement terminates the current loop or switch statement and transfers program control to the statement following the terminated statement. It can also be used to jump past a labeled statement when used within that labeled statement.

var i = 0;

while (i < 6) {
  if (i === 3) {
    break;
  }
  i = i + 1;
}

console.log(i);
// Expected output: 3




// The const declaration declares block-scoped local variables. The value of a constant can't be changed through reassignment using the assignment operator, but if a constant is an object, its properties can be added, updated, or removed.

const number = 42;

try {
  number = 99;
} catch (err) {
  console.log(err);
  // Expected output: TypeError: invalid assignment to const 'number'
  // (Note: the exact output may be browser-dependent)
}

console.log(number);
// Expected output: 42




// The continue statement terminates execution of the statements in the current iteration of the current or labeled loop, and continues execution of the loop with the next iteration.

var text = '';

for (var i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  }
  text = text + i;
}

console.log(text);
// Expected output: "012456789"





// The do...while statement creates a loop that executes a specified statement until the test condition evaluates to false. The condition is evaluated after executing the statement, resulting in the specified statement executing at least once.

var result = '';
var i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result);
// Expected output: "12345"




// An empty statement is used to provide no statement, although the JavaScript syntax would expect one.

var array1 = [1, 2, 3];

// Assign all array values to 0
for (var i = 0; i < array1.length; array1[i++] = 0 /* empty statement */);

console.log(array1);
// Expected output: Array [0, 0, 0]





// The export declaration is used to export values from a JavaScript module. Exported values can then be imported into other programs with the import declaration or dynamic import. The value of an imported binding is subject to change in the module that exports it — when a module updates the value of a binding that it exports, the update will be visible in its imported value.

// Exporting declarations

// export var name1, name2/*, … */; // also var
// export var name1 = 1, name2 = 2/*, … */; // also var, let
// export function functionName() { /* … */ }
// export class ClassName { /* … */ }
// export function* generatorFunctionName() { /* … */ }
// export var { name1, name2: bar } = o;
// export var [ name1, name2 ] = array;

// // Export list
// export { name1, /* …, */ nameN };
// export { variable1 as name1, variable2 as name2, /* …, */ nameN };
// export { variable1 as "string name" };
// export { name1 as default /*, … */ };

// // Default exports
// export default expression;
// export default function functionName() { /* … */ }
// export default class ClassName { /* … */ }
// export default function* generatorFunctionName() { /* … */ }
// export default function () { /* … */ }
// export default class { /* … */ }
// export default function* () { /* … */ }

// // Aggregating modules
// export * from "module-name";
// export * as name1 from "module-name";
// export { name1, /* …, */ nameN } from "module-name";
// export { import1 as name1, import2 as name2, /* …, */ nameN } from "module-name";
// export { default, /* …, */ } from "module-name";
// export { default as name1 } from "module-name";





// An expression statement is an expression used in a place where a statement is expected. The expression is evaluated and its result is discarded — therefore, it makes sense only for expressions that have side effects, such as executing a function or updating a variable.

// function foo() {
//     console.log("foo");
//   }(); // SyntaxError: Unexpected token '('
  
//   // For some reason, you have a variable called `let`
//   var let = [1, 2, 3];
//   let[0] = 4; // SyntaxError: Invalid destructuring assignment target
  
//   {
//     foo: 1,
//     bar: 2, // SyntaxError: Unexpected token ':'
//   };





// The for statement creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually a block statement) to be executed in the loop.

var str = '';

for (var i = 0; i < 9; i++) {
  str = str + i;
}

console.log(str);
// Expected output: "012345678"





// The function declaration creates a binding of a new function to a given name.

function calcRectArea(width, height) {
    return width * height;
}
  
console.log(calcRectArea(5, 6));
// Expected output: 30

  



// The function* declaration creates a binding of a new generator function to a given name. A generator function can be exited and later re-entered, with its context (variable bindings) saved across re-entrances.

function* generator(i) {
    yield i;
    yield i + 10;
}
  
var gen = generator(10);

console.log(gen.next().value);
// Expected output: 10

console.log(gen.next().value);
// Expected output: 20






//   The if...else statement executes a statement if a specified condition is truthy. If the condition is falsy, another statement in the optional else clause will be executed.

function testNum(a) {
    var result;
    if (a > 0) {
      result = 'positive';
    } else {
      result = 'NOT positive';
    }
    return result;
}

console.log(testNum(-5));
// Expected output: "NOT positive"






// The static import declaration is used to import read-only live bindings which are exported by another module. The imported bindings are called live bindings because they are updated by the module that exported the binding, but cannot be re-assigned by the importing module.

// import defaultExport from "module-name";
// import * as name from "module-name";
// import { export1 } from "module-name";
// import { export1 as alias1 } from "module-name";
// import { default as alias } from "module-name";
// import { export1, export2 } from "module-name";
// import { export1, export2 as alias2, /* … */ } from "module-name";
// import { "string name" as alias } from "module-name";
// import defaultExport, { export1, /* … */ } from "module-name";
// import defaultExport, * as name from "module-name";
// import "module-name";






// A labeled statement is any statement that is prefixed with an identifier. You can jump to this label using a break or continue statement nested within the labeled statement.

var str = '';

loop1: for (var i = 0; i < 5; i++) {
  if (i === 1) {
    continue loop1;
  }
  str = str + i;
}

console.log(str);
// Expected output: "0234"





// The let declaration declares re-assignable, block-scoped local variables, optionally initializing each to a value.

let x = 1;

if (x === 1) {
  let x = 2;

  console.log(x);
  // Expected output: 2
}

console.log(x);
// Expected output: 1





// The return statement ends function execution and specifies a value to be returned to the function caller.

function getRectArea(width, height) {
    if (width > 0 && height > 0) {
      return width * height;
    }
    return 0;
}

console.log(getRectArea(3, 4));
// Expected output: 12

console.log(getRectArea(-3, 4));
// Expected output: 0





// The switch statement evaluates an expression, matching the expression's value against a series of case clauses, and executes statements after the first case clause with a matching value, until a break statement is encountered. The default clause of a switch statement will be jumped to if no case matches the expression's value.

var expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}





// The throw statement throws a user-defined exception. Execution of the current function will stop (the statements after throw won't be executed), and control will be passed to the first catch block in the call stack. If no catch block exists among caller functions, the program will terminate.

function getRectArea(width, height) {
    if (isNaN(width) || isNaN(height)) {
      throw new Error('Parameter is not a number!');
    }
}

try {
getRectArea(3, 'A');
} catch (e) {
console.error(e);
// Expected output: Error: Parameter is not a number!
}
  





// The try...catch statement is comprised of a try block and either a catch block, a finally block, or both. The code in the try block is executed first, and if it throws an exception, the code in the catch block will be executed. The code in the finally block will always be executed before control flow exits the entire construct.

try {
    nonExistentFunction();
} catch (error) {
console.error(error);
// Expected output: ReferenceError: nonExistentFunction is not defined
// (Note: the exact output may be browser-dependent)
}
  





// The var statement declares function-scoped or globally-scoped variables, optionally initializing each to a value.

var x = 1;

if (x === 1) {
  var x = 2;

  console.log(x);
  // Expected output: 2
}

console.log(x);
// Expected output: 2






// The while statement creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated before executing the statement.

var n = 0;

while (n < 3) {
  n++;
}

console.log(n);
// Expected output: 3