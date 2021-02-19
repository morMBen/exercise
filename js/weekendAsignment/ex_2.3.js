const findNextSquare = (num) => {
    return Math.sqrt(num) % 1 === 0 ? Math.pow(Math.sqrt(num) + 1, 2) : -1;
}
