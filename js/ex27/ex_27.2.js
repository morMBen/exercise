function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
    this.name = pokemonName;
    this.type = pokemonType;
    this.attackList = pokemonAttackList;
}

Pokemon.prototype.callPokemon = function () {
    console.log(`“I choose you, ${this.name}`);
}
Pokemon.prototype.attack = function (num) {
    console.log(`${this.name} used ${this.attackList[num]}`);
}

let p1 = new Pokemon('Pikachu', 'small', ['strik', 'fire']);
let p2 = new Pokemon('Eevee', 'small', ['strik', 'fire']);
let p3 = new Pokemon('Charmander', 'medium', ['strik', 'fire']);

p1.callPokemon();
p1.attack(1);
p2.callPokemon();
p2.attack(1);