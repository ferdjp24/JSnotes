function isPrime(n) {
  // Edge cases (to test for 0, 1 or -ve)
  if (n <= 1) {
    return false;
  }

  // Any +ve that's larger than 1
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }

  return true;
}

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

const todos = [
  { id: 1, text: "Take out trash", isCompleted: true },
  { id: 2, text: "Meeting with boss", isCompleted: false },
  { id: 3, text: "Dentist appt", isCompleted: false },
  { id: 4, text: "Water the plants", isCompleted: true },
  { id: 5, text: "Walk the dog", isCompleted: true },
];

function f3(todolist, myProp) {
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
    // Using blackslash "\" will let any word or char to escape the quotation mark
    // todolist[i][myProp] = goes through each item in index i and grab the prop
    // [myProp] is used instead of .myProp = ."string" is not valid
  }
}

function f5() {
  const todoText = todos.map(function (todo) {
    return todo.text; // for EACH instance, push the (todo.text)
  });
  console.log(todoText);
}

function f7() {
  const todoOddText = todos
    .filter(function (todo) {
      return todo.id % 2 == 1; // create newArray1 = only odd ids
    })
    .filter(function (todoOdd) {
      return todoOdd.isCompleted === true; // newArray1.filter(...) -> create newArray2
    })
    .map(function (completed) {
      return completed.text; // newArray2.map(...) = assigned to todoOddText
    });
  console.log(todoOddText);
}

function isTen(x) {
  if (x === 10) {
    console.log("Yup, that is 10, === matches data type! (exact same)");
  } else if (x == 10) {
    console.log("This is 10? == does not match data type! (can be string)");
  } else {
    console.log("This is not 10 :(");
  }
}

function f8(n) {
  if ((n < 0 && n > -10) || isPrime(n)) {
    return true;
  } else {
    return false;
  }
}

const f11 = () => todos.filter((todo) => todo.isCompleted === false).length;

const f12 = () => {
  todos
    .filter((todo) => todo.isCompleted === true)
    .forEach((completed) => console.log(completed.text));

  console.log(`There are ${f11()} uncompleted task(s)`);
};

function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
  this.species = "Human"; // add a constant property to all Person object
  this.changeName = function (name) {
    // add a method
    this.lastName = name;
  };
  this.getFullName = function () {
    return `This person's name is ${this.firstName} ${this.lastName}`;
  };
}

const person1 = new Person("John", "Doe");

function Pet(petName, petSpecies, owner) {
  this.name = petName;
  this.species = petSpecies;
  this.owner = owner;
}

Pet.prototype.changeOwner = function (name) {
  this.owner = name;
};

const pet1 = new Pet("Twig", "Deerfox", "Troll");
pet1.changeOwner("Hilda");
console.log(pet1.owner); //-> // is now "Hilda" instead of "Troll"

const d1 = new Date(2019, 1, 24, 10, 33, 30);
const d2 = new Date(2018, 13, 24, 10, 33, 30);
const d3 = new Date(2019, 0, 55, 10, 33, 30);
const d4 = new Date(2019);
const d5 = new Date(9, 2, 3);
const d6 = new Date(99, 4, 4);
