"use strict";
//user can only login with these names.
let usernames = ["yazeen", "ec", "softhouse"];

//Function that calls all other functions in order
//--Don"t modify--
function init() {
  initLoginForm();
  initLabel();
  initInput();
  initButton();
}

function initLoginForm() {
  //Add code here to:
  //create and add form element to the Dom.
  let form = document.createElement("form");
  form.id = "login-form";
  document.body.appendChild(form);
}

function initLabel() {
  //Add code here to:
  //create label element and set the lable to "username" (TIP: use .textContent).
  //Add it to the form element. (TIP: use .appendChild).
  let label = document.createElement("label");
  label.textContent = "Username";
  document.getElementById("login-form").appendChild(label);
}

function initInput() {
  //Add code here to:
  //create input element and set it to be requried (TIP: use .required = true).
  //Add it to the form element. (TIP: use .appendChild).
  let input = document.createElement("input");
  input.type = "text";
  input.required = true;
  input.id = "username";
  document.getElementById("login-form").appendChild(input);
}

function initButton() {
  //create button element and set the text to "login" (TIP: use .textContent)
  ////Add it to the form element. (TIP: use .appendChild).
  let button = document.createElement("button");
  button.textContent = "Login";
  document.getElementById("login-form").appendChild(button);

  //Add click eventListener for button and call validateLoginInfo function inside it.
  //if validateLoginInfo is true alert user with "Welcome" text.
  //if validateLoginInfo is false add border style to the input element: "3px solid red". (TIP: use .style.border).
  button.addEventListener("click", function() {
    let isValid = validateLoginInfo();
    if (isValid) {
      alert("Welcome");
    } else {
      document.getElementById('username').style.border = "3px solid red";
    }
  });
}

function validateLoginInfo() {
  //Get the input using form input element (TIP: use .value)
  //if the username is in the usernames array return true if not return false.
  let usernameInput = document.getElementById("username").value;
  if (usernames.includes(usernameInput)) {
    return true;
  } else {
    return false;
  }
}

//Write code here to call the init function only after the dom has been loaded (TIP: check "DOMContentLoaded" event)
window.addEventListener("DOMContentLoaded", function () {
  init();
});
