
Array.prototype.myFilter = function (func) {
    let filterdArr = [];
    for (let i = 0; i < this.length; i++) {
        if (func(this[i], i, this)) {
            filterdArr.push(this[i])
        };
    }
    return filterdArr;
}


Array.prototype.myFind = function (func) {
    let value;
    for (let i = 0; i < this.length; i++) {
        if (func(this[i], i, this)) {
            value = this[i];
            return value;
        };
    }
    return value;
}


let newNumber = [7, 8, 9, 8, 5, 4, 2, 9, 7, 2];
let newNumber2 = [7, 8, 9, 8, 5, 4, 2, 9, 7, 2];

let newNum1 = newNumber2.myFind((el => { return el < 7 }));
console.log(newNumber2.myFilter((el => { return el < 7 })));
console.log(newNum1);
