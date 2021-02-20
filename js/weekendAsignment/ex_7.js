const arrOfNumbers = [2, 3, 5, 2, 3, 6, 3, 6, 2, 8, 1, 12];
const arrOfWords = ['Strawberry', 'Kiwi', 'Banana', 'Mango', 'Orange'];


//7.1 - filter
const filterFor = (arr, func) => {
    let tempArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            tempArr.push(arr[i]);
        }
    }
    return tempArr;
}


console.log(filterFor(arrOfNumbers, el => el > 3));
console.log(filterFor(arrOfWords, el => el.length > 5));

//7.2 forEach

const forEach = (arr, func) => {
    let tempArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            console.log('Match!');
        }
    }
}

forEach(arrOfNumbers, el => el > 3);

//7.3 map

const map = (arr, func) => {
    tempArr = [];
    for (let i = 0; i < arr.length; i++) {
        func(arr[i]) ? tempArr[i] = 'Match' : tempArr[i] = arr[i];

    }
    return tempArr;
}
console.log(map(arrOfNumbers, el => el > 3));