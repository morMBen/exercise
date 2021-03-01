// Write two functions that use Promises that you can chain.

// The first function, makeAllCaps(), will take in an array of words and capitalize
// const makeAllCaps = new Promise((resolve, reject) => {
//     const tempArr = [];
// })
// them, and then the second function, sortWords(), will sort the words in
// alphabetical order. If the array contains anything but strings, it should throw
// an error.

// Call the functions once with an array of words and call it once with an array
// that includes at least one item that is not a word. Print the resolve and reject
// in a .then, .catch.

function makeAllCaps(arrayOfWords) {
    let tempArr = [];
    return new Promise(function (resolve, reject) {
        if (arrayOfWords.every(i => typeof i === 'string')) {
            arrayOfWords.forEach((element, index) => {
                tempArr[index] = element.toUpperCase();
            })
            resolve(tempArr);
        } else {
            reject('Not all the array is strings.')
        }
    })
}


function sortWords(arrayOfWords) {
    return new Promise(function (resolve, reject) {
        if (arrayOfWords.every(i => typeof i === 'string')) {
            resolve(arrayOfWords.sort());
        } else {
            reject('Not all the array is strings.')
        }
    })
}


function handleError(err) {
    console.log('ohhh gosh....')
    console.log(err);
}

const cups1 = makeAllCaps(['fdf', 'sfadf', 'fdagvs']);
const cups2 = sortWords(['frasdfsd', 'jblng', 'aasfs']);

cups1.then(function (array) {
    console.log(array);
    console.log('Now the array is with uppercase letters');
    return (cups2);
}).then(function (array) {
    console.log(array);
    console.log('Now the array is sorted');
    return (cups2);
}).catch(handleError)

