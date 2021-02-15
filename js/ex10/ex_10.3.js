const data = [
    {
        name: "John",
        birthday: "1-1-1995",
        favoriteFoods: {
            meats: ["hamburgers", "sausages"],
            fish: ["salmon", "pike"],
        },
    },
    {
        name: "Mark",
        birthday: "10-5-1980",
        favoriteFoods: {
            meats: ["hamburgers", "steak", "lamb"],
            fish: ["tuna", "salmon", "barracuda"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["ham", "chicken"],
            fish: ["pike"],
        },
    },
    {
        name: "Thomas",
        birthday: "1-10-1990",
        favoriteFoods: {
            meats: ["bird", "rooster"],
            fish: ["salmon"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["hamburgers", "lamb"],
            fish: ["anchovies", "tuna"],
        },
    },
];

//1 
const getName = (arr) => {
    let tempArr = [];
    arr.forEach(arr => {
        tempArr.push({ name: arr.name })
    })
    return tempArr;
}

//2
const beforeAge = (arr) => {
    let tempArr = [];
    arr.forEach(arr => {
        tempArr2 = arr.birthday.split('-');
        tempArr2.pop() < 1990 ? tempArr.push(arr) : null;
    })
    return tempArr;
}


console.log(beforeAge(data));

//3

const pushToArr = (arr, arrToPush) => {
    arr.forEach(type => {
        arrToPush.push(type);
    })
};

const foodPresentNum = (arr) => {
    let tempArr = [];
    let tempObj = {};
    arr.forEach(foodType => {
        pushToArr(foodType.favoriteFoods.meats, tempArr);
        pushToArr(foodType.favoriteFoods.fish, tempArr);
    })
    tempArr.forEach(string => {
        !(tempObj[string]) ? tempObj[string] = 1 : tempObj[string]++;
    })
    return tempObj;
}

console.log(foodPresentNum(data));
