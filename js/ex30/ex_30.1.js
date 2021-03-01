function greaterThanTen(num) {
    return new Promise((resolve, reject) => {
        if (num > 10) {
            resolve('the number is larger then ten.');
        } else {
            reject('the number is smaller then ten');
        }
    })
}

let num1 = greaterThanTen(15);
let num2 = greaterThanTen(10);

num1.then(function (massage) {
    console.log(massage)
    return (num2)
}).then(function (massage) {
    console.log(massage)
    return (num1)
}).catch(() => {
    console.log('smaller then ten')
});