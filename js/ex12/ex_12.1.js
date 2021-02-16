
const arrOfNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const max = (max, num) => {
    if (max > num) {
        return max;
    }
    return num;
}

console.log(arrOfNum.reduce(max, 0));

const sum = (sum, num) => {
    if (num % 2 === 0) {
        return sum + num;
    }
    return sum;
}

console.log(arrOfNum.reduce(sum, 0));

const average = (nums) => {
    return nums.reduce((a, b) => (a + b)) / nums.length;
}
console.log(average(arrOfNum));

