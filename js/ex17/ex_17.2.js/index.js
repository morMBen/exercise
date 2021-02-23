const submit = document.querySelector("#submit");
const myParagrph = document.createElement('p');
myParagrph.textContent = `You must enter at least 100 words.
Please try again`;


submit.addEventListener("click", () => {
    countWord() < 100 ? document.body.appendChild(myParagrph) : myParagrph.style = "display:none";

});

function countWord() {
    // Get the input text value 
    var words = document
        .querySelector("#word").value;

    var count = 0;
    var split = words.split(' ');

    for (var i = 0; i < split.length; i++) {
        if (split[i] != "") {
            count += 1;
        }
    }
    return count;
}





// const myParagrph = document.createElement('p');
// myParagrph.textContent = 'I am a P';
// myParagrph.classList.add('special');
// console.log(myParagrph);

// document.body.appendChild(myParagrph);