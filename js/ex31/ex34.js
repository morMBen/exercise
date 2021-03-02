const data = [];
const getData = async () => {
    for (let i = 1; i <= 10; i++) {
        const reqPerson = await fetch(`https://swapi.dev/api/people/${i}/ `);
        const dataP = await reqPerson.json();
        const reqWorld = await fetch(dataP.homeworld);
        const dataWorld = await reqWorld.json();
        data.push({
            name: dataP.name,
            hair: dataP.hair_color,
            planet: {
                name: dataWorld.name,
                population: dataWorld.population,
            }
        });
    }

    inputData();
};

const inputData = () => {
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');

    h3.textContent = 'Star Wars';

    document.body.appendChild(table);
    table.appendChild(tbody);
    tbody.appendChild(tr);
    tr.appendChild(td).colSpan = '5';
    td.appendChild(h3);
    for (person in data) {
        const tr = document.createElement('tr');
        tbody.appendChild(tr);
        const tdName = document.createElement('td');
        tdName.textContent = data[person].name
        tr.appendChild(tdName);

        const tdHair = document.createElement('td');
        tdHair.textContent = data[person].name
        tr.appendChild(tdHair);

        const tdHeight = document.createElement('td');
        tdHeight.textContent = data[person].name
        tr.appendChild(tdHeight);

        const tdPlanetName = document.createElement('td');
        tdPlanetName.textContent = data[person].name
        tr.appendChild(tdPlanetName);

        const tdPlanetPoPulation = document.createElement('td');
        tdPlanetPoPulation.textContent = data[person].name
        tr.appendChild(tdPlanetPoPulation);
    }
}
getData();














