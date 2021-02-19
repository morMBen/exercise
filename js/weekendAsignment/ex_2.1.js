const sumOfLowestNumbers = (numArr) => {
    let temArr = numArr.sort((a, b) => a - b);
    return temArr[0] + temArr[1];
}

console.log(sumOfLowestNumbers([19, 5, 42, 2, 77]));
console.log(sumOfLowestNumbers([10, 343445353, 3453445, 3453545353453]));