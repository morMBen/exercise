const tribonacci = (num) => {
    let tempArr = new Array(num), i = 3;
    tempArr[0] = 0, tempArr[1] = 0, tempArr[2] = 1;
    while (num >= 0) {
        tempArr[i] = tempArr[i - 1] + tempArr[i - 2] + tempArr[i - 3];
        i++;
        num--;
    }
    return tempArr[tempArr.length - 1];
}

console.log(tribonacci());