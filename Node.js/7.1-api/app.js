const axios = require('axios');
const request = require('request');
const pMRequest = require('postman-request');


//1
const fetchAxios = async () => {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
    console.log(response.data.abilities[0].ability.name)
    console.log(response.data.abilities[0].ability.url)
}
fetchAxios()

//2
request('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a', (error, response) => {
    if (error) {
        console.log(error)
        console.log('Api adress error')
    } else {
        console.log(JSON.parse(response.body).drinks[8].strDrink)
    }
})

//3
pMRequest('https://geek-jokes.sameerkumar.website/api?format=json', (error, response) => {
    if (error) {
        console.log('error:', error);
    } else {
        console.log(JSON.parse(response.body).joke)
    }
});