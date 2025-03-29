const userInputBox = document.getElementById("user-input-box");
const customKeyboardBox = document.getElementById("custom-keyboard");

const FINAL_KEY = "UNITED STATE";

let userInput = FINAL_KEY.split("").map((char) => (char === " " ? "-" : null));

const englishLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function renderCustomKeyboard() {
  customKeyboardBox.innerHTML = "";
  englishLetters.forEach((item) => {
    customKeyboardBox.innerHTML += createKeyboardKey(item);
  });
}

function createKeyboardKey(letter) {
  return `
        <div class="key ${
          userInput.includes(letter) ? "notActive-key" : "active-key"
        }" onclick="customKeyboardKeyClick('${letter}')">
            ${letter}
        </div>
    `;
}

function customKeyboardKeyClick(letter) {
  if (!userInput.includes(letter)) {
    FINAL_KEY.split("").forEach((item, index) => {
      if (item === letter) {
        userInput[index] = letter;
      }
    });
    setUserInput(userInput);
  }
}

function setUserInput() {
  renderCustomKeyboard();
  renderUserInputBox();
  showSuccessAlert();
}

function renderUserInputBox() {
  userInputBox.innerHTML = "";
  const words = FINAL_KEY.split(" ");
  let charIndex = 0;

  words.forEach((word) => {
    userInputBox.innerHTML += `<div class="word-box">`;
    for (let i = 0; i < word.length; i++) {
      userInputBox.innerHTML += createUserInputKey(userInput[charIndex]);
      charIndex++;
    }
    userInputBox.innerHTML += `</div>`;
    charIndex++;
  });
}

function createUserInputKey(item) {
  return `
        <div class="key ${item === null ? "input-key" : "selected-key"}">
            ${item === null ? "" : item}
        </div>
    `;
}

function showSuccessAlert() {
  if (!userInput.some((item) => item === null)) {
    alert("Good Job!");
  }
}
console.log(userInput);
renderCustomKeyboard();
renderUserInputBox();
