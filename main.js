const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");
const passwordInput = document.querySelector("#password");

myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();
  if (
    nameInput.value === "" ||
    emailInput.value === "" ||
    passwordInput.value === ""
  ) {
    msg.classList.add("error");
    msg.innerHTML = "Please enter all fields";
    setTimeout(() => msg.remove(), 3000);
  } else {
    var isName = nameInput.value.length >= 6 ? true : false;
    if (isName == false) {
      msg.classList.add("error");
      msg.innerHTML = "Name should be at least 6 characters";
      setTimeout(() => msg.remove(), 2000);
    }

    var regex = /\S+@\S+\.\S+/;
    var isEmail = regex.test(emailInput.value);
    if (isEmail == false) {
      msg.classList.add("error");
      msg.innerHTML = "Valid email to be provided";
      setTimeout(() => msg.remove(), 2000);
    }

    var letter = /[a-zA-Z]/;
    var number = /[0-9]/;
    ispwd = number.test(passwordInput.value) && letter.test(passwordInput.value);
    if (ispwd == false) {
      msg.classList.add("error");
      msg.innerHTML =
        "Password should be a combination of alphabets and numbers";
      setTimeout(() => msg.remove(), 2000);
    }

    if (isName == true && isEmail == true && ispwd == true) {
      const li = document.createElement("li");
      li.appendChild(
        document.createTextNode(nameInput.value + ": " + emailInput.value)
      );
      userList.appendChild(li);
    }
  }
}
