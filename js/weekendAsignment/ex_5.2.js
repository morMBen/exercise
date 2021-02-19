const repeatStr = (str, num) => {
    let tempStr;
    while (num > 0) {
        tempStr += str;
        num--;
    }
    return tempStr;
}

console.log(repeatStr('Hello', 5));