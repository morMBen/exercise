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

let p1 = new Point(1, 2);
let p2 = new Point(1, 2);
let p3 = new Point(5, 6);
let p6 = new Point(5, 6);
let p4 = new Point(7, 8);
let p5 = new Point(1, 5);


class PointWorld {
    constructor() {
        this.pointList = [];
    }
    addPoint(point) {
        this.pointList.push(point);
    }
    //3
    sortPoints() {
        return this.pointList.sort((a, b) => b.getY() - a.getY());
    }
    //4
    getUnick() {
        let result = [this.pointList[0]];
        for (let i = 0; i < this.pointList.length; i++) {
            for (let j = 0; j < result.length; j++) {
                console.log(j);
                if (!this.pointList[i].isSame(result[j])) {
                    j = result.length;
                    result.push(this.pointList[i]);
                }
                else {
                }
            }
        }
        return result;
    }
    //5
    getAllX() {
        return this.pointList.reduce((acc, cur) => cur.getX() + acc, 0);
    }
    //6
    getPointIfEx(point) {
        if (point instanceof Point) {
            return this.pointList.includes(point) ? this.pointList.findIndex(e => e === point) : false;
        } else {
            return false;
        }
    }
}
let newWorld = new PointWorld();

newWorld.addPoint(p1);
newWorld.addPoint(p2);
newWorld.addPoint(p3);
newWorld.addPoint(p4);
newWorld.addPoint(p6);
newWorld.addPoint(p5);


// console.log(newWorld.sortPoints());
console.log(newWorld.getUnick());
// console.log(newWorld.getAllX());
// console.log(newWorld.getPointIfEx(p5));
// console.log(p1.isSame(p3));

