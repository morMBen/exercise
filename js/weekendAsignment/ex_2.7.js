const basicOp = (str, num1, num2) => {
    let result;
    switch (str) {
        case '+': result = num1 + num2;
            break
        case '-': result = num1 - num2;
            break
        case '*': result = num1 * num2;
            break
        case '/': result = num1 / num2;
            break
        case '%': result = num1 % num2;
            break
        default: -1;
    }
    return result;
}

console.log(basicOp('*', 5, 3));

