const numbers = [1, -5, 666, 2, 400, 11];


const sortFromAscending = (arr) => {
    return arr.sort((a, b) => a - b);
}
const sortFromdescending = (arr) => {
    return arr.sort((a, b) => b - a);
}



const sortNums = (arr, sortCallback) => {
    return sortCallback(arr);
}

console.log(sortNums(numbers, sortFromAscending));
console.log(sortNums(numbers, sortFromdescending));

