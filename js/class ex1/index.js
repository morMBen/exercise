class Animl {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }
    getName() {
        return this.name;
    }
    getSound() {
        return this.sound;
    }
    print() {
        console.log(`${this.name} ${this.sound} `);
    }
}

let dog = new Animl('dog', 'barking');
let cat = new Animl('cat', 'wailing');
let bird = new Animl('bird', 'tweeting');

dog.print();
cat.print();
bird.print();

