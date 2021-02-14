//1
const logString = (string) => { console.log(string) };

const isString = (myString, callback) => {
    if (typeof (myString) === 'string') {
        callback(myString);
    }
}
isString('moti', logString);


//2
let myString = 'moti lsnflnf lsdfnlnf lsdnfln';

const replaceSpaceInComma = (string) => {
    return string.split(' ').join(',')
};

const firstWordUpperCase = (myString, myCallback) => {
    let temp = myString.split(' ');
    temp[0] = temp[0].toUpperCase();
    myString = temp.join(' ');
    return myCallback(myString);
}
console.log(firstWordUpperCase(myString, replaceSpaceInComma));

//3
firstWordUpperCase(myString, logString);

//4 
const doTheWordLongerThen = (myWord, num, callback) => myWord.length >= num ? callback(myWord) : null;

let newString = 'bababababksj';
doTheWordLongerThen(newString, 10, logString);
