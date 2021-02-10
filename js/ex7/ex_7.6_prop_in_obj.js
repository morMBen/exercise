
let obj1 = { name: 'Mordechai', city: 'Israel', age: 34, };

const Swapping = function (obj) {
    let newObj = {};
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            newObj[obj[prop]] = prop;
        }
    }
    return newObj;
};

console.log(Swapping(obj1));