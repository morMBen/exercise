const food = ["Noodle", "Ice-cream", "Pasta", "Olives", "Meat",
    "Cucumber"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives",
    "Hamburgers"];


const compare = (arr, arr2) => {
    let tempArr = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr[i] === arr2[j]) {
                tempArr.includes(arr[i]) ? null : tempArr.push(arr[i]);
            }
        }
    }
    return tempArr.length ? tempArr : false;
}
console.log(compare(food, food1));