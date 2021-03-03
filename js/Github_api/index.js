const form = document.querySelector('form');
const cards = document.querySelector('.cards');
const messageBox = document.querySelector('.messageBox');
const nameOnTheScreen = [];
// const userAvatar = document.createElement('img');
async function fetchUser(query) {

    const response = await fetch(`https://api.github.com/users/${query}`);
    const data = await response.json();

    if (response.ok) {
        displayContent(data);
    } else {
        messageBox.textContent = `Error: ${data.message}`;
    }


}
// async function fetchTheInput(query) {
//     const user = await fetchUser(query);

//     // console.log(user.message)

//     displayContent(user);

// }

function displayContent(userD) {
    // console.log(userD);
    const userCard = document.createElement('div');
    userCard.classList.add("card");
    userCard.innerHTML = `<a href="${userD.html_url}">
    <img src="${userD.avatar_url}" width="200"></img>
    <h3>${userD.login}</h3>
    <p>Number of Rapo: ${userD.public_repos}</p>
    </a>`;
    cards.appendChild(userCard);

}


function unSubmited(event) {
    if (nameOnTheScreen.includes(form.query.value) || form.query.value === '') {
        if (form.query.value === '') {
            messageBox.textContent = 'You must type something!'
        } else {
            messageBox.textContent = 'This user is already displayed on the screen'
        }
        event.preventDefault();
    } else {
        event.preventDefault();
        console.log(form.query.value);
        const dataToDisplay = fetchUser(form.query.value);
        nameOnTheScreen.push(form.query.value);
        form.query.value = '';
        form.query.focus();
        messageBox.textContent = '';
        console.log(nameOnTheScreen);
    }
}

function handleERRORS(err) {
    messageBox.textContent = err;
}

window.onload = function () {
    form.query.focus();
}


form.addEventListener('submit', unSubmited);


