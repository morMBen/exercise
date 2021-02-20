const longest = (str1, str2 = '') => {
    let temp = (str1 + str2).toLowerCase().split('').sort();
    let tempSet = temp.filter((el, index) => temp.indexOf(el) === index);
    return tempSet.join('');

}

a = 'xyaabbbccccdefww';
b = 'xxxxyyyyabklmopq';
console.log(longest(a, b));
c = 'abcdefghijklmnopqrstuvwxyz';
console.log(longest(c, c));

// const longest2 = (str1, str2 = '') => {
//     let temp = (str1 + str2).toLowerCase().split('').sort();
//     let tempSet = [...new Set(temp)].join('');
//     return tempSet;

// }

// console.log(longest2(c, c));

// const longest3 = (str1, str2 = '') => {
//     let temp = (str1 + str2).toLowerCase().split('').sort();
//     let result = [];
//     temp.forEach(el => {
//         !result.includes(el) ? result.push(el) : null;
//     })
//     return result.join('');
// }
// console.log(longest3(c, c));
