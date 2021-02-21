//Parant and a child Class
class Person {
    constructor(_name, _age) {
        this.name = _name;
        this._age = _age;
    }
    describe() {
        console.log(`I am ${this._name} and I am ${this._age} years old `);
    }
}

class Programmer extends Person {
    constructor(_name, _age, yearsOfExperience) {
        super(_name, _age);

        //Costom behaviour
        this.yearsOfExperience = yearsOfExperience;
    }
    code() {
        console.log(`${this.name} is coding`);
    }
}
let person1 = new Person('Mor', 45);
let programmer = new Programmer("Dom", 56, 12);

console.log(person1);
console.log(programmer);

programmer.code();

//Array
const programmers = [
    new Programmer('Dan', 36, 10),
    new Programmer('Bob', 27, 3)
]

function developSoftware(programmers) {
    //Develop software
    for (let programmer of programmers) {
        programmer.code();
    }
}

developSoftware(programmers);