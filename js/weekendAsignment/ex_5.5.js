const abbreviateTwoWords = (str) => {
    let init = str.slice(0, 1)
    let temp;
    while (str.indexOf(' ') !== -1) {
        init += `.${str.slice(str.indexOf(' '), str.indexOf(' ') + 1)}`
        temp =
    }
    return init;
}

console.log(abbreviateTwoWords('Mordech iBen'));