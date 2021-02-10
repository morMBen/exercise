
const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];
array.join('');
count = (arr) => {
    let tempString = arr.join('').replace(/ /g, '');
    tempString = tempString.toLowerCase().split('');
    let tempObj = {};
    for (let i = 0; i < tempString.length; i++) {
        tempObj[tempString[i]] ? tempObj[tempString[i]]++ : tempObj[tempString[i]] = 1;
    }
    return tempObj;
}
console.log(count(array));