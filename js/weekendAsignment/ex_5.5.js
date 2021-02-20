const abbreviateTwoWords = (str) => {
    return (str.slice(0, 1) + '.' + str.split(' ')[1].slice(0, 1)).toUpperCase();
}

console.log(abbreviateTwoWords('mordech ben'));