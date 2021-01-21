// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Notes; use alert to ask user for each line of information (length, uppercase, special characters, etc.)
//use [({aieuo})] function as a if then statment to exclude special character, uppercase, etc.