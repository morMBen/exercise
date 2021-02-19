let doItString = (variable) => {
    return (typeof (variable) === 'string' && variable !== '') ? 'Yes' : 'No';
}


console.log(doItString(135));
console.log(doItString(false));
console.log(doItString(''));
console.log(doItString(undefined));
console.log(doItString(null));
console.log(doItString('acsc'));

