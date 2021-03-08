//1
class Car {
    //2
    constructor(company, speed) {
        this.company = company;
        this.speed = speed;
    }
    //3
    getCompany() {
        return this.company;
    }
    getSpeed() {
        return this.speed;
    }
    //4
    setSpeed(newSpeed) {
        this.speed = newSpeed;
    }
}
//5
let volvo = new Car('Volvo', 110)
let tesla = new Car('Tesla', 300)
let vw = new Car('Vw', 230)
let bmw = new Car('Bmw', 180)
//6
const carArray = [volvo, tesla, vw, bmw];

//7
let fastestCar;
fastestCar = carArray[1];
for (let i = 0; i < carArray.length; i++) {
    if (fastestCar !== undefined) {
        fastestCar.getSpeed() < carArray[i].getSpeed() ? fastestCar = carArray[i] : null;
    } else {
        fastestCar = i;
    }
}
console.log(fastestCar);
//8

const orderdCarArr = carArray.sort((a, b) => {
    if (a.getSpeed() < b.getSpeed()) {
        return -1;
    } else if (a.getSpeed() > b.getSpeed()) {
        return 1;
    } else {
        return 0;
    }
})
console.log(orderdCarArr);

