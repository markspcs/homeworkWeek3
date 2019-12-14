// Assignment Code
const asciiUpperArr = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
const asciiLowerArr = [...'abcdefghijklmnopqrstuvwxyz'];
const specialArr = [...' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'];
const numArr = [...'0123456789'];

var inputObj = {
  passLength: '10',
  asciiLower: {
    length: '2',
    chars: asciiLowerArr
  },
  asciiUpper: {
    length: '1',
    chars: asciiUpperArr
  },
  specialArg: {
    length: '2',
    chars: specialArr
  },
  numArg: {
    length: '5',
    chars: numArr
  }
}

var generateBtn = document.querySelector("#generate");
do {
  prompt("what's the length?");
  // prompt("how many ascii characters?");
  // prompt("how many numbers?");
  // prompt("how many special characters?");

} while (validateLength(inputObj));
delete inputObj.passLength;
listOfChars = getChars(inputObj);
randomChars = randomize(listOfChars);
// test code ////////////////////////////////

console.log("continued code");
console.log('here');
for (var i = 0; i < numArr.length; i++) {
  console.log("char: " + numArr[i]);
}
////////////////////////////////////////////////////////
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}

function copyToClipboard() {
  // BONUS 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER

/////////////////////////
// randomizes the list/array that is passed into it. Only external list no objects.
////////////////////////////////////////////////
function randomize(chars){
  let randomArr = [];
  for (let i = chars.length; i > 0; i--) {
    let rIndex = Math.floor(Math.random() * chars.length);
    console.log(`rIndex ${rIndex} , i ${i} , chars ${chars[rIndex]} , charLen ${chars.length}`);
    randomArr.push(chars[rIndex]);
    chars.splice(rIndex, 1);
  }
  console.log(randomArr);
}
//////////////////////////////////////////
//interates through the object that is passed. All objects 
//must contain another object of .chars and .length. yes I know .length sucks go back and change
///////////////////////////////////////////////////
function getChars(inputObj) {
  let returnArr = [];
  for (var key in inputObj) {
    let currentChars = inputObj[key].chars;
    let currentLength = inputObj[key].length;
    for (let i = currentLength; i > 0; i--) {
      console.log(`keys ${currentChars}`);
      let rIndex = Math.floor(Math.random() * currentChars.length);
      console.log(`current length is ${rIndex} ${currentChars[rIndex]}`);
      returnArr.push(currentChars[rIndex]);
    }
  }
  console.log(returnArr);
  return returnArr;
}
//////////////////////////////////////////
// validate that ascii num and special args add up to total length
////////////////////////////////////////////////////
function validateLength(inputObj) {
  //console.log(inputObj.asciiLength + inputObj.specialArg + inputObj.numArg);
  let overAllLen = Number(inputObj.asciiLower.length) + Number(inputObj.asciiUpper.length) + Number(inputObj.specialArg.length) + Number(inputObj.numArg.length);
  console.log(overAllLen);
  if (overAllLen === Number(inputObj.passLength)) {
    return 0;
  } else {
    alert("please make sure your number of ascii, number, and special characters add up to the desired over all length\n PLEASE TRY AGAIN!");
    return 1;
  }
}
