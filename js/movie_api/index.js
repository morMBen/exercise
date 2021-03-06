const form = document.querySelector('form');
const cards = document.querySelector('.cards');
const messageBox = document.querySelector('.messageBox');
const nameOnTheScreen = [];
// const userAvatar = document.createElement('img');
async function fetchMovie(query) {
    const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=153385b4&type=movie&s=${query}`);
    const data = await response.json();
    const dataSearch = await data.Search;


    console.log(dataSearch[0].imdbID);
    if (response.ok) {

        dataSearch.forEach(async e => {
            const responseID = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=153385b4&type=movie&t=${e.Title}`);
            const dataID = await responseID.json();
            console.log(e);
            let tempHtml = '<span>Ratings:</span>';

            for (let i = 0; i < dataID.Ratings.length; i++) {
                tempHtml += `
                <p><span>Source:</span>${dataID.Ratings[i].Source}</p>
                <p><span>Value:</span>${dataID.Ratings[i].Value}</p>`
            }


            const userCard = document.createElement('div');
            userCard.classList.add("card");
            userCard.innerHTML = `
            <img src="${dataID.Poster} width="100%">     
            <h3>${e.Title}</h3>
            <p><span>Genre:</span> ${dataID.Genre}</p>
            <p><span>Year:</span> ${e.Year}</p>
            <p><span>Plot:</span> ${dataID.Plot}</p>
            <p><span>Director:</span> ${dataID.Director}</p>
            <p><span>Actors:</span> ${dataID.Actors}</p>
            ${tempHtml}`;
            cards.appendChild(userCard);
        });

    } else {
        handleERRORS(`Error: ${data.message}`);
    }
}




function unSubmited(event) {
    cards.textContent = '';
    if (form.query.value === '') {
        messageBox.textContent = 'You must type something!'
        event.preventDefault();
    } else {
        // console.log(form.query.value);
        const dataToDisplay = fetchMovie(form.query.value);
        nameOnTheScreen.push(form.query.value);
        form.query.value = '';
        form.query.focus();
        messageBox.textContent = '';
        // console.log(nameOnTheScreen);
        event.preventDefault();
    }
}

function handleERRORS(err) {
    messageBox.textContent = err;
}

window.onload = function () {
    form.query.focus();
}


form.addEventListener('submit', unSubmited);


