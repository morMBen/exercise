class Square {
    //set up
    constructor(_width) {
        this.width = _width;
        this.higth = _width;
    }
    static equals(a, b) {
        return a.width * a.higth === b.width * b.higth;
    }
    static isValidDimension(width, higth) {
        return width === higth;
    }
}
let square1 = new Square(8);
let square2 = new Square(8);
console.log(square1);
console.log(Square.equals(square1, square2));
console.log(Square.isValidDimension(6, 7));