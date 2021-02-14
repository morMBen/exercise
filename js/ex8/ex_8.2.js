let obj = {};
console.time(obj);
for (let i = 0; i < 1000000; i++) {
    obj[`item${i}`] = `num ${i}`;
}
console.timeEnd(obj);

let myMap = new Map();
console.time(myMap);
for (let i = 0; i < 1000000; i++) {
    myMap.set(`item${i}`, `num${i}`);
}
console.timeEnd(myMap);

console.time(obj);
Object.hasOwnProperty(obj.item50000);
console.timeEnd(obj);

console.time(myMap);
myMap.has('item50000');
console.timeEnd(myMap);

console.time(obj);
obj.item1000001 = 'num1000001';
console.timeEnd(obj);

console.time(myMap);
myMap.set('item1000001', 'num1000001');
console.timeEnd(myMap);

console.time(obj);
delete obj.item1000001;
console.timeEnd(obj);

console.time(myMap);
myMap.delete('item1000001');
console.timeEnd(myMap);