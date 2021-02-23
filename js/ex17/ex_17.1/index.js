const buttons = document.querySelectorAll('.test');
let minus, plus;
buttons.forEach(el => {
    el.innerText === '-' ? minus = el : plus = el;
});

let getFontSize = (el) => {
    return window.getComputedStyle(el).getPropertyValue('font-size');
}

const onlyNumSize = (size) => {
    return Number(size.split('').filter(s => {
        return s >= 0;
    }).join(''));
}

const onlyStrType = (size) => {
    return size.split('').filter(s => {
        return s >= 'a';
    }).join('');
}

minus.addEventListener('click', () => {

    let type = onlyStrType(getFontSize(minus));
    let num = onlyNumSize(getFontSize(minus));
    if (num < 100) {
        num += 2;
        minus.style = `font-size: ${num}${type}`;
    }
});

plus.addEventListener('click', () => {

    let type = onlyStrType(getFontSize(plus));
    let num = onlyNumSize(getFontSize(plus));
    if (num > 5) {
        num -= 2;
        plus.style = `font-size: ${num}${type}`;
    }
});

