function generatePassword() {
  var length = parseInt(document.getElementById('length').value);
  var includeNumbers = document.getElementById('numbers').checked;
  var includeSpecialChars = document.getElementById('specialChars').checked;
  var includeLowercase = document.getElementById('lowercase').checked;
  var includeUppercase = document.getElementById('uppercase').checked;
  
  var charset = '';
  if (includeNumbers) charset += '0123456789';
  if (includeSpecialChars) charset += '!@#$%^&*()<>?/[]{}|\/,.;:\'+_-=';
  if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
  if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  
  // function checkBoxes () {

  // }
  var password = '';
  for (var i = 0; i < length; i++) {
      password += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  
  document.getElementById('password').value = password;
  // if (includeNumbers.checked || includeSpecialChars.checked || includeLowercase.checked || includeUppercase.checked) {
  //   console.log('all ok')
  //   document.getElementById('checkerror').innerText = "your password is successfully Generated hot copy button Thank you";
  //   document.getElementById('checkerror').className = 'd-block, success';
  // } else {
  //   document.getElementById('checkerror').innerText = "!Error Please select at least one checkbox";
  //   document.getElementById('checkerror').className = 'd-block, failed';
  // }
}

function updateRangeValue() {
  var lengthInput = document.getElementById('length');
  var lengthValue = document.getElementById('lengthValue');
  lengthValue.textContent = lengthInput.value;
}
 
function copyPassword() {
  var passwordTextarea = document.getElementById('password');
  passwordTextarea.select();
  document.execCommand('copy');
}



