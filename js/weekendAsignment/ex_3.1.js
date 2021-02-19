let nb_year = (p0, persent, aug, p) => {
    numOfYears = 1;
    currntP = p0 * (persent / 100 + 1) + aug;
    while (currntP < p) {
        currntP = currntP * (persent / 100 + 1) + aug;
        numOfYears++;
    }
    return numOfYears;
}
console.log(nb_year(1500, 5, 100, 5000));
console.log(nb_year(1500000, 2, 10000, 2000000));





