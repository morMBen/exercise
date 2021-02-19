const centuryFromYear = (year) => {
    if (year > 0) {
        return console.log(Math.floor(year / 100) + 1);
    }
    return console.log(`${Math.floor(year / 100) * -1 + 1} BC`);

}
centuryFromYear(2000);