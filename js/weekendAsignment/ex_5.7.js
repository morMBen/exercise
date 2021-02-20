const shortestWords = (str) => {
    let temp = str.split(' ');
    let shortest;
    for (let i = 0; i < temp.length; i++) {
        shortest === undefined ? shortest = temp[i].length : shortest > temp[i].length ? shortest = temp[i].length : null;
    }
    return shortest;
}

console.log(shortestWords('Hello there jskjks ksjflkn loremsj sdlfjaljf lalf lasdfl lanfl nalsdf'));