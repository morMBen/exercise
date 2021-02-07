'use strict'
function describeCountry(country, population, capital) {
    return `${country} has ${population} milion people and its capital city is ${capital}`;
}
let israel = describeCountry('Israel', 8, 'jerusalem');
let costaRica = describeCountry('Costa Rica', 5, 'San Jose');
let spain = describeCountry('Spain', 46, 'Madrid');

console.log(israel);
console.log(costaRica);
console.log(spain);