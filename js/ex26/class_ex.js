function Car(make, speedProp) {
    this.make = make;
    this.speedProp = speedProp;
}
Car.prototype.accelerate = function () {
    this.speedProp += 10;
    console.log(this.speedProp);
}
Car.prototype.break = function () {
    this.speedProp -= 5;
    console.log(this.speedProp);
}

let bmw = new Car('BMW', 120);
let mercedes = new Car('mercedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
mercedes.accelerate();
mercedes.accelerate();
mercedes.accelerate();
mercedes.accelerate();
