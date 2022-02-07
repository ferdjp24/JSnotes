# Table of Contents

- [Introduction](#introduction-intro)
- [Variables & Data Types](#variables--data-types-vardt)
  - Concatenation
  - Template String
- [String Properties & Methods](#string-properties--methods-strpm)
- [Arrays](#array-properties--methods-arrpm)
- [Object Literals](#object-literals-objct)
- [Array of Objects](#array-of-objects-arrob)
- Loops

  - [For Loop](#for-loops-floop)
  - [While Loop](#while-loops-wloop)
  - Examples (to-do-list)

- High Order Array Methods
- Conditionals
  - Ternary Operator
- Functions
  - Arrow Functions
- Object Oriented Programming (OOP)
- DOM Selection
- DOM Manipulation
- Events
- Basic Form Validation

---

# Introduction {#INTRO}

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

# Variables & Data Types {#VARDT}

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

# String Properties & Methods {#STRPM}

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

# Array Properties & Methods {#ARRPM}

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

# Object Literals {#OBJCT}

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

<!-- prettier-ignore-start -->
```js
const { firstName, lastName } = o1; 
const { address: { postalCode }} = o1;
```
<!-- prettier-ignore-end -->

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

# Array of objects {#ARROB}

Example of an array of objects:

```js
const todos = [
  { id: 1, text: "Take out trash", isCompleted: true },
  { id: 2, text: "Meeting with boss", isCompleted: false },
  { id: 3, text: "Dentist appt", isCompleted: false },
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

# For loops {#FLOOP}

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

# While loops [#WLOOP]

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

> `f3(todos, "text")`; will print the description of each to-do task

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

High Order Array Methods

---

toc.push({ title: "High Order Array Methods", shortcut: "`HOARM`" });
format: myArray.method(function(a, ...) {xyz})

- a = variable to use for each instance in myArray
  see

  1.) forEach = loops through each items in the array

- xyz = what will be executed for each loop
  function f5() {
  todos.forEach(function (todo) {
  console.log(todo.id);
  });
  }
  2.) map = create a new array from an array (assign value with const newArray)
- xyz = return xyz -> push(xyz) into the new array
  function f6() {
  const todoText = todos.map(function (todo) {
  return todo.text; for EACH instance, push the (todo.text)
  });
  console.log(todoText);
  }
  3.) filter = create a new array based on a condition (only part of the original)
- xyz = return (cond.) -> push each instance in which the condition is met
  function f7() {
  const todoNotCompleted = todos.filter(function (todo) {
  return todo.isCompleted === false; for EACH return TRUE, push the (todo)
  });
  console.log(todoNotCompleted);
  }
  Combining methods
  first filter only the odd id, out of the odd id, which one is completed, then print
  function f8() {
  const todoOddText = todos
  .filter(function (todo) {
  return todo.id % 2 == 1; create newArray1 = only odd ids
  })
  .filter(function (todoOdd) {
  return todoOdd.isCompleted === true; newArray1.filter(...) -> create newArray2
  })
  .map(function (completed) {
  return completed.text; newArray2.map(...) = last method -> assigned to todoOddText
  })
  .forEach((oddCompleted) => console.log(oddCompleted)); see `ARWFC` -> one-liner
  }

Conditionals

---

toc.push({ title: "Conditionals", shortcut: "`CONDI`" });
if, else if, else statements
format: if (cond) {expression} else if (cond) {expr.} else {expr.}

== is equal to (e.g. `10` == "10" -> True)
!= is not equal to (e.g. 10 != "Ten" -> True)
=== is exactly the same as (e.g. 10 === 10.0 -> True)
!== is not exactly the same as (e.g. 10.0 !== `10` -> True)
function isTen(n) {
if (n === 10) {
console.log("=== matches data type! (exact same)");
} else if (n == 10) {
console.log("== does not match data type! (can be string)");
} else {
console.log("is not 10");
}
} `10` == "10.0" is False

OR (||) + AND (&&)
can help shorten code instead of nesting if statements

function smallerThanFive(x, y) {
if (x < 5 && y < 5) {
console.log("both are smaller than 5");
} else if (x < 5 || y < 5) {
console.log("either x or y are smaller than 5");
} else {
console.log("neither are smaller than 5");
}
}

Ternary operator

---

toc.push({ title: "Ternary Operator", shortcut: "`TEROP`" });
commonly used to assign value based on a condition (if statements alt.)
format: const x = (cond.) ? (if true) : (if false)
can nest ternary operator within the (if true/false)

function f9(a, b) {
const score = a === b ? "Draw" : a > b ? "A wins" : "B wins";
return score;
}

Swtiches

---

format:
switch(val) {
case (cond1): case values are tested with strict equality (===)
do ...;
break;
case (cond 2): ...
do ...;
break;
default:
(default expression)...;
}

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

Functions

---

toc.push({ title: "Functions", shortcut: "`FUNCT`" });
function addNums(n = 1, m = -3) {
total = n + m;
console.log(total);
within a function parameter, we can set default value,
if no value is assigned the default will be assigned
if values assigned, it will overwrite the default values.
}

Arrow Functions

---

toc.push({ title: "Arrow Functions", shortcut: "`ARWFC`" });
format:
const (functionName) = (para1, para2, ...) => (function body)
one-liner function body doesn't need {} and will return the expression

same example function as above written in arrow function format
const addTwoNums = (n = -4, m = -3) => {
total = n + m;
console.log(total);
};

same example, with one-liner
const addTwoNumbers = (n = 1, m = 1) => n + m;

calling all of these functions are the same, functionName(parameters)
addNums() log displays -2, returns undefined
addTwoNums(1,1) log displays 2 returns undefined
addTwoNumbers(4) log display nothing, returns 1 `only assign value to first para`

one-liner example, filter todos for incompletion, then print text
see `HOARM` for methods explanation (long function version)
const f11 = () => {
todos
.filter((todo) => todo.isCompleted === false)
.forEach((incompleted) => console.log(incompleted.text));
};

Lexical This (not covered in depth in the course)

Object Oriented Programming (OOP)

---

toc.push({ title: "Object Oriented Programming", shortcut: "`OBJOR`" });

(DOM) Selection

---

toc.push({ title: "DOM Selection", shortcut: "`DOMSE`" });

DOM Manipulation

---

toc.push({ title: "DOM Manipulation", shortcut: "`DOMMA`" });
