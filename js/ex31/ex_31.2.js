const apiUrl = "http://swapi.dev/api/people/1";
const starWars = fetch(apiUrl);
// console.log(starWars);
let characters = [];

async function getChar() {
    let urlF = await fetch(apiUrl);
    let dataFrom = await urlF.json();
    let results = dataFrom.results;
    await characters.push(454);
    // let makeChar = []
    // results.forEach(e => {
    //     const obj = {
    //         name: e.name,
    //         height: e.height,
    //         hairColor: e.hair_color,
    //         homeworld: getWorld(fetch(e.homeworld)),
    //     }
    //     makeChar.push(obj);
    // });
    // console.log(makeChar);
    // return makeChar;
}

// async function getWorld(i) {
// await i;
// }

// async function getWorld() {
//     let urlF = await characters[1].homeworld.json();
//     let dataFrom = await urlF.json();
// }
// characters = getChar().then((el) => { return el });
getChar();
console.log(characters);



// starWars.then(data => {
//     return data.json();
// }).then(data => {
//     data.results.forEach(element => {
//         characters.push({
//             name: element.name,
//             height: element.height,
//             hairColor: element.hair_color,
//             homeworld: fetch(element.homeworld).then(home => { return this.homeworld }),
//         })
//     });
//     return characters;
// }).then(data => {
//     characters.forEach(e => {
//     })
// })
// console.log(characters);