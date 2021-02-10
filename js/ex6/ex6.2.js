
let people = ["Greg", "Mary", "Devon", "James"];
//1
// for (let i = 0; i < people.length; i++) {
//     console.log(people[i]);
// }
//mutele
//2
people.splice(0, 1);

//pini - 
//people.shift(); // מוחק את הערך ה ראשון במערך

//3
people.splice(2);
//4
people.unshift('Math');// מוסיף ערך אחד או יותר בתחילת המערך
//5
people.push('Moti');// מוסיף ערך אחד או יותר בסוף המערך

//loop
//6
// for (let i = 0; i < people.length; i++) {
//     console.log(people[i]);
//     people[i] !== 'Mary' ? null : i = people.length;
// }


//imutable
//7
let people2 = people.slice(0, 2);

//8
people.indexOf('Mary');

//9
people.indexOf('Foo');

//10
people = ["Greg", "Mary", "Devon", "James"];
people.splice(2, 1, 'Elizabeth', 'Artie');


let withBob = people.concat('Bob');


for (let i = 0; i < withBob.length; i++) {
    console.log(withBob[i]);
}
