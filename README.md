# Table of Contents

- [Introduction](#introduction)
- [Variables & Data Types](#variables--data-types)
  - [Concatenation](#concatenation)
  - [Template String](#template-string)
- [String Properties & Methods](#string-properties--methods)
- [Arrays](#array-properties--methods)
- [Object Literals](#object-literals)
- [Array of Objects](#array-of-objects)
- Loops

  - [For Loop](#for-loops)
  - [While Loop](#while-loops)
  - [Examples (to-do-list)](#examples-of-loops-to-use-in-a-todo-list)

- [High Order Array Methods](#high-order-array-methods)
- [Conditionals](#conditionals)
  - [Ternary Operator](#ternary-operator)
  - [Switches](#switches)
- [Functions](#functions)
  - [Arrow Functions](#arrow-functions)
- [Object Oriented Programming (OOP)](#object-oriented-programming-oop)
  - [Constructor functions](#constructor-functions)
  - [ECMAScript 2015 / ES6 Class](#class-es6)
  - [Date Object](#date-object)
- DOM Selection
- DOM Manipulation
- Events
- Basic Form Validation

---

# Introduction

- JavaScript is a high level, interpreted programming language (no need to worry about memory management)
- language of the front-end (client/browser) + back-end (server = Node.js)
- add JavaScript at the end of html file (right before ending body tag `</body>`)
  - we want html and css to load first
  - can be written within the html file, bound by `<script>` tags
  - can be sourced from a separate js file using src attribute inside script tag
  - `<script src="myJSfile.js"></script>`
- webpages have consoles, can output/run javascript in the console
  - run javascript functions
  - clear() to clear the console
  - output to the console = console.log(xyz)
  - log is one of the method to use in the console
  - MDN console = lists out the methods for console = great for debugging
- var, let, const = let us assign value to a variable
  - **var** = globally scoped (can be replaced again and again locally and globally with same name)
  - **let** = block level, can reassign value
  - **const** = block level, can only be of one initial value (has to initialize a value)
    - typically, always use const unless we know we gonna reassign (e.g. score in a game)
    - cannot change const value by reassigning another value
    - but const array or object, elements inside the array or object can still be modified

---

# Variables & Data Types

```js
var common = 2;
common = 3;
var common = "random";
```

Assignment using var with the same variable name can be repeated throughout the codes, can lead to bugs.

```js
let reassign = "white";
reassign = "light blue";
let reassign = "yellow"; // error
```

We can reassign value to an existing variable but cannot call let twice using the same variable name (can be useful to keep changing number/string variable)

```js
const solid = "glass";
solid = "water"; // error
const solid = "gas"; // error
```

## Data Types

> Data Types: String, Numbers, Boolean, null, undefined, Symbol

```js
const fName = "Bob"; // string
const age = 77; // number
const rating = 1.7; // number
const isCool = false; // boolean
const x = null; // null;
const y = undefined; // undefined
let z; // z == undefined
```

- both integers and decimals are Numbers (no float or decimal type)
- using `let`, if no value is directly assigned then the variable is undefined
- because we have to assign value for every const, undefined can only be assigned directly

> to test type = typeof xyz returns "object" for example

```js
const typeExample = typeof age;
console.log(typeExample + " is the type of data for age");
console.log(typeof x);
```

`typeof x` will show object, but null is not object (bogus result)

## Concatenation

```js
const conca1 = "My name is " + fName + " and my age is " + age;
```

This is the old way of incorporating variable into a string (use template string instead)

## Template String

> use back ticks ( `` ) instead of quotation marks

> grab variable by using the dollar sign and curly brackets `${var}`

```js
const ts1 = `My name is ${fName} and my age is ${age}`;
```

This will produce the same result as the example in concatenation without having to break apart components for each variable.

---

# String Properties & Methods

> PROPERTIES don't have ( ) after it &
> METHODS are functions associated with an object.

### 1. `myStr.length` = produces the length of the string (Number)

```js
const s1 = "Hello World";
s1.length == 11; // true
```

### 2. `myStr.toUpperCase()` = converts the string into all uppercase

### 3. `myStr.substring(n, m)`, where n = start (inclusive); m = end (exclusive)

characters in string starts in position 0 and the last character is in position (str.length - 1)

```js
s1.substring(1, 4) == "ell"; // true
s1.subtring(0, str.length) == "Hello World"; // the whole string
// m = str.length; so the last included character is (str.length - 1) = last

// we can stack multiple methods
s1.substring(2, s1.length - 3).toUpperCase() == "LLO WO"; // true
```

### 4. `myStr.split(x)` = produces an array in which the string is split by x (splitter)

```js
// no splitter
s1.split() -> ["Hello World"] // essentially turns a string into an array
// split each character in the string
s1.split("") -> ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"]
// split each word separated by a space
s1.split(" ") -> ["Hello", "World"]

const s2 = "tech, computers, it, code";
s2.toUpperCase().split(", ") -> ["TECH", "COMPUTERS", "IT", "CODE"]
```

---

# Array Properties & Methods

> an array is an object that hold multiple values (multi types too)

#### How to construct an array:

```js
const a1 = new Array(1, 2, 3, 4, 5); // new = constructor
const a2 = [10, "cats", "dogs", a1]; // [] makes an array too.
```

### 1. `myArr.length` = produces the number of items in the array (Number)

```js
a1.length == 5; // true
a2.length == 4; // true
```

### 2. `myArr[n]` = access the *n*th item in the array, where 0 >= n >= (`myArr.length` - 1)

```js
a2[0] === 10;
// Example 1: (what's in the second last position of the 4th item in a2)
a2[3][a2[3].length - 2] == 4;

// Example 2: (what's in the second last position of the last item in a2)
let a2LastItem = a2[a2.length - 1];
a2LastItem[a2LastItem.length - 2] == 4;
```

For now Example 1 and 2 refers to the same value. See below how modifying the array alter the positions.

### 3. Modify items in an array using `push`, `pop`, `unshift`, `shift`. (This will alter the position of items in the array)

> `myArr.push(xyz)` = add item to the **_last_** position in array

```js
a1.push(6);
console.log(a1) -> [1, 2, 3, 4, 5, 6];

a2.push("New Last");
console.log(a2) -> [10, "cats", "dogs", a1, "New Last"];
a2[3][a2[3].length - 2] == 5; // instead of 4 in Example 1

a2LastItem = a2[a2.length - 1]; // reassign the current last item of a2
a2LastItem[a2LastItem.length - 2] == "s"; // instead of 4 in Example 2
```

Since we added a1 as part of the item inside a2, modifying a1 will also modify the a1 found within a2.

Since we pushed an item to the last position, it will alter the position counting from the back of the array (e.g. `a2.length - 1`), but absolute position calls like `a2[0]` will not be affected.

> `myArr.pop()` = grab the **_last_** item in the array (can be assigned to a variable)

```js
const drawLast = a2.pop();
const text1 = `The last item in a2 was: ${drawLast}`;
console.log(text1) -> "The last item in a2 was: New Last"
console.log(a2) -> [10, "cats", "dogs", a1];
```

> `myArr.unshift(xyz)` = add item to the **_first_** position in array

```js
a2.unshift("New First");
console.log(a2) -> ["New First", 10, "cats", "dogs", a1];
a2[3][a2[3].length - 2] == "g"; // instead of 4 in Example 1

a2LastItem = a2[a2.length - 1]; // reassign the current last item of a2
a2LastItem[a2LastItem.length - 2] == 5 // instead of 4 in Example 2
```

Since we added an item to the first position and push everything back one position further, it will alter the counting from the beginning of the array (e.g. `a2[0]`), but relative position from the back like `a2.length - 1` will not be affected.

> `myArr.shift()` = grab the **_first_** item in the array (can be assigned to a variable)

```js
const drawFirst = a1.shift();
const text2 = `The next in line is: ${drawFirst}`;
console.log(text2) -> "The next in line is:  1"
console.log(a1) -> [2, 3, 4, 5, 6]
```

### 4. `Array.isArray(xyz)` = returns true if `xyz` is an array, otherwise false

```js
Array.isArray(a1); // true
Array.isArray(s1); // false
Array.isArray(a2LastItem); // true
```

### 5. `myArr.indexOf(val)` = returns the index of first occurence of `val` if it's an item in myArr, otherwise returns -1

```js
a1.indexOf(4) == 2;
a1.unshift(4);
a1.indexOf(4) == 0;
a2.indexOf(4) == -1;
```

---

# Object Literals

> object works like key, value pair; object = {key1: value1, key2: value2, ...}

#### How to create and access properties in objects:

```js
const object = {prop1: a, prop2: b, ...}
```

Just like key-value pair, each property (key) of an object can only be paired to one value, the value can be an array that contains multiple items.

```js
const o1 = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  hobbies: ["swimming", "cycling", "hiking"],
  address: {
    streetName: "Silverling St",
    streetNum: 13,
    postalCode: "M8M 8M8",
  },
};
```

#### How to access the value of a property:

```js
object.prop1; // == a (using . followed by the property name)
object["prop2"]; // == b (encasing the string form of the property name in [])
```

Using the . notation can only call property with one word (no space in between), generally using [ ] is more flexible as we can have a parameter in a function to take in a string to match the name of the property.

Some examples to use information within an object:

```js
const oprop1 = o1.firstName;
const oprop2 = o1.hobbies[o1.hobbies.length - 1]; // last item in hobbies array
const oprop3 = o1["address"]["streetName"];
const text3 = `One of ${oprop1}'s hobbies is ${oprop2} and he/she lives on ${oprop3}`;

console.log(o1.firstName, o1.lastName); // display multiple properties on console
```

We can also pull values from properties using `const` as below:

<!-- prettier-ignore -->
```js
const { firstName, lastName } = o1; 
const { address: { postalCode }} = o1;
```

Now whenever the variable `firstName` is called it will instead as if you're calling `o1.firstName`. For embedded properties like everytime `postalCode` is called, instead it will call `o1.address.postalCode`

#### How to add/replace property to an object:

```js
o1.email = "johndoe@gmail.com"; // now it's added within o1
o1.age = 27; // if property already existed, overwrite the value
```

#### How to delete a property:

```js
delete o1.address.streetNum;
```

---

# Array of objects

Example of an array of objects:

```js
const todos = [
  { id: 1, text: "Take out trash", isCompleted: true },
  { id: 2, text: "Meeting with boss", isCompleted: false },
  { id: 3, text: "Dentist appt", isCompleted: false },
  { id: 4, text: "Water the plants", isCompleted: true },
  { id: 5, text: "Walk the dog", isCompleted: true },
];
```

Let's see how to print out "Meeting with boss":

```js
console.log(todos[1].text);
```

First we access the item in position 1 the array `todos`, this will refer to the second object found in `todos`. Using the . notation to grab the value of `text` within the object to get us "Meeting with boss".

> JSON is a data format that:

- used a lot in full-stack, using APIs sending/receive data to server (in json format)
- https:www.freeformatter.com/json-formatter.html
  - we can take our array of objects and copy and paste on this link to get the json format
- json format similar to array of objects
- differences:
  1. double quotes around property names
  2. strings are all in double quotes (no single quotes)
- within JavaScript we can convert our array of objects to be in JSON format ready to be sent to a server with the code below:

```js
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);
```

---

# For loops

> format -> `for(let x; y; z)`
>
> - `x` = initializatin statement (executed only once)
> - `y` = condition statement (if true execute loop, if false stop)
> - `z` = final expression (increment/decrement loop counter)

Function to check if a number is a prime number or not:

```js
function isPrime(n) {
  if (n <= 1) {return false;} // Edge cases (to check for 0, 1 or -ve)

  for (let i = 2; i < n; i++) {
    if (n % i == 0) {return false;}
    }

  return true;
```

One way to check if a number is prime number or not is to divide it by each number from 2 to n-1, prime number only have 2 factors (1 and itself), so any division with any other number will give us a remainder.

We initialize the `let i = 2`, because 2 is the smallest possible factor after 1.

The condition `i < n`, let us divide `n` with every number precedes it as `i` increases 1 number at a time and the loop will ends as it reaches `i == n` (when this statement is true, we know the number is a prime number)

# While loops

> initialize variable outside of the while statement, then do increment/decrement inside the loop

Let's see how we can create an ascending array of primer numbers in the range of lowBound (incl.) to hiBound (incl.) using while loop:

```js
function f1(lowBound, hiBound) {
  let i = lowBound;
  const myArr = [];
  while (i <= hiBound) {
    if (isPrime(i)) {
      myArr.push(i);
      console.log(`In this iteration we're adding: ${myArr[myArr.length - 1]}`);
    }
    i++; // have to do increment inside the while statement
  }
  console.log(myArr);
}
```

We can choose to include that line of template string to keep track of the iteration of the loop. When the function `f1` is called it will display each instance of iteration (that should be equal to the length of the array produced)

## Examples of loops to use in a todo list

```js
function f2(todolist, myProp) {
  // Data types integrity check:
  if (typeof todolist != "object") {
    return "Invalid! Parameter todolist has to be an array"; // an array of objects
  }

  if (typeof myProp != "string") {
    return "Invalid! Parameter myProp has to be a string";
  }
  // check if myProp is present:
  // assumption = if myProp is present, has to be found in every object in the array
  if (todolist[0].hasOwnProperty(myProp) == false) {
    return myProp + " is not a property in this todolist";
  }

  for (let i = 0; i < todolist.length; i++) {
    console.log(`To-do No. ${i + 1} is ` + `\"${todolist[i][myProp]}\"`);
    // [myProp] is used instead of .myProp = ."string" is not valid
  }
}
```

> Using backslash \ in a string let any word or char to escape the quotation mark (appear as a character not feature) in the string.

`todolist[i][myProp]` let us go through each item in the Array and grab the value for the property as `i` increases by 1 within the loop.

`[myProp]` is used instead of `.myProp` because we take in a string as a parameter in `f2`, and `object."property"` is not a valid syntax.

> `f2(todos, "text")`; will print the description of each to-do task

this code below can also cycle through items in array faster (specialized for statement)

```js
function f3() {
  for (let todo of todos) {
    console.log(todo.text);
    console.log(todo.isCompleted);
  }
}
```

> `for (let todo of todos)` this will cycle through each items (todo) in todos

the statements inside the curly brackets will be executed for each item in the array, (i.e. for each todo, print the value of `todo.text`, then print `todo.isCompleted`, then move on to the next item)

---

# High Order Array Methods

format: `myArray.method(function(i, ...) {abc}})`

- `i` = variable to use for each instance in myArray
  see

### 1.) `forEach` = loops through each items in the array

- `abc` = what will be executed for each loop

Example of a function to print the id's of each of the todo task in todos:

```js
function f4() {
  todos.forEach(function (todo) {
    console.log(todo.id);
  });
}
```

### 2.) `map` = create a new array from an array (assign value with `const newArray = ...`)

- `abc` = in the format of: `return i.myProp` -> will cause `push(i.myProp)` into a new array (can be assigned)

```js
function f5() {
  const todoText = todos.map(function (todo) {
    return todo.text; // for EACH instance, push the (todo.text)
  });
  console.log(todoText);
}
```

### 3.) `filter` = create a new array based on a condition (only part of the original)

- `abc` = in the format of : `return (cond.)` -> push each instance in which the condition is met

```js
function f6() {
  const todoNotCompleted = todos.filter(function (todo) {
    return todo.isCompleted === false; // for EACH evaluation that returns TRUE, push the (todo)
  });
  console.log(todoNotCompleted);
}
```

## Combining methods

Example: A function that creates a new array which includes the description of all the tasks that has **_odd id_** and is **_completed_**:

```js
function f7() {
  const todoOddText = todos
    .filter(function (todo) {
      return todo.id % 2 == 1; // create newArray1 = only odd ids
    })
    .filter(function (todoOdd) {
      return todoOdd.isCompleted === true; // newArray1.filter(...) -> create newArray2
    })
    .map(function (completed) {
      return completed.text; // newArray2.map(...) -> assigned to todoOddText
    });
  console.log(todoOddText);
}
```

---

# Conditionals

## If Statements

> format: `if (cond) {expression} else if (cond) {expr.} else {expr.}`

- `==` is equal to (e.g. `[10] == "10"` -> True)
- `!=` is not equal to (e.g. `10 != "Ten"` -> True)
- `===` is exactly the same as (e.g. `10 === 10.0` -> True)
- `!==` is not exactly the same as (e.g. `10.0 !== [10]` -> True)

```js
function isTen(x) {
  if (x === 10) {
    console.log("Yup, that is 10, === matches data type! (exact same)");
  } else if (x == 10) {
    console.log("This is 10? == does not match data type! (can be string)");
  } else {
    console.log("This is not 10 :(");
  }
}
```

- OR `||` + AND `&&` can help shorten code instead of nesting `if` statements

Example: A function to check if a number is single digit negative number OR a prime number:

```js
function f8(n) {
  if ((n < 0 && n > -10) || isPrime(n)) {
    return true;
  } else {
    return false;
  }
}
```

## Ternary operator

> commonly used to assign different value for a true/false evaluation

> format: `const x = (cond.) ? (if true) : (if false)`

Example: A function that returns the outcome of a match between A and B:

```js
function f9(a, b) {
  const score = a === b ? "Draw" : a > b ? "A wins" : "B wins";
  return score;
}
```

We can nest ternary operator within the true or false outcome, in this example if the `a === b` (cond.) evaluation is true it will update `score` as "Draw". If the `a === b` is false then it will evaluate another ternary operator with `a > b` as the (cond.) and update `score` accordingly.

## Switches

> each case is evaluated with a strict equality `===`

```js
function f10(val) {
  let answer = "";
  switch (val) {
    case 1:
    case 2:
      answer = "Low Score...";
      break;
    case 3:
    case 4:
      answer = "Good Score!";
      break;
    case 5:
      answer = "Perfect!!!";
      break;
    default:
      answer = "Try again.";
  }
  return answer;
}
```

Each case can be any data type, if the parameter for the switch does not match any of the cases, the default statement will be executed.

---

# Functions

```js
function addNums(n = 1, m = -3) {
  console.log(n + m);
}
```

within a function parameter, we can set default value. When calling the function:

- If we do not assign parameters, the default value will be used.
- if we assign the parameters, it will overwrite the default values.

```js
addNums() -> -2;
addNums(3) -> 0;
addNums(3, 1) -> 4;
addNums(11 % 3, 10 / 2) -> 7;
```

## Arrow Functions

Instead of calling `function ...`, we can use `const ...` to make a function

> format:
> `const (functionName) = (para1, para2, ...) => (function body)`

Example: Same function as above, but written in arrow function format:

```js
const addTwoNums = (n = -4, m = -1) => {
  console.log(n + m);
};
```

Example: Same function, with one-liner: (return instead of console.log)

```js
const addTwoNumbers = (n = 1, m = 1) => n + m;
```

> one-liner function body doesn't need `{}` and will return the expression

Another one-liner example: A function that counts the number of tasks in `todos` that **_have yet to be completed_**

```js
const f11 = () => todos.filter((todo) => todo.isCompleted === false).length}
```

Example: A function that prints out all the **_completed_** tasks followed by a line of reminder of how many **_uncompleted_** tasks.

```js
const f12 = () => {
  todos
    .filter((todo) => todo.isCompleted === true)
    .forEach((completed) => console.log(completed.text));

  console.log(`There are ${f11()} uncompleted task(s)`);
};
```

> see [High Order Array Methods](#high-order-array-methods) for full explanation (long function version)

## Lexical This (not covered in depth in the course)

---

# Object Oriented Programming (OOP)

> We can construct objects using constructor functions, with prototype

## Constructor Functions

format:

<!-- prettier-ignore -->
```js
function Object(para1, para2) {  // function name Object is capitalized
  this.prop1 = para1;
  this.prop2 = para2;
}
```

Example:

<!-- prettier-ignore -->
```js
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
  this.species = "Human"; // add a constant property to all Person object
  this.getFullName = function () {
    return `This person's name is ${this.firstName} ${this.lastName}`;
  };
}
```

Whenever we construct with this function, we first parameter we pass on with the function will be the value for the `firstName` property and so on.

The above example we set the value for the property `dob` to be an object that will be created using the `Date` constructor function [more on Date function](#date-object)

The calling of `this.` inside the constructor function refers to the local object, if for example in the template string we put `${lastName}` instead of `${this.lastName}` it will refer to the parameter instead of the object's property and will not changed when `changeName` method is executed.

## Instantiate object

> Creating the object from the constructor function, using `new Object(values)`

```js
const person1 = new Person("John", "Doe", "20 Mar 1990");
console.log(person1.dob.getFullYear()) -> // show the birth year of person1

person1.changeName("Smith") // calling a method
console.log(person1.getFullName()) -> // is now John Smith instead of John Doe
```

With `Person` constructor, the object created will have the methods as part of the properties of the object itself, calling `console.log(person1)` will show all the properties including the methods with a function as values. To hide this we can put any methods into the prototype of the object.

Example:

<!-- prettier-ignore -->
```js
function Pet(petName, petSpecies, owner) {
  this.name = petName;
  this.species = petSpecies;
  this.owner = owner;
}

Pet.prototype.changeOwner = function(name) {this.owner = name}

const pet1 = new Pet("Twig", "Deerfox", "Troll")
pet1.changeOwner("Hilda")
console.log(pet1.owner) -> // is now "Hilda" instead of "Troll"
```

In this example we can see the parameters name doesn't have to be the same as the property name (but it's good to give both the parameters and properties meaningful names)

Declaring the method outside of the constructor function allow us to put the method in the prototype of the object and will not show up as one of the properties.

## Class (ES6)

> Syntactic sugar = express code in an easier and prettier way = preferred

Example: the same object constructor as previous example

```js
class Friend {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }

  getBirthYear() {
    return this.dob.getFullYear();
  }

  getFullName() {
    return `${firstName} ${lastName}`;
  }

  changeName(name) {
    this.firstName = name;
  }
}
```

Using this method, we instantiate object and access properties the same way as before, everything starting from the constructor to the methods all found within the `class` declaration and any methods will automatically goes into the prototype of the object.

### Date object

> built-in object class that meant to display date

4 Ways to create new date object:

```js
new Date(); // no parameter will create current date + time
new Date(milliseconds); // only passing 1 number parameter
new Date(year, month, day, hours, minutes, seconds, milliseconds);
new Date("date string");
```

Passing more than one number parameters will be assigned as shown in the third line. in JavaScript, the month parameter counts from 0 to 11 (`January = 0`)

> specifying the month parameter higher than 11 will add the overflow to the year, same principle applies to day parameter:

```js
const d1 = new Date(2019, 1, 24, 10, 33, 30);
const d2 = new Date(2018, 13, 24, 10, 33, 30); // 11 = December
const d3 = new Date(2019, 0, 55, 10, 33, 30); // minus 31 days in Jan
```

All the dates above refer to `24 Feb 2019`

> one and two digits years will be interpreted as 19xx:

```js
const d4 = new Date(9, 4, 4); // May 4, 1909
const d5 = new Date(99, 4, 4); // May 4, 1999
```

In the example given for [Constructor functions](#constructor-functions), `dob` is passed on as a parameter to be the value in `new Date`, since it is not possible to input `(2019,11,30)` as a parameter, we will take `dob` as a _dateString_ instead to create the date object.

```js
const ISODate = "2015-03-25"; // "YYYY-MM-DD"
const shortDate = "03/25/2015"; // "MM/DD/YYYY"
const longDate = "25 Mar 2015"; // "DD mmm YYYY" or "mmm DD YYYY"
```

ISO Date is relative to the computer date time zone, the above example could be March 24 or March 25.

#### Date Object Methods

```js
d1.toString() == "Sun Feb 24 2019 10:33:30 GMT-0500 (Eastern Standard Time)";
d1.toUTCString() == "Sun, 24 Feb 2019 15:33:30 GMT";
d1.toDateString() == "Sun Feb 24 2019";
d1.toISOString() == "2019-02-24T15:33:30.000Z";

const d6 = new Date(0); // the milliseconds conversion date reference
const msec = Date.parse(longDate); // the number of milliseconds between d6 and 25 Mar 2015
const d7 = new Date(msec); // gives us the date object for 25 Mar 2015
```

Among other methods like `getFullYear()`, `getDate()` (day as number, 1-31), `getDay()` (day of the week, 0 (Sun) - 6(Sat))
