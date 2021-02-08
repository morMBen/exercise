(function () {




    let sevenBoom = (n) => {
        for (let i = 1; i <= n; i++) {
            if (i % 7 == 0 && String(i).indexOf(7) !== -1) {
                console.log('BOOM-BOOM');
            } else if (i % 7 === 0 || String(i).indexOf(7) !== -1) {
                console.log('BOOM');
            } else {
                console.log(i);
            }
        }
    }
    sevenBoom(100);



})();






const boom = (n) => {
    for (let i = 1; i <= n; i++) {
        if ((i % 7 == 0) || (String(i).split("").includes('7'))) {
            console.log("Boom")
        } else console.log(i)
    }
};

boom(100);
