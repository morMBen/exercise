function findSmallest(a, b, c) {
    debugger;
    if (a > b > c) {
        return c;
    } else if (a > c > b) {
        return a;
    } else {
        return b;
    }
}
findSmallest(52, 66, 2);

// 1 -  line no 10 - findSmallest = is not defind
// 2 - I use's the web dev tools sources..
// 3 - one 'l' was missing at line 10  in the function name.
