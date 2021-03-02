const messageEl = document.querySelector("#message");
const guessedKeysEl = document.querySelector("#guessed-keys");
const answerEl = document.querySelector("#answer");
const restartEl = document.querySelector("#restart");
const restartButton = document.querySelector("button");

const alphabet = "abcdefghijklmnopqrstuvwxyz";
const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log("random letter", randomLetter);

const guessedLetters = [];

document.addEventListener("keydown", (e) => {
  if (restartEl.classList.contains("hide")) {
    const key = e.key;
    const regExp = /[a-zA-Z]/g;

    if (!regExp.test(key)) {
      messageEl.textContent = " please enter a valid letter";
      return messageEl.classList.add("red");
    }
    if (guessedLetters.includes(key)) {
      messageEl.textContent = " You already guessed this key";
      return messageEl.classList.add("red");
    }
    if (randomLetter !== key) {
      messageEl.textContent = " Wrong letter please try again";
      messageEl.classList.add("red");
      guessedLetters.push(key);
      return (guessedKeysEl.textContent = guessedLetters);
    }
    if (randomLetter === key) {
      messageEl.textContent = " Correct letter!";
      messageEl.classList.add("green");
      answerEl.textContent = randomLetter;
      restartEl.classList.remove("hide");
    }
  }
});
const restart = () => {
  messageEl.textContent = " Guess a letter";
  messageEl.classList.remove("green");
  messageEl.classList.remove("red");
  guessedLetters.splice(0, guessedLetters.length);
  guessedKeysEl.textContent = guessedLetters;
  answerEl.textContent = "?";
  restartEl.classList.add("hide");
};
restartButton.addEventListener("click", restart);
//pseudo code
//*generate a random letter and store it in a variable
//*create an event listener that will listen to the key event
//*get the users letter
//*check if the key being pressed is a letter
//*if it isn't write a message that it is an invalid key
//! if it is a letter
//*.store the letter in an array
//* display the guessed words to the user
//*.if the letter is already in the array display a message that you typed this letter already
//* if it is the wrong letter, display to the user it is the wrong letter and place the wrong letter to the array.
//*if it is the right letter display a message that it is the right letter and display the correct letter to the user.
//* display to the user an option to restart the game
//* user cannot continue the game until confirmed
//* restart the html to the original state if he confirms
//*! don't forget to change the colors accordingly
