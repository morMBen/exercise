let name1 = {
    'name': 'Mor',
};
let name2 = {
    'name': 'noa',
};
let name3 = {
    'name': 'mika',
};

let names = new Map();
names.set(name1.name, 21917984);
names.set(name2.name, 302030234);
names.set(name3.name, 219542152);

for (const [ourName, ourIds] of names) {
    console.log(ourName, ourIds);
}