//*old way
let el;
el = document.getElementById("logo");
el = document.getElementsByClassName("menu-item");
el = document.getElementsByName("fname");
el = document.getElementsByTagName("div");

//* universal selector
//*
el = document.querySelector("*");
el = document.querySelectorAll("*");

//* node name
el = document.querySelector("p");
el = document.querySelectorAll("p");

// * class selector
el = document.querySelector(".primary-nav");
el = document.querySelectorAll(".menu-item");

//* ID selector
el = document.querySelector("#logo");

//* Attribute selectors

el = document.querySelector("[href='#home']");
el = document.querySelector("a[href='#home']");
el = document.querySelector("img[src='js.png']");
el = document.querySelector("input[name='fname']");
el = document.querySelector("[data-custom='hello']");
el = document.querySelector("[data-custom]");

//* grouping selectors

el = document.querySelectorAll("p,a");

//*advanced selectors
//* child combinator
//>
el = document.querySelectorAll("ul > li");

//! Difference between HTML collections and NodeLists
el = document.getElementsByClassName("menu-item");
el2 = document.querySelectorAll(".menu-item");
console.log(el);
console.log(el2);

//! HTML COLLECTIONS
//* only 2 methods
//* includes only the element itself
//* not included text nodes
//* they are live
el[0].remove();
console.log(el);

//! NodeLists
//* they have many more methods
//* includes the text node
//* they are static
// el2[0].remove();
// for (let key of el2.keys()) {
//   console.log(key);
// }
const x = Array.from(el);
const y = [...el];
[...el].forEach((ele) => {
  console.log(ele);
});

el2.forEach((el) => {
  console.log(el);
});
