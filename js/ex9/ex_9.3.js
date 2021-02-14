const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];


console.log(foods.sort(function (a, b) {
    if (a.firstname < b.firstname) { return -1; }
    if (a.firstname > b.firstname) { return 1; }
    return 0;
}));
