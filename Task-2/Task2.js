
function validateInput() {
  var userName = document.getElementById("userName").value;
  var password = document.getElementById("password").value;
  var outputDiv = document.getElementById("output");
  var isValid = true;


  if (userName.length < 4) {
    outputDiv.textContent = "Username should contain at least 4 letters.";
    isValid = false;
  } else if (userName.trim() === "") {
    outputDiv.textContent = "Username cannot be empty.";
    isValid = false;
  }

  
  if (password.length < 6 || password.length > 12) {
    outputDiv.textContent = "Password should be between 6 and 12 characters.";
    isValid = false;
  } else if (password.trim() === "") {
    outputDiv.textContent = "Password cannot be empty.";
    isValid = false;
  }

  
  if (isValid) {
    outputDiv.textContent = "Username: " + userName + ", Password: " + password;
  }
}
