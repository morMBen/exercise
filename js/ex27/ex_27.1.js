function Square(a, b, c, d) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
}
Square.prototype.isSquer = function () {
    if (((this.a + this.b + this.c + this.d) / 4) === this.b) {
        return true
    }
    return false;
}
let brr = new Square(1, 2, 3, 4);
console.log(brr);
let brr1 = new Square(4, 4, 4, 4);
console.log(brr1.isSquer());

