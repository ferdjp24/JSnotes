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
