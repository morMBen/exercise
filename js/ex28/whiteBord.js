// let myObj = {
//     me: 'moti',
//     last: 'ben',
//     getMe: function () {
//         let getMe = this.me + ' ' + this.last;
//     }
// }
// let logName = function ().
let arr = [1, 2];
let arr2 = [3, 4];
arr.push.apply(arr, arr2);
console.log(arr);