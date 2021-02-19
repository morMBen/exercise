const oneAndZero = (arr) => {
    return parseInt(arr.join(''), 2);
}


console.log(oneAndZero([0, 0, 0, 1]));
console.log(oneAndZero([1, 0, 0, 1]));
console.log(oneAndZero([0, 0, 0, 1]));
console.log(oneAndZero([0, 1, 0, 1]));
console.log(oneAndZero([0, 0, 1, 0]));
console.log(oneAndZero([0, 1, 1, 0]));
console.log(oneAndZero([1, 1, 1, 1]));
console.log(oneAndZero([1, 0, 1, 1]));
console.log(oneAndZero([1, 0, 0, 0, 0]));