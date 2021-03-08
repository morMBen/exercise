//1
class sortNumber {
    //2
    constructor() {
        this.numList = [];
    }
    //3
    addNum(num) {
        if (isPrime(num) && !(this.numList.includes(num))) {
            this.numList.push(num);
            return true;
        } else {
            return false;
        }
    }
    //4
    removeNum(num) {
        let result;
        let spot = this.numList.indexOf(num);
        if (spot !== -1) {
            this.numList.splice(spot, 1);
        }
        // this.numList.slice(num);
        return spot === -1 ? false : true;
    }
    //5
    getAll() {
        return this.numList;
    }
    //6
    print() {
        console.log(this.numList);
    }
    //9
    share(sortList) {
        let counter = 0;
        sortList.getAll().forEach(e => {
            if (this.getAll().indexOf(e) !== -1) {
                counter++;
            }
        });
        return counter;
    }
    //10
    union(sortList) {
        let temp = sortList.getAll();
        for (let i = 0; i < this.numList.length; i++) {
            temp.includes(this.numList[i]) ? null : temp.push(this.numList[i]);
        }
        return temp;
    }
}
//7
let numArr1 = new sortNumber();
numArr1.addNum(5);
numArr1.addNum(5);
numArr1.addNum(7);
numArr1.addNum(13);
numArr1.addNum(67);
numArr1.addNum(19);

//8
let numArr2 = new sortNumber();
numArr2.addNum(67);
numArr2.addNum(17);
numArr2.addNum(13);




console.log(numArr1.getAll());
console.log(numArr2.getAll());
console.log(numArr2.union(numArr1));

// console.log(isPrime(6));
function isPrime(num) {
    for (var i = 2; i < num; i++)
        if (num % i === 0) return false;
    return num > 1;
}