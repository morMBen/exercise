
function toWeirdCase(string) {
    let arr = string.match(/[a-zA-Z ]/g);
    let temp = 0;
    return arr.map((el, i) => {
        if (el === ' ') {
            temp = i + 1;
            return ' ';
        }
        return (i - temp) % 2 == 0 ? el.toUpperCase() : el.toLowerCase();
    }).join('');

}
console.log(toWeirdCase('Weird string case'));