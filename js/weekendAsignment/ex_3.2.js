let numberOfPeople = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        arr[0][0] += arr[i][0];
        if ((arr[0][0] -= arr[i][1]) < 0) {
            return `Wrong input!! 
the number of people in can't be negative.`
        };
    }
    return arr[0][0];
}

console.log(numberOfPeople([[30, 0], [5, 4], [5, 9]]));