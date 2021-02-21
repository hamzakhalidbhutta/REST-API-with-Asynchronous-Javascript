let formInfo = document.querySelector("#infoForm");

let userName = document.querySelector("#name");
let nameError = document.querySelector("#nameError");

let subject = document.querySelector("#subject");
let subjectError = document.querySelector("#subjectError");

let email = document.querySelector("#email");
let emailError = document.querySelector("#emailError");

let address = document.querySelector("#address");
let addressError = document.querySelector("#addressError");

let submition = document.querySelector("#submition");

formInfo.onsubmit = function (e) {
  e.preventDefault();

  if (!validateForm()) {
    showMessage(
      document.getElementById("submition"),
      "Form Submitted Successfuly",
      "green"
    );
    return;
  }
  submition.style.display = "none";
};

function validateForm() {
  let isSuccess = false;

  if (validateLength(userName, 0)) {
    showMessage(nameError, "user name is required", "red");
    isSuccess = true;
  } else {
    nameError.style.display = "none";
  }

  if (validateLength(subject, 10)) {
    showMessage(
      subjectError,
      "subject must be of atleast 10 characters",
      "red"
    );
    isSuccess = true;
  } else {
    subjectError.style.display = "none";
  }
  if (!validateEmail(email)) {
    showMessage(emailError, "Email address is invalid.", "red");
    isSuccess = true;
  } else {
    emailError.style.display = "none";
  }

  if (validateLength(address, 25)) {
    showMessage(
      addressError,
      "Address must be of atleast 25 characters.",
      "red"
    );
    isSuccess = true;
  } else {
    addressError.style.display = "none";
  }

  return isSuccess;
}

function validateEmail(email) {
  const isValidEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return isValidEmail.test(String(email.value).toLowerCase());
}

function showMessage(field, errorMessage, messageColor) {
  field.style.display = "block";
  field.style.color = messageColor;
  field.innerHTML = errorMessage;
}

function validateLength(validateString, len) {
  if (validateString.value.trim().length <= len) {
    return true;
  }
  return false;
}
