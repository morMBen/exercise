//1
const doubleValues = (array) => {
    let tempArr = array.map(arr => arr * 2)
    return tempArr;
}

console.log(doubleValues([10, 20, 4, 5]));

//2
const onlyEvenValues = (array) => {
    let newTempArr = [];
    array.forEach(arr => {
        if (arr % 2 === 0) {
            newTempArr.push(arr);
        }
    })
    return newTempArr;
}

console.log(onlyEvenValues([10, 20, 4, 5]));

//3

let mixedArr = ['nffa', 65, 'affa', 5, 65, 'affa', 5];

const showFirstAndLast = (arr) => {
    let tempArr2 = [];
    arr.forEach(arr => {
        if (typeof (arr) === 'string') {
            tempArr2.push(arr);
        }
    })
    return tempArr2[1] ? [tempArr2.shift(), tempArr2.shift()] : tempArr2[0] ? [tempArr2.shift()] : [];

}
console.log(showFirstAndLast(mixedArr));

//4
const vowelCount = (string) => {
    let stringArr = string.toLowerCase().split('');
    let tempObj = {};
    stringArr.map(item => {
        !(tempObj[item] > 0) ? tempObj[item] = 1 : tempObj[item]++;

    });
    return tempObj;

}

console.log(vowelCount('mFtiToa'));

//5
const capitalize = (string) => {
    let stringArr2 = string.split('');
    let stringArr3 = [];
    stringArr2.forEach(letter => {
        stringArr3.push(letter.toUpperCase());
    })
    return stringArr3.join('');
}

console.log(capitalize('mFtiToa'));

//6
const shiftLetters = (string) => {
    let stringArr2 = string.split('');
    let stringArr3 = [];
    stringArr2.forEach(letter => {
        let tempNum = letter.charCodeAt(0) + 1;
        stringArr3.push(String.fromCharCode(tempNum));
    })
    return stringArr3.join('');
}
console.log(shiftLetters('mFtiToa'));

//7
const swapCase = (string) => {
    let stringArr2 = string.split(' ');
    let stringArr3 = [];
    stringArr2.forEach((arr, i) => {
        i % 2 === 0 ? stringArr3.push(arr) : stringArr3.push(capitalize(arr));

    })
    return stringArr3;
}

console.log(swapCase('mFtiToa afad; adfalkk adfafl, af'));
