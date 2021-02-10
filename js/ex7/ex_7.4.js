const candyStore = {
    candies: [
        {
            name: "mint gum",
            id: "as12f",
            price: 2,
            amount: 2
        },
        {
            name: "twix",
            id: "5hd7y",
            price: 5,
            amount: 4
        },
    ],
    cashRegister: 200,
}
getCandy = (candyStore, id) => candyStore.candies.find(item => item.id === id);

getPrice = (candyStore, id) => getCandy(candyStore, id).price;

addCandy = (candyStore, id, name, price) => {
    candyStore.candies.push({
        name: name,
        id: id,
        price: price,
        amount: 1,
    })
}

function buy(candyStore, id) {
    candyStore.cashRegister = candyStore.cashRegister - getPrice(candyStore, id);
    getCandy(candyStore, id).amount - 1;
}
addCandy(candyStore, '51s4e', 'smarties', 5)
console.log(getCandy(candyStore, '5hd7y'));
console.log(getPrice(candyStore, 'as12f'));
buy(candyStore, '5hd7y');
console.log(candyStore);



