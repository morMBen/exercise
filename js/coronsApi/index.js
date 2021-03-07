//GETING START THE APP
//General object for the app - includs:
//array - counteis -  includ objects of regions

//pressing a button of region will do...:

//1)make a request from the countries/region api 
//      https://restcountries.herokuapp.com/api/v1/region/:region_name
// make a loop over eche country and set them in the right object with name and 
const statButtons = document.querySelector('.statistic_bottons');
const selectors = document.querySelector('.selectors');
const regionButtons = document.querySelectorAll('#region');
const statButton = document.querySelectorAll('#stat_button');
const specific = document.querySelector('.specific');
const ctx = document.getElementById('myChart');
const ctx2 = document.getElementById('myChart2');
const contries = {};
const world = [];
const regions = {};
let sortedRegions = {};
let currntStat = 'confirmed';
let currentRegion = '';
let currntChartD = 'bar';
let selectorsVisibility = false;
let chart;





async function fetchCountries() {
    const response = await fetch('http://api.allorigins.win/raw?url=https://restcountries.herokuapp.com/api/v1');
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
            ctx2.style.visibility = 'hidden';
            chart.config.data.labels = getRegionCounrties(e.textContent, currntStat);
            chart.config.data.datasets[0].data = getRegionStat(e.textContent, currntStat);
            chart.config.data.datasets[0].label = `Number of ${currntStat} in ${e.textContent}`;
            chart.update();
            if (statButtons.style.visibility === '' || statButtons.style.visibility === 'hidden') {
                statButtons.style.visibility = 'visible';
                ctx.style.visibility = 'visible';
            }
            currentRegion = e.textContent;
            // console.log(e.textContent);
            selectors.innerHTML = '';
            setSelectors(e.textContent);
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
    theTop25();
    setButtons();
    setStatButton();
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

function setSelectors(region) {
    (region === 'World' ? world : regions[region]).forEach(e => {
        const button = document.createElement('button');
        button.textContent = contries[(region === 'World' ? e.id : e)].name;
        selectors.appendChild(button);
        button.addEventListener('click', () => {
            statButtons.style.visibility = 'hidden';
            ctx.style.visibility = 'hidden';
            getSpecific((region === 'World' ? e.id : e));
        })
    })
}

async function getSpecific(cName) {
    const response = await fetch(`https://corona-api.com/countries/${cName}`);
    const data = await response.json();
    console.log(data);
    specific.style.visibility = 'visible';
    ctx2.style.visibility = 'visible';
    chart2 = new Chart(ctx2, {
        type: 'bar',

        // The data for our dataset
        data: {
            labels: ['Total cases', 'New cases', 'Total deaths', 'New deaths', 'Total recovered', 'In critical condition'],
            datasets: [{
                label: `Statistics of ${contries[cName].name} `,
                backgroundColor: ['#173F5F', '#20639B', '#ED553B', '#F6D55C', '#3CAEA3', 'red'],
                borderColor: '#20639b',
                data: [data.data.latest_data.confirmed, data.data.today.confirmed, data.data.latest_data.deaths, data.data.today.deaths, data.data.latest_data.recovered, data.data.latest_data.critical],
            }]
        },
        // Configuration options go here
        options: {
            responsive: false,
            borderAlign: 'center'
            // events: ['click'],
        }
    });
}









