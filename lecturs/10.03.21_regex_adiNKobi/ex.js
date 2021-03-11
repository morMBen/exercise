// ! exs!!

//  0532004000
let num='0532004001';
let check=/\d{10}/;
console.log(check.test(num));
// 053-200-4000
let num1='053-200-4000';
let check1=/\d{3}-?\d{3}-?\d{4}/
console.log(check1.test(num1));

// 053-200 4000
let num2='053-200 4000';
let check2=/\d{3}[- ]?\d{3}[ -]?\d{4}/
console.log(check2.test(num2));

// +972-53-200 4000
let num3='+972-53-200 4000';
let check3=/(\+[0-9]{2})?[- ]?\d{2,3}[- ]?\d{3}[ -]?\d{4}$/
console.log(check3.test(num3));
