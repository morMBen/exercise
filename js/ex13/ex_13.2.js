const listOfNeighbours = [
    ["Canada", "Mexico"],
    ["Spain"],
    ["Norway", "Sweden", "Russia"],
];

const consoleAll = (arr) => {
    let i = 0;
    while (i < arr.length) {
        let j = 0;
        while (j < arr[i].length) {
            console.log(arr[i][j]);
            j++;
        }
        i++;
    }
}
consoleAll(listOfNeighbours);