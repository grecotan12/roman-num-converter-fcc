const buttonEl = document.getElementById("convert-btn");
const inputEl = document.getElementById("number");
const outputEl = document.getElementById("output");

const checkUserInput = () => {
  if (!inputEl.value) {
    outputEl.innerText = "Please enter a valid number";
    reset();
    return;
  } else if (inputEl.value <= 0) {
    outputEl.innerText = "Please enter a number greater than or equal to 1";
    reset();
    return;
  } else if (inputEl.value > 3999) {
    outputEl.innerText = "Please enter a number less than or equal to 3999";
    reset();
    return;
  }
  
  outputEl.innerText = convert();
  reset();
}

const convert = () => {
  const array = inputEl.value.split("");
  console.log(array);
  let outputStr = "";

const fourDigit = parseInt(array[array.length-4]);
  if (fourDigit < 4) {
    for (let i = 0; i < fourDigit; i++) {
      outputStr += "M";
    }
  }

// Work with third digit
const thirdDigit = parseInt(array[array.length-3]);
  if (thirdDigit < 4) {
    for (let i = 0; i < thirdDigit; i++) {
      outputStr += "C";
    }
  }
  if (thirdDigit === 4) {
    outputStr += "CD";
  }
  if (thirdDigit === 5) {
    outputStr += "D";
  }
  if (thirdDigit > 5 && thirdDigit < 9) {
    outputStr += "D";
    for (let i = 0; i < thirdDigit - 5; i++) {
      outputStr += "C";
    }
  }
  if (thirdDigit === 9) {
    outputStr += "CM";
  }

  //Need To Work with Second digit
  const secondDigit = parseInt(array[array.length-2]);
  if (secondDigit < 4) {
    for (let i = 0; i < secondDigit; i++) {
      outputStr += "X";
    }
  }
  if (secondDigit === 4) {
    outputStr += "XL";
  }
  if (secondDigit === 5) {
    outputStr += "L";
  }
  if (secondDigit > 5 && secondDigit < 9) {
    outputStr += "L";
    for (let i = 0; i < secondDigit - 5; i++) {
      outputStr += "X";
    }
  }
  if (secondDigit === 9) {
    outputStr += "XC";
  }

  // Need To Work With One Digit First
  const firstDigit = parseInt(array[array.length-1]);
  if (firstDigit < 4) {
    for (let i = 0; i < firstDigit; i++) {
      outputStr += "I";
    }
  }
  if (firstDigit === 4) {
    outputStr += "IV";
  }
  if (firstDigit === 5) {
    outputStr += "V";
  }
  if (firstDigit > 5 && firstDigit < 9) {
    outputStr += "V";
    for (let i = 0; i < firstDigit - 5; i++) {
      outputStr += "I";
    }
  }
  if (firstDigit === 9) {
    outputStr += "IX";
  }
  console.log(outputStr);
  // must return a value
  return outputStr;
}

const reset = () => {
    setTimeout(() => {
      inputEl.value = "";
      outputEl.innerText = "";
    }, 3000);
}

buttonEl.addEventListener("click", checkUserInput);