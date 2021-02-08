leapYear = (year) => {
    if (year % 100 === 0) {
        return year % 400 === 0 ? true : false;
    }
    else {
        return year % 4 === 0 ? true : false;
    }
}
console.log(leapYear(2012) === true ? 'It is indeed a leap year' : 'This is not a leap year.');