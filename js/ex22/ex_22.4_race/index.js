
let player1 = document.querySelector("#player1-race > td.active");
let player2 = document.querySelector("#player2-race > td.active");


let massege = document.createElement('h2');
massege.textContent = 'won the race!!!';

let button = document.createElement("button");
button.textContent = "Press to play again"


window.addEventListener('keyup', starter);

function starter(el) {
    if (el.key === 's') {
        console.log(player1);
        player1.classList.remove("active");
        if (player1.nextElementSibling.nextElementSibling) {
            player1 = player1.nextElementSibling;
            player1.classList.add('active');
        } else {
            massege.textContent = `The red car ${massege.textContent}`;
            document.body.appendChild(massege);
            document.body.appendChild(button);
            window.removeEventListener('keyup', starter);
        }
    }
    if (el.key === 'l') {
        player2.classList.remove("active");
        if (player2.nextElementSibling.nextElementSibling) {
            player2 = player2.nextElementSibling;
            player2.classList.add('active');
        } else {
            massege.textContent = `The yellow car ${massege.textContent}`;
            document.body.appendChild(massege);
            window.removeEventListener('keyup', starter);
            document.body.appendChild(button);
        }
    }
}

button.addEventListener("click", startAgain);

function startAgain() {
    massege.textContent = 'won the race!!!';
    window.addEventListener('keyup', starter);
    player1.classList.remove("active");
    player2.classList.remove("active");
    player1 = document.querySelector("#player1-race").firstElementChild;
    player2 = document.querySelector("#player2-race").firstElementChild;
    player1.classList.add('active');
    player2.classList.add('active');
    button.remove();
    massege.remove();


}

function checkIfLast(el) {
    el ? el : false;
}

