class Square {
    //set up
    constructor(_width) {
        this.width = _width;
        this.higth = _width;
        this.nuberOfRecuestsForArea = 0;
    }
    //costructor
    get area() {
        this.nuberOfRecuestsForArea++;
        return this.width * this.higth;
    }
    set area(area) {
        this.width = Math.sqrt(area);
        this.higth = this.width;
    }

}
let square1 = new Square(4);

square1.area = 25;

console.log(square1.width);
console.log(square1.higth);
console.log(square1.area);
console.log(square1.area);
console.log(square1.area);
console.log(square1.area);
console.log(square1.nuberOfRecuestsForArea);
