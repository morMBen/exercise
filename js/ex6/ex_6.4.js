const populations = [8, 46, 360, 62];

const percentageOfWorld1 = population => {
    let worldPopulation = 7900;
    return (population / worldPopulation * 100).toFixed(2);
}

const populationPercentages = arr => {
    let percentages = new Array();
    for (let i = 0; i < arr.length; i++) {
        percentages.push(percentageOfWorld1(arr[i]));
    }
    return percentages;
}

console.log(populationPercentages(populations));