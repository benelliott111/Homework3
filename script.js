// Assignment Code
var generateBtn = document.querySelector("#generate");
var charsLower = "abcdefghijklmnopqrstuvwxyz";
var charsUpper = charsLower.toUpperCase();
var charsNumbers = "012345679";
var charsSpecial = "!@#$%^&*()_+";
var chars = ''
var uppercaseLetter = false
var lowercaseLetter = false
var specialCharacters = false
var numbers = false
// Write password to the #password input
// function writePassword() {
//   setParameters();
//   generatePassword();
  // var passwordText = document.querySelector("#password");

  // 
  // console.log(charsLower)
// }

// Add event listener to generate button
generateBtn.addEventListener("click", setParameters);

function setParameters() {
  chars = ''
  //Number password length
  var length = prompt("Password length between 8-128", "");
  if (length == null || length <=7 || length > 128 ){
    console.log("Password length invalid.");
  } else {
    console.log(`Password length = ${length}`);
  }

  //Boolean uppercaseLetter
  
  if (confirm("Would you like uppercase letters in your password?")) {
    uppercaseLetter = true;
  } else {
    uppercaseLetter = false;
  }
  console.log(`Uppercase in password = ${uppercaseLetter}`);

  //Boolean lowercaseLetter
  ;
  if (confirm("Would you like lowercase letters in your password?")) {
    lowercaseLetter = true;
  } else {
    lowercaseLetter = false;
  }
  console.log(`Lowercase in password = ${lowercaseLetter}`)
  
  //Boolean specialcharacters
  ;
  if (confirm("Would you like special characters in your password?")) {
    specialCharacters = true;
  } else {
    specialCharacters = false;
  }
  console.log(`Special characters in password = ${specialCharacters}`)

  //Boolean numbers
  ;
  if (confirm("Would you like numbers in your password?")) {
    numbers = true;
  } else {
    numbers = false;
  }
  console.log(`Numbers in password = ${numbers}`);
  generatePassword(length);
  }

  function generatePassword(length){
    console.log("generatePassword()")
    var passwordLength = length; 
    let passwordText = "";
    generate();
    
    for (let i=0; i < passwordLength; i++){
      passwordText += chars[Math.floor(Math.random() * chars.length)]   
      }
    
    password.innerText = passwordText;
  }

  function generate(){
    if (uppercaseLetter == true){
      chars += charsUpper;
    };


    if (lowercaseLetter == true){
      chars += charsLower;
    };
  

    if (specialCharacters == true){
      chars += charsSpecial;
    };
    

    if (numbers == true){
      chars += charsNumbers;
    };


    // if(chars.length === 0)
    //   return "";
    
    // return passwordText[Math.floor(Math.random * chars.length)];
    
  }



//Notes; use alert to ask user for each line of information (length, uppercase, special characters, etc.)
//use [({aieuo})] function as a if then statment to exclude special character, uppercase, etc.

// Generate alerts on button click for length, uppercase, etc. 
// Use function with variables set as equal to the boolean variables from within the alert function, demonstrated in the RPS game built with Luca
//String.fromCharCode() can limit characters that are eligble based on variables 