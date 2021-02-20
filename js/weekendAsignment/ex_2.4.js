const Unique = (arr) => {
    let temp1 = {};
    arr.forEach(el => temp1[el] ? temp1[el]++ : temp1[el] = 1);
    temp1 = Object.entries(temp1);
    temp1 = temp1.find(el => el[1] === 1 ? el[0] : null);
    return temp1[0];
}

console.log(Unique([1, 1, 1, 1, 2, 1, 1, 1]));
console.log(Unique([1, 1, 1, 1, 2, 1, 1, 1]));
console.log(Unique([1, 1, 1, 1, 2, 1, 1, 1]));
console.log(Unique([2, 2, 2, 1, 2, 2, 1, 'dasd']));


// The better option
const Unique2 = (arr) => {
    arr.sort((a, b) => a - b);
    return arr[0] === arr[1] ? arr[arr.length - 1] : arr[0];
}
console.log(Unique2([1, 1, 1, 1, 2, 1, 1, 1]));
console.log(Unique2([1, 1, 1, 1, 2, 1, 1, 1]));
console.log(Unique2([1, 1, 1, 1, 2, 1, 1, 1]));
console.log(Unique2([2, 2, 2, 1, 2, 2, 1, 'dasd']));