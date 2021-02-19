const toCamelCase = (str) => {
    let temp = str.toLowerCase().split('');
    for (let i = 0; i < temp.length; i++) {
        if (i + 1 < temp.length && !(temp[i].match(/[a-zA-Z]/g))) {
            temp[i + 1] = temp[i + 1].toUpperCase();
        }
    }
    console.log(temp.join('').match(/[a-zA-Z]/g).join(''));

}

toCamelCase('dfas kkj9 pkjf -ii jkf - pd - is-d9i -9ifp j* akljf 4 iaj u4');