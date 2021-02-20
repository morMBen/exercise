const countingDuplicates = (str) => {
    let temp = str.toLowerCase().split('');
    let tempArr = [];
    let tempDuplic = [];
    for (let i = 0; i < temp.length; i++) {
        if (!(tempArr.includes(temp[i]))) {
            tempArr.push(temp[i])
        } else {
            !tempDuplic.includes(temp[i]) ? tempDuplic.push(temp[i]) : null;
        }
    }
    return tempDuplic.length;
}
console.log(countingDuplicates('aabBcde'));
console.log(countingDuplicates('indivisibility"'));
console.log(countingDuplicates('Indivisibilities'));