const isIsogram = (str) => {
    let temp = str.toLowerCase().split('').sort();
    let result = true;
    for (let i = 0; i < temp.length; i++) {
        temp[i] === temp[i - 1] ? result = false : null;
    }
    return result;
}
console.log(isIsogram('Dermatoglyphics'));
console.log(isIsogram('aba'));
console.log(isIsogram('builders'));
console.log(isIsogram('constractor'));