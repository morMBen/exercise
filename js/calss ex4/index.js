class Point {
    //1
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    //2
    getX() {
        return this.x;
    }
    //3
    getY() {
        return this.y;
    }
    //4
    addToX(num) {
        this.x += num;
    }
    //5
    addToY(num) {
        this.y += num;
    }
    //6
    setX(num) {
        this.x = num;
    }
    //7
    setY(num) {
        this.y = num;
    }
    //8
    addPoint(point) {
        this.x += point.getX();
        this.y += point.getY();
    }
    //9
    isSame(point) {
        if (point.getX() === this.x && point.getY() === this.y) {
            return true;
        }
        return false;
    }
    //10 
    print() {
        console.log(`X = ${this.x} Y = ${this.y}`);
    }
}

let p1 = new Point(3, 6);
let p2 = new Point();
p1.addToX(5);
console.log(p1);
p2.addPoint(p1);
console.log(p2);
console.log(p2.isSame(p1));
p1.print();
