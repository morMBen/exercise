// Make a div
const div = document.createElement("div");
// add a class of wrapper to it
div.classList.add("wrapper");

// put it into the body
document.body.appendChild(div);
// make an unordered list
const unorderedList = document.createElement("ul");

// add three list items with the words "one, two, three" in them

unorderedList.innerHTML = `<li>one</li><li>two</li><li>three</li>
`;

// put that list into the above wrapper
div.insertAdjacentElement("afterBegin", unorderedList);
// create an image
let newImg = document.createElement("img");
// set the source to an image
newImg.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYMzeZdPjrwEnCR9kPBfLAm9t289hRGdeA1w&usqp=CAU"
// set the width to 250
newImg.width = 250;
// add a class of cute
newImg.classList.add("cute");
// add an alt of Cute Puppy
newImg.alt = "Puppy";
// Append that image to the wrapper
div.appendChild(newImg);
// with HTML string, make a div, with two paragraphs inside of it

let newDiv = document.createElement("div");
newDiv.innerHTML = `
<p>First p</p>
<p>second p</p>`;
// put this div before the unordered list from above
div.insertAdjacentElement("afterbegin", newDiv);


// add a class to the second paragraph called warning
div.firstElementChild.lastElementChild.classList.add("warning");

// remove the first paragraph

div.firstElementChild.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name, age, height) {
  let html = document.createElement("div");
  html.classList.add("playerCard");
  html.innerHTML = `
  <h2>${name} — ${age}</h2>
  <p>They are ${height} HEIGHT and AGE of ${age} years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
`
  return html;
}


// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards

let playerCards = document.createElement("div");
playerCards.classList.add('cards')
// make 4 player cards using generatePlayerCard

playerCards.insertAdjacentElement("afterbegin", generatePlayerCard("Jack", 27, 186));
playerCards.insertAdjacentElement("afterbegin", generatePlayerCard("Mick", 26, 172));
playerCards.insertAdjacentElement("afterbegin", generatePlayerCard("Mor", 19, 195));
playerCards.insertAdjacentElement("afterbegin", generatePlayerCard("David", 24, 201));
// append those cards to the div
// put the div into the DOM just before the wrapper element
div.insertAdjacentElement("beforebegin", playerCards);
// Bonus, put a delete Button on each card so when you click it, the whole card is removed


let playerCard = document.querySelectorAll(".playerCard");
let button = document.createElement("button");
button.textContent = "delete Card";
console.log(playerCard);

playerCard.forEach(el => {
  let tempButton = button.cloneNode("true");
  tempButton.addEventListener("click", () => {
    deleteCard(el)
  })
  el.appendChild(tempButton);

  console.log(el);
})


// select all the buttons!

function deleteCard(card) {
  card.remove();
}

// make out delete function
// loop over them and attach a listener
