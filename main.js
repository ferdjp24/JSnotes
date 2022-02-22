const query4 = document.querySelector(".btn");
query4.style.background = "teal";

// query4.addEventListener("click", (e) => {
//   console.log("Thank you for your submission.");
//   query4.remove();
//   console.log(e.target); // show the target of the action
// });

// const ul = document.querySelector(".items");

// query4.addEventListener("mouseout", (e) => {
//   e.preventDefault();
//   document.querySelector("#my-form").style.background = "black";
//   document.querySelector("header").style.background = "black";
//   document
//     .querySelectorAll(".item")
//     .forEach((item) => (item.style.background = "black"));
//   document.querySelector("body").classList.add("bg-dark");
// });

const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

myForm.addEventListener("submit", onSubmit); // can call in an external function

function onSubmit(e) {
  e.preventDefault();

  // Make sure all fields are not empty
  if (nameInput.value === "" || emailInput.value === "") {
    msg.classList.add("error");
    msg.innerHTML = "Please enter both fields";
    setTimeout(() => msg.remove(), 3000); // setTimeout(function, milliseconds)
  } else {
    // Creating a new list item to contain the information
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(`${nameInput.value} (${emailInput.value})`) // add Text node to the child of the newly created li
    );

    // Adding the newly created li to #users ul
    userList.appendChild(li);

    // Clear the fields for next user
    nameInput.value = "";
    emailInput.value = "";
  }
}

const todos = [
  {
    id: 1,
    text: "Take out trash",
    isCompleted: true,
    date: new Date("10 March 2021"),
  },
  {
    id: 2,
    text: "Meeting with boss",
    isCompleted: false,
    date: new Date("15 March 2021"),
  },
  {
    id: 3,
    text: "Dentist appt",
    isCompleted: false,
    date: new Date("10 Feb 2021"),
  },
  {
    id: 4,
    text: "Water the plants",
    isCompleted: true,
    date: new Date("10 May 2021"),
  },
  {
    id: 5,
    text: "Walk the dog",
    isCompleted: true,
    date: new Date("10 March 2020"),
  },
];

function completeTask(id) {
  todos.find((task) => task.id === id).isCompleted = true;
}

// const sortedDate = todos.sort((t1, t2) => (t1.date > t2.date ? 1 : -1));

// const sortedId = todos.sort((a, b) => b.id - a.id);
const idSum = todos.reduce((total, task) => total + task.id, 0);
const textCombine = todos.reduce(
  (giantString, task) => giantString + task.text,
  ""
);
