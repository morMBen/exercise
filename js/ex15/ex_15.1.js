// //1

// function funcA() {
//     var a = 1;
//     console.log(a);
//     console.log(foo());
//     function foo() {
//         return 2;
//     }
// }
// funcA();

// //2

// var fullName = 'John Doe';
// var obj = {
//     fullName: 'Colin Ihrig',
//     prop: {
//         fullName: 'Aurelio De Rosa',
//         getFullName: function () {
//             return this.fullName;
//         }
//     }
// };
// console.log(obj.prop.getFullName());
// var test = obj.prop.getFullName();
// console.log(test);

// 3

// function funcB() {
//     var a = b = 0;
//     a++;
//     return a;
// }

// funcB();
// console.log(typeof a);
// console.log(typeof b);

// //4
// function funcC() {
//     console.log("1");
// }
// funcC();

// function funcC() {
//     console.log("2");
// }
// funcC();

//5
// function funcD1() {
//     d = 1;
// }
// funcD1();

// console.log(d);

// function funcD2() {
//     let e = 1;
// }
// funcD2();

// console.log(e);

function funcE() {
    console.log("Value of f in local scope: ", f);
}
console.log("Value of f in global scope: ", f);
var f = 1;
funcE();