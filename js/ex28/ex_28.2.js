const property = {
    name: 'Mor',
    printName: function () {
        console.log(this.name);
    },
    printNameAfterSecond() {
        setTimeout(this.printName.bind(property), 1000)
    },
}

property.printName();
property.printNameAfterSecond();