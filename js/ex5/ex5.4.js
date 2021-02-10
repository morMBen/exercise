let colors = (color) => {
    switch (color) {
        case 'yellow':
        case 'pink':
        case 'orange':
            return 'light color';
        case 'blue':
        case 'purple':
        case 'brown':
            return 'dark color';
        default:
            return 'Unknown color';
    }
}

console.log(colors('yellow'));
console.log(colors('pink'));
console.log(colors('orange'));
console.log(colors('blue'));
console.log(colors('purple'));
console.log(colors('brown'));
console.log(colors('verde'));