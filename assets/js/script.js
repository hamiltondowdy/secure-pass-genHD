// Acceptance Criteria
/* GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page */

// Write function to generate password
const characterCats = {
specialArr:['!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', ']', '[', '\', ^', '_', '`', '{', '|', '}', '~'],
lowercaseArr:['z', 'a', 'q', 'x', 's', 'w', 'c', 'd', 'e', 'v', 'f', 'r', 'b', 'g', 't', 'n', 'h', 'y', 'm', 'j', 'u', 'k', 'i', 'l', 'o', 'p'],
uppercaseArr:['L', 'K', 'J', 'H', 'G', 'F', 'D', 'S', 'A', 'M', 'N', 'B', 'V', 'C', 'X', 'Z', 'P', 'O', 'I', 'U', 'Y', 'T', 'R', 'E', 'W', 'Q'],
numericArr: ['0', '9', '7', '3', '1', '6', '8', '4', '2', '5'],
}

function passwordLength () {
  let passLength = parseInt(prompt("Choose a password length (between 8-128 characters)"))

  if (!passLength || passLength < 8 || passLength > 128 ) { 
    alert("Hey buddy, between 8 and 128 characters. You know the rules!")
    passwordLength();
  } else {
    return passLength;
  }
}

function chooseCharTypes() { 
  let viableChars = ''

  let upperCase = confirm('Include Uppercase Letters? (A-Z)')
  let lowerCase = confirm('Include Lowercase Letters? (a-z)') 
  let numberCase = confirm('Include Numbers? "0-9"')
  let specialCase = confirm('Include Special Characters? "*+[]@#^..')

if (!upperCase && !lowerCase && !numberCase && !specialCase) {
    alert("How are you gonna have a password with no characters? Try again.");
    chooseCharTypes();
  } else {
    if (upperCase) {
      viableChars += characterCats.uppercaseArr.join('')
    }
    if (lowerCase) {
      viableChars += characterCats.lowercaseArr.join('')
    }
    if (numberCase) { 
      viableChars += characterCats.numericArr.join('')
  }
    if (specialCase) { 
      viableChars += characterCats.specialArr.join('')
    }

console.log(upperCase, lowerCase, numberCase, specialCase);

return viableChars;

  }
}

function generatePassword() {
  let password= ''
  let desiredLength = passwordLength();
  let chosenChars = chooseCharTypes();

  for (var i = 0; i < desiredLength; i++) {
    password += chosenChars[(Math.floor(Math.random() * chosenChars.length))]
    console.log(password);
  }
return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 
