let massege = document.querySelector("h3[name='user-message']");
let keysTitel = document.querySelector("h3[name='staus']");
let inputKeys = document.querySelector("h3[name='keys-guessed']");
let button = document.querySelector("button[name='reset-button']");

let doItFirstGuess;
let guessingLetter = randomizeNumber();
console.log(guessingLetter);

//get the user key
window.addEventListener('keydown', starter);

button.addEventListener('click', endRound);

function starter(e) {
    //chack if the input is a letter
    if ((/[a-zA-Z]/i).test(e.key) && !(e.key.length !== 1)) {

        //if the user allredy press this key
        if (inputKeys.textContent.includes(e.key)) {
            //massege
            massege.textContent = 'has already been guessed!'
            //make the text massege red
            massege.style.color = "red";

            //if the user did not press that key
        } else {
            //if the guess is right
            if (guessingLetter === e.key) {
                //the user did it - good guess massage
                massege.textContent = 'Right letter'
                keysTitel.textContent = 'Would you like to play again?'
                //display button
                button.style.display = 'flex';
                //undisplay keys
                inputKeys.style.display = 'none';
                //make the text massege green
                massege.style.color = "green";
                e.eve
                this.removeEventListener("keydown", starter);
            } else {//if the guess is wrong 
                //massage

                massege.textContent = 'Nope, wrong letter'
                //make the text massege red

                massege.style.color = "red";

                doItFirstGuess = inputKeys.textContent == '' ? '' : ',';
                inputKeys.textContent = `${inputKeys.textContent}${doItFirstGuess} ${e.key}`;
            }
        }


    } else {//massage to user if the input is invalid
        massege.textContent = 'please enter a valid letter.'
        //make the text massege red
        massege.style.color = "red";
    }
    //check if is an alphabetical letter
    //display a massage if its not allowed
}


function endRound() {
    button.style.display = 'none';
    inputKeys.style.display = 'flex';
    massege.textContent = 'Guess a letter';
    massege.style.color = 'black';
    keysTitel.textContent = "Keys guessed";
    window.addEventListener('keydown', starter);
    inputKeys.textContent = '';
}



function randomizeNumber() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < 5; i++)
        text = possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}