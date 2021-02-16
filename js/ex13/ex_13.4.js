const newei = (n) => {
    for (let i = 1; i <= n; i++) {
        let temp = `'${'#'.repeat(i)}${' '.repeat(n - i)}'`;
        console.log(temp);
    }
}

newei(5);

const newei2 = (n) => {
    for (let i = 1; i <= n; i++) {
        let temp = ``;
        for (let j = 1; j <= n; j++) {
            j <= i ? temp += '#' : temp += ' ';
        }
        console.log(temp);
    }
}

newei2(5);