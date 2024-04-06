// passwordgenerator.js

// Function to generate the password
function generatePassword() {
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';
  var lettersCount = parseInt(document.getElementById('letters').value);
  var numbersCount = parseInt(document.getElementById('numbers').value);
  var symbolsCount = parseInt(document.getElementById('symbols').value);
  var password = '';
  var totalCount = lettersCount + numbersCount + symbolsCount;

  while (password.length < totalCount) {
      var randomChar = getRandomCharacter(lettersCount, numbersCount, symbolsCount, characters);
      password += randomChar.char;
      if (randomChar.type === 'letter') lettersCount--;
      if (randomChar.type === 'number') numbersCount--;
      if (randomChar.type === 'symbol') symbolsCount--;
  }
  
  document.getElementById('passwordOutput').value = password;
  document.getElementById('copyButton').style.display = 'inline-block';
}

// Helper function to get random character
function getRandomCharacter(lettersCount, numbersCount, symbolsCount, characters) {
  var randomNumber = Math.random();
  if (randomNumber < 0.5 && lettersCount > 0) {
      return { type: 'letter', char: characters[Math.floor(Math.random() * 52)] };
  } else if (randomNumber < 0.75 && numbersCount > 0) {
      return { type: 'number', char: characters[Math.floor(Math.random() * 10) + 52] };
  } else if (symbolsCount > 0) {
      return { type: 'symbol', char: characters[Math.floor(Math.random() * 32) + 62] };
  }
  return getRandomCharacter(lettersCount, numbersCount, symbolsCount, characters); // Re-run function if none selected
}

// Function to copy the password to clipboard
function copyPassword() {
  var passwordOutput = document.getElementById('passwordOutput');
  navigator.clipboard.writeText(passwordOutput.value)
      .then(() => {
          console.log('Password copied to clipboard');
      })
      .catch(err => {
          console.error('Error in copying text: ', err);
      });
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
  // You can attach event listeners here if needed
});
