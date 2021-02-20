const maskify = (str) => {
    let maskyWord = new Array(str.length - 4).fill('#', 0, str.length - 4).join('');
    return maskyWord + str.slice(str.length - 4, str.length);
}
console.log(maskify('Skippy'));
console.log(maskify('Nananananananananananananananana Batman!'));