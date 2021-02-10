//1
let arr = new Array(100).fill({ obg1: 'brr' });
console.log(arr);

//2
//Shorter way  
let range1 = Array.from({ length: 100 }, (item, index) => {
    return index + 1;
});
//Proper way 
let creatRange = (start, end) => {
    let range2 = Array.from({ length: end - start + 1 }, (item, index) => {
        return index + start;
    });
    return range2;

}
console.log(range1);
console.log(creatRange(1, 100));

//3
let cars = {
    1: 'honda',
    2: 'nissan',
    3: 'toyota'
}
let carNames = Object.values(cars);
console.log(carNames);

//4
let newObj1 = Object.assign({}, carNames);
let newObj2 = Object.assign({ ...carNames });
console.log(newObj1);
console.log(newObj2);

//5
console.log(Array.isArray(carNames));

//6
let newArr = [...carNames, 'volvo'];
console.log(newArr);
console.log(carNames);