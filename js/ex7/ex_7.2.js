let myCountry = {
    country: 'Israel',
    capital: 'Jerusalem',
    language: 'Hebrew',
    population: 8,
    neighbours: ['Jordan', 'Egypt', 'Lebanon', 'Syria'],
    describe: function () { return `${this.country} has ${this.population} million people, their mother tongue is ${this.language}, they have ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`; },
    checkIsland: function () {
        this.isIsland = this.neighbours.length > 0 ? false : true;
    },
}

console.log(myCountry.describe());
myCountry.checkIsland();
console.log(myCountry.isIsland);