//GETING START THE APP
//General object for the app - includs:
//array - counteis -  includ objects of regions

//pressing a button of region will do...:

//1)make a request from the countries/region api 
//      https://restcountries.herokuapp.com/api/v1/region/:region_name
// make a loop over eche country and set them in the right object with name and 
const statButtons = document.querySelector('.statistic_bottons');
const regionButtons = document.querySelectorAll('#region');
const statButton = document.querySelectorAll('#stat_button');
const ctx = document.getElementById('myChart').getContext('2d');
const contries = {};
const world = [];
const regions = {};
let sortedRegions = {};
let currntStat = 'confirmed';
let currentRegion = '';
let currntChartD = 'bar';
let chart;





async function fetchCountries() {
    const response = await fetch('https://api.allorigins.win/raw?url=https://restcountries.herokuapp.com/api/v1');
    const data = await response.json();
    data.forEach(e => {
        contries[e.cca2] = { name: e.name.common, region: e.region, subregion: e.subregion, };
    });
    await fetchworldStat();
}

async function fetchworldStat() {
    const responseWorldStat = await fetch(`https://corona-api.com/countries`);
    const regionData = await responseWorldStat.json();
    regionData.data.forEach(e => {
        if (regions[contries[e.code].region]) {
            regions[contries[e.code].region].push(e.code);
            world.push({
                name: e.name, id: e.code, region: contries[e.code].region,
                confirmed: e.latest_data.confirmed,
            });
        } else {
            regions[contries[e.code].region] = [];
            regions[contries[e.code].region].push(e.code);
            world.push({
                name: e.name, id: e.code, region: contries[e.code].region,
                confirmed: e.latest_data.confirmed,
            });
        }
        if (contries[e.code]) {
            contries[e.code].generalStat = {
                confirmed: e.latest_data.confirmed,
                deaths: e.latest_data.deaths,
                recovered: e.latest_data.recovered,
                critical: e.latest_data.critical,
            }
        }
    })

}


function getRegionCounrties(region = 'World') {
    if (region === 'World') {
        return sortedRegions.world.map(e => {
            return contries[e].name;
        })
    } else {
        return regions[region].map(e => {
            return contries[e].name;
        })
    }
}
function getRegionStat(region = 'World', stat = 'confirmed') {
    if (region === 'World') {
        return sortedRegions.world.map(e => {
            return contries[e].generalStat[stat];
        })
    } else {
        return regions[region].map(e => {
            return contries[e].generalStat[stat];
        })
    }
}


function checkStatOfContry() {
    chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: [''],
            datasets: [{
                label: '',
                backgroundColor: '#2caea3',
                borderColor: '#20639b',
                data: [''],
            }]
        },
        // Configuration options go here
        options: {
            responsive: false,
            // events: ['click'],
        }
    });
}

function setButtons() {
    regionButtons.forEach(e => {
        e.addEventListener('click', () => {
            console.log(getRegionStat(e.textContent, currntStat));
            chart.config.data.labels = getRegionCounrties(e.textContent, currntStat);
            chart.config.data.datasets[0].data = getRegionStat(e.textContent, currntStat);
            chart.config.data.datasets[0].label = `Number of ${currntStat} in ${e.textContent}`;
            // console.log(e.textContent);
            chart.update();
            if (e.textContent === 'world') {

            }
            else {
            }
            chart.update();
            if (statButtons.style.visibility === '') {
                statButtons.style.visibility = 'visible';
            }
            currentRegion = e.textContent;
            // console.log(currentRegion);
        })
    })
}
function setStatButton() {
    statButton.forEach(e => {
        e.addEventListener('click', () => {
            // console.log(e.textContent.toLowerCase());
            chart.config.data.datasets[0].data = getRegionStat(currentRegion, e.textContent.toLowerCase());
            chart.config.data.datasets[0].label = `Number of ${e.textContent.toLowerCase()} in ${currentRegion}`
            chart.update();
            currntStat = e.textContent.toLowerCase();
        })
    })
}


function getAllWorldArray() {
    const temp = [];
    for (const [key, value] of Object.entries(regions)) {
        value.forEach(e => {
            temp.push(e);
        })
    }
    return temp;
}

async function starter() {
    await fetchCountries();
    await checkStatOfContry();
    await theTop25();
    setButtons();
    setStatButton();
    // console.log(sortedRegions);
    // console.log(contries);
}
starter();




function theTop25() {
    // return world.sort((a, b) => b.confirmed - a.confirmed);
    world.sort((a, b) => b.confirmed - a.confirmed).forEach(e => {
        !sortedRegions[e.region] ? sortedRegions[e.region] = [] : null;
        if (sortedRegions[e.region].length < 20) {
            sortedRegions[e.region].push(e.id);
        }
        !sortedRegions.world ? sortedRegions.world = [] : null;
        if (sortedRegions.world.length < 20) {
            sortedRegions.world.push(e.id);
        }
    });
}











