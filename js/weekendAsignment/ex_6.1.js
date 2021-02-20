const Mumbling = (str) => {
    let tempArr = str.split('');
    for (let i = 0; i < tempArr.length; i++) {
        let tempArr2 = new Array(i + 1).fill(tempArr[i].toLowerCase(), 0, i + 1);
        tempArr2[0] = tempArr2[0].toUpperCase();
        tempArr[i] = tempArr2.join('');
    }
    return tempArr.join('-');

}
console.log(Mumbling('cwAt'));
console.log(Mumbling('sgsfsdfdgASgSd'));