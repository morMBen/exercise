const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];

//1 
foods.sort();
console.log(foods);


//2
foods.sort((a, b) => {
    if (a.charAt(0) > b.charAt(0)) { return -1 };
    if (a.charAt(0) < b.charAt(0)) { return 1 };
    return 0;
});
console.log(foods);

//3
const foodsWithUpperCase = [
    "falafel",
    "Sabich",
    "hummus",
    "pizza with extra pineapple",
];

//b1 - descending to ascending
foodsWithUpperCase.sort((a, b) => {
    if (a.toLowerCase() < b.toLowerCase()) { return -1 };
    if (a.toLowerCase() > b.toLowerCase()) { return 1 };
    return 0;
});
console.log(foodsWithUpperCase);

//b2 ascending to ascending
foodsWithUpperCase.sort((a, b) => {
    if (a.toLowerCase() > b.toLowerCase()) { return -1 };
    if (a.toLowerCase() < b.toLowerCase()) { return 1 };
    return 0;
});
console.log(foodsWithUpperCase);

//c longest word
const words = ["apple", "supercalifragilisticexpialidocious",
    "hi", "zoo"];
words.sort((a, b) => a.length - b.length);
console.log(words);