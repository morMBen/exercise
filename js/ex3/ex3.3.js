(function () {
    'use strict'
    //function decleration
    function percentageOfWorld1(population) {
        let worldPopulation = 7900;
        return (population / worldPopulation * 100).toFixed(2);
    }

    console.log(percentageOfWorld1(1300));

    let israel = percentageOfWorld1(8);
    let spain = percentageOfWorld1(46);
    let costaRica = percentageOfWorld1(5);

    console.log(`Israel population is ${israel}% of the world populatin.`);
    console.log(`Spain population is ${spain}% of the world populatin.`);
    console.log(`Costa Rica population is ${costaRica}% of the world populatin.`);



    // function expretion
    let percentageOfWorld2 = function (population) {
        let worldPopulation = 7900;
        return (population / worldPopulation * 100).toFixed(2);
    }

    let usa = percentageOfWorld2(328);
    console.log(`United States population is ${usa}% of the world populatin.`);
    let uk = percentageOfWorld2(56);
    console.log(`United kingdom population is ${uk}% of the world populatin.`);
    let india = percentageOfWorld2(1353);
    console.log(`India population is ${india}% of the world populatin.`);

})();
