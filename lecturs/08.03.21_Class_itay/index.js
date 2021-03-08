class Person {
    static counter = 0;

    constructor(name, age) {
        this.id = Person.counter++;

        // this.id = Person.counter++;
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
}
// let moti = new Person(name: 'Moti', age: 35);

// Person.counter = 1;

let moti = new Person('Moti', 35);
let moti2 = new Person('Moti', 35);

console.log(moti instanceof (Person));
console.log(moti.getName());