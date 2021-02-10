// language =string
//isIsland = boolean
//population = intiger
//country = string


const contryToLiveIn = (language, isIsland, population, country) => {
    lang = 'English';
    doIsIsland = false;
    landPoPulation = 50;
    return (language === lang && isIsland === doIsIsland && population < landPoPulation) ? `You should live in ${country}` : `${country} does not meet your criteria`;

}

console.log(contryToLiveIn('English', false, 46, 'Republic of Uganda'));
