const shortestWords = (str) => {
    let temp = str.split(' ');
    let shortest, result;
    for (let i = 0; i < temp.length; i++) {
        if (shortest === undefined) {
            result = temp[i]
            shortest = temp[i].length;
        } else if (shortest === temp[i].length) {
            result += ` ${temp[i]}`;
        } else if (shortest > temp[i].length) {
            result = temp[i];
            shortest = temp[i].length;
        }
    }
    return result;
}

console.log(shortestWords(`String will never be empty and you do not need to account for different data types.`));