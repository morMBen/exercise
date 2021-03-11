//!the goal:to find content from a larger content

//!Syntax:

// the litiral way :
/a/;

// the constructer way:
// new RegExp('content','flag');

// לא להתייחס כרגע ל flag

//!diffrent methods:

// test()
// syntex:
console.log(/a/.test('abc')); //true
console.log(/a/.test('ABC')); //False-case sensitive
// ?return bollian if there is even one match

// ! שאלות+זמן

// search()
// syntex:
let check = /a/;
console.log('bcA'.indexOf('a')); //-1
// ? return the index of the first! match or -1
// ? search vs findIndex -findIndex capable getting second argu(starting point)
// ?,faster,can't use regex,search doesn't have to be case sensitive.
console.log('bAca'.search(check)); //3
console.log('bca'.search(check)); //2

// ! שאלות+זמן

// !flags

// syntex
// let exampleForFlag=/content/flag

//flag i-case sensitive
let check_I = /a/;
let text_I = 'A big one';
console.log(check_I.test(text_I)); //FALSE
check_I = /a/i;
console.log(check_I.test(text_I)); //true

// ! שאלות+זמן

// flag g-for multi matches
// to change the letter "b" in the letter "d"
let text_g = 'bcbcbcbc';
// text1.replaceAll(check2,'c')//error
let check_g = /b/;
console.log(text_g.replace(check_g, 'd')); //replace the first
let check2_g = /b/g;
console.log(text_g.replace(check2_g, 'd')); //replaceall
// להנתסח בצורה:"מחליף את כל ההתאמות לregex"

// ! שאלות+זמן

// ! איך g מחזיר תוצאות
// example for flag m
let text = `The movie of "THE EVENGERS".
Is the best`;
console.log(/I/.test(text)); //false new line

// signs
// ? ^
let start = /^abc/;
start.test('abcid'); //true
start.test('1abc'); //false
start.test('hello abc'); //true

// ? ?
let maybe = /a?b/;
maybe.test('b'); //true
maybe.test('a'); //false

// ? $
let end = /ab$/;
end.test('abc'); //false
end.test('abcab'); //true
end.test('abcb'); //false

// ? {}
let multy = /a{3}/;
multy.test('abacad'); //false
multy.test('abaaad'); //true

// ? []
let group = /[a-z]/;
group.test('a1'); //true
group.test('A1'); //false

let group2 = /[a-z]{2}/;
group.test('a1'); //false
group.test('ab1'); //true
group.test('A1'); //false

//? [^]
let group3 = /[^a-z]/;
group3.test('abc'); //false
group3.test('abcA'); //true
group3.test('abc1'); //true

// ! שאלות+זמן
// ?carechters
// \w
// ==[0-9a-zA-Z]
// \W
// ==[^0-9a-zA-Z]
// \d
// ==[0-9]
