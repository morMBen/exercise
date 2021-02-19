const fibo1 = (num) => {
    let a = 1;
    let b = 0;
    let temp;
    while (num >= 0) {
        temp = a;
        a = a + b;
        b = temp;
        num--;
    }
    return a;
}

function fibo2(num) {
    return num <= 0 ? 1 : fibo2(num - 1) + fibo2(num - 2);
}
console.log(fibo1(5));